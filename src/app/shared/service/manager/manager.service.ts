import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import {
  CollaborateurDetail,
  DemandeManager,
  ManagerDashboard,
  ManagerDemandesResponse,
  ManagerEquipeResponse,
  ManagerStatut,
  NoeudArbre,
} from '../../models/manager.models';

const STATUT_VIDE: ManagerStatut = {
  status: false,
  is_manager: false,
  nb_collaborateurs_directs: 0,
  nb_collaborateurs_total: 0,
  demandes_a_traiter: 0,
};

/**
 * Espace Manager : la hiérarchie (N+1 / N-1) est indépendante des rôles.
 * Le statut est mis en cache et partagé entre le guard et les sidebars.
 */
@Injectable({ providedIn: 'root' })
export class ManagerService {
  private apiUrl = `${environment.apiUrl}/manager`;

  readonly statut$ = new BehaviorSubject<ManagerStatut>(STATUT_VIDE);
  private statutRequest$?: Observable<ManagerStatut>;

  constructor(private http: HttpClient) {}

  /** Statut manager (mis en cache). `force` pour recharger, ex. après une décision. */
  getStatut(force = false): Observable<ManagerStatut> {
    if (!this.statutRequest$ || force) {
      this.statutRequest$ = this.http.get<ManagerStatut>(`${this.apiUrl}/statut`).pipe(
        catchError(() => of(STATUT_VIDE)),
        tap(s => this.statut$.next(s)),
        shareReplay(1),
      );
    }
    return this.statutRequest$;
  }

  isManager(): Observable<boolean> {
    return this.getStatut().pipe(map(s => !!s.is_manager));
  }

  getDashboard(perimetre: 'directs' | 'tous' = 'tous'): Observable<ManagerDashboard> {
    return this.http.get<ManagerDashboard>(`${this.apiUrl}/dashboard`, { params: { perimetre } });
  }

  getEquipe(filtres: { niveau?: number | null; search?: string; statut?: string; page?: number; per_page?: number } = {}): Observable<ManagerEquipeResponse> {
    return this.http.get<ManagerEquipeResponse>(`${this.apiUrl}/equipe`, { params: this.toParams(filtres) });
  }

  getArbre(): Observable<{ status: boolean; racine: NoeudArbre }> {
    return this.http.get<{ status: boolean; racine: NoeudArbre }>(`${this.apiUrl}/equipe/arbre`);
  }

  getCollaborateur(id: number): Observable<CollaborateurDetail> {
    return this.http.get<CollaborateurDetail>(`${this.apiUrl}/equipe/${id}`);
  }

  getDemandes(filtres: { a_traiter?: boolean; statut?: string; type_demande?: string; niveau?: number | null; search?: string } = {}): Observable<ManagerDemandesResponse> {
    return this.http.get<ManagerDemandesResponse>(`${this.apiUrl}/demandes`, {
      params: this.toParams({ ...filtres, a_traiter: filtres.a_traiter ? 1 : undefined }),
    });
  }

  validerDemande(id: number, commentaire_manager?: string): Observable<{ status: boolean; message: string; demande: DemandeManager }> {
    return this.http.put<any>(`${this.apiUrl}/demandes/${id}/valider`, { commentaire_manager })
      .pipe(tap(() => this.getStatut(true).subscribe()));
  }

  refuserDemande(id: number, motif_refus_manager: string, commentaire_manager?: string): Observable<{ status: boolean; message: string; demande: DemandeManager }> {
    return this.http.put<any>(`${this.apiUrl}/demandes/${id}/refuser`, { motif_refus_manager, commentaire_manager })
      .pipe(tap(() => this.getStatut(true).subscribe()));
  }

  /** À appeler à la déconnexion / changement d'utilisateur. */
  reset(): void {
    this.statutRequest$ = undefined;
    this.statut$.next(STATUT_VIDE);
  }

  private toParams(obj: Record<string, any>): HttpParams {
    let params = new HttpParams();
    Object.entries(obj).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') params = params.set(k, String(v));
    });
    return params;
  }
}
