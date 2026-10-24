import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VideothequeService, LienLecture, formatDuree } from '../../shared/service/videotheque/videotheque.service';
import { VideoSecuriseeComponent } from '../../shared/components/videotheque/video-securisee.component';

/**
 * Page de visionnage d'une vidéo de la vidéothèque : /videotheque/:uuid.
 * C'est le « lien sécurisé » partagé : la route exige une session (authGuard) et l'API vérifie
 * le droit de lecture (propriétaire, formateur de la formation, apprenant inscrit…).
 */
@Component({
  selector: 'app-video-lecture',
  standalone: true,
  imports: [VideoSecuriseeComponent],
  template: `
    <div class="vl">
      <header class="vl-top">
        <button type="button" class="vl-retour" (click)="retour()"><i class="isax isax-arrow-left-2"></i> Retour</button>
        <span class="vl-marque">Pyramide LMS</span>
      </header>
      <main class="vl-main">
        @if (etat === 'chargement') {
          <div class="vl-msg">Chargement…</div>
        } @else if (etat === 'introuvable') {
          <div class="vl-msg"><i class="isax isax-video-slash"></i><b>Contenu introuvable</b>
            <span>Cette vidéo n'existe pas ou vous n'y avez pas accès.</span></div>
        } @else if (info) {
          <h1>{{ info.titre }}</h1>
          <p class="vl-meta">{{ info.code }}@if (info.duree_secondes) { · {{ duree(info.duree_secondes) }} }</p>
          <app-video-securisee class="vl-video" [uuid]="info.uuid" preload="auto"></app-video-securisee>
          @if (info.description) { <p class="vl-desc">{{ info.description }}</p> }
        }
      </main>
    </div>
  `,
  styles: [`
    .vl { min-height: 100vh; background: #F4F6F8; color: #1A2E3A; }
    .vl-top { display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; background: #1A2E3A; color: #fff; }
    .vl-retour { border: 0; background: none; color: #fff; font: inherit; cursor: pointer; display: flex; gap: 6px; align-items: center; }
    .vl-marque { font-weight: 700; }
    .vl-main { max-width: 1000px; margin: 0 auto; padding: 24px 16px 48px; }
    h1 { font-size: 22px; margin: 0 0 4px; }
    .vl-meta { color: #6B7C88; margin: 0 0 14px; font-size: 13px; }
    .vl-video { border-radius: 12px; }
    .vl-desc { margin-top: 14px; white-space: pre-line; }
    .vl-msg { text-align: center; padding: 60px 16px; color: #6B7C88; display: flex; flex-direction: column; gap: 6px; align-items: center; }
    .vl-msg i { font-size: 36px; } .vl-msg b { color: #1A2E3A; font-size: 17px; }
  `],
})
export class VideoLectureComponent implements OnInit {
  info: LienLecture | null = null;
  etat: 'chargement' | 'pret' | 'introuvable' = 'chargement';
  duree = formatDuree;

  constructor(private route: ActivatedRoute, private location: Location, private videotheque: VideothequeService) {}

  ngOnInit(): void {
    const uuid = this.route.snapshot.paramMap.get('uuid') ?? '';
    // Mêmes conséquences pour 403 / 404 / uuid mal formé : écran générique
    this.videotheque.lecture(uuid).subscribe({
      next: info => { this.info = info; this.etat = 'pret'; },
      error: () => (this.etat = 'introuvable'),
    });
  }

  retour(): void {
    if (window.history.length > 1) this.location.back();
    else window.location.href = '/';
  }
}
