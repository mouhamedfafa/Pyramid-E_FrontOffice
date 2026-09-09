import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  DomSanitizer
} from "./chunk-IN7OGW6T.js";
import {
  HttpClient
} from "./chunk-YONGDJMG.js";
import {
  CommonModule,
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
  ɵɵproperty,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-F67U43FE.js";
import "./chunk-4MWRP73S.js";

// src/app/shared/components/help-center/guide-utilisation.component.ts
function GuideUtilisationComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "iframe", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.safeUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function GuideUtilisationComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "iframe", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.safeUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function GuideUtilisationComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275element(2, "i", 12);
    \u0275\u0275elementStart(3, "div")(4, "h5");
    \u0275\u0275text(5, "Le guide est disponible en t\xE9l\xE9chargement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 13);
    \u0275\u0275element(9, "i", 14);
    \u0275\u0275text(10, " T\xE9l\xE9charger ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.fileName || "Guide d'utilisation");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.rawUrl, \u0275\u0275sanitizeUrl);
  }
}
function GuideUtilisationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucun guide n'a \xE9t\xE9 publi\xE9 pour le moment.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5, "Le super administrateur peut publier un guide depuis son espace.");
    \u0275\u0275elementEnd()();
  }
}
function GuideUtilisationComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
var GuideUtilisationComponent = class _GuideUtilisationComponent {
  http;
  sanitizer;
  safeUrl = null;
  rawUrl = null;
  guideType = "url";
  isPdf = false;
  fileName = "";
  loading = true;
  constructor(http, sanitizer) {
    this.http = http;
    this.sanitizer = sanitizer;
  }
  ngOnInit() {
    this.http.get(`${environment.apiUrl}/help-center/guide`).subscribe({
      next: (res) => {
        const url = res?.guide_url || res?.data?.url;
        this.guideType = res?.guide_type || "url";
        this.fileName = res?.file_name || "";
        if (url) {
          this.rawUrl = url;
          this.isPdf = url.toLowerCase().endsWith(".pdf");
          if (this.guideType === "url" || this.isPdf) {
            this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static \u0275fac = function GuideUtilisationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GuideUtilisationComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GuideUtilisationComponent, selectors: [["app-guide-utilisation"]], decls: 12, vars: 5, consts: [[1, "guide-page"], [1, "guide-header"], [1, "isax", "isax-document-text"], [1, "guide-sub"], ["class", "guide-body", 4, "ngIf"], ["class", "guide-download", 4, "ngIf"], ["class", "guide-empty", 4, "ngIf"], ["class", "guide-loading", 4, "ngIf"], [1, "guide-body"], ["frameborder", "0", 1, "guide-iframe", 3, "src"], [1, "guide-download"], [1, "guide-download-card"], [1, "isax", "isax-document-download"], ["target", "_blank", "download", "", 1, "btn", "btn-primary", "btn-sm", 3, "href"], [1, "isax", "isax-import", "me-1"], [1, "guide-empty"], [1, "guide-loading"], [1, "spinner-border", "spinner-border-sm", "text-muted"]], template: function GuideUtilisationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4");
      \u0275\u0275element(3, "i", 2);
      \u0275\u0275text(4, " Guide d'utilisation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Consultez le guide pour d\xE9couvrir toutes les fonctionnalit\xE9s de la plateforme.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, GuideUtilisationComponent_div_7_Template, 2, 1, "div", 4)(8, GuideUtilisationComponent_div_8_Template, 2, 1, "div", 4)(9, GuideUtilisationComponent_div_9_Template, 11, 2, "div", 5)(10, GuideUtilisationComponent_div_10_Template, 6, 0, "div", 6)(11, GuideUtilisationComponent_div_11_Template, 4, 0, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.guideType === "url" && ctx.safeUrl);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.guideType === "upload" && ctx.isPdf && ctx.safeUrl);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.guideType === "upload" && !ctx.isPdf && ctx.rawUrl);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.rawUrl && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.guide-page[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.guide-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.guide-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.guide-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #006F78;\n}\n.guide-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.guide-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.guide-iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 80vh;\n  border: none;\n}\n.guide-download[_ngcontent-%COMP%] {\n  padding: 40px 24px;\n}\n.guide-download-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px 24px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n}\n.guide-download-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #6366f1;\n  flex-shrink: 0;\n}\n.guide-download-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 2px;\n}\n.guide-download-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n}\n.guide-download-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.guide-empty[_ngcontent-%COMP%] {\n  padding: 60px 24px;\n  text-align: center;\n  color: #9ca3af;\n}\n.guide-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 12px;\n  display: block;\n}\n.guide-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 4px;\n}\n.guide-empty[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.guide-loading[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: #6b7280;\n  font-size: 13px;\n}\n/*# sourceMappingURL=guide-utilisation.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GuideUtilisationComponent, [{
    type: Component,
    args: [{ selector: "app-guide-utilisation", template: `
    <div class="guide-page">
      <div class="guide-header">
        <h4><i class="isax isax-document-text"></i> Guide d'utilisation</h4>
        <p class="guide-sub">Consultez le guide pour d&eacute;couvrir toutes les fonctionnalit&eacute;s de la plateforme.</p>
      </div>

      <!-- Iframe embed (Google Docs publi\xE9, Notion, etc.) -->
      <div class="guide-body" *ngIf="guideType === 'url' && safeUrl">
        <iframe [src]="safeUrl" class="guide-iframe" frameborder="0"></iframe>
      </div>

      <!-- PDF uploaded \u2014 affichage natif navigateur -->
      <div class="guide-body" *ngIf="guideType === 'upload' && isPdf && safeUrl">
        <iframe [src]="safeUrl" class="guide-iframe" frameborder="0"></iframe>
      </div>

      <!-- Fichier upload\xE9 non-PDF (Word, PPT) \u2014 bouton t\xE9l\xE9chargement -->
      <div class="guide-download" *ngIf="guideType === 'upload' && !isPdf && rawUrl">
        <div class="guide-download-card">
          <i class="isax isax-document-download"></i>
          <div>
            <h5>Le guide est disponible en t&eacute;l&eacute;chargement</h5>
            <p>{{ fileName || 'Guide d\\'utilisation' }}</p>
          </div>
          <a [href]="rawUrl" target="_blank" download class="btn btn-primary btn-sm">
            <i class="isax isax-import me-1"></i> T&eacute;l&eacute;charger
          </a>
        </div>
      </div>

      <div class="guide-empty" *ngIf="!rawUrl && !loading">
        <i class="isax isax-document-text"></i>
        <p>Aucun guide n'a &eacute;t&eacute; publi&eacute; pour le moment.</p>
        <small>Le super administrateur peut publier un guide depuis son espace.</small>
      </div>

      <div class="guide-loading" *ngIf="loading">
        <div class="spinner-border spinner-border-sm text-muted"></div>
        <span>Chargement...</span>
      </div>
    </div>
  `, imports: [CommonModule], styles: ["/* angular:styles/component:scss;001d560f29d2cd5c9700b7dac763d992be12fb77c456bc4e028b4d59580702ce;C:/Project/Pyramide/Dev/Front-end/Front-end-fork/src/app/shared/components/help-center/guide-utilisation.component.ts */\n.guide-page {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.guide-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.guide-header h4 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.guide-header h4 i {\n  font-size: 18px;\n  color: #006F78;\n}\n.guide-sub {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.guide-body {\n  padding: 0;\n}\n.guide-iframe {\n  width: 100%;\n  min-height: 80vh;\n  border: none;\n}\n.guide-download {\n  padding: 40px 24px;\n}\n.guide-download-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px 24px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n}\n.guide-download-card i {\n  font-size: 36px;\n  color: #6366f1;\n  flex-shrink: 0;\n}\n.guide-download-card h5 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 2px;\n}\n.guide-download-card p {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n}\n.guide-download-card .btn {\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.guide-empty {\n  padding: 60px 24px;\n  text-align: center;\n  color: #9ca3af;\n}\n.guide-empty i {\n  font-size: 48px;\n  margin-bottom: 12px;\n  display: block;\n}\n.guide-empty p {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 4px;\n}\n.guide-empty small {\n  font-size: 12px;\n}\n.guide-loading {\n  padding: 40px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: #6b7280;\n  font-size: 13px;\n}\n/*# sourceMappingURL=guide-utilisation.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: DomSanitizer }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GuideUtilisationComponent, { className: "GuideUtilisationComponent", filePath: "app/shared/components/help-center/guide-utilisation.component.ts", lineNumber: 74 });
})();
export {
  GuideUtilisationComponent
};
//# sourceMappingURL=chunk-IKJUJ7U5.js.map
