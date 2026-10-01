import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RapportOrganisation } from '../../../service/organisation/organisation.service';

/**
 * Modale de prévisualisation (ou de compte rendu) d'un changement d'organisation :
 * N+1 modifiés, entités touchées, demandes transférées et blocages.
 */
@Component({
  selector: 'app-rapport-organisation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rapport-organisation.component.html',
  styleUrls: ['./rapport-organisation.component.scss'],
})
export class RapportOrganisationComponent {
  @Input() visible = false;
  @Input() titre = 'Impact du changement';
  @Input() rapport: RapportOrganisation | null = null;
  @Input() chargement = false;
  @Input() enCours = false;
  @Input() erreur = '';
  @Input() libelleConfirmer = 'Confirmer';
  /** Compte rendu après application : pas de bouton de confirmation. */
  @Input() lectureSeule = false;

  @Output() confirmer = new EventEmitter<void>();
  @Output() fermer = new EventEmitter<void>();

  get aucunImpact(): boolean {
    return !!this.rapport && !this.rapport.changements.length && !this.rapport.entites.length && !this.rapport.blocages.length;
  }

  modeLibelle(mode: string): string {
    return mode === 'manuel' ? 'Manuel' : 'Auto';
  }
}
