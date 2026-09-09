import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

interface Annonce {
  id: number;
  titre: string;
  contenu: string;
  date: string;
  type: string;
}

@Component({
  selector: 'app-annonces',
  template: `
    <div class="ann-page">
      <div class="ann-header">
        <h4><i class="isax isax-volume-high"></i> Annonces et mises &agrave; jour</h4>
        <p class="ann-sub">Restez inform&eacute; des derni&egrave;res nouveaut&eacute;s de la plateforme.</p>
      </div>

      <div class="ann-list" *ngIf="annonces.length > 0">
        <div class="ann-item" *ngFor="let a of annonces">
          <div class="ann-icon">
            <i class="isax" [ngClass]="getIcon(a.type)"></i>
          </div>
          <div class="ann-content">
            <div class="ann-meta">
              <span class="ann-badge" [ngClass]="'ann-badge--' + a.type">{{ getTypeLabel(a.type) }}</span>
              <span class="ann-date">{{ a.date | date:'dd MMM yyyy' }}</span>
            </div>
            <h5>{{ a.titre }}</h5>
            <p>{{ a.contenu }}</p>
          </div>
        </div>
      </div>

      <div class="ann-empty" *ngIf="annonces.length === 0 && !loading">
        <i class="isax isax-volume-high"></i>
        <p>Aucune annonce pour le moment.</p>
      </div>

      <div class="ann-loading" *ngIf="loading">
        <div class="spinner-border spinner-border-sm text-muted"></div>
        <span>Chargement...</span>
      </div>
    </div>
  `,
  styles: [`
    .ann-page { background: #fff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; }
    .ann-header { padding: 20px 24px; border-bottom: 1px solid #f0f0f0; }
    .ann-header h4 { font-size: 16px; font-weight: 700; color: #1a1a2e; margin: 0 0 4px; display: flex; align-items: center; gap: 8px; }
    .ann-header h4 i { font-size: 18px; color: #006F78; }
    .ann-sub { font-size: 13px; color: #6b7280; margin: 0; }
    .ann-list { padding: 16px 24px; }
    .ann-item { display: flex; gap: 14px; padding: 16px 0; border-bottom: 1px solid #f3f4f6; }
    .ann-item:last-child { border-bottom: none; }
    .ann-icon { width: 40px; height: 40px; border-radius: 10px; background: #f0fdf4; color: #16a34a; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
    .ann-content { flex: 1; }
    .ann-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
    .ann-badge { font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 12px; text-transform: uppercase; letter-spacing: .03em; }
    .ann-badge--update { background: #dbeafe; color: #1d4ed8; }
    .ann-badge--feature { background: #f0fdf4; color: #16a34a; }
    .ann-badge--info { background: #fef3c7; color: #92400e; }
    .ann-badge--maintenance { background: #fee2e2; color: #dc2626; }
    .ann-date { font-size: 11px; color: #9ca3af; }
    .ann-content h5 { font-size: 14px; font-weight: 600; color: #1a1a2e; margin: 0 0 4px; }
    .ann-content p { font-size: 13px; color: #6b7280; margin: 0; line-height: 1.5; }
    .ann-empty { padding: 60px 24px; text-align: center; color: #9ca3af; }
    .ann-empty i { font-size: 48px; margin-bottom: 12px; display: block; }
    .ann-empty p { font-size: 14px; color: #6b7280; margin: 0; }
    .ann-loading { padding: 40px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px; color: #6b7280; font-size: 13px; }
  `],
  imports: [CommonModule],
})
export class AnnoncesComponent implements OnInit {
  annonces: Annonce[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(`${environment.apiUrl}/help-center/annonces`).subscribe({
      next: (res) => {
        this.annonces = res?.annonces || res?.data || [];
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  getIcon(type: string): string {
    switch (type) {
      case 'update': return 'isax-arrow-up-1';
      case 'feature': return 'isax-magicpen';
      case 'maintenance': return 'isax-warning-2';
      default: return 'isax-info-circle';
    }
  }

  getTypeLabel(type: string): string {
    switch (type) {
      case 'update': return 'Mise à jour';
      case 'feature': return 'Nouveauté';
      case 'maintenance': return 'Maintenance';
      default: return 'Info';
    }
  }
}
