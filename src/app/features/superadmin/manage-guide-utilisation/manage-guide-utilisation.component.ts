import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-manage-guide-utilisation',
  template: `
    <div class="manage-guide">
      <div class="mg-header">
        <div>
          <h4><i class="isax isax-document-text"></i> Gestion du Guide d'utilisation</h4>
          <p class="mg-sub">Publiez un guide visible par tous les utilisateurs (lien ou fichier).</p>
        </div>
      </div>

      <div class="mg-body">
        <!-- Source toggle -->
        <div class="mg-source-toggle">
          <button type="button" class="mg-source-btn" [class.active]="guideType === 'url'"
                  (click)="guideType = 'url'">
            <i class="isax isax-link-21"></i> Lien URL
          </button>
          <button type="button" class="mg-source-btn" [class.active]="guideType === 'upload'"
                  (click)="guideType = 'upload'">
            <i class="isax isax-export-1"></i> Uploader un fichier
          </button>
        </div>

        <!-- URL mode -->
        <div class="mg-card" *ngIf="guideType === 'url'">
          <label class="mg-label">URL du guide</label>
          <input type="url" class="mg-input" [(ngModel)]="guideUrl"
                 placeholder="https://docs.google.com/document/d/.../pub">
          <small class="mg-hint">
            <strong>Google Docs :</strong> utilisez Fichier &rarr; Partager &rarr; Publier sur le Web pour obtenir un lien embed.
            Les liens Drive classiques sont bloqués par Google.
          </small>
        </div>

        <!-- Upload mode -->
        <div class="mg-card" *ngIf="guideType === 'upload'">
          <label class="mg-label">Fichier du guide</label>
          <div class="mg-dropzone" (click)="fileInput.click()"
               (dragover)="$event.preventDefault()" (drop)="onDrop($event)">
            <i class="isax isax-document-upload"></i>
            <p *ngIf="!selectedFile && !uploadedFileName">Cliquez ou déposez un fichier ici</p>
            <p *ngIf="selectedFile">{{ selectedFile.name }} ({{ formatSize(selectedFile.size) }})</p>
            <p *ngIf="!selectedFile && uploadedFileName">Fichier actuel : {{ uploadedFileName }}</p>
            <small>PDF, Word, PowerPoint — max 50 Mo</small>
          </div>
          <input #fileInput type="file" accept=".pdf,.doc,.docx,.ppt,.pptx" hidden
                 (change)="onFileSelected($event)">
          <div class="mg-progress" *ngIf="uploading">
            <div class="mg-progress-bar">
              <div class="mg-progress-fill" [style.width.%]="uploadProgress"></div>
            </div>
            <span class="mg-progress-text">{{ uploadProgress }}%</span>
          </div>
        </div>

        <!-- Current guide preview -->
        <div class="mg-current" *ngIf="currentGuideUrl && !saving">
          <label class="mg-label">Guide actuel</label>
          <div class="mg-current-info">
            <i class="isax isax-tick-circle"></i>
            <a [href]="currentGuideUrl" target="_blank" class="mg-current-link">
              {{ currentGuideType === 'upload' ? 'Voir le fichier uploadé' : currentGuideUrl }}
            </a>
          </div>
        </div>

        <div class="mg-actions">
          <button class="btn btn-primary" (click)="save()" [disabled]="saving || uploading">
            <i class="isax isax-tick-circle me-1"></i>
            {{ uploading ? 'Upload en cours...' : saving ? 'Enregistrement...' : 'Enregistrer' }}
          </button>
          <span class="mg-success" *ngIf="saved">Enregistré avec succès</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .manage-guide { background: #fff; border-radius: 12px; border: 1px solid #e5e7eb; }
    .mg-header { padding: 20px 24px; border-bottom: 1px solid #f0f0f0; }
    .mg-header h4 { font-size: 16px; font-weight: 700; color: #1a1a2e; margin: 0 0 4px; display: flex; align-items: center; gap: 8px; }
    .mg-header h4 i { font-size: 18px; color: #6366f1; }
    .mg-sub { font-size: 13px; color: #6b7280; margin: 0; }
    .mg-body { padding: 24px; }
    .mg-source-toggle { display: flex; gap: 8px; margin-bottom: 20px; }
    .mg-source-btn { padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; font-size: 12px; font-weight: 500; color: #6b7280; cursor: pointer; display: flex; align-items: center; gap: 6px; transition: all .15s; }
    .mg-source-btn.active { border-color: #6366f1; background: #eef2ff; color: #4f46e5; }
    .mg-source-btn:hover { border-color: #a5b4fc; }
    .mg-card { margin-bottom: 20px; }
    .mg-label { font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 6px; display: block; }
    .mg-input { width: 100%; padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none; transition: border-color .15s; }
    .mg-input:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,.1); }
    .mg-hint { font-size: 11px; color: #9ca3af; margin-top: 6px; display: block; line-height: 1.5; }
    .mg-hint strong { color: #6b7280; }
    .mg-dropzone { border: 2px dashed #d1d5db; border-radius: 10px; padding: 28px; text-align: center; cursor: pointer; transition: border-color .15s, background .15s; }
    .mg-dropzone:hover { border-color: #6366f1; background: #fafafe; }
    .mg-dropzone i { font-size: 36px; color: #9ca3af; display: block; margin-bottom: 8px; }
    .mg-dropzone p { font-size: 13px; color: #374151; margin: 0 0 4px; }
    .mg-dropzone small { font-size: 11px; color: #9ca3af; }
    .mg-progress { display: flex; align-items: center; gap: 10px; margin-top: 10px; }
    .mg-progress-bar { flex: 1; height: 6px; background: #e5e7eb; border-radius: 3px; overflow: hidden; }
    .mg-progress-fill { height: 100%; background: #6366f1; border-radius: 3px; transition: width .2s; }
    .mg-progress-text { font-size: 12px; font-weight: 600; color: #4f46e5; min-width: 36px; }
    .mg-current { margin-bottom: 20px; padding: 14px 16px; background: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0; }
    .mg-current-info { display: flex; align-items: center; gap: 8px; }
    .mg-current-info i { color: #16a34a; font-size: 16px; }
    .mg-current-link { font-size: 13px; color: #15803d; text-decoration: underline; word-break: break-all; }
    .mg-actions { display: flex; align-items: center; gap: 12px; }
    .mg-actions .btn { font-size: 13px; padding: 8px 20px; border-radius: 8px; }
    .mg-success { font-size: 12px; color: #16a34a; font-weight: 500; }
  `],
  imports: [CommonModule, FormsModule],
})
export class ManageGuideUtilisationComponent implements OnInit {
  guideUrl = '';
  guideType: 'url' | 'upload' = 'url';
  currentGuideUrl = '';
  currentGuideType: 'url' | 'upload' = 'url';
  uploadedFileName = '';
  selectedFile: File | null = null;
  uploading = false;
  uploadProgress = 0;
  saving = false;
  saved = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(`${environment.apiUrl}/help-center/guide`).subscribe({
      next: (res) => {
        this.guideUrl = res?.guide_url || '';
        this.guideType = res?.guide_type || 'url';
        this.currentGuideUrl = res?.guide_url || '';
        this.currentGuideType = res?.guide_type || 'url';
        if (res?.guide_type === 'upload' && res?.file_name) {
          this.uploadedFileName = res.file_name;
        }
      },
      error: () => {}
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer?.files?.length) {
      this.selectedFile = event.dataTransfer.files[0];
    }
  }

  formatSize(bytes: number): string {
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' Ko';
    return (bytes / (1024 * 1024)).toFixed(1) + ' Mo';
  }

  save(): void {
    if (this.guideType === 'upload' && this.selectedFile) {
      this.uploadFile();
    } else {
      this.saveUrl();
    }
  }

  private saveUrl(): void {
    this.saving = true;
    this.saved = false;
    this.http.post<any>(`${environment.apiUrl}/help-center/guide`, {
      guide_url: this.guideUrl,
      guide_type: 'url',
    }).subscribe({
      next: (res) => {
        this.saving = false;
        this.saved = true;
        this.currentGuideUrl = this.guideUrl;
        this.currentGuideType = 'url';
      },
      error: () => { this.saving = false; }
    });
  }

  private uploadFile(): void {
    this.uploading = true;
    this.uploadProgress = 0;
    this.saved = false;

    const formData = new FormData();
    formData.append('guide_file', this.selectedFile!);

    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) {
        this.uploadProgress = Math.round((e.loaded / e.total) * 100);
      }
    });

    xhr.addEventListener('load', () => {
      this.uploading = false;
      if (xhr.status >= 200 && xhr.status < 300) {
        const res = JSON.parse(xhr.responseText);
        this.saved = true;
        this.currentGuideUrl = res.guide_url || '';
        this.currentGuideType = 'upload';
        this.uploadedFileName = this.selectedFile?.name || '';
        this.selectedFile = null;
      }
    });

    xhr.addEventListener('error', () => { this.uploading = false; });

    const token = localStorage.getItem('pyramide_token');
    xhr.open('POST', `${environment.apiUrl}/help-center/guide/upload`);
    if (token) xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    xhr.send(formData);
  }
}
