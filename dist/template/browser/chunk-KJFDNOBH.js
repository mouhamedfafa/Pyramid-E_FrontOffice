import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  DomSanitizer
} from "./chunk-47WYM2C2.js";
import {
  HttpClient
} from "./chunk-XZLGMMSK.js";
import {
  CommonModule,
  NgIf
} from "./chunk-ZRUSYSCI.js";
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
} from "./chunk-ON7U2Q36.js";
import "./chunk-4MWRP73S.js";

// src/app/shared/components/help-center/guide-utilisation.component.ts
function GuideUtilisationComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "iframe", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.safeUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function GuideUtilisationComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "iframe", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.safeUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function GuideUtilisationComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275elementStart(3, "div")(4, "h5");
    \u0275\u0275text(5, "Le guide est disponible en t\xE9l\xE9chargement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 19);
    \u0275\u0275element(9, "i", 20);
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
function GuideUtilisationComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucun guide n'a \xE9t\xE9 publi\xE9 pour le moment.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5, "Le super administrateur peut publier un guide depuis son espace.");
    \u0275\u0275elementEnd()();
  }
}
function GuideUtilisationComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 23);
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
  /** Centre d'aide externe, ouvert dans un nouvel onglet depuis l'en-tete. */
  helpCenterUrl = "https://helpcare.pyramide-e.com/";
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GuideUtilisationComponent, selectors: [["app-guide-utilisation"]], decls: 22, vars: 6, consts: [[1, "guide-page"], ["target", "_blank", "rel", "noopener noreferrer", 1, "guide-cta", 3, "href"], [1, "guide-cta-icon"], [1, "isax", "isax-lifebuoy"], [1, "guide-cta-text"], [1, "guide-cta-arrow"], [1, "isax", "isax-export-3"], [1, "guide-header"], [1, "isax", "isax-document-text"], [1, "guide-sub"], ["class", "guide-body", 4, "ngIf"], ["class", "guide-download", 4, "ngIf"], ["class", "guide-empty", 4, "ngIf"], ["class", "guide-loading", 4, "ngIf"], [1, "guide-body"], ["frameborder", "0", 1, "guide-iframe", 3, "src"], [1, "guide-download"], [1, "guide-download-card"], [1, "isax", "isax-document-download"], ["target", "_blank", "download", "", 1, "btn", "btn-primary", "btn-sm", 3, "href"], [1, "isax", "isax-import", "me-1"], [1, "guide-empty"], [1, "guide-loading"], [1, "spinner-border", "spinner-border-sm", "text-muted"]], template: function GuideUtilisationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1)(2, "span", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 4)(5, "strong");
      \u0275\u0275text(6, "Ouvrir Pyramide HelpCare");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "small");
      \u0275\u0275text(8, "Le centre d'aide interactif : retrouvez en quelques secondes le mode op\xE9ratoire de chaque action, selon votre profil.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "span", 5);
      \u0275\u0275element(10, "i", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "h4");
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275text(14, " Guide d'utilisation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 9);
      \u0275\u0275text(16, "Consultez le guide pour d\xE9couvrir toutes les fonctionnalit\xE9s de la plateforme.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(17, GuideUtilisationComponent_div_17_Template, 2, 1, "div", 10)(18, GuideUtilisationComponent_div_18_Template, 2, 1, "div", 10)(19, GuideUtilisationComponent_div_19_Template, 11, 2, "div", 11)(20, GuideUtilisationComponent_div_20_Template, 6, 0, "div", 12)(21, GuideUtilisationComponent_div_21_Template, 4, 0, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("href", ctx.helpCenterUrl, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(16);
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
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.guide-page[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.guide-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 24px;\n  text-decoration: none;\n  background:\n    linear-gradient(\n      90deg,\n      #f0fdfa 0%,\n      #ffffff 70%);\n  border-bottom: 1px solid #e5e7eb;\n  transition: background 0.15s;\n}\n.guide-cta[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #e6fbf7 0%,\n      #f9fdfd 70%);\n}\n.guide-cta[_ngcontent-%COMP%]:hover   .guide-cta-arrow[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.guide-cta-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: #006F78;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.guide-cta-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.guide-cta-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.guide-cta-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.guide-cta-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.guide-cta-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex-shrink: 0;\n  color: #006F78;\n  font-size: 18px;\n  display: flex;\n  transition: transform 0.15s;\n}\n.guide-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.guide-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.guide-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #006F78;\n}\n.guide-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.guide-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.guide-iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 80vh;\n  border: none;\n}\n.guide-download[_ngcontent-%COMP%] {\n  padding: 40px 24px;\n}\n.guide-download-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px 24px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n}\n.guide-download-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #6366f1;\n  flex-shrink: 0;\n}\n.guide-download-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 2px;\n}\n.guide-download-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n}\n.guide-download-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.guide-empty[_ngcontent-%COMP%] {\n  padding: 60px 24px;\n  text-align: center;\n  color: #9ca3af;\n}\n.guide-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 12px;\n  display: block;\n}\n.guide-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 4px;\n}\n.guide-empty[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.guide-loading[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: #6b7280;\n  font-size: 13px;\n}\n/*# sourceMappingURL=guide-utilisation.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GuideUtilisationComponent, [{
    type: Component,
    args: [{ selector: "app-guide-utilisation", template: `
    <div class="guide-page">
      <a class="guide-cta" [href]="helpCenterUrl" target="_blank" rel="noopener noreferrer">
        <span class="guide-cta-icon"><i class="isax isax-lifebuoy"></i></span>
        <span class="guide-cta-text">
          <strong>Ouvrir Pyramide HelpCare</strong>
          <small>Le centre d'aide interactif : retrouvez en quelques secondes le mode op&eacute;ratoire de chaque action, selon votre profil.</small>
        </span>
        <span class="guide-cta-arrow"><i class="isax isax-export-3"></i></span>
      </a>

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
  `, imports: [CommonModule], styles: ["/* angular:styles/component:scss;e115ab54562da2ff077eb31b2e2a9e518c223888455378f31c005c638a2d375f;C:/Project/Pyramide/Dev/Front-end/Front-end-fork/src/app/shared/components/help-center/guide-utilisation.component.ts */\n.guide-page {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.guide-cta {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 24px;\n  text-decoration: none;\n  background:\n    linear-gradient(\n      90deg,\n      #f0fdfa 0%,\n      #ffffff 70%);\n  border-bottom: 1px solid #e5e7eb;\n  transition: background 0.15s;\n}\n.guide-cta:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #e6fbf7 0%,\n      #f9fdfd 70%);\n}\n.guide-cta:hover .guide-cta-arrow {\n  transform: translateX(3px);\n}\n.guide-cta-icon {\n  flex-shrink: 0;\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: #006F78;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.guide-cta-icon i {\n  font-size: 20px;\n}\n.guide-cta-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.guide-cta-text strong {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.guide-cta-text small {\n  font-size: 12px;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.guide-cta-arrow {\n  margin-left: auto;\n  flex-shrink: 0;\n  color: #006F78;\n  font-size: 18px;\n  display: flex;\n  transition: transform 0.15s;\n}\n.guide-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.guide-header h4 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.guide-header h4 i {\n  font-size: 18px;\n  color: #006F78;\n}\n.guide-sub {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.guide-body {\n  padding: 0;\n}\n.guide-iframe {\n  width: 100%;\n  min-height: 80vh;\n  border: none;\n}\n.guide-download {\n  padding: 40px 24px;\n}\n.guide-download-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px 24px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n}\n.guide-download-card i {\n  font-size: 36px;\n  color: #6366f1;\n  flex-shrink: 0;\n}\n.guide-download-card h5 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 2px;\n}\n.guide-download-card p {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n}\n.guide-download-card .btn {\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.guide-empty {\n  padding: 60px 24px;\n  text-align: center;\n  color: #9ca3af;\n}\n.guide-empty i {\n  font-size: 48px;\n  margin-bottom: 12px;\n  display: block;\n}\n.guide-empty p {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 4px;\n}\n.guide-empty small {\n  font-size: 12px;\n}\n.guide-loading {\n  padding: 40px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: #6b7280;\n  font-size: 13px;\n}\n/*# sourceMappingURL=guide-utilisation.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: DomSanitizer }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GuideUtilisationComponent, { className: "GuideUtilisationComponent", filePath: "app/shared/components/help-center/guide-utilisation.component.ts", lineNumber: 92 });
})();
export {
  GuideUtilisationComponent
};
//# sourceMappingURL=chunk-KJFDNOBH.js.map
