import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModeImport, OrganisationService, ResultatImport } from '../../../service/organisation/organisation.service';
import { httpErrorMessage } from '../../../utils/http-error.utils';

type Etape = 'fichier' | 'analyse' | 'compte_rendu';

const TAILLE_MAX = 5 * 1024 * 1024;

/** Message explicite selon l'extension refusée (même règles que le serveur). */
function refusExtension(nom: string): string | null {
  const extension = (nom.split('.').pop() || '').toLowerCase();
  switch (extension) {
    case 'xlsx':
    case 'json':
      return null;
    case 'xls':
      return 'Ancien format Excel (.xls) : ouvrez le fichier dans Excel et enregistrez-le au format .xlsx.';
    case 'xlsm':
    case 'xltm':
      return 'Classeur avec macros (.xlsm) : enregistrez-le au format .xlsx (sans macros).';
    case 'csv':
    case 'txt':
      return 'Fichier CSV non pris en charge : utilisez le modèle Excel (.xlsx) proposé ci-dessus.';
    case 'ods':
      return 'Format OpenDocument (.ods) : enregistrez le fichier au format .xlsx.';
    default:
      return `Format « .${extension} » non pris en charge : utilisez le modèle Excel (.xlsx) ou un export .json.`;
  }
}

/**
 * Export de l'organigramme (Excel « aller-retour » ou JSON) et import du même fichier :
 * analyse sans écriture (erreurs ligne par ligne + impact sur les N+1), puis application.
 */
@Component({
  selector: 'app-import-export-organisation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './import-export-organisation.component.html',
  styleUrls: ['./import-export-organisation.component.scss'],
})
export class ImportExportOrganisationComponent {
  @Input() entrepriseId: number | null = null;
  @Input() entrepriseNom = '';
  @Input() peutImporter = true;
  @Output() changement = new EventEmitter<void>();

  menuExport = false;
  exportEnCours: 'xlsx' | 'json' | null = null;
  erreurExport = '';

  modaleVisible = false;
  etape: Etape = 'fichier';
  fichier: File | null = null;
  mode: ModeImport = 'mise_a_jour';
  enCours = false;
  erreur = '';
  /** Fichier refusé avant l'analyse (navigateur ou serveur) : liste des problèmes. */
  problemesFichier: string[] = [];
  modeleEnCours = false;
  resultat: ResultatImport | null = null;

  constructor(private organisationService: OrganisationService) {}

  @HostListener('document:click')
  fermerMenu(): void {
    this.menuExport = false;
  }

  // ── Export ──────────────────────────────────────────────────

  exporter(format: 'xlsx' | 'json'): void {
    if (!this.entrepriseId) return;
    this.menuExport = false;
    this.exportEnCours = format;
    this.erreurExport = '';
    this.organisationService.exporter(this.entrepriseId, format).subscribe({
      next: (blob) => {
        this.telecharger(blob, this.nomFichier(format));
        this.exportEnCours = null;
      },
      error: () => {
        this.erreurExport = 'Export impossible. Réessayez ou vérifiez vos droits.';
        this.exportEnCours = null;
      },
    });
  }

  /** Modèle vide : onglets de saisie, listes déroulantes, Référentiel des codes et matricules. */
  telechargerModele(): void {
    if (!this.entrepriseId) return;
    this.modeleEnCours = true;
    this.organisationService.modele(this.entrepriseId).subscribe({
      next: (blob) => {
        this.telecharger(blob, `modele-organigramme-${this.slug()}.xlsx`);
        this.modeleEnCours = false;
      },
      error: () => {
        this.erreur = 'Téléchargement du modèle impossible.';
        this.modeleEnCours = false;
      },
    });
  }

  private nomFichier(format: string): string {
    return `organigramme-${this.slug()}-${new Date().toISOString().slice(0, 10)}.${format}`;
  }

  private slug(): string {
    return (this.entrepriseNom || 'entreprise')
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  private telecharger(blob: Blob, nom: string): void {
    const url = URL.createObjectURL(blob);
    const lien = document.createElement('a');
    lien.href = url;
    lien.download = nom;
    document.body.appendChild(lien);
    lien.click();
    lien.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  // ── Import ──────────────────────────────────────────────────

  ouvrirImport(): void {
    this.modaleVisible = true;
    this.etape = 'fichier';
    this.fichier = null;
    this.mode = 'mise_a_jour';
    this.resultat = null;
    this.erreur = '';
    this.problemesFichier = [];
  }

  fermer(): void {
    if (this.enCours) return;
    this.modaleVisible = false;
  }

  /** Contrôles immédiats (avant tout envoi) : extension, fichier vide, taille. */
  choisirFichier(event: Event): void {
    const input = event.target as HTMLInputElement;
    const fichier = input.files?.[0] ?? null;
    this.erreur = '';
    this.problemesFichier = [];
    this.fichier = null;
    if (!fichier) return;

    const refus = refusExtension(fichier.name)
      ?? (fichier.size === 0 ? 'Le fichier est vide.' : null)
      ?? (fichier.size > TAILLE_MAX ? `Fichier trop volumineux (${(fichier.size / 1048576).toFixed(1)} Mo) : 5 Mo maximum.` : null);

    if (refus) {
      this.problemesFichier = [refus];
      if (input.value !== undefined) input.value = '';
      return;
    }
    this.fichier = fichier;
  }

  deposer(event: DragEvent): void {
    event.preventDefault();
    const fichier = event.dataTransfer?.files?.[0];
    if (fichier) {
      this.choisirFichier({ target: { files: [fichier] } } as unknown as Event);
    }
  }

  analyser(): void {
    if (!this.entrepriseId || !this.fichier) return;
    this.enCours = true;
    this.erreur = '';
    this.problemesFichier = [];
    this.organisationService.importer(this.entrepriseId, this.fichier, this.mode, true).subscribe({
      next: (res) => {
        this.resultat = res;
        this.etape = 'analyse';
        this.enCours = false;
      },
      error: (err) => {
        // 422 « Fichier refusé » : type réel, macros, onglets / colonnes manquants, version…
        const erreurs = err?.status === 422 ? err.error?.erreurs : null;
        if (Array.isArray(erreurs) && erreurs.length) {
          this.problemesFichier = erreurs.map((e: { message: string }) => e.message);
        } else {
          this.erreur = httpErrorMessage(err, 'Analyse impossible');
        }
        this.enCours = false;
      },
    });
  }

  appliquer(): void {
    if (!this.entrepriseId || !this.fichier || !this.resultat?.applicable) return;
    this.enCours = true;
    this.erreur = '';
    this.organisationService.importer(this.entrepriseId, this.fichier, this.mode, false).subscribe({
      next: (res) => {
        this.resultat = res;
        this.etape = 'compte_rendu';
        this.enCours = false;
        this.changement.emit();
      },
      error: (err) => {
        // 422 : l'analyse rejouée côté serveur a trouvé des erreurs (données modifiées entre-temps)
        if (err?.status === 422 && err.error?.resume) {
          this.resultat = err.error;
          this.etape = 'analyse';
        } else if (err?.status === 422 && Array.isArray(err.error?.erreurs)) {
          this.problemesFichier = err.error.erreurs.map((e: { message: string }) => e.message);
          this.etape = 'fichier';
        } else {
          this.erreur = httpErrorMessage(err, 'Import impossible');
        }
        this.enCours = false;
      },
    });
  }

  recommencer(): void {
    this.etape = 'fichier';
    this.resultat = null;
    this.erreur = '';
    this.problemesFichier = [];
  }

  get aucunChangement(): boolean {
    const r = this.resultat;
    if (!r) return false;
    const s = r.resume;
    return !s.entites_creees && !s.entites_modifiees && !s.entites_deplacees && !s.entites_desactivees
      && !r.rapport.changements.length && !r.rapport.entites.length;
  }

  get changementsAffiches() {
    return (this.resultat?.rapport.changements ?? []).slice(0, 100);
  }
}
