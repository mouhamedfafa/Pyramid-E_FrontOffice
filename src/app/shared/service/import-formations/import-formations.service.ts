import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

export type FeuilleImport = 'Formation' | 'Module' | 'Section' | 'Fichier';

export interface AnomalieImport {
  feuille: FeuilleImport;
  ligne: number | null;
  colonne: string;
  code: string;
  niveau: 'E' | 'W';
  message: string;
}

export interface StatsFeuille { lues: number; valides: number; erreurs: number; avertissements: number; }

export interface RapportControle {
  import_id: string | null;
  fichier: { nom: string; taille: number };
  executable: boolean;
  bloquant: boolean;
  stats: Record<'Formation' | 'Module' | 'Section', StatsFeuille> | null;
  issues: AnomalieImport[];
  nb_erreurs: number;
  nb_valides: number;
}

export interface ResultatImport {
  compteurs: {
    formations: number; modules: number; sections: number;
    modules_defaut: number; sections_defaut: number; ignorees: number;
  };
  correspondance: { objet: string; libelle: string; id_fichier: string; id_plateforme: number }[];
  avertissements: number;
}

interface Reponse<T> { status: boolean; data: T; }

@Injectable({ providedIn: 'root' })
export class ImportFormationsService {
  private readonly api = `${environment.apiUrl}/imports/formations`;

  constructor(private http: HttpClient) {}

  telechargerModele(): Observable<Blob> {
    return this.http.get(`${this.api}/modele`, { responseType: 'blob' });
  }

  controler(fichier: File): Observable<RapportControle> {
    const corps = new FormData();
    corps.append('fichier', fichier);
    return this.http.post<Reponse<RapportControle>>(`${this.api}/controle`, corps).pipe(map(r => r.data));
  }

  executer(importId: string, onlyValid: boolean): Observable<ResultatImport> {
    return this.http.post<Reponse<ResultatImport>>(`${this.api}/${importId}/executer`, { only_valid: onlyValid })
      .pipe(map(r => r.data));
  }
}
