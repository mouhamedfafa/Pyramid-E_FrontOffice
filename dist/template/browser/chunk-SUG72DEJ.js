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
  ActivatedRoute,
  RouterLink
} from "./chunk-VMXPZP5A.js";
import "./chunk-47WYM2C2.js";
import "./chunk-XZLGMMSK.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
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
  ɵɵtextInterpolate2
} from "./chunk-ON7U2Q36.js";
import "./chunk-4MWRP73S.js";

// src/app/features/manager/manager-collaborateur-details/manager-collaborateur-details.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = (a0, a1) => [a0, a1];
var _c2 = (a0) => ({ demande: a0 });
function ManagerCollaborateurDetailsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ManagerCollaborateurDetailsComponent_ng_container_6_div_1_Template, 1, 0, "div", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.c.fonction);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.c.email);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.c.matricule);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_span_19_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(2, _c1, ctx_r0.routes.managerCollaborateur, ctx_r0.c.manager.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nomComplet(ctx_r0.c.manager));
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_span_19_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "moi");
    \u0275\u0275elementEnd();
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275text(2, "Manager direct : ");
    \u0275\u0275template(3, ManagerCollaborateurDetailsComponent_ng_container_7_span_19_a_3_Template, 2, 5, "a", 38)(4, ManagerCollaborateurDetailsComponent_ng_container_7_span_19_ng_template_4_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const moi_r3 = \u0275\u0275reference(5);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.c.niveau > 1)("ngIfElse", moi_r3);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Manage ", ctx_r0.c.collaborateurs_count, " collaborateur", ctx_r0.c.collaborateurs_count > 1 ? "s" : "");
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_74_table_1_tr_14_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "via parcours");
    \u0275\u0275elementEnd();
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_74_table_1_tr_14_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "via catalogue");
    \u0275\u0275elementEnd();
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_74_table_1_tr_14_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "En retard");
    \u0275\u0275elementEnd();
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_74_table_1_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2);
    \u0275\u0275template(3, ManagerCollaborateurDetailsComponent_ng_container_7_div_74_table_1_tr_14_span_3_Template, 2, 0, "span", 46)(4, ManagerCollaborateurDetailsComponent_ng_container_7_div_74_table_1_tr_14_span_4_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ManagerCollaborateurDetailsComponent_ng_container_7_div_74_table_1_tr_14_span_8_Template, 2, 0, "span", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 49)(11, "div", 50);
    \u0275\u0275element(12, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 52);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r4.titre, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r4.parcours_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r4.catalogue_id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.classeStatutFormation(f_r4.statut_formation));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.libelleStatutFormation(f_r4.statut_formation));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.estEnRetard(f_r4));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.classeProgression(+f_r4.progression));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", f_r4.progression, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(15, 12, f_r4.progression, "1.0-0"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 15, f_r4.date_inscription, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r4.date_fin ? \u0275\u0275pipeBind2(21, 18, f_r4.date_fin, "dd/MM/yyyy") : "\u2014");
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_74_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 43)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Inscription");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "\xC9ch\xE9ance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, ManagerCollaborateurDetailsComponent_ng_container_7_div_74_table_1_tr_14_Template, 22, 21, "tr", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r0.data.formations);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, ManagerCollaborateurDetailsComponent_ng_container_7_div_74_table_1_Template, 15, 1, "table", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const vide_r5 = \u0275\u0275reference(80);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data.formations.length)("ngIfElse", vide_r5);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_75_div_1_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 56);
    \u0275\u0275element(5, "i", 57);
    \u0275\u0275text(6, "Parcours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 49)(11, "div", 50);
    \u0275\u0275element(12, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 52);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.nom);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(p_r6.statut);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.classeProgression(+p_r6.progression));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", p_r6.progression, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(15, 7, p_r6.progression, "1.0-0"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 10, p_r6.date_inscription, "dd/MM/yyyy"));
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_75_div_1_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 56);
    \u0275\u0275element(5, "i", 58);
    \u0275\u0275text(6, "Catalogue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 49)(11, "div", 50);
    \u0275\u0275element(12, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 52);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ca_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ca_r7.titre);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ca_r7.statut);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.classeProgression(+(ca_r7.progression ?? 0)));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ca_r7.progression ?? 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(15, 7, ca_r7.progression ?? 0, "1.0-0"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 10, ca_r7.date_assignation, "dd/MM/yyyy"));
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_75_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "table", 43)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Intitul\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Depuis");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, ManagerCollaborateurDetailsComponent_ng_container_7_div_75_div_1_tr_15_Template, 19, 13, "tr", 44)(16, ManagerCollaborateurDetailsComponent_ng_container_7_div_75_div_1_tr_16_Template, 19, 13, "tr", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.data.parcours);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.data.catalogues);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ManagerCollaborateurDetailsComponent_ng_container_7_div_75_div_1_Template, 17, 2, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const vide_r5 = \u0275\u0275reference(80);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data.parcours.length || ctx_r0.data.catalogues.length)("ngIfElse", vide_r5);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_76_table_1_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ce_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ce_r8.formation_titre || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ce_r8.code_unique);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, ce_r8.date_delivrance, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ce_r8.date_expiration ? \u0275\u0275pipeBind2(10, 8, ce_r8.date_expiration, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ce_r8.score_final ?? "\u2014");
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_76_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 43)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "D\xE9livr\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Expire le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Score");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, ManagerCollaborateurDetailsComponent_ng_container_7_div_76_table_1_tr_14_Template, 13, 11, "tr", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r0.data.certificats);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, ManagerCollaborateurDetailsComponent_ng_container_7_div_76_table_1_Template, 15, 1, "table", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const vide_r5 = \u0275\u0275reference(80);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data.certificats.length)("ngIfElse", vide_r5);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_77_table_1_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 47);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r9.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r9.note ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", q_r9.points_obtenus ?? 0, "/", q_r9.points_total ?? 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r9.nombre_tentatives ?? 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", q_r9.est_reussi ? "mgr-badge--validee" : "mgr-badge--refusee");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r9.est_reussi ? "R\xE9ussi" : "\xC9chou\xE9");
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_77_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 43)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Tentatives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "R\xE9sultat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, ManagerCollaborateurDetailsComponent_ng_container_7_div_77_table_1_tr_14_Template, 12, 7, "tr", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r0.data.quiz);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, ManagerCollaborateurDetailsComponent_ng_container_7_div_77_table_1_Template, 15, 1, "table", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const vide_r5 = \u0275\u0275reference(80);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data.quiz.length)("ngIfElse", vide_r5);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_78_div_1_tr_14_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", d_r10.decision_manager.manager == null ? null : d_r10.decision_manager.manager.name, " (N+", d_r10.decision_manager.niveau, ") ");
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_78_div_1_tr_14_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\u2014");
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_78_div_1_tr_14_a_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 65);
    \u0275\u0275text(1, "Traiter");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("routerLink", ctx_r0.routes.managerDemandes)("queryParams", \u0275\u0275pureFunction1(2, _c2, d_r10.id));
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_78_div_1_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 60);
    \u0275\u0275element(5, "i", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 47);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 60);
    \u0275\u0275template(14, ManagerCollaborateurDetailsComponent_ng_container_7_div_78_div_1_tr_14_ng_container_14_Template, 2, 2, "ng-container", 62)(15, ManagerCollaborateurDetailsComponent_ng_container_7_div_78_div_1_tr_14_ng_template_15_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 63);
    \u0275\u0275template(18, ManagerCollaborateurDetailsComponent_ng_container_7_div_78_div_1_tr_14_a_18_Template, 2, 4, "a", 64);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r10 = ctx.$implicit;
    const aucunAvis_r11 = \u0275\u0275reference(16);
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r10.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.iconeTypeDemande(d_r10.type_demande));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.libelleTypeDemande(d_r10.type_demande));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 9, d_r10.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.classeStatutDemande(d_r10.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r10.statut_display);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", d_r10.decision_manager)("ngIfElse", aucunAvis_r11);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", d_r10.peut_decider);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_78_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "table", 43)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Demande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Soumise le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Avis manager");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, ManagerCollaborateurDetailsComponent_ng_container_7_div_78_div_1_tr_14_Template, 19, 12, "tr", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r0.data.demandes);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ManagerCollaborateurDetailsComponent_ng_container_7_div_78_div_1_Template, 15, 1, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const vide_r5 = \u0275\u0275reference(80);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data.demandes.length)("ngIfElse", vide_r5);
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275text(2, "Aucun \xE9l\xE9ment pour le moment.");
    \u0275\u0275elementEnd();
  }
}
function ManagerCollaborateurDetailsComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 12)(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 17);
    \u0275\u0275template(12, ManagerCollaborateurDetailsComponent_ng_container_7_span_12_Template, 3, 1, "span", 7)(13, ManagerCollaborateurDetailsComponent_ng_container_7_span_13_Template, 3, 1, "span", 7)(14, ManagerCollaborateurDetailsComponent_ng_container_7_span_14_Template, 3, 1, "span", 7);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275element(16, "i", 18);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 17);
    \u0275\u0275template(19, ManagerCollaborateurDetailsComponent_ng_container_7_span_19_Template, 6, 2, "span", 7)(20, ManagerCollaborateurDetailsComponent_ng_container_7_span_20_Template, 3, 2, "span", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 19)(22, "div", 20)(23, "div", 21);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 22);
    \u0275\u0275element(26, "i", 23);
    \u0275\u0275text(27, "Formations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 20)(29, "div", 21);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 22);
    \u0275\u0275element(32, "i", 24);
    \u0275\u0275text(33, "En cours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 25)(35, "div", 21);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 22);
    \u0275\u0275element(38, "i", 26);
    \u0275\u0275text(39, "Progression moyenne");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 25)(41, "div", 21);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 22);
    \u0275\u0275element(44, "i", 27);
    \u0275\u0275text(45, "Certificats");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 20)(47, "div", 21);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 22);
    \u0275\u0275element(50, "i", 28);
    \u0275\u0275text(51, "Quiz r\xE9ussis");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 29)(53, "div", 30)(54, "button", 31);
    \u0275\u0275listener("click", function ManagerCollaborateurDetailsComponent_ng_container_7_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onglet = "formations");
    });
    \u0275\u0275text(55, " Formations ");
    \u0275\u0275elementStart(56, "span", 32);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "button", 31);
    \u0275\u0275listener("click", function ManagerCollaborateurDetailsComponent_ng_container_7_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onglet = "parcours");
    });
    \u0275\u0275text(59, " Parcours & catalogues ");
    \u0275\u0275elementStart(60, "span", 32);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "button", 31);
    \u0275\u0275listener("click", function ManagerCollaborateurDetailsComponent_ng_container_7_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onglet = "certificats");
    });
    \u0275\u0275text(63, " Certificats ");
    \u0275\u0275elementStart(64, "span", 32);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "button", 31);
    \u0275\u0275listener("click", function ManagerCollaborateurDetailsComponent_ng_container_7_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onglet = "quiz");
    });
    \u0275\u0275text(67, " Quiz ");
    \u0275\u0275elementStart(68, "span", 32);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "button", 31);
    \u0275\u0275listener("click", function ManagerCollaborateurDetailsComponent_ng_container_7_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onglet = "demandes");
    });
    \u0275\u0275text(71, " Demandes ");
    \u0275\u0275elementStart(72, "span", 32);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(74, ManagerCollaborateurDetailsComponent_ng_container_7_div_74_Template, 2, 2, "div", 33)(75, ManagerCollaborateurDetailsComponent_ng_container_7_div_75_Template, 2, 2, "div", 7)(76, ManagerCollaborateurDetailsComponent_ng_container_7_div_76_Template, 2, 2, "div", 33)(77, ManagerCollaborateurDetailsComponent_ng_container_7_div_77_Template, 2, 2, "div", 33)(78, ManagerCollaborateurDetailsComponent_ng_container_7_div_78_Template, 2, 2, "div", 7)(79, ManagerCollaborateurDetailsComponent_ng_container_7_ng_template_79_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.initiales(ctx_r0.c));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.nomComplet(ctx_r0.c), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.libelleNiveau(ctx_r0.c.niveau));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.c.statut === 1 ? "mgr-badge--actif" : "mgr-badge--inactif");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.c.statut === 1 ? "Actif" : "Inactif");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.c.fonction);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.c.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.c.matricule);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.cheminDirection());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.c.manager);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.c.collaborateurs_count);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data.resume.formations_total);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.data.resume.formations_en_cours);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.data.resume.progression_moyenne, "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.data.resume.certificats);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r0.data.resume.quiz_reussis, "/", ctx_r0.data.resume.quiz_total);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r0.onglet === "formations");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data.formations.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.onglet === "parcours");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data.parcours.length + ctx_r0.data.catalogues.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.onglet === "certificats");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data.certificats.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.onglet === "quiz");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data.quiz.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.onglet === "demandes");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data.demandes.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.onglet === "formations");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.onglet === "parcours");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.onglet === "certificats");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.onglet === "quiz");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.onglet === "demandes");
  }
}
var ManagerCollaborateurDetailsComponent = class _ManagerCollaborateurDetailsComponent {
  route;
  managerService;
  routes = routes;
  data = null;
  loading = false;
  error = "";
  onglet = "formations";
  initiales = initiales;
  nomComplet = nomComplet;
  libelleNiveau = libelleNiveau;
  classeProgression = classeProgression;
  classeStatutDemande = classeStatutDemande;
  libelleTypeDemande = libelleTypeDemande;
  iconeTypeDemande = iconeTypeDemande;
  sub;
  constructor(route, managerService) {
    this.route = route;
    this.managerService = managerService;
  }
  ngOnInit() {
    this.sub = this.route.paramMap.subscribe((params) => this.charger(Number(params.get("id"))));
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  charger(id) {
    this.loading = true;
    this.error = "";
    this.data = null;
    this.managerService.getCollaborateur(id).subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Impossible de charger ce collaborateur.");
        this.loading = false;
      }
    });
  }
  get c() {
    return this.data?.collaborateur;
  }
  cheminDirection() {
    const d = this.c?.direction_obj;
    if (!d)
      return this.c?.direction || "\u2014";
    return [d.parent?.parent?.nom, d.parent?.nom, d.nom].filter(Boolean).join(" \u203A ");
  }
  libelleStatutFormation(s) {
    return { en_cours: "En cours", termine: "Termin\xE9e", non_commence: "Non commenc\xE9e", abandonne: "Abandonn\xE9e" }[s] ?? s;
  }
  classeStatutFormation(s) {
    return { en_cours: "mgr-badge--rh", termine: "mgr-badge--validee", non_commence: "mgr-badge--annulee", abandonne: "mgr-badge--refusee" }[s] ?? "";
  }
  estEnRetard(f) {
    return f.statut_formation !== "termine" && !!f.date_fin && new Date(f.date_fin) < /* @__PURE__ */ new Date();
  }
  static \u0275fac = function ManagerCollaborateurDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManagerCollaborateurDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ManagerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManagerCollaborateurDetailsComponent, selectors: [["app-manager-collaborateur-details"]], decls: 8, vars: 4, consts: [["vide", ""], ["moi", ""], ["aucunAvis", ""], [1, "mgr-page"], [1, "mgr-btn", "mgr-btn--sm", 3, "routerLink"], [1, "isax", "isax-arrow-left-2"], ["class", "mgr-alert", 4, "ngIf"], [4, "ngIf"], [1, "mgr-alert"], [1, "isax", "isax-warning-2"], ["class", "mgr-skeleton", 4, "ngFor", "ngForOf"], [1, "mgr-skeleton"], [1, "mgr-card", "cd-identity"], [1, "cd-av"], [1, "cd-info"], [1, "mgr-badge", "mgr-badge--niveau", "ms-1"], [1, "mgr-badge", "ms-1", 3, "ngClass"], [1, "cd-meta"], [1, "isax", "isax-buildings-2"], [1, "mgr-kpis"], [1, "mgr-kpi"], [1, "mgr-kpi__val"], [1, "mgr-kpi__lbl"], [1, "isax", "isax-book-1"], [1, "isax", "isax-play-circle"], [1, "mgr-kpi", "mgr-kpi--ok"], [1, "isax", "isax-chart-2"], [1, "isax", "isax-medal-star"], [1, "isax", "isax-award"], [1, "mgr-card"], [1, "mgr-chips", "mb-3", "cd-tabs"], ["type", "button", 1, "mgr-chip", 3, "click"], [1, "count", "count--muted"], ["class", "mgr-table-wrap", 4, "ngIf"], [1, "isax", "isax-briefcase"], [1, "isax", "isax-sms"], [1, "isax", "isax-personalcard"], [1, "isax", "isax-user-tick"], [3, "routerLink", 4, "ngIf", "ngIfElse"], [3, "routerLink"], [1, "isax", "isax-hierarchy"], [1, "mgr-table-wrap"], ["class", "mgr-table", 4, "ngIf", "ngIfElse"], [1, "mgr-table"], [4, "ngFor", "ngForOf"], [1, "fw-semibold"], ["class", "mgr-badge mgr-badge--annulee ms-1", 4, "ngIf"], [1, "mgr-badge", 3, "ngClass"], ["class", "mgr-badge mgr-badge--refusee ms-1", 4, "ngIf"], [1, "mgr-progress", 3, "ngClass"], [1, "mgr-progress__bar"], [1, "mgr-progress__fill"], [1, "mgr-progress__val"], [1, "mgr-badge", "mgr-badge--annulee", "ms-1"], [1, "mgr-badge", "mgr-badge--refusee", "ms-1"], ["class", "mgr-table-wrap", 4, "ngIf", "ngIfElse"], [1, "mgr-badge"], [1, "isax", "isax-routing-2"], [1, "isax", "isax-book-square"], [1, "cd-mono"], [1, "cd-sub"], [1, "isax", 3, "ngClass"], [4, "ngIf", "ngIfElse"], [1, "text-end"], ["class", "mgr-btn mgr-btn--primary mgr-btn--sm", 3, "routerLink", "queryParams", 4, "ngIf"], [1, "mgr-btn", "mgr-btn--primary", "mgr-btn--sm", 3, "routerLink", "queryParams"], [1, "mgr-empty"], [1, "isax", "isax-folder-open"]], template: function ManagerCollaborateurDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div")(2, "a", 4);
      \u0275\u0275element(3, "i", 5);
      \u0275\u0275text(4, "Retour \xE0 l'\xE9quipe");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, ManagerCollaborateurDetailsComponent_div_5_Template, 3, 1, "div", 6)(6, ManagerCollaborateurDetailsComponent_ng_container_6_Template, 2, 2, "ng-container", 7)(7, ManagerCollaborateurDetailsComponent_ng_container_7_Template, 81, 37, "ng-container", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.managerEquipe);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.data && ctx.c);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterLink, DecimalPipe, DatePipe], styles: ["\n\n.mgr-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mgr-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.mgr-page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.mgr-page-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mgr-page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.mgr-page-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4F46E5;\n}\n.mgr-page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 2px 0 0;\n}\n.mgr-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 18px 20px;\n}\n.mgr-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.mgr-card__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4F46E5;\n  margin-right: 6px;\n}\n.mgr-card__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4F46E5;\n  text-decoration: none;\n}\n.mgr-card__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.mgr-kpis[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n}\n.mgr-kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-top: 3px solid #4F46E5;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.mgr-kpi__val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.1;\n}\n.mgr-kpi__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.mgr-kpi__lbl[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.mgr-kpi--warn[_ngcontent-%COMP%] {\n  border-top-color: #f59e0b;\n  background: #fff8ee;\n}\n.mgr-kpi--danger[_ngcontent-%COMP%] {\n  border-top-color: #dc2626;\n}\n.mgr-kpi--ok[_ngcontent-%COMP%] {\n  border-top-color: #059669;\n}\n.mgr-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 110px;\n}\n.mgr-progress__bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: #eef0f4;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.mgr-progress__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #4F46E5;\n  border-radius: 6px;\n  transition: width 0.3s;\n}\n.mgr-progress__val[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  min-width: 36px;\n  text-align: right;\n}\n.mgr-progress--low[_ngcontent-%COMP%]   .mgr-progress__fill[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.mgr-progress--high[_ngcontent-%COMP%]   .mgr-progress__fill[_ngcontent-%COMP%] {\n  background: #059669;\n}\n.mgr-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n  background: #f3f4f6;\n  color: #374151;\n}\n.mgr-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mgr-badge--niveau[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #4338CA;\n  border: 1px solid #C7D2FE;\n}\n.mgr-badge--manager[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.mgr-badge--rh[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #075985;\n}\n.mgr-badge--validee[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-badge--refusee[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-badge--annulee[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mgr-badge--actif[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-badge--inactif[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mgr-badge--urgente[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-badge--haute[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #9a3412;\n}\n.mgr-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.mgr-user__av[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #EEF2FF;\n  color: #4F46E5;\n  border: 1px solid #C7D2FE;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.mgr-user__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a1a2e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mgr-user__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mgr-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.mgr-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.mgr-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 11px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 15px;\n}\n.mgr-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px 8px 34px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n}\n.mgr-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4F46E5;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);\n}\n.mgr-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fff;\n}\n.mgr-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.mgr-chips[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 4px;\n  background: #f3f4f6;\n  padding: 3px;\n  border-radius: 9px;\n}\n.mgr-chip[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  padding: 6px 12px;\n  border-radius: 7px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.mgr-chip.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #4338CA;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.mgr-chip[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  font-size: 10px;\n  background: #4F46E5;\n  color: #fff;\n  border-radius: 10px;\n  padding: 0 6px;\n}\n.mgr-chip[_ngcontent-%COMP%]   .count--muted[_ngcontent-%COMP%] {\n  background: #d1d5db;\n  color: #374151;\n}\n.mgr-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.mgr-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.mgr-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 10px 12px;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.mgr-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 12px;\n  border-bottom: 1px solid #f1f2f4;\n  vertical-align: middle;\n  color: #374151;\n}\n.mgr-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbff;\n}\n.mgr-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 7px 14px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  color: #1a1a2e;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.mgr-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.mgr-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #4F46E5;\n  color: #4F46E5;\n}\n.mgr-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.mgr-btn--primary[_ngcontent-%COMP%] {\n  background: #4F46E5;\n  border-color: #4F46E5;\n  color: #fff;\n}\n.mgr-btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4338CA;\n  color: #fff;\n}\n.mgr-btn--success[_ngcontent-%COMP%] {\n  background: #059669;\n  border-color: #059669;\n  color: #fff;\n}\n.mgr-btn--success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #047857;\n  border-color: #047857;\n  color: #fff;\n}\n.mgr-btn--danger[_ngcontent-%COMP%] {\n  background: #fff;\n  border-color: #fca5a5;\n  color: #b91c1c;\n}\n.mgr-btn--danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fee2e2;\n  border-color: #dc2626;\n  color: #991b1b;\n}\n.mgr-btn--sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 5px 10px;\n}\n.mgr-btn--sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.mgr-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 36px 16px;\n  color: #6b7280;\n  font-size: 13px;\n}\n.mgr-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 34px;\n  display: block;\n  margin-bottom: 8px;\n  color: #c7cbd4;\n}\n.mgr-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-alert--ok[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-alert--info[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #4338CA;\n}\n.mgr-alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: inherit;\n  cursor: pointer;\n  font-size: 16px;\n}\n.mgr-skeleton[_ngcontent-%COMP%] {\n  height: 44px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e9eaee 37%,\n      #f3f4f6 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_mgr-shimmer 1.4s ease infinite;\n  margin-bottom: 8px;\n}\n@keyframes _ngcontent-%COMP%_mgr-shimmer {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n.mgr-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(17, 24, 39, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.mgr-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  width: 100%;\n  max-width: 520px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.mgr-modal__head[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mgr-modal__head[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.mgr-modal__head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #6b7280;\n  cursor: pointer;\n}\n.mgr-modal__body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  font-size: 13px;\n  color: #374151;\n}\n.mgr-modal__body[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 6px;\n  display: block;\n}\n.mgr-modal__body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 90px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 13px;\n  resize: vertical;\n}\n.mgr-modal__body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.mgr-modal__foot[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.mgr-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding-top: 12px;\n  font-size: 12px;\n  color: #6b7280;\n}\n.cd-identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  flex-wrap: wrap;\n}\n.cd-av[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #4F46E5;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.cd-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cd-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 8px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.cd-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 18px;\n  font-size: 12px;\n  color: #4b5563;\n  margin-bottom: 4px;\n}\n.cd-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.cd-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4F46E5;\n  font-size: 14px;\n}\n.cd-meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4F46E5;\n  font-weight: 600;\n  text-decoration: none;\n}\n.cd-meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.cd-tabs[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.cd-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n}\n.cd-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n}\n/*# sourceMappingURL=manager-collaborateur-details.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagerCollaborateurDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-manager-collaborateur-details", imports: [CommonModule, RouterLink], template: `<div class="mgr-page">

  <div>
    <a [routerLink]="routes.managerEquipe" class="mgr-btn mgr-btn--sm"><i class="isax isax-arrow-left-2"></i>Retour \xE0 l'\xE9quipe</a>
  </div>

  <div *ngIf="error" class="mgr-alert"><i class="isax isax-warning-2"></i>{{ error }}</div>

  <ng-container *ngIf="loading">
    <div class="mgr-skeleton" *ngFor="let i of [1,2,3,4]"></div>
  </ng-container>

  <ng-container *ngIf="data && c">

    <!-- \u2500\u2500 Identit\xE9 \u2500\u2500 -->
    <div class="mgr-card cd-identity">
      <div class="cd-av">{{ initiales(c) }}</div>
      <div class="cd-info">
        <h2>{{ nomComplet(c) }}
          <span class="mgr-badge mgr-badge--niveau ms-1">{{ libelleNiveau(c.niveau) }}</span>
          <span class="mgr-badge ms-1" [ngClass]="c.statut === 1 ? 'mgr-badge--actif' : 'mgr-badge--inactif'">{{ c.statut === 1 ? 'Actif' : 'Inactif' }}</span>
        </h2>
        <div class="cd-meta">
          <span *ngIf="c.fonction"><i class="isax isax-briefcase"></i>{{ c.fonction }}</span>
          <span *ngIf="c.email"><i class="isax isax-sms"></i>{{ c.email }}</span>
          <span *ngIf="c.matricule"><i class="isax isax-personalcard"></i>{{ c.matricule }}</span>
          <span><i class="isax isax-buildings-2"></i>{{ cheminDirection() }}</span>
        </div>
        <div class="cd-meta">
          <span *ngIf="c.manager">
            <i class="isax isax-user-tick"></i>Manager direct :
            <a *ngIf="c.niveau > 1; else moi" [routerLink]="[routes.managerCollaborateur, c.manager.id]">{{ nomComplet(c.manager) }}</a>
            <ng-template #moi><strong>moi</strong></ng-template>
          </span>
          <span *ngIf="c.collaborateurs_count"><i class="isax isax-hierarchy"></i>Manage {{ c.collaborateurs_count }} collaborateur{{ c.collaborateurs_count > 1 ? 's' : '' }}</span>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500 R\xE9sum\xE9 \u2500\u2500 -->
    <div class="mgr-kpis">
      <div class="mgr-kpi">
        <div class="mgr-kpi__val">{{ data.resume.formations_total }}</div>
        <div class="mgr-kpi__lbl"><i class="isax isax-book-1"></i>Formations</div>
      </div>
      <div class="mgr-kpi">
        <div class="mgr-kpi__val">{{ data.resume.formations_en_cours }}</div>
        <div class="mgr-kpi__lbl"><i class="isax isax-play-circle"></i>En cours</div>
      </div>
      <div class="mgr-kpi mgr-kpi--ok">
        <div class="mgr-kpi__val">{{ data.resume.progression_moyenne }}%</div>
        <div class="mgr-kpi__lbl"><i class="isax isax-chart-2"></i>Progression moyenne</div>
      </div>
      <div class="mgr-kpi mgr-kpi--ok">
        <div class="mgr-kpi__val">{{ data.resume.certificats }}</div>
        <div class="mgr-kpi__lbl"><i class="isax isax-medal-star"></i>Certificats</div>
      </div>
      <div class="mgr-kpi">
        <div class="mgr-kpi__val">{{ data.resume.quiz_reussis }}/{{ data.resume.quiz_total }}</div>
        <div class="mgr-kpi__lbl"><i class="isax isax-award"></i>Quiz r\xE9ussis</div>
      </div>
    </div>

    <!-- \u2500\u2500 Onglets \u2500\u2500 -->
    <div class="mgr-card">
      <div class="mgr-chips mb-3 cd-tabs">
        <button type="button" class="mgr-chip" [class.active]="onglet === 'formations'" (click)="onglet = 'formations'">
          Formations <span class="count count--muted">{{ data.formations.length }}</span>
        </button>
        <button type="button" class="mgr-chip" [class.active]="onglet === 'parcours'" (click)="onglet = 'parcours'">
          Parcours & catalogues <span class="count count--muted">{{ data.parcours.length + data.catalogues.length }}</span>
        </button>
        <button type="button" class="mgr-chip" [class.active]="onglet === 'certificats'" (click)="onglet = 'certificats'">
          Certificats <span class="count count--muted">{{ data.certificats.length }}</span>
        </button>
        <button type="button" class="mgr-chip" [class.active]="onglet === 'quiz'" (click)="onglet = 'quiz'">
          Quiz <span class="count count--muted">{{ data.quiz.length }}</span>
        </button>
        <button type="button" class="mgr-chip" [class.active]="onglet === 'demandes'" (click)="onglet = 'demandes'">
          Demandes <span class="count count--muted">{{ data.demandes.length }}</span>
        </button>
      </div>

      <!-- Formations -->
      <div class="mgr-table-wrap" *ngIf="onglet === 'formations'">
        <table class="mgr-table" *ngIf="data.formations.length; else vide">
          <thead><tr><th>Formation</th><th>Statut</th><th>Progression</th><th>Inscription</th><th>\xC9ch\xE9ance</th></tr></thead>
          <tbody>
            <tr *ngFor="let f of data.formations">
              <td class="fw-semibold">{{ f.titre }}
                <span class="mgr-badge mgr-badge--annulee ms-1" *ngIf="f.parcours_id">via parcours</span>
                <span class="mgr-badge mgr-badge--annulee ms-1" *ngIf="f.catalogue_id">via catalogue</span>
              </td>
              <td>
                <span class="mgr-badge" [ngClass]="classeStatutFormation(f.statut_formation)">{{ libelleStatutFormation(f.statut_formation) }}</span>
                <span class="mgr-badge mgr-badge--refusee ms-1" *ngIf="estEnRetard(f)">En retard</span>
              </td>
              <td>
                <div class="mgr-progress" [ngClass]="classeProgression(+f.progression)">
                  <div class="mgr-progress__bar"><div class="mgr-progress__fill" [style.width.%]="f.progression"></div></div>
                  <span class="mgr-progress__val">{{ f.progression | number:'1.0-0' }}%</span>
                </div>
              </td>
              <td>{{ f.date_inscription | date:'dd/MM/yyyy' }}</td>
              <td>{{ f.date_fin ? (f.date_fin | date:'dd/MM/yyyy') : '\u2014' }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Parcours & catalogues -->
      <div *ngIf="onglet === 'parcours'">
        <div class="mgr-table-wrap" *ngIf="data.parcours.length || data.catalogues.length; else vide">
          <table class="mgr-table">
            <thead><tr><th>Intitul\xE9</th><th>Type</th><th>Statut</th><th>Progression</th><th>Depuis</th></tr></thead>
            <tbody>
              <tr *ngFor="let p of data.parcours">
                <td class="fw-semibold">{{ p.nom }}</td>
                <td><span class="mgr-badge"><i class="isax isax-routing-2"></i>Parcours</span></td>
                <td>{{ p.statut }}</td>
                <td>
                  <div class="mgr-progress" [ngClass]="classeProgression(+p.progression)">
                    <div class="mgr-progress__bar"><div class="mgr-progress__fill" [style.width.%]="p.progression"></div></div>
                    <span class="mgr-progress__val">{{ p.progression | number:'1.0-0' }}%</span>
                  </div>
                </td>
                <td>{{ p.date_inscription | date:'dd/MM/yyyy' }}</td>
              </tr>
              <tr *ngFor="let ca of data.catalogues">
                <td class="fw-semibold">{{ ca.titre }}</td>
                <td><span class="mgr-badge"><i class="isax isax-book-square"></i>Catalogue</span></td>
                <td>{{ ca.statut }}</td>
                <td>
                  <div class="mgr-progress" [ngClass]="classeProgression(+(ca.progression ?? 0))">
                    <div class="mgr-progress__bar"><div class="mgr-progress__fill" [style.width.%]="ca.progression ?? 0"></div></div>
                    <span class="mgr-progress__val">{{ (ca.progression ?? 0) | number:'1.0-0' }}%</span>
                  </div>
                </td>
                <td>{{ ca.date_assignation | date:'dd/MM/yyyy' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Certificats -->
      <div class="mgr-table-wrap" *ngIf="onglet === 'certificats'">
        <table class="mgr-table" *ngIf="data.certificats.length; else vide">
          <thead><tr><th>Formation</th><th>Code</th><th>D\xE9livr\xE9 le</th><th>Expire le</th><th>Score</th></tr></thead>
          <tbody>
            <tr *ngFor="let ce of data.certificats">
              <td class="fw-semibold">{{ ce.formation_titre || '\u2014' }}</td>
              <td class="cd-mono">{{ ce.code_unique }}</td>
              <td>{{ ce.date_delivrance | date:'dd/MM/yyyy' }}</td>
              <td>{{ ce.date_expiration ? (ce.date_expiration | date:'dd/MM/yyyy') : '\u2014' }}</td>
              <td>{{ ce.score_final ?? '\u2014' }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Quiz -->
      <div class="mgr-table-wrap" *ngIf="onglet === 'quiz'">
        <table class="mgr-table" *ngIf="data.quiz.length; else vide">
          <thead><tr><th>Quiz</th><th>Note</th><th>Points</th><th>Tentatives</th><th>R\xE9sultat</th></tr></thead>
          <tbody>
            <tr *ngFor="let q of data.quiz">
              <td class="fw-semibold">{{ q.titre }}</td>
              <td>{{ q.note ?? '\u2014' }}</td>
              <td>{{ q.points_obtenus ?? 0 }}/{{ q.points_total ?? 0 }}</td>
              <td>{{ q.nombre_tentatives ?? 1 }}</td>
              <td><span class="mgr-badge" [ngClass]="q.est_reussi ? 'mgr-badge--validee' : 'mgr-badge--refusee'">{{ q.est_reussi ? 'R\xE9ussi' : '\xC9chou\xE9' }}</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Demandes -->
      <div *ngIf="onglet === 'demandes'">
        <div class="mgr-table-wrap" *ngIf="data.demandes.length; else vide">
          <table class="mgr-table">
            <thead><tr><th>Demande</th><th>Soumise le</th><th>Statut</th><th>Avis manager</th><th></th></tr></thead>
            <tbody>
              <tr *ngFor="let d of data.demandes">
                <td>
                  <div class="fw-semibold">{{ d.titre }}</div>
                  <div class="cd-sub"><i class="isax" [ngClass]="iconeTypeDemande(d.type_demande)"></i> {{ libelleTypeDemande(d.type_demande) }}</div>
                </td>
                <td>{{ d.created_at | date:'dd/MM/yyyy' }}</td>
                <td><span class="mgr-badge" [ngClass]="classeStatutDemande(d.statut)">{{ d.statut_display }}</span></td>
                <td class="cd-sub">
                  <ng-container *ngIf="d.decision_manager; else aucunAvis">
                    {{ d.decision_manager.manager?.name }} (N+{{ d.decision_manager.niveau }})
                  </ng-container>
                  <ng-template #aucunAvis>\u2014</ng-template>
                </td>
                <td class="text-end">
                  <a *ngIf="d.peut_decider" [routerLink]="routes.managerDemandes" [queryParams]="{ demande: d.id }" class="mgr-btn mgr-btn--primary mgr-btn--sm">Traiter</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <ng-template #vide>
        <div class="mgr-empty"><i class="isax isax-folder-open"></i>Aucun \xE9l\xE9ment pour le moment.</div>
      </ng-template>
    </div>

  </ng-container>
</div>
`, styles: ["/* src/app/features/manager/manager-collaborateur-details/manager-collaborateur-details.component.scss */\n.mgr-page {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mgr-page-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.mgr-page-head h1,\n.mgr-page-head h2 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mgr-page-head h1 i,\n.mgr-page-head h2 i {\n  color: #4F46E5;\n}\n.mgr-page-head p {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 2px 0 0;\n}\n.mgr-card {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 18px 20px;\n}\n.mgr-card__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.mgr-card__title i {\n  color: #4F46E5;\n  margin-right: 6px;\n}\n.mgr-card__title a {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4F46E5;\n  text-decoration: none;\n}\n.mgr-card__title a:hover {\n  text-decoration: underline;\n}\n.mgr-kpis {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n}\n.mgr-kpi {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-top: 3px solid #4F46E5;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.mgr-kpi__val {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.1;\n}\n.mgr-kpi__lbl {\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.mgr-kpi__lbl i {\n  font-size: 13px;\n}\n.mgr-kpi--warn {\n  border-top-color: #f59e0b;\n  background: #fff8ee;\n}\n.mgr-kpi--danger {\n  border-top-color: #dc2626;\n}\n.mgr-kpi--ok {\n  border-top-color: #059669;\n}\n.mgr-progress {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 110px;\n}\n.mgr-progress__bar {\n  flex: 1;\n  height: 6px;\n  background: #eef0f4;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.mgr-progress__fill {\n  height: 100%;\n  background: #4F46E5;\n  border-radius: 6px;\n  transition: width 0.3s;\n}\n.mgr-progress__val {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  min-width: 36px;\n  text-align: right;\n}\n.mgr-progress--low .mgr-progress__fill {\n  background: #f59e0b;\n}\n.mgr-progress--high .mgr-progress__fill {\n  background: #059669;\n}\n.mgr-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n  background: #f3f4f6;\n  color: #374151;\n}\n.mgr-badge i {\n  font-size: 12px;\n}\n.mgr-badge--niveau {\n  background: #EEF2FF;\n  color: #4338CA;\n  border: 1px solid #C7D2FE;\n}\n.mgr-badge--manager {\n  background: #fef3c7;\n  color: #92400e;\n}\n.mgr-badge--rh {\n  background: #e0f2fe;\n  color: #075985;\n}\n.mgr-badge--validee {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-badge--refusee {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-badge--annulee {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mgr-badge--actif {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-badge--inactif {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mgr-badge--urgente {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-badge--haute {\n  background: #ffedd5;\n  color: #9a3412;\n}\n.mgr-user {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.mgr-user__av {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #EEF2FF;\n  color: #4F46E5;\n  border: 1px solid #C7D2FE;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.mgr-user__name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a1a2e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mgr-user__sub {\n  font-size: 11px;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mgr-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.mgr-search {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.mgr-search i {\n  position: absolute;\n  left: 11px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 15px;\n}\n.mgr-search input {\n  width: 100%;\n  padding: 8px 12px 8px 34px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n}\n.mgr-search input:focus {\n  outline: none;\n  border-color: #4F46E5;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);\n}\n.mgr-select {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fff;\n}\n.mgr-select:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.mgr-chips {\n  display: inline-flex;\n  gap: 4px;\n  background: #f3f4f6;\n  padding: 3px;\n  border-radius: 9px;\n}\n.mgr-chip {\n  border: none;\n  background: transparent;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  padding: 6px 12px;\n  border-radius: 7px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.mgr-chip.active {\n  background: #fff;\n  color: #4338CA;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.mgr-chip .count {\n  font-size: 10px;\n  background: #4F46E5;\n  color: #fff;\n  border-radius: 10px;\n  padding: 0 6px;\n}\n.mgr-chip .count--muted {\n  background: #d1d5db;\n  color: #374151;\n}\n.mgr-table-wrap {\n  overflow-x: auto;\n}\n.mgr-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.mgr-table th {\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 10px 12px;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.mgr-table td {\n  padding: 11px 12px;\n  border-bottom: 1px solid #f1f2f4;\n  vertical-align: middle;\n  color: #374151;\n}\n.mgr-table tbody tr:hover {\n  background: #fafbff;\n}\n.mgr-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 7px 14px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  color: #1a1a2e;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.mgr-btn i {\n  font-size: 15px;\n}\n.mgr-btn:hover:not(:disabled) {\n  border-color: #4F46E5;\n  color: #4F46E5;\n}\n.mgr-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.mgr-btn--primary {\n  background: #4F46E5;\n  border-color: #4F46E5;\n  color: #fff;\n}\n.mgr-btn--primary:hover:not(:disabled) {\n  background: #4338CA;\n  color: #fff;\n}\n.mgr-btn--success {\n  background: #059669;\n  border-color: #059669;\n  color: #fff;\n}\n.mgr-btn--success:hover:not(:disabled) {\n  background: #047857;\n  border-color: #047857;\n  color: #fff;\n}\n.mgr-btn--danger {\n  background: #fff;\n  border-color: #fca5a5;\n  color: #b91c1c;\n}\n.mgr-btn--danger:hover:not(:disabled) {\n  background: #fee2e2;\n  border-color: #dc2626;\n  color: #991b1b;\n}\n.mgr-btn--sm {\n  font-size: 12px;\n  padding: 5px 10px;\n}\n.mgr-btn--sm i {\n  font-size: 13px;\n}\n.mgr-empty {\n  text-align: center;\n  padding: 36px 16px;\n  color: #6b7280;\n  font-size: 13px;\n}\n.mgr-empty i {\n  font-size: 34px;\n  display: block;\n  margin-bottom: 8px;\n  color: #c7cbd4;\n}\n.mgr-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mgr-alert--ok {\n  background: #d1fae5;\n  color: #065f46;\n}\n.mgr-alert--info {\n  background: #EEF2FF;\n  color: #4338CA;\n}\n.mgr-alert button {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: inherit;\n  cursor: pointer;\n  font-size: 16px;\n}\n.mgr-skeleton {\n  height: 44px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e9eaee 37%,\n      #f3f4f6 63%);\n  background-size: 400% 100%;\n  animation: mgr-shimmer 1.4s ease infinite;\n  margin-bottom: 8px;\n}\n@keyframes mgr-shimmer {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n.mgr-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(17, 24, 39, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.mgr-modal {\n  background: #fff;\n  border-radius: 14px;\n  width: 100%;\n  max-width: 520px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.mgr-modal__head {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mgr-modal__head h5 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.mgr-modal__head button {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #6b7280;\n  cursor: pointer;\n}\n.mgr-modal__body {\n  padding: 18px 20px;\n  font-size: 13px;\n  color: #374151;\n}\n.mgr-modal__body label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 6px;\n  display: block;\n}\n.mgr-modal__body textarea {\n  width: 100%;\n  min-height: 90px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 13px;\n  resize: vertical;\n}\n.mgr-modal__body textarea:focus {\n  outline: none;\n  border-color: #4F46E5;\n}\n.mgr-modal__foot {\n  padding: 14px 20px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.mgr-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding-top: 12px;\n  font-size: 12px;\n  color: #6b7280;\n}\n.cd-identity {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  flex-wrap: wrap;\n}\n.cd-av {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #4F46E5;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.cd-info {\n  flex: 1;\n  min-width: 0;\n}\n.cd-info h2 {\n  font-size: 19px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 8px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.cd-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 18px;\n  font-size: 12px;\n  color: #4b5563;\n  margin-bottom: 4px;\n}\n.cd-meta span {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.cd-meta i {\n  color: #4F46E5;\n  font-size: 14px;\n}\n.cd-meta a {\n  color: #4F46E5;\n  font-weight: 600;\n  text-decoration: none;\n}\n.cd-meta a:hover {\n  text-decoration: underline;\n}\n.cd-tabs {\n  flex-wrap: wrap;\n}\n.cd-sub {\n  font-size: 11px;\n  color: #6b7280;\n}\n.cd-mono {\n  font-family: monospace;\n  font-size: 12px;\n}\n/*# sourceMappingURL=manager-collaborateur-details.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: ManagerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManagerCollaborateurDetailsComponent, { className: "ManagerCollaborateurDetailsComponent", filePath: "app/features/manager/manager-collaborateur-details/manager-collaborateur-details.component.ts", lineNumber: 22 });
})();
export {
  ManagerCollaborateurDetailsComponent
};
//# sourceMappingURL=chunk-SUG72DEJ.js.map
