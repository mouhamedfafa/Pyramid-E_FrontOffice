import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

interface Tutoriel {
  id?: number;
  titre: string;
  description: string;
  video_url: string;
  video_type: 'url' | 'upload';
  editing?: boolean;
  uploading?: boolean;
  uploadProgress?: number;
  selectedFile?: File | null;
}

@Component({
  selector: 'app-manage-tutoriels-video',
  template: `
    <div class="manage-tuto">
      <div class="mt-header">
        <div>
          <h4><i class="isax isax-video-circle"></i> Gestion des Tutoriels vid&eacute;o</h4>
          <p class="mt-sub">Ajoutez et g&eacute;rez les vid&eacute;os tutoriels visibles par les utilisateurs.</p>
        </div>
        <button class="btn btn-primary btn-sm" (click)="addNew()">
          <i class="isax isax-add-circle me-1"></i> Ajouter
        </button>
      </div>

      <div class="mt-body">
        <div class="mt-item" *ngFor="let t of tutoriels; let i = index">
          <div class="mt-form" *ngIf="t.editing">
            <input class="mt-input" [(ngModel)]="t.titre" placeholder="Titre du tutoriel">
            <textarea class="mt-input mt-textarea" [(ngModel)]="t.description" placeholder="Description courte" rows="2"></textarea>

            <!-- Source selector -->
            <div class="mt-source-toggle">
              <button type="button" class="mt-source-btn" [class.active]="t.video_type === 'url'"
                      (click)="t.video_type = 'url'">
                <i class="isax isax-link-21"></i> Lien URL
              </button>
              <button type="button" class="mt-source-btn" [class.active]="t.video_type === 'upload'"
                      (click)="t.video_type = 'upload'">
                <i class="isax isax-export-1"></i> Uploader un fichier
              </button>
            </div>

            <!-- URL input -->
            <div *ngIf="t.video_type === 'url'">
              <input class="mt-input" [(ngModel)]="t.video_url" placeholder="URL de la vidéo (YouTube, Vimeo...)">
              <small class="mt-hint">Collez un lien YouTube, Vimeo ou Dailymotion. L'URL sera convertie automatiquement en lecteur embed.</small>
            </div>

            <!-- File upload -->
            <div *ngIf="t.video_type === 'upload'" class="mt-upload-zone">
              <div class="mt-dropzone" (click)="fileInput.click()"
                   (dragover)="$event.preventDefault()" (drop)="onDrop($event, t)">
                <i class="isax isax-video-play"></i>
                <p *ngIf="!t.selectedFile && !t.video_url">Cliquez ou déposez une vidéo ici</p>
                <p *ngIf="t.selectedFile">{{ t.selectedFile.name }} ({{ formatSize(t.selectedFile.size) }})</p>
                <p *ngIf="!t.selectedFile && t.video_url && t.video_type === 'upload'">Fichier déjà uploadé</p>
                <small>MP4, WebM, MOV — max 200 Mo</small>
              </div>
              <input #fileInput type="file" accept="video/mp4,video/webm,video/quicktime" hidden
                     (change)="onFileSelected($event, t)">
              <div class="mt-progress" *ngIf="t.uploading">
                <div class="mt-progress-bar">
                  <div class="mt-progress-fill" [style.width.%]="t.uploadProgress || 0"></div>
                </div>
                <span class="mt-progress-text">{{ t.uploadProgress || 0 }}%</span>
              </div>
            </div>

            <div class="mt-form-actions">
              <button class="btn btn-primary btn-sm" (click)="saveTutoriel(t, i)" [disabled]="t.uploading">
                {{ t.uploading ? 'Upload en cours...' : 'Enregistrer' }}
              </button>
              <button class="btn btn-outline-secondary btn-sm" (click)="cancelEdit(t, i)" [disabled]="t.uploading">Annuler</button>
            </div>
          </div>
          <div class="mt-row" *ngIf="!t.editing">
            <div class="mt-info">
              <h6>{{ t.titre }}</h6>
              <p>{{ t.description }}</p>
              <small class="mt-url">
                <span class="mt-type-badge" [ngClass]="t.video_type === 'upload' ? 'mt-type-badge--upload' : 'mt-type-badge--url'">
                  {{ t.video_type === 'upload' ? 'Fichier' : 'URL' }}
                </span>
                {{ t.video_url }}
              </small>
            </div>
            <div class="mt-actions">
              <button class="btn btn-sm btn-outline-primary" (click)="t.editing = true"><i class="isax isax-edit-2"></i></button>
              <button class="btn btn-sm btn-outline-danger" (click)="deleteTutoriel(t, i)"><i class="isax isax-trash"></i></button>
            </div>
          </div>
        </div>

        <div class="mt-empty" *ngIf="tutoriels.length === 0 && !loading">
          <p>Aucun tutoriel. Cliquez sur "Ajouter" pour commencer.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .manage-tuto { background: #fff; border-radius: 12px; border: 1px solid #e5e7eb; }
    .mt-header { padding: 20px 24px; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center; justify-content: space-between; }
    .mt-header h4 { font-size: 16px; font-weight: 700; color: #1a1a2e; margin: 0 0 4px; display: flex; align-items: center; gap: 8px; }
    .mt-header h4 i { font-size: 18px; color: #6366f1; }
    .mt-sub { font-size: 13px; color: #6b7280; margin: 0; }
    .mt-body { padding: 16px 24px; }
    .mt-item { border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px; margin-bottom: 12px; }
    .mt-row { display: flex; align-items: center; justify-content: space-between; }
    .mt-info { flex: 1; min-width: 0; }
    .mt-info h6 { font-size: 14px; font-weight: 600; color: #1a1a2e; margin: 0 0 2px; }
    .mt-info p { font-size: 12px; color: #6b7280; margin: 0 0 2px; }
    .mt-url { font-size: 11px; color: #9ca3af; word-break: break-all; display: flex; align-items: center; gap: 6px; }
    .mt-type-badge { font-size: 9px; font-weight: 700; padding: 1px 6px; border-radius: 4px; text-transform: uppercase; flex-shrink: 0; }
    .mt-type-badge--url { background: #dbeafe; color: #1d4ed8; }
    .mt-type-badge--upload { background: #f0fdf4; color: #16a34a; }
    .mt-actions { display: flex; gap: 6px; flex-shrink: 0; margin-left: 12px; }
    .mt-actions .btn { padding: 4px 8px; font-size: 14px; }
    .mt-form { display: flex; flex-direction: column; gap: 10px; }
    .mt-input { width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none; }
    .mt-input:focus { border-color: #6366f1; }
    .mt-textarea { resize: vertical; }
    .mt-hint { font-size: 11px; color: #9ca3af; margin-top: 2px; display: block; }
    .mt-source-toggle { display: flex; gap: 8px; }
    .mt-source-btn { padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; font-size: 12px; font-weight: 500; color: #6b7280; cursor: pointer; display: flex; align-items: center; gap: 6px; transition: all .15s; }
    .mt-source-btn.active { border-color: #6366f1; background: #eef2ff; color: #4f46e5; }
    .mt-source-btn:hover { border-color: #a5b4fc; }
    .mt-upload-zone { }
    .mt-dropzone { border: 2px dashed #d1d5db; border-radius: 10px; padding: 24px; text-align: center; cursor: pointer; transition: border-color .15s, background .15s; }
    .mt-dropzone:hover { border-color: #6366f1; background: #fafafe; }
    .mt-dropzone i { font-size: 32px; color: #9ca3af; display: block; margin-bottom: 8px; }
    .mt-dropzone p { font-size: 13px; color: #374151; margin: 0 0 4px; }
    .mt-dropzone small { font-size: 11px; color: #9ca3af; }
    .mt-progress { display: flex; align-items: center; gap: 10px; margin-top: 8px; }
    .mt-progress-bar { flex: 1; height: 6px; background: #e5e7eb; border-radius: 3px; overflow: hidden; }
    .mt-progress-fill { height: 100%; background: #6366f1; border-radius: 3px; transition: width .2s; }
    .mt-progress-text { font-size: 12px; font-weight: 600; color: #4f46e5; min-width: 36px; }
    .mt-form-actions { display: flex; gap: 8px; }
    .mt-form-actions .btn { font-size: 12px; }
    .mt-empty { padding: 40px; text-align: center; color: #9ca3af; font-size: 13px; }
  `],
  imports: [CommonModule, FormsModule],
})
export class ManageTutorielsVideoComponent implements OnInit {
  tutoriels: Tutoriel[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(`${environment.apiUrl}/help-center/tutoriels`).subscribe({
      next: (res) => {
        this.tutoriels = (res?.tutoriels || res?.data || []).map((t: any) => ({
          ...t,
          video_type: t.video_type || 'url',
          editing: false,
          selectedFile: null,
        }));
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  addNew(): void {
    this.tutoriels.unshift({
      titre: '', description: '', video_url: '', video_type: 'url',
      editing: true, selectedFile: null,
    });
  }

  onFileSelected(event: Event, t: Tutoriel): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      t.selectedFile = input.files[0];
    }
  }

  onDrop(event: DragEvent, t: Tutoriel): void {
    event.preventDefault();
    if (event.dataTransfer?.files?.length) {
      const file = event.dataTransfer.files[0];
      if (file.type.startsWith('video/')) {
        t.selectedFile = file;
      }
    }
  }

  formatSize(bytes: number): string {
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' Ko';
    return (bytes / (1024 * 1024)).toFixed(1) + ' Mo';
  }

  saveTutoriel(t: Tutoriel, index: number): void {
    if (t.video_type === 'upload' && t.selectedFile) {
      this.uploadAndSave(t, index);
    } else {
      this.saveData(t, index);
    }
  }

  private uploadAndSave(t: Tutoriel, index: number): void {
    t.uploading = true;
    t.uploadProgress = 0;

    const formData = new FormData();
    formData.append('video', t.selectedFile!);
    formData.append('titre', t.titre);
    formData.append('description', t.description || '');

    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) {
        t.uploadProgress = Math.round((e.loaded / e.total) * 100);
      }
    });

    xhr.addEventListener('load', () => {
      t.uploading = false;
      if (xhr.status >= 200 && xhr.status < 300) {
        const res = JSON.parse(xhr.responseText);
        t.video_url = res.video_url || res.tutoriel?.video_url || '';
        t.id = res.id || res.tutoriel?.id || t.id;
        t.video_type = 'upload';
        t.editing = false;
        t.selectedFile = null;
      }
    });

    xhr.addEventListener('error', () => { t.uploading = false; });

    const token = localStorage.getItem('pyramide_token');
    const url = t.id
      ? `${environment.apiUrl}/help-center/tutoriels/${t.id}/upload`
      : `${environment.apiUrl}/help-center/tutoriels/upload`;

    xhr.open('POST', url);
    if (token) xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    xhr.send(formData);
  }

  private saveData(t: Tutoriel, index: number): void {
    const payload = {
      titre: t.titre,
      description: t.description,
      video_url: t.video_url,
      video_type: t.video_type,
    };
    if (t.id) {
      this.http.put(`${environment.apiUrl}/help-center/tutoriels/${t.id}`, payload).subscribe({
        next: () => { t.editing = false; },
        error: () => {}
      });
    } else {
      this.http.post<any>(`${environment.apiUrl}/help-center/tutoriels`, payload).subscribe({
        next: (res) => { t.id = res?.id || res?.data?.id; t.editing = false; },
        error: () => {}
      });
    }
  }

  cancelEdit(t: Tutoriel, index: number): void {
    if (!t.id) {
      this.tutoriels.splice(index, 1);
    } else {
      t.editing = false;
    }
  }

  deleteTutoriel(t: Tutoriel, index: number): void {
    if (!t.id) { this.tutoriels.splice(index, 1); return; }
    this.http.delete(`${environment.apiUrl}/help-center/tutoriels/${t.id}`).subscribe({
      next: () => { this.tutoriels.splice(index, 1); },
      error: () => {}
    });
  }
}
