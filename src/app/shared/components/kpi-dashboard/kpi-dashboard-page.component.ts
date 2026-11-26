import { AfterViewInit, Component, ElementRef, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KpiDashboardService, KpiDashboardSlug } from '../../service/dashboards/kpi-dashboard.service';
import { AuthService } from '../../service/authentification/auth.service';
import { creerMoteurDashboard, MoteurDashboard } from './pyramide-dashboard.engine';

/**
 * Page d'un dashboard KPI, rendue à l'identique du modèle « Pyramide LMS — Tableaux de bord V4.12 ».
 *
 * Chaque route déclare son profil dans `data.dashboard` et sa permission dans `data.permission` (PermissionGuard) ;
 * l'API applique la même permission. Le rendu est celui du modèle (pyramide-dashboard.engine.ts et
 * pyramide-dashboard.css, générés depuis le fichier HTML) : il s'exécute dans un Shadow DOM, si bien que les styles
 * de l'application ne s'y appliquent pas et que ceux du modèle n'en sortent pas.
 */
@Component({
  selector: 'app-kpi-dashboard-page',
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./pyramide-dashboard.css'],
  template: `
    <div class="pyr-root">
      <div class="main">
        <div class="topbar" id="topbar">
          <div class="tb-icon" id="tbIcon"></div>
          <div><div class="tb-title" id="tbTitle"></div><div class="tb-sub" id="tbSub"></div></div>
          <div class="tb-right">
            <span class="tb-updated" id="tbUpdated"></span>
            <div class="bell" id="bell" title="Alertes de seuil"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg> <span class="bn none" id="bellN">0</span></div>
            <select class="fsel tb-sel" id="periodSel" style="display:none" title="Période des KPIs exprimés par semaine / mois / trimestre">
              <option value="week">Semaine</option><option value="month" selected>Mois</option><option value="quarter">Trimestre</option>
            </select>
            <button class="btn" id="exportBtn" data-act="exportPdf" style="display:none"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></svg> Export PDF</button>
          </div>
        </div>
        <div class="apanel" id="apanel"></div>
        <div class="content" id="content"><div class="screen"><p>Chargement du tableau de bord…</p></div></div>
      </div>
      <div class="print-wm" id="wm"></div>
    </div>
  `,
})
export class KpiDashboardPageComponent implements AfterViewInit, OnDestroy {
  private moteur?: MoteurDashboard;

  constructor(
    private route: ActivatedRoute,
    private service: KpiDashboardService,
    private auth: AuthService,
    private host: ElementRef<HTMLElement>,
  ) {}

  ngAfterViewInit(): void {
    const shadow = this.host.nativeElement.shadowRoot;
    const racine = shadow?.querySelector<HTMLElement>('.pyr-root');
    if (!shadow || !racine) return;

    const slug: KpiDashboardSlug = this.route.snapshot.data['dashboard'];
    this.moteur = creerMoteurDashboard(shadow, racine, this.service.transport(slug), this.libelleUtilisateur());
    this.moteur.demarrer();
  }

  ngOnDestroy(): void {
    this.moteur?.detruire();
  }

  /** Nom affiché dans le filigrane d'impression (« Document confidentiel — … »). */
  private libelleUtilisateur(): string {
    const u = this.auth.getUser();
    return u ? [u.prenom, u.nom].filter(Boolean).join(' ') || u.name || u.email || '' : '';
  }
}
