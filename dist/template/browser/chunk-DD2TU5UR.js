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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-F67U43FE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/superadmin/manage-tutoriels-video/manage-tutoriels-video.component.ts
function ManageTutorielsVideoComponent_div_12_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ManageTutorielsVideoComponent_div_12_div_1_div_10_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const t_r2 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(t_r2.video_url, $event) || (t_r2.video_url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "small", 26);
    \u0275\u0275text(3, "Collez un lien YouTube, Vimeo ou Dailymotion. L'URL sera convertie automatiquement en lecteur embed.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", t_r2.video_url);
  }
}
function ManageTutorielsVideoComponent_div_12_div_1_div_11_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Cliquez ou d\xE9posez une vid\xE9o ici");
    \u0275\u0275elementEnd();
  }
}
function ManageTutorielsVideoComponent_div_12_div_1_div_11_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r2.selectedFile.name, " (", ctx_r5.formatSize(t_r2.selectedFile.size), ")");
  }
}
function ManageTutorielsVideoComponent_div_12_div_1_div_11_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Fichier d\xE9j\xE0 upload\xE9");
    \u0275\u0275elementEnd();
  }
}
function ManageTutorielsVideoComponent_div_12_div_1_div_11_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275element(2, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", t_r2.uploadProgress || 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", t_r2.uploadProgress || 0, "%");
  }
}
function ManageTutorielsVideoComponent_div_12_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275listener("click", function ManageTutorielsVideoComponent_div_12_div_1_div_11_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const fileInput_r5 = \u0275\u0275reference(9);
      return \u0275\u0275resetView(fileInput_r5.click());
    })("dragover", function ManageTutorielsVideoComponent_div_12_div_1_div_11_Template_div_dragover_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.preventDefault());
    })("drop", function ManageTutorielsVideoComponent_div_12_div_1_div_11_Template_div_drop_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const t_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onDrop($event, t_r2));
    });
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275template(3, ManageTutorielsVideoComponent_div_12_div_1_div_11_p_3_Template, 2, 0, "p", 20)(4, ManageTutorielsVideoComponent_div_12_div_1_div_11_p_4_Template, 2, 2, "p", 20)(5, ManageTutorielsVideoComponent_div_12_div_1_div_11_p_5_Template, 2, 0, "p", 20);
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "MP4, WebM, MOV \u2014 max 200 Mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 30, 0);
    \u0275\u0275listener("change", function ManageTutorielsVideoComponent_div_12_div_1_div_11_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const t_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onFileSelected($event, t_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ManageTutorielsVideoComponent_div_12_div_1_div_11_div_10_Template, 5, 3, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !t_r2.selectedFile && !t_r2.video_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r2.selectedFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !t_r2.selectedFile && t_r2.video_url && t_r2.video_type === "upload");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", t_r2.uploading);
  }
}
function ManageTutorielsVideoComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ManageTutorielsVideoComponent_div_12_div_1_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const t_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(t_r2.titre, $event) || (t_r2.titre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "textarea", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ManageTutorielsVideoComponent_div_12_div_1_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const t_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(t_r2.description, $event) || (t_r2.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "button", 17);
    \u0275\u0275listener("click", function ManageTutorielsVideoComponent_div_12_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const t_r2 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(t_r2.video_type = "url");
    });
    \u0275\u0275element(5, "i", 18);
    \u0275\u0275text(6, " Lien URL ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function ManageTutorielsVideoComponent_div_12_div_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const t_r2 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(t_r2.video_type = "upload");
    });
    \u0275\u0275element(8, "i", 19);
    \u0275\u0275text(9, " Uploader un fichier ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, ManageTutorielsVideoComponent_div_12_div_1_div_10_Template, 4, 1, "div", 20)(11, ManageTutorielsVideoComponent_div_12_div_1_div_11_Template, 11, 4, "div", 21);
    \u0275\u0275elementStart(12, "div", 22)(13, "button", 23);
    \u0275\u0275listener("click", function ManageTutorielsVideoComponent_div_12_div_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r6 = \u0275\u0275nextContext();
      const t_r2 = ctx_r6.$implicit;
      const i_r8 = ctx_r6.index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.saveTutoriel(t_r2, i_r8));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 24);
    \u0275\u0275listener("click", function ManageTutorielsVideoComponent_div_12_div_1_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r6 = \u0275\u0275nextContext();
      const t_r2 = ctx_r6.$implicit;
      const i_r8 = ctx_r6.index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.cancelEdit(t_r2, i_r8));
    });
    \u0275\u0275text(16, "Annuler");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", t_r2.titre);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", t_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", t_r2.video_type === "url");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", t_r2.video_type === "upload");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", t_r2.video_type === "url");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r2.video_type === "upload");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", t_r2.uploading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2.uploading ? "Upload en cours..." : "Enregistrer", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", t_r2.uploading);
  }
}
function ManageTutorielsVideoComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "h6");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 38)(7, "span", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 40)(11, "button", 41);
    \u0275\u0275listener("click", function ManageTutorielsVideoComponent_div_12_div_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const t_r2 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(t_r2.editing = true);
    });
    \u0275\u0275element(12, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 43);
    \u0275\u0275listener("click", function ManageTutorielsVideoComponent_div_12_div_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r6 = \u0275\u0275nextContext();
      const t_r2 = ctx_r6.$implicit;
      const i_r8 = ctx_r6.index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.deleteTutoriel(t_r2, i_r8));
    });
    \u0275\u0275element(14, "i", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", t_r2.video_type === "upload" ? "mt-type-badge--upload" : "mt-type-badge--url");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2.video_type === "upload" ? "Fichier" : "URL", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2.video_url, " ");
  }
}
function ManageTutorielsVideoComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, ManageTutorielsVideoComponent_div_12_div_1_Template, 17, 11, "div", 11)(2, ManageTutorielsVideoComponent_div_12_div_2_Template, 15, 5, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r2.editing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !t_r2.editing);
  }
}
function ManageTutorielsVideoComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "p");
    \u0275\u0275text(2, 'Aucun tutoriel. Cliquez sur "Ajouter" pour commencer.');
    \u0275\u0275elementEnd()();
  }
}
var ManageTutorielsVideoComponent = class _ManageTutorielsVideoComponent {
  http;
  tutoriels = [];
  loading = true;
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.http.get(`${environment.apiUrl}/help-center/tutoriels`).subscribe({
      next: (res) => {
        this.tutoriels = (res?.tutoriels || res?.data || []).map((t) => __spreadProps(__spreadValues({}, t), {
          video_type: t.video_type || "url",
          editing: false,
          selectedFile: null
        }));
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  addNew() {
    this.tutoriels.unshift({
      titre: "",
      description: "",
      video_url: "",
      video_type: "url",
      editing: true,
      selectedFile: null
    });
  }
  onFileSelected(event, t) {
    const input = event.target;
    if (input.files && input.files[0]) {
      t.selectedFile = input.files[0];
    }
  }
  onDrop(event, t) {
    event.preventDefault();
    if (event.dataTransfer?.files?.length) {
      const file = event.dataTransfer.files[0];
      if (file.type.startsWith("video/")) {
        t.selectedFile = file;
      }
    }
  }
  formatSize(bytes) {
    if (bytes < 1024 * 1024)
      return (bytes / 1024).toFixed(0) + " Ko";
    return (bytes / (1024 * 1024)).toFixed(1) + " Mo";
  }
  saveTutoriel(t, index) {
    if (t.video_type === "upload" && t.selectedFile) {
      this.uploadAndSave(t, index);
    } else {
      this.saveData(t, index);
    }
  }
  uploadAndSave(t, index) {
    t.uploading = true;
    t.uploadProgress = 0;
    const formData = new FormData();
    formData.append("video", t.selectedFile);
    formData.append("titre", t.titre);
    formData.append("description", t.description || "");
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", (e) => {
      if (e.lengthComputable) {
        t.uploadProgress = Math.round(e.loaded / e.total * 100);
      }
    });
    xhr.addEventListener("load", () => {
      t.uploading = false;
      if (xhr.status >= 200 && xhr.status < 300) {
        const res = JSON.parse(xhr.responseText);
        t.video_url = res.video_url || res.tutoriel?.video_url || "";
        t.id = res.id || res.tutoriel?.id || t.id;
        t.video_type = "upload";
        t.editing = false;
        t.selectedFile = null;
      }
    });
    xhr.addEventListener("error", () => {
      t.uploading = false;
    });
    const token = localStorage.getItem("pyramide_token");
    const url = t.id ? `${environment.apiUrl}/help-center/tutoriels/${t.id}/upload` : `${environment.apiUrl}/help-center/tutoriels/upload`;
    xhr.open("POST", url);
    if (token)
      xhr.setRequestHeader("Authorization", `Bearer ${token}`);
    xhr.send(formData);
  }
  saveData(t, index) {
    const payload = {
      titre: t.titre,
      description: t.description,
      video_url: t.video_url,
      video_type: t.video_type
    };
    if (t.id) {
      this.http.put(`${environment.apiUrl}/help-center/tutoriels/${t.id}`, payload).subscribe({
        next: () => {
          t.editing = false;
        },
        error: () => {
        }
      });
    } else {
      this.http.post(`${environment.apiUrl}/help-center/tutoriels`, payload).subscribe({
        next: (res) => {
          t.id = res?.id || res?.data?.id;
          t.editing = false;
        },
        error: () => {
        }
      });
    }
  }
  cancelEdit(t, index) {
    if (!t.id) {
      this.tutoriels.splice(index, 1);
    } else {
      t.editing = false;
    }
  }
  deleteTutoriel(t, index) {
    if (!t.id) {
      this.tutoriels.splice(index, 1);
      return;
    }
    this.http.delete(`${environment.apiUrl}/help-center/tutoriels/${t.id}`).subscribe({
      next: () => {
        this.tutoriels.splice(index, 1);
      },
      error: () => {
      }
    });
  }
  static \u0275fac = function ManageTutorielsVideoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManageTutorielsVideoComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageTutorielsVideoComponent, selectors: [["app-manage-tutoriels-video"]], decls: 14, vars: 2, consts: [["fileInput", ""], [1, "manage-tuto"], [1, "mt-header"], [1, "isax", "isax-video-circle"], [1, "mt-sub"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "isax", "isax-add-circle", "me-1"], [1, "mt-body"], ["class", "mt-item", 4, "ngFor", "ngForOf"], ["class", "mt-empty", 4, "ngIf"], [1, "mt-item"], ["class", "mt-form", 4, "ngIf"], ["class", "mt-row", 4, "ngIf"], [1, "mt-form"], ["placeholder", "Titre du tutoriel", 1, "mt-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Description courte", "rows", "2", 1, "mt-input", "mt-textarea", 3, "ngModelChange", "ngModel"], [1, "mt-source-toggle"], ["type", "button", 1, "mt-source-btn", 3, "click"], [1, "isax", "isax-link-21"], [1, "isax", "isax-export-1"], [4, "ngIf"], ["class", "mt-upload-zone", 4, "ngIf"], [1, "mt-form-actions"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click", "disabled"], ["placeholder", "URL de la vid\xE9o (YouTube, Vimeo...)", 1, "mt-input", 3, "ngModelChange", "ngModel"], [1, "mt-hint"], [1, "mt-upload-zone"], [1, "mt-dropzone", 3, "click", "dragover", "drop"], [1, "isax", "isax-video-play"], ["type", "file", "accept", "video/mp4,video/webm,video/quicktime", "hidden", "", 3, "change"], ["class", "mt-progress", 4, "ngIf"], [1, "mt-progress"], [1, "mt-progress-bar"], [1, "mt-progress-fill"], [1, "mt-progress-text"], [1, "mt-row"], [1, "mt-info"], [1, "mt-url"], [1, "mt-type-badge", 3, "ngClass"], [1, "mt-actions"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "isax", "isax-edit-2"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "isax", "isax-trash"], [1, "mt-empty"]], template: function ManageTutorielsVideoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h4");
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275text(5, " Gestion des Tutoriels vid\xE9o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Ajoutez et g\xE9rez les vid\xE9os tutoriels visibles par les utilisateurs.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function ManageTutorielsVideoComponent_Template_button_click_8_listener() {
        return ctx.addNew();
      });
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10, " Ajouter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275template(12, ManageTutorielsVideoComponent_div_12_Template, 3, 2, "div", 8)(13, ManageTutorielsVideoComponent_div_13_Template, 3, 0, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.tutoriels);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tutoriels.length === 0 && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.manage-tuto[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n}\n.mt-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mt-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mt-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6366f1;\n}\n.mt-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.mt-body[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n}\n.mt-item[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 16px;\n  margin-bottom: 12px;\n}\n.mt-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mt-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.mt-info[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 2px;\n}\n.mt-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0 0 2px;\n}\n.mt-url[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  word-break: break-all;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.mt-type-badge[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 4px;\n  text-transform: uppercase;\n  flex-shrink: 0;\n}\n.mt-type-badge--url[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.mt-type-badge--upload[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.mt-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n  margin-left: 12px;\n}\n.mt-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  font-size: 14px;\n}\n.mt-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.mt-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n}\n.mt-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n}\n.mt-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.mt-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n  display: block;\n}\n.mt-source-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.mt-source-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.15s;\n}\n.mt-source-btn.active[_ngcontent-%COMP%] {\n  border-color: #6366f1;\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.mt-source-btn[_ngcontent-%COMP%]:hover {\n  border-color: #a5b4fc;\n}\n.mt-dropzone[_ngcontent-%COMP%] {\n  border: 2px dashed #d1d5db;\n  border-radius: 10px;\n  padding: 24px;\n  text-align: center;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n}\n.mt-dropzone[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n  background: #fafafe;\n}\n.mt-dropzone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #9ca3af;\n  display: block;\n  margin-bottom: 8px;\n}\n.mt-dropzone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #374151;\n  margin: 0 0 4px;\n}\n.mt-dropzone[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.mt-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 8px;\n}\n.mt-progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.mt-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #6366f1;\n  border-radius: 3px;\n  transition: width 0.2s;\n}\n.mt-progress-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4f46e5;\n  min-width: 36px;\n}\n.mt-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.mt-form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mt-empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n/*# sourceMappingURL=manage-tutoriels-video.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageTutorielsVideoComponent, [{
    type: Component,
    args: [{ selector: "app-manage-tutoriels-video", template: `
    <div class="manage-tuto">
      <div class="mt-header">
        <div>
          <h4><i class="isax isax-video-circle"></i> Gestion des Tutoriels vid&eacute;o</h4>
          <p class="mt-sub">Ajoutez et g&eacute;rez les vid&eacute;os tutoriels visibles par les utilisateurs.</p>
        </div>
        <button class="btn btn-primary btn-sm" (click)="addNew()">
          <i class="isax isax-add-circle me-1"></i> Ajouter
        </button>
      </div>

      <div class="mt-body">
        <div class="mt-item" *ngFor="let t of tutoriels; let i = index">
          <div class="mt-form" *ngIf="t.editing">
            <input class="mt-input" [(ngModel)]="t.titre" placeholder="Titre du tutoriel">
            <textarea class="mt-input mt-textarea" [(ngModel)]="t.description" placeholder="Description courte" rows="2"></textarea>

            <!-- Source selector -->
            <div class="mt-source-toggle">
              <button type="button" class="mt-source-btn" [class.active]="t.video_type === 'url'"
                      (click)="t.video_type = 'url'">
                <i class="isax isax-link-21"></i> Lien URL
              </button>
              <button type="button" class="mt-source-btn" [class.active]="t.video_type === 'upload'"
                      (click)="t.video_type = 'upload'">
                <i class="isax isax-export-1"></i> Uploader un fichier
              </button>
            </div>

            <!-- URL input -->
            <div *ngIf="t.video_type === 'url'">
              <input class="mt-input" [(ngModel)]="t.video_url" placeholder="URL de la vid\xE9o (YouTube, Vimeo...)">
              <small class="mt-hint">Collez un lien YouTube, Vimeo ou Dailymotion. L'URL sera convertie automatiquement en lecteur embed.</small>
            </div>

            <!-- File upload -->
            <div *ngIf="t.video_type === 'upload'" class="mt-upload-zone">
              <div class="mt-dropzone" (click)="fileInput.click()"
                   (dragover)="$event.preventDefault()" (drop)="onDrop($event, t)">
                <i class="isax isax-video-play"></i>
                <p *ngIf="!t.selectedFile && !t.video_url">Cliquez ou d\xE9posez une vid\xE9o ici</p>
                <p *ngIf="t.selectedFile">{{ t.selectedFile.name }} ({{ formatSize(t.selectedFile.size) }})</p>
                <p *ngIf="!t.selectedFile && t.video_url && t.video_type === 'upload'">Fichier d\xE9j\xE0 upload\xE9</p>
                <small>MP4, WebM, MOV \u2014 max 200 Mo</small>
              </div>
              <input #fileInput type="file" accept="video/mp4,video/webm,video/quicktime" hidden
                     (change)="onFileSelected($event, t)">
              <div class="mt-progress" *ngIf="t.uploading">
                <div class="mt-progress-bar">
                  <div class="mt-progress-fill" [style.width.%]="t.uploadProgress || 0"></div>
                </div>
                <span class="mt-progress-text">{{ t.uploadProgress || 0 }}%</span>
              </div>
            </div>

            <div class="mt-form-actions">
              <button class="btn btn-primary btn-sm" (click)="saveTutoriel(t, i)" [disabled]="t.uploading">
                {{ t.uploading ? 'Upload en cours...' : 'Enregistrer' }}
              </button>
              <button class="btn btn-outline-secondary btn-sm" (click)="cancelEdit(t, i)" [disabled]="t.uploading">Annuler</button>
            </div>
          </div>
          <div class="mt-row" *ngIf="!t.editing">
            <div class="mt-info">
              <h6>{{ t.titre }}</h6>
              <p>{{ t.description }}</p>
              <small class="mt-url">
                <span class="mt-type-badge" [ngClass]="t.video_type === 'upload' ? 'mt-type-badge--upload' : 'mt-type-badge--url'">
                  {{ t.video_type === 'upload' ? 'Fichier' : 'URL' }}
                </span>
                {{ t.video_url }}
              </small>
            </div>
            <div class="mt-actions">
              <button class="btn btn-sm btn-outline-primary" (click)="t.editing = true"><i class="isax isax-edit-2"></i></button>
              <button class="btn btn-sm btn-outline-danger" (click)="deleteTutoriel(t, i)"><i class="isax isax-trash"></i></button>
            </div>
          </div>
        </div>

        <div class="mt-empty" *ngIf="tutoriels.length === 0 && !loading">
          <p>Aucun tutoriel. Cliquez sur "Ajouter" pour commencer.</p>
        </div>
      </div>
    </div>
  `, imports: [CommonModule, FormsModule], styles: ["/* angular:styles/component:scss;079957056518bb4acd65e1f87d59031b78f0d937b0b06b9824a1e774cc5d6155;C:/Project/Pyramide/Dev/Front-end/Front-end-fork/src/app/features/superadmin/manage-tutoriels-video/manage-tutoriels-video.component.ts */\n.manage-tuto {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n}\n.mt-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mt-header h4 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mt-header h4 i {\n  font-size: 18px;\n  color: #6366f1;\n}\n.mt-sub {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.mt-body {\n  padding: 16px 24px;\n}\n.mt-item {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 16px;\n  margin-bottom: 12px;\n}\n.mt-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mt-info {\n  flex: 1;\n  min-width: 0;\n}\n.mt-info h6 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 2px;\n}\n.mt-info p {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0 0 2px;\n}\n.mt-url {\n  font-size: 11px;\n  color: #9ca3af;\n  word-break: break-all;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.mt-type-badge {\n  font-size: 9px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 4px;\n  text-transform: uppercase;\n  flex-shrink: 0;\n}\n.mt-type-badge--url {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.mt-type-badge--upload {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.mt-actions {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n  margin-left: 12px;\n}\n.mt-actions .btn {\n  padding: 4px 8px;\n  font-size: 14px;\n}\n.mt-form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.mt-input {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n}\n.mt-input:focus {\n  border-color: #6366f1;\n}\n.mt-textarea {\n  resize: vertical;\n}\n.mt-hint {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n  display: block;\n}\n.mt-source-toggle {\n  display: flex;\n  gap: 8px;\n}\n.mt-source-btn {\n  padding: 8px 16px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.15s;\n}\n.mt-source-btn.active {\n  border-color: #6366f1;\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.mt-source-btn:hover {\n  border-color: #a5b4fc;\n}\n.mt-dropzone {\n  border: 2px dashed #d1d5db;\n  border-radius: 10px;\n  padding: 24px;\n  text-align: center;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n}\n.mt-dropzone:hover {\n  border-color: #6366f1;\n  background: #fafafe;\n}\n.mt-dropzone i {\n  font-size: 32px;\n  color: #9ca3af;\n  display: block;\n  margin-bottom: 8px;\n}\n.mt-dropzone p {\n  font-size: 13px;\n  color: #374151;\n  margin: 0 0 4px;\n}\n.mt-dropzone small {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.mt-progress {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 8px;\n}\n.mt-progress-bar {\n  flex: 1;\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.mt-progress-fill {\n  height: 100%;\n  background: #6366f1;\n  border-radius: 3px;\n  transition: width 0.2s;\n}\n.mt-progress-text {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4f46e5;\n  min-width: 36px;\n}\n.mt-form-actions {\n  display: flex;\n  gap: 8px;\n}\n.mt-form-actions .btn {\n  font-size: 12px;\n}\n.mt-empty {\n  padding: 40px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n/*# sourceMappingURL=manage-tutoriels-video.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageTutorielsVideoComponent, { className: "ManageTutorielsVideoComponent", filePath: "app/features/superadmin/manage-tutoriels-video/manage-tutoriels-video.component.ts", lineNumber: 151 });
})();
export {
  ManageTutorielsVideoComponent
};
//# sourceMappingURL=chunk-DD2TU5UR.js.map
