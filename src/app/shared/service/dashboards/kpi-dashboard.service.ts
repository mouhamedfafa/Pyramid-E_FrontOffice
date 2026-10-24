import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

/** Dashboards KPI disponibles — chacun a sa route API et sa permission « voir dashboard <slug> ». */
export type KpiDashboardSlug = 'admin-rh' | 'responsable-rh' | 'manager' | 'formateur' | 'consultant' | 'employe'
  // Équipe Pyramide LMS (domaine plateforme)
  | 'sa-ceo' | 'sa-cto' | 'sa-coo' | 'customer-experience' | 'head-sales' | 'head-marketing' | 'head-product'
  | 'gestionnaire-comptes' | 'qa';

export type KpiPeriode = 'week' | 'month' | 'quarter';

export type KpiWidget =
  | { type: 'gauge' | 'ring'; value: number; max: number; unit: string }
  | { type: 'bar'; value: number; max: number; unit: string; targetLabel?: string }
  | { type: 'counter'; unit: string; delta: number | null; deltaUnit?: string }
  | { type: 'countdown'; days: number; label: string }
  | { type: 'rank'; rank: number; total: number };

export interface Kpi {
  id: string;
  label: string;
  text: string;
  n: number | null;
  dir: 'min' | 'max';
  warn: number;
  crit: number;
  unit: string;
  freq: string;
  thrLabel?: string;
  info?: string;
  priv?: boolean;
  widget?: KpiWidget;
  titulaire?: { label: string };
}

export interface KpiCell { t: 'text' | 'bar'; v: string | number; max?: number; level?: number; suffix?: string; }

export type KpiBlock =
  | { type: 'table'; title: string; columns: string[]; rows: KpiCell[][] }
  | { type: 'quotes'; title: string; items: string[] }
  | { type: 'chart-bugs'; title: string; subtitle: string; labels: string[]; registered: number[]; resolved: number[]; note: string }
  | {
      type: 'compare-table'; title: string; note: string; header: string;
      columns: { id: string; label: string }[];
      rows: { id: string; label: string; selected: boolean; total: boolean; cells: Partial<Record<string, { text: string; n: number; level: number }>> }[];
    };

export interface KpiAlert { label: string; text: string; thrLabel: string; level: number; titulaire: string; watchers: string[]; }

export interface KpiDashboardPayload {
  meta: { title: string; icon: string; subtitle: string; accent: string; bg: string; userLabel: string };
  filters: {
    views: { id: string; label: string }[];
    view: string;
    periodAvailable: boolean;
    period: KpiPeriode;
    people: { id: string; label: string }[];
    person: string;
    personLabel: string;
    compareAvailable: boolean;
    compareLabel: string;
    compare: boolean;
  };
  nudges: string[];
  notices: string[];
  hero: Kpi[];
  sections: { title: string; rows: Kpi[] }[];
  blocks: KpiBlock[];
  alerts: { own: KpiAlert[]; watched: KpiAlert[] };
}

export interface KpiDashboardFiltres { view?: string; period?: KpiPeriode; person?: string; compare?: boolean; }

@Injectable({ providedIn: 'root' })
export class KpiDashboardService {
  private readonly baseUrl = `${environment.apiUrl}/dashboards`;

  constructor(private http: HttpClient) {}

  // Le jeton est ajouté par l'intercepteur ; le périmètre des données est fixé côté serveur.
  get(slug: KpiDashboardSlug, filtres: KpiDashboardFiltres = {}): Observable<KpiDashboardPayload> {
    let params = new HttpParams();
    if (filtres.view && filtres.view !== 'global') params = params.set('view', filtres.view);
    if (filtres.period) params = params.set('period', filtres.period);
    if (filtres.person && filtres.person !== 'all') params = params.set('person', filtres.person);
    if (filtres.compare) params = params.set('compare', '1');

    return this.http
      .get<{ status: boolean; data: KpiDashboardPayload }>(`${this.baseUrl}/${slug}`, { params })
      .pipe(map(r => r.data));
  }
}

/** Niveau d'un KPI : 0 = dans le seuil, 1 = hors seuil, 2 = critique (même règle que le serveur). */
export function niveauKpi(k: Kpi): number {
  if (k.n === null || k.n === undefined) return 0;
  return k.dir === 'min'
    ? (k.n < k.crit ? 2 : (k.n < k.warn ? 1 : 0))
    : (k.n > k.crit ? 2 : (k.n > k.warn ? 1 : 0));
}

export function seuilKpi(k: Kpi): string {
  if (k.thrLabel) return k.thrLabel;
  return (k.dir === 'min' ? '≥ ' : '≤ ') + k.warn.toLocaleString('fr-FR', { maximumFractionDigits: 2 }) + k.unit;
}
