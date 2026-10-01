import {
  AfterViewInit, Component, ElementRef, EventEmitter, Input, NgZone, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrgChart } from 'd3-org-chart';
import * as d3 from 'd3';
import {
  ActionOrganisation, NoeudOrganigramme, OrganisationService, RapportOrganisation, VueOrganigramme,
} from '../../../service/organisation/organisation.service';
import { DirectionService } from '../../../service/direction/direction.service';
import { RapportOrganisationComponent } from '../rapport-organisation/rapport-organisation.component';
import { SelecteurDirectionComponent } from '../selecteur-direction/selecteur-direction.component';
import { httpErrorMessage } from '../../../utils/http-error.utils';

const LARGEUR = 240;
const HAUTEUR = 96;

const LIBELLES_ALERTES: Record<string, string> = {
  sans_responsable: 'Sans responsable',
  sans_direction: 'Sans direction',
  sans_manager: 'Sans N+1',
  manuel_divergent: 'N+1 manuel hors structure',
  auto_a_synchroniser: 'N+1 à synchroniser',
};

/**
 * Organigramme interactif (d3-org-chart) : vue Structure (entités) ou Personnes (N+1).
 * En mode éditable : glisser-déposer un nœud sur un autre, ou actions du panneau latéral ;
 * chaque changement est d'abord prévisualisé (impact sur les N+1) avant d'être appliqué.
 */
@Component({
  selector: 'app-organigramme',
  standalone: true,
  imports: [CommonModule, FormsModule, RapportOrganisationComponent, SelecteurDirectionComponent],
  templateUrl: './organigramme.component.html',
  styleUrls: ['./organigramme.component.scss'],
})
export class OrganigrammeComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() entrepriseId: number | null = null;
  /** 'manager' : organigramme de l'utilisateur connecté (ses N-1 / ses entités), lecture seule. */
  @Input() source: 'entreprise' | 'manager' = 'entreprise';
  @Input() vue: VueOrganigramme = 'structure';
  @Input() editable = false;
  @Input() afficherBascule = true;
  @Input() hauteur = 620;
  @Input() rafraichir = 0;

  @Output() changement = new EventEmitter<void>();
  @Output() vueChange = new EventEmitter<VueOrganigramme>();

  @ViewChild('conteneur') conteneur!: ElementRef<HTMLDivElement>;

  noeuds: NoeudOrganigramme[] = [];
  chargement = false;
  erreur = '';
  recherche = '';
  selection: NoeudOrganigramme | null = null;

  // Panneau d'actions
  personnes: { id: number; nom: string; direction: string | null }[] = [];
  nouveauManagerId: number | null = null;
  nouvelleDirectionId: number | null = null;
  nouveauResponsableId: number | null = null;
  nouveauParentId: number | null = null;

  // Prévisualisation
  modaleVisible = false;
  titreModale = '';
  rapport: RapportOrganisation | null = null;
  calcul = false;
  enCours = false;
  erreurModale = '';
  compteRendu = false;
  private actionEnAttente: ActionOrganisation | null = null;

  private chart: OrgChart<NoeudOrganigramme> | null = null;
  private vueInitialisee = false;

  constructor(private organisationService: OrganisationService, private zone: NgZone) {}

  ngAfterViewInit(): void {
    this.vueInitialisee = true;
    this.charger();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.vueInitialisee) return;
    if (changes['entrepriseId'] || changes['vue'] || changes['rafraichir'] || changes['source']) {
      this.selection = null;
      this.charger();
    }
  }

  ngOnDestroy(): void {
    this.chart = null;
    if (this.conteneur) this.conteneur.nativeElement.innerHTML = '';
  }

  // ── Données ─────────────────────────────────────────────────

  changerVue(vue: VueOrganigramme): void {
    if (vue === this.vue) return;
    this.vue = vue;
    this.selection = null;
    this.vueChange.emit(vue);
    this.charger();
  }

  charger(): void {
    if (this.source === 'entreprise' && !this.entrepriseId) return;
    this.chargement = true;
    this.erreur = '';
    const requete = this.source === 'manager'
      ? this.organisationService.organigrammeManager(this.vue)
      : this.organisationService.organigramme(this.entrepriseId!, this.vue);

    requete.subscribe({
      next: (res) => {
        this.noeuds = res.noeuds || [];
        this.chargement = false;
        if (this.vue === 'personnes') {
          this.memoriserPersonnes(this.noeuds);
        } else if (this.editable && !this.personnes.length) {
          this.chargerPersonnes();
        }
        // Le conteneur doit être visible avant le rendu d3
        setTimeout(() => this.dessiner());
      },
      error: (err) => {
        this.erreur = httpErrorMessage(err, 'Impossible de charger l\'organigramme');
        this.chargement = false;
      },
    });
  }

  private chargerPersonnes(): void {
    if (!this.entrepriseId) return;
    this.organisationService.organigramme(this.entrepriseId, 'personnes').subscribe({
      next: (res) => this.memoriserPersonnes(res.noeuds || []),
    });
  }

  private memoriserPersonnes(noeuds: NoeudOrganigramme[]): void {
    this.personnes = noeuds
      .filter(n => n.type === 'personne' && n.user_id)
      .map(n => ({ id: n.user_id!, nom: n.libelle || '', direction: n.direction?.nom ?? null }))
      .sort((a, b) => a.nom.localeCompare(b.nom));
  }

  // ── Rendu ───────────────────────────────────────────────────

  private dessiner(): void {
    const el = this.conteneur?.nativeElement;
    if (!el) return;
    el.innerHTML = '';
    if (!this.noeuds.length) {
      this.chart = null;
      return;
    }

    const composant = this;
    const donnees = this.noeuds.map(n => ({ ...n }));

    this.zone.runOutsideAngular(() => {
      this.chart = new OrgChart<NoeudOrganigramme>()
        .container(el)
        .data(donnees)
        .svgHeight(this.hauteur)
        .nodeId((d: NoeudOrganigramme) => d.id)
        .parentNodeId((d: NoeudOrganigramme) => d.parentId)
        .nodeWidth(() => LARGEUR)
        .nodeHeight(() => HAUTEUR)
        .childrenMargin(() => 48)
        .compactMarginBetween(() => 28)
        .compactMarginPair(() => 56)
        .siblingsMargin(() => 24)
        .initialExpandLevel(this.vue === 'structure' ? 3 : 2)
        // Pastille centrée sur le trait : chevron (déplier / replier) + nombre de sous-éléments directs
        .nodeButtonWidth(() => 56)
        .nodeButtonHeight(() => 24)
        .nodeButtonX(() => -28)
        .nodeButtonY(() => -12)
        .buttonContent(({ node }: any) => {
          const ouvert = !!node.children;
          const nb = node.data._directSubordinates ?? 0;
          const titre = `${ouvert ? 'Replier' : 'Déplier'} · ${nb} sous-élément${nb > 1 ? 's' : ''}`;
          const chevron = ouvert ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6';
          return `<div class="org-bouton${ouvert ? ' org-bouton--ouvert' : ''}" title="${titre}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="${chevron}"/></svg>
            <span>${nb}</span>
          </div>`;
        })
        .nodeContent((d: any) => composant.htmlNoeud(d.data))
        .onNodeClick((n: any) => composant.zone.run(() => composant.selectionner((n?.data ?? n) as NoeudOrganigramme)))
        .nodeUpdate(function (this: SVGGElement, d: any) {
          d3.select(this).select('.node-rect')
            .attr('stroke', d.data._highlighted ? '#0f6e56' : 'none')
            .attr('stroke-width', d.data._highlighted ? 4 : 1);
          if (composant.editable && d.data.type !== 'entreprise') {
            composant.brancherGlisser(this, d);
          }
        })
        .render();
    });
  }

  private htmlNoeud(n: NoeudOrganigramme): string {
    const e = echapper;
    const couleur = COULEURS[n.type] ?? '#6b6b6b';
    const alertes = (n.alertes || [])
      .map(a => `<span class="org-alerte" title="${e(LIBELLES_ALERTES[a] ?? a)}">⚠ ${e(LIBELLES_ALERTES[a] ?? a)}</span>`)
      .join('');
    const inactif = n.est_active === false || n.statut === false ? ' org-inactif' : '';

    let corps = '';
    if (n.type === 'personne') {
      const mode = n.manager_mode === 'manuel' ? '<span class="org-pastille org-manuel">N+1 manuel</span>' : '';
      const equipe = n.nb_collaborateurs ? `<span class="org-pastille">${n.nb_collaborateurs} N-1</span>` : '';
      corps = `
        <div class="org-sous">${e(n.sous_titre || '')}</div>
        <div class="org-ligne">${e(n.direction?.nom || 'Sans direction')}</div>
        <div class="org-pied">${equipe}${mode}${alertes}</div>`;
    } else if (n.type === 'entreprise') {
      corps = `
        <div class="org-sous">${e(n.sous_titre || '')}</div>
        <div class="org-pied"><span class="org-pastille">${n.effectif_total ?? ''} ${n.effectif_total !== undefined ? 'personnes' : ''}</span></div>`;
    } else {
      const resp = n.responsable
        ? `<div class="org-ligne">👤 ${e(n.responsable.nom || '')}${n.responsable.fonction ? ' · ' + e(n.responsable.fonction) : ''}</div>`
        : '';
      corps = `
        <div class="org-sous">${e(n.sous_titre || '')}</div>
        ${resp}
        <div class="org-pied"><span class="org-pastille" title="Membres directs / total du sous-arbre">${n.effectif ?? 0} / ${n.effectif_total ?? 0}</span>${alertes}</div>`;
    }

    return `
      <div class="org-carte${inactif}" style="width:${LARGEUR}px;height:${HAUTEUR}px;border-top-color:${couleur}">
        <div class="org-titre" title="${e(n.libelle || '')}">${e(n.libelle || '')}</div>
        ${corps}
      </div>`;
  }

  // ── Barre d'outils ──────────────────────────────────────────

  get suggestions(): NoeudOrganigramme[] {
    return this.noeuds.filter(n => n.type !== 'entreprise');
  }

  rechercher(): void {
    const terme = this.recherche.trim().toLowerCase();
    if (!terme || !this.chart) return;
    const cible = this.noeuds.find(n => (n.libelle || '').toLowerCase() === terme)
      ?? this.noeuds.find(n => (n.libelle || '').toLowerCase().includes(terme));
    if (!cible) return;
    this.zone.runOutsideAngular(() => {
      this.chart!.clearHighlighting();
      this.chart!.setHighlighted(cible.id).render();
    });
    this.selectionner(cible);
  }

  toutDeplier(): void { this.zone.runOutsideAngular(() => this.chart?.expandAll().fit()); }
  toutReplier(): void { this.zone.runOutsideAngular(() => this.chart?.collapseAll().fit()); }
  ajuster(): void { this.zone.runOutsideAngular(() => this.chart?.fit()); }
  zoomAvant(): void { this.zone.runOutsideAngular(() => this.chart?.zoomIn()); }
  zoomArriere(): void { this.zone.runOutsideAngular(() => this.chart?.zoomOut()); }
  exporter(): void { this.zone.runOutsideAngular(() => this.chart?.exportImg({ full: true, scale: 2, backgroundColor: '#ffffff' })); }

  // ── Sélection et panneau ────────────────────────────────────

  selectionner(n: NoeudOrganigramme): void {
    this.selection = n.type === 'entreprise' ? null : n;
    this.nouveauManagerId = n.manager_id ?? null;
    this.nouvelleDirectionId = n.direction?.id ?? null;
    this.nouveauResponsableId = n.responsable?.id ?? null;
    this.nouveauParentId = this.parentEntiteId(n);
  }

  fermerPanneau(): void {
    this.selection = null;
  }

  libelleType(type: string): string {
    return type === 'personne' ? 'Collaborateur' : DirectionService.libelleType(type);
  }

  libelleAlerte(a: string): string {
    return LIBELLES_ALERTES[a] ?? a;
  }

  nomPersonne(id: number): string {
    return this.personnes.find(p => p.id === id)?.nom
      ?? this.noeuds.find(n => n.user_id === id)?.libelle
      ?? `#${id}`;
  }

  private parentEntiteId(n: NoeudOrganigramme): number | null {
    return n.parentId?.startsWith('d-') ? Number(n.parentId.slice(2)) : null;
  }

  // Actions sur une personne
  changerManager(): void {
    const n = this.selection;
    if (!n?.user_id) return;
    this.demander({ action: 'rattacher', user_id: n.user_id, manager_mode: 'manuel', manager_id: this.nouveauManagerId }, `N+1 de ${n.libelle}`);
  }

  repasserAuto(): void {
    const n = this.selection;
    if (!n?.user_id) return;
    this.demander({ action: 'rattacher', user_id: n.user_id, manager_mode: 'auto' }, `N+1 automatique pour ${n.libelle}`);
  }

  changerDirection(): void {
    const n = this.selection;
    if (!n?.user_id) return;
    this.demander({ action: 'rattacher', user_id: n.user_id, direction_id: this.nouvelleDirectionId }, `Rattachement de ${n.libelle}`);
  }

  // Actions sur une entité
  changerResponsable(): void {
    const n = this.selection;
    if (!n?.entite_id) return;
    this.demander({ action: 'changer_responsable', direction_id: n.entite_id, responsable_id: this.nouveauResponsableId }, `Responsable de ${n.libelle}`);
  }

  deplacerEntite(): void {
    const n = this.selection;
    if (!n?.entite_id) return;
    this.demander({ action: 'deplacer', direction_id: n.entite_id, parent_id: this.nouveauParentId }, `Déplacement de ${n.libelle}`);
  }

  // ── Glisser-déposer ─────────────────────────────────────────

  /** Rend un nœud déplaçable ; au lâcher sur un autre nœud, propose le changement correspondant. */
  brancherGlisser(element: SVGGElement, datum: any): void {
    let origine = '';
    let dx = 0;
    let dy = 0;
    let base = { x: 0, y: 0 };
    let survol: SVGGElement | null = null;

    const glisser = d3.drag<SVGGElement, unknown>()
      .clickDistance(5)
      .on('start', () => {
        origine = element.getAttribute('transform') || '';
        base = lireTranslation(origine);
        dx = dy = 0;
      })
      .on('drag', (event: any) => {
        dx += event.dx;
        dy += event.dy;
        element.setAttribute('transform', `translate(${base.x + dx},${base.y + dy})`);
        element.classList.add('org-glisse');
        const cible = this.noeudSous(element, base.x + dx + LARGEUR / 2, base.y + dy + HAUTEUR / 2);
        if (cible !== survol) {
          survol?.classList.remove('org-cible');
          cible?.classList.add('org-cible');
          survol = cible;
        }
      })
      .on('end', () => {
        element.classList.remove('org-glisse');
        element.setAttribute('transform', origine);
        survol?.classList.remove('org-cible');
        const cible = survol ? (d3.select(survol).datum() as any)?.data as NoeudOrganigramme : null;
        survol = null;
        if (cible && Math.hypot(dx, dy) > 5) {
          this.zone.run(() => this.deposer(datum.data as NoeudOrganigramme, cible));
        }
      });

    d3.select<SVGGElement, unknown>(element).call(glisser);
  }

  private noeudSous(source: SVGGElement, x: number, y: number): SVGGElement | null {
    const groupes = Array.from(source.parentNode?.querySelectorAll<SVGGElement>(':scope > g.node') ?? []);
    for (const g of groupes) {
      if (g === source) continue;
      const t = lireTranslation(g.getAttribute('transform') || '');
      if (x >= t.x && x <= t.x + LARGEUR && y >= t.y && y <= t.y + HAUTEUR) {
        return g;
      }
    }
    return null;
  }

  private deposer(source: NoeudOrganigramme, cible: NoeudOrganigramme): void {
    if (source.id === cible.id || source.parentId === cible.id) return;

    if (source.type === 'personne' && cible.type === 'personne' && source.user_id && cible.user_id) {
      this.demander(
        { action: 'rattacher', user_id: source.user_id, manager_mode: 'manuel', manager_id: cible.user_id },
        `${source.libelle} passe sous ${cible.libelle}`
      );
    } else if (source.entite_id && (cible.entite_id || cible.type === 'entreprise')) {
      this.demander(
        { action: 'deplacer', direction_id: source.entite_id, parent_id: cible.entite_id ?? null },
        `${source.libelle} rattachée à ${cible.libelle}`
      );
    }
  }

  // ── Prévisualisation / application ──────────────────────────

  private demander(action: ActionOrganisation, titre: string): void {
    if (!this.entrepriseId) return;
    this.actionEnAttente = action;
    this.titreModale = titre;
    this.modaleVisible = true;
    this.compteRendu = false;
    this.calcul = true;
    this.erreurModale = '';
    this.rapport = null;
    this.organisationService.simuler(this.entrepriseId, action).subscribe({
      next: (res) => { this.rapport = res.rapport; this.calcul = false; },
      error: (err) => { this.erreurModale = httpErrorMessage(err, 'Changement impossible'); this.calcul = false; },
    });
  }

  confirmer(): void {
    if (!this.entrepriseId || !this.actionEnAttente) return;
    this.enCours = true;
    this.organisationService.appliquer(this.entrepriseId, this.actionEnAttente).subscribe({
      next: (res) => {
        this.rapport = res.rapport;
        this.enCours = false;
        this.compteRendu = true;
        this.actionEnAttente = null;
        this.selection = null;
        this.charger();
        this.changement.emit();
      },
      error: (err) => { this.erreurModale = httpErrorMessage(err, 'Erreur lors de l\'application'); this.enCours = false; },
    });
  }

  fermerModale(): void {
    this.modaleVisible = false;
    this.actionEnAttente = null;
  }
}

const COULEURS: Record<string, string> = {
  entreprise: '#1a1a1a',
  direction: '#0f6e56',
  sous_direction: '#185fa5',
  departement: '#854f0b',
  personne: '#534ab7',
};

function echapper(texte: string): string {
  return String(texte)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function lireTranslation(transform: string): { x: number; y: number } {
  const m = /translate\(\s*([-\d.eE]+)[ ,]+([-\d.eE]+)\s*\)/.exec(transform);
  return m ? { x: parseFloat(m[1]), y: parseFloat(m[2]) } : { x: 0, y: 0 };
}
