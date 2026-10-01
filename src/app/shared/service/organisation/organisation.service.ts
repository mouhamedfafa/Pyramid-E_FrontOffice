import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface Ref { id: number; nom: string | null }

export type VueOrganigramme = 'structure' | 'personnes';
export type AlerteOrganisation = 'sans_responsable' | 'sans_direction' | 'sans_manager' | 'manuel_divergent' | 'auto_a_synchroniser';

/** Nœud d'organigramme en liste plate (id / parentId). */
export interface NoeudOrganigramme {
  id: string;                 // e-{id} entreprise, d-{id} entité, u-{id} personne
  parentId: string | null;
  type: 'entreprise' | 'direction' | 'sous_direction' | 'departement' | 'personne';
  libelle: string | null;
  sous_titre?: string | null;
  alertes: AlerteOrganisation[];
  // Entité
  entite_id?: number;
  responsable?: { id: number; nom: string | null; fonction: string | null } | null;
  effectif?: number;
  effectif_total?: number;
  est_active?: boolean;
  // Personne
  user_id?: number;
  matricule?: string | null;
  direction?: Ref | null;
  manager_id?: number | null;
  manager_mode?: 'auto' | 'manuel';
  statut?: boolean;
  nb_collaborateurs?: number;
}

export interface ChangementOrganisation {
  user: Ref;
  direction_avant: Ref | null;
  direction_apres: Ref | null;
  manager_avant: Ref | null;
  manager_apres: Ref | null;
  manager_change: boolean;
  mode_avant: 'auto' | 'manuel';
  mode_apres: 'auto' | 'manuel';
  cause: string | null;
  demandes_en_attente: number;
  reaffectation_forcee: boolean;
}

export interface RapportOrganisation {
  simulation: boolean;
  changements: ChangementOrganisation[];
  entites: { entite: Ref; parent_avant: Ref | null; parent_apres: Ref | null; responsable_avant: Ref | null; responsable_apres: Ref | null }[];
  blocages: { user: Ref | null; message: string }[];
  resume: { nb_changements_manager: number; nb_changements_direction: number; nb_demandes_transferees: number; nb_blocages: number };
}

export type ActionOrganisation =
  | { action: 'affecter' | 'retirer'; direction_id: number; user_ids: number[] }
  | { action: 'changer_responsable'; direction_id: number; responsable_id: number | null }
  | { action: 'deplacer'; direction_id: number; parent_id: number | null }
  | { action: 'rattacher'; user_id: number; direction_id?: number | null; manager_mode?: 'auto' | 'manuel' | null; manager_id?: number | null };

export interface LigneAnomalie {
  id: number;
  nom: string;
  direction: Ref | null;
  manager: Ref | null;
  manager_mode: 'auto' | 'manuel';
  manager_attendu?: Ref | null;
}

export interface AnomaliesOrganisation {
  compteurs: Record<string, number>;
  total: number;
  entites_sans_responsable: { id: number; nom: string; type: string }[];
  utilisateurs: Record<'sans_direction' | 'sans_manager' | 'manuel_divergent' | 'auto_a_synchroniser' | 'manager_hors_entreprise' | 'managers_inactifs', LigneAnomalie[]>;
}

export type ModeImport = 'mise_a_jour' | 'miroir';

/** Résultat d'une analyse (simulation) ou d'une application d'import d'organigramme. */
export interface ResultatImport {
  status: boolean;
  simulation: boolean;
  mode: ModeImport;
  applicable: boolean;
  erreurs: { onglet: string; ligne: number | null; message: string }[];
  /** Points non bloquants : fichier non signé Pyramide, généré pour une autre entreprise… */
  avertissements: string[];
  resume: {
    lignes_entites: number;
    lignes_collaborateurs: number;
    entites_creees: number;
    entites_modifiees: number;
    entites_deplacees: number;
    entites_desactivees: number;
  };
  details: Record<'creees' | 'modifiees' | 'deplacees' | 'desactivees', { code: string | null; nom: string }[]>;
  rapport: RapportOrganisation;
  message?: string;
}

export interface ResumeOrganisation {
  entreprise_id: number;
  nb_entites: number;
  entites_sans_responsable: number;
  nb_utilisateurs: number;
  sans_direction: number;
  sans_manager: number;
  taux_completude: number;
}

/** Organisation des entreprises : organigrammes, anomalies, prévisualisation et application des changements. */
@Injectable({ providedIn: 'root' })
export class OrganisationService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private get headers() {
    return { Authorization: `Bearer ${localStorage.getItem('pyramide_token')}`, 'Content-Type': 'application/json' };
  }

  entreprisesAccessibles(): Observable<{ status: boolean; entreprises: { id: number; nom: string; client_id: number | null }[] }> {
    return this.http.get<any>(`${this.baseUrl}/organisation/entreprises-accessibles`, { headers: this.headers });
  }

  resume(): Observable<{ status: boolean; resume: Record<number, ResumeOrganisation> }> {
    return this.http.get<any>(`${this.baseUrl}/organisation/resume`, { headers: this.headers });
  }

  organigramme(entrepriseId: number, vue: VueOrganigramme, racineId?: number | null): Observable<{ status: boolean; noeuds: NoeudOrganigramme[] }> {
    let params = new HttpParams().set('vue', vue);
    if (racineId) params = params.set('racine_id', racineId);
    return this.http.get<any>(`${this.baseUrl}/entreprises/${entrepriseId}/organigramme`, { headers: this.headers, params });
  }

  /** Espace manager : ses N-1 (personnes) ou les entités qu'il dirige (structure). */
  organigrammeManager(vue: VueOrganigramme): Observable<{ status: boolean; noeuds: NoeudOrganigramme[] }> {
    return this.http.get<any>(`${this.baseUrl}/manager/organigramme`, { headers: this.headers, params: { vue } });
  }

  anomalies(entrepriseId: number): Observable<{ status: boolean } & AnomaliesOrganisation> {
    return this.http.get<any>(`${this.baseUrl}/entreprises/${entrepriseId}/organisation/anomalies`, { headers: this.headers });
  }

  managerAttendu(entrepriseId: number, directionId: number | null, userId?: number | null): Observable<{ status: boolean; manager: Ref | null }> {
    let params = new HttpParams();
    if (directionId) params = params.set('direction_id', directionId);
    if (userId) params = params.set('user_id', userId);
    return this.http.get<any>(`${this.baseUrl}/entreprises/${entrepriseId}/organisation/manager-attendu`, { headers: this.headers, params });
  }

  simuler(entrepriseId: number, action: ActionOrganisation): Observable<{ status: boolean; rapport: RapportOrganisation }> {
    return this.http.post<any>(`${this.baseUrl}/entreprises/${entrepriseId}/organisation/simuler`, action, { headers: this.headers });
  }

  appliquer(entrepriseId: number, action: ActionOrganisation): Observable<{ status: boolean; rapport: RapportOrganisation }> {
    return this.http.post<any>(`${this.baseUrl}/entreprises/${entrepriseId}/organisation/appliquer`, action, { headers: this.headers });
  }

  synchroniser(entrepriseId: number, appliquer: boolean, basculerAuto = false): Observable<{ status: boolean; rapport: RapportOrganisation }> {
    return this.http.post<any>(`${this.baseUrl}/entreprises/${entrepriseId}/organisation/synchroniser`,
      { appliquer, basculer_auto: basculerAuto }, { headers: this.headers });
  }

  /** Organigramme complet en fichier : Excel « aller-retour » (réimportable) ou JSON. */
  exporter(entrepriseId: number, format: 'xlsx' | 'json'): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/entreprises/${entrepriseId}/organisation/export`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('pyramide_token')}` },
      params: { format },
      responseType: 'blob',
    });
  }

  /** Modèle vide à remplir (onglets de saisie + Référentiel des codes et matricules existants). */
  modele(entrepriseId: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/entreprises/${entrepriseId}/organisation/modele`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('pyramide_token')}` },
      responseType: 'blob',
    });
  }

  /** Analyse (simulation, rien n'est écrit) ou application d'un import d'organigramme. */
  importer(entrepriseId: number, fichier: File, mode: ModeImport, simulation: boolean): Observable<ResultatImport> {
    const donnees = new FormData();
    donnees.append('fichier', fichier);
    donnees.append('mode', mode);
    donnees.append('simulation', simulation ? '1' : '0');
    // Pas de Content-Type : le navigateur pose la frontière multipart
    return this.http.post<ResultatImport>(`${this.baseUrl}/entreprises/${entrepriseId}/organisation/import`, donnees, {
      headers: { Authorization: `Bearer ${localStorage.getItem('pyramide_token')}` },
    });
  }

  /** Entreprise de l'utilisateur connecté (repli par défaut des écrans RH). */
  static entrepriseCourante(): number | null {
    try {
      return JSON.parse(localStorage.getItem('pyramide_user') || '{}').entreprise_id ?? null;
    } catch {
      return null;
    }
  }
}
