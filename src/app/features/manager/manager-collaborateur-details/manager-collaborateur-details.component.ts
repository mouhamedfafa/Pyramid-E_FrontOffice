import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { routes } from '../../../shared/service/routes/routes';
import { ManagerService } from '../../../shared/service/manager/manager.service';
import { CollaborateurDetail } from '../../../shared/models/manager.models';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import {
  classeProgression, classeStatutDemande, iconeTypeDemande, initiales,
  libelleNiveau, libelleTypeDemande, nomComplet,
} from '../common/manager-ui.utils';

type Onglet = 'formations' | 'parcours' | 'certificats' | 'quiz' | 'demandes';

@Component({
  selector: 'app-manager-collaborateur-details',
  templateUrl: './manager-collaborateur-details.component.html',
  styleUrl: './manager-collaborateur-details.component.scss',
  imports: [CommonModule, RouterLink],
})
export class ManagerCollaborateurDetailsComponent implements OnInit, OnDestroy {
  public routes = routes;
  data: CollaborateurDetail | null = null;
  loading = false;
  error = '';
  onglet: Onglet = 'formations';

  readonly initiales = initiales;
  readonly nomComplet = nomComplet;
  readonly libelleNiveau = libelleNiveau;
  readonly classeProgression = classeProgression;
  readonly classeStatutDemande = classeStatutDemande;
  readonly libelleTypeDemande = libelleTypeDemande;
  readonly iconeTypeDemande = iconeTypeDemande;

  private sub?: Subscription;

  constructor(private route: ActivatedRoute, private managerService: ManagerService) {}

  ngOnInit(): void {
    // Rechargement si on navigue d'un collaborateur à un autre (lien vers son manager, etc.)
    this.sub = this.route.paramMap.subscribe(params => this.charger(Number(params.get('id'))));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  charger(id: number): void {
    this.loading = true;
    this.error = '';
    this.data = null;
    this.managerService.getCollaborateur(id).subscribe({
      next: (res) => { this.data = res; this.loading = false; },
      error: (err) => { this.error = httpErrorMessage(err, 'Impossible de charger ce collaborateur.'); this.loading = false; },
    });
  }

  get c(): any {
    return this.data?.collaborateur;
  }

  cheminDirection(): string {
    const d = this.c?.direction_obj;
    if (!d) return this.c?.direction || '—';
    return [d.parent?.parent?.nom, d.parent?.nom, d.nom].filter(Boolean).join(' › ');
  }

  libelleStatutFormation(s: string): string {
    return ({ en_cours: 'En cours', termine: 'Terminée', non_commence: 'Non commencée', abandonne: 'Abandonnée' } as Record<string, string>)[s] ?? s;
  }

  classeStatutFormation(s: string): string {
    return ({ en_cours: 'mgr-badge--rh', termine: 'mgr-badge--validee', non_commence: 'mgr-badge--annulee', abandonne: 'mgr-badge--refusee' } as Record<string, string>)[s] ?? '';
  }

  estEnRetard(f: any): boolean {
    return f.statut_formation !== 'termine' && !!f.date_fin && new Date(f.date_fin) < new Date();
  }
}
