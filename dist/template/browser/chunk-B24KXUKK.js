import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-RNP5DT5T.js";
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ON7U2Q36.js";
import "./chunk-4MWRP73S.js";

// src/app/features/superadmin/manage-video-acceuil/manage-video-acceuil.component.ts
function ManageVideoAcceuilComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "label", 24);
    \u0275\u0275text(2, "URL de la vid\xE9o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ManageVideoAcceuilComponent_div_23_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.accueilUrl, $event) || (ctx_r1.accueilUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 26)(5, "strong");
    \u0275\u0275text(6, "Google Docs :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " utilisez Fichier \u2192 Partager \u2192 Publier sur le Web pour obtenir un lien embed. Les liens Drive classiques sont bloqu\xE9s par Google. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.accueilUrl);
  }
}
function ManageVideoAcceuilComponent_div_24_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Cliquez ou d\xE9posez un fichier ici");
    \u0275\u0275elementEnd();
  }
}
function ManageVideoAcceuilComponent_div_24_p_6_Template(rf, ctx) {
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
function ManageVideoAcceuilComponent_div_24_p_7_Template(rf, ctx) {
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
function ManageVideoAcceuilComponent_div_24_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275element(2, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
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
function ManageVideoAcceuilComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "label", 24);
    \u0275\u0275text(2, "Fichier du guide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275listener("click", function ManageVideoAcceuilComponent_div_24_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const fileInput_r4 = \u0275\u0275reference(11);
      return \u0275\u0275resetView(fileInput_r4.click());
    })("dragover", function ManageVideoAcceuilComponent_div_24_Template_div_dragover_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.preventDefault());
    })("drop", function ManageVideoAcceuilComponent_div_24_Template_div_drop_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275element(4, "i", 28);
    \u0275\u0275template(5, ManageVideoAcceuilComponent_div_24_p_5_Template, 2, 0, "p", 29)(6, ManageVideoAcceuilComponent_div_24_p_6_Template, 2, 2, "p", 29)(7, ManageVideoAcceuilComponent_div_24_p_7_Template, 2, 1, "p", 29);
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9, "PDF, Word, PowerPoint \u2014 max 50 Mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 30, 0);
    \u0275\u0275listener("change", function ManageVideoAcceuilComponent_div_24_Template_input_change_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ManageVideoAcceuilComponent_div_24_div_12_Template, 5, 3, "div", 31);
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
function ManageVideoAcceuilComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "label", 24);
    \u0275\u0275text(2, "Vid\xE9o actuel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275element(4, "i", 38);
    \u0275\u0275elementStart(5, "a", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r1.currentAccueilUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentaccueilType === "upload" ? "Voir le fichier upload\xE9" : ctx_r1.currentAccueilUrl, " ");
  }
}
function ManageVideoAcceuilComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Enregistr\xE9 avec succ\xE8s");
    \u0275\u0275elementEnd();
  }
}
function ManageVideoAcceuilComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
var ManageVideoAcceuilComponent = class _ManageVideoAcceuilComponent {
  http;
  accueilUrl = "";
  accueilType = "url";
  currentAccueilUrl = "";
  currentaccueilType = "url";
  uploadedFileName = "";
  selectedFile = null;
  uploading = false;
  uploadProgress = 0;
  saving = false;
  saved = false;
  estActif = true;
  toggling = false;
  errorMessage = "";
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.http.get(`${environment.apiUrl}/help-center/accueil`).subscribe({
      next: (res) => {
        this.accueilUrl = res?.accueil_url || "";
        this.accueilType = res?.accueil_type || "url";
        this.currentAccueilUrl = res?.accueil_url || "";
        this.currentaccueilType = res?.accueil_type || "url";
        this.estActif = res?.est_actif ?? true;
        if (res?.accueil_type === "upload" && res?.file_name) {
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
  toggleVisibility() {
    this.toggling = true;
    this.errorMessage = "";
    this.http.post(`${environment.apiUrl}/help-center/accueil/toggle`, {}).subscribe({
      next: (res) => {
        this.estActif = res.est_actif;
        this.toggling = false;
      },
      error: (err) => {
        this.toggling = false;
        this.errorMessage = this.extractErrorMessage(err);
      }
    });
  }
  save() {
    if (this.accueilType === "upload" && this.selectedFile) {
      this.uploadFile();
    } else {
      this.saveUrl();
    }
  }
  saveUrl() {
    this.saving = true;
    this.saved = false;
    this.errorMessage = "";
    this.http.post(`${environment.apiUrl}/help-center/accueil`, {
      accueil_url: this.accueilUrl,
      accueil_type: "url"
    }).subscribe({
      next: (res) => {
        this.saving = false;
        this.saved = true;
        this.currentAccueilUrl = this.accueilUrl;
        this.currentaccueilType = "url";
      },
      error: (err) => {
        this.saving = false;
        this.errorMessage = this.extractErrorMessage(err);
      }
    });
  }
  extractErrorMessage(err) {
    if (err?.status === 0) {
      return "Impossible de contacter le serveur. V\xE9rifiez que le backend est d\xE9marr\xE9.";
    }
    const validationErrors = err?.error?.errors;
    if (validationErrors) {
      const first = Object.values(validationErrors)[0];
      if (Array.isArray(first) && first.length)
        return first[0];
    }
    if (err?.error?.message)
      return err.error.message;
    if (err?.status === 403)
      return "Vous n'avez pas la permission de g\xE9rer cette section.";
    if (err?.status === 401)
      return "Session expir\xE9e, veuillez vous reconnecter.";
    return "Une erreur est survenue lors de l'enregistrement.";
  }
  uploadFile() {
    this.uploading = true;
    this.uploadProgress = 0;
    this.saved = false;
    this.errorMessage = "";
    const formData = new FormData();
    formData.append("accueil_file", this.selectedFile);
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
        this.currentAccueilUrl = res.accueil_url || "";
        this.currentaccueilType = "upload";
        this.uploadedFileName = this.selectedFile?.name || "";
        this.selectedFile = null;
      } else {
        this.errorMessage = this.extractErrorMessage({ status: xhr.status, error: this.tryParseJson(xhr.responseText) });
      }
    });
    xhr.addEventListener("error", () => {
      this.uploading = false;
      this.errorMessage = this.extractErrorMessage({ status: 0 });
    });
    const token = localStorage.getItem("pyramide_token");
    xhr.open("POST", `${environment.apiUrl}/help-center/accueil/upload`);
    if (token)
      xhr.setRequestHeader("Authorization", `Bearer ${token}`);
    xhr.send(formData);
  }
  tryParseJson(text) {
    try {
      return JSON.parse(text);
    } catch {
      return null;
    }
  }
  static \u0275fac = function ManageVideoAcceuilComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManageVideoAcceuilComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageVideoAcceuilComponent, selectors: [["app-manage-video-acceuil"]], decls: 32, vars: 18, consts: [["fileInput", ""], [1, "manage-guide"], [1, "mg-header"], [1, "mg-header-top"], [1, "isax", "isax-document-text"], [1, "mg-sub"], [1, "mg-toggle-wrapper"], [1, "mg-toggle"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "mg-toggle-slider"], [1, "mg-toggle-label"], [1, "mg-body"], [1, "mg-source-toggle"], ["type", "button", 1, "mg-source-btn", 3, "click"], [1, "isax", "isax-link-21"], [1, "isax", "isax-export-1"], ["class", "mg-card", 4, "ngIf"], ["class", "mg-current", 4, "ngIf"], [1, "mg-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "isax", "isax-tick-circle", "me-1"], ["class", "mg-success", 4, "ngIf"], ["class", "mg-error", 4, "ngIf"], [1, "mg-card"], [1, "mg-label"], ["type", "url", "placeholder", "https://docs.google.com/document/d/.../pub", 1, "mg-input", 3, "ngModelChange", "ngModel"], [1, "mg-hint"], [1, "mg-dropzone", 3, "click", "dragover", "drop"], [1, "isax", "isax-document-upload"], [4, "ngIf"], ["type", "file", "accept", ".pdf,.doc,.docx,.ppt,.pptx", "hidden", "", 3, "change"], ["class", "mg-progress", 4, "ngIf"], [1, "mg-progress"], [1, "mg-progress-bar"], [1, "mg-progress-fill"], [1, "mg-progress-text"], [1, "mg-current"], [1, "mg-current-info"], [1, "isax", "isax-tick-circle"], ["target", "_blank", 1, "mg-current-link", 3, "href"], [1, "mg-success"], [1, "mg-error"]], template: function ManageVideoAcceuilComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div")(4, "h4");
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275text(6, " Gestion Vid\xE9o de presentation dans la page d'accueil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "Publiez une vid\xE9o visible par tous les utilisateurs (lien ou fichier).");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "label", 7)(11, "input", 8);
      \u0275\u0275listener("change", function ManageVideoAcceuilComponent_Template_input_change_11_listener() {
        return ctx.toggleVisibility();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 10);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "button", 13);
      \u0275\u0275listener("click", function ManageVideoAcceuilComponent_Template_button_click_17_listener() {
        return ctx.accueilType = "url";
      });
      \u0275\u0275element(18, "i", 14);
      \u0275\u0275text(19, " Lien URL ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 13);
      \u0275\u0275listener("click", function ManageVideoAcceuilComponent_Template_button_click_20_listener() {
        return ctx.accueilType = "upload";
      });
      \u0275\u0275element(21, "i", 15);
      \u0275\u0275text(22, " Uploader un fichier ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(23, ManageVideoAcceuilComponent_div_23_Template, 8, 1, "div", 16)(24, ManageVideoAcceuilComponent_div_24_Template, 13, 4, "div", 16)(25, ManageVideoAcceuilComponent_div_25_Template, 7, 2, "div", 17);
      \u0275\u0275elementStart(26, "div", 18)(27, "button", 19);
      \u0275\u0275listener("click", function ManageVideoAcceuilComponent_Template_button_click_27_listener() {
        return ctx.save();
      });
      \u0275\u0275element(28, "i", 20);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, ManageVideoAcceuilComponent_span_30_Template, 2, 0, "span", 21)(31, ManageVideoAcceuilComponent_span_31_Template, 2, 1, "span", 22);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275classProp("active", ctx.estActif);
      \u0275\u0275advance();
      \u0275\u0275property("checked", ctx.estActif)("disabled", ctx.toggling);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.estActif);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.estActif ? "Visible" : "Masqu\xE9e", " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.accueilType === "url");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.accueilType === "upload");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.accueilType === "url");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.accueilType === "upload");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentAccueilUrl && !ctx.saving);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving || ctx.uploading);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.uploading ? "Upload en cours..." : ctx.saving ? "Enregistrement..." : "Enregistrer", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saved);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.manage-guide[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n}\n.mg-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.mg-header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\n.mg-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mg-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6366f1;\n}\n.mg-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.mg-toggle-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.mg-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 44px;\n  height: 24px;\n  cursor: pointer;\n  display: inline-block;\n}\n.mg-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.mg-toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: #d1d5db;\n  border-radius: 24px;\n  transition: background 0.2s;\n}\n.mg-toggle-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  left: 3px;\n  top: 3px;\n  background: #fff;\n  border-radius: 50%;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.mg-toggle.active[_ngcontent-%COMP%]   .mg-toggle-slider[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.mg-toggle.active[_ngcontent-%COMP%]   .mg-toggle-slider[_ngcontent-%COMP%]::before {\n  transform: translateX(20px);\n}\n.mg-toggle-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #9ca3af;\n}\n.mg-toggle-label.active[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.mg-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.mg-source-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.mg-source-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.15s;\n}\n.mg-source-btn.active[_ngcontent-%COMP%] {\n  border-color: #6366f1;\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.mg-source-btn[_ngcontent-%COMP%]:hover {\n  border-color: #a5b4fc;\n}\n.mg-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mg-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n  display: block;\n}\n.mg-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.mg-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.mg-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 6px;\n  display: block;\n  line-height: 1.5;\n}\n.mg-hint[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.mg-dropzone[_ngcontent-%COMP%] {\n  border: 2px dashed #d1d5db;\n  border-radius: 10px;\n  padding: 28px;\n  text-align: center;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n}\n.mg-dropzone[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n  background: #fafafe;\n}\n.mg-dropzone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #9ca3af;\n  display: block;\n  margin-bottom: 8px;\n}\n.mg-dropzone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #374151;\n  margin: 0 0 4px;\n}\n.mg-dropzone[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.mg-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 10px;\n}\n.mg-progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.mg-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #6366f1;\n  border-radius: 3px;\n  transition: width 0.2s;\n}\n.mg-progress-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4f46e5;\n  min-width: 36px;\n}\n.mg-current[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 14px 16px;\n  background: #f0fdf4;\n  border-radius: 8px;\n  border: 1px solid #bbf7d0;\n}\n.mg-current-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mg-current-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-size: 16px;\n}\n.mg-current-link[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #15803d;\n  text-decoration: underline;\n  word-break: break-all;\n}\n.mg-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.mg-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 8px 20px;\n  border-radius: 8px;\n}\n.mg-success[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #16a34a;\n  font-weight: 500;\n}\n.mg-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #dc2626;\n  font-weight: 500;\n}\n/*# sourceMappingURL=manage-video-acceuil.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageVideoAcceuilComponent, [{
    type: Component,
    args: [{ selector: "app-manage-video-acceuil", template: `
    <div class="manage-guide">
      <div class="mg-header">
        <div class="mg-header-top">
          <div>
            <h4><i class="isax isax-document-text"></i> Gestion Vid\xE9o de presentation dans la page d'accueil</h4>
            <p class="mg-sub">Publiez une vid\xE9o visible par tous les utilisateurs (lien ou fichier).</p>
          </div>
          <div class="mg-toggle-wrapper">
            <label class="mg-toggle" [class.active]="estActif">
              <input type="checkbox" [checked]="estActif" (change)="toggleVisibility()" [disabled]="toggling">
              <span class="mg-toggle-slider"></span>
            </label>
            <span class="mg-toggle-label" [class.active]="estActif">
              {{ estActif ? 'Visible' : 'Masqu\xE9e' }}
            </span>
          </div>
        </div>
      </div>

      <div class="mg-body">
        <!-- Source toggle -->
        <div class="mg-source-toggle">
          <button type="button" class="mg-source-btn" [class.active]="accueilType === 'url'"
                  (click)="accueilType = 'url'">
            <i class="isax isax-link-21"></i> Lien URL
          </button>
          <button type="button" class="mg-source-btn" [class.active]="accueilType === 'upload'"
                  (click)="accueilType = 'upload'">
            <i class="isax isax-export-1"></i> Uploader un fichier
          </button>
        </div>

        <!-- URL mode -->
        <div class="mg-card" *ngIf="accueilType === 'url'">
          <label class="mg-label">URL de la vid\xE9o</label>
          <input type="url" class="mg-input" [(ngModel)]="accueilUrl"
                 placeholder="https://docs.google.com/document/d/.../pub">
          <small class="mg-hint">
            <strong>Google Docs :</strong> utilisez Fichier &rarr; Partager &rarr; Publier sur le Web pour obtenir un lien embed.
            Les liens Drive classiques sont bloqu\xE9s par Google.
          </small>
        </div>

        <!-- Upload mode -->
        <div class="mg-card" *ngIf="accueilType === 'upload'">
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
        <div class="mg-current" *ngIf="currentAccueilUrl && !saving">
          <label class="mg-label">Vid\xE9o actuel</label>
          <div class="mg-current-info">
            <i class="isax isax-tick-circle"></i>
            <a [href]="currentAccueilUrl" target="_blank" class="mg-current-link">
              {{ currentaccueilType === 'upload' ? 'Voir le fichier upload\xE9' : currentAccueilUrl }}
            </a>
          </div>
        </div>

        <div class="mg-actions">
          <button class="btn btn-primary" (click)="save()" [disabled]="saving || uploading">
            <i class="isax isax-tick-circle me-1"></i>
            {{ uploading ? 'Upload en cours...' : saving ? 'Enregistrement...' : 'Enregistrer' }}
          </button>
          <span class="mg-success" *ngIf="saved">Enregistr\xE9 avec succ\xE8s</span>
          <span class="mg-error" *ngIf="errorMessage">{{ errorMessage }}</span>
        </div>
      </div>
    </div>
  `, imports: [CommonModule, FormsModule], styles: ['/* angular:styles/component:scss;20fcfa921fabfb68b2afe2621d26790896d9c02e2e7c755448f0bf7a10e5ba3a;C:/Project/Pyramide/Dev/Front-end/Front-end-fork/src/app/features/superadmin/manage-video-acceuil/manage-video-acceuil.component.ts */\n.manage-guide {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n}\n.mg-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.mg-header-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\n.mg-header h4 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mg-header h4 i {\n  font-size: 18px;\n  color: #6366f1;\n}\n.mg-sub {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.mg-toggle-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.mg-toggle {\n  position: relative;\n  width: 44px;\n  height: 24px;\n  cursor: pointer;\n  display: inline-block;\n}\n.mg-toggle input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.mg-toggle-slider {\n  position: absolute;\n  inset: 0;\n  background: #d1d5db;\n  border-radius: 24px;\n  transition: background 0.2s;\n}\n.mg-toggle-slider::before {\n  content: "";\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  left: 3px;\n  top: 3px;\n  background: #fff;\n  border-radius: 50%;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.mg-toggle.active .mg-toggle-slider {\n  background: #16a34a;\n}\n.mg-toggle.active .mg-toggle-slider::before {\n  transform: translateX(20px);\n}\n.mg-toggle-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #9ca3af;\n}\n.mg-toggle-label.active {\n  color: #16a34a;\n}\n.mg-body {\n  padding: 24px;\n}\n.mg-source-toggle {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.mg-source-btn {\n  padding: 8px 16px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.15s;\n}\n.mg-source-btn.active {\n  border-color: #6366f1;\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.mg-source-btn:hover {\n  border-color: #a5b4fc;\n}\n.mg-card {\n  margin-bottom: 20px;\n}\n.mg-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n  display: block;\n}\n.mg-input {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.mg-input:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.mg-hint {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 6px;\n  display: block;\n  line-height: 1.5;\n}\n.mg-hint strong {\n  color: #6b7280;\n}\n.mg-dropzone {\n  border: 2px dashed #d1d5db;\n  border-radius: 10px;\n  padding: 28px;\n  text-align: center;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n}\n.mg-dropzone:hover {\n  border-color: #6366f1;\n  background: #fafafe;\n}\n.mg-dropzone i {\n  font-size: 36px;\n  color: #9ca3af;\n  display: block;\n  margin-bottom: 8px;\n}\n.mg-dropzone p {\n  font-size: 13px;\n  color: #374151;\n  margin: 0 0 4px;\n}\n.mg-dropzone small {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.mg-progress {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 10px;\n}\n.mg-progress-bar {\n  flex: 1;\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.mg-progress-fill {\n  height: 100%;\n  background: #6366f1;\n  border-radius: 3px;\n  transition: width 0.2s;\n}\n.mg-progress-text {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4f46e5;\n  min-width: 36px;\n}\n.mg-current {\n  margin-bottom: 20px;\n  padding: 14px 16px;\n  background: #f0fdf4;\n  border-radius: 8px;\n  border: 1px solid #bbf7d0;\n}\n.mg-current-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mg-current-info i {\n  color: #16a34a;\n  font-size: 16px;\n}\n.mg-current-link {\n  font-size: 13px;\n  color: #15803d;\n  text-decoration: underline;\n  word-break: break-all;\n}\n.mg-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.mg-actions .btn {\n  font-size: 13px;\n  padding: 8px 20px;\n  border-radius: 8px;\n}\n.mg-success {\n  font-size: 12px;\n  color: #16a34a;\n  font-weight: 500;\n}\n.mg-error {\n  font-size: 12px;\n  color: #dc2626;\n  font-weight: 500;\n}\n/*# sourceMappingURL=manage-video-acceuil.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageVideoAcceuilComponent, { className: "ManageVideoAcceuilComponent", filePath: "app/features/superadmin/manage-video-acceuil/manage-video-acceuil.component.ts", lineNumber: 155 });
})();
export {
  ManageVideoAcceuilComponent
};
//# sourceMappingURL=chunk-B24KXUKK.js.map
