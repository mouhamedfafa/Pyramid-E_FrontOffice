import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../../shared/models/user.models';
import { Client, Company } from '../../../shared/models/client-company.models';
import { UserService } from '../../../shared/service/user/user.service';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { OrganisationService, Ref } from '../../../shared/service/organisation/organisation.service';
import { SelecteurDirectionComponent } from '../../../shared/components/organisation/selecteur-direction/selecteur-direction.component';
import { sortRoles } from '../../../shared/utils/role-sort.utils';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SelecteurDirectionComponent],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent implements OnInit, OnChanges {
  @Input() visible: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() userData: User | null = null;
  /** Utilisateurs déjà chargés par la liste parente : candidats au rôle de manager (N+1). */
  @Input() utilisateurs: User[] = [];
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<void>();

  userForm!: FormGroup;
  loading = false;
  errorMessage = '';
  clients: Client[] = [];
  companies: Company[] = [];
  roles: any[] = [];
  showPasswordFields = false;

  // ── Manager (N+1) ──
  managerSearch = '';
  managerDropdownOpen = false;
  /** N+1 que donnerait la structure (mode automatique). */
  managerCalcule: Ref | null = null;
  calculManager = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private clientCompanyService: ClientCompanyService,
    private organisationService: OrganisationService
  ) {}

  ngOnInit() {
    this.initForm();
    this.loadClients();
    this.loadCompanies();
    this.loadRoles();
  }

  /** Entreprise dont on affiche les directions : celle du formulaire, sinon celle du RH connecté. */
  get entrepriseCible(): number | null {
    return Number(this.userForm?.get('entreprise_id')?.value) || this.userData?.entreprise_id || OrganisationService.entrepriseCourante();
  }

  get modeManager(): 'auto' | 'manuel' {
    return this.userForm?.get('manager_mode')?.value === 'manuel' ? 'manuel' : 'auto';
  }

  /** Recalcule le N+1 dérivé de la direction choisie. */
  calculerManager(): void {
    const entrepriseId = this.entrepriseCible;
    const directionId = this.userForm?.get('direction_id')?.value || null;
    if (!entrepriseId || !directionId) {
      this.managerCalcule = null;
      return;
    }
    this.calculManager = true;
    this.organisationService.managerAttendu(entrepriseId, directionId, this.userData?.id).subscribe({
      next: (res) => { this.managerCalcule = res.manager; this.calculManager = false; },
      error: () => { this.managerCalcule = null; this.calculManager = false; },
    });
  }

  /** Le N+1 manuel choisi s'écarte-t-il de la ligne hiérarchique de la direction ? */
  get managerHorsStructure(): boolean {
    const choisi = this.userForm?.get('manager_id')?.value;
    return this.modeManager === 'manuel' && !!this.managerCalcule && !!choisi && choisi !== this.managerCalcule.id;
  }

  loadRoles(): void {
    this.userService.getRoles().subscribe({
      next: (response: any) => {
        let roles: any[] = [];
        if (Array.isArray(response)) roles = response;
        else if (response?.data) roles = response.data;
        else if (response?.roles) roles = response.roles;
        this.roles = sortRoles(roles);
      },
      error: () => {
        this.roles = [
          { id: 4, name: 'Responsable RH' },
          { id: 5, name: 'Responsable RH Groupe' },
          { id: 3, name: 'Formateur' },
          { id: 2, name: 'Employé' },
        ];
      }
    });
  }

  
  ngOnChanges() {
    this.errorMessage = '';
    if (this.visible && this.userData && this.isEditMode) {
      this.showPasswordFields = false;
      this.initForm();
      this.populateForm();
    } else if (this.visible && !this.isEditMode) {
      this.showPasswordFields = true;
      this.initForm();
      this.resetForm();
    }
  }

  static passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const val = control.value;
    if (!val) return null;
    const errors: ValidationErrors = {};
    if (val.length < 8)            errors['minLength'] = true;
    if (!/[A-Z]/.test(val))        errors['noUppercase'] = true;
    if (!/[a-z]/.test(val))        errors['noLowercase'] = true;
    if (!/[0-9]/.test(val))        errors['noDigit'] = true;
    if (!/[^A-Za-z0-9]/.test(val)) errors['noSpecial'] = true;
    return Object.keys(errors).length ? errors : null;
  }

  get pw(): string { return this.userForm?.get('password')?.value || ''; }
  get pwHasMinLength(): boolean { return this.pw.length >= 8; }
  get pwHasUppercase(): boolean { return /[A-Z]/.test(this.pw); }
  get pwHasLowercase(): boolean { return /[a-z]/.test(this.pw); }
  get pwHasDigit(): boolean { return /[0-9]/.test(this.pw); }
  get pwHasSpecial(): boolean { return /[^A-Za-z0-9]/.test(this.pw); }

  initForm() {
    const pwValidators = (!this.isEditMode) ? [Validators.required, UserAddComponent.passwordStrengthValidator] : [];
    this.userForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      numero: [''],
      matricule: [''],
      direction: [''],
      direction_id: [null],
      fonction: [''],
      role_id: ['', Validators.required],
      entreprise_id: [''],
      manager_id: [null],
      manager_mode: ['manuel'],
      statut: [1, Validators.required],
      password: ['', pwValidators],
      password_confirmation: ['', pwValidators],
    });
    this.userForm.addValidators(this.passwordMatchValidator);
    this.userForm.get('direction_id')!.valueChanges.subscribe(() => this.calculerManager());
    this.userForm.get('entreprise_id')!.valueChanges.subscribe(() => {
      this.userForm.patchValue({ direction_id: null }, { emitEvent: false });
      this.calculerManager();
    });
  }

  private passwordMatchValidator(control: { get: (k: string) => any }) {
    const pw  = control.get('password')?.value;
    const pwc = control.get('password_confirmation')?.value;
    if (!pw && !pwc) return null;
    return pw === pwc ? null : { passwordMismatch: true };
  }

  togglePasswordFields(): void {
    this.showPasswordFields = !this.showPasswordFields;
    const pwValidators = this.showPasswordFields ? [Validators.required, UserAddComponent.passwordStrengthValidator] : [];
    this.userForm.get('password')?.setValidators(pwValidators);
    this.userForm.get('password_confirmation')?.setValidators(pwValidators);
    this.userForm.get('password')?.updateValueAndValidity();
    this.userForm.get('password_confirmation')?.updateValueAndValidity();
    this.userForm.updateValueAndValidity();
    if (!this.showPasswordFields) {
      this.userForm.patchValue({ password: '', password_confirmation: '' });
    }
  }

  loadClients() {
    this.clientCompanyService.getClients().subscribe({
      next: (response) => {
        this.clients = response.clients || response.data || [];
      },
      error: (error) => console.error('Erreur chargement clients:', error)
    });
  }

  loadCompanies() {
    this.clientCompanyService.getMyCompanies().subscribe({
      next: (response) => {
        this.companies = response.entreprises || response.data || [];
      },
      error: (error) => console.error('Erreur chargement entreprises:', error)
    });
  }

  populateForm() {
    if (this.userData) {
      const rawRoleId = this.userData.role
        ? (typeof this.userData.role === 'object' ? (this.userData.role as any).id : this.userData.role_id)
        : this.userData.role_id;

      this.userForm.patchValue({
        nom: this.userData.nom || '',
        prenom: this.userData.prenom || '',
        email: this.userData.email || '',
        numero: this.userData.numero || '',
        matricule: this.userData.matricule || '',
        direction: this.userData.direction || '',
        direction_id: this.userData.direction_id || null,
        fonction: this.userData.fonction || '',
        role_id: rawRoleId ? String(rawRoleId) : '',
        entreprise_id: this.userData.entreprise_id || '',
        manager_id: this.userData.manager_id ?? null,
        // Sans N+1 : on part du mode manuel (choix explicite du manager)
        manager_mode: this.userData.manager_id ? (this.userData.manager_mode ?? 'manuel') : 'manuel',
        statut: this.userData.statut
      }, { emitEvent: false });
      this.userForm.patchValue({ direction_id: this.userData.direction_id || null });
    }
    this.managerSearch = '';
    this.managerDropdownOpen = false;
  }

  resetForm() {
    this.userForm.reset({ statut: 1, manager_id: null, manager_mode: 'manuel' }, { emitEvent: false });
    this.managerCalcule = null;
    this.managerSearch = '';
    this.managerDropdownOpen = false;
  }

  choisirModeManager(mode: 'auto' | 'manuel'): void {
    this.userForm.patchValue({ manager_mode: mode });
    if (mode === 'manuel' && !this.userForm.get('manager_id')?.value && this.managerCalcule) {
      // Point de départ : le N+1 calculé, que l'on peut ensuite remplacer
      this.userForm.patchValue({ manager_id: this.managerCalcule.id });
    }
  }

  // ════════════════════════════════════════════
  // MANAGER (N+1)
  // ════════════════════════════════════════════

  /** Ids de toute la sous-arborescence de l'utilisateur édité (ne peuvent pas devenir son manager : cycle). */
  private get idsSubordonnes(): Set<number> {
    const ids = new Set<number>();
    if (!this.userData?.id) return ids;
    const aTraiter = [this.userData.id];
    while (aTraiter.length) {
      const courant = aTraiter.pop()!;
      for (const u of this.utilisateurs) {
        if (u.manager_id === courant && !ids.has(u.id)) {
          ids.add(u.id);
          aTraiter.push(u.id);
        }
      }
    }
    return ids;
  }

  /** Candidats : même entreprise, pas soi-même, pas un subordonné. Le backend revalide. */
  get managerCandidats(): User[] {
    const entrepriseId = Number(this.userForm?.get('entreprise_id')?.value) || this.userData?.entreprise_id || null;
    const exclus = this.idsSubordonnes;
    const q = this.managerSearch.trim().toLowerCase();

    return this.utilisateurs
      .filter(u => u.id !== this.userData?.id && !exclus.has(u.id))
      .filter(u => !entrepriseId || u.entreprise_id === entrepriseId)
      .filter(u => !q
        || `${u.prenom ?? ''} ${u.nom ?? ''}`.toLowerCase().includes(q)
        || (u.name ?? '').toLowerCase().includes(q)
        || (u.matricule ?? '').toLowerCase().includes(q)
        || (u.email ?? '').toLowerCase().includes(q))
      .slice(0, 8);
  }

  get managerSelectionne(): User | null {
    const id = this.userForm?.get('manager_id')?.value;
    if (!id) return null;
    return this.utilisateurs.find(u => u.id === id)
      ?? (this.userData?.manager && this.userData.manager.id === id ? this.userData.manager as unknown as User : null);
  }

  /** N-1 directs de l'utilisateur édité (information). */
  get collaborateursDirects(): User[] {
    if (!this.userData?.id) return [];
    return this.utilisateurs.filter(u => u.manager_id === this.userData!.id);
  }

  choisirManager(u: User): void {
    this.userForm.patchValue({ manager_id: u.id });
    // Le collaborateur rejoint la direction / entité de son manager (si celui-ci en a une)
    if (u.direction_id) {
      this.userForm.patchValue({ direction_id: u.direction_id });
    }
    this.managerSearch = '';
    this.managerDropdownOpen = false;
  }

  retirerManager(): void {
    this.userForm.patchValue({ manager_id: null });
  }

  fermerDropdownManager(): void {
    // Laisse le temps au clic sur une option d'être pris en compte
    setTimeout(() => this.managerDropdownOpen = false, 150);
  }

  nomUtilisateur(u: { prenom?: string; nom?: string; name?: string } | null | undefined): string {
    if (!u) return '';
    return `${u.prenom ?? ''} ${u.nom ?? ''}`.trim() || u.name || '';
  }

  saveUser() {
  this.errorMessage = '';
  if (this.userForm.invalid) {
    Object.keys(this.userForm.controls).forEach(key => {
      this.userForm.get(key)?.markAsTouched();
    });
    if (this.userForm.hasError('passwordMismatch')) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
    } else {
      const missing: string[] = [];
      if (this.userForm.get('nom')?.invalid)    missing.push('Nom');
      if (this.userForm.get('prenom')?.invalid) missing.push('Prénom');
      if (this.userForm.get('email')?.invalid)  missing.push('Email valide');
      if (this.userForm.get('role_id')?.invalid) missing.push('Rôle');
      if (this.userForm.get('password')?.invalid) missing.push('Mot de passe (min. 8 caractères)');
      this.errorMessage = missing.length
        ? `Champs obligatoires manquants : ${missing.join(', ')}`
        : 'Veuillez corriger les erreurs dans le formulaire.';
    }
    return;
  }

  this.loading = true;
  const formData = { ...this.userForm.value };

  // Convertir les valeurs en nombres
  if (formData.role_id) {
    formData.role_id = parseInt(formData.role_id);
  }
  if (formData.statut !== undefined && formData.statut !== '') {
    formData.statut = parseInt(formData.statut);
  }
  if (formData.entreprise_id) {
    formData.entreprise_id = parseInt(formData.entreprise_id);
  } else {
    delete formData.entreprise_id;
  }
  // null explicite = retirer la direction (en édition) ; l'ancien champ texte n'est plus utilisé
  formData.direction_id = formData.direction_id ? Number(formData.direction_id) : null;
  delete formData.direction;
  // Mode auto : le N+1 est dérivé de la direction par le serveur
  if (formData.manager_mode === 'auto') {
    delete formData.manager_id;
  } else {
    formData.manager_id = formData.manager_id ? Number(formData.manager_id) : null;
  }

  // Ajouter created_by (supposons que c'est l'utilisateur connecté avec ID 1)
  formData.created_by = 1;

  if (this.isEditMode && this.userData) {
    if (!formData.password) {
      delete formData.password;
      delete formData.password_confirmation;
    }

    this.userService.updateUser(this.userData.id, formData).subscribe({
      next: () => { this.loading = false; this.onSave.emit(); this.hideDialog(); },
      error: (error) => {
        this.errorMessage = this.parseApiError(error);
        this.loading = false;
      }
    });
  } else {
    this.userService.createUser(formData).subscribe({
      next: () => { this.loading = false; this.onSave.emit(); this.hideDialog(); },
      error: (error) => {
        this.errorMessage = this.parseApiError(error);
        this.loading = false;
      }
    });
  }
}

  private parseApiError(error: any): string {
    const errs = error?.error?.errors;
    if (errs) {
      const labels: Record<string, string> = {
        email:     'Email',
        numero:    'Numéro de téléphone',
        matricule: 'Matricule',
        manager_id: 'Manager (N+1)',
      };
      const duplicateMap: Record<string, string> = {
        'has already been taken': 'déjà utilisé',
        'unique':                  'déjà utilisé',
      };
      const messages: string[] = [];
      for (const [field, fieldErrors] of Object.entries(errs)) {
        const label = labels[field] || field;
        const arr = Array.isArray(fieldErrors) ? fieldErrors : [fieldErrors];
        for (const msg of arr as string[]) {
          const isDuplicate = Object.keys(duplicateMap).some(k => msg.toLowerCase().includes(k));
          messages.push(isDuplicate
            ? `${label} déjà utilisé dans le système`
            : `${label} : ${msg}`);
        }
      }
      if (messages.length) return messages.join(' · ');
    }
    return error?.error?.message || 'Erreur lors de l\'enregistrement.';
  }

  hideDialog() {
    this.resetForm();
    this.onClose.emit();
  }
}