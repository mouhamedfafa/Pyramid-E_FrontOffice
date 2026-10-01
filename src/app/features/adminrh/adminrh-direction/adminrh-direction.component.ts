import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { StructureOrganisationComponent } from '../../../shared/components/organisation/structure-organisation/structure-organisation.component';
import { SelecteurEntrepriseComponent } from '../../../shared/components/organisation/selecteur-entreprise/selecteur-entreprise.component';
import { AnomaliesOrganisationComponent } from '../../../shared/components/organisation/anomalies-organisation/anomalies-organisation.component';
import { ImportExportOrganisationComponent } from '../../../shared/components/organisation/import-export-organisation/import-export-organisation.component';

/** Directions & organisation de l'entreprise (RH) ; le RH Groupe choisit l'entreprise. */
@Component({
  selector: 'app-adminrh-direction',
  standalone: true,
  imports: [CommonModule, RouterModule, StructureOrganisationComponent, SelecteurEntrepriseComponent, AnomaliesOrganisationComponent, ImportExportOrganisationComponent],
  templateUrl: './adminrh-direction.component.html',
  styleUrls: ['./adminrh-direction.component.scss'],
})
export class AdminrhDirectionComponent {
  routes = routes;
  entrepriseId: number | null = null;
  entrepriseNom = '';
  entiteAOuvrir: number | null = null;
  rafraichirAnomalies = 0;
  rafraichirStructure = 0;
  anomaliesVisibles = false;

  choisirEntreprise(e: { id: number; nom: string }): void {
    this.entrepriseId = e.id;
    this.entrepriseNom = e.nom || JSON.parse(localStorage.getItem('pyramide_user') || '{}')?.entreprise?.nom || '';
  }

  ouvrirEntite(id: number): void {
    // Réaffecter la même valeur ne déclenche pas ngOnChanges : on repasse par null
    this.entiteAOuvrir = null;
    setTimeout(() => (this.entiteAOuvrir = id));
  }
}
