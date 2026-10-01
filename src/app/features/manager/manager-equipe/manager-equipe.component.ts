import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { routes } from '../../../shared/service/routes/routes';
import { ManagerService } from '../../../shared/service/manager/manager.service';
import { Collaborateur, NoeudArbre } from '../../../shared/models/manager.models';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import { classeProgression, initiales, libelleNiveau, nomComplet } from '../common/manager-ui.utils';
import { VueOrganigramme } from '../../../shared/service/organisation/organisation.service';
import { OrganigrammeComponent } from '../../../shared/components/organisation/organigramme/organigramme.component';

@Component({
  selector: 'app-manager-equipe',
  templateUrl: './manager-equipe.component.html',
  styleUrl: './manager-equipe.component.scss',
  imports: [CommonModule, FormsModule, RouterLink, OrganigrammeComponent],
})
export class ManagerEquipeComponent implements OnInit, OnDestroy {
  public routes = routes;
  vue: 'liste' | 'arbre' | 'graphique' = 'liste';

  // ── Organigramme graphique (lecture seule) ──
  vueGraphique: VueOrganigramme = 'personnes';
  estResponsableEntite = false;

  // ── Liste ──
  collaborateurs: Collaborateur[] = [];
  niveaux: number[] = [];
  niveauFiltre: number | null = null;
  statutFiltre = '';
  search = '';
  page = 1;
  lastPage = 1;
  total = 0;
  loading = false;
  error = '';

  // ── Arbre ──
  racine: NoeudArbre | null = null;
  loadingArbre = false;
  noeudsReplies = new Set<number>();

  readonly initiales = initiales;
  readonly nomComplet = nomComplet;
  readonly libelleNiveau = libelleNiveau;
  readonly classeProgression = classeProgression;

  private search$ = new Subject<string>();
  private subs: Subscription[] = [];

  constructor(
    private managerService: ManagerService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.subs.push(this.search$.pipe(debounceTime(300)).subscribe(() => { this.page = 1; this.chargerListe(); }));
    const vueDemandee = this.route.snapshot.queryParamMap.get('vue');
    this.vue = vueDemandee === 'arbre' || vueDemandee === 'graphique' ? vueDemandee : 'liste';
    if (this.vue === 'arbre') this.chargerArbre();
    if (this.vue === 'liste') this.chargerListe();
    this.subs.push(this.managerService.statut$.subscribe(s => (this.estResponsableEntite = !!s.est_responsable_entite)));
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  setVue(vue: 'liste' | 'arbre' | 'graphique'): void {
    this.vue = vue;
    this.router.navigate([], { queryParams: { vue: vue === 'liste' ? null : vue }, queryParamsHandling: 'merge', replaceUrl: true });
    if (vue === 'arbre' && !this.racine) this.chargerArbre();
    if (vue === 'liste' && !this.collaborateurs.length) this.chargerListe();
  }

  // ════════════════ LISTE ════════════════
  chargerListe(): void {
    this.loading = true;
    this.error = '';
    this.managerService.getEquipe({
      niveau: this.niveauFiltre,
      search: this.search.trim(),
      statut: this.statutFiltre,
      page: this.page,
      per_page: 20,
    }).subscribe({
      next: (res) => {
        this.collaborateurs = res.collaborateurs;
        this.niveaux = res.niveaux;
        this.total = res.pagination.total;
        this.lastPage = res.pagination.last_page;
        this.loading = false;
      },
      error: (err) => { this.error = httpErrorMessage(err, 'Impossible de charger votre équipe.'); this.loading = false; },
    });
  }

  onSearch(value: string): void {
    this.search = value;
    this.search$.next(value);
  }

  setNiveau(niveau: number | null): void {
    this.niveauFiltre = niveau;
    this.page = 1;
    this.chargerListe();
  }

  setStatut(statut: string): void {
    this.statutFiltre = statut;
    this.page = 1;
    this.chargerListe();
  }

  allerPage(page: number): void {
    if (page < 1 || page > this.lastPage) return;
    this.page = page;
    this.chargerListe();
  }

  // ════════════════ ARBRE ════════════════
  chargerArbre(): void {
    this.loadingArbre = true;
    this.error = '';
    this.managerService.getArbre().subscribe({
      next: (res) => { this.racine = res.racine; this.loadingArbre = false; },
      error: (err) => { this.error = httpErrorMessage(err, 'Impossible de charger l\'organigramme.'); this.loadingArbre = false; },
    });
  }

  toggleNoeud(id: number): void {
    this.noeudsReplies.has(id) ? this.noeudsReplies.delete(id) : this.noeudsReplies.add(id);
  }

  estReplie(id: number): boolean {
    return this.noeudsReplies.has(id);
  }

  toutDeplier(): void {
    this.noeudsReplies.clear();
  }

  toutReplier(): void {
    const parcourir = (n: NoeudArbre) => n.enfants.forEach(e => { if (e.enfants.length) this.noeudsReplies.add(e.id); parcourir(e); });
    if (this.racine) parcourir(this.racine);
  }

  trackById(_: number, item: { id: number }): number {
    return item.id;
  }
}
