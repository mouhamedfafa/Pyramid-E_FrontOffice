import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-GE23GOQB.js";
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-F67U43FE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/superadmin/manage-annonces/manage-annonces.component.ts
function ManageAnnoncesComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function ManageAnnoncesComponent_div_12_div_1_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const a_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(a_r2.titre, $event) || (a_r2.titre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ManageAnnoncesComponent_div_12_div_1_Template_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const a_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(a_r2.type, $event) || (a_r2.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(3, "option", 15);
    \u0275\u0275text(4, "Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 16);
    \u0275\u0275text(6, "Mise \xE0 jour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 17);
    \u0275\u0275text(8, "Nouveaut\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 18);
    \u0275\u0275text(10, "Maintenance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "textarea", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ManageAnnoncesComponent_div_12_div_1_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const a_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(a_r2.contenu, $event) || (a_r2.contenu = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 20)(13, "button", 4);
    \u0275\u0275listener("click", function ManageAnnoncesComponent_div_12_div_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      const a_r2 = ctx_r2.$implicit;
      const i_r4 = ctx_r2.index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.saveAnnonce(a_r2, i_r4));
    });
    \u0275\u0275text(14, "Publier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 21);
    \u0275\u0275listener("click", function ManageAnnoncesComponent_div_12_div_1_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      const a_r2 = ctx_r2.$implicit;
      const i_r4 = ctx_r2.index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.cancelEdit(a_r2, i_r4));
    });
    \u0275\u0275text(16, "Annuler");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", a_r2.titre);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", a_r2.type);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", a_r2.contenu);
  }
}
function ManageAnnoncesComponent_div_12_div_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, a_r2.date, "dd MMM yyyy"));
  }
}
function ManageAnnoncesComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ManageAnnoncesComponent_div_12_div_2_span_5_Template, 3, 4, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h6");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 27)(11, "button", 28);
    \u0275\u0275listener("click", function ManageAnnoncesComponent_div_12_div_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const a_r2 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(a_r2.editing = true);
    });
    \u0275\u0275element(12, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 30);
    \u0275\u0275listener("click", function ManageAnnoncesComponent_div_12_div_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      const a_r2 = ctx_r2.$implicit;
      const i_r4 = ctx_r2.index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.deleteAnnonce(a_r2, i_r4));
    });
    \u0275\u0275element(14, "i", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "ma-badge--" + a_r2.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.getTypeLabel(a_r2.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r2.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.contenu);
  }
}
function ManageAnnoncesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, ManageAnnoncesComponent_div_12_div_1_Template, 17, 3, "div", 10)(2, ManageAnnoncesComponent_div_12_div_2_Template, 15, 5, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r2.editing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !a_r2.editing);
  }
}
function ManageAnnoncesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "p");
    \u0275\u0275text(2, 'Aucune annonce publi\xE9e. Cliquez sur "Nouvelle annonce" pour commencer.');
    \u0275\u0275elementEnd()();
  }
}
var ManageAnnoncesComponent = class _ManageAnnoncesComponent {
  http;
  annonces = [];
  loading = true;
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.http.get(`${environment.apiUrl}/help-center/annonces`).subscribe({
      next: (res) => {
        this.annonces = (res?.annonces || res?.data || []).map((a) => __spreadProps(__spreadValues({}, a), { editing: false }));
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  addNew() {
    this.annonces.unshift({ titre: "", contenu: "", type: "info", editing: true });
  }
  saveAnnonce(a, index) {
    const payload = { titre: a.titre, contenu: a.contenu, type: a.type };
    if (a.id) {
      this.http.put(`${environment.apiUrl}/help-center/annonces/${a.id}`, payload).subscribe({
        next: () => {
          a.editing = false;
        },
        error: () => {
        }
      });
    } else {
      this.http.post(`${environment.apiUrl}/help-center/annonces`, payload).subscribe({
        next: (res) => {
          a.id = res?.id || res?.data?.id;
          a.date = (/* @__PURE__ */ new Date()).toISOString();
          a.editing = false;
        },
        error: () => {
        }
      });
    }
  }
  cancelEdit(a, index) {
    if (!a.id) {
      this.annonces.splice(index, 1);
    } else {
      a.editing = false;
    }
  }
  deleteAnnonce(a, index) {
    if (!a.id) {
      this.annonces.splice(index, 1);
      return;
    }
    this.http.delete(`${environment.apiUrl}/help-center/annonces/${a.id}`).subscribe({
      next: () => {
        this.annonces.splice(index, 1);
      },
      error: () => {
      }
    });
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
  static \u0275fac = function ManageAnnoncesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManageAnnoncesComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageAnnoncesComponent, selectors: [["app-manage-annonces"]], decls: 14, vars: 2, consts: [[1, "manage-ann"], [1, "ma-header"], [1, "isax", "isax-volume-high"], [1, "ma-sub"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "isax", "isax-add-circle", "me-1"], [1, "ma-body"], ["class", "ma-item", 4, "ngFor", "ngForOf"], ["class", "ma-empty", 4, "ngIf"], [1, "ma-item"], ["class", "ma-form", 4, "ngIf"], ["class", "ma-row", 4, "ngIf"], [1, "ma-form"], ["placeholder", "Titre de l'annonce", 1, "ma-input", 3, "ngModelChange", "ngModel"], [1, "ma-input", 3, "ngModelChange", "ngModel"], ["value", "info"], ["value", "update"], ["value", "feature"], ["value", "maintenance"], ["placeholder", "Contenu de l'annonce", "rows", "3", 1, "ma-input", "ma-textarea", 3, "ngModelChange", "ngModel"], [1, "ma-form-actions"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "ma-row"], [1, "ma-info"], [1, "ma-meta"], [1, "ma-badge", 3, "ngClass"], ["class", "ma-date", 4, "ngIf"], [1, "ma-actions"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "isax", "isax-edit-2"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "isax", "isax-trash"], [1, "ma-date"], [1, "ma-empty"]], template: function ManageAnnoncesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h4");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Gestion des Annonces et mises \xE0 jour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Publiez des annonces visibles par tous les utilisateurs de la plateforme.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function ManageAnnoncesComponent_Template_button_click_8_listener() {
        return ctx.addNew();
      });
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275text(10, " Nouvelle annonce ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275template(12, ManageAnnoncesComponent_div_12_Template, 3, 2, "div", 7)(13, ManageAnnoncesComponent_div_13_Template, 3, 0, "div", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.annonces);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.annonces.length === 0 && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n\n.manage-ann[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n}\n.ma-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.ma-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ma-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6366f1;\n}\n.ma-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.ma-body[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n}\n.ma-item[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 16px;\n  margin-bottom: 12px;\n}\n.ma-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.ma-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.ma-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 12px;\n  text-transform: uppercase;\n}\n.ma-badge--update[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.ma-badge--feature[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.ma-badge--info[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.ma-badge--maintenance[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.ma-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ma-info[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.ma-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n.ma-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ma-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  font-size: 14px;\n}\n.ma-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ma-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n}\n.ma-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n}\n.ma-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.ma-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.ma-form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ma-empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n/*# sourceMappingURL=manage-annonces.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageAnnoncesComponent, [{
    type: Component,
    args: [{ selector: "app-manage-annonces", template: `
    <div class="manage-ann">
      <div class="ma-header">
        <div>
          <h4><i class="isax isax-volume-high"></i> Gestion des Annonces et mises &agrave; jour</h4>
          <p class="ma-sub">Publiez des annonces visibles par tous les utilisateurs de la plateforme.</p>
        </div>
        <button class="btn btn-primary btn-sm" (click)="addNew()">
          <i class="isax isax-add-circle me-1"></i> Nouvelle annonce
        </button>
      </div>

      <div class="ma-body">
        <div class="ma-item" *ngFor="let a of annonces; let i = index">
          <div class="ma-form" *ngIf="a.editing">
            <input class="ma-input" [(ngModel)]="a.titre" placeholder="Titre de l'annonce">
            <select class="ma-input" [(ngModel)]="a.type">
              <option value="info">Info</option>
              <option value="update">Mise \xE0 jour</option>
              <option value="feature">Nouveaut\xE9</option>
              <option value="maintenance">Maintenance</option>
            </select>
            <textarea class="ma-input ma-textarea" [(ngModel)]="a.contenu" placeholder="Contenu de l'annonce" rows="3"></textarea>
            <div class="ma-form-actions">
              <button class="btn btn-primary btn-sm" (click)="saveAnnonce(a, i)">Publier</button>
              <button class="btn btn-outline-secondary btn-sm" (click)="cancelEdit(a, i)">Annuler</button>
            </div>
          </div>
          <div class="ma-row" *ngIf="!a.editing">
            <div class="ma-info">
              <div class="ma-meta">
                <span class="ma-badge" [ngClass]="'ma-badge--' + a.type">{{ getTypeLabel(a.type) }}</span>
                <span class="ma-date" *ngIf="a.date">{{ a.date | date:'dd MMM yyyy' }}</span>
              </div>
              <h6>{{ a.titre }}</h6>
              <p>{{ a.contenu }}</p>
            </div>
            <div class="ma-actions">
              <button class="btn btn-sm btn-outline-primary" (click)="a.editing = true"><i class="isax isax-edit-2"></i></button>
              <button class="btn btn-sm btn-outline-danger" (click)="deleteAnnonce(a, i)"><i class="isax isax-trash"></i></button>
            </div>
          </div>
        </div>

        <div class="ma-empty" *ngIf="annonces.length === 0 && !loading">
          <p>Aucune annonce publi\xE9e. Cliquez sur "Nouvelle annonce" pour commencer.</p>
        </div>
      </div>
    </div>
  `, imports: [CommonModule, FormsModule], styles: ["/* angular:styles/component:scss;7d500b7e441a6a7b1cc338aea129d1393110dc231f0db7f201137c8181f96ca0;C:/Project/Pyramide/Dev/Front-end/Front-end-fork/src/app/features/superadmin/manage-annonces/manage-annonces.component.ts */\n.manage-ann {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n}\n.ma-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.ma-header h4 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ma-header h4 i {\n  font-size: 18px;\n  color: #6366f1;\n}\n.ma-sub {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.ma-body {\n  padding: 16px 24px;\n}\n.ma-item {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 16px;\n  margin-bottom: 12px;\n}\n.ma-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.ma-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.ma-badge {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 12px;\n  text-transform: uppercase;\n}\n.ma-badge--update {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.ma-badge--feature {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.ma-badge--info {\n  background: #fef3c7;\n  color: #92400e;\n}\n.ma-badge--maintenance {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.ma-date {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ma-info h6 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.ma-info p {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n.ma-actions {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ma-actions .btn {\n  padding: 4px 8px;\n  font-size: 14px;\n}\n.ma-form {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ma-input {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n}\n.ma-input:focus {\n  border-color: #6366f1;\n}\n.ma-textarea {\n  resize: vertical;\n}\n.ma-form-actions {\n  display: flex;\n  gap: 8px;\n}\n.ma-form-actions .btn {\n  font-size: 12px;\n}\n.ma-empty {\n  padding: 40px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n/*# sourceMappingURL=manage-annonces.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageAnnoncesComponent, { className: "ManageAnnoncesComponent", filePath: "app/features/superadmin/manage-annonces/manage-annonces.component.ts", lineNumber: 98 });
})();
export {
  ManageAnnoncesComponent
};
//# sourceMappingURL=chunk-AIU6MXYT.js.map
