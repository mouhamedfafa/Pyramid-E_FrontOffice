import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, firstValueFrom, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface VideoBibliotheque {
  uuid: string;
  code: string;
  titre: string;
  description: string | null;
  nom_original: string;
  mime: string;
  taille: number;
  duree_secondes: number | null;
  cree_le: string;
  utilisations: number;
  formations: { id: number; titre: string }[];
}

/** Lien de lecture de courte durée (URL signée locale ou URL présignée S3). */
export interface LienLecture {
  uuid: string;
  code: string;
  titre: string;
  description: string | null;
  mime: string;
  duree_secondes: number | null;
  url: string;
  expire_a: string;
}

export interface ProgressionUpload {
  pourcentage: number;
  video?: VideoBibliotheque;
}

interface Reponse<T> { status: boolean; data: T; }

/**
 * Vidéothèque du formateur. L'envoi se fait par morceaux (taille fixée par l'API) :
 * pas de dépendance à la limite d'upload PHP, et reprise d'un morceau en cas d'échec réseau.
 */
@Injectable({ providedIn: 'root' })
export class VideothequeService {
  private readonly api = `${environment.apiUrl}/videotheque`;

  constructor(private http: HttpClient) {}

  lister(recherche = ''): Observable<VideoBibliotheque[]> {
    const params = recherche.trim() ? new HttpParams().set('recherche', recherche.trim()) : undefined;
    return this.http.get<Reponse<VideoBibliotheque[]>>(this.api, { params }).pipe(map(r => r.data));
  }

  modifier(uuid: string, donnees: { titre: string; description: string | null }): Observable<VideoBibliotheque> {
    return this.http.put<Reponse<VideoBibliotheque>>(`${this.api}/${uuid}`, donnees).pipe(map(r => r.data));
  }

  supprimer(uuid: string): Observable<void> {
    return this.http.delete<Reponse<null>>(`${this.api}/${uuid}`).pipe(map(() => undefined));
  }

  /** Lien de lecture (authentification requise ; le droit est vérifié côté API). */
  lecture(uuid: string): Observable<LienLecture> {
    return this.http.get<Reponse<LienLecture>>(`${this.api}/${uuid}/lecture`).pipe(map(r => r.data));
  }

  /** Lien à partager : page de la plateforme, accessible uniquement après connexion. */
  lienPartage(uuid: string): string {
    return `${window.location.origin}/videotheque/${uuid}`;
  }

  importer(fichier: File, titre: string, description: string | null = null): Observable<ProgressionUpload> {
    return new Observable<ProgressionUpload>(subscriber => {
      let annule = false;
      let uploadId: string | null = null;

      (async () => {
        const duree = await lireDuree(fichier);
        const init = await firstValueFrom(this.http.post<Reponse<{ upload_id: string; taille_morceau: number; nb_morceaux: number }>>(
          `${this.api}/uploads`, { nom: fichier.name, taille: fichier.size }));
        uploadId = init.data.upload_id;
        const { taille_morceau, nb_morceaux } = init.data;

        for (let i = 0; i < nb_morceaux; i++) {
          if (annule) return;
          const corps = new FormData();
          corps.append('index', String(i));
          corps.append('morceau', fichier.slice(i * taille_morceau, (i + 1) * taille_morceau), `${i}.part`);
          await this.avecReprise(() => firstValueFrom(this.http.post(`${this.api}/uploads/${uploadId}/morceaux`, corps)));
          subscriber.next({ pourcentage: Math.round(((i + 1) / nb_morceaux) * 95) });
        }

        const fin = await firstValueFrom(this.http.post<Reponse<VideoBibliotheque>>(
          `${this.api}/uploads/${uploadId}/terminer`, { titre, description, duree_secondes: duree }));
        subscriber.next({ pourcentage: 100, video: fin.data });
        subscriber.complete();
      })().catch(err => {
        if (uploadId && !annule) {
          this.http.delete(`${this.api}/uploads/${uploadId}`).subscribe({ error: () => {} });
        }
        subscriber.error(err);
      });

      return () => {
        annule = true;
        if (uploadId) {
          this.http.delete(`${this.api}/uploads/${uploadId}`).subscribe({ error: () => {} });
        }
      };
    });
  }

  private async avecReprise<T>(appel: () => Promise<T>, essais = 3): Promise<T> {
    for (let n = 1; ; n++) {
      try {
        return await appel();
      } catch (e: any) {
        // Erreurs de validation : inutile de réessayer
        if (n >= essais || (e?.status >= 400 && e?.status < 500)) throw e;
        await new Promise(r => setTimeout(r, 800 * n));
      }
    }
  }
}

/** Durée lue par le navigateur (le serveur n'a pas ffprobe). */
export function lireDuree(fichier: File): Promise<number | null> {
  return new Promise(resolve => {
    const video = document.createElement('video');
    const url = URL.createObjectURL(fichier);
    const fin = (valeur: number | null) => { URL.revokeObjectURL(url); resolve(valeur); };
    video.preload = 'metadata';
    video.onloadedmetadata = () => fin(Number.isFinite(video.duration) ? Math.round(video.duration) : null);
    video.onerror = () => fin(null);
    setTimeout(() => fin(null), 8000);
    video.src = url;
  });
}

export function formatDuree(secondes: number | null | undefined): string {
  if (!secondes) return '';
  const h = Math.floor(secondes / 3600);
  const m = Math.floor((secondes % 3600) / 60);
  const s = secondes % 60;
  return h ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}` : `${m}:${String(s).padStart(2, '0')}`;
}

export function formatTaille(octets: number): string {
  if (octets >= 1024 ** 3) return (octets / 1024 ** 3).toFixed(1) + ' Go';
  if (octets >= 1024 ** 2) return (octets / 1024 ** 2).toFixed(1) + ' Mo';
  return Math.max(1, Math.round(octets / 1024)) + ' Ko';
}
