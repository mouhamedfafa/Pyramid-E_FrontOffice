import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { routes } from '../../../shared/service/routes/routes';
import { ManagerService } from '../../../shared/service/manager/manager.service';
import { DemandeManager, ManagerDemandesResponse } from '../../../shared/models/manager.models';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import {
  classeStatutDemande, iconeTypeDemande, initiales, libelleNiveau, libelleTypeDemande, nomComplet,
} from '../common/manager-ui.utils';

type Onglet = 'a_traiter' | 'equipe';
type Action = 'valider' | 'refuser';

@Component({
  selector: 'app-manager-demandes',
  templateUrl: './manager-demandes.component.html',
  styleUrl: './manager-demandes.component.scss',
  imports: [CommonModule, FormsModule, RouterLink],
})
export class ManagerDemandesComponent implements OnInit, OnDestroy {
  public routes = routes;
  onglet: Onglet = 'a_traiter';

  demandes: DemandeManager[] = [];
  compteurs: ManagerDemandesResponse['compteurs'] | null = null;
  loading = false;
  error = '';
  succes = '';

  // Filtres
  statutFiltre = '';
  typeFiltre = '';
  niveauFiltre: number | null = null;
  search = '';

  // Détail déplié
  ouverte: number | null = null;

  // Modale de décision
  action: Action | null = null;
  cible: DemandeManager | null = null;
  commentaire = '';
  motif = '';
  enCours = false;
  erreurModale = '';

  readonly initiales = initiales;
  readonly nomComplet = nomComplet;
  readonly libelleNiveau = libelleNiveau;
  readonly classeStatutDemande = classeStatutDemande;
  readonly libelleTypeDemande = libelleTypeDemande;
  readonly iconeTypeDemande = iconeTypeDemande;

  private search$ = new Subject<void>();
  private subs: Subscription[] = [];

  constructor(private managerService: ManagerService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Lien direct vers une demande (e-mail, dashboard) : on l'ouvre dans la liste
    const demandeId = Number(this.route.snapshot.queryParamMap.get('demande'));
    if (demandeId) this.ouverte = demandeId;

    this.subs.push(this.search$.pipe(debounceTime(300)).subscribe(() => this.charger()));
    this.charger();
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  setOnglet(onglet: Onglet): void {
    this.onglet = onglet;
    this.statutFiltre = '';
    this.charger();
  }

  onSearch(): void {
    this.search$.next();
  }

  charger(): void {
    this.loading = true;
    this.error = '';
    this.managerService.getDemandes({
      a_traiter: this.onglet === 'a_traiter',
      statut: this.onglet === 'equipe' ? this.statutFiltre : undefined,
      type_demande: this.typeFiltre,
      niveau: this.niveauFiltre,
      search: this.search.trim(),
    }).subscribe({
      next: (res) => {
        this.demandes = res.demandes;
        this.compteurs = res.compteurs;
        this.loading = false;
      },
      error: (err) => { this.error = httpErrorMessage(err, 'Impossible de charger les demandes.'); this.loading = false; },
    });
  }

  toggle(id: number): void {
    this.ouverte = this.ouverte === id ? null : id;
  }

  /** Niveaux présents dans la liste courante (filtre). */
  get niveauxDisponibles(): number[] {
    return [...new Set(this.demandes.map(d => d.niveau).filter((n): n is number => !!n))].sort();
  }

  // ════════════════ DÉCISION ════════════════
  ouvrir(action: Action, d: DemandeManager): void {
    this.action = action;
    this.cible = d;
    this.commentaire = '';
    this.motif = '';
    this.erreurModale = '';
  }

  fermer(): void {
    if (this.enCours) return;
    this.action = null;
    this.cible = null;
  }

  confirmer(): void {
    if (!this.cible || !this.action) return;
    if (this.action === 'refuser' && !this.motif.trim()) {
      this.erreurModale = 'Le motif du refus est obligatoire.';
      return;
    }

    this.enCours = true;
    this.erreurModale = '';
    const id = this.cible.id;
    const requete$ = this.action === 'valider'
      ? this.managerService.validerDemande(id, this.commentaire.trim() || undefined)
      : this.managerService.refuserDemande(id, this.motif.trim(), this.commentaire.trim() || undefined);

    requete$.subscribe({
      next: (res) => {
        this.enCours = false;
        this.succes = res.message;
        this.action = null;
        this.cible = null;
        this.charger();
      },
      error: (err) => {
        this.enCours = false;
        // 409 : un autre manager (N+1 / N+2) a traité la demande entre-temps
        if (err?.status === 409 || err?.status === 422) {
          this.action = null;
          this.cible = null;
          this.error = err?.error?.message ?? 'Cette demande a déjà été traitée.';
          this.charger();
          return;
        }
        this.erreurModale = httpErrorMessage(err, 'Erreur lors du traitement de la demande.');
      },
    });
  }

  trackById(_: number, d: DemandeManager): number {
    return d.id;
  }
}
