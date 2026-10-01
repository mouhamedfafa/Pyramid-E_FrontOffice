import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { ManagerService } from '../../../shared/service/manager/manager.service';
import { ManagerDashboard } from '../../../shared/models/manager.models';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import {
  classeProgression, classeStatutDemande, iconeTypeDemande, initiales,
  libelleNiveau, libelleTypeDemande, nomComplet,
} from '../common/manager-ui.utils';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.scss',
  imports: [CommonModule, RouterLink],
})
export class ManagerDashboardComponent implements OnInit {
  public routes = routes;
  perimetre: 'directs' | 'tous' = 'tous';
  data: ManagerDashboard | null = null;
  loading = false;
  error = '';

  readonly initiales = initiales;
  readonly nomComplet = nomComplet;
  readonly libelleNiveau = libelleNiveau;
  readonly classeProgression = classeProgression;
  readonly classeStatutDemande = classeStatutDemande;
  readonly libelleTypeDemande = libelleTypeDemande;
  readonly iconeTypeDemande = iconeTypeDemande;

  constructor(private managerService: ManagerService) {}

  ngOnInit(): void {
    this.charger();
  }

  setPerimetre(p: 'directs' | 'tous'): void {
    if (this.perimetre === p) return;
    this.perimetre = p;
    this.charger();
  }

  charger(): void {
    this.loading = true;
    this.error = '';
    this.managerService.getDashboard(this.perimetre).subscribe({
      next: (res) => { this.data = res; this.loading = false; },
      error: (err) => { this.error = httpErrorMessage(err, 'Impossible de charger le tableau de bord.'); this.loading = false; },
    });
  }

  /** Largeur relative des barres de répartition par niveau. */
  largeurNiveau(effectif: number): number {
    const max = Math.max(...(this.data?.repartition_niveaux ?? []).map(r => r.effectif), 1);
    return Math.round((effectif / max) * 100);
  }
}
