import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

interface Annonce {
  id?: number;
  titre: string;
  contenu: string;
  type: string;
  date?: string;
  editing?: boolean;
}

@Component({
  selector: 'app-manage-annonces',
  template: `
    <div class="manage-ann">
      <div class="ma-header">
        <div>
          <h4><i class="isax isax-volume-high"></i> Gestion des Annonces et mises &agrave; jour</h4>
          <p class="ma-sub">Publiez des annonces visibles par tous les utilisateurs de la plateforme.</p>
        </div>
        <button class="btn btn-primary btn-sm" (click)="addNew()">
          <i class="isax isax-add-circle me-1"></i> Nouvelle annonce
        </button>
      </div>

      <div class="ma-body">
        <div class="ma-item" *ngFor="let a of annonces; let i = index">
          <div class="ma-form" *ngIf="a.editing">
            <input class="ma-input" [(ngModel)]="a.titre" placeholder="Titre de l'annonce">
            <select class="ma-input" [(ngModel)]="a.type">
              <option value="info">Info</option>
              <option value="update">Mise à jour</option>
              <option value="feature">Nouveauté</option>
              <option value="maintenance">Maintenance</option>
            </select>
            <textarea class="ma-input ma-textarea" [(ngModel)]="a.contenu" placeholder="Contenu de l'annonce" rows="3"></textarea>
            <div class="ma-form-actions">
              <button class="btn btn-primary btn-sm" (click)="saveAnnonce(a, i)">Publier</button>
              <button class="btn btn-outline-secondary btn-sm" (click)="cancelEdit(a, i)">Annuler</button>
            </div>
          </div>
          <div class="ma-row" *ngIf="!a.editing">
            <div class="ma-info">
              <div class="ma-meta">
                <span class="ma-badge" [ngClass]="'ma-badge--' + a.type">{{ getTypeLabel(a.type) }}</span>
                <span class="ma-date" *ngIf="a.date">{{ a.date | date:'dd MMM yyyy' }}</span>
              </div>
              <h6>{{ a.titre }}</h6>
              <p>{{ a.contenu }}</p>
            </div>
            <div class="ma-actions">
              <button class="btn btn-sm btn-outline-primary" (click)="a.editing = true"><i class="isax isax-edit-2"></i></button>
              <button class="btn btn-sm btn-outline-danger" (click)="deleteAnnonce(a, i)"><i class="isax isax-trash"></i></button>
            </div>
          </div>
        </div>

        <div class="ma-empty" *ngIf="annonces.length === 0 && !loading">
          <p>Aucune annonce publiée. Cliquez sur "Nouvelle annonce" pour commencer.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .manage-ann { background: #fff; border-radius: 12px; border: 1px solid #e5e7eb; }
    .ma-header { padding: 20px 24px; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center; justify-content: space-between; }
    .ma-header h4 { font-size: 16px; font-weight: 700; color: #1a1a2e; margin: 0 0 4px; display: flex; align-items: center; gap: 8px; }
    .ma-header h4 i { font-size: 18px; color: #6366f1; }
    .ma-sub { font-size: 13px; color: #6b7280; margin: 0; }
    .ma-body { padding: 16px 24px; }
    .ma-item { border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px; margin-bottom: 12px; }
    .ma-row { display: flex; align-items: flex-start; justify-content: space-between; }
    .ma-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
    .ma-badge { font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 12px; text-transform: uppercase; }
    .ma-badge--update { background: #dbeafe; color: #1d4ed8; }
    .ma-badge--feature { background: #f0fdf4; color: #16a34a; }
    .ma-badge--info { background: #fef3c7; color: #92400e; }
    .ma-badge--maintenance { background: #fee2e2; color: #dc2626; }
    .ma-date { font-size: 11px; color: #9ca3af; }
    .ma-info h6 { font-size: 14px; font-weight: 600; color: #1a1a2e; margin: 0 0 4px; }
    .ma-info p { font-size: 13px; color: #6b7280; margin: 0; line-height: 1.5; }
    .ma-actions { display: flex; gap: 6px; flex-shrink: 0; }
    .ma-actions .btn { padding: 4px 8px; font-size: 14px; }
    .ma-form { display: flex; flex-direction: column; gap: 8px; }
    .ma-input { width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none; }
    .ma-input:focus { border-color: #6366f1; }
    .ma-textarea { resize: vertical; }
    .ma-form-actions { display: flex; gap: 8px; }
    .ma-form-actions .btn { font-size: 12px; }
    .ma-empty { padding: 40px; text-align: center; color: #9ca3af; font-size: 13px; }
  `],
  imports: [CommonModule, FormsModule],
})
export class ManageAnnoncesComponent implements OnInit {
  annonces: Annonce[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(`${environment.apiUrl}/help-center/annonces`).subscribe({
      next: (res) => {
        this.annonces = (res?.annonces || res?.data || []).map((a: any) => ({ ...a, editing: false }));
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  addNew(): void {
    this.annonces.unshift({ titre: '', contenu: '', type: 'info', editing: true });
  }

  saveAnnonce(a: Annonce, index: number): void {
    const payload = { titre: a.titre, contenu: a.contenu, type: a.type };
    if (a.id) {
      this.http.put(`${environment.apiUrl}/help-center/annonces/${a.id}`, payload).subscribe({
        next: () => { a.editing = false; },
        error: () => {}
      });
    } else {
      this.http.post<any>(`${environment.apiUrl}/help-center/annonces`, payload).subscribe({
        next: (res) => { a.id = res?.id || res?.data?.id; a.date = new Date().toISOString(); a.editing = false; },
        error: () => {}
      });
    }
  }

  cancelEdit(a: Annonce, index: number): void {
    if (!a.id) {
      this.annonces.splice(index, 1);
    } else {
      a.editing = false;
    }
  }

  deleteAnnonce(a: Annonce, index: number): void {
    if (!a.id) { this.annonces.splice(index, 1); return; }
    this.http.delete(`${environment.apiUrl}/help-center/annonces/${a.id}`).subscribe({
      next: () => { this.annonces.splice(index, 1); },
      error: () => {}
    });
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
