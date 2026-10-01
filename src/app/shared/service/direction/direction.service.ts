import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { RapportOrganisation } from '../organisation/organisation.service';

export type TypeDirection = 'direction' | 'sous_direction' | 'departement';

export interface Direction {
  id: number;
  entreprise_id: number;
  parent_id: number | null;
  chemin?: string | null;
  nom: string;
  type: TypeDirection;
  description: string | null;
  code: string | null;
  responsable_id: number | null;
  est_active: boolean;
  parent?: Direction;
  enfants?: Direction[];
  responsable?: { id: number; nom: string; prenom: string; email: string; fonction?: string | null };
  employes?: any[];
  employes_count?: number;
  effectif_total?: number;
  profondeur?: number;
  fil_ariane?: { id: number; nom: string; type: TypeDirection }[];
  created_at?: string;
  updated_at?: string;
}

export interface DirectionCreateRequest {
  nom: string;
  type: TypeDirection;
  parent_id?: number | null;
  description?: string;
  code?: string;
  responsable_id?: number | null;
}

/**
 * Directions / départements / équipes d'une entreprise.
 * `entrepriseId` est optionnel : par défaut, l'entreprise de l'utilisateur connecté
 * (le Super Admin et le RH Groupe le passent explicitement).
 */
@Injectable({ providedIn: 'root' })
export class DirectionService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders() {
    const token = localStorage.getItem('pyramide_token');
    return { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
  }

  private url(entrepriseId?: number | null): string {
    const id = entrepriseId ?? JSON.parse(localStorage.getItem('pyramide_user') || '{}').entreprise_id;
    return `${this.baseUrl}/entreprises/${id}/directions`;
  }

  getAll(params?: { type?: string; parent_id?: number; racines_only?: boolean; search?: string }, entrepriseId?: number | null): Observable<any> {
    const queryParts: string[] = [];
    if (params?.type) queryParts.push(`type=${params.type}`);
    if (params?.parent_id) queryParts.push(`parent_id=${params.parent_id}`);
    if (params?.racines_only) queryParts.push(`racines_only=1`);
    if (params?.search) queryParts.push(`search=${encodeURIComponent(params.search)}`);
    const url = this.url(entrepriseId) + (queryParts.length ? '?' + queryParts.join('&') : '');
    return this.http.get<any>(url, { headers: this.getHeaders() });
  }

  getArborescence(entrepriseId?: number | null, inclureInactives = false): Observable<{ status: boolean; arborescence: Direction[]; entreprise?: { id: number; nom: string } }> {
    const suffixe = inclureInactives ? '?inclure_inactives=1' : '';
    return this.http.get<any>(`${this.url(entrepriseId)}/arborescence${suffixe}`, { headers: this.getHeaders() });
  }

  getById(id: number, entrepriseId?: number | null): Observable<any> {
    return this.http.get<any>(`${this.url(entrepriseId)}/${id}`, { headers: this.getHeaders() });
  }

  create(data: DirectionCreateRequest, entrepriseId?: number | null): Observable<{ status: boolean; direction: Direction; rapport: RapportOrganisation | null }> {
    return this.http.post<any>(this.url(entrepriseId), data, { headers: this.getHeaders() });
  }

  /** Avec `simulation`, rien n'est écrit : seul le rapport d'impact (parent, responsable) est renvoyé. */
  update(id: number, data: Partial<DirectionCreateRequest & { est_active: boolean }>, entrepriseId?: number | null, simulation = false): Observable<{ status: boolean; direction: Direction; rapport: RapportOrganisation | null }> {
    return this.http.put<any>(`${this.url(entrepriseId)}/${id}`, { ...data, simulation }, { headers: this.getHeaders() });
  }

  delete(id: number, entrepriseId?: number | null): Observable<any> {
    return this.http.delete<any>(`${this.url(entrepriseId)}/${id}`, { headers: this.getHeaders() });
  }

  affecterEmployes(directionId: number, userIds: number[], entrepriseId?: number | null, simulation = false): Observable<{ status: boolean; message: string; rapport: RapportOrganisation }> {
    return this.http.post<any>(`${this.url(entrepriseId)}/${directionId}/affecter`, { user_ids: userIds, simulation }, { headers: this.getHeaders() });
  }

  retirerEmployes(directionId: number, userIds: number[], entrepriseId?: number | null, simulation = false): Observable<{ status: boolean; message: string; rapport: RapportOrganisation }> {
    return this.http.post<any>(`${this.url(entrepriseId)}/${directionId}/retirer`, { user_ids: userIds, simulation }, { headers: this.getHeaders() });
  }

  /** Arbre → liste à plat (ordre préfixe) avec la profondeur, pour les listes déroulantes. */
  static aplatir(arbre: Direction[], profondeur = 0, resultat: (Direction & { niveau: number })[] = []): (Direction & { niveau: number })[] {
    for (const d of arbre) {
      resultat.push({ ...d, niveau: profondeur });
      if (d.enfants?.length) {
        DirectionService.aplatir(d.enfants, profondeur + 1, resultat);
      }
    }
    return resultat;
  }

  static libelleType(type: string | null | undefined): string {
    switch (type) {
      case 'direction': return 'Direction';
      case 'sous_direction': return 'Département';
      case 'departement': return 'Équipe';
      default: return type || '';
    }
  }
}
