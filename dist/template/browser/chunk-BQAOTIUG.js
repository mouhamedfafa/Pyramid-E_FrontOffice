import {
  CommonModule,
  DatePipe,
  NgClass,
  NgIf
} from "./chunk-ZRUSYSCI.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ON7U2Q36.js";

// src/app/shared/components/circuit-demande/circuit-demande.component.ts
function CircuitDemandeComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "i", 5);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "En attente de l'avis du manager (N+1 ou N+2) \u2014 pas encore transmise aux RH");
    \u0275\u0275elementEnd()();
  }
}
function CircuitDemandeComponent_ng_container_0_div_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(N+", ctx_r0.avis.niveau, ")");
  }
}
function CircuitDemandeComponent_ng_container_0_div_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" le ", \u0275\u0275pipeBind2(2, 1, ctx_r0.avis.date, "dd/MM/yyyy"));
  }
}
function CircuitDemandeComponent_ng_container_0_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xAB ", ctx_r0.avis.motifRefus, " \xBB");
  }
}
function CircuitDemandeComponent_ng_container_0_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xAB ", ctx_r0.avis.commentaire, " \xBB");
  }
}
function CircuitDemandeComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "Avis du manager :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275template(6, CircuitDemandeComponent_ng_container_0_div_2_span_6_Template, 2, 1, "span", 0)(7, CircuitDemandeComponent_ng_container_0_div_2_span_7_Template, 3, 4, "span", 0)(8, CircuitDemandeComponent_ng_container_0_div_2_div_8_Template, 2, 1, "div", 8)(9, CircuitDemandeComponent_ng_container_0_div_2_div_9_Template, 2, 1, "div", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.refuseeParManager ? "cd-avis--ko" : "cd-avis--ok");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.refuseeParManager ? "isax-close-circle" : "isax-like-1");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.refuseeParManager ? "refus\xE9e" : "approuv\xE9e", " par ", ctx_r0.avis.nom || "le manager", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.avis.niveau);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.avis.date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.avis.motifRefus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.avis.commentaire);
  }
}
function CircuitDemandeComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CircuitDemandeComponent_ng_container_0_div_1_Template, 4, 0, "div", 2)(2, CircuitDemandeComponent_ng_container_0_div_2_Template, 10, 8, "div", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.enAttenteManager);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.enAttenteManager && ctx_r0.avis);
  }
}
function CircuitDemandeComponent_ol_1_small_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "En attente de votre manager");
    \u0275\u0275elementEnd();
  }
}
function CircuitDemandeComponent_ol_1_small_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Aucune validation manager requise");
    \u0275\u0275elementEnd();
  }
}
function CircuitDemandeComponent_ol_1_ng_container_16_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" le ", \u0275\u0275pipeBind2(2, 1, ctx_r0.avis.date, "dd/MM/yyyy"));
  }
}
function CircuitDemandeComponent_ol_1_ng_container_16_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xAB ", ctx_r0.avis.motifRefus, " \xBB");
  }
}
function CircuitDemandeComponent_ol_1_ng_container_16_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xAB ", ctx_r0.avis.commentaire, " \xBB");
  }
}
function CircuitDemandeComponent_ol_1_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275template(3, CircuitDemandeComponent_ol_1_ng_container_16_span_3_Template, 3, 4, "span", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CircuitDemandeComponent_ol_1_ng_container_16_small_4_Template, 2, 1, "small", 14)(5, CircuitDemandeComponent_ol_1_ng_container_16_small_5_Template, 2, 1, "small", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.refuseeParManager ? "Refus\xE9e" : "Approuv\xE9e", " par ", ctx_r0.avis.nom || "votre manager");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.avis.date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.avis.motifRefus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.avis.commentaire);
  }
}
function CircuitDemandeComponent_ol_1_small_22_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" le ", \u0275\u0275pipeBind2(2, 1, ctx_r0.demande == null ? null : ctx_r0.demande.date_validation, "dd/MM/yyyy"));
  }
}
function CircuitDemandeComponent_ol_1_small_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Valid\xE9e");
    \u0275\u0275template(2, CircuitDemandeComponent_ol_1_small_22_span_2_Template, 3, 4, "span", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.demande == null ? null : ctx_r0.demande.date_validation);
  }
}
function CircuitDemandeComponent_ol_1_small_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r0.demande == null ? null : ctx_r0.demande.motif_refus);
  }
}
function CircuitDemandeComponent_ol_1_small_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Refus\xE9e");
    \u0275\u0275template(2, CircuitDemandeComponent_ol_1_small_23_span_2_Template, 2, 1, "span", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.demande == null ? null : ctx_r0.demande.motif_refus);
  }
}
function CircuitDemandeComponent_ol_1_small_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "En cours d'examen");
    \u0275\u0275elementEnd();
  }
}
function CircuitDemandeComponent_ol_1_small_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Demande annul\xE9e");
    \u0275\u0275elementEnd();
  }
}
function CircuitDemandeComponent_ol_1_small_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.refuseeParManager ? "Non transmise" : "\xC0 venir");
  }
}
function CircuitDemandeComponent_ol_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 10)(1, "li", 11);
    \u0275\u0275element(2, "span", 12);
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Soumise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "li", 13);
    \u0275\u0275element(10, "span", 12);
    \u0275\u0275elementStart(11, "div")(12, "strong");
    \u0275\u0275text(13, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CircuitDemandeComponent_ol_1_small_14_Template, 2, 0, "small", 0)(15, CircuitDemandeComponent_ol_1_small_15_Template, 2, 0, "small", 0)(16, CircuitDemandeComponent_ol_1_ng_container_16_Template, 6, 5, "ng-container", 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "li", 13);
    \u0275\u0275element(18, "span", 12);
    \u0275\u0275elementStart(19, "div")(20, "strong");
    \u0275\u0275text(21, "RH");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, CircuitDemandeComponent_ol_1_small_22_Template, 3, 1, "small", 0)(23, CircuitDemandeComponent_ol_1_small_23_Template, 3, 1, "small", 0)(24, CircuitDemandeComponent_ol_1_small_24_Template, 2, 0, "small", 0)(25, CircuitDemandeComponent_ol_1_small_25_Template, 2, 0, "small", 0)(26, CircuitDemandeComponent_ol_1_small_26_Template, 2, 1, "small", 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 11, ctx_r0.demande == null ? null : ctx_r0.demande.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.etatManager);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.etatManager === "current");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.etatManager === "skip");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.avis && ctx_r0.etatManager !== "current");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.etatRh);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.etatRh === "done");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.etatRh === "ko");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.etatRh === "current");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.etatRh === "annulee");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.etatRh === "todo");
  }
}
var CircuitDemandeComponent = class _CircuitDemandeComponent {
  demande;
  variante = "compact";
  get avis() {
    const d = this.demande;
    if (!d)
      return null;
    if (d.decision_manager) {
      return {
        nom: d.decision_manager.manager?.name ?? null,
        niveau: d.decision_manager.niveau ?? null,
        date: d.decision_manager.date ?? null,
        commentaire: d.decision_manager.commentaire ?? null,
        motifRefus: d.decision_manager.motif_refus ?? null
      };
    }
    if (d.decideur_manager || d.date_decision_manager) {
      const m = d.decideur_manager;
      return {
        nom: m ? `${m.prenom ?? ""} ${m.nom ?? ""}`.trim() || m.name : null,
        niveau: d.niveau_decideur ?? null,
        date: d.date_decision_manager ?? null,
        commentaire: d.commentaire_manager ?? null,
        motifRefus: d.motif_refus_manager ?? null
      };
    }
    return null;
  }
  get enAttenteManager() {
    return this.demande?.statut === "en_attente_manager";
  }
  get refuseeParManager() {
    return !!this.avis?.motifRefus;
  }
  /** Étape RH : état visuel de la frise. */
  get etatRh() {
    switch (this.demande?.statut) {
      case "validee":
        return "done";
      case "refusee":
        return this.refuseeParManager ? "todo" : "ko";
      case "en_attente":
        return "current";
      case "annulee":
        return "annulee";
      default:
        return "todo";
    }
  }
  get etatManager() {
    if (this.enAttenteManager)
      return "current";
    if (this.avis)
      return this.refuseeParManager ? "ko" : "done";
    return "skip";
  }
  static \u0275fac = function CircuitDemandeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CircuitDemandeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CircuitDemandeComponent, selectors: [["app-circuit-demande"]], inputs: { demande: "demande", variante: "variante" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "cd-timeline", 4, "ngIf"], ["class", "cd-avis cd-avis--attente", 4, "ngIf"], ["class", "cd-avis", 3, "ngClass", 4, "ngIf"], [1, "cd-avis", "cd-avis--attente"], [1, "isax", "isax-clock"], [1, "cd-avis", 3, "ngClass"], [1, "isax", 3, "ngClass"], ["class", "cd-avis__quote", 4, "ngIf"], [1, "cd-avis__quote"], [1, "cd-timeline"], [1, "done"], [1, "dot"], [3, "ngClass"], ["class", "cd-quote", 4, "ngIf"], [1, "cd-quote"]], template: function CircuitDemandeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CircuitDemandeComponent_ng_container_0_Template, 3, 2, "ng-container", 0)(1, CircuitDemandeComponent_ol_1_Template, 27, 14, "ol", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.variante === "compact");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.variante === "timeline");
    }
  }, dependencies: [CommonModule, NgClass, NgIf, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.cd-avis[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin-top: 8px;\n  padding: 7px 10px;\n  border-radius: 8px;\n  font-size: 12px;\n  line-height: 1.45;\n}\n.cd-avis[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n.cd-avis--attente[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.cd-avis--ok[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #065f46;\n}\n.cd-avis--ko[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.cd-avis__quote[_ngcontent-%COMP%] {\n  font-style: italic;\n  opacity: 0.9;\n}\n.cd-timeline[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  gap: 0;\n  padding: 0;\n  margin: 10px 0 0;\n}\n.cd-timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-right: 10px;\n  min-width: 0;\n}\n.cd-timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  top: 6px;\n  left: 16px;\n  right: 0;\n  height: 2px;\n  background: #e5e7eb;\n}\n.cd-timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #e5e7eb;\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 1px #d1d5db;\n  position: relative;\n  z-index: 1;\n}\n.cd-timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #1a1a2e;\n}\n.cd-timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #6b7280;\n  overflow-wrap: anywhere;\n}\n.cd-timeline[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #059669;\n  box-shadow: 0 0 0 1px #059669;\n}\n.cd-timeline[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:not(:last-child)::after {\n  background: #6ee7b7;\n}\n.cd-timeline[_ngcontent-%COMP%]   li.ko[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #dc2626;\n  box-shadow: 0 0 0 1px #dc2626;\n}\n.cd-timeline[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.25);\n}\n.cd-timeline[_ngcontent-%COMP%]   li.skip[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #fff;\n  border-style: dashed;\n}\n.cd-timeline[_ngcontent-%COMP%]   li.annulee[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #9ca3af;\n  box-shadow: 0 0 0 1px #9ca3af;\n}\n.cd-quote[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=circuit-demande.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircuitDemandeComponent, [{
    type: Component,
    args: [{ selector: "app-circuit-demande", standalone: true, imports: [CommonModule], template: `<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VARIANTE COMPACTE : avis du manager (RH) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<ng-container *ngIf="variante === 'compact'">
  <div *ngIf="enAttenteManager" class="cd-avis cd-avis--attente">
    <i class="isax isax-clock"></i>
    <span>En attente de l'avis du manager (N+1 ou N+2) \u2014 pas encore transmise aux RH</span>
  </div>

  <div *ngIf="!enAttenteManager && avis" class="cd-avis" [ngClass]="refuseeParManager ? 'cd-avis--ko' : 'cd-avis--ok'">
    <i class="isax" [ngClass]="refuseeParManager ? 'isax-close-circle' : 'isax-like-1'"></i>
    <div>
      <strong>Avis du manager :</strong>
      {{ refuseeParManager ? 'refus\xE9e' : 'approuv\xE9e' }} par {{ avis.nom || 'le manager' }}
      <span *ngIf="avis.niveau">(N+{{ avis.niveau }})</span>
      <span *ngIf="avis.date"> le {{ avis.date | date:'dd/MM/yyyy' }}</span>
      <div *ngIf="avis.motifRefus" class="cd-avis__quote">\xAB {{ avis.motifRefus }} \xBB</div>
      <div *ngIf="avis.commentaire" class="cd-avis__quote">\xAB {{ avis.commentaire }} \xBB</div>
    </div>
  </div>
</ng-container>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VARIANTE FRISE : circuit complet (employ\xE9) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<ol *ngIf="variante === 'timeline'" class="cd-timeline">
  <li class="done">
    <span class="dot"></span>
    <div><strong>Soumise</strong><small>{{ demande?.created_at | date:'dd/MM/yyyy' }}</small></div>
  </li>

  <li [ngClass]="etatManager">
    <span class="dot"></span>
    <div>
      <strong>Manager</strong>
      <small *ngIf="etatManager === 'current'">En attente de votre manager</small>
      <small *ngIf="etatManager === 'skip'">Aucune validation manager requise</small>
      <ng-container *ngIf="avis && etatManager !== 'current'">
        <small>{{ refuseeParManager ? 'Refus\xE9e' : 'Approuv\xE9e' }} par {{ avis.nom || 'votre manager' }}<span *ngIf="avis.date"> le {{ avis.date | date:'dd/MM/yyyy' }}</span></small>
        <small *ngIf="avis.motifRefus" class="cd-quote">\xAB {{ avis.motifRefus }} \xBB</small>
        <small *ngIf="avis.commentaire" class="cd-quote">\xAB {{ avis.commentaire }} \xBB</small>
      </ng-container>
    </div>
  </li>

  <li [ngClass]="etatRh">
    <span class="dot"></span>
    <div>
      <strong>RH</strong>
      <small *ngIf="etatRh === 'done'">Valid\xE9e<span *ngIf="demande?.date_validation"> le {{ demande?.date_validation | date:'dd/MM/yyyy' }}</span></small>
      <small *ngIf="etatRh === 'ko'">Refus\xE9e<span *ngIf="demande?.motif_refus"> \u2014 {{ demande?.motif_refus }}</span></small>
      <small *ngIf="etatRh === 'current'">En cours d'examen</small>
      <small *ngIf="etatRh === 'annulee'">Demande annul\xE9e</small>
      <small *ngIf="etatRh === 'todo'">{{ refuseeParManager ? 'Non transmise' : '\xC0 venir' }}</small>
    </div>
  </li>
</ol>
`, styles: ['/* src/app/shared/components/circuit-demande/circuit-demande.component.scss */\n:host {\n  display: block;\n}\n.cd-avis {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin-top: 8px;\n  padding: 7px 10px;\n  border-radius: 8px;\n  font-size: 12px;\n  line-height: 1.45;\n}\n.cd-avis i {\n  font-size: 15px;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n.cd-avis--attente {\n  background: #fef3c7;\n  color: #92400e;\n}\n.cd-avis--ok {\n  background: #ecfdf5;\n  color: #065f46;\n}\n.cd-avis--ko {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.cd-avis__quote {\n  font-style: italic;\n  opacity: 0.9;\n}\n.cd-timeline {\n  list-style: none;\n  display: flex;\n  gap: 0;\n  padding: 0;\n  margin: 10px 0 0;\n}\n.cd-timeline li {\n  flex: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-right: 10px;\n  min-width: 0;\n}\n.cd-timeline li:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  top: 6px;\n  left: 16px;\n  right: 0;\n  height: 2px;\n  background: #e5e7eb;\n}\n.cd-timeline li .dot {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #e5e7eb;\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 1px #d1d5db;\n  position: relative;\n  z-index: 1;\n}\n.cd-timeline li strong {\n  display: block;\n  font-size: 12px;\n  color: #1a1a2e;\n}\n.cd-timeline li small {\n  display: block;\n  font-size: 11px;\n  color: #6b7280;\n  overflow-wrap: anywhere;\n}\n.cd-timeline li.done .dot {\n  background: #059669;\n  box-shadow: 0 0 0 1px #059669;\n}\n.cd-timeline li.done:not(:last-child)::after {\n  background: #6ee7b7;\n}\n.cd-timeline li.ko .dot {\n  background: #dc2626;\n  box-shadow: 0 0 0 1px #dc2626;\n}\n.cd-timeline li.current .dot {\n  background: #f59e0b;\n  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.25);\n}\n.cd-timeline li.skip .dot {\n  background: #fff;\n  border-style: dashed;\n}\n.cd-timeline li.annulee .dot {\n  background: #9ca3af;\n  box-shadow: 0 0 0 1px #9ca3af;\n}\n.cd-quote {\n  font-style: italic;\n}\n/*# sourceMappingURL=circuit-demande.component.css.map */\n'] }]
  }], null, { demande: [{
    type: Input,
    args: [{ required: true }]
  }], variante: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CircuitDemandeComponent, { className: "CircuitDemandeComponent", filePath: "app/shared/components/circuit-demande/circuit-demande.component.ts", lineNumber: 28 });
})();

export {
  CircuitDemandeComponent
};
//# sourceMappingURL=chunk-BQAOTIUG.js.map
