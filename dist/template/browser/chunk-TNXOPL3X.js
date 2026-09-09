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
  ɵɵproperty,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-F67U43FE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/shared/components/help-center/tutoriels-video.component.ts
function TutorielsVideoComponent_div_7_div_1_iframe_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 14);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", t_r1.safeUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function TutorielsVideoComponent_div_7_div_1_video_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 15);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", t_r1.video_url, \u0275\u0275sanitizeUrl);
  }
}
function TutorielsVideoComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275template(2, TutorielsVideoComponent_div_7_div_1_iframe_2_Template, 1, 1, "iframe", 11)(3, TutorielsVideoComponent_div_7_div_1_video_3_Template, 1, 1, "video", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "h5");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", t_r1.isEmbed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !t_r1.isEmbed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.description);
  }
}
function TutorielsVideoComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, TutorielsVideoComponent_div_7_div_1_Template, 9, 4, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.tutoriels);
  }
}
function TutorielsVideoComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucun tutoriel vid\xE9o disponible pour le moment.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5, "Le super administrateur peut ajouter des tutoriels depuis son espace.");
    \u0275\u0275elementEnd()();
  }
}
function TutorielsVideoComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
var TutorielsVideoComponent = class _TutorielsVideoComponent {
  http;
  sanitizer;
  tutoriels = [];
  loading = true;
  constructor(http, sanitizer) {
    this.http = http;
    this.sanitizer = sanitizer;
  }
  ngOnInit() {
    this.http.get(`${environment.apiUrl}/help-center/tutoriels`).subscribe({
      next: (res) => {
        const items = res?.tutoriels || res?.data || [];
        this.tutoriels = items.map((t) => {
          const embedUrl = this.toEmbedUrl(t.video_url);
          const isEmbed = embedUrl !== null;
          return __spreadProps(__spreadValues({}, t), {
            isEmbed,
            safeUrl: isEmbed ? this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl) : null
          });
        });
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  toEmbedUrl(url) {
    if (!url)
      return null;
    let match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
    if (match)
      return `https://www.youtube.com/embed/${match[1]}`;
    match = url.match(/vimeo\.com\/(\d+)/);
    if (match)
      return `https://player.vimeo.com/video/${match[1]}`;
    match = url.match(/dailymotion\.com\/video\/([\w]+)/);
    if (match)
      return `https://www.dailymotion.com/embed/video/${match[1]}`;
    if (url.includes("/embed/") || url.includes("player.vimeo.com"))
      return url;
    return null;
  }
  static \u0275fac = function TutorielsVideoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TutorielsVideoComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TutorielsVideoComponent, selectors: [["app-tutoriels-video"]], decls: 10, vars: 3, consts: [[1, "tuto-page"], [1, "tuto-header"], [1, "isax", "isax-video-circle"], [1, "tuto-sub"], ["class", "tuto-grid", 4, "ngIf"], ["class", "tuto-empty", 4, "ngIf"], ["class", "tuto-loading", 4, "ngIf"], [1, "tuto-grid"], ["class", "tuto-card", 4, "ngFor", "ngForOf"], [1, "tuto-card"], [1, "tuto-video"], ["frameborder", "0", "allowfullscreen", "", 3, "src", 4, "ngIf"], ["controls", "", "preload", "metadata", 3, "src", 4, "ngIf"], [1, "tuto-info"], ["frameborder", "0", "allowfullscreen", "", 3, "src"], ["controls", "", "preload", "metadata", 3, "src"], [1, "tuto-empty"], [1, "tuto-loading"], [1, "spinner-border", "spinner-border-sm", "text-muted"]], template: function TutorielsVideoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4");
      \u0275\u0275element(3, "i", 2);
      \u0275\u0275text(4, " Tutoriels vid\xE9o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Apprenez \xE0 utiliser la plateforme gr\xE2ce \xE0 nos vid\xE9os guides.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, TutorielsVideoComponent_div_7_Template, 2, 1, "div", 4)(8, TutorielsVideoComponent_div_8_Template, 6, 0, "div", 5)(9, TutorielsVideoComponent_div_9_Template, 4, 0, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.tutoriels.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tutoriels.length === 0 && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.tuto-page[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.tuto-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.tuto-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tuto-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #006F78;\n}\n.tuto-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.tuto-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n  padding: 20px 24px;\n}\n.tuto-card[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: box-shadow 0.15s;\n}\n.tuto-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.tuto-video[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 56.25%;\n  background: #f3f4f6;\n}\n.tuto-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], \n.tuto-video[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n  object-fit: cover;\n}\n.tuto-info[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n}\n.tuto-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.tuto-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n}\n.tuto-empty[_ngcontent-%COMP%] {\n  padding: 60px 24px;\n  text-align: center;\n  color: #9ca3af;\n}\n.tuto-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 12px;\n  display: block;\n}\n.tuto-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 4px;\n}\n.tuto-empty[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.tuto-loading[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: #6b7280;\n  font-size: 13px;\n}\n/*# sourceMappingURL=tutoriels-video.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TutorielsVideoComponent, [{
    type: Component,
    args: [{ selector: "app-tutoriels-video", template: `
    <div class="tuto-page">
      <div class="tuto-header">
        <h4><i class="isax isax-video-circle"></i> Tutoriels vid&eacute;o</h4>
        <p class="tuto-sub">Apprenez &agrave; utiliser la plateforme gr&acirc;ce &agrave; nos vid&eacute;os guides.</p>
      </div>

      <div class="tuto-grid" *ngIf="tutoriels.length > 0">
        <div class="tuto-card" *ngFor="let t of tutoriels">
          <div class="tuto-video">
            <iframe *ngIf="t.isEmbed" [src]="t.safeUrl" frameborder="0" allowfullscreen></iframe>
            <video *ngIf="!t.isEmbed" [src]="t.video_url" controls preload="metadata"></video>
          </div>
          <div class="tuto-info">
            <h5>{{ t.titre }}</h5>
            <p>{{ t.description }}</p>
          </div>
        </div>
      </div>

      <div class="tuto-empty" *ngIf="tutoriels.length === 0 && !loading">
        <i class="isax isax-video-circle"></i>
        <p>Aucun tutoriel vid&eacute;o disponible pour le moment.</p>
        <small>Le super administrateur peut ajouter des tutoriels depuis son espace.</small>
      </div>

      <div class="tuto-loading" *ngIf="loading">
        <div class="spinner-border spinner-border-sm text-muted"></div>
        <span>Chargement...</span>
      </div>
    </div>
  `, imports: [CommonModule], styles: ["/* angular:styles/component:scss;7054587bbb8414fac2148f1672ea62b5131d483b12ee4a3b5d6d88ec6915e8b2;C:/Project/Pyramide/Dev/Front-end/Front-end-fork/src/app/shared/components/help-center/tutoriels-video.component.ts */\n.tuto-page {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.tuto-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.tuto-header h4 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tuto-header h4 i {\n  font-size: 18px;\n  color: #006F78;\n}\n.tuto-sub {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.tuto-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n  padding: 20px 24px;\n}\n.tuto-card {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: box-shadow 0.15s;\n}\n.tuto-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.tuto-video {\n  position: relative;\n  padding-top: 56.25%;\n  background: #f3f4f6;\n}\n.tuto-video iframe,\n.tuto-video video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n  object-fit: cover;\n}\n.tuto-info {\n  padding: 14px 16px;\n}\n.tuto-info h5 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.tuto-info p {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n}\n.tuto-empty {\n  padding: 60px 24px;\n  text-align: center;\n  color: #9ca3af;\n}\n.tuto-empty i {\n  font-size: 48px;\n  margin-bottom: 12px;\n  display: block;\n}\n.tuto-empty p {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 4px;\n}\n.tuto-empty small {\n  font-size: 12px;\n}\n.tuto-loading {\n  padding: 40px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: #6b7280;\n  font-size: 13px;\n}\n/*# sourceMappingURL=tutoriels-video.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: DomSanitizer }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TutorielsVideoComponent, { className: "TutorielsVideoComponent", filePath: "app/shared/components/help-center/tutoriels-video.component.ts", lineNumber: 73 });
})();
export {
  TutorielsVideoComponent
};
//# sourceMappingURL=chunk-TNXOPL3X.js.map
