import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-guide-utilisation',
  template: `
    <div class="guide-page">
      <div class="guide-header">
        <h4><i class="isax isax-document-text"></i> Guide d'utilisation</h4>
        <p class="guide-sub">Consultez le guide pour d&eacute;couvrir toutes les fonctionnalit&eacute;s de la plateforme.</p>
      </div>

      <!-- Iframe embed (Google Docs publié, Notion, etc.) -->
      <div class="guide-body" *ngIf="guideType === 'url' && safeUrl">
        <iframe [src]="safeUrl" class="guide-iframe" frameborder="0"></iframe>
      </div>

      <!-- PDF uploaded — affichage natif navigateur -->
      <div class="guide-body" *ngIf="guideType === 'upload' && isPdf && safeUrl">
        <iframe [src]="safeUrl" class="guide-iframe" frameborder="0"></iframe>
      </div>

      <!-- Fichier uploadé non-PDF (Word, PPT) — bouton téléchargement -->
      <div class="guide-download" *ngIf="guideType === 'upload' && !isPdf && rawUrl">
        <div class="guide-download-card">
          <i class="isax isax-document-download"></i>
          <div>
            <h5>Le guide est disponible en t&eacute;l&eacute;chargement</h5>
            <p>{{ fileName || 'Guide d\\'utilisation' }}</p>
          </div>
          <a [href]="rawUrl" target="_blank" download class="btn btn-primary btn-sm">
            <i class="isax isax-import me-1"></i> T&eacute;l&eacute;charger
          </a>
        </div>
      </div>

      <div class="guide-empty" *ngIf="!rawUrl && !loading">
        <i class="isax isax-document-text"></i>
        <p>Aucun guide n'a &eacute;t&eacute; publi&eacute; pour le moment.</p>
        <small>Le super administrateur peut publier un guide depuis son espace.</small>
      </div>

      <div class="guide-loading" *ngIf="loading">
        <div class="spinner-border spinner-border-sm text-muted"></div>
        <span>Chargement...</span>
      </div>
    </div>
  `,
  styles: [`
    .guide-page { background: #fff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; }
    .guide-header { padding: 20px 24px; border-bottom: 1px solid #f0f0f0; }
    .guide-header h4 { font-size: 16px; font-weight: 700; color: #1a1a2e; margin: 0 0 4px; display: flex; align-items: center; gap: 8px; }
    .guide-header h4 i { font-size: 18px; color: #006F78; }
    .guide-sub { font-size: 13px; color: #6b7280; margin: 0; }
    .guide-body { padding: 0; }
    .guide-iframe { width: 100%; min-height: 80vh; border: none; }
    .guide-download { padding: 40px 24px; }
    .guide-download-card { display: flex; align-items: center; gap: 16px; padding: 20px 24px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; }
    .guide-download-card i { font-size: 36px; color: #6366f1; flex-shrink: 0; }
    .guide-download-card h5 { font-size: 14px; font-weight: 600; color: #1a1a2e; margin: 0 0 2px; }
    .guide-download-card p { font-size: 12px; color: #6b7280; margin: 0; }
    .guide-download-card .btn { flex-shrink: 0; margin-left: auto; }
    .guide-empty { padding: 60px 24px; text-align: center; color: #9ca3af; }
    .guide-empty i { font-size: 48px; margin-bottom: 12px; display: block; }
    .guide-empty p { font-size: 14px; color: #6b7280; margin: 0 0 4px; }
    .guide-empty small { font-size: 12px; }
    .guide-loading { padding: 40px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px; color: #6b7280; font-size: 13px; }
  `],
  imports: [CommonModule],
})
export class GuideUtilisationComponent implements OnInit {
  safeUrl: SafeResourceUrl | null = null;
  rawUrl: string | null = null;
  guideType: 'url' | 'upload' = 'url';
  isPdf = false;
  fileName = '';
  loading = true;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.http.get<any>(`${environment.apiUrl}/help-center/guide`).subscribe({
      next: (res) => {
        const url = res?.guide_url || res?.data?.url;
        this.guideType = res?.guide_type || 'url';
        this.fileName = res?.file_name || '';

        if (url) {
          this.rawUrl = url;
          this.isPdf = url.toLowerCase().endsWith('.pdf');

          if (this.guideType === 'url' || this.isPdf) {
            this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }
        }
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }
}
