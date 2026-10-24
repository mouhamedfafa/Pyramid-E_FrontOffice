import { Component, ElementRef, Input, OnChanges, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { VideothequeService } from '../../service/videotheque/videotheque.service';

/**
 * Lecteur d'une vidéo de la vidéothèque.
 * Demande un lien de lecture de courte durée à l'API (utilisateur authentifié) ; si le lien expire
 * pendant la lecture, un nouveau lien est demandé et la lecture reprend au même instant.
 */
@Component({
  selector: 'app-video-securisee',
  standalone: true,
  template: `
    @if (etat === 'erreur') {
      <div class="vs-etat"><i class="isax isax-video-slash"></i><span>Vidéo indisponible</span></div>
    } @else {
      @if (etat === 'chargement') {
        <div class="vs-etat"><span class="vs-spin"></span></div>
      }
      <video #lecteur [hidden]="etat !== 'pret'" controls [attr.preload]="preload" controlsList="nodownload"
             (contextmenu)="$event.preventDefault()" (error)="surErreur()" [src]="url || null"></video>
    }
  `,
  styles: [`
    :host { display: block; width: 100%; background: #0F1A21; border-radius: inherit; overflow: hidden; }
    video { display: block; width: 100%; max-height: 70vh; background: #000; }
    .vs-etat { aspect-ratio: 16 / 9; display: flex; flex-direction: column; align-items: center; justify-content: center;
               gap: 8px; color: #93A4AF; font-size: 13px; }
    .vs-etat i { font-size: 30px; }
    .vs-spin { width: 28px; height: 28px; border: 3px solid rgba(255,255,255,.2); border-top-color: #fff;
               border-radius: 50%; animation: vs-rot .8s linear infinite; }
    @keyframes vs-rot { to { transform: rotate(360deg); } }
  `],
})
export class VideoSecuriseeComponent implements OnChanges, OnDestroy {
  @Input({ required: true }) uuid!: string;
  @Input() preload: 'none' | 'metadata' | 'auto' = 'metadata';

  @ViewChild('lecteur') lecteur?: ElementRef<HTMLVideoElement>;

  url = '';
  etat: 'chargement' | 'pret' | 'erreur' = 'chargement';

  private sub?: Subscription;
  private renouvellements: number[] = [];

  constructor(private videotheque: VideothequeService) {}

  ngOnChanges(): void {
    this.renouvellements = [];
    this.charger();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  surErreur(): void {
    if (!this.url) return;
    // Lien expiré pendant la lecture : on en redemande un (au plus 3 fois par minute)
    const maintenant = Date.now();
    this.renouvellements = this.renouvellements.filter(t => maintenant - t < 60_000);
    if (this.renouvellements.length >= 3) {
      this.etat = 'erreur';
      return;
    }
    this.renouvellements.push(maintenant);
    const video = this.lecteur?.nativeElement;
    this.charger(video?.currentTime ?? 0, video ? !video.paused : false);
  }

  private charger(reprise = 0, enLecture = false): void {
    if (!this.uuid) return;
    this.sub?.unsubscribe();
    if (!reprise) this.etat = 'chargement';

    this.sub = this.videotheque.lecture(this.uuid).subscribe({
      next: lien => {
        this.url = lien.url;
        this.etat = 'pret';
        if (reprise || enLecture) {
          setTimeout(() => {
            const video = this.lecteur?.nativeElement;
            if (!video) return;
            video.addEventListener('loadedmetadata', () => {
              video.currentTime = reprise;
              if (enLecture) video.play().catch(() => {});
            }, { once: true });
          });
        }
      },
      error: () => (this.etat = 'erreur'),
    });
  }
}
