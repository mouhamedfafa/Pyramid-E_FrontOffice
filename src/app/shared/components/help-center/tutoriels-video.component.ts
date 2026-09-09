import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

interface Tutoriel {
  id: number;
  titre: string;
  description: string;
  video_url: string;
  video_type: 'url' | 'upload';
  safeUrl?: SafeResourceUrl;
  isEmbed?: boolean;
}

@Component({
  selector: 'app-tutoriels-video',
  template: `
    <div class="tuto-page">
      <div class="tuto-header">
        <h4><i class="isax isax-video-circle"></i> Tutoriels vid&eacute;o</h4>
        <p class="tuto-sub">Apprenez &agrave; utiliser la plateforme gr&acirc;ce &agrave; nos vid&eacute;os guides.</p>
      </div>

      <div class="tuto-grid" *ngIf="tutoriels.length > 0">
        <div class="tuto-card" *ngFor="let t of tutoriels">
          <div class="tuto-video">
            <iframe *ngIf="t.isEmbed" [src]="t.safeUrl" frameborder="0" allowfullscreen></iframe>
            <video *ngIf="!t.isEmbed" [src]="t.video_url" controls preload="metadata"></video>
          </div>
          <div class="tuto-info">
            <h5>{{ t.titre }}</h5>
            <p>{{ t.description }}</p>
          </div>
        </div>
      </div>

      <div class="tuto-empty" *ngIf="tutoriels.length === 0 && !loading">
        <i class="isax isax-video-circle"></i>
        <p>Aucun tutoriel vid&eacute;o disponible pour le moment.</p>
        <small>Le super administrateur peut ajouter des tutoriels depuis son espace.</small>
      </div>

      <div class="tuto-loading" *ngIf="loading">
        <div class="spinner-border spinner-border-sm text-muted"></div>
        <span>Chargement...</span>
      </div>
    </div>
  `,
  styles: [`
    .tuto-page { background: #fff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; }
    .tuto-header { padding: 20px 24px; border-bottom: 1px solid #f0f0f0; }
    .tuto-header h4 { font-size: 16px; font-weight: 700; color: #1a1a2e; margin: 0 0 4px; display: flex; align-items: center; gap: 8px; }
    .tuto-header h4 i { font-size: 18px; color: #006F78; }
    .tuto-sub { font-size: 13px; color: #6b7280; margin: 0; }
    .tuto-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; padding: 20px 24px; }
    .tuto-card { border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; transition: box-shadow .15s; }
    .tuto-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,.08); }
    .tuto-video { position: relative; padding-top: 56.25%; background: #f3f4f6; }
    .tuto-video iframe, .tuto-video video { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; object-fit: cover; }
    .tuto-info { padding: 14px 16px; }
    .tuto-info h5 { font-size: 14px; font-weight: 600; color: #1a1a2e; margin: 0 0 4px; }
    .tuto-info p { font-size: 12px; color: #6b7280; margin: 0; }
    .tuto-empty { padding: 60px 24px; text-align: center; color: #9ca3af; }
    .tuto-empty i { font-size: 48px; margin-bottom: 12px; display: block; }
    .tuto-empty p { font-size: 14px; color: #6b7280; margin: 0 0 4px; }
    .tuto-empty small { font-size: 12px; }
    .tuto-loading { padding: 40px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px; color: #6b7280; font-size: 13px; }
  `],
  imports: [CommonModule],
})
export class TutorielsVideoComponent implements OnInit {
  tutoriels: Tutoriel[] = [];
  loading = true;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.http.get<any>(`${environment.apiUrl}/help-center/tutoriels`).subscribe({
      next: (res) => {
        const items: any[] = res?.tutoriels || res?.data || [];
        this.tutoriels = items.map(t => {
          const embedUrl = this.toEmbedUrl(t.video_url);
          const isEmbed = embedUrl !== null;
          return {
            ...t,
            isEmbed,
            safeUrl: isEmbed ? this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl!) : null,
          };
        });
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  private toEmbedUrl(url: string): string | null {
    if (!url) return null;

    // YouTube: youtube.com/watch?v=ID or youtu.be/ID
    let match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;

    // Vimeo: vimeo.com/ID
    match = url.match(/vimeo\.com\/(\d+)/);
    if (match) return `https://player.vimeo.com/video/${match[1]}`;

    // Dailymotion
    match = url.match(/dailymotion\.com\/video\/([\w]+)/);
    if (match) return `https://www.dailymotion.com/embed/video/${match[1]}`;

    // Already an embed URL
    if (url.includes('/embed/') || url.includes('player.vimeo.com')) return url;

    // Uploaded file or unknown URL — use <video> tag
    return null;
  }
}
