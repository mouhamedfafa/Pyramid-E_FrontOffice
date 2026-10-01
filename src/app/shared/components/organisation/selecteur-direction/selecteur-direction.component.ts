import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Direction, DirectionService } from '../../../service/direction/direction.service';

type OptionDirection = Direction & { niveau: number };

/**
 * Liste déroulante arborescente des entités d'une entreprise (Direction › Département › Équipe),
 * utilisable avec formControlName / ngModel. La valeur est l'id de l'entité (ou null).
 */
@Component({
  selector: 'app-selecteur-direction',
  standalone: true,
  imports: [CommonModule],
  template: `
    <select class="form-input" [id]="inputId" [disabled]="desactive || chargement"
            (change)="choisir($any($event.target).value)" (blur)="toucher()">
      <option value="" [selected]="!valeur">{{ chargement ? 'Chargement…' : placeholder }}</option>
      <option *ngFor="let d of options" [value]="d.id" [selected]="d.id === valeur" [disabled]="estExclue(d)">
        {{ indentation(d.niveau) }}{{ d.nom }} · {{ libelleType(d.type) }}
      </option>
    </select>
  `,
  styles: [`
    .form-input {
      width: 100%;
      padding: 7px 10px;
      border: 0.5px solid var(--color-border-secondary, #d4d4d0);
      border-radius: 8px;
      font-size: 13px;
      background: var(--color-background-primary, #fff);
      color: var(--color-text-primary, #1a1a1a);
    }
    .form-input:focus { outline: none; border-color: #0f6e56; box-shadow: 0 0 0 2px rgba(15, 110, 86, 0.12); }
  `],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SelecteurDirectionComponent), multi: true }],
})
export class SelecteurDirectionComponent implements ControlValueAccessor, OnChanges {
  @Input() entrepriseId: number | null = null;
  @Input() placeholder = 'Aucune direction';
  @Input() inputId = '';
  /** Entité (et sa descendance) à exclure, ex. pour choisir un nouveau parent. */
  @Input() exclureId: number | null = null;
  /** Arborescence déjà chargée par le parent (évite un appel). */
  @Input() arborescence: Direction[] | null = null;

  @Output() selectionChange = new EventEmitter<OptionDirection | null>();

  options: OptionDirection[] = [];
  valeur: number | null = null;
  chargement = false;
  desactive = false;

  private onChange: (v: number | null) => void = () => {};
  private onTouched: () => void = () => {};
  private exclus = new Set<number>();

  constructor(private directionService: DirectionService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['arborescence'] && this.arborescence) {
      this.definirOptions(this.arborescence);
    } else if (changes['entrepriseId'] && !this.arborescence) {
      this.charger();
    }
    if (changes['exclureId']) {
      this.calculerExclus();
    }
  }

  private charger(): void {
    if (!this.entrepriseId) {
      this.options = [];
      return;
    }
    this.chargement = true;
    this.directionService.getArborescence(this.entrepriseId).subscribe({
      next: (res) => {
        this.definirOptions(res.arborescence || []);
        this.chargement = false;
      },
      error: () => {
        this.options = [];
        this.chargement = false;
      },
    });
  }

  private definirOptions(arbre: Direction[]): void {
    this.options = DirectionService.aplatir(arbre);
    this.calculerExclus();
  }

  private calculerExclus(): void {
    this.exclus.clear();
    if (!this.exclureId) return;
    const racine = this.options.find(o => o.id === this.exclureId);
    if (!racine) return;
    // Descendants = options qui suivent, tant que le niveau est plus profond (ordre préfixe)
    const debut = this.options.indexOf(racine);
    this.exclus.add(racine.id);
    for (let i = debut + 1; i < this.options.length && this.options[i].niveau > racine.niveau; i++) {
      this.exclus.add(this.options[i].id);
    }
  }

  estExclue(d: OptionDirection): boolean {
    return this.exclus.has(d.id);
  }

  indentation(niveau: number): string {
    return niveau ? '   '.repeat(niveau) + '└ ' : '';
  }

  libelleType(type: string): string {
    return DirectionService.libelleType(type);
  }

  choisir(brut: string): void {
    this.valeur = brut ? Number(brut) : null;
    this.onChange(this.valeur);
    this.selectionChange.emit(this.options.find(o => o.id === this.valeur) ?? null);
  }

  toucher(): void {
    this.onTouched();
  }

  writeValue(valeur: number | null): void {
    this.valeur = valeur ? Number(valeur) : null;
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
