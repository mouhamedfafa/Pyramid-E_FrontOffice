import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  HttpClient
} from "./chunk-YONGDJMG.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-O72RKWZB.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-F67U43FE.js";
import "./chunk-4MWRP73S.js";

// src/app/shared/components/help-center/annonces.component.ts
function AnnoncesComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275element(2, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13)(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h5");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getIcon(a_r1.type));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "ann-badge--" + a_r1.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getTypeLabel(a_r1.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 6, a_r1.date, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r1.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.contenu);
  }
}
function AnnoncesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, AnnoncesComponent_div_7_div_1_Template, 14, 9, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.annonces);
  }
}
function AnnoncesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucune annonce pour le moment.");
    \u0275\u0275elementEnd()();
  }
}
function AnnoncesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
var AnnoncesComponent = class _AnnoncesComponent {
  http;
  annonces = [];
  loading = true;
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.http.get(`${environment.apiUrl}/help-center/annonces`).subscribe({
      next: (res) => {
        this.annonces = res?.annonces || res?.data || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  getIcon(type) {
    switch (type) {
      case "update":
        return "isax-arrow-up-1";
      case "feature":
        return "isax-magicpen";
      case "maintenance":
        return "isax-warning-2";
      default:
        return "isax-info-circle";
    }
  }
  getTypeLabel(type) {
    switch (type) {
      case "update":
        return "Mise \xE0 jour";
      case "feature":
        return "Nouveaut\xE9";
      case "maintenance":
        return "Maintenance";
      default:
        return "Info";
    }
  }
  static \u0275fac = function AnnoncesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnnoncesComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnnoncesComponent, selectors: [["app-annonces"]], decls: 10, vars: 3, consts: [[1, "ann-page"], [1, "ann-header"], [1, "isax", "isax-volume-high"], [1, "ann-sub"], ["class", "ann-list", 4, "ngIf"], ["class", "ann-empty", 4, "ngIf"], ["class", "ann-loading", 4, "ngIf"], [1, "ann-list"], ["class", "ann-item", 4, "ngFor", "ngForOf"], [1, "ann-item"], [1, "ann-icon"], [1, "isax", 3, "ngClass"], [1, "ann-content"], [1, "ann-meta"], [1, "ann-badge", 3, "ngClass"], [1, "ann-date"], [1, "ann-empty"], [1, "ann-loading"], [1, "spinner-border", "spinner-border-sm", "text-muted"]], template: function AnnoncesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4");
      \u0275\u0275element(3, "i", 2);
      \u0275\u0275text(4, " Annonces et mises \xE0 jour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Restez inform\xE9 des derni\xE8res nouveaut\xE9s de la plateforme.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, AnnoncesComponent_div_7_Template, 2, 1, "div", 4)(8, AnnoncesComponent_div_8_Template, 4, 0, "div", 5)(9, AnnoncesComponent_div_9_Template, 4, 0, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.annonces.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.annonces.length === 0 && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe], styles: ["\n\n.ann-page[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.ann-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.ann-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ann-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #006F78;\n}\n.ann-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.ann-list[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n}\n.ann-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  padding: 16px 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.ann-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ann-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: #f0fdf4;\n  color: #16a34a;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.ann-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.ann-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.ann-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.ann-badge--update[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.ann-badge--feature[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.ann-badge--info[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.ann-badge--maintenance[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.ann-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ann-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.ann-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n.ann-empty[_ngcontent-%COMP%] {\n  padding: 60px 24px;\n  text-align: center;\n  color: #9ca3af;\n}\n.ann-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 12px;\n  display: block;\n}\n.ann-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0;\n}\n.ann-loading[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: #6b7280;\n  font-size: 13px;\n}\n/*# sourceMappingURL=annonces.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnnoncesComponent, [{
    type: Component,
    args: [{ selector: "app-annonces", template: `
    <div class="ann-page">
      <div class="ann-header">
        <h4><i class="isax isax-volume-high"></i> Annonces et mises &agrave; jour</h4>
        <p class="ann-sub">Restez inform&eacute; des derni&egrave;res nouveaut&eacute;s de la plateforme.</p>
      </div>

      <div class="ann-list" *ngIf="annonces.length > 0">
        <div class="ann-item" *ngFor="let a of annonces">
          <div class="ann-icon">
            <i class="isax" [ngClass]="getIcon(a.type)"></i>
          </div>
          <div class="ann-content">
            <div class="ann-meta">
              <span class="ann-badge" [ngClass]="'ann-badge--' + a.type">{{ getTypeLabel(a.type) }}</span>
              <span class="ann-date">{{ a.date | date:'dd MMM yyyy' }}</span>
            </div>
            <h5>{{ a.titre }}</h5>
            <p>{{ a.contenu }}</p>
          </div>
        </div>
      </div>

      <div class="ann-empty" *ngIf="annonces.length === 0 && !loading">
        <i class="isax isax-volume-high"></i>
        <p>Aucune annonce pour le moment.</p>
      </div>

      <div class="ann-loading" *ngIf="loading">
        <div class="spinner-border spinner-border-sm text-muted"></div>
        <span>Chargement...</span>
      </div>
    </div>
  `, imports: [CommonModule], styles: ["/* angular:styles/component:scss;aa9bda844b99f1b296cc27dcc8a4da552c2bf7bc05fd438ac0a6d0ddb7a296f0;C:/Project/Pyramide/Dev/Front-end/Front-end-fork/src/app/shared/components/help-center/annonces.component.ts */\n.ann-page {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.ann-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.ann-header h4 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ann-header h4 i {\n  font-size: 18px;\n  color: #006F78;\n}\n.ann-sub {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.ann-list {\n  padding: 16px 24px;\n}\n.ann-item {\n  display: flex;\n  gap: 14px;\n  padding: 16px 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.ann-item:last-child {\n  border-bottom: none;\n}\n.ann-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: #f0fdf4;\n  color: #16a34a;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.ann-content {\n  flex: 1;\n}\n.ann-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.ann-badge {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.ann-badge--update {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.ann-badge--feature {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.ann-badge--info {\n  background: #fef3c7;\n  color: #92400e;\n}\n.ann-badge--maintenance {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.ann-date {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ann-content h5 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.ann-content p {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n.ann-empty {\n  padding: 60px 24px;\n  text-align: center;\n  color: #9ca3af;\n}\n.ann-empty i {\n  font-size: 48px;\n  margin-bottom: 12px;\n  display: block;\n}\n.ann-empty p {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0;\n}\n.ann-loading {\n  padding: 40px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: #6b7280;\n  font-size: 13px;\n}\n/*# sourceMappingURL=annonces.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnoncesComponent, { className: "AnnoncesComponent", filePath: "app/shared/components/help-center/annonces.component.ts", lineNumber: 77 });
})();
export {
  AnnoncesComponent
};
//# sourceMappingURL=chunk-NFJPQ5YW.js.map
