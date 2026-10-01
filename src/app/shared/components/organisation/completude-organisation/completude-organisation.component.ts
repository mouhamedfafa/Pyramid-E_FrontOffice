import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrganisationService, ResumeOrganisation } from '../../../service/organisation/organisation.service';

/**
 * Carte « complétude de l'organisation » : % de collaborateurs rattachés à une entité ET ayant
 * un N+1, collaborateurs sans direction / sans N+1, entités sans responsable.
 */
@Component({
  selector: 'app-completude-organisation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="card border-0 shadow-sm h-100" *ngIf="resume">
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <h6 class="fw-bold mb-0 text-dark"><i class="isax isax-hierarchy me-2 text-primary"></i>Organisation</h6>
          <a *ngIf="lien" [routerLink]="lien" class="small text-primary text-decoration-none">Voir l'organigramme <i class="isax isax-arrow-right-3"></i></a>
        </div>
        <div class="d-flex align-items-end gap-2 mb-2">
          <span class="fs-3 fw-bold" [class.text-success]="resume.taux_completude >= 90" [class.text-warning]="resume.taux_completude < 90">{{ resume.taux_completude }}%</span>
          <span class="text-muted small mb-1">des collaborateurs ont une direction et un N+1</span>
        </div>
        <div class="progress mb-3" style="height: 6px" role="progressbar" [attr.aria-valuenow]="resume.taux_completude" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" [class.bg-success]="resume.taux_completude >= 90" [class.bg-warning]="resume.taux_completude < 90" [style.width.%]="resume.taux_completude"></div>
        </div>
        <div class="row g-2 small">
          <div class="col-4"><div class="fw-semibold">{{ resume.sans_direction }}</div><div class="text-muted">sans direction</div></div>
          <div class="col-4"><div class="fw-semibold">{{ resume.sans_manager }}</div><div class="text-muted">sans N+1</div></div>
          <div class="col-4"><div class="fw-semibold" [class.text-danger]="resume.entites_sans_responsable">{{ resume.entites_sans_responsable }}</div><div class="text-muted">entité(s) sans responsable</div></div>
        </div>
      </div>
    </div>
  `,
})
export class CompletudeOrganisationComponent implements OnInit, OnChanges {
  /** Par défaut : l'entreprise de l'utilisateur connecté. */
  @Input() entrepriseId: number | null = null;
  @Input() lien: string | null = null;

  resume: ResumeOrganisation | null = null;
  private tout: Record<number, ResumeOrganisation> | null = null;

  constructor(private organisationService: OrganisationService) {}

  ngOnInit(): void {
    this.organisationService.resume().subscribe({
      next: (res) => { this.tout = res.resume || {}; this.choisir(); },
      error: () => (this.resume = null),
    });
  }

  ngOnChanges(): void {
    this.choisir();
  }

  private choisir(): void {
    if (!this.tout) return;
    const id = this.entrepriseId ?? OrganisationService.entrepriseCourante();
    this.resume = (id && this.tout[id]) || null;
  }
}
