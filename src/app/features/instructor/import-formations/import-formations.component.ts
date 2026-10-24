import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import {
  AnomalieImport, FeuilleImport, ImportFormationsService, RapportControle, ResultatImport,
} from '../../../shared/service/import-formations/import-formations.service';

type Etape = 1 | 2 | 3 | 4;

/** Import de formations par classeur Excel : Fichier → Contrôle → Confirmation → Résultat. */
@Component({
  selector: 'app-import-formations',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './import-formations.component.html',
  styleUrl: './import-formations.component.scss',
})
export class ImportFormationsComponent {
  readonly routes = routes;
  readonly etapes = ['Fichier', 'Contrôle', 'Confirmation', 'Résultat'];
  readonly feuilles: { nom: 'Formation' | 'Module' | 'Section'; icone: string; objet: string }[] = [
    { nom: 'Formation', icone: 'isax-book', objet: 'formations' },
    { nom: 'Module', icone: 'isax-element-4', objet: 'modules' },
    { nom: 'Section', icone: 'isax-document-text', objet: 'sections' },
  ];
  private readonly TAILLE_MAX = 10 * 1024 * 1024;

  etape: Etape = 1;
  survol = false;
  erreurFichier = '';
  telechargement = false;

  controleEnCours = false;
  rapport: RapportControle | null = null;
  filtreFeuille: FeuilleImport | 'toutes' = 'toutes';
  filtreNiveau: 'tout' | 'E' | 'W' = 'tout';
  seulementValides = false;

  confirmation = false;
  importEnCours = false;
  erreurImport = '';
  resultat: ResultatImport | null = null;

  constructor(private service: ImportFormationsService) {}

  // ── Étape 1 ──

  telechargerModele(): void {
    this.telechargement = true;
    this.service.telechargerModele().subscribe({
      next: blob => { this.enregistrer(blob, 'Pyramide_Import_Formations.xlsx'); this.telechargement = false; },
      error: () => { this.erreurFichier = 'Téléchargement du modèle impossible pour le moment.'; this.telechargement = false; },
    });
  }

  surDepot(e: DragEvent): void {
    e.preventDefault();
    this.survol = false;
    const f = e.dataTransfer?.files?.[0];
    if (f) this.prendre(f);
  }

  surChoix(e: Event): void {
    const input = e.target as HTMLInputElement;
    const f = input.files?.[0];
    input.value = '';
    if (f) this.prendre(f);
  }

  private prendre(f: File): void {
    const ext = (f.name.split('.').pop() || '').toLowerCase();
    this.erreurFichier =
      ext === 'xlsm' ? 'Les fichiers avec macros (.xlsm) sont refusés. Enregistrez le classeur au format .xlsx.'
      : ext !== 'xlsx' ? 'Format non pris en charge : utilisez le modèle Excel (.xlsx).'
      : f.size > this.TAILLE_MAX ? 'Fichier trop volumineux (10 Mo maximum).'
      : '';
    if (this.erreurFichier) return;

    this.rapport = null;
    this.controleEnCours = true;
    this.aller(2);
    this.service.controler(f).subscribe({
      next: r => {
        this.rapport = r;
        this.filtreFeuille = 'toutes';
        this.filtreNiveau = 'tout';
        this.seulementValides = false;
        this.controleEnCours = false;
      },
      error: err => {
        this.controleEnCours = false;
        this.erreurFichier = err?.error?.message || err?.error?.errors?.fichier?.[0] || 'Contrôle impossible pour le moment. Réessayez.';
        this.aller(1);
      },
    });
  }

  // ── Étape 2 ──

  get anomalies(): AnomalieImport[] {
    return (this.rapport?.issues ?? []).filter(i =>
      (this.filtreFeuille === 'toutes' || i.feuille === this.filtreFeuille) &&
      (this.filtreNiveau === 'tout' || i.niveau === this.filtreNiveau));
  }

  compte(feuille: FeuilleImport, niveau: 'E' | 'W'): number {
    return (this.rapport?.issues ?? []).filter(i => i.feuille === feuille && i.niveau === niveau).length;
  }

  get totaux() {
    const s = this.rapport?.stats;
    const somme = (k: 'lues' | 'valides') => s ? s.Formation[k] + s.Module[k] + s.Section[k] : 0;
    const issues = this.rapport?.issues ?? [];
    return {
      lues: somme('lues'),
      valides: somme('valides'),
      avertissements: issues.filter(i => i.niveau === 'W').length,
      erreurs: issues.filter(i => i.niveau === 'E').length,
    };
  }

  get peutContinuer(): boolean {
    const r = this.rapport;
    return !!r && r.executable && (r.nb_erreurs === 0 || this.seulementValides);
  }

  exporterRapport(): void {
    const lignes = (this.rapport?.issues ?? []).map(i =>
      [i.feuille, i.ligne ?? '', i.colonne, i.niveau === 'E' ? 'Erreur' : 'Avertissement', i.code, i.message]);
    this.csv('rapport_controle.csv', ['Feuille', 'Ligne', 'Colonne', 'Niveau', 'Code', 'Message'], lignes);
  }

  // ── Étapes 3 et 4 ──

  lancer(): void {
    const id = this.rapport?.import_id;
    if (!id || !this.confirmation) return;
    this.importEnCours = true;
    this.erreurImport = '';
    this.resultat = null;
    this.aller(4);
    this.service.executer(id, this.seulementValides).subscribe({
      next: r => { this.resultat = r; this.importEnCours = false; },
      error: err => {
        this.importEnCours = false;
        this.erreurImport = err?.status === 409
          ? 'Cet import a déjà été exécuté.'
          : err?.error?.message || 'L\'import a échoué : aucune donnée n\'a été conservée. Réessayez.';
      },
    });
  }

  exporterCorrespondance(): void {
    const lignes = (this.resultat?.correspondance ?? []).map(c => [c.objet, c.libelle, c.id_fichier, c.id_plateforme]);
    this.csv('correspondance_id.csv', ['Objet', 'Libellé', 'ID du fichier', 'ID plateforme'], lignes);
  }

  recommencer(): void {
    this.rapport = null;
    this.resultat = null;
    this.confirmation = false;
    this.seulementValides = false;
    this.erreurFichier = '';
    this.erreurImport = '';
    this.aller(1);
  }

  aller(e: Etape): void {
    this.etape = e;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  taille(octets: number): string {
    return octets >= 1024 * 1024 ? (octets / 1024 / 1024).toFixed(1) + ' Mo' : Math.max(1, Math.round(octets / 1024)) + ' Ko';
  }

  // ── Fichiers ──

  private csv(nom: string, entetes: string[], lignes: (string | number)[][]): void {
    const echapper = (v: string | number) => `"${String(v).replace(/"/g, '""')}"`;
    const contenu = [entetes, ...lignes].map(l => l.map(echapper).join(';')).join('\n');
    this.enregistrer(new Blob(['﻿' + contenu], { type: 'text/csv;charset=utf-8' }), nom);
  }

  private enregistrer(blob: Blob, nom: string): void {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = nom;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
}
