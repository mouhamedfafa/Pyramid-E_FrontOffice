import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { Formation, Module, Section } from '../../../shared/models/formation.models';
import { environment } from '../../../../environments/environment';

export interface Ressource {
  id: number;
  titre: string;
  type: 'video' | 'pdf' | 'ressource' | 'image' | 'fichier' | 'exercice';
  contenu?: string;
  ressources?: string[] | string;
  metadata?: any;
  duree_estimee?: string | number;
  statut?: string;
  ordre?: number;
  formationTitre: string;
  formationId: number;
  moduleTitre: string;
  moduleId: number;
  niveau?: string;
}

@Component({
  selector: 'app-video-ressources',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './video-ressources.component.html',
  styleUrl: './video-ressources.component.scss',
})
export class VideoRessourcesComponent implements OnInit {
  formations: Formation[] = [];
  allRessources: Ressource[] = [];
  filteredRessources: Ressource[] = [];

  videos: Ressource[] = [];
  documents: Ressource[] = [];
  liens: Ressource[] = [];

  activeTab: 'all' | 'videos' | 'docs' | 'links' | 'unused' = 'all';
  viewMode: 'grid' | 'list' = 'grid';
  searchQuery = '';
  filterType = '';
  filterFormation = '';
  sortBy = 'recent';

  loading = true;

  stats = {
    videos: 0,
    documents: 0,
    pdf: 0,
    liens: 0,
    stockage: '0'
  };

  formationNames: string[] = [];

  private embedCache = new Map<number, SafeResourceUrl | null>();
  private storageBase = environment.apiUrl.replace('/api', '');

  constructor(
    private formationService: FormationService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.loadRessources();
  }

  loadRessources(): void {
    this.loading = true;
    this.formationService.getFormationsformateur().subscribe({
      next: (res: any) => {
        if (res.status && res.formations) {
          this.formations = res.formations;
          this.extractRessources();
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  private extractRessources(): void {
    this.allRessources = [];
    const formationNamesSet = new Set<string>();

    for (const formation of this.formations) {
      formationNamesSet.add(formation.titre);
      if (formation.modules) {
        for (const mod of formation.modules) {
          if ((mod as any).sections) {
            for (const section of (mod as any).sections) {
              if (['video', 'pdf', 'ressource', 'image', 'fichier', 'exercice'].includes(section.type)) {
                this.allRessources.push({
                  id: section.id,
                  titre: section.titre,
                  type: section.type,
                  contenu: section.contenu,
                  ressources: section.ressources,
                  metadata: section.metadata,
                  duree_estimee: section.duree_estimee,
                  statut: (formation as any).est_publie ? 'publie' : (section.statut || 'brouillon'),
                  ordre: section.ordre,
                  formationTitre: formation.titre,
                  formationId: formation.id,
                  moduleTitre: mod.titre,
                  moduleId: mod.id,
                  niveau: formation.niveau || 'Non défini',
                });
              }
            }
          }
        }
      }
    }

    this.formationNames = Array.from(formationNamesSet);
    this.computeStats();
    this.applyFilters();
  }

  private computeStats(): void {
    this.stats.videos = this.allRessources.filter(r => r.type === 'video').length;
    this.stats.documents = this.allRessources.filter(r => ['ressource', 'image', 'fichier', 'exercice'].includes(r.type)).length;
    this.stats.pdf = this.allRessources.filter(r => r.type === 'pdf' || this.isPdfFile(r)).length;
    this.stats.liens = this.allRessources.filter(r => this.isLien(r)).length;

    const totalSections = this.allRessources.length;
    const estimatedMo = totalSections * 50;
    if (estimatedMo >= 1000) {
      this.stats.stockage = (estimatedMo / 1000).toFixed(1) + ' Go';
    } else {
      this.stats.stockage = estimatedMo + ' Mo';
    }
  }

  applyFilters(): void {
    let filtered = [...this.allRessources];

    if (this.activeTab === 'videos') {
      filtered = filtered.filter(r => r.type === 'video');
    } else if (this.activeTab === 'docs') {
      filtered = filtered.filter(r => ['pdf', 'ressource', 'image', 'fichier', 'exercice'].includes(r.type));
    } else if (this.activeTab === 'links') {
      filtered = filtered.filter(r => this.isLien(r));
    } else if (this.activeTab === 'unused') {
      filtered = filtered.filter(r => r.statut === 'brouillon');
    }

    if (this.filterType) {
      filtered = filtered.filter(r => r.type === this.filterType);
    }

    if (this.filterFormation) {
      filtered = filtered.filter(r => r.formationTitre === this.filterFormation);
    }

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(r =>
        r.titre.toLowerCase().includes(q) ||
        r.formationTitre.toLowerCase().includes(q) ||
        r.moduleTitre.toLowerCase().includes(q)
      );
    }

    if (this.sortBy === 'recent') {
      filtered.sort((a, b) => b.id - a.id);
    } else if (this.sortBy === 'ancien') {
      filtered.sort((a, b) => a.id - b.id);
    } else if (this.sortBy === 'alpha') {
      filtered.sort((a, b) => a.titre.localeCompare(b.titre));
    }

    this.filteredRessources = filtered;
    this.videos = filtered.filter(r => r.type === 'video');
    this.documents = filtered.filter(r => ['pdf', 'ressource', 'image', 'fichier', 'exercice'].includes(r.type));
    this.liens = filtered.filter(r => this.isLien(r));
  }

  switchTab(tab: 'all' | 'videos' | 'docs' | 'links' | 'unused'): void {
    this.activeTab = tab;
    this.applyFilters();
  }

  setView(mode: 'grid' | 'list'): void {
    this.viewMode = mode;
  }

  onSearch(): void {
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  isLien(r: Ressource): boolean {
    if (r.contenu && (r.contenu.startsWith('http://') || r.contenu.startsWith('https://'))) {
      return true;
    }
    return r.type === 'ressource' && !!r.contenu && r.contenu.includes('://');
  }

  isVideo(r: Ressource): boolean {
    return r.type === 'video';
  }

  isPdf(r: Ressource): boolean {
    return r.type === 'pdf';
  }

  getTypeIcon(r: Ressource): string {
    if (this.isPdfFile(r)) return 'isax-document-copy';
    if (this.isImageFile(r)) return 'isax-gallery';
    switch (r.type) {
      case 'video': return 'isax-video-circle';
      case 'pdf': return 'isax-document-copy';
      case 'image': return 'isax-gallery';
      case 'fichier': return 'isax-document-text';
      case 'exercice': return 'isax-edit-2';
      case 'ressource': return this.isLien(r) ? 'isax-link-21' : 'isax-document-text';
      default: return 'isax-document';
    }
  }

  getTypeIconIsax(r: Ressource): string {
    return this.getTypeIcon(r);
  }

  openRessource(r: Ressource): void {
    const src = this.extractFirstUrl(r.ressources) || r.contenu || '';
    const url = this.resolveContentUrl(src);
    if (url) {
      window.open(url, '_blank');
    }
  }

  private resolveContentUrl(content: string | undefined): string | null {
    if (!content) return null;
    if (content.startsWith('http://') || content.startsWith('https://')) {
      return content;
    }
    return `${this.storageBase}/storage/${content}`;
  }

  getVideoSource(r: Ressource): string {
    return this.extractFirstUrl(r.ressources) || r.contenu || '';
  }

  private extractFirstUrl(res: any): string {
    if (!res) return '';
    if (typeof res === 'string') return res;
    if (Array.isArray(res) && res.length > 0) {
      const first = res[0];
      if (typeof first === 'string') return first;
      if (Array.isArray(first) && first.length > 0) return first[0];
    }
    return '';
  }

  getEmbedUrl(r: Ressource): SafeResourceUrl | null {
    if (this.embedCache.has(r.id)) return this.embedCache.get(r.id)!;
    const url = this.getVideoSource(r);
    const embed = this.toEmbedUrl(url);
    const safe = embed ? this.sanitizer.bypassSecurityTrustResourceUrl(embed) : null;
    this.embedCache.set(r.id, safe);
    return safe;
  }

  getVideoFileUrl(r: Ressource): string | null {
    const url = this.getVideoSource(r);
    if (!url) return null;
    if (this.toEmbedUrl(url)) return null;
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return `${this.storageBase}/storage/${url}`;
  }

  isEmbedVideo(r: Ressource): boolean {
    return !!this.toEmbedUrl(this.getVideoSource(r));
  }

  isFileVideo(r: Ressource): boolean {
    const src = this.getVideoSource(r);
    return r.type === 'video' && !this.isEmbedVideo(r) && !!src;
  }

  isPdfFile(r: Ressource): boolean {
    if (r.type === 'pdf') return true;
    const url = this.extractFirstUrl(r.ressources);
    return !!url && url.toLowerCase().endsWith('.pdf');
  }

  isImageFile(r: Ressource): boolean {
    if (r.type === 'image') return true;
    const url = this.extractFirstUrl(r.ressources);
    if (!url) return false;
    return /\.(jpe?g|png|gif|webp|svg|bmp)$/i.test(url);
  }

  getDocumentUrl(r: Ressource): string | null {
    const src = this.extractFirstUrl(r.ressources) || r.contenu || '';
    return this.resolveContentUrl(src);
  }

  getDocumentSafeUrl(r: Ressource): SafeResourceUrl | null {
    if (this.embedCache.has(r.id)) return this.embedCache.get(r.id)!;
    const url = this.getDocumentUrl(r);
    const safe = url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
    this.embedCache.set(r.id, safe);
    return safe;
  }

  private toEmbedUrl(url: string): string | null {
    if (!url) return null;
    let match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
    match = url.match(/vimeo\.com\/(\d+)/);
    if (match) return `https://player.vimeo.com/video/${match[1]}`;
    match = url.match(/dailymotion\.com\/video\/([\w]+)/);
    if (match) return `https://www.dailymotion.com/embed/video/${match[1]}`;
    if (url.includes('/embed/') || url.includes('player.vimeo.com')) return url;
    return null;
  }

  editFormation(r: Ressource): void {
    window.open('/courses/instructor-course-edit/' + r.formationId, '_blank');
  }

  getTypeLabel(r: Ressource): string {
    if (this.isPdfFile(r)) return 'PDF';
    if (this.isImageFile(r)) return 'Image';
    switch (r.type) {
      case 'video': return 'Vidéo';
      case 'pdf': return 'PDF';
      case 'image': return 'Image';
      case 'fichier': return 'Document';
      case 'exercice': return 'Exercice';
      case 'ressource': return this.isLien(r) ? 'Lien' : 'Document';
      default: return 'Fichier';
    }
  }

  getThumbClass(r: Ressource): string {
    if (this.isPdfFile(r)) return 'mt-pdf';
    if (this.isImageFile(r)) return 'mt-img';
    switch (r.type) {
      case 'video': return 'mt-video';
      case 'pdf': return 'mt-pdf';
      case 'image': return 'mt-img';
      case 'fichier': return 'mt-doc';
      case 'exercice': return 'mt-doc';
      case 'ressource': return this.isLien(r) ? 'mt-link' : 'mt-doc';
      default: return 'mt-doc';
    }
  }

  getIconColor(r: Ressource): string {
    if (this.isPdfFile(r)) return '#F0A8A8';
    if (this.isImageFile(r)) return '#A8F0C8';
    switch (r.type) {
      case 'video': return '#F0CFA8';
      case 'pdf': return '#F0A8A8';
      case 'image': return '#A8F0C8';
      case 'ressource': return this.isLien(r) ? '#C8A8F0' : '#A8C8F0';
      default: return '#A8C8F0';
    }
  }

  getListIconBg(r: Ressource): string {
    if (this.isPdfFile(r)) return '#FCEBEB';
    if (this.isImageFile(r)) return '#EAF3DE';
    switch (r.type) {
      case 'video': return '#FAEEDA';
      case 'pdf': return '#FCEBEB';
      case 'image': return '#EAF3DE';
      case 'ressource': return this.isLien(r) ? '#EEEDFE' : '#E6F1FB';
      default: return '#E6F1FB';
    }
  }

  getListIconColor(r: Ressource): string {
    if (this.isPdfFile(r)) return '#A32D2D';
    if (this.isImageFile(r)) return '#3B6D11';
    switch (r.type) {
      case 'video': return '#854F0B';
      case 'pdf': return '#A32D2D';
      case 'image': return '#3B6D11';
      case 'ressource': return this.isLien(r) ? '#534AB7' : '#185FA5';
      default: return '#185FA5';
    }
  }

  getDuration(r: Ressource): string {
    if (!r.duree_estimee) return '';
    const mins = typeof r.duree_estimee === 'string' ? parseInt(r.duree_estimee, 10) : r.duree_estimee;
    if (isNaN(mins) || mins <= 0) return '';
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    if (h > 0) return `${h}:${m.toString().padStart(2, '0')}`;
    return `${m}:00`;
  }

  isUsed(r: Ressource): boolean {
    return r.statut === 'publie';
  }

  get totalCount(): number {
    return this.allRessources.length;
  }

  get unusedCount(): number {
    return this.allRessources.filter(r => r.statut === 'brouillon').length;
  }

  get topRessources(): Ressource[] {
    return this.allRessources.slice(0, 4);
  }

  get recentRessources(): Ressource[] {
    return [...this.allRessources].sort((a, b) => b.id - a.id).slice(0, 3);
  }

  getStoragePercent(): number {
    const totalSections = this.allRessources.length;
    const estimatedMo = totalSections * 50;
    const maxMo = 10000;
    return Math.min(Math.round((estimatedMo / maxMo) * 100), 100);
  }
}
