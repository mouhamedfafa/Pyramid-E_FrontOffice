import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationService } from '../../../service/organisation/organisation.service';

const CLE_MEMOIRE = 'pyramide_org_entreprise';

/**
 * Choix de l'entreprise dont on gère l'organisation (RH Groupe, Super Admin).
 * Masqué quand une seule entreprise est accessible ; émet toujours la sélection initiale.
 * L'entreprise choisie n'est jamais écrite dans pyramide_user.
 */
@Component({
  selector: 'app-selecteur-entreprise',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="sel-ent" *ngIf="entreprises.length > 1">
      <i class="ti ti-building-community"></i>
      <select (change)="choisir(+$any($event.target).value)" aria-label="Entreprise">
        <option *ngFor="let e of entreprises" [value]="e.id" [selected]="e.id === valeur">{{ e.nom }}</option>
      </select>
    </label>
  `,
  styles: [`
    .sel-ent {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 4px 4px 10px;
      border: 0.5px solid var(--color-border-secondary, #d4d4d0);
      border-radius: 8px;
      background: var(--color-background-primary, #fff);
      font-size: 12px;
      color: var(--color-text-secondary, #6b6b6b);
      margin: 0;
    }
    select { border: none; background: transparent; font-size: 12px; font-weight: 500; color: var(--color-text-primary, #1a1a1a); max-width: 260px; }
    select:focus { outline: none; }
  `],
})
export class SelecteurEntrepriseComponent implements OnInit {
  /** Entreprise imposée (ex. page détail entreprise) ; sinon mémoire locale, puis entreprise de l'utilisateur. */
  @Input() valeur: number | null = null;
  @Output() changement = new EventEmitter<{ id: number; nom: string }>();

  entreprises: { id: number; nom: string }[] = [];

  constructor(private organisationService: OrganisationService) {}

  ngOnInit(): void {
    this.organisationService.entreprisesAccessibles().subscribe({
      next: (res) => {
        this.entreprises = res.entreprises || [];
        const ids = this.entreprises.map(e => e.id);
        const candidats = [this.valeur, this.lireMemoire(), OrganisationService.entrepriseCourante(), ids[0]];
        const initial = candidats.find(id => id && ids.includes(id)) ?? null;
        if (initial) {
          this.choisir(initial, false);
        }
      },
      error: () => {
        const courante = OrganisationService.entrepriseCourante();
        if (courante) {
          this.valeur = courante;
          this.changement.emit({ id: courante, nom: '' });
        }
      },
    });
  }

  choisir(id: number, memoriser = true): void {
    this.valeur = id;
    if (memoriser) {
      try { localStorage.setItem(CLE_MEMOIRE, String(id)); } catch { /* stockage indisponible */ }
    }
    const e = this.entreprises.find(x => x.id === id);
    this.changement.emit({ id, nom: e?.nom ?? '' });
  }

  private lireMemoire(): number | null {
    try {
      const v = localStorage.getItem(CLE_MEMOIRE);
      return v ? Number(v) : null;
    } catch {
      return null;
    }
  }
}
