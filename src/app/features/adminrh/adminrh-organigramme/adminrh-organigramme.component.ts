import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { VueOrganigramme } from '../../../shared/service/organisation/organisation.service';
import { OrganigrammeComponent } from '../../../shared/components/organisation/organigramme/organigramme.component';
import { AnomaliesOrganisationComponent } from '../../../shared/components/organisation/anomalies-organisation/anomalies-organisation.component';
import { SelecteurEntrepriseComponent } from '../../../shared/components/organisation/selecteur-entreprise/selecteur-entreprise.component';
import { ImportExportOrganisationComponent } from '../../../shared/components/organisation/import-export-organisation/import-export-organisation.component';

/** Organigramme éditable de l'entreprise (structure / personnes) + contrôle des anomalies. */
@Component({
  selector: 'app-adminrh-organigramme',
  standalone: true,
  imports: [CommonModule, RouterModule, OrganigrammeComponent, AnomaliesOrganisationComponent, SelecteurEntrepriseComponent, ImportExportOrganisationComponent],
  templateUrl: './adminrh-organigramme.component.html',
  styleUrls: ['./adminrh-organigramme.component.scss'],
})
export class AdminrhOrganigrammeComponent {
  routes = routes;
  entrepriseId: number | null = null;
  entrepriseNom = '';
  vue: VueOrganigramme = 'structure';
  rafraichirGraphique = 0;
  rafraichirAnomalies = 0;

  choisirEntreprise(e: { id: number; nom: string }): void {
    this.entrepriseId = e.id;
    this.entrepriseNom = e.nom || JSON.parse(localStorage.getItem('pyramide_user') || '{}')?.entreprise?.nom || '';
  }

  /** Clic sur une anomalie « personne » : bascule sur la vue Personnes. */
  voirPersonnes(): void {
    this.vue = 'personnes';
  }
}
