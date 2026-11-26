import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';

/** Dashboards KPI disponibles — chacun a sa route API et sa permission « voir dashboard <slug> ». */
export type KpiDashboardSlug = 'admin-rh' | 'responsable-rh' | 'direction' | 'manager' | 'formateur' | 'consultant' | 'employe' | 'dsi'
  // Équipe Pyramide LMS (domaine plateforme)
  | 'sa-ceo' | 'sa-cto' | 'sa-coo' | 'customer-experience' | 'head-sales' | 'head-marketing' | 'head-product'
  | 'gestionnaire-comptes' | 'qa';

/** Erreur remontée au moteur d'affichage : il choisit lui-même l'écran (textes fixes, aucun détail technique). */
export interface ErreurDashboard { kind: 'auth' | 'notfound' | 'rate' | 'error'; }

/**
 * Transport du moteur d'affichage des dashboards (modèle V4.12) vers l'API Laravel.
 *
 * Le moteur parle le contrat du modèle (/dashboard, /alerts, /me/pins, /kpi/people…) ; chaque chemin est traduit
 * ici vers la route API correspondante. Le périmètre des données est toujours fixé côté serveur à partir de
 * l'utilisateur connecté (jeton ajouté par l'intercepteur) : le navigateur n'envoie que des filtres et identifiants.
 */
@Injectable({ providedIn: 'root' })
export class KpiDashboardService {
  private readonly base = `${environment.apiUrl}/dashboards`;

  constructor(private http: HttpClient) {}

  /** Crée le transport d'un dashboard : les alertes arrivent avec le dashboard, une seule requête suffit. */
  transport(slug: KpiDashboardSlug) {
    let dernier: Promise<any> = Promise.resolve({ alerts: { own: [], watched: [] } });

    return (method: string, path: string, query: Record<string, string> | null, body: unknown): Promise<any> => {
      switch (path) {
        case '/dashboard':     return (dernier = this.appel('GET', `/${slug}`, query));
        case '/alerts':        return dernier.then(d => d?.alerts ?? { own: [], watched: [] });
        case '/audit/ui':      return Promise.resolve(null);   // les accès sont journalisés par l'API elle-même
        case '/me/pins':       return this.appel('PUT', `/${slug}/favoris`, null, body);
        case '/kpi/people':    return this.appel('GET', `/${slug}/personnes`, query);
        case '/kpi/reminders': return this.appel('POST', `/${slug}/relances`, null, body);
      }
      const route = ROUTES_COMMUNES[`${method} ${path}`];
      return route ? this.appel(method, route, query, body) : Promise.reject<ErreurDashboard>({ kind: 'notfound' });
    };
  }

  private appel(method: string, chemin: string, query: Record<string, string> | null, body?: unknown): Promise<any> {
    let params = new HttpParams();
    Object.entries(query ?? {}).forEach(([k, v]) => { if (v !== null && v !== undefined && v !== '') params = params.set(k, String(v)); });

    return firstValueFrom(this.http.request<{ status: boolean; data: any }>(method, `${this.base}${chemin}`, {
      params, body: method === 'GET' ? undefined : (body ?? {}),
    }))
      .then(r => (r && typeof r === 'object' && 'data' in r ? r.data : r))
      .catch((e: HttpErrorResponse) => {
        // 403 et 404 : même écran générique (on ne révèle pas l'existence d'une donnée hors périmètre)
        const kind: ErreurDashboard['kind'] = e.status === 401 ? 'auth' : (e.status === 403 || e.status === 404) ? 'notfound' : e.status === 429 ? 'rate' : 'error';
        throw { kind } as ErreurDashboard;
      });
  }
}

/** Fonctions d'administration de l'Admin RH (seuils, rapport trimestriel) : routes indépendantes du dashboard affiché. */
const ROUTES_COMMUNES: Record<string, string> = {
  'GET /settings/thresholds':          '/seuils',
  'PUT /settings/thresholds':          '/seuils',
  'GET /reports/quarterly':            '/rapport-trimestriel',
  'PUT /reports/quarterly':            '/rapport-trimestriel',
  'POST /reports/quarterly/approve':   '/rapport-trimestriel/valider',
  'POST /reports/quarterly/revoke':    '/rapport-trimestriel/annuler',
};
