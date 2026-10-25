import { Component, ElementRef, HostListener, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { sortRoles } from '../../utils/role-sort.utils';

export interface RoleSelectionnable {
  id: number;
  name: string;
  is_system?: boolean | number;
  role_level?: number;
}

/**
 * Liste déroulante des rôles, utilisable avec formControlName / ngModel. La valeur est l'id du rôle (ou null).
 * Les rôles système (communs à toutes les entreprises) sont regroupés en tête et signalés par un badge.
 */
@Component({
  selector: 'app-selecteur-role',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sr">
      <button type="button" class="form-select sr-trigger" [id]="inputId" [disabled]="desactive"
              aria-haspopup="listbox" [attr.aria-expanded]="ouvert" (click)="basculer()" (blur)="toucher()">
        <ng-container *ngIf="selection as r; else vide">
          <span class="sr-nom">{{ r.name }}</span>
          <span *ngIf="estSysteme(r)" class="sr-badge"><i class="isax isax-shield-tick"></i>Système</span>
        </ng-container>
        <ng-template #vide><span class="sr-placeholder">{{ placeholder }}</span></ng-template>
      </button>

      <div class="sr-liste" *ngIf="ouvert" role="listbox">
        <div class="sr-option sr-option--vide" role="option" [attr.aria-selected]="!selection" (click)="choisir(null)">{{ placeholder }}</div>

        <ng-container *ngIf="systeme.length">
          <div class="sr-groupe">Rôles système · toutes entreprises</div>
          <div *ngFor="let r of systeme" class="sr-option" role="option" [class.sr-option--on]="estChoisi(r)"
               [attr.aria-selected]="estChoisi(r)" (click)="choisir(r)">
            <span class="sr-nom">{{ r.name }}</span>
            <span class="sr-badge"><i class="isax isax-shield-tick"></i>Système</span>
          </div>
        </ng-container>

        <ng-container *ngIf="autres.length">
          <div class="sr-groupe">{{ systeme.length ? 'Autres rôles' : 'Rôles' }}</div>
          <div *ngFor="let r of autres" class="sr-option" role="option" [class.sr-option--on]="estChoisi(r)"
               [attr.aria-selected]="estChoisi(r)" (click)="choisir(r)">
            <span class="sr-nom">{{ r.name }}</span>
          </div>
        </ng-container>
      </div>
    </div>
  `,
  styles: [`
    .sr { position: relative; }
    .sr-trigger { display: flex; align-items: center; gap: 8px; text-align: left; min-height: 38px; }
    .sr-trigger:disabled { opacity: .65; }
    .sr-nom { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .sr-placeholder { color: #6b7280; }
    .sr-badge {
      display: inline-flex; align-items: center; gap: 3px; flex-shrink: 0;
      padding: .1rem .45rem; border-radius: 4px;
      background: #e5f5ec; color: #1a5c38; border: 1px solid #b8e4c9;
      font-size: .65rem; font-weight: 600; letter-spacing: .04em; text-transform: uppercase;
    }
    .sr-badge i { font-size: 11px; }
    .sr-liste {
      position: absolute; z-index: 1060; top: calc(100% + 4px); left: 0; right: 0;
      max-height: 280px; overflow-y: auto;
      background: #fff; border: 1px solid #dee2e6; border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, .12); padding: 4px 0;
    }
    .sr-groupe {
      padding: 8px 12px 4px; font-size: 10.5px; font-weight: 700;
      letter-spacing: .05em; text-transform: uppercase; color: #6b7280;
    }
    .sr-option { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 7px 12px; cursor: pointer; font-size: 14px; }
    .sr-option:hover { background: #f3f4f6; }
    .sr-option--on { background: #ecfdf5; font-weight: 600; }
    .sr-option--vide { color: #6b7280; }
  `],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SelecteurRoleComponent), multi: true }],
})
export class SelecteurRoleComponent implements ControlValueAccessor {
  @Input() placeholder = 'Sélectionner un rôle';
  @Input() inputId = '';

  @Input() set roles(liste: RoleSelectionnable[] | null) {
    const tries = sortRoles(liste ?? []);
    this.systeme = tries.filter(r => this.estSysteme(r));
    this.autres  = tries.filter(r => !this.estSysteme(r));
  }

  systeme: RoleSelectionnable[] = [];
  autres: RoleSelectionnable[] = [];
  valeur: number | null = null;
  ouvert = false;
  desactive = false;

  private onChange: (v: number | null) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private hote: ElementRef<HTMLElement>) {}

  get selection(): RoleSelectionnable | null {
    return [...this.systeme, ...this.autres].find(r => this.estChoisi(r)) ?? null;
  }

  estSysteme(r: RoleSelectionnable): boolean {
    return !!Number(r.is_system);
  }

  estChoisi(r: RoleSelectionnable): boolean {
    return this.valeur !== null && Number(r.id) === this.valeur;
  }

  basculer(): void {
    this.ouvert = !this.ouvert;
  }

  choisir(r: RoleSelectionnable | null): void {
    this.valeur = r ? Number(r.id) : null;
    this.ouvert = false;
    this.onChange(this.valeur);
    this.onTouched();
  }

  toucher(): void {
    this.onTouched();
  }

  @HostListener('document:click', ['$event'])
  fermerSiExterieur(event: MouseEvent): void {
    if (this.ouvert && !this.hote.nativeElement.contains(event.target as Node)) {
      this.ouvert = false;
    }
  }

  @HostListener('keydown.escape')
  fermer(): void {
    this.ouvert = false;
  }

  writeValue(valeur: number | string | null): void {
    this.valeur = valeur !== null && valeur !== '' && valeur !== undefined ? Number(valeur) : null;
  }

  registerOnChange(fn: (v: number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(desactive: boolean): void {
    this.desactive = desactive;
  }
}
