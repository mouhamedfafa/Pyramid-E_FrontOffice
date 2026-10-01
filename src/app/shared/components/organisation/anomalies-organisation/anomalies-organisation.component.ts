import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnomaliesOrganisation, LigneAnomalie, OrganisationService, RapportOrganisation } from '../../../service/organisation/organisation.service';
import { RapportOrganisationComponent } from '../rapport-organisation/rapport-organisation.component';
import { httpErrorMessage } from '../../../utils/http-error.utils';

interface Categorie {
  cle: string;
  libelle: string;
  aide: string;
  couleur: 'rouge' | 'ambre' | 'bleu' | 'gris';
  icone: string;
}

/** Anomalies d'organisation d'une entreprise + synchronisation des N+1 avec la structure. */
@Component({
  selector: 'app-anomalies-organisation',
  standalone: true,
  imports: [CommonModule, FormsModule, RapportOrganisationComponent],
  templateUrl: './anomalies-organisation.component.html',
  styleUrls: ['./anomalies-organisation.component.scss'],
})
export class AnomaliesOrganisationComponent implements OnChanges {
  @Input() entrepriseId: number | null = null;
  @Input() peutGerer = true;
  /** Incrémenter pour forcer un rechargement depuis le parent. */
  @Input() rafraichir = 0;

  @Output() utilisateurSelectionne = new EventEmitter<number>();
  @Output() entiteSelectionnee = new EventEmitter<number>();
  @Output() changement = new EventEmitter<void>();

  readonly categories: Categorie[] = [
    { cle: 'sans_manager', libelle: 'Sans N+1', aide: 'Rattachés à une entité mais sans N+1 alors que la structure en prévoit un.', couleur: 'rouge', icone: 'ti-user-x' },
    { cle: 'entites_sans_responsable', libelle: 'Entités sans responsable', aide: 'Leurs membres remontent au responsable de l\'entité parente.', couleur: 'ambre', icone: 'ti-building' },
    { cle: 'sans_direction', libelle: 'Sans direction', aide: 'Collaborateurs non rattachés à une entité : leur N+1 ne peut pas être dérivé.', couleur: 'ambre', icone: 'ti-user-question' },
    { cle: 'auto_a_synchroniser', libelle: 'N+1 à synchroniser', aide: 'Mode automatique, mais le N+1 actuel diffère de celui que donne la structure.', couleur: 'bleu', icone: 'ti-refresh' },
    { cle: 'manuel_divergent', libelle: 'N+1 manuel hors structure', aide: 'Exceptions assumées : le N+1 a été choisi manuellement.', couleur: 'gris', icone: 'ti-hand-finger' },
    { cle: 'manager_hors_entreprise', libelle: 'N+1 hors entreprise', aide: 'Le N+1 appartient à une autre entreprise.', couleur: 'rouge', icone: 'ti-building-off' },
    { cle: 'managers_inactifs', libelle: 'Managers inactifs', aide: 'Managers désactivés ou non activés qui ont encore des collaborateurs.', couleur: 'rouge', icone: 'ti-user-off' },
  ];

  anomalies: AnomaliesOrganisation | null = null;
  chargement = false;
  erreur = '';
  ouverte: string | null = null;

  // Synchronisation
  basculerAuto = false;
  modaleVisible = false;
  rapport: RapportOrganisation | null = null;
  calcul = false;
  enCours = false;
  erreurSync = '';
  compteRendu = false;

  constructor(private organisationService: OrganisationService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['entrepriseId'] || changes['rafraichir']) {
      this.charger();
    }
  }

  charger(): void {
    if (!this.entrepriseId) return;
    this.chargement = true;
    this.erreur = '';
    this.organisationService.anomalies(this.entrepriseId).subscribe({
      next: (res) => {
        this.anomalies = res;
        this.chargement = false;
      },
      error: (err) => {
        this.erreur = httpErrorMessage(err, 'Impossible de charger les anomalies');
        this.chargement = false;
      },
    });
  }

  compteur(cle: string): number {
    return this.anomalies?.compteurs?.[cle] ?? 0;
  }

  lignes(cle: string): LigneAnomalie[] {
    return (this.anomalies?.utilisateurs as any)?.[cle] ?? [];
  }

  basculer(cle: string): void {
    this.ouverte = this.ouverte === cle ? null : cle;
  }

  // ── Synchronisation ─────────────────────────────────────────

  previsualiserSynchronisation(): void {
    if (!this.entrepriseId) return;
    this.modaleVisible = true;
    this.compteRendu = false;
    this.calcul = true;
    this.erreurSync = '';
    this.rapport = null;
    this.organisationService.synchroniser(this.entrepriseId, false, this.basculerAuto).subscribe({
      next: (res) => { this.rapport = res.rapport; this.calcul = false; },
      error: (err) => { this.erreurSync = httpErrorMessage(err, 'Erreur lors du calcul'); this.calcul = false; },
    });
  }

  confirmerSynchronisation(): void {
    if (!this.entrepriseId) return;
    this.enCours = true;
    this.organisationService.synchroniser(this.entrepriseId, true, this.basculerAuto).subscribe({
      next: (res) => {
        this.rapport = res.rapport;
        this.enCours = false;
        this.compteRendu = true;
        this.charger();
        this.changement.emit();
      },
      error: (err) => { this.erreurSync = httpErrorMessage(err, 'Erreur lors de la synchronisation'); this.enCours = false; },
    });
  }
}
