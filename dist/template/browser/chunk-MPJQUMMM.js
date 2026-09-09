import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-GE23GOQB.js";
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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-F67U43FE.js";
import "./chunk-4MWRP73S.js";

// src/app/features/superadmin/manage-guide-utilisation/manage-guide-utilisation.component.ts
function ManageGuideUtilisationComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 17);
    \u0275\u0275text(2, "URL du guide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ManageGuideUtilisationComponent_div_16_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.guideUrl, $event) || (ctx_r1.guideUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 19)(5, "strong");
    \u0275\u0275text(6, "Google Docs :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " utilisez Fichier \u2192 Partager \u2192 Publier sur le Web pour obtenir un lien embed. Les liens Drive classiques sont bloqu\xE9s par Google. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.guideUrl);
  }
}
function ManageGuideUtilisationComponent_div_17_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Cliquez ou d\xE9posez un fichier ici");
    \u0275\u0275elementEnd();
  }
}
function ManageGuideUtilisationComponent_div_17_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.selectedFile.name, " (", ctx_r1.formatSize(ctx_r1.selectedFile.size), ")");
  }
}
function ManageGuideUtilisationComponent_div_17_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Fichier actuel : ", ctx_r1.uploadedFileName);
  }
}
function ManageGuideUtilisationComponent_div_17_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275element(2, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.uploadProgress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.uploadProgress, "%");
  }
}
function ManageGuideUtilisationComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 17);
    \u0275\u0275text(2, "Fichier du guide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275listener("click", function ManageGuideUtilisationComponent_div_17_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const fileInput_r4 = \u0275\u0275reference(11);
      return \u0275\u0275resetView(fileInput_r4.click());
    })("dragover", function ManageGuideUtilisationComponent_div_17_Template_div_dragover_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.preventDefault());
    })("drop", function ManageGuideUtilisationComponent_div_17_Template_div_drop_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275element(4, "i", 21);
    \u0275\u0275template(5, ManageGuideUtilisationComponent_div_17_p_5_Template, 2, 0, "p", 22)(6, ManageGuideUtilisationComponent_div_17_p_6_Template, 2, 2, "p", 22)(7, ManageGuideUtilisationComponent_div_17_p_7_Template, 2, 1, "p", 22);
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9, "PDF, Word, PowerPoint \u2014 max 50 Mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 23, 0);
    \u0275\u0275listener("change", function ManageGuideUtilisationComponent_div_17_Template_input_change_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ManageGuideUtilisationComponent_div_17_div_12_Template, 5, 3, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.selectedFile && !ctx_r1.uploadedFileName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedFile && ctx_r1.uploadedFileName);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.uploading);
  }
}
function ManageGuideUtilisationComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "label", 17);
    \u0275\u0275text(2, "Guide actuel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30);
    \u0275\u0275element(4, "i", 31);
    \u0275\u0275elementStart(5, "a", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r1.currentGuideUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentGuideType === "upload" ? "Voir le fichier upload\xE9" : ctx_r1.currentGuideUrl, " ");
  }
}
function ManageGuideUtilisationComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, "Enregistr\xE9 avec succ\xE8s");
    \u0275\u0275elementEnd();
  }
}
var ManageGuideUtilisationComponent = class _ManageGuideUtilisationComponent {
  http;
  guideUrl = "";
  guideType = "url";
  currentGuideUrl = "";
  currentGuideType = "url";
  uploadedFileName = "";
  selectedFile = null;
  uploading = false;
  uploadProgress = 0;
  saving = false;
  saved = false;
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.http.get(`${environment.apiUrl}/help-center/guide`).subscribe({
      next: (res) => {
        this.guideUrl = res?.guide_url || "";
        this.guideType = res?.guide_type || "url";
        this.currentGuideUrl = res?.guide_url || "";
        this.currentGuideType = res?.guide_type || "url";
        if (res?.guide_type === "upload" && res?.file_name) {
          this.uploadedFileName = res.file_name;
        }
      },
      error: () => {
      }
    });
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }
  onDrop(event) {
    event.preventDefault();
    if (event.dataTransfer?.files?.length) {
      this.selectedFile = event.dataTransfer.files[0];
    }
  }
  formatSize(bytes) {
    if (bytes < 1024 * 1024)
      return (bytes / 1024).toFixed(0) + " Ko";
    return (bytes / (1024 * 1024)).toFixed(1) + " Mo";
  }
  save() {
    if (this.guideType === "upload" && this.selectedFile) {
      this.uploadFile();
    } else {
      this.saveUrl();
    }
  }
  saveUrl() {
    this.saving = true;
    this.saved = false;
    this.http.post(`${environment.apiUrl}/help-center/guide`, {
      guide_url: this.guideUrl,
      guide_type: "url"
    }).subscribe({
      next: (res) => {
        this.saving = false;
        this.saved = true;
        this.currentGuideUrl = this.guideUrl;
        this.currentGuideType = "url";
      },
      error: () => {
        this.saving = false;
      }
    });
  }
  uploadFile() {
    this.uploading = true;
    this.uploadProgress = 0;
    this.saved = false;
    const formData = new FormData();
    formData.append("guide_file", this.selectedFile);
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", (e) => {
      if (e.lengthComputable) {
        this.uploadProgress = Math.round(e.loaded / e.total * 100);
      }
    });
    xhr.addEventListener("load", () => {
      this.uploading = false;
      if (xhr.status >= 200 && xhr.status < 300) {
        const res = JSON.parse(xhr.responseText);
        this.saved = true;
        this.currentGuideUrl = res.guide_url || "";
        this.currentGuideType = "upload";
        this.uploadedFileName = this.selectedFile?.name || "";
        this.selectedFile = null;
      }
    });
    xhr.addEventListener("error", () => {
      this.uploading = false;
    });
    const token = localStorage.getItem("pyramide_token");
    xhr.open("POST", `${environment.apiUrl}/help-center/guide/upload`);
    if (token)
      xhr.setRequestHeader("Authorization", `Bearer ${token}`);
    xhr.send(formData);
  }
  static \u0275fac = function ManageGuideUtilisationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManageGuideUtilisationComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageGuideUtilisationComponent, selectors: [["app-manage-guide-utilisation"]], decls: 24, vars: 10, consts: [["fileInput", ""], [1, "manage-guide"], [1, "mg-header"], [1, "isax", "isax-document-text"], [1, "mg-sub"], [1, "mg-body"], [1, "mg-source-toggle"], ["type", "button", 1, "mg-source-btn", 3, "click"], [1, "isax", "isax-link-21"], [1, "isax", "isax-export-1"], ["class", "mg-card", 4, "ngIf"], ["class", "mg-current", 4, "ngIf"], [1, "mg-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "isax", "isax-tick-circle", "me-1"], ["class", "mg-success", 4, "ngIf"], [1, "mg-card"], [1, "mg-label"], ["type", "url", "placeholder", "https://docs.google.com/document/d/.../pub", 1, "mg-input", 3, "ngModelChange", "ngModel"], [1, "mg-hint"], [1, "mg-dropzone", 3, "click", "dragover", "drop"], [1, "isax", "isax-document-upload"], [4, "ngIf"], ["type", "file", "accept", ".pdf,.doc,.docx,.ppt,.pptx", "hidden", "", 3, "change"], ["class", "mg-progress", 4, "ngIf"], [1, "mg-progress"], [1, "mg-progress-bar"], [1, "mg-progress-fill"], [1, "mg-progress-text"], [1, "mg-current"], [1, "mg-current-info"], [1, "isax", "isax-tick-circle"], ["target", "_blank", 1, "mg-current-link", 3, "href"], [1, "mg-success"]], template: function ManageGuideUtilisationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h4");
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275text(5, " Gestion du Guide d'utilisation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Publiez un guide visible par tous les utilisateurs (lien ou fichier).");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "button", 7);
      \u0275\u0275listener("click", function ManageGuideUtilisationComponent_Template_button_click_10_listener() {
        return ctx.guideType = "url";
      });
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275text(12, " Lien URL ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function ManageGuideUtilisationComponent_Template_button_click_13_listener() {
        return ctx.guideType = "upload";
      });
      \u0275\u0275element(14, "i", 9);
      \u0275\u0275text(15, " Uploader un fichier ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, ManageGuideUtilisationComponent_div_16_Template, 8, 1, "div", 10)(17, ManageGuideUtilisationComponent_div_17_Template, 13, 4, "div", 10)(18, ManageGuideUtilisationComponent_div_18_Template, 7, 2, "div", 11);
      \u0275\u0275elementStart(19, "div", 12)(20, "button", 13);
      \u0275\u0275listener("click", function ManageGuideUtilisationComponent_Template_button_click_20_listener() {
        return ctx.save();
      });
      \u0275\u0275element(21, "i", 14);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, ManageGuideUtilisationComponent_span_23_Template, 2, 0, "span", 15);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275classProp("active", ctx.guideType === "url");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.guideType === "upload");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.guideType === "url");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.guideType === "upload");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentGuideUrl && !ctx.saving);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving || ctx.uploading);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.uploading ? "Upload en cours..." : ctx.saving ? "Enregistrement..." : "Enregistrer", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saved);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.manage-guide[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n}\n.mg-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.mg-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mg-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6366f1;\n}\n.mg-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.mg-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.mg-source-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.mg-source-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.15s;\n}\n.mg-source-btn.active[_ngcontent-%COMP%] {\n  border-color: #6366f1;\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.mg-source-btn[_ngcontent-%COMP%]:hover {\n  border-color: #a5b4fc;\n}\n.mg-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mg-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n  display: block;\n}\n.mg-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.mg-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.mg-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 6px;\n  display: block;\n  line-height: 1.5;\n}\n.mg-hint[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.mg-dropzone[_ngcontent-%COMP%] {\n  border: 2px dashed #d1d5db;\n  border-radius: 10px;\n  padding: 28px;\n  text-align: center;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n}\n.mg-dropzone[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n  background: #fafafe;\n}\n.mg-dropzone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #9ca3af;\n  display: block;\n  margin-bottom: 8px;\n}\n.mg-dropzone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #374151;\n  margin: 0 0 4px;\n}\n.mg-dropzone[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.mg-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 10px;\n}\n.mg-progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.mg-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #6366f1;\n  border-radius: 3px;\n  transition: width 0.2s;\n}\n.mg-progress-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4f46e5;\n  min-width: 36px;\n}\n.mg-current[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 14px 16px;\n  background: #f0fdf4;\n  border-radius: 8px;\n  border: 1px solid #bbf7d0;\n}\n.mg-current-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mg-current-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-size: 16px;\n}\n.mg-current-link[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #15803d;\n  text-decoration: underline;\n  word-break: break-all;\n}\n.mg-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.mg-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 8px 20px;\n  border-radius: 8px;\n}\n.mg-success[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #16a34a;\n  font-weight: 500;\n}\n/*# sourceMappingURL=manage-guide-utilisation.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageGuideUtilisationComponent, [{
    type: Component,
    args: [{ selector: "app-manage-guide-utilisation", template: `
    <div class="manage-guide">
      <div class="mg-header">
        <div>
          <h4><i class="isax isax-document-text"></i> Gestion du Guide d'utilisation</h4>
          <p class="mg-sub">Publiez un guide visible par tous les utilisateurs (lien ou fichier).</p>
        </div>
      </div>

      <div class="mg-body">
        <!-- Source toggle -->
        <div class="mg-source-toggle">
          <button type="button" class="mg-source-btn" [class.active]="guideType === 'url'"
                  (click)="guideType = 'url'">
            <i class="isax isax-link-21"></i> Lien URL
          </button>
          <button type="button" class="mg-source-btn" [class.active]="guideType === 'upload'"
                  (click)="guideType = 'upload'">
            <i class="isax isax-export-1"></i> Uploader un fichier
          </button>
        </div>

        <!-- URL mode -->
        <div class="mg-card" *ngIf="guideType === 'url'">
          <label class="mg-label">URL du guide</label>
          <input type="url" class="mg-input" [(ngModel)]="guideUrl"
                 placeholder="https://docs.google.com/document/d/.../pub">
          <small class="mg-hint">
            <strong>Google Docs :</strong> utilisez Fichier &rarr; Partager &rarr; Publier sur le Web pour obtenir un lien embed.
            Les liens Drive classiques sont bloqu\xE9s par Google.
          </small>
        </div>

        <!-- Upload mode -->
        <div class="mg-card" *ngIf="guideType === 'upload'">
          <label class="mg-label">Fichier du guide</label>
          <div class="mg-dropzone" (click)="fileInput.click()"
               (dragover)="$event.preventDefault()" (drop)="onDrop($event)">
            <i class="isax isax-document-upload"></i>
            <p *ngIf="!selectedFile && !uploadedFileName">Cliquez ou d\xE9posez un fichier ici</p>
            <p *ngIf="selectedFile">{{ selectedFile.name }} ({{ formatSize(selectedFile.size) }})</p>
            <p *ngIf="!selectedFile && uploadedFileName">Fichier actuel : {{ uploadedFileName }}</p>
            <small>PDF, Word, PowerPoint \u2014 max 50 Mo</small>
          </div>
          <input #fileInput type="file" accept=".pdf,.doc,.docx,.ppt,.pptx" hidden
                 (change)="onFileSelected($event)">
          <div class="mg-progress" *ngIf="uploading">
            <div class="mg-progress-bar">
              <div class="mg-progress-fill" [style.width.%]="uploadProgress"></div>
            </div>
            <span class="mg-progress-text">{{ uploadProgress }}%</span>
          </div>
        </div>

        <!-- Current guide preview -->
        <div class="mg-current" *ngIf="currentGuideUrl && !saving">
          <label class="mg-label">Guide actuel</label>
          <div class="mg-current-info">
            <i class="isax isax-tick-circle"></i>
            <a [href]="currentGuideUrl" target="_blank" class="mg-current-link">
              {{ currentGuideType === 'upload' ? 'Voir le fichier upload\xE9' : currentGuideUrl }}
            </a>
          </div>
        </div>

        <div class="mg-actions">
          <button class="btn btn-primary" (click)="save()" [disabled]="saving || uploading">
            <i class="isax isax-tick-circle me-1"></i>
            {{ uploading ? 'Upload en cours...' : saving ? 'Enregistrement...' : 'Enregistrer' }}
          </button>
          <span class="mg-success" *ngIf="saved">Enregistr\xE9 avec succ\xE8s</span>
        </div>
      </div>
    </div>
  `, imports: [CommonModule, FormsModule], styles: ["/* angular:styles/component:scss;5ad85e17ed164241cd0a7a8928ba7554575f20848ab67a749551baa03a74cc54;C:/Project/Pyramide/Dev/Front-end/Front-end-fork/src/app/features/superadmin/manage-guide-utilisation/manage-guide-utilisation.component.ts */\n.manage-guide {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n}\n.mg-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.mg-header h4 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mg-header h4 i {\n  font-size: 18px;\n  color: #6366f1;\n}\n.mg-sub {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.mg-body {\n  padding: 24px;\n}\n.mg-source-toggle {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.mg-source-btn {\n  padding: 8px 16px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.15s;\n}\n.mg-source-btn.active {\n  border-color: #6366f1;\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.mg-source-btn:hover {\n  border-color: #a5b4fc;\n}\n.mg-card {\n  margin-bottom: 20px;\n}\n.mg-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n  display: block;\n}\n.mg-input {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.mg-input:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.mg-hint {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 6px;\n  display: block;\n  line-height: 1.5;\n}\n.mg-hint strong {\n  color: #6b7280;\n}\n.mg-dropzone {\n  border: 2px dashed #d1d5db;\n  border-radius: 10px;\n  padding: 28px;\n  text-align: center;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n}\n.mg-dropzone:hover {\n  border-color: #6366f1;\n  background: #fafafe;\n}\n.mg-dropzone i {\n  font-size: 36px;\n  color: #9ca3af;\n  display: block;\n  margin-bottom: 8px;\n}\n.mg-dropzone p {\n  font-size: 13px;\n  color: #374151;\n  margin: 0 0 4px;\n}\n.mg-dropzone small {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.mg-progress {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 10px;\n}\n.mg-progress-bar {\n  flex: 1;\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.mg-progress-fill {\n  height: 100%;\n  background: #6366f1;\n  border-radius: 3px;\n  transition: width 0.2s;\n}\n.mg-progress-text {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4f46e5;\n  min-width: 36px;\n}\n.mg-current {\n  margin-bottom: 20px;\n  padding: 14px 16px;\n  background: #f0fdf4;\n  border-radius: 8px;\n  border: 1px solid #bbf7d0;\n}\n.mg-current-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mg-current-info i {\n  color: #16a34a;\n  font-size: 16px;\n}\n.mg-current-link {\n  font-size: 13px;\n  color: #15803d;\n  text-decoration: underline;\n  word-break: break-all;\n}\n.mg-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.mg-actions .btn {\n  font-size: 13px;\n  padding: 8px 20px;\n  border-radius: 8px;\n}\n.mg-success {\n  font-size: 12px;\n  color: #16a34a;\n  font-weight: 500;\n}\n/*# sourceMappingURL=manage-guide-utilisation.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageGuideUtilisationComponent, { className: "ManageGuideUtilisationComponent", filePath: "app/features/superadmin/manage-guide-utilisation/manage-guide-utilisation.component.ts", lineNumber: 120 });
})();
export {
  ManageGuideUtilisationComponent
};
//# sourceMappingURL=chunk-MPJQUMMM.js.map
