import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Direction, DirectionService, TypeDirection } from '../../../service/direction/direction.service';
import { NoeudOrganigramme, OrganisationService, RapportOrganisation } from '../../../service/organisation/organisation.service';
import { RapportOrganisationComponent } from '../rapport-organisation/rapport-organisation.component';
import { SelecteurDirectionComponent } from '../selecteur-direction/selecteur-direction.component';
import { httpErrorMessage } from '../../../utils/http-error.utils';

interface Personne { id: number; nom: string; fonction: string | null; direction: { id: number; nom: string | null } | null }

/**
 * Gestion de la structure d'une entreprise : arbre des entités (profondeur illimitée),
 * fiche entité (membres, N+1, sous-entités), création / édition / déplacement / responsable /
 * affectations. Tout changement qui touche aux N+1 est prévisualisé avant application.
 */
@Component({
  selector: 'app-structure-organisation',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RapportOrganisationComponent, SelecteurDirectionComponent],
  templateUrl: './structure-organisation.component.html',
  styleUrls: ['./structure-organisation.component.scss'],
})
export class StructureOrganisationComponent implements OnChanges {
  @Input() entrepriseId: number | null = null;
  @Input() peutGerer = true;
  /** Entité à ouvrir (ex. clic depuis le panneau d'anomalies). */
  @Input() entiteAOuvrir: number | null = null;
  /** Incrémenter pour recharger depuis le parent (ex. après un import). */
  @Input() rafraichir = 0;
  @Output() changement = new EventEmitter<void>();

  // Arbre
  chargement = false;
  erreur = '';
  succes = '';
  arborescence: Direction[] = [];
  filtre = '';
  deplies = new Set<number>();
  selectionId: number | null = null;
  stats = { directions: 0, departements: 0, equipes: 0, employes: 0, sansResponsable: 0 };

  // Fiche
  detail: Direction | null = null;
  detailChargement = false;
  onglet: 'membres' | 'structure' = 'membres';

  // Personnes de l'entreprise (responsables, affectations)
  personnes: Personne[] = [];

  // Modale création / édition
  modaleEntite = false;
  modeEntite: 'creation' | 'edition' = 'creation';
  formulaire: FormGroup;
  erreurEntite = '';
  enregistrement = false;

  // Modale affectation
  modaleAffecter = false;
  rechercheEmploye = '';
  employesChoisis = new Set<number>();

  // Prévisualisation
  rapportVisible = false;
  rapportTitre = '';
  rapport: RapportOrganisation | null = null;
  rapportCalcul = false;
  rapportEnCours = false;
  rapportErreur = '';
  rapportCompteRendu = false;
  private appliquerAction: (() => Observable<{ rapport: RapportOrganisation | null }>) | null = null;
  private apresApplication: (() => void) | null = null;

  constructor(
    private directionService: DirectionService,
    private organisationService: OrganisationService,
    fb: FormBuilder,
  ) {
    this.formulaire = fb.group({
      nom: ['', [Validators.required, Validators.maxLength(191)]],
      type: ['direction' as TypeDirection, Validators.required],
      parent_id: [null as number | null],
      responsable_id: [null as number | null],
      description: [''],
      code: ['', Validators.maxLength(50)],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['entrepriseId'] && this.entrepriseId) {
      this.selectionId = null;
      this.detail = null;
      this.deplies.clear();
      this.charger();
      this.chargerPersonnes();
    }
    if (changes['entiteAOuvrir'] && this.entiteAOuvrir) {
      this.ouvrir(this.entiteAOuvrir);
    }
    if (changes['rafraichir'] && !changes['rafraichir'].firstChange && this.entrepriseId) {
      const ouverte = this.selectionId;
      this.charger(() => ouverte && this.ouvrir(ouverte));
      this.chargerPersonnes();
    }
  }

  // ── Chargement ──────────────────────────────────────────────

  charger(apresChargement?: () => void): void {
    if (!this.entrepriseId) return;
    this.chargement = true;
    this.erreur = '';
    this.directionService.getArborescence(this.entrepriseId, true).subscribe({
      next: (res) => {
        this.arborescence = res.arborescence || [];
        this.calculerStats();
        this.chargement = false;
        if (!this.selectionId && this.arborescence.length) {
          this.ouvrir(this.arborescence[0].id);
        }
        apresChargement?.();
      },
      error: (err) => {
        this.erreur = httpErrorMessage(err, 'Erreur lors du chargement de la structure');
        this.chargement = false;
      },
    });
  }

  private chargerPersonnes(): void {
    if (!this.entrepriseId) return;
    this.organisationService.organigramme(this.entrepriseId, 'personnes').subscribe({
      next: (res) => {
        this.personnes = (res.noeuds || [])
          .filter((n: NoeudOrganigramme) => n.type === 'personne' && n.user_id && n.statut !== false)
          .map((n: NoeudOrganigramme) => ({ id: n.user_id!, nom: n.libelle || '', fonction: n.sous_titre ?? null, direction: n.direction ?? null }))
          .sort((a, b) => a.nom.localeCompare(b.nom));
      },
    });
  }

  private calculerStats(): void {
    const tout = DirectionService.aplatir(this.arborescence);
    this.stats = {
      directions: tout.filter(d => d.type === 'direction').length,
      departements: tout.filter(d => d.type === 'sous_direction').length,
      equipes: tout.filter(d => d.type === 'departement').length,
      employes: tout.reduce((s, d) => s + (d.employes_count || 0), 0),
      sansResponsable: tout.filter(d => d.est_active && !d.responsable_id).length,
    };
  }

  // ── Arbre ───────────────────────────────────────────────────

  get arbreAffiche(): Direction[] {
    const terme = this.filtre.trim().toLowerCase();
    return terme ? this.filtrer(this.arborescence, terme) : this.arborescence;
  }

  private filtrer(arbre: Direction[], terme: string): Direction[] {
    const resultat: Direction[] = [];
    for (const d of arbre) {
      const enfants = this.filtrer(d.enfants || [], terme);
      if (d.nom.toLowerCase().includes(terme) || enfants.length) {
        resultat.push({ ...d, enfants });
      }
    }
    return resultat;
  }

  estDeplie(d: Direction): boolean {
    return !!this.filtre.trim() || this.deplies.has(d.id);
  }

  basculer(d: Direction, event: Event): void {
    event.stopPropagation();
    this.deplies.has(d.id) ? this.deplies.delete(d.id) : this.deplies.add(d.id);
  }

  ouvrir(id: number): void {
    this.selectionId = id;
    this.deplierAncetres(id);
    this.chargerDetail(id);
  }

  private deplierAncetres(id: number): void {
    const chemin = (liste: Direction[], trace: number[]): number[] | null => {
      for (const d of liste) {
        if (d.id === id) return trace;
        const r = chemin(d.enfants || [], [...trace, d.id]);
        if (r) return r;
      }
      return null;
    };
    (chemin(this.arborescence, []) || []).forEach(a => this.deplies.add(a));
  }

  private chargerDetail(id: number): void {
    this.detailChargement = true;
    this.directionService.getById(id, this.entrepriseId).subscribe({
      next: (res) => {
        this.detail = res.direction;
        this.detailChargement = false;
      },
      error: (err) => {
        this.detailChargement = false;
        this.erreur = httpErrorMessage(err, 'Entité introuvable');
      },
    });
  }

  libelleType(type: string): string {
    return DirectionService.libelleType(type);
  }

  icone(type: string): string {
    return type === 'direction' ? 'ti-building' : type === 'sous_direction' ? 'ti-layout-columns' : 'ti-users-group';
  }

  typeEnfantParDefaut(type: TypeDirection): TypeDirection {
    return type === 'direction' ? 'sous_direction' : 'departement';
  }

  initiales(p: { prenom?: string; nom?: string }): string {
    return (((p.prenom || '')[0] || '') + ((p.nom || '')[0] || '')).toUpperCase();
  }

  estResponsable(membre: any): boolean {
    return !!this.detail && this.detail.responsable_id === membre.id;
  }

  nomManager(membre: any): string {
    const m = membre.manager;
    return m ? (`${m.prenom || ''} ${m.nom || ''}`.trim() || m.name) : '—';
  }

  // ── Création / édition ──────────────────────────────────────

  ouvrirCreation(type: TypeDirection, parentId: number | null = null): void {
    this.modeEntite = 'creation';
    this.erreurEntite = '';
    this.formulaire.reset({ nom: '', type, parent_id: parentId, responsable_id: null, description: '', code: '' });
    this.modaleEntite = true;
  }

  ouvrirEdition(): void {
    if (!this.detail) return;
    this.modeEntite = 'edition';
    this.erreurEntite = '';
    this.formulaire.reset({
      nom: this.detail.nom,
      type: this.detail.type,
      parent_id: this.detail.parent_id,
      responsable_id: this.detail.responsable_id,
      description: this.detail.description || '',
      code: this.detail.code || '',
    });
    this.modaleEntite = true;
  }

  enregistrerEntite(): void {
    if (this.formulaire.invalid || !this.entrepriseId) return;
    const donnees = { ...this.formulaire.value };
    this.enregistrement = true;
    this.erreurEntite = '';

    if (this.modeEntite === 'creation') {
      this.directionService.create(donnees, this.entrepriseId).subscribe({
        next: (res) => {
          this.enregistrement = false;
          this.modaleEntite = false;
          this.notifier('Entité créée');
          this.charger(() => this.ouvrir(res.direction.id));
          if (res.rapport && (res.rapport.changements.length || res.rapport.blocages.length)) {
            this.afficherCompteRendu('Entité créée', res.rapport);
          }
        },
        error: (err) => { this.enregistrement = false; this.erreurEntite = httpErrorMessage(err, 'Erreur lors de la création'); },
      });
      return;
    }

    const id = this.detail!.id;
    // Prévisualisation d'abord : un changement de parent ou de responsable touche aux N+1
    this.directionService.update(id, donnees, this.entrepriseId, true).subscribe({
      next: (res) => {
        this.enregistrement = false;
        const r = res.rapport;
        const appliquer = () => this.directionService.update(id, donnees, this.entrepriseId);
        if (r && (r.changements.length || r.entites.length || r.blocages.length)) {
          this.modaleEntite = false;
          this.preparer('Modifier « ' + donnees.nom + ' »', r, appliquer, () => this.ouvrir(id));
        } else {
          this.enregistrement = true;
          appliquer().subscribe({
            next: () => {
              this.enregistrement = false;
              this.modaleEntite = false;
              this.notifier('Entité mise à jour');
              this.charger(() => this.ouvrir(id));
              this.changement.emit();
            },
            error: (err) => { this.enregistrement = false; this.erreurEntite = httpErrorMessage(err, 'Erreur lors de la mise à jour'); },
          });
        }
      },
      error: (err) => { this.enregistrement = false; this.erreurEntite = httpErrorMessage(err, 'Modification impossible'); },
    });
  }

  supprimer(): void {
    if (!this.detail || !this.entrepriseId) return;
    if (!confirm(`Supprimer « ${this.detail.nom} » ? Cette action est irréversible.`)) return;
    this.directionService.delete(this.detail.id, this.entrepriseId).subscribe({
      next: () => {
        this.notifier('Entité supprimée');
        this.selectionId = null;
        this.detail = null;
        this.charger();
        this.changement.emit();
      },
      error: (err) => { this.erreur = httpErrorMessage(err, 'Suppression impossible'); },
    });
  }

  // ── Affectations ────────────────────────────────────────────

  ouvrirAffectation(): void {
    this.rechercheEmploye = '';
    this.employesChoisis.clear();
    this.modaleAffecter = true;
  }

  get employesDisponibles(): Personne[] {
    const terme = this.rechercheEmploye.trim().toLowerCase();
    return this.personnes
      .filter(p => p.direction?.id !== this.detail?.id)
      .filter(p => !terme || `${p.nom} ${p.fonction || ''} ${p.direction?.nom || ''}`.toLowerCase().includes(terme));
  }

  basculerEmploye(id: number): void {
    this.employesChoisis.has(id) ? this.employesChoisis.delete(id) : this.employesChoisis.add(id);
  }

  previsualiserAffectation(): void {
    if (!this.detail || !this.entrepriseId || !this.employesChoisis.size) return;
    const id = this.detail.id;
    const ids = [...this.employesChoisis];
    this.modaleAffecter = false;
    this.demander(
      `Affecter ${ids.length} collaborateur(s) à « ${this.detail.nom} »`,
      () => this.directionService.affecterEmployes(id, ids, this.entrepriseId, true),
      () => this.directionService.affecterEmployes(id, ids, this.entrepriseId),
      () => this.ouvrir(id),
    );
  }

  retirer(membre: any): void {
    if (!this.detail || !this.entrepriseId) return;
    const id = this.detail.id;
    this.demander(
      `Retirer ${membre.prenom || ''} ${membre.nom || ''} de « ${this.detail.nom} »`,
      () => this.directionService.retirerEmployes(id, [membre.id], this.entrepriseId, true),
      () => this.directionService.retirerEmployes(id, [membre.id], this.entrepriseId),
      () => this.ouvrir(id),
    );
  }

  // ── Prévisualisation / application ──────────────────────────

  private demander(
    titre: string,
    simuler: () => Observable<{ rapport: RapportOrganisation | null }>,
    appliquer: () => Observable<{ rapport: RapportOrganisation | null }>,
    ensuite: () => void,
  ): void {
    this.preparer(titre, null, appliquer, ensuite);
    this.rapportCalcul = true;
    simuler().subscribe({
      next: (res) => { this.rapport = res.rapport; this.rapportCalcul = false; },
      error: (err) => { this.rapportErreur = httpErrorMessage(err, 'Changement impossible'); this.rapportCalcul = false; },
    });
  }

  private preparer(titre: string, rapport: RapportOrganisation | null, appliquer: () => Observable<{ rapport: RapportOrganisation | null }>, ensuite: () => void): void {
    this.rapportTitre = titre;
    this.rapport = rapport;
    this.rapportErreur = '';
    this.rapportCompteRendu = false;
    this.rapportCalcul = false;
    this.appliquerAction = appliquer;
    this.apresApplication = ensuite;
    this.rapportVisible = true;
  }

  confirmerRapport(): void {
    if (!this.appliquerAction) return;
    this.rapportEnCours = true;
    this.appliquerAction().subscribe({
      next: (res) => {
        this.rapportEnCours = false;
        this.rapport = res.rapport ?? this.rapport;
        this.rapportCompteRendu = true;
        this.appliquerAction = null;
        const ensuite = this.apresApplication;
        this.charger(() => ensuite?.());
        this.chargerPersonnes();
        this.changement.emit();
      },
      error: (err) => { this.rapportEnCours = false; this.rapportErreur = httpErrorMessage(err, 'Erreur lors de l\'application'); },
    });
  }

  private afficherCompteRendu(titre: string, rapport: RapportOrganisation): void {
    this.preparer(titre, rapport, () => new Observable(), () => {});
    this.rapportCompteRendu = true;
  }

  fermerRapport(): void {
    this.rapportVisible = false;
    this.appliquerAction = null;
  }

  private notifier(message: string): void {
    this.succes = message;
    setTimeout(() => (this.succes = ''), 3000);
  }
}
