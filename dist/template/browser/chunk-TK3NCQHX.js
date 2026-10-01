import {
  classeProgression,
  classeStatutDemande,
  iconeTypeDemande,
  initiales,
  libelleNiveau,
  libelleTypeDemande,
  nomComplet
} from "./chunk-4GCFTWOO.js";
import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  ManagerService
} from "./chunk-X4P6RYVM.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-42QKTZAV.js";
import {
  RouterLink
} from "./chunk-VMXPZP5A.js";
import "./chunk-47WYM2C2.js";
import "./chunk-XZLGMMSK.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-ZRUSYSCI.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-ON7U2Q36.js";
import "./chunk-4MWRP73S.js";

// src/app/features/manager/manager-dashboard/manager-dashboard.component.ts
var _c0 = () => [1, 2, 3];
var _c1 = () => ({ vue: "arbre" });
var _c2 = (a0) => ({ demande: a0 });
var _c3 = (a0, a1) => [a0, a1];
function ManagerDashboardComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function ManagerDashboardComponent_ng_container_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
  }
}
function ManagerDashboardComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ManagerDashboardComponent_ng_container_16_div_1_Template, 1, 0, "div", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function ManagerDashboardComponent_ng_container_17_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2, "Aucune demande en attente. Tout est \xE0 jour ! ");
    \u0275\u0275elementEnd();
  }
}
function ManagerDashboardComponent_ng_container_17_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "div", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44)(5, "div", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 46);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 47);
    \u0275\u0275element(10, "i", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 49)(13, "span", 50);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 51);
    \u0275\u0275text(17, "Traiter");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.initiales(d_r2.employe));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.nomComplet(d_r2.employe), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.libelleNiveau(d_r2.niveau));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.iconeTypeDemande(d_r2.type_demande));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.libelleTypeDemande(d_r2.type_demande), " \xB7 ", d_r2.titre, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 9, d_r2.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.managerDemandes)("queryParams", \u0275\u0275pureFunction1(12, _c2, d_r2.id));
  }
}
function ManagerDashboardComponent_ng_container_17_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54);
    \u0275\u0275element(4, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 56);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.libelleNiveau(r_r3.niveau));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.largeurNiveau(r_r3.effectif), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.effectif);
  }
}
function ManagerDashboardComponent_ng_container_17_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275text(2, "Aucune formation en cours dans ce p\xE9rim\xE8tre. ");
    \u0275\u0275elementEnd();
  }
}
function ManagerDashboardComponent_ng_container_17_div_87_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 42)(3, "div", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 53);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "div", 60)(17, "div", 61);
    \u0275\u0275element(18, "div", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 63);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "td", 64)(22, "a", 65);
    \u0275\u0275element(23, "i", 66);
    \u0275\u0275text(24, "Voir");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.initiales(c_r4));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.nomComplet(c_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.fonction || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.libelleNiveau(c_r4.niveau));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", c_r4.formations_en_cours, " en cours \xB7 ", c_r4.formations_terminees, "/", c_r4.formations_total);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.classeProgression(c_r4.progression_moyenne));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", c_r4.progression_moyenne, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r4.progression_moyenne, "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(12, _c3, ctx_r0.routes.managerCollaborateur, c_r4.id));
  }
}
function ManagerDashboardComponent_ng_container_17_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "table", 58)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Collaborateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Formations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, ManagerDashboardComponent_ng_container_17_div_87_tr_14_Template, 25, 15, "tr", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r0.data.collaborateurs_a_suivre);
  }
}
function ManagerDashboardComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14)(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16);
    \u0275\u0275element(6, "i", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "div", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 16);
    \u0275\u0275element(12, "i", 17);
    \u0275\u0275text(13, "Demandes \xE0 traiter");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 18)(15, "div", 15);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 16);
    \u0275\u0275element(18, "i", 19);
    \u0275\u0275text(19, "Progression moyenne");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 14)(21, "div", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 16);
    \u0275\u0275element(24, "i", 20);
    \u0275\u0275text(25, "Formations en cours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 14)(27, "div", 15);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 16);
    \u0275\u0275element(30, "i", 21);
    \u0275\u0275text(31, "Formations en retard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 18)(33, "div", 15);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 16);
    \u0275\u0275element(36, "i", 22);
    \u0275\u0275text(37, "Certificats obtenus");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 23)(39, "div", 24)(40, "div", 25)(41, "div", 26)(42, "span");
    \u0275\u0275element(43, "i", 27);
    \u0275\u0275text(44, "Demandes en attente de votre avis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "a", 28);
    \u0275\u0275text(46, "Tout voir \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, ManagerDashboardComponent_ng_container_17_div_47_Template, 3, 0, "div", 29)(48, ManagerDashboardComponent_ng_container_17_div_48_Template, 18, 14, "div", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 31)(50, "div", 25)(51, "div", 26)(52, "span");
    \u0275\u0275element(53, "i", 32);
    \u0275\u0275text(54, "R\xE9partition hi\xE9rarchique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "a", 33);
    \u0275\u0275text(56, "Organigramme \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(57, ManagerDashboardComponent_ng_container_17_div_57_Template, 7, 4, "div", 34);
    \u0275\u0275elementStart(58, "div", 35)(59, "div")(60, "strong");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span");
    \u0275\u0275text(63, "inscriptions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div")(65, "strong");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68, "termin\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div")(70, "strong");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span");
    \u0275\u0275text(73, "non commenc\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div")(75, "strong");
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span");
    \u0275\u0275text(78, "chez les RH");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(79, "div", 36)(80, "div", 26)(81, "span");
    \u0275\u0275element(82, "i", 37);
    \u0275\u0275text(83, "Collaborateurs \xE0 accompagner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "a", 28);
    \u0275\u0275text(85, "Toute l'\xE9quipe \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(86, ManagerDashboardComponent_ng_container_17_div_86_Template, 3, 0, "div", 29)(87, ManagerDashboardComponent_ng_container_17_div_87_Template, 15, 1, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("is-loading", ctx_r0.loading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data.kpis.effectif);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Collaborateurs (", ctx_r0.data.kpis.actifs, " actifs)");
    \u0275\u0275advance();
    \u0275\u0275classProp("mgr-kpi--warn", ctx_r0.data.kpis.demandes_a_traiter > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data.kpis.demandes_a_traiter);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.data.kpis.taux_completion_moyen, "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.data.kpis.formations_en_cours);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("mgr-kpi--danger", ctx_r0.data.kpis.formations_en_retard > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data.kpis.formations_en_retard);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.data.kpis.certificats);
    \u0275\u0275advance(11);
    \u0275\u0275property("routerLink", ctx_r0.routes.managerDemandes);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.data.demandes_a_traiter.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.data.demandes_a_traiter);
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", ctx_r0.routes.managerEquipe)("queryParams", \u0275\u0275pureFunction0(26, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.data.repartition_niveaux);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data.kpis.formations_total);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.data.kpis.formations_terminees);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.data.kpis.formations_non_commencees);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.data.kpis.demandes_en_attente_rh);
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", ctx_r0.routes.managerEquipe);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.data.collaborateurs_a_suivre.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data.collaborateurs_a_suivre.length);
  }
}
var ManagerDashboardComponent = class _ManagerDashboardComponent {
  managerService;
  routes = routes;
  perimetre = "tous";
  data = null;
  loading = false;
  error = "";
  initiales = initiales;
  nomComplet = nomComplet;
  libelleNiveau = libelleNiveau;
  classeProgression = classeProgression;
  classeStatutDemande = classeStatutDemande;
  libelleTypeDemande = libelleTypeDemande;
  iconeTypeDemande = iconeTypeDemande;
  constructor(managerService) {
    this.managerService = managerService;
  }
  ngOnInit() {
    this.charger();
  }
  setPerimetre(p) {
    if (this.perimetre === p)
      return;
    this.perimetre = p;
    this.charger();
  }
  charger() {
    this.loading = true;
    this.error = "";
    this.managerService.getDashboard(this.perimetre).subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Impossible de charger le tableau de bord.");
        this.loading = false;
      }
    });
  }
  /** Largeur relative des barres de répartition par niveau. */
  largeurNiveau(effectif) {
    const max = Math.max(...(this.data?.repartition_niveaux ?? []).map((r) => r.effectif), 1);
    return Math.round(effectif / max * 100);
  }
  static \u0275fac = function ManagerDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManagerDashboardComponent)(\u0275\u0275directiveInject(ManagerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManagerDashboardComponent, selectors: [["app-manager-dashboard"]], decls: 18, vars: 7, consts: [[1, "mgr-page"], [1, "mgr-page-head"], [1, "isax", "isax-grid-3"], [1, "mgr-chips"], ["type", "button", 1, "mgr-chip", 3, "click"], [1, "isax", "isax-user"], [1, "isax", "isax-people"], ["class", "mgr-alert", 4, "ngIf"], [4, "ngIf"], [1, "mgr-alert"], [1, "isax", "isax-warning-2"], ["class", "mgr-skeleton", 4, "ngFor", "ngForOf"], [1, "mgr-skeleton"], [1, "mgr-kpis"], [1, "mgr-kpi"], [1, "mgr-kpi__val"], [1, "mgr-kpi__lbl"], [1, "isax", "isax-clock"], [1, "mgr-kpi", "mgr-kpi--ok"], [1, "isax", "isax-chart-2"], [1, "isax", "isax-play-circle"], [1, "isax", "isax-danger"], [1, "isax", "isax-medal-star"], [1, "row", "g-3"], [1, "col-xl-7"], [1, "mgr-card", "h-100"], [1, "mgr-card__title"], [1, "isax", "isax-task-square"], [3, "routerLink"], ["class", "mgr-empty", 4, "ngIf"], ["class", "dash-demande", 4, "ngFor", "ngForOf"], [1, "col-xl-5"], [1, "isax", "isax-hierarchy"], [3, "routerLink", "queryParams"], ["class", "dash-niveau", 4, "ngFor", "ngForOf"], [1, "dash-formations"], [1, "mgr-card"], [1, "isax", "isax-flag"], ["class", "mgr-table-wrap", 4, "ngIf"], [1, "mgr-empty"], [1, "isax", "isax-tick-circle"], [1, "dash-demande"], [1, "mgr-user"], [1, "mgr-user__av"], [1, "dash-demande__info"], [1, "mgr-user__name"], [1, "mgr-badge", "mgr-badge--niveau", "ms-1"], [1, "mgr-user__sub"], [1, "isax", 3, "ngClass"], [1, "dash-demande__meta"], [1, "dash-demande__date"], [1, "mgr-btn", "mgr-btn--primary", "mgr-btn--sm", 3, "routerLink", "queryParams"], [1, "dash-niveau"], [1, "mgr-badge", "mgr-badge--niveau"], [1, "dash-niveau__bar"], [1, "dash-niveau__fill"], [1, "dash-niveau__val"], [1, "mgr-table-wrap"], [1, "mgr-table"], [4, "ngFor", "ngForOf"], [1, "mgr-progress", 3, "ngClass"], [1, "mgr-progress__bar"], [1, "mgr-progress__fill"], [1, "mgr-progress__val"], [1, "text-end"], [1, "mgr-btn", "mgr-btn--sm", 3, "routerLink"], [1, "isax", "isax-eye"]], template: function ManagerDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, "Tableau de bord de l'\xE9quipe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Suivi de la mont\xE9e en comp\xE9tences de vos collaborateurs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3)(9, "button", 4);
      \u0275\u0275listener("click", function ManagerDashboardComponent_Template_button_click_9_listener() {
        return ctx.setPerimetre("directs");
      });
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275text(11, "Directs (N-1) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 4);
      \u0275\u0275listener("click", function ManagerDashboardComponent_Template_button_click_12_listener() {
        return ctx.setPerimetre("tous");
      });
      \u0275\u0275element(13, "i", 6);
      \u0275\u0275text(14, "Toute l'\xE9quipe ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(15, ManagerDashboardComponent_div_15_Template, 3, 1, "div", 7)(16, ManagerDashboardComponent_ng_container_16_Template, 2, 2, "ng-container", 8)(17, ManagerDashboardComponent_ng_container_17_Template, 88, 27, "ng-container", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275classProp("active", ctx.perimetre === "directs");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.perimetre === "tous");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading && !ctx.data);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.data);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterLink, DatePipe], styles: ["\n\n.mgr-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mgr-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.mgr-page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.mgr-page-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mgr-page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.mgr-page-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4F46E5;\n}\n.mgr-page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 2px 0 0;\n}\n.mgr-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 18px 20px;\n}\n.mgr-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.mgr-card__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4F46E5;\n  margin-right: 6px;\n}\n.mgr-card__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4F46E5;\n  text-decoration: none;\n}\n.mgr-card__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.mgr-kpis[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n}\n.mgr-kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-top: 3px solid #4F46E5;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.mgr-kpi__val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.1;\n}\n.mgr-kpi__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.mgr-kpi__lbl[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.mgr-kpi--warn[_ngcontent-%COMP%] {\n  border-top-color: #f59e0b;\n  background: #fff8ee;\n}\n.mgr-kpi--danger[_ngcontent-%COMP%] {\n  border-top-color: #dc2626;\n}\n.mgr-kpi--ok[_ngcontent-%COMP%] {\n  border-top-color: #059669;\n}\n.mgr-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 110px;\n}\n.mgr-progress__bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: #eef0f4;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.mgr-progress__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #4F46E5;\n  border-radius: 6px;\n  transition: width 0.3s;\n}\n.mgr-progress__val[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  min-width: 36px;\n  text-align: right;\n}\n.mgr-progress--low[_ngcontent-%COMP%]   .mgr-progress__fill[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.mgr-progress--high[_ngcontent-%COMP%]   .mgr-progress__fill[_ngcontent-%COMP%] {\n  background: #059669;\n}\n.mgr-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n  background: #f3f4f6;\n  color: #374151;\n}\n.mgr-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mgr-badge--niveau[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #4338CA;\n  border: 1px solid #C7D2FE;\n}\n.mgr-badge--manager[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.mgr-badge--rh[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #075985;\n}\n.mgr-badge--validee[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-badge--refusee[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-badge--annulee[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mgr-badge--actif[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-badge--inactif[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mgr-badge--urgente[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-badge--haute[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #9a3412;\n}\n.mgr-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.mgr-user__av[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #EEF2FF;\n  color: #4F46E5;\n  border: 1px solid #C7D2FE;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.mgr-user__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a1a2e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mgr-user__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mgr-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.mgr-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.mgr-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 11px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 15px;\n}\n.mgr-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px 8px 34px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n}\n.mgr-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4F46E5;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);\n}\n.mgr-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fff;\n}\n.mgr-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.mgr-chips[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 4px;\n  background: #f3f4f6;\n  padding: 3px;\n  border-radius: 9px;\n}\n.mgr-chip[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  padding: 6px 12px;\n  border-radius: 7px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.mgr-chip.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #4338CA;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.mgr-chip[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  font-size: 10px;\n  background: #4F46E5;\n  color: #fff;\n  border-radius: 10px;\n  padding: 0 6px;\n}\n.mgr-chip[_ngcontent-%COMP%]   .count--muted[_ngcontent-%COMP%] {\n  background: #d1d5db;\n  color: #374151;\n}\n.mgr-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.mgr-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.mgr-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 10px 12px;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.mgr-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 12px;\n  border-bottom: 1px solid #f1f2f4;\n  vertical-align: middle;\n  color: #374151;\n}\n.mgr-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbff;\n}\n.mgr-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 7px 14px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  color: #1a1a2e;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.mgr-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.mgr-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #4F46E5;\n  color: #4F46E5;\n}\n.mgr-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.mgr-btn--primary[_ngcontent-%COMP%] {\n  background: #4F46E5;\n  border-color: #4F46E5;\n  color: #fff;\n}\n.mgr-btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4338CA;\n  color: #fff;\n}\n.mgr-btn--success[_ngcontent-%COMP%] {\n  background: #059669;\n  border-color: #059669;\n  color: #fff;\n}\n.mgr-btn--success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #047857;\n  border-color: #047857;\n  color: #fff;\n}\n.mgr-btn--danger[_ngcontent-%COMP%] {\n  background: #fff;\n  border-color: #fca5a5;\n  color: #b91c1c;\n}\n.mgr-btn--danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fee2e2;\n  border-color: #dc2626;\n  color: #991b1b;\n}\n.mgr-btn--sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 5px 10px;\n}\n.mgr-btn--sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.mgr-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 36px 16px;\n  color: #6b7280;\n  font-size: 13px;\n}\n.mgr-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 34px;\n  display: block;\n  margin-bottom: 8px;\n  color: #c7cbd4;\n}\n.mgr-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-alert--ok[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-alert--info[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #4338CA;\n}\n.mgr-alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: inherit;\n  cursor: pointer;\n  font-size: 16px;\n}\n.mgr-skeleton[_ngcontent-%COMP%] {\n  height: 44px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e9eaee 37%,\n      #f3f4f6 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_mgr-shimmer 1.4s ease infinite;\n  margin-bottom: 8px;\n}\n@keyframes _ngcontent-%COMP%_mgr-shimmer {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n.mgr-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(17, 24, 39, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.mgr-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  width: 100%;\n  max-width: 520px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.mgr-modal__head[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mgr-modal__head[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.mgr-modal__head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #6b7280;\n  cursor: pointer;\n}\n.mgr-modal__body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  font-size: 13px;\n  color: #374151;\n}\n.mgr-modal__body[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 6px;\n  display: block;\n}\n.mgr-modal__body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 90px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 13px;\n  resize: vertical;\n}\n.mgr-modal__body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.mgr-modal__foot[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.mgr-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding-top: 12px;\n  font-size: 12px;\n  color: #6b7280;\n}\n.is-loading[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  transition: opacity 0.2s;\n}\n.dash-demande[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid #f1f2f4;\n}\n.dash-demande[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.dash-demande__info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.dash-demande__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.dash-demande__date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n}\n.dash-niveau[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.dash-niveau__bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 10px;\n  background: #eef0f4;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.dash-niveau__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #6366F1,\n      #4F46E5);\n  border-radius: 6px;\n}\n.dash-niveau__val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a1a2e;\n  min-width: 24px;\n  text-align: right;\n}\n.dash-formations[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n  margin-top: 16px;\n  padding-top: 14px;\n  border-top: 1px solid #f1f2f4;\n}\n.dash-formations[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.dash-formations[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  color: #1a1a2e;\n}\n.dash-formations[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n}\n/*# sourceMappingURL=manager-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagerDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-manager-dashboard", imports: [CommonModule, RouterLink], template: `<div class="mgr-page">

  <div class="mgr-page-head">
    <div>
      <h2><i class="isax isax-grid-3"></i>Tableau de bord de l'\xE9quipe</h2>
      <p>Suivi de la mont\xE9e en comp\xE9tences de vos collaborateurs</p>
    </div>
    <div class="mgr-chips">
      <button type="button" class="mgr-chip" [class.active]="perimetre === 'directs'" (click)="setPerimetre('directs')">
        <i class="isax isax-user"></i>Directs (N-1)
      </button>
      <button type="button" class="mgr-chip" [class.active]="perimetre === 'tous'" (click)="setPerimetre('tous')">
        <i class="isax isax-people"></i>Toute l'\xE9quipe
      </button>
    </div>
  </div>

  <div *ngIf="error" class="mgr-alert"><i class="isax isax-warning-2"></i>{{ error }}</div>

  <ng-container *ngIf="loading && !data">
    <div class="mgr-skeleton" *ngFor="let i of [1,2,3]"></div>
  </ng-container>

  <ng-container *ngIf="data">

    <!-- \u2500\u2500 KPIs \u2500\u2500 -->
    <div class="mgr-kpis" [class.is-loading]="loading">
      <div class="mgr-kpi">
        <div class="mgr-kpi__val">{{ data.kpis.effectif }}</div>
        <div class="mgr-kpi__lbl"><i class="isax isax-people"></i>Collaborateurs ({{ data.kpis.actifs }} actifs)</div>
      </div>
      <div class="mgr-kpi" [class.mgr-kpi--warn]="data.kpis.demandes_a_traiter > 0">
        <div class="mgr-kpi__val">{{ data.kpis.demandes_a_traiter }}</div>
        <div class="mgr-kpi__lbl"><i class="isax isax-clock"></i>Demandes \xE0 traiter</div>
      </div>
      <div class="mgr-kpi mgr-kpi--ok">
        <div class="mgr-kpi__val">{{ data.kpis.taux_completion_moyen }}%</div>
        <div class="mgr-kpi__lbl"><i class="isax isax-chart-2"></i>Progression moyenne</div>
      </div>
      <div class="mgr-kpi">
        <div class="mgr-kpi__val">{{ data.kpis.formations_en_cours }}</div>
        <div class="mgr-kpi__lbl"><i class="isax isax-play-circle"></i>Formations en cours</div>
      </div>
      <div class="mgr-kpi" [class.mgr-kpi--danger]="data.kpis.formations_en_retard > 0">
        <div class="mgr-kpi__val">{{ data.kpis.formations_en_retard }}</div>
        <div class="mgr-kpi__lbl"><i class="isax isax-danger"></i>Formations en retard</div>
      </div>
      <div class="mgr-kpi mgr-kpi--ok">
        <div class="mgr-kpi__val">{{ data.kpis.certificats }}</div>
        <div class="mgr-kpi__lbl"><i class="isax isax-medal-star"></i>Certificats obtenus</div>
      </div>
    </div>

    <div class="row g-3">
      <!-- \u2500\u2500 Demandes \xE0 traiter \u2500\u2500 -->
      <div class="col-xl-7">
        <div class="mgr-card h-100">
          <div class="mgr-card__title">
            <span><i class="isax isax-task-square"></i>Demandes en attente de votre avis</span>
            <a [routerLink]="routes.managerDemandes">Tout voir \u2192</a>
          </div>

          <div *ngIf="!data.demandes_a_traiter.length" class="mgr-empty">
            <i class="isax isax-tick-circle"></i>Aucune demande en attente. Tout est \xE0 jour !
          </div>

          <div class="dash-demande" *ngFor="let d of data.demandes_a_traiter">
            <div class="mgr-user">
              <div class="mgr-user__av">{{ initiales(d.employe) }}</div>
              <div class="dash-demande__info">
                <div class="mgr-user__name">{{ nomComplet(d.employe) }}
                  <span class="mgr-badge mgr-badge--niveau ms-1">{{ libelleNiveau(d.niveau) }}</span>
                </div>
                <div class="mgr-user__sub">
                  <i class="isax" [ngClass]="iconeTypeDemande(d.type_demande)"></i>
                  {{ libelleTypeDemande(d.type_demande) }} \xB7 {{ d.titre }}
                </div>
              </div>
            </div>
            <div class="dash-demande__meta">
              <span class="dash-demande__date">{{ d.created_at | date:'dd/MM/yyyy' }}</span>
              <a [routerLink]="routes.managerDemandes" [queryParams]="{ demande: d.id }" class="mgr-btn mgr-btn--primary mgr-btn--sm">Traiter</a>
            </div>
          </div>
        </div>
      </div>

      <!-- \u2500\u2500 R\xE9partition par niveau \u2500\u2500 -->
      <div class="col-xl-5">
        <div class="mgr-card h-100">
          <div class="mgr-card__title">
            <span><i class="isax isax-hierarchy"></i>R\xE9partition hi\xE9rarchique</span>
            <a [routerLink]="routes.managerEquipe" [queryParams]="{ vue: 'arbre' }">Organigramme \u2192</a>
          </div>
          <div class="dash-niveau" *ngFor="let r of data.repartition_niveaux">
            <span class="mgr-badge mgr-badge--niveau">{{ libelleNiveau(r.niveau) }}</span>
            <div class="dash-niveau__bar"><div class="dash-niveau__fill" [style.width.%]="largeurNiveau(r.effectif)"></div></div>
            <span class="dash-niveau__val">{{ r.effectif }}</span>
          </div>

          <div class="dash-formations">
            <div><strong>{{ data.kpis.formations_total }}</strong><span>inscriptions</span></div>
            <div><strong>{{ data.kpis.formations_terminees }}</strong><span>termin\xE9es</span></div>
            <div><strong>{{ data.kpis.formations_non_commencees }}</strong><span>non commenc\xE9es</span></div>
            <div><strong>{{ data.kpis.demandes_en_attente_rh }}</strong><span>chez les RH</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500 Collaborateurs \xE0 suivre \u2500\u2500 -->
    <div class="mgr-card">
      <div class="mgr-card__title">
        <span><i class="isax isax-flag"></i>Collaborateurs \xE0 accompagner</span>
        <a [routerLink]="routes.managerEquipe">Toute l'\xE9quipe \u2192</a>
      </div>
      <div *ngIf="!data.collaborateurs_a_suivre.length" class="mgr-empty">
        <i class="isax isax-people"></i>Aucune formation en cours dans ce p\xE9rim\xE8tre.
      </div>
      <div class="mgr-table-wrap" *ngIf="data.collaborateurs_a_suivre.length">
        <table class="mgr-table">
          <thead>
            <tr><th>Collaborateur</th><th>Niveau</th><th>Formations</th><th>Progression</th><th></th></tr>
          </thead>
          <tbody>
            <tr *ngFor="let c of data.collaborateurs_a_suivre">
              <td>
                <div class="mgr-user">
                  <div class="mgr-user__av">{{ initiales(c) }}</div>
                  <div><div class="mgr-user__name">{{ nomComplet(c) }}</div><div class="mgr-user__sub">{{ c.fonction || '\u2014' }}</div></div>
                </div>
              </td>
              <td><span class="mgr-badge mgr-badge--niveau">{{ libelleNiveau(c.niveau) }}</span></td>
              <td>{{ c.formations_en_cours }} en cours \xB7 {{ c.formations_terminees }}/{{ c.formations_total }}</td>
              <td>
                <div class="mgr-progress" [ngClass]="classeProgression(c.progression_moyenne)">
                  <div class="mgr-progress__bar"><div class="mgr-progress__fill" [style.width.%]="c.progression_moyenne"></div></div>
                  <span class="mgr-progress__val">{{ c.progression_moyenne }}%</span>
                </div>
              </td>
              <td class="text-end">
                <a [routerLink]="[routes.managerCollaborateur, c.id]" class="mgr-btn mgr-btn--sm"><i class="isax isax-eye"></i>Voir</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </ng-container>
</div>
`, styles: ["/* src/app/features/manager/manager-dashboard/manager-dashboard.component.scss */\n.mgr-page {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mgr-page-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.mgr-page-head h1,\n.mgr-page-head h2 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mgr-page-head h1 i,\n.mgr-page-head h2 i {\n  color: #4F46E5;\n}\n.mgr-page-head p {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 2px 0 0;\n}\n.mgr-card {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 18px 20px;\n}\n.mgr-card__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.mgr-card__title i {\n  color: #4F46E5;\n  margin-right: 6px;\n}\n.mgr-card__title a {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4F46E5;\n  text-decoration: none;\n}\n.mgr-card__title a:hover {\n  text-decoration: underline;\n}\n.mgr-kpis {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n}\n.mgr-kpi {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-top: 3px solid #4F46E5;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.mgr-kpi__val {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.1;\n}\n.mgr-kpi__lbl {\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.mgr-kpi__lbl i {\n  font-size: 13px;\n}\n.mgr-kpi--warn {\n  border-top-color: #f59e0b;\n  background: #fff8ee;\n}\n.mgr-kpi--danger {\n  border-top-color: #dc2626;\n}\n.mgr-kpi--ok {\n  border-top-color: #059669;\n}\n.mgr-progress {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 110px;\n}\n.mgr-progress__bar {\n  flex: 1;\n  height: 6px;\n  background: #eef0f4;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.mgr-progress__fill {\n  height: 100%;\n  background: #4F46E5;\n  border-radius: 6px;\n  transition: width 0.3s;\n}\n.mgr-progress__val {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  min-width: 36px;\n  text-align: right;\n}\n.mgr-progress--low .mgr-progress__fill {\n  background: #f59e0b;\n}\n.mgr-progress--high .mgr-progress__fill {\n  background: #059669;\n}\n.mgr-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n  background: #f3f4f6;\n  color: #374151;\n}\n.mgr-badge i {\n  font-size: 12px;\n}\n.mgr-badge--niveau {\n  background: #EEF2FF;\n  color: #4338CA;\n  border: 1px solid #C7D2FE;\n}\n.mgr-badge--manager {\n  background: #fef3c7;\n  color: #92400e;\n}\n.mgr-badge--rh {\n  background: #e0f2fe;\n  color: #075985;\n}\n.mgr-badge--validee {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-badge--refusee {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-badge--annulee {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mgr-badge--actif {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-badge--inactif {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mgr-badge--urgente {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-badge--haute {\n  background: #ffedd5;\n  color: #9a3412;\n}\n.mgr-user {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.mgr-user__av {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #EEF2FF;\n  color: #4F46E5;\n  border: 1px solid #C7D2FE;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.mgr-user__name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a1a2e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mgr-user__sub {\n  font-size: 11px;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mgr-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.mgr-search {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.mgr-search i {\n  position: absolute;\n  left: 11px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 15px;\n}\n.mgr-search input {\n  width: 100%;\n  padding: 8px 12px 8px 34px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n}\n.mgr-search input:focus {\n  outline: none;\n  border-color: #4F46E5;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);\n}\n.mgr-select {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fff;\n}\n.mgr-select:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.mgr-chips {\n  display: inline-flex;\n  gap: 4px;\n  background: #f3f4f6;\n  padding: 3px;\n  border-radius: 9px;\n}\n.mgr-chip {\n  border: none;\n  background: transparent;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  padding: 6px 12px;\n  border-radius: 7px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.mgr-chip.active {\n  background: #fff;\n  color: #4338CA;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.mgr-chip .count {\n  font-size: 10px;\n  background: #4F46E5;\n  color: #fff;\n  border-radius: 10px;\n  padding: 0 6px;\n}\n.mgr-chip .count--muted {\n  background: #d1d5db;\n  color: #374151;\n}\n.mgr-table-wrap {\n  overflow-x: auto;\n}\n.mgr-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.mgr-table th {\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 10px 12px;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.mgr-table td {\n  padding: 11px 12px;\n  border-bottom: 1px solid #f1f2f4;\n  vertical-align: middle;\n  color: #374151;\n}\n.mgr-table tbody tr:hover {\n  background: #fafbff;\n}\n.mgr-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 7px 14px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  color: #1a1a2e;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.mgr-btn i {\n  font-size: 15px;\n}\n.mgr-btn:hover:not(:disabled) {\n  border-color: #4F46E5;\n  color: #4F46E5;\n}\n.mgr-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.mgr-btn--primary {\n  background: #4F46E5;\n  border-color: #4F46E5;\n  color: #fff;\n}\n.mgr-btn--primary:hover:not(:disabled) {\n  background: #4338CA;\n  color: #fff;\n}\n.mgr-btn--success {\n  background: #059669;\n  border-color: #059669;\n  color: #fff;\n}\n.mgr-btn--success:hover:not(:disabled) {\n  background: #047857;\n  border-color: #047857;\n  color: #fff;\n}\n.mgr-btn--danger {\n  background: #fff;\n  border-color: #fca5a5;\n  color: #b91c1c;\n}\n.mgr-btn--danger:hover:not(:disabled) {\n  background: #fee2e2;\n  border-color: #dc2626;\n  color: #991b1b;\n}\n.mgr-btn--sm {\n  font-size: 12px;\n  padding: 5px 10px;\n}\n.mgr-btn--sm i {\n  font-size: 13px;\n}\n.mgr-empty {\n  text-align: center;\n  padding: 36px 16px;\n  color: #6b7280;\n  font-size: 13px;\n}\n.mgr-empty i {\n  font-size: 34px;\n  display: block;\n  margin-bottom: 8px;\n  color: #c7cbd4;\n}\n.mgr-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-alert--ok {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-alert--info {\n  background: #EEF2FF;\n  color: #4338CA;\n}\n.mgr-alert button {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: inherit;\n  cursor: pointer;\n  font-size: 16px;\n}\n.mgr-skeleton {\n  height: 44px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e9eaee 37%,\n      #f3f4f6 63%);\n  background-size: 400% 100%;\n  animation: mgr-shimmer 1.4s ease infinite;\n  margin-bottom: 8px;\n}\n@keyframes mgr-shimmer {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n.mgr-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(17, 24, 39, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.mgr-modal {\n  background: #fff;\n  border-radius: 14px;\n  width: 100%;\n  max-width: 520px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.mgr-modal__head {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mgr-modal__head h5 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.mgr-modal__head button {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #6b7280;\n  cursor: pointer;\n}\n.mgr-modal__body {\n  padding: 18px 20px;\n  font-size: 13px;\n  color: #374151;\n}\n.mgr-modal__body label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 6px;\n  display: block;\n}\n.mgr-modal__body textarea {\n  width: 100%;\n  min-height: 90px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 13px;\n  resize: vertical;\n}\n.mgr-modal__body textarea:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.mgr-modal__foot {\n  padding: 14px 20px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.mgr-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding-top: 12px;\n  font-size: 12px;\n  color: #6b7280;\n}\n.is-loading {\n  opacity: 0.55;\n  transition: opacity 0.2s;\n}\n.dash-demande {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid #f1f2f4;\n}\n.dash-demande:last-child {\n  border-bottom: none;\n}\n.dash-demande__info {\n  min-width: 0;\n}\n.dash-demande__meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.dash-demande__date {\n  font-size: 11px;\n  color: #6b7280;\n}\n.dash-niveau {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.dash-niveau__bar {\n  flex: 1;\n  height: 10px;\n  background: #eef0f4;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.dash-niveau__fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #6366F1,\n      #4F46E5);\n  border-radius: 6px;\n}\n.dash-niveau__val {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a1a2e;\n  min-width: 24px;\n  text-align: right;\n}\n.dash-formations {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n  margin-top: 16px;\n  padding-top: 14px;\n  border-top: 1px solid #f1f2f4;\n}\n.dash-formations div {\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.dash-formations strong {\n  display: block;\n  font-size: 18px;\n  color: #1a1a2e;\n}\n.dash-formations span {\n  font-size: 11px;\n  color: #6b7280;\n}\n/*# sourceMappingURL=manager-dashboard.component.css.map */\n"] }]
  }], () => [{ type: ManagerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManagerDashboardComponent, { className: "ManagerDashboardComponent", filePath: "app/features/manager/manager-dashboard/manager-dashboard.component.ts", lineNumber: 19 });
})();
export {
  ManagerDashboardComponent
};
//# sourceMappingURL=chunk-TK3NCQHX.js.map
