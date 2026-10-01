import {
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
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-RNP5DT5T.js";
import {
  ActivatedRoute,
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
  Subject,
  debounceTime,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ON7U2Q36.js";
import "./chunk-4MWRP73S.js";

// src/app/features/manager/manager-demandes/manager-demandes.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = (a0, a1) => [a0, a1];
function ManagerDemandesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 31);
    \u0275\u0275listener("click", function ManagerDemandesComponent_div_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.succes = "");
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.succes, " ");
  }
}
function ManagerDemandesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 31);
    \u0275\u0275listener("click", function ManagerDemandesComponent_div_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = "");
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.error, " ");
  }
}
function ManagerDemandesComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.compteurs == null ? null : ctx_r1.compteurs.a_traiter);
  }
}
function ManagerDemandesComponent_select_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ManagerDemandesComponent_select_26_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.statutFiltre, $event) || (ctx_r1.statutFiltre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ManagerDemandesComponent_select_26_Template_select_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.charger());
    });
    \u0275\u0275elementStart(1, "option", 19);
    \u0275\u0275text(2, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 39);
    \u0275\u0275text(12, "Annul\xE9es");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.statutFiltre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("En attente manager (", (ctx_r1.compteurs == null ? null : ctx_r1.compteurs.en_attente_manager) ?? 0, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("En attente RH (", (ctx_r1.compteurs == null ? null : ctx_r1.compteurs.en_attente_rh) ?? 0, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Valid\xE9es (", (ctx_r1.compteurs == null ? null : ctx_r1.compteurs.validees) ?? 0, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Refus\xE9es (", (ctx_r1.compteurs == null ? null : ctx_r1.compteurs.refusees) ?? 0, ")");
  }
}
function ManagerDemandesComponent_option_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1, "N-3");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("ngValue", 3);
  }
}
function ManagerDemandesComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275text(2, " Vous pouvez valider les demandes de vos N-1 et N-2. Une fois approuv\xE9e, la demande est transmise aux RH pour d\xE9cision finale. ");
    \u0275\u0275elementEnd();
  }
}
function ManagerDemandesComponent_ng_container_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 43);
  }
}
function ManagerDemandesComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ManagerDemandesComponent_ng_container_47_div_1_Template, 1, 0, "div", 42);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function ManagerDemandesComponent_ng_container_48_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.onglet === "a_traiter" ? "isax-tick-circle" : "isax-folder-open");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.onglet === "a_traiter" ? "Aucune demande en attente de votre avis." : "Aucune demande ne correspond \xE0 ces crit\xE8res.", " ");
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", "mgr-badge--" + d_r6.priorite);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r6.priorite_display);
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 65);
    \u0275\u0275listener("click", function ManagerDemandesComponent_ng_container_48_div_2_ng_container_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const d_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.ouvrir("valider", d_r6));
    });
    \u0275\u0275element(2, "i", 30);
    \u0275\u0275text(3, "Approuver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 66);
    \u0275\u0275listener("click", function ManagerDemandesComponent_ng_container_48_div_2_ng_container_23_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const d_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.ouvrir("refuser", d_r6));
    });
    \u0275\u0275element(5, "i", 67);
    \u0275\u0275text(6, "Refuser ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_div_25_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "label");
    \u0275\u0275text(2, "Objectifs personnels");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r6.objectifs_personnels);
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_div_25_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "label");
    \u0275\u0275text(2, "Commentaire du collaborateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r6.commentaire_employe);
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_div_25_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "label");
    \u0275\u0275text(2, "D\xE9but souhait\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, d_r6.date_souhaitee_debut, "dd/MM/yyyy"));
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_div_25_div_11_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", d_r6.session_formation.lieu);
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_div_25_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "label");
    \u0275\u0275text(2, "Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275template(6, ManagerDemandesComponent_ng_container_48_div_2_div_25_div_11_span_6_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", d_r6.session_formation.titre, " \u2014 ", \u0275\u0275pipeBind2(5, 3, d_r6.session_formation.date_debut, "dd/MM/yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", d_r6.session_formation.lieu);
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_div_25_ng_container_29_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xAB ", d_r6.decision_manager.motif_refus, " \xBB");
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_div_25_ng_container_29_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xAB ", d_r6.decision_manager.commentaire, " \xBB");
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_div_25_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ManagerDemandesComponent_ng_container_48_div_2_div_25_ng_container_29_small_4_Template, 2, 1, "small", 80)(5, ManagerDemandesComponent_ng_container_48_div_2_div_25_ng_container_29_small_5_Template, 2, 1, "small", 80);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", d_r6.decision_manager.motif_refus ? "Refus\xE9e" : "Approuv\xE9e", " par ", d_r6.decision_manager.manager == null ? null : d_r6.decision_manager.manager.name, " (N+", d_r6.decision_manager.niveau, ") le ", \u0275\u0275pipeBind2(3, 6, d_r6.decision_manager.date, "dd/MM/yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", d_r6.decision_manager.motif_refus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r6.decision_manager.commentaire);
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_div_25_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r6.statut === "en_attente_manager" ? "En attente (N+1 ou N+2)" : "Sans \xE9tape manager");
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_div_25_small_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Valid\xE9e le ", \u0275\u0275pipeBind2(2, 1, d_r6.date_validation, "dd/MM/yyyy"));
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_div_25_small_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Refus\xE9e \u2014 ", d_r6.motif_refus);
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_div_25_small_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "En attente de d\xE9cision RH");
    \u0275\u0275elementEnd();
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_div_25_small_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_div_25_small_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Demande annul\xE9e");
    \u0275\u0275elementEnd();
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69)(2, "div", 70)(3, "div", 71)(4, "label");
    \u0275\u0275text(5, "Motif de la demande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ManagerDemandesComponent_ng_container_48_div_2_div_25_div_8_Template, 5, 1, "div", 72)(9, ManagerDemandesComponent_ng_container_48_div_2_div_25_div_9_Template, 5, 1, "div", 72)(10, ManagerDemandesComponent_ng_container_48_div_2_div_25_div_10_Template, 6, 4, "div", 72)(11, ManagerDemandesComponent_ng_container_48_div_2_div_25_div_11_Template, 7, 6, "div", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 70)(13, "label", 73);
    \u0275\u0275text(14, "Circuit de validation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ol", 74)(16, "li", 75);
    \u0275\u0275element(17, "span", 76);
    \u0275\u0275elementStart(18, "div")(19, "strong");
    \u0275\u0275text(20, "Soumise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "small");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "li");
    \u0275\u0275element(25, "span", 76);
    \u0275\u0275elementStart(26, "div")(27, "strong");
    \u0275\u0275text(28, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, ManagerDemandesComponent_ng_container_48_div_2_div_25_ng_container_29_Template, 6, 9, "ng-container", 77)(30, ManagerDemandesComponent_ng_container_48_div_2_div_25_ng_template_30_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "li");
    \u0275\u0275element(33, "span", 76);
    \u0275\u0275elementStart(34, "div")(35, "strong");
    \u0275\u0275text(36, "RH");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, ManagerDemandesComponent_ng_container_48_div_2_div_25_small_37_Template, 3, 4, "small", 27)(38, ManagerDemandesComponent_ng_container_48_div_2_div_25_small_38_Template, 2, 1, "small", 27)(39, ManagerDemandesComponent_ng_container_48_div_2_div_25_small_39_Template, 2, 0, "small", 27)(40, ManagerDemandesComponent_ng_container_48_div_2_div_25_small_40_Template, 2, 0, "small", 27)(41, ManagerDemandesComponent_ng_container_48_div_2_div_25_small_41_Template, 2, 0, "small", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "a", 78);
    \u0275\u0275element(43, "i", 79);
    \u0275\u0275text(44, "Voir la fiche du collaborateur ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const attenteManager_r8 = \u0275\u0275reference(31);
    const d_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(d_r6.motif_demande || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r6.objectifs_personnels);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r6.commentaire_employe);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r6.date_souhaitee_debut);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r6.session_formation);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 26, d_r6.created_at, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("done", d_r6.decision_manager && d_r6.decision_manager.motif_refus === null)("ko", d_r6.decision_manager == null ? null : d_r6.decision_manager.motif_refus)("current", d_r6.statut === "en_attente_manager");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", d_r6.decision_manager)("ngIfElse", attenteManager_r8);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("done", d_r6.statut === "validee")("ko", d_r6.statut === "refusee" && !(d_r6.decision_manager == null ? null : d_r6.decision_manager.motif_refus))("current", d_r6.statut === "en_attente");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", d_r6.statut === "validee");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r6.statut === "refusee" && !(d_r6.decision_manager == null ? null : d_r6.decision_manager.motif_refus));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r6.statut === "en_attente");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r6.statut === "en_attente_manager");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r6.statut === "annulee");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(29, _c1, ctx_r1.routes.managerCollaborateur, d_r6.user_id));
  }
}
function ManagerDemandesComponent_ng_container_48_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49);
    \u0275\u0275listener("click", function ManagerDemandesComponent_ng_container_48_div_2_Template_div_click_1_listener() {
      const d_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggle(d_r6.id));
    });
    \u0275\u0275elementStart(2, "div", 50)(3, "div", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 52)(6, "div", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 55);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 56)(13, "div", 57);
    \u0275\u0275element(14, "i", 47);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 58);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275template(19, ManagerDemandesComponent_ng_container_48_div_2_span_19_Template, 2, 2, "span", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "span", 60);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 61);
    \u0275\u0275listener("click", function ManagerDemandesComponent_ng_container_48_div_2_Template_div_click_22_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(23, ManagerDemandesComponent_ng_container_48_div_2_ng_container_23_Template, 7, 0, "ng-container", 27);
    \u0275\u0275elementStart(24, "i", 62);
    \u0275\u0275listener("click", function ManagerDemandesComponent_ng_container_48_div_2_Template_i_click_24_listener() {
      const d_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggle(d_r6.id));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, ManagerDemandesComponent_ng_container_48_div_2_div_25_Template, 45, 32, "div", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("dm-item--open", ctx_r1.ouverte === d_r6.id)("dm-item--action", d_r6.peut_decider);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.initiales(d_r6.employe));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.nomComplet(d_r6.employe), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.libelleNiveau(d_r6.niveau));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((d_r6.employe == null ? null : d_r6.employe.fonction) || (d_r6.employe == null ? null : d_r6.employe.email));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.iconeTypeDemande(d_r6.type_demande));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r6.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.libelleTypeDemande(d_r6.type_demande), " \xB7 soumise le ", \u0275\u0275pipeBind2(18, 18, d_r6.created_at, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", d_r6.priorite === "urgente" || d_r6.priorite === "haute");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.classeStatutDemande(d_r6.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r6.statut_display);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", d_r6.peut_decider);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.ouverte === d_r6.id ? "isax-arrow-up-2" : "isax-arrow-down-1");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ouverte === d_r6.id);
  }
}
function ManagerDemandesComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ManagerDemandesComponent_ng_container_48_div_1_Template, 3, 2, "div", 44)(2, ManagerDemandesComponent_ng_container_48_div_2_Template, 26, 21, "div", 45);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.demandes.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.demandes)("ngForTrackBy", ctx_r1.trackById);
  }
}
function ManagerDemandesComponent_div_49_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 95);
    \u0275\u0275text(1, "La demande sera transmise au service RH pour d\xE9cision finale.");
    \u0275\u0275elementEnd();
  }
}
function ManagerDemandesComponent_div_49_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 96);
    \u0275\u0275text(2, "Motif du refus ");
    \u0275\u0275elementStart(3, "span", 97);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "textarea", 98);
    \u0275\u0275twoWayListener("ngModelChange", function ManagerDemandesComponent_div_49_ng_container_13_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.motif, $event) || (ctx_r1.motif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.motif);
  }
}
function ManagerDemandesComponent_div_49_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.erreurModale);
  }
}
function ManagerDemandesComponent_div_49_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 100);
  }
}
function ManagerDemandesComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275listener("click", function ManagerDemandesComponent_div_49_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fermer());
    });
    \u0275\u0275elementStart(1, "div", 83);
    \u0275\u0275listener("click", function ManagerDemandesComponent_div_49_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 84)(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function ManagerDemandesComponent_div_49_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fermer());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 85)(8, "p", 86)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ManagerDemandesComponent_div_49_p_12_Template, 2, 0, "p", 87)(13, ManagerDemandesComponent_div_49_ng_container_13_Template, 6, 1, "ng-container", 27);
    \u0275\u0275elementStart(14, "label", 88);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "textarea", 89);
    \u0275\u0275twoWayListener("ngModelChange", function ManagerDemandesComponent_div_49_Template_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.commentaire, $event) || (ctx_r1.commentaire = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ManagerDemandesComponent_div_49_div_17_Template, 3, 1, "div", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 91)(19, "button", 92);
    \u0275\u0275listener("click", function ManagerDemandesComponent_div_49_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fermer());
    });
    \u0275\u0275text(20, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 93);
    \u0275\u0275listener("click", function ManagerDemandesComponent_div_49_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmer());
    });
    \u0275\u0275template(22, ManagerDemandesComponent_div_49_span_22_Template, 1, 0, "span", 94);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.action === "valider" ? "Approuver la demande" : "Refuser la demande");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.nomComplet(ctx_r1.cible.employe));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u2014 ", ctx_r1.libelleTypeDemande(ctx_r1.cible.type_demande), " \xAB ", ctx_r1.cible.titre, " \xBB ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.action === "valider");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.action === "refuser");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Commentaire ", ctx_r1.action === "valider" ? "pour les RH" : "", " (optionnel)");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.commentaire);
    \u0275\u0275property("placeholder", ctx_r1.action === "valider" ? "Ex. : formation prioritaire pour le projet X" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.erreurModale);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.enCours);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.action === "valider" ? "mgr-btn--success" : "mgr-btn--danger")("disabled", ctx_r1.enCours);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enCours);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.action === "valider" ? "Approuver et transmettre aux RH" : "Confirmer le refus", " ");
  }
}
var ManagerDemandesComponent = class _ManagerDemandesComponent {
  managerService;
  route;
  routes = routes;
  onglet = "a_traiter";
  demandes = [];
  compteurs = null;
  loading = false;
  error = "";
  succes = "";
  // Filtres
  statutFiltre = "";
  typeFiltre = "";
  niveauFiltre = null;
  search = "";
  // Détail déplié
  ouverte = null;
  // Modale de décision
  action = null;
  cible = null;
  commentaire = "";
  motif = "";
  enCours = false;
  erreurModale = "";
  initiales = initiales;
  nomComplet = nomComplet;
  libelleNiveau = libelleNiveau;
  classeStatutDemande = classeStatutDemande;
  libelleTypeDemande = libelleTypeDemande;
  iconeTypeDemande = iconeTypeDemande;
  search$ = new Subject();
  subs = [];
  constructor(managerService, route) {
    this.managerService = managerService;
    this.route = route;
  }
  ngOnInit() {
    const demandeId = Number(this.route.snapshot.queryParamMap.get("demande"));
    if (demandeId)
      this.ouverte = demandeId;
    this.subs.push(this.search$.pipe(debounceTime(300)).subscribe(() => this.charger()));
    this.charger();
  }
  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }
  setOnglet(onglet) {
    this.onglet = onglet;
    this.statutFiltre = "";
    this.charger();
  }
  onSearch() {
    this.search$.next();
  }
  charger() {
    this.loading = true;
    this.error = "";
    this.managerService.getDemandes({
      a_traiter: this.onglet === "a_traiter",
      statut: this.onglet === "equipe" ? this.statutFiltre : void 0,
      type_demande: this.typeFiltre,
      niveau: this.niveauFiltre,
      search: this.search.trim()
    }).subscribe({
      next: (res) => {
        this.demandes = res.demandes;
        this.compteurs = res.compteurs;
        this.loading = false;
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Impossible de charger les demandes.");
        this.loading = false;
      }
    });
  }
  toggle(id) {
    this.ouverte = this.ouverte === id ? null : id;
  }
  /** Niveaux présents dans la liste courante (filtre). */
  get niveauxDisponibles() {
    return [...new Set(this.demandes.map((d) => d.niveau).filter((n) => !!n))].sort();
  }
  // ════════════════ DÉCISION ════════════════
  ouvrir(action, d) {
    this.action = action;
    this.cible = d;
    this.commentaire = "";
    this.motif = "";
    this.erreurModale = "";
  }
  fermer() {
    if (this.enCours)
      return;
    this.action = null;
    this.cible = null;
  }
  confirmer() {
    if (!this.cible || !this.action)
      return;
    if (this.action === "refuser" && !this.motif.trim()) {
      this.erreurModale = "Le motif du refus est obligatoire.";
      return;
    }
    this.enCours = true;
    this.erreurModale = "";
    const id = this.cible.id;
    const requete$ = this.action === "valider" ? this.managerService.validerDemande(id, this.commentaire.trim() || void 0) : this.managerService.refuserDemande(id, this.motif.trim(), this.commentaire.trim() || void 0);
    requete$.subscribe({
      next: (res) => {
        this.enCours = false;
        this.succes = res.message;
        this.action = null;
        this.cible = null;
        this.charger();
      },
      error: (err) => {
        this.enCours = false;
        if (err?.status === 409 || err?.status === 422) {
          this.action = null;
          this.cible = null;
          this.error = err?.error?.message ?? "Cette demande a d\xE9j\xE0 \xE9t\xE9 trait\xE9e.";
          this.charger();
          return;
        }
        this.erreurModale = httpErrorMessage(err, "Erreur lors du traitement de la demande.");
      }
    });
  }
  trackById(_, d) {
    return d.id;
  }
  static \u0275fac = function ManagerDemandesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManagerDemandesComponent)(\u0275\u0275directiveInject(ManagerService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManagerDemandesComponent, selectors: [["app-manager-demandes"]], decls: 50, vars: 20, consts: [["attenteManager", ""], [1, "mgr-page"], [1, "mgr-page-head"], [1, "isax", "isax-task-square"], ["class", "mgr-alert mgr-alert--ok", 4, "ngIf"], ["class", "mgr-alert", 4, "ngIf"], [1, "mgr-card"], [1, "mgr-toolbar", "mb-3"], [1, "mgr-chips"], ["type", "button", 1, "mgr-chip", 3, "click"], [1, "isax", "isax-clock"], ["class", "count", 4, "ngIf"], [1, "isax", "isax-people"], [1, "count", "count--muted"], [1, "mgr-search"], [1, "isax", "isax-search-normal-1"], ["type", "search", "placeholder", "Rechercher un collaborateur\u2026", 3, "ngModelChange", "ngModel"], ["class", "mgr-select", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "mgr-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "formation"], ["value", "catalogue"], ["value", "parcours"], ["value", "session"], [3, "ngValue"], [3, "ngValue", 4, "ngIf"], ["class", "mgr-alert mgr-alert--info mb-3", 4, "ngIf"], [4, "ngIf"], ["class", "mgr-modal-backdrop", 3, "click", 4, "ngIf"], [1, "mgr-alert", "mgr-alert--ok"], [1, "isax", "isax-tick-circle"], ["type", "button", "aria-label", "Fermer", 3, "click"], [1, "mgr-alert"], [1, "isax", "isax-warning-2"], [1, "count"], ["value", "en_attente_manager"], ["value", "en_attente"], ["value", "validee"], ["value", "refusee"], ["value", "annulee"], [1, "mgr-alert", "mgr-alert--info", "mb-3"], [1, "isax", "isax-info-circle"], ["class", "mgr-skeleton", 4, "ngFor", "ngForOf"], [1, "mgr-skeleton"], ["class", "mgr-empty", 4, "ngIf"], ["class", "dm-item", 3, "dm-item--open", "dm-item--action", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mgr-empty"], [1, "isax", 3, "ngClass"], [1, "dm-item"], [1, "dm-row", 3, "click"], [1, "mgr-user", "dm-user"], [1, "mgr-user__av"], [1, "min-w-0"], [1, "mgr-user__name"], [1, "mgr-badge", "mgr-badge--niveau", "ms-1"], [1, "mgr-user__sub"], [1, "dm-titre"], [1, "dm-titre__main"], [1, "dm-titre__sub"], ["class", "mgr-badge ms-1", 3, "ngClass", 4, "ngIf"], [1, "mgr-badge", "dm-statut", 3, "ngClass"], [1, "dm-actions", 3, "click"], [1, "isax", "dm-chevron", 3, "click", "ngClass"], ["class", "dm-detail", 4, "ngIf"], [1, "mgr-badge", "ms-1", 3, "ngClass"], ["type", "button", 1, "mgr-btn", "mgr-btn--success", "mgr-btn--sm", 3, "click"], ["type", "button", 1, "mgr-btn", "mgr-btn--danger", "mgr-btn--sm", 3, "click"], [1, "isax", "isax-close-circle"], [1, "dm-detail"], [1, "row", "g-3"], [1, "col-md-6"], [1, "dm-field"], ["class", "dm-field", 4, "ngIf"], [1, "dm-timeline-label"], [1, "dm-timeline"], [1, "done"], [1, "dot"], [4, "ngIf", "ngIfElse"], [1, "mgr-btn", "mgr-btn--sm", "mt-2", 3, "routerLink"], [1, "isax", "isax-user"], ["class", "dm-quote", 4, "ngIf"], [1, "dm-quote"], [1, "mgr-modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "mgr-modal", 3, "click"], [1, "mgr-modal__head"], [1, "mgr-modal__body"], [1, "mb-3"], ["class", "dm-hint", 4, "ngIf"], ["for", "commentaire", 1, "mt-3"], ["id", "commentaire", "maxlength", "1000", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "mgr-alert mt-3", 4, "ngIf"], [1, "mgr-modal__foot"], ["type", "button", 1, "mgr-btn", 3, "click", "disabled"], ["type", "button", 1, "mgr-btn", 3, "click", "ngClass", "disabled"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "dm-hint"], ["for", "motif"], [1, "text-danger"], ["id", "motif", "placeholder", "Expliquez au collaborateur pourquoi sa demande n'est pas retenue\u2026", "maxlength", "1000", 3, "ngModelChange", "ngModel"], [1, "mgr-alert", "mt-3"], [1, "spinner-border", "spinner-border-sm"]], template: function ManagerDemandesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2");
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275text(5, "Demandes de formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Circuit de validation : collaborateur \u2192 manager (N+1 ou N+2) \u2192 RH");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, ManagerDemandesComponent_div_8_Template, 5, 1, "div", 4)(9, ManagerDemandesComponent_div_9_Template, 5, 1, "div", 5);
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "button", 9);
      \u0275\u0275listener("click", function ManagerDemandesComponent_Template_button_click_13_listener() {
        return ctx.setOnglet("a_traiter");
      });
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275text(15, "\xC0 traiter par moi ");
      \u0275\u0275template(16, ManagerDemandesComponent_span_16_Template, 2, 1, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275listener("click", function ManagerDemandesComponent_Template_button_click_17_listener() {
        return ctx.setOnglet("equipe");
      });
      \u0275\u0275element(18, "i", 12);
      \u0275\u0275text(19, "Toute l'\xE9quipe ");
      \u0275\u0275elementStart(20, "span", 13);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(22, "div", 7)(23, "div", 14);
      \u0275\u0275element(24, "i", 15);
      \u0275\u0275elementStart(25, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ManagerDemandesComponent_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ManagerDemandesComponent_Template_input_ngModelChange_25_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(26, ManagerDemandesComponent_select_26_Template, 13, 5, "select", 17);
      \u0275\u0275elementStart(27, "select", 18);
      \u0275\u0275twoWayListener("ngModelChange", function ManagerDemandesComponent_Template_select_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.typeFiltre, $event) || (ctx.typeFiltre = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ManagerDemandesComponent_Template_select_ngModelChange_27_listener() {
        return ctx.charger();
      });
      \u0275\u0275elementStart(28, "option", 19);
      \u0275\u0275text(29, "Tous les types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 20);
      \u0275\u0275text(31, "Formations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 21);
      \u0275\u0275text(33, "Catalogues");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 22);
      \u0275\u0275text(35, "Parcours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "option", 23);
      \u0275\u0275text(37, "Sessions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "select", 18);
      \u0275\u0275twoWayListener("ngModelChange", function ManagerDemandesComponent_Template_select_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.niveauFiltre, $event) || (ctx.niveauFiltre = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ManagerDemandesComponent_Template_select_ngModelChange_38_listener() {
        return ctx.charger();
      });
      \u0275\u0275elementStart(39, "option", 24);
      \u0275\u0275text(40, "Tous niveaux");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "option", 24);
      \u0275\u0275text(42, "N-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "option", 24);
      \u0275\u0275text(44, "N-2");
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, ManagerDemandesComponent_option_45_Template, 2, 1, "option", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(46, ManagerDemandesComponent_div_46_Template, 3, 0, "div", 26)(47, ManagerDemandesComponent_ng_container_47_Template, 2, 2, "ng-container", 27)(48, ManagerDemandesComponent_ng_container_48_Template, 3, 3, "ng-container", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(49, ManagerDemandesComponent_div_49_Template, 24, 15, "div", 28);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.succes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.onglet === "a_traiter");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.compteurs == null ? null : ctx.compteurs.a_traiter);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.onglet === "equipe");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate((ctx.compteurs == null ? null : ctx.compteurs.total) ?? 0);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.onglet === "equipe");
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.typeFiltre);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.niveauFiltre);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", 2);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.onglet === "equipe");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.onglet === "a_traiter");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.action && ctx.cible);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, RouterLink, DatePipe], styles: ['\n\n.mgr-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mgr-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.mgr-page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.mgr-page-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mgr-page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.mgr-page-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4F46E5;\n}\n.mgr-page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 2px 0 0;\n}\n.mgr-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 18px 20px;\n}\n.mgr-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.mgr-card__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4F46E5;\n  margin-right: 6px;\n}\n.mgr-card__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4F46E5;\n  text-decoration: none;\n}\n.mgr-card__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.mgr-kpis[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n}\n.mgr-kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-top: 3px solid #4F46E5;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.mgr-kpi__val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.1;\n}\n.mgr-kpi__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.mgr-kpi__lbl[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.mgr-kpi--warn[_ngcontent-%COMP%] {\n  border-top-color: #f59e0b;\n  background: #fff8ee;\n}\n.mgr-kpi--danger[_ngcontent-%COMP%] {\n  border-top-color: #dc2626;\n}\n.mgr-kpi--ok[_ngcontent-%COMP%] {\n  border-top-color: #059669;\n}\n.mgr-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 110px;\n}\n.mgr-progress__bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: #eef0f4;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.mgr-progress__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #4F46E5;\n  border-radius: 6px;\n  transition: width 0.3s;\n}\n.mgr-progress__val[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  min-width: 36px;\n  text-align: right;\n}\n.mgr-progress--low[_ngcontent-%COMP%]   .mgr-progress__fill[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.mgr-progress--high[_ngcontent-%COMP%]   .mgr-progress__fill[_ngcontent-%COMP%] {\n  background: #059669;\n}\n.mgr-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n  background: #f3f4f6;\n  color: #374151;\n}\n.mgr-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mgr-badge--niveau[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #4338CA;\n  border: 1px solid #C7D2FE;\n}\n.mgr-badge--manager[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.mgr-badge--rh[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #075985;\n}\n.mgr-badge--validee[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-badge--refusee[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-badge--annulee[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mgr-badge--actif[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-badge--inactif[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mgr-badge--urgente[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-badge--haute[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #9a3412;\n}\n.mgr-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.mgr-user__av[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #EEF2FF;\n  color: #4F46E5;\n  border: 1px solid #C7D2FE;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.mgr-user__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a1a2e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mgr-user__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mgr-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.mgr-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.mgr-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 11px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 15px;\n}\n.mgr-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px 8px 34px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n}\n.mgr-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4F46E5;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);\n}\n.mgr-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fff;\n}\n.mgr-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.mgr-chips[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 4px;\n  background: #f3f4f6;\n  padding: 3px;\n  border-radius: 9px;\n}\n.mgr-chip[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  padding: 6px 12px;\n  border-radius: 7px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.mgr-chip.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #4338CA;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.mgr-chip[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  font-size: 10px;\n  background: #4F46E5;\n  color: #fff;\n  border-radius: 10px;\n  padding: 0 6px;\n}\n.mgr-chip[_ngcontent-%COMP%]   .count--muted[_ngcontent-%COMP%] {\n  background: #d1d5db;\n  color: #374151;\n}\n.mgr-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.mgr-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.mgr-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 10px 12px;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.mgr-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 12px;\n  border-bottom: 1px solid #f1f2f4;\n  vertical-align: middle;\n  color: #374151;\n}\n.mgr-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbff;\n}\n.mgr-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 7px 14px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  color: #1a1a2e;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.mgr-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.mgr-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #4F46E5;\n  color: #4F46E5;\n}\n.mgr-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.mgr-btn--primary[_ngcontent-%COMP%] {\n  background: #4F46E5;\n  border-color: #4F46E5;\n  color: #fff;\n}\n.mgr-btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4338CA;\n  color: #fff;\n}\n.mgr-btn--success[_ngcontent-%COMP%] {\n  background: #059669;\n  border-color: #059669;\n  color: #fff;\n}\n.mgr-btn--success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #047857;\n  border-color: #047857;\n  color: #fff;\n}\n.mgr-btn--danger[_ngcontent-%COMP%] {\n  background: #fff;\n  border-color: #fca5a5;\n  color: #b91c1c;\n}\n.mgr-btn--danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fee2e2;\n  border-color: #dc2626;\n  color: #991b1b;\n}\n.mgr-btn--sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 5px 10px;\n}\n.mgr-btn--sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.mgr-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 36px 16px;\n  color: #6b7280;\n  font-size: 13px;\n}\n.mgr-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 34px;\n  display: block;\n  margin-bottom: 8px;\n  color: #c7cbd4;\n}\n.mgr-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-alert--ok[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-alert--info[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #4338CA;\n}\n.mgr-alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: inherit;\n  cursor: pointer;\n  font-size: 16px;\n}\n.mgr-skeleton[_ngcontent-%COMP%] {\n  height: 44px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e9eaee 37%,\n      #f3f4f6 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_mgr-shimmer 1.4s ease infinite;\n  margin-bottom: 8px;\n}\n@keyframes _ngcontent-%COMP%_mgr-shimmer {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n.mgr-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(17, 24, 39, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.mgr-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  width: 100%;\n  max-width: 520px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.mgr-modal__head[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mgr-modal__head[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.mgr-modal__head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #6b7280;\n  cursor: pointer;\n}\n.mgr-modal__body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  font-size: 13px;\n  color: #374151;\n}\n.mgr-modal__body[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 6px;\n  display: block;\n}\n.mgr-modal__body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 90px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 13px;\n  resize: vertical;\n}\n.mgr-modal__body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.mgr-modal__foot[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.mgr-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding-top: 12px;\n  font-size: 12px;\n  color: #6b7280;\n}\n.min-w-0[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.dm-item[_ngcontent-%COMP%] {\n  border: 1px solid #eceef3;\n  border-radius: 10px;\n  margin-bottom: 8px;\n  background: #fff;\n  transition: box-shadow 0.15s, border-color 0.15s;\n}\n.dm-item--action[_ngcontent-%COMP%] {\n  border-left: 3px solid #f59e0b;\n}\n.dm-item--open[_ngcontent-%COMP%] {\n  border-color: #C7D2FE;\n  box-shadow: 0 2px 10px rgba(79, 70, 229, 0.08);\n}\n.dm-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(180px, 1.1fr) minmax(200px, 1.6fr) auto auto;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 14px;\n  cursor: pointer;\n}\n.dm-titre[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.dm-titre__main[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a1a2e;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dm-titre__main[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4F46E5;\n}\n.dm-titre__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.dm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.dm-chevron[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 4px;\n}\n.dm-detail[_ngcontent-%COMP%] {\n  border-top: 1px solid #f1f2f4;\n  padding: 14px 16px 16px;\n  background: #fafbff;\n  border-radius: 0 0 10px 10px;\n}\n.dm-field[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.dm-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 2px;\n  display: block;\n}\n.dm-field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #374151;\n  margin: 0;\n  white-space: pre-line;\n}\n.dm-timeline-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.dm-timeline[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 8px 0 0;\n}\n.dm-timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  gap: 10px;\n  padding-bottom: 14px;\n}\n.dm-timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  left: 6px;\n  top: 16px;\n  bottom: 0;\n  width: 2px;\n  background: #e5e7eb;\n}\n.dm-timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #e5e7eb;\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 1px #d1d5db;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.dm-timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  color: #1a1a2e;\n}\n.dm-timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #6b7280;\n}\n.dm-timeline[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #059669;\n  box-shadow: 0 0 0 1px #059669;\n}\n.dm-timeline[_ngcontent-%COMP%]   li.ko[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #dc2626;\n  box-shadow: 0 0 0 1px #dc2626;\n}\n.dm-timeline[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.25);\n}\n.dm-quote[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #4b5563 !important;\n}\n.dm-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n}\n@media (max-width: 991px) {\n  .dm-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .dm-statut[_ngcontent-%COMP%] {\n    justify-self: start;\n  }\n}\n/*# sourceMappingURL=manager-demandes.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagerDemandesComponent, [{
    type: Component,
    args: [{ selector: "app-manager-demandes", imports: [CommonModule, FormsModule, RouterLink], template: `<div class="mgr-page">

  <div class="mgr-page-head">
    <div>
      <h2><i class="isax isax-task-square"></i>Demandes de formation</h2>
      <p>Circuit de validation : collaborateur \u2192 manager (N+1 ou N+2) \u2192 RH</p>
    </div>
  </div>

  <div *ngIf="succes" class="mgr-alert mgr-alert--ok">
    <i class="isax isax-tick-circle"></i>{{ succes }}
    <button type="button" (click)="succes = ''" aria-label="Fermer">\xD7</button>
  </div>
  <div *ngIf="error" class="mgr-alert">
    <i class="isax isax-warning-2"></i>{{ error }}
    <button type="button" (click)="error = ''" aria-label="Fermer">\xD7</button>
  </div>

  <div class="mgr-card">
    <!-- Onglets -->
    <div class="mgr-toolbar mb-3">
      <div class="mgr-chips">
        <button type="button" class="mgr-chip" [class.active]="onglet === 'a_traiter'" (click)="setOnglet('a_traiter')">
          <i class="isax isax-clock"></i>\xC0 traiter par moi
          <span class="count" *ngIf="compteurs?.a_traiter">{{ compteurs?.a_traiter }}</span>
        </button>
        <button type="button" class="mgr-chip" [class.active]="onglet === 'equipe'" (click)="setOnglet('equipe')">
          <i class="isax isax-people"></i>Toute l'\xE9quipe
          <span class="count count--muted">{{ compteurs?.total ?? 0 }}</span>
        </button>
      </div>
    </div>

    <!-- Filtres -->
    <div class="mgr-toolbar mb-3">
      <div class="mgr-search">
        <i class="isax isax-search-normal-1"></i>
        <input type="search" placeholder="Rechercher un collaborateur\u2026" [(ngModel)]="search" (ngModelChange)="onSearch()">
      </div>
      <select class="mgr-select" *ngIf="onglet === 'equipe'" [(ngModel)]="statutFiltre" (ngModelChange)="charger()">
        <option value="">Tous les statuts</option>
        <option value="en_attente_manager">En attente manager ({{ compteurs?.en_attente_manager ?? 0 }})</option>
        <option value="en_attente">En attente RH ({{ compteurs?.en_attente_rh ?? 0 }})</option>
        <option value="validee">Valid\xE9es ({{ compteurs?.validees ?? 0 }})</option>
        <option value="refusee">Refus\xE9es ({{ compteurs?.refusees ?? 0 }})</option>
        <option value="annulee">Annul\xE9es</option>
      </select>
      <select class="mgr-select" [(ngModel)]="typeFiltre" (ngModelChange)="charger()">
        <option value="">Tous les types</option>
        <option value="formation">Formations</option>
        <option value="catalogue">Catalogues</option>
        <option value="parcours">Parcours</option>
        <option value="session">Sessions</option>
      </select>
      <select class="mgr-select" [(ngModel)]="niveauFiltre" (ngModelChange)="charger()">
        <option [ngValue]="null">Tous niveaux</option>
        <option [ngValue]="1">N-1</option>
        <option [ngValue]="2">N-2</option>
        <option *ngIf="onglet === 'equipe'" [ngValue]="3">N-3</option>
      </select>
    </div>

    <div *ngIf="onglet === 'a_traiter'" class="mgr-alert mgr-alert--info mb-3">
      <i class="isax isax-info-circle"></i>
      Vous pouvez valider les demandes de vos N-1 et N-2. Une fois approuv\xE9e, la demande est transmise aux RH pour d\xE9cision finale.
    </div>

    <ng-container *ngIf="loading">
      <div class="mgr-skeleton" *ngFor="let i of [1,2,3,4]"></div>
    </ng-container>

    <ng-container *ngIf="!loading">
      <div *ngIf="!demandes.length" class="mgr-empty">
        <i class="isax" [ngClass]="onglet === 'a_traiter' ? 'isax-tick-circle' : 'isax-folder-open'"></i>
        {{ onglet === 'a_traiter' ? 'Aucune demande en attente de votre avis.' : 'Aucune demande ne correspond \xE0 ces crit\xE8res.' }}
      </div>

      <div class="dm-item" *ngFor="let d of demandes; trackBy: trackById" [class.dm-item--open]="ouverte === d.id"
           [class.dm-item--action]="d.peut_decider">
        <div class="dm-row" (click)="toggle(d.id)">
          <div class="mgr-user dm-user">
            <div class="mgr-user__av">{{ initiales(d.employe) }}</div>
            <div class="min-w-0">
              <div class="mgr-user__name">{{ nomComplet(d.employe) }}
                <span class="mgr-badge mgr-badge--niveau ms-1">{{ libelleNiveau(d.niveau) }}</span>
              </div>
              <div class="mgr-user__sub">{{ d.employe?.fonction || d.employe?.email }}</div>
            </div>
          </div>

          <div class="dm-titre">
            <div class="dm-titre__main"><i class="isax" [ngClass]="iconeTypeDemande(d.type_demande)"></i>{{ d.titre }}</div>
            <div class="dm-titre__sub">
              {{ libelleTypeDemande(d.type_demande) }} \xB7 soumise le {{ d.created_at | date:'dd/MM/yyyy' }}
              <span *ngIf="d.priorite === 'urgente' || d.priorite === 'haute'" class="mgr-badge ms-1"
                    [ngClass]="'mgr-badge--' + d.priorite">{{ d.priorite_display }}</span>
            </div>
          </div>

          <span class="mgr-badge dm-statut" [ngClass]="classeStatutDemande(d.statut)">{{ d.statut_display }}</span>

          <div class="dm-actions" (click)="$event.stopPropagation()">
            <ng-container *ngIf="d.peut_decider">
              <button type="button" class="mgr-btn mgr-btn--success mgr-btn--sm" (click)="ouvrir('valider', d)">
                <i class="isax isax-tick-circle"></i>Approuver
              </button>
              <button type="button" class="mgr-btn mgr-btn--danger mgr-btn--sm" (click)="ouvrir('refuser', d)">
                <i class="isax isax-close-circle"></i>Refuser
              </button>
            </ng-container>
            <i class="isax dm-chevron" [ngClass]="ouverte === d.id ? 'isax-arrow-up-2' : 'isax-arrow-down-1'" (click)="toggle(d.id)"></i>
          </div>
        </div>

        <!-- D\xE9tail -->
        <div class="dm-detail" *ngIf="ouverte === d.id">
          <div class="row g-3">
            <div class="col-md-6">
              <div class="dm-field"><label>Motif de la demande</label><p>{{ d.motif_demande || '\u2014' }}</p></div>
              <div class="dm-field" *ngIf="d.objectifs_personnels"><label>Objectifs personnels</label><p>{{ d.objectifs_personnels }}</p></div>
              <div class="dm-field" *ngIf="d.commentaire_employe"><label>Commentaire du collaborateur</label><p>{{ d.commentaire_employe }}</p></div>
              <div class="dm-field" *ngIf="d.date_souhaitee_debut"><label>D\xE9but souhait\xE9</label><p>{{ d.date_souhaitee_debut | date:'dd/MM/yyyy' }}</p></div>
              <div class="dm-field" *ngIf="d.session_formation">
                <label>Session</label>
                <p>{{ d.session_formation.titre }} \u2014 {{ d.session_formation.date_debut | date:'dd/MM/yyyy' }}<span *ngIf="d.session_formation.lieu">, {{ d.session_formation.lieu }}</span></p>
              </div>
            </div>

            <!-- Timeline du circuit -->
            <div class="col-md-6">
              <label class="dm-timeline-label">Circuit de validation</label>
              <ol class="dm-timeline">
                <li class="done">
                  <span class="dot"></span>
                  <div><strong>Soumise</strong><small>{{ d.created_at | date:'dd/MM/yyyy HH:mm' }}</small></div>
                </li>
                <li [class.done]="d.decision_manager && d.decision_manager.motif_refus === null"
                    [class.ko]="d.decision_manager?.motif_refus"
                    [class.current]="d.statut === 'en_attente_manager'">
                  <span class="dot"></span>
                  <div>
                    <strong>Manager</strong>
                    <ng-container *ngIf="d.decision_manager; else attenteManager">
                      <small>{{ d.decision_manager.motif_refus ? 'Refus\xE9e' : 'Approuv\xE9e' }} par {{ d.decision_manager.manager?.name }}
                        (N+{{ d.decision_manager.niveau }}) le {{ d.decision_manager.date | date:'dd/MM/yyyy' }}</small>
                      <small *ngIf="d.decision_manager.motif_refus" class="dm-quote">\xAB {{ d.decision_manager.motif_refus }} \xBB</small>
                      <small *ngIf="d.decision_manager.commentaire" class="dm-quote">\xAB {{ d.decision_manager.commentaire }} \xBB</small>
                    </ng-container>
                    <ng-template #attenteManager>
                      <small>{{ d.statut === 'en_attente_manager' ? 'En attente (N+1 ou N+2)' : 'Sans \xE9tape manager' }}</small>
                    </ng-template>
                  </div>
                </li>
                <li [class.done]="d.statut === 'validee'" [class.ko]="d.statut === 'refusee' && !d.decision_manager?.motif_refus"
                    [class.current]="d.statut === 'en_attente'">
                  <span class="dot"></span>
                  <div>
                    <strong>RH</strong>
                    <small *ngIf="d.statut === 'validee'">Valid\xE9e le {{ d.date_validation | date:'dd/MM/yyyy' }}</small>
                    <small *ngIf="d.statut === 'refusee' && !d.decision_manager?.motif_refus">Refus\xE9e \u2014 {{ d.motif_refus }}</small>
                    <small *ngIf="d.statut === 'en_attente'">En attente de d\xE9cision RH</small>
                    <small *ngIf="d.statut === 'en_attente_manager'">\u2014</small>
                    <small *ngIf="d.statut === 'annulee'">Demande annul\xE9e</small>
                  </div>
                </li>
              </ol>
              <a [routerLink]="[routes.managerCollaborateur, d.user_id]" class="mgr-btn mgr-btn--sm mt-2">
                <i class="isax isax-user"></i>Voir la fiche du collaborateur
              </a>
            </div>
          </div>
        </div>
      </div>
    </ng-container>
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODALE DE D\xC9CISION \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="mgr-modal-backdrop" *ngIf="action && cible" (click)="fermer()">
  <div class="mgr-modal" (click)="$event.stopPropagation()" role="dialog" aria-modal="true">
    <div class="mgr-modal__head">
      <h5>{{ action === 'valider' ? 'Approuver la demande' : 'Refuser la demande' }}</h5>
      <button type="button" (click)="fermer()" aria-label="Fermer">\xD7</button>
    </div>
    <div class="mgr-modal__body">
      <p class="mb-3">
        <strong>{{ nomComplet(cible.employe) }}</strong> \u2014 {{ libelleTypeDemande(cible.type_demande) }} \xAB {{ cible.titre }} \xBB
      </p>
      <p *ngIf="action === 'valider'" class="dm-hint">La demande sera transmise au service RH pour d\xE9cision finale.</p>

      <ng-container *ngIf="action === 'refuser'">
        <label for="motif">Motif du refus <span class="text-danger">*</span></label>
        <textarea id="motif" [(ngModel)]="motif" placeholder="Expliquez au collaborateur pourquoi sa demande n'est pas retenue\u2026" maxlength="1000"></textarea>
      </ng-container>

      <label for="commentaire" class="mt-3">Commentaire {{ action === 'valider' ? 'pour les RH' : '' }} (optionnel)</label>
      <textarea id="commentaire" [(ngModel)]="commentaire" maxlength="1000"
                [placeholder]="action === 'valider' ? 'Ex. : formation prioritaire pour le projet X' : ''"></textarea>

      <div *ngIf="erreurModale" class="mgr-alert mt-3"><i class="isax isax-warning-2"></i>{{ erreurModale }}</div>
    </div>
    <div class="mgr-modal__foot">
      <button type="button" class="mgr-btn" (click)="fermer()" [disabled]="enCours">Annuler</button>
      <button type="button" class="mgr-btn" [ngClass]="action === 'valider' ? 'mgr-btn--success' : 'mgr-btn--danger'"
              (click)="confirmer()" [disabled]="enCours">
        <span *ngIf="enCours" class="spinner-border spinner-border-sm"></span>
        {{ action === 'valider' ? 'Approuver et transmettre aux RH' : 'Confirmer le refus' }}
      </button>
    </div>
  </div>
</div>
`, styles: ['/* src/app/features/manager/manager-demandes/manager-demandes.component.scss */\n.mgr-page {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mgr-page-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.mgr-page-head h1,\n.mgr-page-head h2 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mgr-page-head h1 i,\n.mgr-page-head h2 i {\n  color: #4F46E5;\n}\n.mgr-page-head p {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 2px 0 0;\n}\n.mgr-card {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 18px 20px;\n}\n.mgr-card__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.mgr-card__title i {\n  color: #4F46E5;\n  margin-right: 6px;\n}\n.mgr-card__title a {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4F46E5;\n  text-decoration: none;\n}\n.mgr-card__title a:hover {\n  text-decoration: underline;\n}\n.mgr-kpis {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n}\n.mgr-kpi {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-top: 3px solid #4F46E5;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.mgr-kpi__val {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.1;\n}\n.mgr-kpi__lbl {\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.mgr-kpi__lbl i {\n  font-size: 13px;\n}\n.mgr-kpi--warn {\n  border-top-color: #f59e0b;\n  background: #fff8ee;\n}\n.mgr-kpi--danger {\n  border-top-color: #dc2626;\n}\n.mgr-kpi--ok {\n  border-top-color: #059669;\n}\n.mgr-progress {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 110px;\n}\n.mgr-progress__bar {\n  flex: 1;\n  height: 6px;\n  background: #eef0f4;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.mgr-progress__fill {\n  height: 100%;\n  background: #4F46E5;\n  border-radius: 6px;\n  transition: width 0.3s;\n}\n.mgr-progress__val {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  min-width: 36px;\n  text-align: right;\n}\n.mgr-progress--low .mgr-progress__fill {\n  background: #f59e0b;\n}\n.mgr-progress--high .mgr-progress__fill {\n  background: #059669;\n}\n.mgr-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n  background: #f3f4f6;\n  color: #374151;\n}\n.mgr-badge i {\n  font-size: 12px;\n}\n.mgr-badge--niveau {\n  background: #EEF2FF;\n  color: #4338CA;\n  border: 1px solid #C7D2FE;\n}\n.mgr-badge--manager {\n  background: #fef3c7;\n  color: #92400e;\n}\n.mgr-badge--rh {\n  background: #e0f2fe;\n  color: #075985;\n}\n.mgr-badge--validee {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-badge--refusee {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-badge--annulee {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mgr-badge--actif {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-badge--inactif {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mgr-badge--urgente {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-badge--haute {\n  background: #ffedd5;\n  color: #9a3412;\n}\n.mgr-user {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.mgr-user__av {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #EEF2FF;\n  color: #4F46E5;\n  border: 1px solid #C7D2FE;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.mgr-user__name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a1a2e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mgr-user__sub {\n  font-size: 11px;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mgr-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.mgr-search {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.mgr-search i {\n  position: absolute;\n  left: 11px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 15px;\n}\n.mgr-search input {\n  width: 100%;\n  padding: 8px 12px 8px 34px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n}\n.mgr-search input:focus {\n  outline: none;\n  border-color: #4F46E5;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);\n}\n.mgr-select {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fff;\n}\n.mgr-select:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.mgr-chips {\n  display: inline-flex;\n  gap: 4px;\n  background: #f3f4f6;\n  padding: 3px;\n  border-radius: 9px;\n}\n.mgr-chip {\n  border: none;\n  background: transparent;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  padding: 6px 12px;\n  border-radius: 7px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.mgr-chip.active {\n  background: #fff;\n  color: #4338CA;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.mgr-chip .count {\n  font-size: 10px;\n  background: #4F46E5;\n  color: #fff;\n  border-radius: 10px;\n  padding: 0 6px;\n}\n.mgr-chip .count--muted {\n  background: #d1d5db;\n  color: #374151;\n}\n.mgr-table-wrap {\n  overflow-x: auto;\n}\n.mgr-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.mgr-table th {\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 10px 12px;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.mgr-table td {\n  padding: 11px 12px;\n  border-bottom: 1px solid #f1f2f4;\n  vertical-align: middle;\n  color: #374151;\n}\n.mgr-table tbody tr:hover {\n  background: #fafbff;\n}\n.mgr-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 7px 14px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  color: #1a1a2e;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.mgr-btn i {\n  font-size: 15px;\n}\n.mgr-btn:hover:not(:disabled) {\n  border-color: #4F46E5;\n  color: #4F46E5;\n}\n.mgr-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.mgr-btn--primary {\n  background: #4F46E5;\n  border-color: #4F46E5;\n  color: #fff;\n}\n.mgr-btn--primary:hover:not(:disabled) {\n  background: #4338CA;\n  color: #fff;\n}\n.mgr-btn--success {\n  background: #059669;\n  border-color: #059669;\n  color: #fff;\n}\n.mgr-btn--success:hover:not(:disabled) {\n  background: #047857;\n  border-color: #047857;\n  color: #fff;\n}\n.mgr-btn--danger {\n  background: #fff;\n  border-color: #fca5a5;\n  color: #b91c1c;\n}\n.mgr-btn--danger:hover:not(:disabled) {\n  background: #fee2e2;\n  border-color: #dc2626;\n  color: #991b1b;\n}\n.mgr-btn--sm {\n  font-size: 12px;\n  padding: 5px 10px;\n}\n.mgr-btn--sm i {\n  font-size: 13px;\n}\n.mgr-empty {\n  text-align: center;\n  padding: 36px 16px;\n  color: #6b7280;\n  font-size: 13px;\n}\n.mgr-empty i {\n  font-size: 34px;\n  display: block;\n  margin-bottom: 8px;\n  color: #c7cbd4;\n}\n.mgr-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-alert--ok {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-alert--info {\n  background: #EEF2FF;\n  color: #4338CA;\n}\n.mgr-alert button {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: inherit;\n  cursor: pointer;\n  font-size: 16px;\n}\n.mgr-skeleton {\n  height: 44px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e9eaee 37%,\n      #f3f4f6 63%);\n  background-size: 400% 100%;\n  animation: mgr-shimmer 1.4s ease infinite;\n  margin-bottom: 8px;\n}\n@keyframes mgr-shimmer {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n.mgr-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(17, 24, 39, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.mgr-modal {\n  background: #fff;\n  border-radius: 14px;\n  width: 100%;\n  max-width: 520px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.mgr-modal__head {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mgr-modal__head h5 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.mgr-modal__head button {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #6b7280;\n  cursor: pointer;\n}\n.mgr-modal__body {\n  padding: 18px 20px;\n  font-size: 13px;\n  color: #374151;\n}\n.mgr-modal__body label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 6px;\n  display: block;\n}\n.mgr-modal__body textarea {\n  width: 100%;\n  min-height: 90px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 13px;\n  resize: vertical;\n}\n.mgr-modal__body textarea:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.mgr-modal__foot {\n  padding: 14px 20px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.mgr-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding-top: 12px;\n  font-size: 12px;\n  color: #6b7280;\n}\n.min-w-0 {\n  min-width: 0;\n}\n.dm-item {\n  border: 1px solid #eceef3;\n  border-radius: 10px;\n  margin-bottom: 8px;\n  background: #fff;\n  transition: box-shadow 0.15s, border-color 0.15s;\n}\n.dm-item--action {\n  border-left: 3px solid #f59e0b;\n}\n.dm-item--open {\n  border-color: #C7D2FE;\n  box-shadow: 0 2px 10px rgba(79, 70, 229, 0.08);\n}\n.dm-row {\n  display: grid;\n  grid-template-columns: minmax(180px, 1.1fr) minmax(200px, 1.6fr) auto auto;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 14px;\n  cursor: pointer;\n}\n.dm-titre {\n  min-width: 0;\n}\n.dm-titre__main {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a1a2e;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dm-titre__main i {\n  color: #4F46E5;\n}\n.dm-titre__sub {\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.dm-actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.dm-chevron {\n  font-size: 16px;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 4px;\n}\n.dm-detail {\n  border-top: 1px solid #f1f2f4;\n  padding: 14px 16px 16px;\n  background: #fafbff;\n  border-radius: 0 0 10px 10px;\n}\n.dm-field {\n  margin-bottom: 10px;\n}\n.dm-field label {\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 2px;\n  display: block;\n}\n.dm-field p {\n  font-size: 13px;\n  color: #374151;\n  margin: 0;\n  white-space: pre-line;\n}\n.dm-timeline-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.dm-timeline {\n  list-style: none;\n  padding: 0;\n  margin: 8px 0 0;\n}\n.dm-timeline li {\n  position: relative;\n  display: flex;\n  gap: 10px;\n  padding-bottom: 14px;\n}\n.dm-timeline li:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  left: 6px;\n  top: 16px;\n  bottom: 0;\n  width: 2px;\n  background: #e5e7eb;\n}\n.dm-timeline li .dot {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #e5e7eb;\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 1px #d1d5db;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.dm-timeline li strong {\n  display: block;\n  font-size: 13px;\n  color: #1a1a2e;\n}\n.dm-timeline li small {\n  display: block;\n  font-size: 12px;\n  color: #6b7280;\n}\n.dm-timeline li.done .dot {\n  background: #059669;\n  box-shadow: 0 0 0 1px #059669;\n}\n.dm-timeline li.ko .dot {\n  background: #dc2626;\n  box-shadow: 0 0 0 1px #dc2626;\n}\n.dm-timeline li.current .dot {\n  background: #f59e0b;\n  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.25);\n}\n.dm-quote {\n  font-style: italic;\n  color: #4b5563 !important;\n}\n.dm-hint {\n  font-size: 12px;\n  color: #6b7280;\n}\n@media (max-width: 991px) {\n  .dm-row {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .dm-statut {\n    justify-self: start;\n  }\n}\n/*# sourceMappingURL=manager-demandes.component.css.map */\n'] }]
  }], () => [{ type: ManagerService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManagerDemandesComponent, { className: "ManagerDemandesComponent", filePath: "app/features/manager/manager-demandes/manager-demandes.component.ts", lineNumber: 24 });
})();
export {
  ManagerDemandesComponent
};
//# sourceMappingURL=chunk-GCXMHDRX.js.map
