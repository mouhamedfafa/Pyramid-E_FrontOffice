import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../../shared/models/user.models';
import { Client, Company } from '../../../shared/models/client-company.models';
import { UserService } from '../../../shared/service/user/user.service';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { sortRoles } from '../../../shared/utils/role-sort.utils';
import { NoeudOrganigramme, OrganisationService, Ref } from '../../../shared/service/organisation/organisation.service';
import { SelecteurDirectionComponent } from '../../../shared/components/organisation/selecteur-direction/selecteur-direction.component';

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
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<void>();

  userForm!: FormGroup;
  loading = false;
  errorMessage = '';
  clients: Client[] = [];
  companies: Company[] = [];
  roles: any[] = [];
  showPasswordFields = false;

  // Organisation : direction, N+1 automatique (selon la direction) ou manuel
  managerCalcule: Ref | null = null;
  calculManager = false;
  personnesEntreprise: { id: number; nom: string; fonction: string | null }[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private clientCompanyService: ClientCompanyService,
    private organisationService: OrganisationService
  ) {}

  get entrepriseChoisie(): number | null {
    return Number(this.userForm?.get('entreprise_id')?.value) || null;
  }

  get modeManager(): 'auto' | 'manuel' {
    return this.userForm?.get('manager_mode')?.value === 'manuel' ? 'manuel' : 'auto';
  }

  get managerHorsStructure(): boolean {
    const choisi = Number(this.userForm?.get('manager_id')?.value) || null;
    return this.modeManager === 'manuel' && !!this.managerCalcule && !!choisi && choisi !== this.managerCalcule.id;
  }

  /** Collaborateurs de l'entreprise choisie (candidats N+1 en mode manuel). */
  private chargerPersonnes(): void {
    const entrepriseId = this.entrepriseChoisie;
    this.personnesEntreprise = [];
    if (!entrepriseId) return;
    this.organisationService.organigramme(entrepriseId, 'personnes').subscribe({
      next: (res) => {
        this.personnesEntreprise = (res.noeuds || [])
          .filter((n: NoeudOrganigramme) => n.type === 'personne' && n.user_id && n.user_id !== this.userData?.id)
          .map((n: NoeudOrganigramme) => ({ id: n.user_id!, nom: n.libelle || '', fonction: n.sous_titre ?? null }))
          .sort((a, b) => a.nom.localeCompare(b.nom));
      },
    });
  }

  calculerManager(): void {
    const entrepriseId = this.entrepriseChoisie;
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

  choisirModeManager(mode: 'auto' | 'manuel'): void {
    this.userForm.patchValue({ manager_mode: mode });
    if (mode === 'manuel' && !this.userForm.get('manager_id')?.value && this.managerCalcule) {
      this.userForm.patchValue({ manager_id: this.managerCalcule.id });
    }
  }

  ngOnInit() {
    this.initForm();
    this.loadClients();
    this.loadCompanies();
    this.loadRoles();
  }

  loadRoles(): void {
    this.userService.getRoles().subscribe({
      next: (response: any) => {
        let roles: any[] = [];
        if (Array.isArray(response)) roles = response;
        else if (response?.data)  roles = response.data;
        else if (response?.roles) roles = response.roles;
        this.roles = sortRoles(roles);
      },
      error: () => {
        this.roles = [
          { id: 1, name: 'Super Admin' },
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
    const pwValidators = !this.isEditMode ? [Validators.required, UserAddComponent.passwordStrengthValidator] : [];
    this.userForm = this.fb.group({
      nom:                  ['', [Validators.required, Validators.minLength(2)]],
      prenom:               ['', [Validators.required, Validators.minLength(2)]],
      email:                ['', [Validators.required, Validators.email]],
      numero:               [''],
      matricule:            [''],
      direction_id:         [null as number | null],
      fonction:             [''],
      role_id:              ['', Validators.required],
      entreprise_id:        [''],
      manager_mode:         ['auto'],
      manager_id:           [null as number | null],
      statut:               [1, Validators.required],
      password:             ['', pwValidators],
      password_confirmation:['', pwValidators],
    });
    this.userForm.addValidators(this.passwordMatchValidator);
    this.userForm.get('direction_id')!.valueChanges.subscribe(() => this.calculerManager());
    this.userForm.get('entreprise_id')!.valueChanges.subscribe(() => {
      // Changement d'entreprise : la direction et le N+1 ne sont plus valables
      this.userForm.patchValue({ direction_id: null, manager_id: null }, { emitEvent: false });
      this.managerCalcule = null;
      this.chargerPersonnes();
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
      next: (response) => { this.clients = response.clients || response.data || []; },
      error: () => {}
    });
  }

  loadCompanies() {
    this.clientCompanyService.getCompanies().subscribe({
      next: (response) => { this.companies = response.entreprises || response.data || []; },
      error: () => {}
    });
  }

  populateForm() {
    if (!this.userData) return;
    const rawRoleId = this.userData.role
      ? (typeof this.userData.role === 'object' ? (this.userData.role as any).id : this.userData.role_id)
      : this.userData.role_id;
    this.userForm.patchValue({
      nom:          this.userData.nom          || '',
      prenom:       this.userData.prenom       || '',
      email:        this.userData.email        || '',
      numero:       this.userData.numero       || '',
      matricule:    this.userData.matricule    || '',
      fonction:     this.userData.fonction     || '',
      role_id:      rawRoleId ? String(rawRoleId) : '',
      entreprise_id:this.userData.entreprise_id || '',
      manager_mode: this.userData.manager_mode ?? (this.userData.manager_id ? 'manuel' : 'auto'),
      manager_id:   this.userData.manager_id ?? null,
      statut:       this.userData.statut,
    }, { emitEvent: false });
    this.userForm.patchValue({ direction_id: this.userData.direction_id ?? null });
    this.chargerPersonnes();
  }

  resetForm() {
    this.userForm.reset({ statut: 1, manager_mode: 'auto', manager_id: null, direction_id: null }, { emitEvent: false });
    this.managerCalcule = null;
    this.personnesEntreprise = [];
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
        if (this.userForm.get('nom')?.invalid)     missing.push('Nom');
        if (this.userForm.get('prenom')?.invalid)  missing.push('Prénom');
        if (this.userForm.get('email')?.invalid)   missing.push('Email valide');
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
    if (formData.role_id)      formData.role_id       = parseInt(formData.role_id);
    if (formData.statut !== undefined) formData.statut = parseInt(formData.statut);
    if (formData.entreprise_id) formData.entreprise_id = parseInt(formData.entreprise_id);
    else delete formData.entreprise_id;
    // Organisation : sans entreprise, ni direction ni N+1
    if (!formData.entreprise_id) {
      delete formData.direction_id;
      delete formData.manager_id;
      delete formData.manager_mode;
    } else {
      formData.direction_id = formData.direction_id ? Number(formData.direction_id) : null;
      if (formData.manager_mode === 'auto') delete formData.manager_id;
      else formData.manager_id = formData.manager_id ? Number(formData.manager_id) : null;
    }
    formData.created_by = 1;

    if (this.isEditMode && this.userData) {
      if (!formData.password) {
        delete formData.password;
        delete formData.password_confirmation;
      }
      this.userService.updateUser(this.userData.id, formData).subscribe({
        next: () => { this.loading = false; this.onSave.emit(); this.hideDialog(); },
        error: (error) => { this.errorMessage = this.parseApiError(error); this.loading = false; }
      });
    } else {
      this.userService.createUser(formData).subscribe({
        next: () => { this.loading = false; this.onSave.emit(); this.hideDialog(); },
        error: (error) => { this.errorMessage = this.parseApiError(error); this.loading = false; }
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
      };
      const messages: string[] = [];
      for (const [field, fieldErrors] of Object.entries(errs)) {
        const label = labels[field] || field;
        const arr = Array.isArray(fieldErrors) ? fieldErrors : [fieldErrors];
        for (const msg of arr as string[]) {
          const isDuplicate = (msg as string).toLowerCase().includes('has already been taken')
                           || (msg as string).toLowerCase().includes('unique');
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
