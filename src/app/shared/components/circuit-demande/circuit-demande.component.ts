import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AvisManager {
  nom: string | null;
  niveau: number | null;
  date: string | null;
  commentaire: string | null;
  motifRefus: string | null;
}

/**
 * Circuit de validation d'une demande de formation : Collaborateur → Manager (N+1 / N+2) → RH.
 *
 * - variante « compact »  : bloc « Avis du manager » (écrans RH)
 * - variante « timeline » : frise complète (écrans employé)
 *
 * Accepte les deux formes renvoyées par l'API : `decision_manager` (listes RH) ou les champs
 * bruts du modèle `decideur_manager`, `niveau_decideur`… (/mes-demandes-formation).
 */
@Component({
  selector: 'app-circuit-demande',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circuit-demande.component.html',
  styleUrl: './circuit-demande.component.scss',
})
export class CircuitDemandeComponent {
  @Input({ required: true }) demande: any;
  @Input() variante: 'compact' | 'timeline' = 'compact';

  get avis(): AvisManager | null {
    const d = this.demande;
    if (!d) return null;

    if (d.decision_manager) {
      return {
        nom:         d.decision_manager.manager?.name ?? null,
        niveau:      d.decision_manager.niveau ?? null,
        date:        d.decision_manager.date ?? null,
        commentaire: d.decision_manager.commentaire ?? null,
        motifRefus:  d.decision_manager.motif_refus ?? null,
      };
    }
    if (d.decideur_manager || d.date_decision_manager) {
      const m = d.decideur_manager;
      return {
        nom:         m ? (`${m.prenom ?? ''} ${m.nom ?? ''}`.trim() || m.name) : null,
        niveau:      d.niveau_decideur ?? null,
        date:        d.date_decision_manager ?? null,
        commentaire: d.commentaire_manager ?? null,
        motifRefus:  d.motif_refus_manager ?? null,
      };
    }
    return null;
  }

  get enAttenteManager(): boolean {
    return this.demande?.statut === 'en_attente_manager';
  }

  get refuseeParManager(): boolean {
    return !!this.avis?.motifRefus;
  }

  /** Étape RH : état visuel de la frise. */
  get etatRh(): 'done' | 'ko' | 'current' | 'todo' | 'annulee' {
    switch (this.demande?.statut) {
      case 'validee':    return 'done';
      case 'refusee':    return this.refuseeParManager ? 'todo' : 'ko';
      case 'en_attente': return 'current';
      case 'annulee':    return 'annulee';
      default:           return 'todo';
    }
  }

  get etatManager(): 'done' | 'ko' | 'current' | 'skip' {
    if (this.enAttenteManager) return 'current';
    if (this.avis) return this.refuseeParManager ? 'ko' : 'done';
    return 'skip';
  }
}
