import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VideothequeService, VideoBibliotheque, formatDuree, formatTaille } from '../../service/videotheque/videotheque.service';
import { VideoSecuriseeComponent } from './video-securisee.component';
import { routes } from '../../service/routes/routes';

/** Choix d'une vidéo de la vidéothèque du formateur (formulaires de création / modification de formation). */
@Component({
  selector: 'app-videotheque-picker',
  standalone: true,
  imports: [FormsModule, VideoSecuriseeComponent],
  template: `
    <div class="vp">
      <div class="vp-bar">
        <div class="vp-search">
          <i class="isax isax-search-normal-1"></i>
          <input type="text" [(ngModel)]="recherche" [ngModelOptions]="{ standalone: true }" placeholder="Rechercher par titre ou code…">
        </div>
        <a [href]="routes.instructorVideoRessources" target="_blank" class="vp-lien"><i class="isax isax-add-circle"></i> Importer une vidéo</a>
        <button type="button" class="vp-lien" (click)="charger()" title="Actualiser"><i class="isax isax-refresh"></i></button>
      </div>

      @if (chargement) {
        <div class="vp-vide">Chargement de votre vidéothèque…</div>
      } @else if (erreur) {
        <div class="vp-vide">Vidéothèque indisponible pour le moment.</div>
      } @else if (!videos.length) {
        <div class="vp-vide">Votre vidéothèque est vide. Importez une vidéo depuis « Vidéos &amp; ressources ».</div>
      } @else {
        <ul class="vp-liste">
          @for (v of filtrees; track v.uuid) {
            <li [class.on]="v.uuid === selection" (click)="choisir(v)">
              <i class="isax" [class.isax-tick-circle]="v.uuid === selection" [class.isax-video-circle]="v.uuid !== selection"></i>
              <div class="vp-info">
                <b>{{ v.titre }}</b>
                <small>{{ v.code }}@if (v.duree_secondes) { · {{ duree(v.duree_secondes) }} } · {{ taille(v.taille) }}</small>
              </div>
            </li>
          } @empty {
            <li class="vp-aucun">Aucune vidéo ne correspond à « {{ recherche }} ».</li>
          }
        </ul>
      }

      @if (selection) {
        <div class="vp-choix">
          <span><i class="isax isax-tick-circle"></i> {{ titreSelection || 'Vidéo sélectionnée' }}</span>
          <button type="button" class="vp-lien" (click)="apercu = !apercu">{{ apercu ? 'Masquer l\\'aperçu' : 'Aperçu' }}</button>
          <button type="button" class="vp-lien vp-retirer" (click)="choisir(null)">Retirer</button>
        </div>
        @if (apercu) {
          <app-video-securisee class="vp-apercu" [uuid]="selection"></app-video-securisee>
        }
      }
    </div>
  `,
  styles: [`
    .vp { border: 1px solid #E3E8EC; border-radius: 10px; padding: 10px; background: #fff; }
    .vp-bar { display: flex; gap: 8px; align-items: center; margin-bottom: 8px; }
    .vp-search { flex: 1; display: flex; align-items: center; gap: 6px; border: 1px solid #E3E8EC; border-radius: 8px; padding: 4px 8px; }
    .vp-search input { border: 0; outline: 0; flex: 1; font-size: 13px; background: transparent; }
    .vp-lien { border: 0; background: none; color: #1A7A4A; font-size: 13px; font-weight: 600; cursor: pointer; white-space: nowrap; text-decoration: none; padding: 4px; }
    .vp-retirer { color: #C0392B; }
    .vp-liste { list-style: none; margin: 0; padding: 0; max-height: 220px; overflow: auto; }
    .vp-liste li { display: flex; gap: 10px; align-items: center; padding: 7px 8px; border-radius: 8px; cursor: pointer; }
    .vp-liste li:hover { background: #F4F6F8; }
    .vp-liste li.on { background: #E8F5EE; }
    .vp-liste li.on i { color: #1A7A4A; }
    .vp-liste li i { font-size: 20px; color: #854F0B; }
    .vp-info { display: flex; flex-direction: column; min-width: 0; }
    .vp-info b { font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .vp-info small { color: #6B7C88; font-size: 12px; }
    .vp-vide, .vp-aucun { color: #6B7C88; font-size: 13px; padding: 14px; text-align: center; cursor: default !important; }
    .vp-choix { display: flex; align-items: center; gap: 10px; margin-top: 8px; padding-top: 8px; border-top: 1px solid #E3E8EC; font-size: 13px; }
    .vp-choix span { flex: 1; color: #1A7A4A; font-weight: 600; }
    .vp-apercu { margin-top: 8px; border-radius: 8px; }
  `],
})
export class VideothequePickerComponent implements OnInit {
  @Input() selection: string | null = null;
  @Output() selectionChange = new EventEmitter<VideoBibliotheque | null>();

  routes = routes;
  videos: VideoBibliotheque[] = [];
  recherche = '';
  chargement = true;
  erreur = false;
  apercu = false;

  constructor(private videotheque: VideothequeService) {}

  ngOnInit(): void {
    this.charger();
  }

  get filtrees(): VideoBibliotheque[] {
    const q = this.recherche.trim().toLowerCase();
    return q ? this.videos.filter(v => v.titre.toLowerCase().includes(q) || v.code.toLowerCase().includes(q)) : this.videos;
  }

  get titreSelection(): string {
    return this.videos.find(v => v.uuid === this.selection)?.titre ?? '';
  }

  charger(): void {
    this.chargement = true;
    this.erreur = false;
    this.videotheque.lister().subscribe({
      next: v => { this.videos = v; this.chargement = false; },
      error: () => { this.erreur = true; this.chargement = false; },
    });
  }

  choisir(v: VideoBibliotheque | null): void {
    this.selection = v?.uuid ?? null;
    this.apercu = false;
    this.selectionChange.emit(v);
  }

  duree = formatDuree;
  taille = formatTaille;
}
