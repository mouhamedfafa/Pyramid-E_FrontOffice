import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kpi, KpiBlock, KpiDashboardPayload, KpiPeriode, niveauKpi, seuilKpi } from '../../service/dashboards/kpi-dashboard.service';

const COULEURS = ['#16A34A', '#F59E0B', '#DC2626'];

type CompareBlock = Extract<KpiBlock, { type: 'compare-table' }>;

/**
 * Moteur d'affichage commun à tous les dashboards KPI : un seul rendu, alimenté par le JSON
 * renvoyé par /api/dashboards/<profil>. Aucune logique de périmètre ici — le serveur décide.
 */
@Component({
  selector: 'app-kpi-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kpi-dashboard.component.html',
  styleUrls: ['./kpi-dashboard.component.scss'],
})
export class KpiDashboardComponent {
  @Input({ required: true }) payload!: KpiDashboardPayload;
  @Output() personChange = new EventEmitter<string>();
  @Output() compareChange = new EventEmitter<boolean>();
  @Output() viewChange = new EventEmitter<string>();
  @Output() periodChange = new EventEmitter<KpiPeriode>();

  readonly periodes: { id: KpiPeriode; label: string }[] = [
    { id: 'week', label: 'Semaine' }, { id: 'month', label: 'Mois' }, { id: 'quarter', label: 'Trimestre' },
  ];

  alertesOuvertes = false;
  tri: { id: string; asc: boolean } | null = null;
  rangMasque = false;

  readonly niveau = niveauKpi;
  readonly seuil = seuilKpi;

  get nbAlertes(): number {
    return this.payload.alerts.own.length + this.payload.alerts.watched.length;
  }

  get alerteCritique(): boolean {
    return [...this.payload.alerts.own, ...this.payload.alerts.watched].some(a => a.level === 2);
  }

  couleur(niveau: number): string {
    return COULEURS[niveau] ?? COULEURS[0];
  }

  /** Couleur d'un widget : couleur de niveau si hors seuil, sinon couleur du profil (sauf jauges). */
  couleurWidget(k: Kpi, toujoursNiveau = false): string {
    const l = this.niveau(k);
    return l || toujoursNiveau ? this.couleur(l) : this.payload.meta.accent;
  }

  heroClasse(n: number): string {
    return n === 6 ? 'n6' : n === 5 ? 'n5' : '';
  }

  // ── Widgets SVG ──────────────────────────────────────────────────────────

  pct(value: number, max: number): number {
    return Math.max(0, Math.min(1, max ? value / max : 0));
  }

  jauge(value: number, max: number) {
    const size = 150, cx = size / 2, cy = size * 0.6, r = size / 2 - 16, arc = Math.PI * r;
    return {
      size, h: size * 0.66, cx, cy,
      d: `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`,
      dash: `${this.pct(value, max) * arc} ${arc}`,
    };
  }

  anneau(value: number, max: number) {
    const size = 110, r = size / 2 - 10, c = size / 2, circ = 2 * Math.PI * r;
    return { size, r, c, dash: `${this.pct(value, max) * circ} ${circ}` };
  }

  nombre(x: number | null | undefined): string {
    return typeof x === 'number' && isFinite(x) ? x.toLocaleString('fr-FR', { maximumFractionDigits: 2 }) : '—';
  }

  // ── Blocs ────────────────────────────────────────────────────────────────

  lignesTriees(b: CompareBlock) {
    const lignes = b.rows.filter(r => !r.total);
    if (!this.tri) return lignes;
    const { id, asc } = this.tri;
    return [...lignes].sort((a, c) => ((a.cells[id]?.n ?? 0) - (c.cells[id]?.n ?? 0)) * (asc ? 1 : -1));
  }

  lignesTotal(b: CompareBlock) {
    return b.rows.filter(r => r.total);
  }

  trier(id: string): void {
    this.tri = this.tri?.id === id ? { id, asc: !this.tri.asc } : { id, asc: false };
  }

  fleche(id: string): string {
    return this.tri?.id === id ? (this.tri.asc ? ' ▲' : ' ▼') : '';
  }

  asCompare(b: KpiBlock): CompareBlock {
    return b as CompareBlock;
  }

  asTable(b: KpiBlock) {
    return b as Extract<KpiBlock, { type: 'table' }>;
  }

  asQuotes(b: KpiBlock) {
    return b as Extract<KpiBlock, { type: 'quotes' }>;
  }

  /** Histogramme « bugs enregistrés vs résolus » : géométrie des barres groupées par période. */
  histogramme(b: KpiBlock) {
    const c = b as Extract<KpiBlock, { type: 'chart-bugs' }>;
    const n = Math.max(1, c.registered.length);
    const w = 760, x0 = 40, base = 190, hauteur = 150;
    const max = Math.max(1, ...c.registered, ...c.resolved) * 1.18;
    const gw = (w - x0 - 10) / n, bw = Math.min(24, gw / 3.2);
    return {
      title: c.title, subtitle: c.subtitle, note: c.note, w, x0, base, bw,
      grille: [0.25, 0.5, 0.75, 1].map(g => base - g * hauteur / 1.18),
      groupes: c.registered.map((reg, i) => ({
        cx: x0 + gw * i + gw / 2, label: c.labels[i] ?? '', reg, res: c.resolved[i] ?? 0,
        h1: reg / max * hauteur, h2: (c.resolved[i] ?? 0) / max * hauteur,
      })),
    };
  }

  // ── Interactions ─────────────────────────────────────────────────────────

  basculerAlertes(e: Event): void {
    e.stopPropagation();
    this.alertesOuvertes = !this.alertesOuvertes;
  }

  @HostListener('document:click')
  fermerAlertes(): void {
    this.alertesOuvertes = false;
  }

  choisirPeriode(e: Event): void {
    this.periodChange.emit((e.target as HTMLSelectElement).value as KpiPeriode);
  }

  choisirPersonne(e: Event): void {
    this.personChange.emit((e.target as HTMLSelectElement).value);
  }

  basculerComparaison(e: Event): void {
    this.tri = null;
    this.compareChange.emit((e.target as HTMLInputElement).checked);
  }
}
