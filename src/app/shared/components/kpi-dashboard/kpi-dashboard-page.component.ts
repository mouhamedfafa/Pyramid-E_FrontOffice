import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { KpiDashboardComponent } from './kpi-dashboard.component';
import {
  KpiDashboardFiltres,
  KpiDashboardPayload,
  KpiDashboardService,
  KpiDashboardSlug,
} from '../../service/dashboards/kpi-dashboard.service';

/**
 * Page d'un dashboard KPI. Chaque route déclare son profil dans `data.dashboard`
 * et sa permission dans `data.permission` (PermissionGuard) ; l'API applique la même permission.
 */
@Component({
  selector: 'app-kpi-dashboard-page',
  standalone: true,
  imports: [CommonModule, KpiDashboardComponent],
  template: `
    <div class="kpi-page">
      @if (payload) {
        <app-kpi-dashboard [payload]="payload" [class.kpi-page--busy]="chargement"
          (personChange)="filtrer({ person: $event })"
          (compareChange)="filtrer({ compare: $event })"
          (periodChange)="filtrer({ period: $event })"
          (viewChange)="changerVue($event)" />
      } @else if (erreur) {
        <div class="kpi-screen"><h1>{{ erreur[0] }}</h1><p>{{ erreur[1] }}</p></div>
      } @else {
        <div class="kpi-screen"><p>Chargement du tableau de bord…</p></div>
      }
    </div>
  `,
  styles: [`
    .kpi-page { padding: 4px 0 24px; }
    .kpi-page--busy { opacity: .6; pointer-events: none; transition: opacity .15s; }
    .kpi-screen { max-width: 520px; margin: 10vh auto; padding: 28px; background: #fff; border: 1px solid #E2E8F0; border-radius: 16px; text-align: center; }
    .kpi-screen h1 { font-size: 18px; margin-bottom: 8px; }
    .kpi-screen p { font-size: 13px; color: #475569; margin: 0; }
  `],
})
export class KpiDashboardPageComponent implements OnInit {
  payload: KpiDashboardPayload | null = null;
  erreur: [string, string] | null = null;
  chargement = false;

  private slug!: KpiDashboardSlug;
  private filtres: KpiDashboardFiltres = {};

  constructor(private route: ActivatedRoute, private service: KpiDashboardService) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.data['dashboard'];
    this.charger();
  }

  /** Nouvelle vue : filtres personne / comparaison / période remis à zéro (propres à chaque vue côté serveur). */
  changerVue(view: string): void {
    this.filtres = { view };
    this.charger();
  }

  filtrer(changement: KpiDashboardFiltres): void {
    this.filtres = { ...this.filtres, ...changement };
    this.charger();
  }

  private charger(): void {
    this.chargement = true;
    this.service.get(this.slug, this.filtres).subscribe({
      next: payload => {
        this.payload = payload;
        this.erreur = null;
        this.chargement = false;
      },
      error: (e: HttpErrorResponse) => {
        this.payload = null;
        this.chargement = false;
        // 403 et 404 : même message générique (on ne révèle pas l'existence d'une donnée hors périmètre)
        this.erreur = e.status === 403 || e.status === 404
          ? ['Contenu introuvable', "Ce tableau de bord n'existe pas ou vous n'y avez pas accès."]
          : ['Service momentanément indisponible', 'Veuillez réessayer dans quelques instants.'];
      },
    });
  }
}
