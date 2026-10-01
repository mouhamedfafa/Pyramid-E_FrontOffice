import {
  classeProgression,
  initiales,
  libelleNiveau,
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
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-RNP5DT5T.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-VMXPZP5A.js";
import "./chunk-47WYM2C2.js";
import "./chunk-XZLGMMSK.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-ZRUSYSCI.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  Subject,
  debounceTime,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4
} from "./chunk-ON7U2Q36.js";
import "./chunk-4MWRP73S.js";

// src/app/features/manager/manager-equipe/manager-equipe.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = (a0, a1) => [a0, a1];
var _c2 = () => [1, 2, 3];
var _c3 = (a0) => ({ $implicit: a0 });
function ManagerEquipeComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ManagerEquipeComponent_div_16_div_5_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function ManagerEquipeComponent_div_16_div_5_button_3_Template_button_click_0_listener() {
      const n_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setNiveau(n_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.niveauFiltre === n_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.libelleNiveau(n_r6));
  }
}
function ManagerEquipeComponent_div_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 5);
    \u0275\u0275listener("click", function ManagerEquipeComponent_div_16_div_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setNiveau(null));
    });
    \u0275\u0275text(2, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ManagerEquipeComponent_div_16_div_5_button_3_Template, 2, 3, "button", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.niveauFiltre === null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.niveaux);
  }
}
function ManagerEquipeComponent_div_16_ng_container_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
}
function ManagerEquipeComponent_div_16_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ManagerEquipeComponent_div_16_ng_container_13_div_1_Template, 1, 0, "div", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function ManagerEquipeComponent_div_16_div_14_tr_20_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r7.collaborateurs_count, " ");
  }
}
function ManagerEquipeComponent_div_16_div_14_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 31)(3, "div", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ManagerEquipeComponent_div_16_div_14_tr_20_span_13_Template, 3, 1, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 37);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 37);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 37);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "div", 38)(22, "div", 39);
    \u0275\u0275element(23, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 41);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "td")(27, "span", 42);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 43)(30, "a", 44);
    \u0275\u0275element(31, "i", 45);
    \u0275\u0275text(32, "Voir");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.initiales(c_r7));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.nomComplet(c_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r7.fonction || c_r7.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.libelleNiveau(c_r7.niveau));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r7.collaborateurs_count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r7.niveau === 1 ? "Moi" : ctx_r1.nomComplet(c_r7.manager));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r7.direction || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", c_r7.formations_en_cours, " en cours \xB7 ", c_r7.formations_terminees, "/", c_r7.formations_total);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.classeProgression(c_r7.progression_moyenne));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", c_r7.progression_moyenne, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r7.progression_moyenne, "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", c_r7.statut === 1 ? "mgr-badge--actif" : "mgr-badge--inactif");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r7.statut === 1 ? "Actif" : "Inactif", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(17, _c1, ctx_r1.routes.managerCollaborateur, c_r7.id));
  }
}
function ManagerEquipeComponent_div_16_div_14_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 47)(2, "div", 48);
    \u0275\u0275element(3, "i", 3);
    \u0275\u0275text(4, "Aucun collaborateur ne correspond \xE0 ces crit\xE8res.");
    \u0275\u0275elementEnd()()();
  }
}
function ManagerEquipeComponent_div_16_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "table", 29)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Collaborateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Manager direct");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Direction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Formations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, ManagerEquipeComponent_div_16_div_14_tr_20_Template, 33, 20, "tr", 30)(21, ManagerEquipeComponent_div_16_div_14_tr_21_Template, 5, 0, "tr", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r1.collaborateurs)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.collaborateurs.length);
  }
}
function ManagerEquipeComponent_div_16_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50)(4, "button", 51);
    \u0275\u0275listener("click", function ManagerEquipeComponent_div_16_div_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.allerPage(ctx_r1.page - 1));
    });
    \u0275\u0275element(5, "i", 52);
    \u0275\u0275text(6, "Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 51);
    \u0275\u0275listener("click", function ManagerEquipeComponent_div_16_div_15_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.allerPage(ctx_r1.page + 1));
    });
    \u0275\u0275text(8, " Suivant");
    \u0275\u0275element(9, "i", 53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", ctx_r1.total, " collaborateur", ctx_r1.total > 1 ? "s" : "", " \xB7 page ", ctx_r1.page, "/", ctx_r1.lastPage);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.page >= ctx_r1.lastPage);
  }
}
function ManagerEquipeComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14);
    \u0275\u0275element(3, "i", 15);
    \u0275\u0275elementStart(4, "input", 16);
    \u0275\u0275listener("ngModelChange", function ManagerEquipeComponent_div_16_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ManagerEquipeComponent_div_16_div_5_Template, 4, 3, "div", 17);
    \u0275\u0275elementStart(6, "select", 18);
    \u0275\u0275listener("ngModelChange", function ManagerEquipeComponent_div_16_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStatut($event));
    });
    \u0275\u0275elementStart(7, "option", 19);
    \u0275\u0275text(8, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 20);
    \u0275\u0275text(10, "Actifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 21);
    \u0275\u0275text(12, "Inactifs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, ManagerEquipeComponent_div_16_ng_container_13_Template, 2, 2, "ng-container", 22)(14, ManagerEquipeComponent_div_16_div_14_Template, 22, 3, "div", 23)(15, ManagerEquipeComponent_div_16_div_15_Template, 10, 6, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.search);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.niveaux.length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.statutFiltre);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.lastPage > 1);
  }
}
function ManagerEquipeComponent_div_17_ng_container_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
}
function ManagerEquipeComponent_div_17_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ManagerEquipeComponent_div_17_ng_container_12_div_1_Template, 1, 0, "div", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c2));
  }
}
function ManagerEquipeComponent_div_17_div_13_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ManagerEquipeComponent_div_17_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "div", 31)(3, "div", 61);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 62);
    \u0275\u0275text(9, "Moi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 34);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(12, ManagerEquipeComponent_div_17_div_13_ng_container_12_Template, 1, 0, "ng-container", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const branche_r10 = \u0275\u0275reference(19);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.initiales(ctx_r1.racine));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.racine.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.racine.fonction || "Manager");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", branche_r10)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c3, ctx_r1.racine.enfants));
  }
}
function ManagerEquipeComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 54)(2, "span");
    \u0275\u0275element(3, "i", 7);
    \u0275\u0275text(4, "Organigramme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 50)(6, "button", 55);
    \u0275\u0275listener("click", function ManagerEquipeComponent_div_17_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toutDeplier());
    });
    \u0275\u0275element(7, "i", 56);
    \u0275\u0275text(8, "Tout d\xE9plier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 55);
    \u0275\u0275listener("click", function ManagerEquipeComponent_div_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toutReplier());
    });
    \u0275\u0275element(10, "i", 57);
    \u0275\u0275text(11, "Tout replier");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, ManagerEquipeComponent_div_17_ng_container_12_Template, 2, 2, "ng-container", 22)(13, ManagerEquipeComponent_div_17_div_13_Template, 13, 7, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.loadingArbre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingArbre && ctx_r1.racine);
  }
}
function ManagerEquipeComponent_ng_template_18_li_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function ManagerEquipeComponent_ng_template_18_li_1_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const n_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleNoeud(n_r12.id));
    });
    \u0275\u0275element(1, "i", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", ctx_r1.estReplie(n_r12.id) ? "D\xE9plier" : "Replier");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.estReplie(n_r12.id) ? "isax-add-square" : "isax-minus-square");
  }
}
function ManagerEquipeComponent_ng_template_18_li_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 74);
  }
}
function ManagerEquipeComponent_ng_template_18_li_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1, "Inactif");
    \u0275\u0275elementEnd();
  }
}
function ManagerEquipeComponent_ng_template_18_li_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", n_r12.enfants.length, " N-1");
  }
}
function ManagerEquipeComponent_ng_template_18_li_1_ng_container_23_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ManagerEquipeComponent_ng_template_18_li_1_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ManagerEquipeComponent_ng_template_18_li_1_ng_container_23_ng_container_1_Template, 1, 0, "ng-container", 63);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const n_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext(2);
    const branche_r10 = \u0275\u0275reference(19);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", branche_r10)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, n_r12.enfants));
  }
}
function ManagerEquipeComponent_ng_template_18_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 65);
    \u0275\u0275template(2, ManagerEquipeComponent_ng_template_18_li_1_button_2_Template, 2, 2, "button", 66)(3, ManagerEquipeComponent_ng_template_18_li_1_span_3_Template, 1, 0, "span", 67);
    \u0275\u0275elementStart(4, "div", 68)(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 69)(8, "div", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "span", 62);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ManagerEquipeComponent_ng_template_18_li_1_span_12_Template, 2, 0, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 34);
    \u0275\u0275text(14);
    \u0275\u0275template(15, ManagerEquipeComponent_ng_template_18_li_1_span_15_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 71)(17, "div", 39);
    \u0275\u0275element(18, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 41);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "a", 44);
    \u0275\u0275element(22, "i", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, ManagerEquipeComponent_ng_template_18_li_1_ng_container_23_Template, 2, 4, "ng-container", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", n_r12.enfants.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !n_r12.enfants.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.initiales(n_r12));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.nomComplet(n_r12), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.libelleNiveau(n_r12.niveau));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", n_r12.statut !== 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r12.fonction || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", n_r12.enfants.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.classeProgression(n_r12.progression_moyenne ?? 0));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", n_r12.progression_moyenne ?? 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", n_r12.progression_moyenne ?? 0, "%");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(14, _c1, ctx_r1.routes.managerCollaborateur, n_r12.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", n_r12.enfants.length && !ctx_r1.estReplie(n_r12.id));
  }
}
function ManagerEquipeComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 64);
    \u0275\u0275template(1, ManagerEquipeComponent_ng_template_18_li_1_Template, 24, 17, "li", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noeuds_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", noeuds_r13)("ngForTrackBy", ctx_r1.trackById);
  }
}
var ManagerEquipeComponent = class _ManagerEquipeComponent {
  managerService;
  route;
  router;
  routes = routes;
  vue = "liste";
  // ── Liste ──
  collaborateurs = [];
  niveaux = [];
  niveauFiltre = null;
  statutFiltre = "";
  search = "";
  page = 1;
  lastPage = 1;
  total = 0;
  loading = false;
  error = "";
  // ── Arbre ──
  racine = null;
  loadingArbre = false;
  noeudsReplies = /* @__PURE__ */ new Set();
  initiales = initiales;
  nomComplet = nomComplet;
  libelleNiveau = libelleNiveau;
  classeProgression = classeProgression;
  search$ = new Subject();
  subs = [];
  constructor(managerService, route, router) {
    this.managerService = managerService;
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    this.subs.push(this.search$.pipe(debounceTime(300)).subscribe(() => {
      this.page = 1;
      this.chargerListe();
    }));
    this.vue = this.route.snapshot.queryParamMap.get("vue") === "arbre" ? "arbre" : "liste";
    this.vue === "arbre" ? this.chargerArbre() : this.chargerListe();
  }
  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }
  setVue(vue) {
    this.vue = vue;
    this.router.navigate([], { queryParams: { vue: vue === "arbre" ? "arbre" : null }, queryParamsHandling: "merge", replaceUrl: true });
    if (vue === "arbre" && !this.racine)
      this.chargerArbre();
    if (vue === "liste" && !this.collaborateurs.length)
      this.chargerListe();
  }
  // ════════════════ LISTE ════════════════
  chargerListe() {
    this.loading = true;
    this.error = "";
    this.managerService.getEquipe({
      niveau: this.niveauFiltre,
      search: this.search.trim(),
      statut: this.statutFiltre,
      page: this.page,
      per_page: 20
    }).subscribe({
      next: (res) => {
        this.collaborateurs = res.collaborateurs;
        this.niveaux = res.niveaux;
        this.total = res.pagination.total;
        this.lastPage = res.pagination.last_page;
        this.loading = false;
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Impossible de charger votre \xE9quipe.");
        this.loading = false;
      }
    });
  }
  onSearch(value) {
    this.search = value;
    this.search$.next(value);
  }
  setNiveau(niveau) {
    this.niveauFiltre = niveau;
    this.page = 1;
    this.chargerListe();
  }
  setStatut(statut) {
    this.statutFiltre = statut;
    this.page = 1;
    this.chargerListe();
  }
  allerPage(page) {
    if (page < 1 || page > this.lastPage)
      return;
    this.page = page;
    this.chargerListe();
  }
  // ════════════════ ARBRE ════════════════
  chargerArbre() {
    this.loadingArbre = true;
    this.error = "";
    this.managerService.getArbre().subscribe({
      next: (res) => {
        this.racine = res.racine;
        this.loadingArbre = false;
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Impossible de charger l'organigramme.");
        this.loadingArbre = false;
      }
    });
  }
  toggleNoeud(id) {
    this.noeudsReplies.has(id) ? this.noeudsReplies.delete(id) : this.noeudsReplies.add(id);
  }
  estReplie(id) {
    return this.noeudsReplies.has(id);
  }
  toutDeplier() {
    this.noeudsReplies.clear();
  }
  toutReplier() {
    const parcourir = (n) => n.enfants.forEach((e) => {
      if (e.enfants.length)
        this.noeudsReplies.add(e.id);
      parcourir(e);
    });
    if (this.racine)
      parcourir(this.racine);
  }
  trackById(_, item) {
    return item.id;
  }
  static \u0275fac = function ManagerEquipeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManagerEquipeComponent)(\u0275\u0275directiveInject(ManagerService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManagerEquipeComponent, selectors: [["app-manager-equipe"]], decls: 20, vars: 7, consts: [["branche", ""], [1, "mgr-page"], [1, "mgr-page-head"], [1, "isax", "isax-people"], [1, "mgr-chips"], ["type", "button", 1, "mgr-chip", 3, "click"], [1, "isax", "isax-row-vertical"], [1, "isax", "isax-hierarchy"], ["class", "mgr-alert", 4, "ngIf"], ["class", "mgr-card", 4, "ngIf"], [1, "mgr-alert"], [1, "isax", "isax-warning-2"], [1, "mgr-card"], [1, "mgr-toolbar", "mb-3"], [1, "mgr-search"], [1, "isax", "isax-search-normal-1"], ["type", "search", "placeholder", "Rechercher (nom, email, matricule, fonction)\u2026", 3, "ngModelChange", "ngModel"], ["class", "mgr-chips", 4, "ngIf"], [1, "mgr-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "actif"], ["value", "inactif"], [4, "ngIf"], ["class", "mgr-table-wrap", 4, "ngIf"], ["class", "mgr-pager", 4, "ngIf"], ["type", "button", "class", "mgr-chip", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "mgr-skeleton", 4, "ngFor", "ngForOf"], [1, "mgr-skeleton"], [1, "mgr-table-wrap"], [1, "mgr-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mgr-user"], [1, "mgr-user__av"], [1, "mgr-user__name"], [1, "mgr-user__sub"], [1, "mgr-badge", "mgr-badge--niveau"], ["class", "eq-sub-count", "title", "Manage lui-m\xEAme des collaborateurs", 4, "ngIf"], [1, "eq-meta"], [1, "mgr-progress", 3, "ngClass"], [1, "mgr-progress__bar"], [1, "mgr-progress__fill"], [1, "mgr-progress__val"], [1, "mgr-badge", 3, "ngClass"], [1, "text-end"], [1, "mgr-btn", "mgr-btn--sm", 3, "routerLink"], [1, "isax", "isax-eye"], ["title", "Manage lui-m\xEAme des collaborateurs", 1, "eq-sub-count"], ["colspan", "8"], [1, "mgr-empty"], [1, "mgr-pager"], [1, "d-flex", "gap-2"], ["type", "button", 1, "mgr-btn", "mgr-btn--sm", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], [1, "isax", "isax-arrow-right-3"], [1, "mgr-card__title"], ["type", "button", 1, "mgr-btn", "mgr-btn--sm", 3, "click"], [1, "isax", "isax-maximize-4"], [1, "isax", "isax-minus-square"], ["class", "eq-tree", 4, "ngIf"], [1, "eq-tree"], [1, "eq-node", "eq-node--root"], [1, "mgr-user__av", "eq-av-root"], [1, "mgr-badge", "mgr-badge--niveau", "ms-1"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "eq-branch"], [1, "eq-node"], ["type", "button", "class", "eq-toggle", 3, "click", 4, "ngIf"], ["class", "eq-toggle-spacer", 4, "ngIf"], [1, "mgr-user", "flex-grow-1"], [1, "min-w-0"], ["class", "mgr-badge mgr-badge--inactif ms-1", 4, "ngIf"], [1, "mgr-progress", "eq-node-progress", 3, "ngClass"], ["type", "button", 1, "eq-toggle", 3, "click"], [1, "isax", 3, "ngClass"], [1, "eq-toggle-spacer"], [1, "mgr-badge", "mgr-badge--inactif", "ms-1"]], template: function ManagerEquipeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2");
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275text(5, "Mon \xE9quipe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Vos collaborateurs directs et indirects (N-1, N-2\u2026)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 4)(9, "button", 5);
      \u0275\u0275listener("click", function ManagerEquipeComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setVue("liste"));
      });
      \u0275\u0275element(10, "i", 6);
      \u0275\u0275text(11, "Liste ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 5);
      \u0275\u0275listener("click", function ManagerEquipeComponent_Template_button_click_12_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setVue("arbre"));
      });
      \u0275\u0275element(13, "i", 7);
      \u0275\u0275text(14, "Organigramme ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(15, ManagerEquipeComponent_div_15_Template, 3, 1, "div", 8)(16, ManagerEquipeComponent_div_16_Template, 16, 6, "div", 9)(17, ManagerEquipeComponent_div_17_Template, 14, 2, "div", 9)(18, ManagerEquipeComponent_ng_template_18_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275classProp("active", ctx.vue === "liste");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.vue === "arbre");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vue === "liste");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vue === "arbre");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ['\n\n.mgr-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mgr-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.mgr-page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.mgr-page-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mgr-page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.mgr-page-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4F46E5;\n}\n.mgr-page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 2px 0 0;\n}\n.mgr-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 18px 20px;\n}\n.mgr-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.mgr-card__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4F46E5;\n  margin-right: 6px;\n}\n.mgr-card__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4F46E5;\n  text-decoration: none;\n}\n.mgr-card__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.mgr-kpis[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n}\n.mgr-kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-top: 3px solid #4F46E5;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.mgr-kpi__val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.1;\n}\n.mgr-kpi__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.mgr-kpi__lbl[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.mgr-kpi--warn[_ngcontent-%COMP%] {\n  border-top-color: #f59e0b;\n  background: #fff8ee;\n}\n.mgr-kpi--danger[_ngcontent-%COMP%] {\n  border-top-color: #dc2626;\n}\n.mgr-kpi--ok[_ngcontent-%COMP%] {\n  border-top-color: #059669;\n}\n.mgr-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 110px;\n}\n.mgr-progress__bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: #eef0f4;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.mgr-progress__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #4F46E5;\n  border-radius: 6px;\n  transition: width 0.3s;\n}\n.mgr-progress__val[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  min-width: 36px;\n  text-align: right;\n}\n.mgr-progress--low[_ngcontent-%COMP%]   .mgr-progress__fill[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.mgr-progress--high[_ngcontent-%COMP%]   .mgr-progress__fill[_ngcontent-%COMP%] {\n  background: #059669;\n}\n.mgr-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n  background: #f3f4f6;\n  color: #374151;\n}\n.mgr-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mgr-badge--niveau[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #4338CA;\n  border: 1px solid #C7D2FE;\n}\n.mgr-badge--manager[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.mgr-badge--rh[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #075985;\n}\n.mgr-badge--validee[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-badge--refusee[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-badge--annulee[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mgr-badge--actif[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-badge--inactif[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mgr-badge--urgente[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-badge--haute[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #9a3412;\n}\n.mgr-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.mgr-user__av[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #EEF2FF;\n  color: #4F46E5;\n  border: 1px solid #C7D2FE;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.mgr-user__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a1a2e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mgr-user__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mgr-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.mgr-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.mgr-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 11px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 15px;\n}\n.mgr-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px 8px 34px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n}\n.mgr-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4F46E5;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);\n}\n.mgr-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fff;\n}\n.mgr-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.mgr-chips[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 4px;\n  background: #f3f4f6;\n  padding: 3px;\n  border-radius: 9px;\n}\n.mgr-chip[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  padding: 6px 12px;\n  border-radius: 7px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.mgr-chip.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #4338CA;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.mgr-chip[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  font-size: 10px;\n  background: #4F46E5;\n  color: #fff;\n  border-radius: 10px;\n  padding: 0 6px;\n}\n.mgr-chip[_ngcontent-%COMP%]   .count--muted[_ngcontent-%COMP%] {\n  background: #d1d5db;\n  color: #374151;\n}\n.mgr-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.mgr-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.mgr-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 10px 12px;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.mgr-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 12px;\n  border-bottom: 1px solid #f1f2f4;\n  vertical-align: middle;\n  color: #374151;\n}\n.mgr-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbff;\n}\n.mgr-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 7px 14px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  color: #1a1a2e;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.mgr-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.mgr-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #4F46E5;\n  color: #4F46E5;\n}\n.mgr-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.mgr-btn--primary[_ngcontent-%COMP%] {\n  background: #4F46E5;\n  border-color: #4F46E5;\n  color: #fff;\n}\n.mgr-btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4338CA;\n  color: #fff;\n}\n.mgr-btn--success[_ngcontent-%COMP%] {\n  background: #059669;\n  border-color: #059669;\n  color: #fff;\n}\n.mgr-btn--success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #047857;\n  border-color: #047857;\n  color: #fff;\n}\n.mgr-btn--danger[_ngcontent-%COMP%] {\n  background: #fff;\n  border-color: #fca5a5;\n  color: #b91c1c;\n}\n.mgr-btn--danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fee2e2;\n  border-color: #dc2626;\n  color: #991b1b;\n}\n.mgr-btn--sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 5px 10px;\n}\n.mgr-btn--sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.mgr-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 36px 16px;\n  color: #6b7280;\n  font-size: 13px;\n}\n.mgr-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 34px;\n  display: block;\n  margin-bottom: 8px;\n  color: #c7cbd4;\n}\n.mgr-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-alert--ok[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-alert--info[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #4338CA;\n}\n.mgr-alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: inherit;\n  cursor: pointer;\n  font-size: 16px;\n}\n.mgr-skeleton[_ngcontent-%COMP%] {\n  height: 44px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e9eaee 37%,\n      #f3f4f6 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_mgr-shimmer 1.4s ease infinite;\n  margin-bottom: 8px;\n}\n@keyframes _ngcontent-%COMP%_mgr-shimmer {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n.mgr-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(17, 24, 39, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.mgr-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  width: 100%;\n  max-width: 520px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.mgr-modal__head[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mgr-modal__head[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.mgr-modal__head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #6b7280;\n  cursor: pointer;\n}\n.mgr-modal__body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  font-size: 13px;\n  color: #374151;\n}\n.mgr-modal__body[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 6px;\n  display: block;\n}\n.mgr-modal__body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 90px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 13px;\n  resize: vertical;\n}\n.mgr-modal__body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.mgr-modal__foot[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.mgr-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding-top: 12px;\n  font-size: 12px;\n  color: #6b7280;\n}\n.eq-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4b5563;\n}\n.eq-sub-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 11px;\n  color: #6b7280;\n  margin-left: 6px;\n}\n.eq-sub-count[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.eq-tree[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.eq-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border: 1px solid #eceef3;\n  border-radius: 10px;\n  background: #fff;\n  margin-bottom: 6px;\n}\n.eq-node--root[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  border-color: #C7D2FE;\n}\n.eq-av-root[_ngcontent-%COMP%] {\n  background: #4F46E5 !important;\n  color: #fff !important;\n}\n.eq-node-progress[_ngcontent-%COMP%] {\n  width: 150px;\n  flex-shrink: 0;\n}\n.eq-toggle[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0;\n  font-size: 18px;\n  color: #4F46E5;\n  cursor: pointer;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.eq-toggle-spacer[_ngcontent-%COMP%] {\n  width: 18px;\n  flex-shrink: 0;\n}\n.eq-branch[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 0 0 18px;\n  padding: 0 0 0 16px;\n  border-left: 2px solid #E0E7FF;\n}\n.eq-branch[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n}\n.eq-branch[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -16px;\n  top: 22px;\n  width: 14px;\n  border-top: 2px solid #E0E7FF;\n}\n.min-w-0[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n@media (max-width: 767px) {\n  .eq-node-progress[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=manager-equipe.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagerEquipeComponent, [{
    type: Component,
    args: [{ selector: "app-manager-equipe", imports: [CommonModule, FormsModule, RouterLink], template: `<div class="mgr-page">

  <div class="mgr-page-head">
    <div>
      <h2><i class="isax isax-people"></i>Mon \xE9quipe</h2>
      <p>Vos collaborateurs directs et indirects (N-1, N-2\u2026)</p>
    </div>
    <div class="mgr-chips">
      <button type="button" class="mgr-chip" [class.active]="vue === 'liste'" (click)="setVue('liste')">
        <i class="isax isax-row-vertical"></i>Liste
      </button>
      <button type="button" class="mgr-chip" [class.active]="vue === 'arbre'" (click)="setVue('arbre')">
        <i class="isax isax-hierarchy"></i>Organigramme
      </button>
    </div>
  </div>

  <div *ngIf="error" class="mgr-alert"><i class="isax isax-warning-2"></i>{{ error }}</div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VUE LISTE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="mgr-card" *ngIf="vue === 'liste'">
    <div class="mgr-toolbar mb-3">
      <div class="mgr-search">
        <i class="isax isax-search-normal-1"></i>
        <input type="search" placeholder="Rechercher (nom, email, matricule, fonction)\u2026"
               [ngModel]="search" (ngModelChange)="onSearch($event)">
      </div>

      <div class="mgr-chips" *ngIf="niveaux.length > 1">
        <button type="button" class="mgr-chip" [class.active]="niveauFiltre === null" (click)="setNiveau(null)">Tous</button>
        <button type="button" class="mgr-chip" *ngFor="let n of niveaux"
                [class.active]="niveauFiltre === n" (click)="setNiveau(n)">{{ libelleNiveau(n) }}</button>
      </div>

      <select class="mgr-select" [ngModel]="statutFiltre" (ngModelChange)="setStatut($event)">
        <option value="">Tous les statuts</option>
        <option value="actif">Actifs</option>
        <option value="inactif">Inactifs</option>
      </select>
    </div>

    <ng-container *ngIf="loading">
      <div class="mgr-skeleton" *ngFor="let i of [1,2,3,4,5]"></div>
    </ng-container>

    <div class="mgr-table-wrap" *ngIf="!loading">
      <table class="mgr-table">
        <thead>
          <tr>
            <th>Collaborateur</th>
            <th>Niveau</th>
            <th>Manager direct</th>
            <th>Direction</th>
            <th>Formations</th>
            <th>Progression</th>
            <th>Statut</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let c of collaborateurs; trackBy: trackById">
            <td>
              <div class="mgr-user">
                <div class="mgr-user__av">{{ initiales(c) }}</div>
                <div>
                  <div class="mgr-user__name">{{ nomComplet(c) }}</div>
                  <div class="mgr-user__sub">{{ c.fonction || c.email }}</div>
                </div>
              </div>
            </td>
            <td>
              <span class="mgr-badge mgr-badge--niveau">{{ libelleNiveau(c.niveau) }}</span>
              <span class="eq-sub-count" *ngIf="c.collaborateurs_count" title="Manage lui-m\xEAme des collaborateurs">
                <i class="isax isax-hierarchy"></i>{{ c.collaborateurs_count }}
              </span>
            </td>
            <td class="eq-meta">{{ c.niveau === 1 ? 'Moi' : nomComplet(c.manager) }}</td>
            <td class="eq-meta">{{ c.direction || '\u2014' }}</td>
            <td class="eq-meta">{{ c.formations_en_cours }} en cours \xB7 {{ c.formations_terminees }}/{{ c.formations_total }}</td>
            <td>
              <div class="mgr-progress" [ngClass]="classeProgression(c.progression_moyenne)">
                <div class="mgr-progress__bar"><div class="mgr-progress__fill" [style.width.%]="c.progression_moyenne"></div></div>
                <span class="mgr-progress__val">{{ c.progression_moyenne }}%</span>
              </div>
            </td>
            <td>
              <span class="mgr-badge" [ngClass]="c.statut === 1 ? 'mgr-badge--actif' : 'mgr-badge--inactif'">
                {{ c.statut === 1 ? 'Actif' : 'Inactif' }}
              </span>
            </td>
            <td class="text-end">
              <a [routerLink]="[routes.managerCollaborateur, c.id]" class="mgr-btn mgr-btn--sm"><i class="isax isax-eye"></i>Voir</a>
            </td>
          </tr>
          <tr *ngIf="!collaborateurs.length">
            <td colspan="8"><div class="mgr-empty"><i class="isax isax-people"></i>Aucun collaborateur ne correspond \xE0 ces crit\xE8res.</div></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mgr-pager" *ngIf="!loading && lastPage > 1">
      <span>{{ total }} collaborateur{{ total > 1 ? 's' : '' }} \xB7 page {{ page }}/{{ lastPage }}</span>
      <div class="d-flex gap-2">
        <button type="button" class="mgr-btn mgr-btn--sm" [disabled]="page <= 1" (click)="allerPage(page - 1)">
          <i class="isax isax-arrow-left-2"></i>Pr\xE9c\xE9dent
        </button>
        <button type="button" class="mgr-btn mgr-btn--sm" [disabled]="page >= lastPage" (click)="allerPage(page + 1)">
          Suivant<i class="isax isax-arrow-right-3"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VUE ORGANIGRAMME \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="mgr-card" *ngIf="vue === 'arbre'">
    <div class="mgr-card__title">
      <span><i class="isax isax-hierarchy"></i>Organigramme</span>
      <span class="d-flex gap-2">
        <button type="button" class="mgr-btn mgr-btn--sm" (click)="toutDeplier()"><i class="isax isax-maximize-4"></i>Tout d\xE9plier</button>
        <button type="button" class="mgr-btn mgr-btn--sm" (click)="toutReplier()"><i class="isax isax-minus-square"></i>Tout replier</button>
      </span>
    </div>

    <ng-container *ngIf="loadingArbre">
      <div class="mgr-skeleton" *ngFor="let i of [1,2,3]"></div>
    </ng-container>

    <div class="eq-tree" *ngIf="!loadingArbre && racine">
      <div class="eq-node eq-node--root">
        <div class="mgr-user">
          <div class="mgr-user__av eq-av-root">{{ initiales(racine) }}</div>
          <div>
            <div class="mgr-user__name">{{ racine.name }} <span class="mgr-badge mgr-badge--niveau ms-1">Moi</span></div>
            <div class="mgr-user__sub">{{ racine.fonction || 'Manager' }}</div>
          </div>
        </div>
      </div>
      <ng-container *ngTemplateOutlet="branche; context: { $implicit: racine.enfants }"></ng-container>
    </div>
  </div>

  <ng-template #branche let-noeuds>
    <ul class="eq-branch">
      <li *ngFor="let n of noeuds; trackBy: trackById">
        <div class="eq-node">
          <button type="button" class="eq-toggle" *ngIf="n.enfants.length" (click)="toggleNoeud(n.id)"
                  [attr.aria-label]="estReplie(n.id) ? 'D\xE9plier' : 'Replier'">
            <i class="isax" [ngClass]="estReplie(n.id) ? 'isax-add-square' : 'isax-minus-square'"></i>
          </button>
          <span class="eq-toggle-spacer" *ngIf="!n.enfants.length"></span>

          <div class="mgr-user flex-grow-1">
            <div class="mgr-user__av">{{ initiales(n) }}</div>
            <div class="min-w-0">
              <div class="mgr-user__name">
                {{ nomComplet(n) }}
                <span class="mgr-badge mgr-badge--niveau ms-1">{{ libelleNiveau(n.niveau) }}</span>
                <span class="mgr-badge mgr-badge--inactif ms-1" *ngIf="n.statut !== 1">Inactif</span>
              </div>
              <div class="mgr-user__sub">{{ n.fonction || '\u2014' }}<span *ngIf="n.enfants.length"> \xB7 {{ n.enfants.length }} N-1</span></div>
            </div>
          </div>

          <div class="mgr-progress eq-node-progress" [ngClass]="classeProgression(n.progression_moyenne ?? 0)">
            <div class="mgr-progress__bar"><div class="mgr-progress__fill" [style.width.%]="n.progression_moyenne ?? 0"></div></div>
            <span class="mgr-progress__val">{{ n.progression_moyenne ?? 0 }}%</span>
          </div>
          <a [routerLink]="[routes.managerCollaborateur, n.id]" class="mgr-btn mgr-btn--sm"><i class="isax isax-eye"></i></a>
        </div>
        <ng-container *ngIf="n.enfants.length && !estReplie(n.id)">
          <ng-container *ngTemplateOutlet="branche; context: { $implicit: n.enfants }"></ng-container>
        </ng-container>
      </li>
    </ul>
  </ng-template>

</div>
`, styles: ['/* src/app/features/manager/manager-equipe/manager-equipe.component.scss */\n.mgr-page {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mgr-page-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.mgr-page-head h1,\n.mgr-page-head h2 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mgr-page-head h1 i,\n.mgr-page-head h2 i {\n  color: #4F46E5;\n}\n.mgr-page-head p {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 2px 0 0;\n}\n.mgr-card {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 18px 20px;\n}\n.mgr-card__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.mgr-card__title i {\n  color: #4F46E5;\n  margin-right: 6px;\n}\n.mgr-card__title a {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4F46E5;\n  text-decoration: none;\n}\n.mgr-card__title a:hover {\n  text-decoration: underline;\n}\n.mgr-kpis {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n}\n.mgr-kpi {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-top: 3px solid #4F46E5;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.mgr-kpi__val {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.1;\n}\n.mgr-kpi__lbl {\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.mgr-kpi__lbl i {\n  font-size: 13px;\n}\n.mgr-kpi--warn {\n  border-top-color: #f59e0b;\n  background: #fff8ee;\n}\n.mgr-kpi--danger {\n  border-top-color: #dc2626;\n}\n.mgr-kpi--ok {\n  border-top-color: #059669;\n}\n.mgr-progress {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 110px;\n}\n.mgr-progress__bar {\n  flex: 1;\n  height: 6px;\n  background: #eef0f4;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.mgr-progress__fill {\n  height: 100%;\n  background: #4F46E5;\n  border-radius: 6px;\n  transition: width 0.3s;\n}\n.mgr-progress__val {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  min-width: 36px;\n  text-align: right;\n}\n.mgr-progress--low .mgr-progress__fill {\n  background: #f59e0b;\n}\n.mgr-progress--high .mgr-progress__fill {\n  background: #059669;\n}\n.mgr-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n  background: #f3f4f6;\n  color: #374151;\n}\n.mgr-badge i {\n  font-size: 12px;\n}\n.mgr-badge--niveau {\n  background: #EEF2FF;\n  color: #4338CA;\n  border: 1px solid #C7D2FE;\n}\n.mgr-badge--manager {\n  background: #fef3c7;\n  color: #92400e;\n}\n.mgr-badge--rh {\n  background: #e0f2fe;\n  color: #075985;\n}\n.mgr-badge--validee {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-badge--refusee {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-badge--annulee {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mgr-badge--actif {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-badge--inactif {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mgr-badge--urgente {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-badge--haute {\n  background: #ffedd5;\n  color: #9a3412;\n}\n.mgr-user {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.mgr-user__av {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #EEF2FF;\n  color: #4F46E5;\n  border: 1px solid #C7D2FE;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.mgr-user__name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a1a2e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mgr-user__sub {\n  font-size: 11px;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mgr-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.mgr-search {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.mgr-search i {\n  position: absolute;\n  left: 11px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 15px;\n}\n.mgr-search input {\n  width: 100%;\n  padding: 8px 12px 8px 34px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n}\n.mgr-search input:focus {\n  outline: none;\n  border-color: #4F46E5;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);\n}\n.mgr-select {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fff;\n}\n.mgr-select:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.mgr-chips {\n  display: inline-flex;\n  gap: 4px;\n  background: #f3f4f6;\n  padding: 3px;\n  border-radius: 9px;\n}\n.mgr-chip {\n  border: none;\n  background: transparent;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  padding: 6px 12px;\n  border-radius: 7px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.mgr-chip.active {\n  background: #fff;\n  color: #4338CA;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.mgr-chip .count {\n  font-size: 10px;\n  background: #4F46E5;\n  color: #fff;\n  border-radius: 10px;\n  padding: 0 6px;\n}\n.mgr-chip .count--muted {\n  background: #d1d5db;\n  color: #374151;\n}\n.mgr-table-wrap {\n  overflow-x: auto;\n}\n.mgr-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.mgr-table th {\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 10px 12px;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.mgr-table td {\n  padding: 11px 12px;\n  border-bottom: 1px solid #f1f2f4;\n  vertical-align: middle;\n  color: #374151;\n}\n.mgr-table tbody tr:hover {\n  background: #fafbff;\n}\n.mgr-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 7px 14px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  color: #1a1a2e;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.mgr-btn i {\n  font-size: 15px;\n}\n.mgr-btn:hover:not(:disabled) {\n  border-color: #4F46E5;\n  color: #4F46E5;\n}\n.mgr-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.mgr-btn--primary {\n  background: #4F46E5;\n  border-color: #4F46E5;\n  color: #fff;\n}\n.mgr-btn--primary:hover:not(:disabled) {\n  background: #4338CA;\n  color: #fff;\n}\n.mgr-btn--success {\n  background: #059669;\n  border-color: #059669;\n  color: #fff;\n}\n.mgr-btn--success:hover:not(:disabled) {\n  background: #047857;\n  border-color: #047857;\n  color: #fff;\n}\n.mgr-btn--danger {\n  background: #fff;\n  border-color: #fca5a5;\n  color: #b91c1c;\n}\n.mgr-btn--danger:hover:not(:disabled) {\n  background: #fee2e2;\n  border-color: #dc2626;\n  color: #991b1b;\n}\n.mgr-btn--sm {\n  font-size: 12px;\n  padding: 5px 10px;\n}\n.mgr-btn--sm i {\n  font-size: 13px;\n}\n.mgr-empty {\n  text-align: center;\n  padding: 36px 16px;\n  color: #6b7280;\n  font-size: 13px;\n}\n.mgr-empty i {\n  font-size: 34px;\n  display: block;\n  margin-bottom: 8px;\n  color: #c7cbd4;\n}\n.mgr-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-alert--ok {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-alert--info {\n  background: #EEF2FF;\n  color: #4338CA;\n}\n.mgr-alert button {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: inherit;\n  cursor: pointer;\n  font-size: 16px;\n}\n.mgr-skeleton {\n  height: 44px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e9eaee 37%,\n      #f3f4f6 63%);\n  background-size: 400% 100%;\n  animation: mgr-shimmer 1.4s ease infinite;\n  margin-bottom: 8px;\n}\n@keyframes mgr-shimmer {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n.mgr-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(17, 24, 39, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.mgr-modal {\n  background: #fff;\n  border-radius: 14px;\n  width: 100%;\n  max-width: 520px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.mgr-modal__head {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mgr-modal__head h5 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.mgr-modal__head button {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #6b7280;\n  cursor: pointer;\n}\n.mgr-modal__body {\n  padding: 18px 20px;\n  font-size: 13px;\n  color: #374151;\n}\n.mgr-modal__body label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 6px;\n  display: block;\n}\n.mgr-modal__body textarea {\n  width: 100%;\n  min-height: 90px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 13px;\n  resize: vertical;\n}\n.mgr-modal__body textarea:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.mgr-modal__foot {\n  padding: 14px 20px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.mgr-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding-top: 12px;\n  font-size: 12px;\n  color: #6b7280;\n}\n.eq-meta {\n  font-size: 12px;\n  color: #4b5563;\n}\n.eq-sub-count {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 11px;\n  color: #6b7280;\n  margin-left: 6px;\n}\n.eq-sub-count i {\n  font-size: 12px;\n}\n.eq-tree {\n  font-size: 13px;\n}\n.eq-node {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border: 1px solid #eceef3;\n  border-radius: 10px;\n  background: #fff;\n  margin-bottom: 6px;\n}\n.eq-node--root {\n  background: #EEF2FF;\n  border-color: #C7D2FE;\n}\n.eq-av-root {\n  background: #4F46E5 !important;\n  color: #fff !important;\n}\n.eq-node-progress {\n  width: 150px;\n  flex-shrink: 0;\n}\n.eq-toggle {\n  border: none;\n  background: none;\n  padding: 0;\n  font-size: 18px;\n  color: #4F46E5;\n  cursor: pointer;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.eq-toggle-spacer {\n  width: 18px;\n  flex-shrink: 0;\n}\n.eq-branch {\n  list-style: none;\n  margin: 0 0 0 18px;\n  padding: 0 0 0 16px;\n  border-left: 2px solid #E0E7FF;\n}\n.eq-branch li {\n  position: relative;\n}\n.eq-branch li::before {\n  content: "";\n  position: absolute;\n  left: -16px;\n  top: 22px;\n  width: 14px;\n  border-top: 2px solid #E0E7FF;\n}\n.min-w-0 {\n  min-width: 0;\n}\n@media (max-width: 767px) {\n  .eq-node-progress {\n    display: none;\n  }\n}\n/*# sourceMappingURL=manager-equipe.component.css.map */\n'] }]
  }], () => [{ type: ManagerService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManagerEquipeComponent, { className: "ManagerEquipeComponent", filePath: "app/features/manager/manager-equipe/manager-equipe.component.ts", lineNumber: 19 });
})();
export {
  ManagerEquipeComponent
};
//# sourceMappingURL=chunk-MZBEXAKH.js.map
