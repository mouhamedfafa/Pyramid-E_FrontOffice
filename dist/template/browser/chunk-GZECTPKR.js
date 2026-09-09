import {
  DirectionService
} from "./chunk-OSTMQ554.js";
import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  UserService
} from "./chunk-R4IU522L.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-DN5YN62E.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-GE23GOQB.js";
import {
  RouterModule
} from "./chunk-WU2IX7JC.js";
import "./chunk-IN7OGW6T.js";
import "./chunk-YONGDJMG.js";
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
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
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-direction/adminrh-direction.component.ts
var _c0 = () => [];
function AdminrhDirectionComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function AdminrhDirectionComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function AdminrhDirectionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, AdminrhDirectionComponent_div_0_div_1_Template, 3, 1, "div", 26)(2, AdminrhDirectionComponent_div_0_div_2_Template, 3, 1, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.successMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.error);
  }
}
function AdminrhDirectionComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Chargement de la structure...");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhDirectionComponent_div_48_ng_container_9_div_13_div_1_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_ng_container_9_div_13_div_1_div_8_div_1_Template_div_click_0_listener() {
      const equipe_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r0.selectEquipe(equipe_r8));
    });
    \u0275\u0275element(1, "div", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const equipe_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275classProp("active-t", ctx_r0.isSelected(equipe_r8));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", equipe_r8.nom, " ");
  }
}
function AdminrhDirectionComponent_div_48_ng_container_9_div_13_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, AdminrhDirectionComponent_div_48_ng_container_9_div_13_div_1_div_8_div_1_Template, 3, 3, "div", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", dept_r6.enfants);
  }
}
function AdminrhDirectionComponent_div_48_ng_container_9_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_ng_container_9_div_13_div_1_Template_div_click_1_listener() {
      const dept_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectDepartement(dept_r6));
    });
    \u0275\u0275elementStart(2, "i", 61);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_ng_container_9_div_13_div_1_Template_i_click_2_listener($event) {
      const dept_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.toggleDepartement(dept_r6, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 62);
    \u0275\u0275elementStart(4, "span", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminrhDirectionComponent_div_48_ng_container_9_div_13_div_1_div_8_Template, 2, 1, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r6 = ctx.$implicit;
    const j_r9 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("active-d", ctx_r0.isSelected(dept_r6));
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r0.isDepartementExpanded(dept_r6));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.getDotColor(j_r9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dept_r6.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", dept_r6.employes_count || 0, " emp.");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isDepartementExpanded(dept_r6) && (dept_r6.enfants == null ? null : dept_r6.enfants.length));
  }
}
function AdminrhDirectionComponent_div_48_ng_container_9_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275template(1, AdminrhDirectionComponent_div_48_ng_container_9_div_13_div_1_Template, 9, 9, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dir_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", dir_r4.enfants);
  }
}
function AdminrhDirectionComponent_div_48_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 47)(2, "div", 48);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_ng_container_9_Template_div_click_2_listener() {
      const dir_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectDirection(dir_r4));
    });
    \u0275\u0275elementStart(3, "i", 49);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_ng_container_9_Template_i_click_3_listener($event) {
      const dir_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDirection(dir_r4, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 50);
    \u0275\u0275element(5, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 52)(7, "div", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 54);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 55);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, AdminrhDirectionComponent_div_48_ng_container_9_div_13_Template, 2, 1, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const dir_r4 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.isSelected(dir_r4));
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r0.isDirectionExpanded(dir_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getIconColor(i_r10));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getDirIcon(i_r10));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dir_r4.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (dir_r4.enfants || \u0275\u0275pureFunction0(11, _c0)).length, " d\xE9partements \xB7 ", dir_r4.employes_count || 0, " employ\xE9s");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dir_r4.employes_count || 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isDirectionExpanded(dir_r4) && (dir_r4.enfants == null ? null : dir_r4.enfants.length));
  }
}
function AdminrhDirectionComponent_div_48_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucune direction trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 72);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_div_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openCreateModal("direction"));
    });
    \u0275\u0275element(5, "i", 10);
    \u0275\u0275text(6, " Cr\xE9er la premi\xE8re direction ");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhDirectionComponent_div_48_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "S\xE9lectionnez une direction dans l'arbre pour voir ses d\xE9tails");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhDirectionComponent_div_48_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275elementEnd();
  }
}
function AdminrhDirectionComponent_div_48_ng_container_14_ng_container_8_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 97);
  }
}
function AdminrhDirectionComponent_div_48_ng_container_14_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminrhDirectionComponent_div_48_ng_container_14_ng_container_8_i_3_Template, 1, 0, "i", 96);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const part_r13 = ctx.$implicit;
    const last_r14 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275classProp("dhead-current", last_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(part_r13);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r14);
  }
}
function AdminrhDirectionComponent_div_48_ng_container_14_div_49_table_1_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 102)(3, "div", 103);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 104);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 105);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td", 106);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 107);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "div", 108)(16, "button", 109);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_ng_container_14_div_49_table_1_tr_12_Template_button_click_16_listener() {
      const emp_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.retirerEmploye(emp_r16.id));
    });
    \u0275\u0275element(17, "i", 110);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const emp_r16 = ctx.$implicit;
    const idx_r17 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.getAvatarClass(idx_r17));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getInitials(emp_r16));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", emp_r16.prenom, " ", emp_r16.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r16.fonction || emp_r16.matricule || "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r16.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r16.fonction || "\u2014");
  }
}
function AdminrhDirectionComponent_div_48_ng_container_14_div_49_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 101)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Fonction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275template(12, AdminrhDirectionComponent_div_48_ng_container_14_div_49_table_1_tr_12_Template, 18, 7, "tr", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r0.detailDirection.employes);
  }
}
function AdminrhDirectionComponent_div_48_ng_container_14_div_49_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucun membre affect\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 72);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_ng_container_14_div_49_div_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openAffecterModal());
    });
    \u0275\u0275element(5, "i", 84);
    \u0275\u0275text(6, " Affecter collaborateur ");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhDirectionComponent_div_48_ng_container_14_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275template(1, AdminrhDirectionComponent_div_48_ng_container_14_div_49_table_1_Template, 13, 1, "table", 99)(2, AdminrhDirectionComponent_div_48_ng_container_14_div_49_div_2_Template, 7, 0, "div", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.detailDirection.employes == null ? null : ctx_r0.detailDirection.employes.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.detailDirection.employes == null ? null : ctx_r0.detailDirection.employes.length));
  }
}
function AdminrhDirectionComponent_div_48_ng_container_14_div_50_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_ng_container_14_div_50_div_1_div_1_Template_div_click_0_listener() {
      const child_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.selectDepartement(child_r21));
    });
    \u0275\u0275elementStart(1, "div", 117);
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 118)(4, "div", 119);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 120);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 121);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r21 = ctx.$implicit;
    const ci_r22 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ci_r22 % 2 === 0 ? "sci-g" : "sci-b");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", child_r21.type === "departement" ? "ti-layout-columns" : "ti-users-group");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(child_r21.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getTypeLabel(child_r21.type));
  }
}
function AdminrhDirectionComponent_div_48_ng_container_14_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113);
    \u0275\u0275template(1, AdminrhDirectionComponent_div_48_ng_container_14_div_50_div_1_div_1_Template, 9, 4, "div", 114);
    \u0275\u0275elementStart(2, "div", 115);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_ng_container_14_div_50_div_1_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openCreateModal(ctx_r0.detailDirection.type === "direction" ? "sous_direction" : "departement", ctx_r0.detailDirection.id));
    });
    \u0275\u0275element(3, "i", 10);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Ajouter une sous-structure");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.detailDirection.enfants);
  }
}
function AdminrhDirectionComponent_div_48_ng_container_14_div_50_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275element(1, "i", 94);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucune sous-structure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 72);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_ng_container_14_div_50_div_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openCreateModal(ctx_r0.detailDirection.type === "direction" ? "sous_direction" : "departement", ctx_r0.detailDirection.id));
    });
    \u0275\u0275element(5, "i", 10);
    \u0275\u0275text(6, " Cr\xE9er une sous-structure ");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhDirectionComponent_div_48_ng_container_14_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275template(1, AdminrhDirectionComponent_div_48_ng_container_14_div_50_div_1_Template, 6, 1, "div", 112)(2, AdminrhDirectionComponent_div_48_ng_container_14_div_50_div_2_Template, 7, 0, "div", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.detailDirection.enfants == null ? null : ctx_r0.detailDirection.enfants.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.detailDirection.enfants == null ? null : ctx_r0.detailDirection.enfants.length));
  }
}
function AdminrhDirectionComponent_div_48_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 75)(2, "div", 76);
    \u0275\u0275element(3, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 77)(5, "div", 78);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 79);
    \u0275\u0275template(8, AdminrhDirectionComponent_div_48_ng_container_14_ng_container_8_Template, 4, 4, "ng-container", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 80)(10, "button", 81);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_ng_container_14_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEditModal(ctx_r0.detailDirection));
    });
    \u0275\u0275element(11, "i", 82);
    \u0275\u0275text(12, " Modifier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 83);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_ng_container_14_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openAffecterModal());
    });
    \u0275\u0275element(14, "i", 84);
    \u0275\u0275text(15, " Affecter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 81);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_ng_container_14_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openCreateModal(ctx_r0.detailDirection.type === "direction" ? "sous_direction" : "departement", ctx_r0.detailDirection.id));
    });
    \u0275\u0275element(17, "i", 10);
    \u0275\u0275text(18, " Sous-structure ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 85);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_ng_container_14_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmDelete());
    });
    \u0275\u0275element(20, "i", 86);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 87)(22, "div", 88)(23, "div", 89);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 90);
    \u0275\u0275text(26, "Membres");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 88)(28, "div", 89);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 90);
    \u0275\u0275text(31, "Sous-structures");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 88)(33, "div", 91);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 90);
    \u0275\u0275text(36, "Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 88)(38, "div", 89);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 90);
    \u0275\u0275text(41, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 92)(43, "div", 93);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_ng_container_14_Template_div_click_43_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setDetailTab("membres"));
    });
    \u0275\u0275element(44, "i", 21);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 93);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_48_ng_container_14_Template_div_click_46_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setDetailTab("structure"));
    });
    \u0275\u0275element(47, "i", 94);
    \u0275\u0275text(48, " Sous-structures ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(49, AdminrhDirectionComponent_div_48_ng_container_14_div_49_Template, 3, 2, "div", 95)(50, AdminrhDirectionComponent_div_48_ng_container_14_div_50_Template, 3, 2, "div", 95);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.detailDirection.nom);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getBreadcrumb());
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r0.detailDirection.employes_count || (ctx_r0.detailDirection.employes || \u0275\u0275pureFunction0(17, _c0)).length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.detailDirection.enfants || \u0275\u0275pureFunction0(18, _c0)).length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getTypeLabel(ctx_r0.detailDirection.type));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("status-active", ctx_r0.detailDirection.est_active)("status-inactive", !ctx_r0.detailDirection.est_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.detailDirection.est_active ? "Actif" : "Inactif", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("on", ctx_r0.detailTab === "membres");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Membres (", (ctx_r0.detailDirection.employes || \u0275\u0275pureFunction0(19, _c0)).length, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r0.detailTab === "structure");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.detailTab === "membres");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.detailTab === "structure");
  }
}
function AdminrhDirectionComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36)(3, "span", 37);
    \u0275\u0275text(4, "Structure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 38);
    \u0275\u0275element(6, "i", 39);
    \u0275\u0275elementStart(7, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhDirectionComponent_div_48_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchFilter, $event) || (ctx_r0.searchFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 41);
    \u0275\u0275template(9, AdminrhDirectionComponent_div_48_ng_container_9_Template, 14, 12, "ng-container", 42)(10, AdminrhDirectionComponent_div_48_div_10_Template, 7, 0, "div", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 44);
    \u0275\u0275template(12, AdminrhDirectionComponent_div_48_div_12_Template, 4, 0, "div", 45)(13, AdminrhDirectionComponent_div_48_div_13_Template, 2, 0, "div", 22)(14, AdminrhDirectionComponent_div_48_ng_container_14_Template, 51, 20, "ng-container", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchFilter);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.filteredArborescence);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.filteredArborescence.length && !ctx_r0.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.selectedNode && !ctx_r0.detailLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.detailLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.detailDirection && !ctx_r0.detailLoading);
  }
}
function AdminrhDirectionComponent_div_49_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.modalError);
  }
}
function AdminrhDirectionComponent_div_49_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 142);
  }
}
function AdminrhDirectionComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_49_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 123);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_49_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r24);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 124)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 125);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_49_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275element(6, "i", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 126);
    \u0275\u0275listener("ngSubmit", function AdminrhDirectionComponent_div_49_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitModal());
    });
    \u0275\u0275elementStart(8, "div", 127)(9, "div", 128)(10, "label");
    \u0275\u0275text(11, "Nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 128)(14, "label");
    \u0275\u0275text(15, "Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 130)(17, "option", 131);
    \u0275\u0275text(18, "Direction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 132);
    \u0275\u0275text(20, "D\xE9partement / Sous-direction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 133);
    \u0275\u0275text(22, "\xC9quipe");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 128)(24, "label");
    \u0275\u0275text(25, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "textarea", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 128)(28, "label");
    \u0275\u0275text(29, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, AdminrhDirectionComponent_div_49_div_31_Template, 2, 1, "div", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 137)(33, "button", 138);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_49_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(34, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 139);
    \u0275\u0275template(36, AdminrhDirectionComponent_div_49_span_36_Template, 1, 0, "span", 140);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.modalMode === "create" ? "Nouvelle structure" : "Modifier");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.modalForm);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngIf", ctx_r0.modalError);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.modalForm.invalid || ctx_r0.modalLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.modalLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.modalMode === "create" ? "Cr\xE9er" : "Enregistrer", " ");
  }
}
function AdminrhDirectionComponent_div_50_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_50_div_11_div_1_Template_div_click_0_listener() {
      const emp_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleEmployeSelection(emp_r27.id));
    });
    \u0275\u0275elementStart(1, "div", 152);
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 153);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 154)(6, "span", 104);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 155);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const emp_r27 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r0.isEmployeSelected(emp_r27.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.isEmployeSelected(emp_r27.id) ? "ti-checkbox" : "ti-square");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getInitials(emp_r27));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", emp_r27.prenom, " ", emp_r27.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r27.email);
  }
}
function AdminrhDirectionComponent_div_50_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "p");
    \u0275\u0275text(2, "Aucun collaborateur disponible");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhDirectionComponent_div_50_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149);
    \u0275\u0275template(1, AdminrhDirectionComponent_div_50_div_11_div_1_Template, 10, 7, "div", 150)(2, AdminrhDirectionComponent_div_50_div_11_div_2_Template, 3, 0, "div", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filteredEmployes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.filteredEmployes.length);
  }
}
function AdminrhDirectionComponent_div_50_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275elementEnd();
  }
}
function AdminrhDirectionComponent_div_50_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 142);
  }
}
function AdminrhDirectionComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_50_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAffecterModal());
    });
    \u0275\u0275elementStart(1, "div", 143);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_50_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 124)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 125);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_50_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAffecterModal());
    });
    \u0275\u0275element(6, "i", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 127)(8, "div", 144);
    \u0275\u0275element(9, "i", 39);
    \u0275\u0275elementStart(10, "input", 145);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhDirectionComponent_div_50_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.employeSearch, $event) || (ctx_r0.employeSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, AdminrhDirectionComponent_div_50_div_11_Template, 3, 2, "div", 146)(12, AdminrhDirectionComponent_div_50_div_12_Template, 2, 0, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 137)(14, "span", 147);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 138);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_50_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAffecterModal());
    });
    \u0275\u0275text(17, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 148);
    \u0275\u0275listener("click", function AdminrhDirectionComponent_div_50_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitAffecter());
    });
    \u0275\u0275template(19, AdminrhDirectionComponent_div_50_span_19_Template, 1, 0, "span", 140);
    \u0275\u0275text(20, " Affecter ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Affecter collaborateurs \xE0 \xAB ", ctx_r0.selectedNode == null ? null : ctx_r0.selectedNode.nom, " \xBB");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.employeSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.affecterLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.affecterLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.selectedEmployeIds.length, " s\xE9lectionn\xE9(s)");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r0.selectedEmployeIds.length || ctx_r0.affecterLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.affecterLoading);
  }
}
var AdminrhDirectionComponent = class _AdminrhDirectionComponent {
  directionService;
  userService;
  fb;
  routes = routes;
  // State
  loading = false;
  error = "";
  successMessage = "";
  searchFilter = "";
  // Arborescence
  arborescence = [];
  totalDirections = 0;
  totalDepartements = 0;
  totalEquipes = 0;
  totalEmployes = 0;
  // Tree selection
  expandedDirections = /* @__PURE__ */ new Set();
  expandedDepartements = /* @__PURE__ */ new Set();
  selectedNode = null;
  selectedNodeType = "direction";
  // Detail panel
  detailLoading = false;
  detailDirection = null;
  detailTab = "membres";
  // Modal
  showModal = false;
  modalMode = "create";
  modalForm;
  modalLoading = false;
  modalError = "";
  // Affecter modal
  showAffecterModal = false;
  availableEmployes = [];
  selectedEmployeIds = [];
  affecterLoading = false;
  employeSearch = "";
  // Entreprise info
  entrepriseNom = "";
  constructor(directionService, userService, fb) {
    this.directionService = directionService;
    this.userService = userService;
    this.fb = fb;
  }
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem("pyramide_user") || "{}");
    this.entrepriseNom = user.entreprise?.nom || "Mon Entreprise";
    this.initForm();
    this.loadArborescence();
  }
  initForm() {
    this.modalForm = this.fb.group({
      nom: ["", Validators.required],
      type: ["direction", Validators.required],
      parent_id: [null],
      description: [""],
      code: [""],
      responsable_id: [null]
    });
  }
  // ─── ARBORESCENCE ─────────────────────────────────────────
  loadArborescence() {
    this.loading = true;
    this.directionService.getArborescence().subscribe({
      next: (res) => {
        this.arborescence = res.arborescence || [];
        this.computeStats();
        this.loading = false;
        if (this.arborescence.length && !this.selectedNode) {
          this.selectDirection(this.arborescence[0]);
        }
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Erreur lors du chargement");
        this.loading = false;
      }
    });
  }
  computeStats() {
    let dirs = 0, depts = 0, equipes = 0, emps = 0;
    for (const dir of this.arborescence) {
      dirs++;
      emps += dir.employes_count || 0;
      for (const enfant of dir.enfants || []) {
        if (enfant.type === "sous_direction") {
          depts++;
          emps += enfant.employes_count || 0;
          for (const sub of enfant.enfants || []) {
            equipes++;
            emps += sub.employes_count || 0;
          }
        } else if (enfant.type === "departement") {
          depts++;
          emps += enfant.employes_count || 0;
          for (const sub of enfant.enfants || []) {
            equipes++;
            emps += sub.employes_count || 0;
          }
        }
      }
    }
    this.totalDirections = dirs;
    this.totalDepartements = depts;
    this.totalEquipes = equipes;
    this.totalEmployes = emps;
  }
  // ─── TREE INTERACTION ─────────────────────────────────────
  toggleDirection(dir, event) {
    event.stopPropagation();
    if (this.expandedDirections.has(dir.id)) {
      this.expandedDirections.delete(dir.id);
    } else {
      this.expandedDirections.add(dir.id);
    }
  }
  toggleDepartement(dept, event) {
    event.stopPropagation();
    if (this.expandedDepartements.has(dept.id)) {
      this.expandedDepartements.delete(dept.id);
    } else {
      this.expandedDepartements.add(dept.id);
    }
  }
  isDirectionExpanded(dir) {
    return this.expandedDirections.has(dir.id);
  }
  isDepartementExpanded(dept) {
    return this.expandedDepartements.has(dept.id);
  }
  selectDirection(dir) {
    this.selectedNode = dir;
    this.selectedNodeType = "direction";
    this.expandedDirections.add(dir.id);
    this.loadDetail(dir.id);
  }
  selectDepartement(dept) {
    this.selectedNode = dept;
    this.selectedNodeType = "departement";
    this.expandedDepartements.add(dept.id);
    this.loadDetail(dept.id);
  }
  selectEquipe(equipe) {
    this.selectedNode = equipe;
    this.selectedNodeType = "equipe";
    this.loadDetail(equipe.id);
  }
  isSelected(node) {
    return this.selectedNode?.id === node.id;
  }
  // ─── DETAIL PANEL ─────────────────────────────────────────
  loadDetail(id) {
    this.detailLoading = true;
    this.detailTab = "membres";
    this.directionService.getById(id).subscribe({
      next: (res) => {
        this.detailDirection = res.direction;
        this.detailLoading = false;
      },
      error: () => {
        this.detailLoading = false;
      }
    });
  }
  setDetailTab(tab) {
    this.detailTab = tab;
  }
  getBreadcrumb() {
    if (!this.detailDirection)
      return [];
    const parts = [];
    if (this.detailDirection.parent?.parent) {
      parts.push(this.detailDirection.parent.parent.nom);
    }
    if (this.detailDirection.parent) {
      parts.push(this.detailDirection.parent.nom);
    }
    parts.push(this.detailDirection.nom);
    return parts;
  }
  getTypeLabel(type) {
    switch (type) {
      case "direction":
        return "Direction";
      case "sous_direction":
        return "D\xE9partement";
      case "departement":
        return "\xC9quipe";
      default:
        return type;
    }
  }
  getInitials(user) {
    const n = (user.prenom || "")[0] || "";
    const l = (user.nom || "")[0] || "";
    return (n + l).toUpperCase();
  }
  getAvatarClass(index) {
    const classes = ["av-g", "av-b", "av-p", "av-a"];
    return classes[index % classes.length];
  }
  getDotColor(index) {
    const colors = ["#0F6E56", "#185FA5", "#534AB7", "#854F0B"];
    return colors[index % colors.length];
  }
  getIconColor(index) {
    const classes = ["dhi-green", "dhi-blue", "dhi-amber", "dhi-purple"];
    return classes[index % classes.length];
  }
  getDirIcon(index) {
    const icons = ["ti-building", "ti-chart-bar", "ti-users", "ti-briefcase"];
    return icons[index % icons.length];
  }
  // ─── CRUD MODAL ───────────────────────────────────────────
  openCreateModal(type, parentId) {
    this.modalMode = "create";
    this.modalError = "";
    this.modalForm.reset({ type, parent_id: parentId || null, nom: "", description: "", code: "", responsable_id: null });
    this.showModal = true;
  }
  openEditModal(direction) {
    this.modalMode = "edit";
    this.modalError = "";
    this.modalForm.patchValue({
      nom: direction.nom,
      type: direction.type,
      parent_id: direction.parent_id,
      description: direction.description || "",
      code: direction.code || "",
      responsable_id: direction.responsable_id
    });
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
  submitModal() {
    if (this.modalForm.invalid)
      return;
    this.modalLoading = true;
    this.modalError = "";
    const data = this.modalForm.value;
    const obs = this.modalMode === "create" ? this.directionService.create(data) : this.directionService.update(this.selectedNode.id, data);
    obs.subscribe({
      next: () => {
        this.modalLoading = false;
        this.showModal = false;
        this.successMessage = this.modalMode === "create" ? "Cr\xE9\xE9 avec succ\xE8s" : "Mis \xE0 jour avec succ\xE8s";
        this.loadArborescence();
        setTimeout(() => this.successMessage = "", 3e3);
      },
      error: (err) => {
        this.modalLoading = false;
        this.modalError = httpErrorMessage(err, "Erreur");
      }
    });
  }
  // ─── DELETE ───────────────────────────────────────────────
  confirmDelete() {
    if (!this.selectedNode)
      return;
    if (!confirm(`Supprimer "${this.selectedNode.nom}" ? Cette action est irr\xE9versible.`))
      return;
    this.directionService.delete(this.selectedNode.id).subscribe({
      next: () => {
        this.successMessage = "Supprim\xE9 avec succ\xE8s";
        this.selectedNode = null;
        this.detailDirection = null;
        this.loadArborescence();
        setTimeout(() => this.successMessage = "", 3e3);
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Impossible de supprimer");
        setTimeout(() => this.error = "", 5e3);
      }
    });
  }
  // ─── AFFECTER EMPLOYES ────────────────────────────────────
  openAffecterModal() {
    this.showAffecterModal = true;
    this.selectedEmployeIds = [];
    this.employeSearch = "";
    this.affecterLoading = true;
    this.userService.getMyUsers().subscribe({
      next: (res) => {
        this.availableEmployes = (res.users || res.data || []).filter((u) => u.statut !== false && u.statut !== 0 && (!u.direction_id || u.direction_id !== this.selectedNode?.id));
        this.affecterLoading = false;
      },
      error: () => {
        this.affecterLoading = false;
      }
    });
  }
  closeAffecterModal() {
    this.showAffecterModal = false;
  }
  toggleEmployeSelection(id) {
    const idx = this.selectedEmployeIds.indexOf(id);
    if (idx > -1) {
      this.selectedEmployeIds.splice(idx, 1);
    } else {
      this.selectedEmployeIds.push(id);
    }
  }
  isEmployeSelected(id) {
    return this.selectedEmployeIds.includes(id);
  }
  get filteredEmployes() {
    if (!this.employeSearch)
      return this.availableEmployes;
    const s = this.employeSearch.toLowerCase();
    return this.availableEmployes.filter((u) => `${u.prenom} ${u.nom} ${u.email}`.toLowerCase().includes(s));
  }
  submitAffecter() {
    if (!this.selectedEmployeIds.length || !this.selectedNode)
      return;
    this.affecterLoading = true;
    this.directionService.affecterEmployes(this.selectedNode.id, this.selectedEmployeIds).subscribe({
      next: () => {
        this.affecterLoading = false;
        this.showAffecterModal = false;
        this.successMessage = "Employ\xE9s affect\xE9s avec succ\xE8s";
        this.loadDetail(this.selectedNode.id);
        this.loadArborescence();
        setTimeout(() => this.successMessage = "", 3e3);
      },
      error: (err) => {
        this.affecterLoading = false;
        this.error = httpErrorMessage(err, "Erreur lors de l'affectation");
      }
    });
  }
  retirerEmploye(userId) {
    if (!this.selectedNode)
      return;
    if (!confirm("Retirer cet employ\xE9 de cette direction ?"))
      return;
    this.directionService.retirerEmployes(this.selectedNode.id, [userId]).subscribe({
      next: () => {
        this.successMessage = "Employ\xE9 retir\xE9";
        this.loadDetail(this.selectedNode.id);
        this.loadArborescence();
        setTimeout(() => this.successMessage = "", 3e3);
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Erreur");
      }
    });
  }
  // ─── FILTRAGE ARBRE ───────────────────────────────────────
  get filteredArborescence() {
    if (!this.searchFilter)
      return this.arborescence;
    const s = this.searchFilter.toLowerCase();
    return this.arborescence.filter((dir) => {
      if (dir.nom.toLowerCase().includes(s))
        return true;
      return (dir.enfants || []).some((e) => e.nom.toLowerCase().includes(s) || (e.enfants || []).some((sub) => sub.nom.toLowerCase().includes(s)));
    });
  }
  static \u0275fac = function AdminrhDirectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhDirectionComponent)(\u0275\u0275directiveInject(DirectionService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhDirectionComponent, selectors: [["app-adminrh-direction"]], decls: 51, vars: 10, consts: [["class", "toast-container", 4, "ngIf"], [1, "page"], [1, "ph"], [1, "ph-icon"], [1, "ti", "ti-building"], [1, "ph-info"], [1, "ph-title"], [1, "ph-sub"], [1, "ph-acts"], [1, "btn-p", 3, "click"], [1, "ti", "ti-plus"], [1, "kpi-row"], [1, "kpi"], [1, "ki", "ki-g"], [1, "kpi-v"], [1, "kpi-l"], [1, "ki", "ki-b"], [1, "ti", "ti-layout-columns"], [1, "ki", "ki-a"], [1, "ti", "ti-users-group"], [1, "ki", "ki-p"], [1, "ti", "ti-users"], ["class", "loading-state", 4, "ngIf"], ["class", "layout", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "toast-container"], ["class", "toast toast-success", 4, "ngIf"], ["class", "toast toast-error", 4, "ngIf"], [1, "toast", "toast-success"], [1, "ti", "ti-check"], [1, "toast", "toast-error"], [1, "ti", "ti-alert-circle"], [1, "loading-state"], [1, "spinner"], [1, "layout"], [1, "tree-col"], [1, "tree-head"], [1, "th-title"], [1, "search-sm"], [1, "ti", "ti-search"], ["type", "text", "placeholder", "Filtrer...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "tree-scroll"], [4, "ngFor", "ngForOf"], ["class", "empty-tree", 4, "ngIf"], [1, "detail-col"], ["class", "empty-detail", 4, "ngIf"], [4, "ngIf"], [1, "dir-item"], [1, "dir-header", 3, "click"], [1, "ti", "ti-chevron-right", "dh-toggle", 3, "click"], [1, "dh-icon", 3, "ngClass"], [1, "ti", 3, "ngClass"], [1, "dh-info"], [1, "dh-name"], [1, "dh-count"], [1, "dh-badge"], ["class", "dept-list", 4, "ngIf"], [1, "dept-list"], ["class", "dept-item", 4, "ngFor", "ngForOf"], [1, "dept-item"], [1, "dept-header", 3, "click"], [1, "ti", "ti-chevron-right", "dpt-toggle", 3, "click"], [1, "dpt-dot"], [1, "dpt-name"], [1, "dpt-count"], ["class", "team-list", 4, "ngIf"], [1, "team-list"], ["class", "team-item", 3, "active-t", "click", 4, "ngFor", "ngForOf"], [1, "team-item", 3, "click"], [1, "ti-dot"], [1, "empty-tree"], [1, "ti", "ti-building-community"], [1, "btn-p", "btn-sm", 3, "click"], [1, "empty-detail"], [1, "ti", "ti-click"], [1, "detail-head"], [1, "dhead-icon"], [1, "dhead-info"], [1, "dhead-name"], [1, "dhead-path"], [1, "dhead-acts"], [1, "act-btn", 3, "click"], [1, "ti", "ti-edit"], [1, "act-btn", "primary", 3, "click"], [1, "ti", "ti-user-plus"], [1, "act-btn", "danger", 3, "click"], [1, "ti", "ti-trash"], [1, "stats-row"], [1, "stat-card"], [1, "sc-v"], [1, "sc-l"], [1, "sc-v", "type-badge"], [1, "detail-tabs"], [1, "dtab", 3, "click"], [1, "ti", "ti-sitemap"], ["class", "dtv", 4, "ngIf"], ["class", "ti ti-chevron-right", 4, "ngIf"], [1, "ti", "ti-chevron-right"], [1, "dtv"], ["class", "emp-table", 4, "ngIf"], ["class", "empty-tab", 4, "ngIf"], [1, "emp-table"], [1, "emp-cell"], [1, "emp-av", 3, "ngClass"], [1, "emp-name"], [1, "emp-role"], [1, "emp-email"], [1, "emp-fonction"], [1, "td-actions"], ["title", "Retirer", 1, "tbl-act", "danger", 3, "click"], [1, "ti", "ti-x"], [1, "empty-tab"], ["class", "struct-grid", 4, "ngIf"], [1, "struct-grid"], ["class", "struct-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "struct-card", "add-card", 3, "click"], [1, "struct-card", 3, "click"], [1, "sc-icon", 3, "ngClass"], [1, "sc-info"], [1, "sc-name"], [1, "sc-meta"], [1, "ti", "ti-chevron-right", "sc-arr"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "form-group"], ["type", "text", "formControlName", "nom", "placeholder", "Nom de la structure", 1, "form-input"], ["formControlName", "type", 1, "form-input"], ["value", "direction"], ["value", "sous_direction"], ["value", "departement"], ["formControlName", "description", "rows", "3", "placeholder", "Description optionnelle", 1, "form-input"], ["type", "text", "formControlName", "code", "placeholder", "Code interne (ex: DIR-TECH)", 1, "form-input"], ["class", "modal-error", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn-o", 3, "click"], ["type", "submit", 1, "btn-p", 3, "disabled"], ["class", "spinner-sm", 4, "ngIf"], [1, "modal-error"], [1, "spinner-sm"], [1, "modal-box", "modal-lg", 3, "click"], [1, "search-sm", "modal-search"], ["type", "text", "placeholder", "Rechercher un collaborateur...", 1, "search-input", 3, "ngModelChange", "ngModel"], ["class", "employe-list", 4, "ngIf"], [1, "selected-count"], ["type", "button", 1, "btn-p", 3, "click", "disabled"], [1, "employe-list"], ["class", "employe-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "employe-item", 3, "click"], [1, "emp-check"], [1, "emp-av", "av-g"], [1, "emp-info-line"], [1, "emp-email-sm"]], template: function AdminrhDirectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AdminrhDirectionComponent_div_0_Template, 3, 2, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275text(9, "Structure hi\xE9rarchique : Direction \u2192 D\xE9partement \u2192 \xC9quipe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 8)(11, "button", 9);
      \u0275\u0275listener("click", function AdminrhDirectionComponent_Template_button_click_11_listener() {
        return ctx.openCreateModal("direction");
      });
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275text(13, " Nouvelle direction ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "div", 13);
      \u0275\u0275element(17, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div")(19, "div", 14);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 15);
      \u0275\u0275text(22, "Directions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 12)(24, "div", 16);
      \u0275\u0275element(25, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div")(27, "div", 14);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 15);
      \u0275\u0275text(30, "D\xE9partements");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 12)(32, "div", 18);
      \u0275\u0275element(33, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div")(35, "div", 14);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 15);
      \u0275\u0275text(38, "\xC9quipes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 12)(40, "div", 20);
      \u0275\u0275element(41, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div")(43, "div", 14);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 15);
      \u0275\u0275text(46, "Employ\xE9s affect\xE9s");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(47, AdminrhDirectionComponent_div_47_Template, 4, 0, "div", 22)(48, AdminrhDirectionComponent_div_48_Template, 15, 6, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(49, AdminrhDirectionComponent_div_49_Template, 38, 6, "div", 24)(50, AdminrhDirectionComponent_div_50_Template, 21, 7, "div", 24);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.successMessage || ctx.error);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("Directions & Organisation \u2014 ", ctx.entrepriseNom);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.totalDirections);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.totalDepartements);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.totalEquipes);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.totalEmployes);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAffecterModal);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['@charset "UTF-8";\n\n\n\n.page[_ngcontent-%COMP%] {\n  background: var(--color-background-tertiary, #f7f7f5);\n  min-height: 700px;\n}\n.ph[_ngcontent-%COMP%] {\n  background: var(--color-background-primary, #fff);\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  padding: 13px 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ph-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #e1f5ee;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  color: #0f6e56;\n  flex-shrink: 0;\n}\n.ph-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.ph-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1a1a1a);\n}\n.ph-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary, #6b6b6b);\n  margin-top: 2px;\n}\n.ph-acts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-o[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: 0.5px solid var(--color-border-secondary, #d4d4d0);\n  border-radius: 8px;\n  font-size: 12px;\n  color: var(--color-text-secondary, #6b6b6b);\n  background: transparent;\n  cursor: pointer;\n}\n.btn-o[_ngcontent-%COMP%]:hover {\n  background: var(--color-background-secondary, #f5f5f3);\n}\n.btn-p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: none;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #0f6e56;\n  cursor: pointer;\n}\n.btn-p[_ngcontent-%COMP%]:hover {\n  background: #0b5a46;\n}\n.btn-p[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 11px;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  padding: 12px 20px;\n}\n.kpi[_ngcontent-%COMP%] {\n  background: var(--color-background-primary, #fff);\n  border: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  border-radius: 8px;\n  padding: 10px 12px;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ki[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.ki-g[_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #0f6e56;\n}\n.ki-b[_ngcontent-%COMP%] {\n  background: #e6f1fb;\n  color: #185fa5;\n}\n.ki-a[_ngcontent-%COMP%] {\n  background: #faeeda;\n  color: #854f0b;\n}\n.ki-p[_ngcontent-%COMP%] {\n  background: #eaf3de;\n  color: #3b6d11;\n}\n.kpi-v[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1a1a1a);\n}\n.kpi-l[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-secondary, #6b6b6b);\n  margin-top: 1px;\n}\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 0;\n  min-height: 520px;\n  margin: 0 20px 20px;\n  border: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  border-radius: 12px;\n  overflow: hidden;\n  background: var(--color-background-primary, #fff);\n}\n.tree-col[_ngcontent-%COMP%] {\n  border-right: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  display: flex;\n  flex-direction: column;\n}\n.tree-head[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--color-background-secondary, #f5f5f3);\n}\n.th-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-secondary, #6b6b6b);\n  flex: 1;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.search-sm[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  border: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  border-radius: 8px;\n  padding: 4px 8px;\n  background: var(--color-background-primary, #fff);\n}\n.search-sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--color-text-tertiary, #999);\n}\n.search-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 11px;\n  background: transparent;\n  color: var(--color-text-primary, #1a1a1a);\n  width: 80px;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-tertiary, #999);\n}\n.tree-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 6px 0;\n}\n.tree-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.tree-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-border-secondary, #d4d4d0);\n  border-radius: 3px;\n}\n.dir-item[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n}\n.dir-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.dir-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.dir-header[_ngcontent-%COMP%]:hover {\n  background: var(--color-background-secondary, #f5f5f3);\n}\n.dir-header.active[_ngcontent-%COMP%] {\n  background: #e1f5ee;\n}\n.dh-toggle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--color-text-tertiary, #999);\n  transition: transform 0.15s;\n  flex-shrink: 0;\n}\n.dh-toggle.open[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.dh-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.dhi-green[_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #0f6e56;\n}\n.dhi-blue[_ngcontent-%COMP%] {\n  background: #e6f1fb;\n  color: #185fa5;\n}\n.dhi-purple[_ngcontent-%COMP%] {\n  background: #eeedfe;\n  color: #534ab7;\n}\n.dhi-amber[_ngcontent-%COMP%] {\n  background: #faeeda;\n  color: #854f0b;\n}\n.dh-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.dh-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1a1a1a);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dir-header.active[_ngcontent-%COMP%]   .dh-name[_ngcontent-%COMP%] {\n  color: #0f6e56;\n}\n.dh-count[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-secondary, #6b6b6b);\n  margin-top: 1px;\n}\n.dh-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 20px;\n  background: var(--color-background-secondary, #f5f5f3);\n  color: var(--color-text-secondary, #6b6b6b);\n  flex-shrink: 0;\n}\n.dept-list[_ngcontent-%COMP%] {\n  padding-left: 12px;\n  border-left: 1.5px solid var(--color-border-tertiary, #e8e8e4);\n  margin-left: 22px;\n}\n.dept-item[_ngcontent-%COMP%] {\n  margin: 2px 0;\n}\n.dept-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 6px 10px;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: background 0.12s;\n}\n.dept-header[_ngcontent-%COMP%]:hover {\n  background: var(--color-background-secondary, #f5f5f3);\n}\n.dept-header.active-d[_ngcontent-%COMP%] {\n  background: #f1efe8;\n}\n.dpt-toggle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-tertiary, #999);\n  transition: transform 0.15s;\n  flex-shrink: 0;\n}\n.dpt-toggle.open[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.dpt-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dpt-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-secondary, #6b6b6b);\n  flex: 1;\n}\n.dept-header.active-d[_ngcontent-%COMP%]   .dpt-name[_ngcontent-%COMP%] {\n  color: var(--color-text-primary, #1a1a1a);\n  font-weight: 500;\n}\n.dpt-count[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-tertiary, #999);\n}\n.team-list[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 1px dashed var(--color-border-tertiary, #e8e8e4);\n  margin-left: 10px;\n}\n.team-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 9px;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: background 0.12s;\n  font-size: 12px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.team-item[_ngcontent-%COMP%]:hover {\n  background: var(--color-background-secondary, #f5f5f3);\n  color: var(--color-text-primary, #1a1a1a);\n}\n.team-item.active-t[_ngcontent-%COMP%] {\n  color: #0f6e56;\n  font-weight: 500;\n}\n.ti-dot[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: var(--color-border-secondary, #d4d4d0);\n  flex-shrink: 0;\n}\n.team-item.active-t[_ngcontent-%COMP%]   .ti-dot[_ngcontent-%COMP%] {\n  background: #0f6e56;\n}\n.detail-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.detail-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  background: var(--color-background-secondary, #f5f5f3);\n  flex-wrap: wrap;\n}\n.dhead-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #e1f5ee;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n  color: #0f6e56;\n  flex-shrink: 0;\n}\n.dhead-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.dhead-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1a1a1a);\n}\n.dhead-path[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary, #6b6b6b);\n  margin-top: 2px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.dhead-path[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.dhead-current[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text-primary, #1a1a1a);\n}\n.dhead-acts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.act-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 11px;\n  border-radius: 8px;\n  font-size: 12px;\n  cursor: pointer;\n  border: 0.5px solid var(--color-border-secondary, #d4d4d0);\n  background: transparent;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.act-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-background-secondary, #f5f5f3);\n}\n.act-btn.primary[_ngcontent-%COMP%] {\n  background: #0f6e56;\n  border-color: #0f6e56;\n  color: #fff;\n  font-weight: 500;\n}\n.act-btn.primary[_ngcontent-%COMP%]:hover {\n  background: #0b5a46;\n}\n.act-btn.danger[_ngcontent-%COMP%] {\n  color: #a32d2d;\n  border-color: #f09595;\n}\n.act-btn.danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--color-background-secondary, #f5f5f3);\n  border-radius: 8px;\n  padding: 9px 11px;\n  text-align: center;\n}\n.sc-v[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1a1a1a);\n}\n.sc-l[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-secondary, #6b6b6b);\n  margin-top: 2px;\n}\n.status-active[_ngcontent-%COMP%] {\n  color: #0f6e56;\n}\n.status-inactive[_ngcontent-%COMP%] {\n  color: #a32d2d;\n}\n.type-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.detail-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 16px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n}\n.dtab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 9px 12px;\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--color-text-secondary, #6b6b6b);\n  border-bottom: 2px solid transparent;\n  transition: all 0.15s;\n}\n.dtab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.dtab.on[_ngcontent-%COMP%] {\n  color: #0f6e56;\n  border-bottom-color: #0f6e56;\n  font-weight: 500;\n}\n.dtab[_ngcontent-%COMP%]:hover {\n  color: var(--color-text-primary, #1a1a1a);\n}\n.dtv[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  flex: 1;\n  overflow-y: auto;\n}\n.emp-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.emp-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: var(--color-text-secondary, #6b6b6b);\n  text-align: left;\n  padding: 7px 12px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  background: var(--color-background-secondary, #f5f5f3);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.emp-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 9px 12px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  color: var(--color-text-primary, #1a1a1a);\n  vertical-align: middle;\n}\n.emp-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.emp-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-background-secondary, #f5f5f3);\n}\n.emp-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.emp-av[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 9px;\n  font-weight: 500;\n}\n.av-g[_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.av-b[_ngcontent-%COMP%] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.av-p[_ngcontent-%COMP%] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.av-a[_ngcontent-%COMP%] {\n  background: #faeeda;\n  color: #633806;\n}\n.emp-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1a1a1a);\n}\n.emp-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.emp-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.emp-fonction[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.td-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.tbl-act[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.tbl-act.danger[_ngcontent-%COMP%] {\n  color: #a32d2d;\n}\n.tbl-act.danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.struct-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.struct-card[_ngcontent-%COMP%] {\n  background: var(--color-background-secondary, #f5f5f3);\n  border: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  border-radius: 8px;\n  padding: 11px 13px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  transition: border-color 0.12s;\n}\n.struct-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-border-secondary, #d4d4d0);\n}\n.sc-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.sci-g[_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #0f6e56;\n}\n.sci-b[_ngcontent-%COMP%] {\n  background: #e6f1fb;\n  color: #185fa5;\n}\n.sc-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sc-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1a1a1a);\n}\n.sc-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary, #6b6b6b);\n  margin-top: 2px;\n}\n.sc-arr[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-text-tertiary, #999);\n}\n.add-card[_ngcontent-%COMP%] {\n  border: 1.5px dashed var(--color-border-secondary, #d4d4d0);\n  background: transparent;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 16px;\n}\n.add-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-text-tertiary, #999);\n}\n.add-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.empty-tree[_ngcontent-%COMP%], \n.empty-detail[_ngcontent-%COMP%], \n.empty-tab[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n}\n.empty-tree[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.empty-detail[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.empty-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--color-text-tertiary, #999);\n  margin-bottom: 8px;\n}\n.empty-tree[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-tab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-secondary, #6b6b6b);\n  margin-bottom: 12px;\n}\n.empty-detail[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 40px;\n}\n.loading-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--color-border-tertiary, #e8e8e4);\n  border-top-color: #0f6e56;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border: 1.5px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 16px;\n  right: 16px;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.toast[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  animation: _ngcontent-%COMP%_slideIn 0.2s ease;\n}\n.toast-success[_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #085041;\n  border: 1px solid #a3e4cc;\n}\n.toast-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #a32d2d;\n  border: 1px solid #f09595;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  animation: _ngcontent-%COMP%_fadeIn 0.15s;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--color-background-primary, #fff);\n  border-radius: 12px;\n  width: 440px;\n  max-height: 80vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n}\n.modal-lg[_ngcontent-%COMP%] {\n  width: 540px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1a1a1a);\n  margin: 0;\n}\n.modal-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--color-background-secondary, #f5f5f3);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n}\n.modal-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  background: #fef2f2;\n  border: 1px solid #f09595;\n  border-radius: 6px;\n  font-size: 12px;\n  color: #a32d2d;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--color-text-secondary, #6b6b6b);\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 10px;\n  border: 0.5px solid var(--color-border-secondary, #d4d4d0);\n  border-radius: 8px;\n  font-size: 13px;\n  color: var(--color-text-primary, #1a1a1a);\n  background: var(--color-background-primary, #fff);\n  outline: none;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #0f6e56;\n  box-shadow: 0 0 0 2px rgba(15, 110, 86, 0.1);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-tertiary, #999);\n}\ntextarea.form-input[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 60px;\n}\nselect.form-input[_ngcontent-%COMP%] {\n  appearance: auto;\n}\n.modal-search[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  padding: 6px 10px;\n  border-radius: 8px;\n  border: 0.5px solid var(--color-border-secondary, #d4d4d0);\n}\n.modal-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.employe-list[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  border: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  border-radius: 8px;\n}\n.employe-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  cursor: pointer;\n  transition: background 0.1s;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n}\n.employe-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.employe-item[_ngcontent-%COMP%]:hover {\n  background: var(--color-background-secondary, #f5f5f3);\n}\n.employe-item.selected[_ngcontent-%COMP%] {\n  background: #e1f5ee;\n}\n.emp-check[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--color-text-tertiary, #999);\n}\n.employe-item.selected[_ngcontent-%COMP%]   .emp-check[_ngcontent-%COMP%] {\n  color: #0f6e56;\n}\n.emp-info-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.emp-email-sm[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-tertiary, #999);\n}\n.selected-count[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 11px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=adminrh-direction.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhDirectionComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-direction", standalone: true, imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule], template: `<!-- Notifications -->\r
<div class="toast-container" *ngIf="successMessage || error">\r
  <div class="toast toast-success" *ngIf="successMessage">\r
    <i class="ti ti-check"></i> {{ successMessage }}\r
  </div>\r
  <div class="toast toast-error" *ngIf="error">\r
    <i class="ti ti-alert-circle"></i> {{ error }}\r
  </div>\r
</div>\r
\r
<div class="page">\r
  <!-- HEADER -->\r
  <div class="ph">\r
    <div class="ph-icon"><i class="ti ti-building"></i></div>\r
    <div class="ph-info">\r
      <div class="ph-title">Directions & Organisation \u2014 {{ entrepriseNom }}</div>\r
      <div class="ph-sub">Structure hi\xE9rarchique : Direction \u2192 D\xE9partement \u2192 \xC9quipe</div>\r
    </div>\r
    <div class="ph-acts">\r
      <button class="btn-p" (click)="openCreateModal('direction')">\r
        <i class="ti ti-plus"></i> Nouvelle direction\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- KPI ROW -->\r
  <div class="kpi-row">\r
    <div class="kpi">\r
      <div class="ki ki-g"><i class="ti ti-building"></i></div>\r
      <div><div class="kpi-v">{{ totalDirections }}</div><div class="kpi-l">Directions</div></div>\r
    </div>\r
    <div class="kpi">\r
      <div class="ki ki-b"><i class="ti ti-layout-columns"></i></div>\r
      <div><div class="kpi-v">{{ totalDepartements }}</div><div class="kpi-l">D\xE9partements</div></div>\r
    </div>\r
    <div class="kpi">\r
      <div class="ki ki-a"><i class="ti ti-users-group"></i></div>\r
      <div><div class="kpi-v">{{ totalEquipes }}</div><div class="kpi-l">\xC9quipes</div></div>\r
    </div>\r
    <div class="kpi">\r
      <div class="ki ki-p"><i class="ti ti-users"></i></div>\r
      <div><div class="kpi-v">{{ totalEmployes }}</div><div class="kpi-l">Employ\xE9s affect\xE9s</div></div>\r
    </div>\r
  </div>\r
\r
  <!-- LOADING STATE -->\r
  <div class="loading-state" *ngIf="loading">\r
    <div class="spinner"></div>\r
    <span>Chargement de la structure...</span>\r
  </div>\r
\r
  <!-- MAIN LAYOUT -->\r
  <div class="layout" *ngIf="!loading">\r
    <!-- ARBRE GAUCHE -->\r
    <div class="tree-col">\r
      <div class="tree-head">\r
        <span class="th-title">Structure</span>\r
        <div class="search-sm">\r
          <i class="ti ti-search"></i>\r
          <input type="text" [(ngModel)]="searchFilter" placeholder="Filtrer..." class="search-input" />\r
        </div>\r
      </div>\r
      <div class="tree-scroll">\r
        <ng-container *ngFor="let dir of filteredArborescence; let i = index">\r
          <div class="dir-item">\r
            <!-- Direction header -->\r
            <div class="dir-header" [class.active]="isSelected(dir)" (click)="selectDirection(dir)">\r
              <i class="ti ti-chevron-right dh-toggle" [class.open]="isDirectionExpanded(dir)" (click)="toggleDirection(dir, $event)"></i>\r
              <div class="dh-icon" [ngClass]="getIconColor(i)">\r
                <i class="ti" [ngClass]="getDirIcon(i)"></i>\r
              </div>\r
              <div class="dh-info">\r
                <div class="dh-name">{{ dir.nom }}</div>\r
                <div class="dh-count">{{ (dir.enfants || []).length }} d\xE9partements \xB7 {{ dir.employes_count || 0 }} employ\xE9s</div>\r
              </div>\r
              <span class="dh-badge">{{ dir.employes_count || 0 }}</span>\r
            </div>\r
\r
            <!-- D\xE9partements (enfants level 2) -->\r
            <div class="dept-list" *ngIf="isDirectionExpanded(dir) && dir.enfants?.length">\r
              <div class="dept-item" *ngFor="let dept of dir.enfants; let j = index">\r
                <div class="dept-header" [class.active-d]="isSelected(dept)" (click)="selectDepartement(dept)">\r
                  <i class="ti ti-chevron-right dpt-toggle" [class.open]="isDepartementExpanded(dept)" (click)="toggleDepartement(dept, $event)"></i>\r
                  <div class="dpt-dot" [style.background]="getDotColor(j)"></div>\r
                  <span class="dpt-name">{{ dept.nom }}</span>\r
                  <span class="dpt-count">{{ dept.employes_count || 0 }} emp.</span>\r
                </div>\r
\r
                <!-- \xC9quipes (enfants level 3) -->\r
                <div class="team-list" *ngIf="isDepartementExpanded(dept) && dept.enfants?.length">\r
                  <div class="team-item" *ngFor="let equipe of dept.enfants" [class.active-t]="isSelected(equipe)" (click)="selectEquipe(equipe)">\r
                    <div class="ti-dot"></div>\r
                    {{ equipe.nom }}\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </ng-container>\r
\r
        <!-- Empty state -->\r
        <div class="empty-tree" *ngIf="!filteredArborescence.length && !loading">\r
          <i class="ti ti-building-community"></i>\r
          <p>Aucune direction trouv\xE9e</p>\r
          <button class="btn-p btn-sm" (click)="openCreateModal('direction')">\r
            <i class="ti ti-plus"></i> Cr\xE9er la premi\xE8re direction\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- DETAIL DROITE -->\r
    <div class="detail-col">\r
      <!-- No selection -->\r
      <div class="empty-detail" *ngIf="!selectedNode && !detailLoading">\r
        <i class="ti ti-click"></i>\r
        <p>S\xE9lectionnez une direction dans l'arbre pour voir ses d\xE9tails</p>\r
      </div>\r
\r
      <!-- Detail loading -->\r
      <div class="loading-state" *ngIf="detailLoading">\r
        <div class="spinner"></div>\r
      </div>\r
\r
      <!-- Detail content -->\r
      <ng-container *ngIf="detailDirection && !detailLoading">\r
        <!-- Header -->\r
        <div class="detail-head">\r
          <div class="dhead-icon"><i class="ti ti-users-group"></i></div>\r
          <div class="dhead-info">\r
            <div class="dhead-name">{{ detailDirection.nom }}</div>\r
            <div class="dhead-path">\r
              <ng-container *ngFor="let part of getBreadcrumb(); let last = last">\r
                <span [class.dhead-current]="last">{{ part }}</span>\r
                <i class="ti ti-chevron-right" *ngIf="!last"></i>\r
              </ng-container>\r
            </div>\r
          </div>\r
          <div class="dhead-acts">\r
            <button class="act-btn" (click)="openEditModal(detailDirection)">\r
              <i class="ti ti-edit"></i> Modifier\r
            </button>\r
            <button class="act-btn primary" (click)="openAffecterModal()">\r
              <i class="ti ti-user-plus"></i> Affecter\r
            </button>\r
            <button class="act-btn" (click)="openCreateModal(detailDirection.type === 'direction' ? 'sous_direction' : 'departement', detailDirection.id)">\r
              <i class="ti ti-plus"></i> Sous-structure\r
            </button>\r
            <button class="act-btn danger" (click)="confirmDelete()">\r
              <i class="ti ti-trash"></i>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Stats row -->\r
        <div class="stats-row">\r
          <div class="stat-card">\r
            <div class="sc-v">{{ detailDirection.employes_count || (detailDirection.employes || []).length }}</div>\r
            <div class="sc-l">Membres</div>\r
          </div>\r
          <div class="stat-card">\r
            <div class="sc-v">{{ (detailDirection.enfants || []).length }}</div>\r
            <div class="sc-l">Sous-structures</div>\r
          </div>\r
          <div class="stat-card">\r
            <div class="sc-v type-badge">{{ getTypeLabel(detailDirection.type) }}</div>\r
            <div class="sc-l">Type</div>\r
          </div>\r
          <div class="stat-card">\r
            <div class="sc-v" [class.status-active]="detailDirection.est_active" [class.status-inactive]="!detailDirection.est_active">\r
              {{ detailDirection.est_active ? 'Actif' : 'Inactif' }}\r
            </div>\r
            <div class="sc-l">Statut</div>\r
          </div>\r
        </div>\r
\r
        <!-- Tabs -->\r
        <div class="detail-tabs">\r
          <div class="dtab" [class.on]="detailTab === 'membres'" (click)="setDetailTab('membres')">\r
            <i class="ti ti-users"></i> Membres ({{ (detailDirection.employes || []).length }})\r
          </div>\r
          <div class="dtab" [class.on]="detailTab === 'structure'" (click)="setDetailTab('structure')">\r
            <i class="ti ti-sitemap"></i> Sous-structures\r
          </div>\r
        </div>\r
\r
        <!-- TAB: Membres -->\r
        <div class="dtv" *ngIf="detailTab === 'membres'">\r
          <table class="emp-table" *ngIf="detailDirection.employes?.length">\r
            <thead>\r
              <tr>\r
                <th>Employ\xE9</th>\r
                <th>Email</th>\r
                <th>Fonction</th>\r
                <th>Actions</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let emp of detailDirection.employes; let idx = index">\r
                <td>\r
                  <div class="emp-cell">\r
                    <div class="emp-av" [ngClass]="getAvatarClass(idx)">{{ getInitials(emp) }}</div>\r
                    <div>\r
                      <div class="emp-name">{{ emp.prenom }} {{ emp.nom }}</div>\r
                      <div class="emp-role">{{ emp.fonction || emp.matricule || '' }}</div>\r
                    </div>\r
                  </div>\r
                </td>\r
                <td class="emp-email">{{ emp.email }}</td>\r
                <td class="emp-fonction">{{ emp.fonction || '\u2014' }}</td>\r
                <td>\r
                  <div class="td-actions">\r
                    <button class="tbl-act danger" title="Retirer" (click)="retirerEmploye(emp.id)">\r
                      <i class="ti ti-x"></i>\r
                    </button>\r
                  </div>\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
          <div class="empty-tab" *ngIf="!detailDirection.employes?.length">\r
            <i class="ti ti-users"></i>\r
            <p>Aucun membre affect\xE9</p>\r
            <button class="btn-p btn-sm" (click)="openAffecterModal()">\r
              <i class="ti ti-user-plus"></i> Affecter collaborateur\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- TAB: Sous-structures -->\r
        <div class="dtv" *ngIf="detailTab === 'structure'">\r
          <div class="struct-grid" *ngIf="detailDirection.enfants?.length">\r
            <div class="struct-card" *ngFor="let child of detailDirection.enfants; let ci = index" (click)="selectDepartement(child)">\r
              <div class="sc-icon" [ngClass]="ci % 2 === 0 ? 'sci-g' : 'sci-b'">\r
                <i class="ti" [ngClass]="child.type === 'departement' ? 'ti-layout-columns' : 'ti-users-group'"></i>\r
              </div>\r
              <div class="sc-info">\r
                <div class="sc-name">{{ child.nom }}</div>\r
                <div class="sc-meta">{{ getTypeLabel(child.type) }}</div>\r
              </div>\r
              <i class="ti ti-chevron-right sc-arr"></i>\r
            </div>\r
            <div class="struct-card add-card" (click)="openCreateModal(detailDirection.type === 'direction' ? 'sous_direction' : 'departement', detailDirection.id)">\r
              <i class="ti ti-plus"></i>\r
              <span>Ajouter une sous-structure</span>\r
            </div>\r
          </div>\r
          <div class="empty-tab" *ngIf="!detailDirection.enfants?.length">\r
            <i class="ti ti-sitemap"></i>\r
            <p>Aucune sous-structure</p>\r
            <button class="btn-p btn-sm" (click)="openCreateModal(detailDirection.type === 'direction' ? 'sous_direction' : 'departement', detailDirection.id)">\r
              <i class="ti ti-plus"></i> Cr\xE9er une sous-structure\r
            </button>\r
          </div>\r
        </div>\r
      </ng-container>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550 MODAL CREATION / EDITION \u2550\u2550\u2550 -->\r
<div class="modal-overlay" *ngIf="showModal" (click)="closeModal()">\r
  <div class="modal-box" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3>{{ modalMode === 'create' ? 'Nouvelle structure' : 'Modifier' }}</h3>\r
      <button class="modal-close" (click)="closeModal()"><i class="ti ti-x"></i></button>\r
    </div>\r
    <form [formGroup]="modalForm" (ngSubmit)="submitModal()">\r
      <div class="modal-body">\r
        <div class="form-group">\r
          <label>Nom *</label>\r
          <input type="text" formControlName="nom" class="form-input" placeholder="Nom de la structure" />\r
        </div>\r
        <div class="form-group">\r
          <label>Type *</label>\r
          <select formControlName="type" class="form-input">\r
            <option value="direction">Direction</option>\r
            <option value="sous_direction">D\xE9partement / Sous-direction</option>\r
            <option value="departement">\xC9quipe</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>Description</label>\r
          <textarea formControlName="description" class="form-input" rows="3" placeholder="Description optionnelle"></textarea>\r
        </div>\r
        <div class="form-group">\r
          <label>Code</label>\r
          <input type="text" formControlName="code" class="form-input" placeholder="Code interne (ex: DIR-TECH)" />\r
        </div>\r
        <div class="modal-error" *ngIf="modalError">{{ modalError }}</div>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="btn-o" (click)="closeModal()">Annuler</button>\r
        <button type="submit" class="btn-p" [disabled]="modalForm.invalid || modalLoading">\r
          <span *ngIf="modalLoading" class="spinner-sm"></span>\r
          {{ modalMode === 'create' ? 'Cr\xE9er' : 'Enregistrer' }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550 MODAL AFFECTER EMPLOYES \u2550\u2550\u2550 -->\r
<div class="modal-overlay" *ngIf="showAffecterModal" (click)="closeAffecterModal()">\r
  <div class="modal-box modal-lg" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3>Affecter collaborateurs \xE0 \xAB {{ selectedNode?.nom }} \xBB</h3>\r
      <button class="modal-close" (click)="closeAffecterModal()"><i class="ti ti-x"></i></button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="search-sm modal-search">\r
        <i class="ti ti-search"></i>\r
        <input type="text" [(ngModel)]="employeSearch" placeholder="Rechercher un collaborateur..." class="search-input" />\r
      </div>\r
      <div class="employe-list" *ngIf="!affecterLoading">\r
        <div class="employe-item" *ngFor="let emp of filteredEmployes" [class.selected]="isEmployeSelected(emp.id)" (click)="toggleEmployeSelection(emp.id)">\r
          <div class="emp-check">\r
            <i class="ti" [ngClass]="isEmployeSelected(emp.id) ? 'ti-checkbox' : 'ti-square'"></i>\r
          </div>\r
          <div class="emp-av av-g">{{ getInitials(emp) }}</div>\r
          <div class="emp-info-line">\r
            <span class="emp-name">{{ emp.prenom }} {{ emp.nom }}</span>\r
            <span class="emp-email-sm">{{ emp.email }}</span>\r
          </div>\r
        </div>\r
        <div class="empty-tab" *ngIf="!filteredEmployes.length">\r
          <p>Aucun collaborateur disponible</p>\r
        </div>\r
      </div>\r
      <div class="loading-state" *ngIf="affecterLoading"><div class="spinner"></div></div>\r
    </div>\r
    <div class="modal-footer">\r
      <span class="selected-count">{{ selectedEmployeIds.length }} s\xE9lectionn\xE9(s)</span>\r
      <button type="button" class="btn-o" (click)="closeAffecterModal()">Annuler</button>\r
      <button type="button" class="btn-p" [disabled]="!selectedEmployeIds.length || affecterLoading" (click)="submitAffecter()">\r
        <span *ngIf="affecterLoading" class="spinner-sm"></span>\r
        Affecter\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/adminrh/adminrh-direction/adminrh-direction.component.scss */\n.page {\n  background: var(--color-background-tertiary, #f7f7f5);\n  min-height: 700px;\n}\n.ph {\n  background: var(--color-background-primary, #fff);\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  padding: 13px 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ph-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #e1f5ee;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  color: #0f6e56;\n  flex-shrink: 0;\n}\n.ph-info {\n  flex: 1;\n}\n.ph-title {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1a1a1a);\n}\n.ph-sub {\n  font-size: 11px;\n  color: var(--color-text-secondary, #6b6b6b);\n  margin-top: 2px;\n}\n.ph-acts {\n  display: flex;\n  gap: 8px;\n}\n.btn-o {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: 0.5px solid var(--color-border-secondary, #d4d4d0);\n  border-radius: 8px;\n  font-size: 12px;\n  color: var(--color-text-secondary, #6b6b6b);\n  background: transparent;\n  cursor: pointer;\n}\n.btn-o:hover {\n  background: var(--color-background-secondary, #f5f5f3);\n}\n.btn-p {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: none;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #0f6e56;\n  cursor: pointer;\n}\n.btn-p:hover {\n  background: #0b5a46;\n}\n.btn-p:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-sm {\n  padding: 5px 10px;\n  font-size: 11px;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  padding: 12px 20px;\n}\n.kpi {\n  background: var(--color-background-primary, #fff);\n  border: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  border-radius: 8px;\n  padding: 10px 12px;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ki {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.ki-g {\n  background: #e1f5ee;\n  color: #0f6e56;\n}\n.ki-b {\n  background: #e6f1fb;\n  color: #185fa5;\n}\n.ki-a {\n  background: #faeeda;\n  color: #854f0b;\n}\n.ki-p {\n  background: #eaf3de;\n  color: #3b6d11;\n}\n.kpi-v {\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1a1a1a);\n}\n.kpi-l {\n  font-size: 10px;\n  color: var(--color-text-secondary, #6b6b6b);\n  margin-top: 1px;\n}\n.layout {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 0;\n  min-height: 520px;\n  margin: 0 20px 20px;\n  border: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  border-radius: 12px;\n  overflow: hidden;\n  background: var(--color-background-primary, #fff);\n}\n.tree-col {\n  border-right: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  display: flex;\n  flex-direction: column;\n}\n.tree-head {\n  padding: 10px 14px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--color-background-secondary, #f5f5f3);\n}\n.th-title {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-secondary, #6b6b6b);\n  flex: 1;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.search-sm {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  border: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  border-radius: 8px;\n  padding: 4px 8px;\n  background: var(--color-background-primary, #fff);\n}\n.search-sm i {\n  font-size: 13px;\n  color: var(--color-text-tertiary, #999);\n}\n.search-input {\n  border: none;\n  outline: none;\n  font-size: 11px;\n  background: transparent;\n  color: var(--color-text-primary, #1a1a1a);\n  width: 80px;\n}\n.search-input::placeholder {\n  color: var(--color-text-tertiary, #999);\n}\n.tree-scroll {\n  flex: 1;\n  overflow-y: auto;\n  padding: 6px 0;\n}\n.tree-scroll::-webkit-scrollbar {\n  width: 3px;\n}\n.tree-scroll::-webkit-scrollbar-thumb {\n  background: var(--color-border-secondary, #d4d4d0);\n  border-radius: 3px;\n}\n.dir-item {\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n}\n.dir-item:last-child {\n  border-bottom: none;\n}\n.dir-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.dir-header:hover {\n  background: var(--color-background-secondary, #f5f5f3);\n}\n.dir-header.active {\n  background: #e1f5ee;\n}\n.dh-toggle {\n  font-size: 13px;\n  color: var(--color-text-tertiary, #999);\n  transition: transform 0.15s;\n  flex-shrink: 0;\n}\n.dh-toggle.open {\n  transform: rotate(90deg);\n}\n.dh-icon {\n  width: 26px;\n  height: 26px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.dhi-green {\n  background: #e1f5ee;\n  color: #0f6e56;\n}\n.dhi-blue {\n  background: #e6f1fb;\n  color: #185fa5;\n}\n.dhi-purple {\n  background: #eeedfe;\n  color: #534ab7;\n}\n.dhi-amber {\n  background: #faeeda;\n  color: #854f0b;\n}\n.dh-info {\n  flex: 1;\n  min-width: 0;\n}\n.dh-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1a1a1a);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dir-header.active .dh-name {\n  color: #0f6e56;\n}\n.dh-count {\n  font-size: 10px;\n  color: var(--color-text-secondary, #6b6b6b);\n  margin-top: 1px;\n}\n.dh-badge {\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 20px;\n  background: var(--color-background-secondary, #f5f5f3);\n  color: var(--color-text-secondary, #6b6b6b);\n  flex-shrink: 0;\n}\n.dept-list {\n  padding-left: 12px;\n  border-left: 1.5px solid var(--color-border-tertiary, #e8e8e4);\n  margin-left: 22px;\n}\n.dept-item {\n  margin: 2px 0;\n}\n.dept-header {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 6px 10px;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: background 0.12s;\n}\n.dept-header:hover {\n  background: var(--color-background-secondary, #f5f5f3);\n}\n.dept-header.active-d {\n  background: #f1efe8;\n}\n.dpt-toggle {\n  font-size: 12px;\n  color: var(--color-text-tertiary, #999);\n  transition: transform 0.15s;\n  flex-shrink: 0;\n}\n.dpt-toggle.open {\n  transform: rotate(90deg);\n}\n.dpt-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dpt-name {\n  font-size: 12px;\n  color: var(--color-text-secondary, #6b6b6b);\n  flex: 1;\n}\n.dept-header.active-d .dpt-name {\n  color: var(--color-text-primary, #1a1a1a);\n  font-weight: 500;\n}\n.dpt-count {\n  font-size: 10px;\n  color: var(--color-text-tertiary, #999);\n}\n.team-list {\n  padding-left: 10px;\n  border-left: 1px dashed var(--color-border-tertiary, #e8e8e4);\n  margin-left: 10px;\n}\n.team-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 9px;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: background 0.12s;\n  font-size: 12px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.team-item:hover {\n  background: var(--color-background-secondary, #f5f5f3);\n  color: var(--color-text-primary, #1a1a1a);\n}\n.team-item.active-t {\n  color: #0f6e56;\n  font-weight: 500;\n}\n.ti-dot {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: var(--color-border-secondary, #d4d4d0);\n  flex-shrink: 0;\n}\n.team-item.active-t .ti-dot {\n  background: #0f6e56;\n}\n.detail-col {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.detail-head {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  background: var(--color-background-secondary, #f5f5f3);\n  flex-wrap: wrap;\n}\n.dhead-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #e1f5ee;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n  color: #0f6e56;\n  flex-shrink: 0;\n}\n.dhead-info {\n  flex: 1;\n}\n.dhead-name {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1a1a1a);\n}\n.dhead-path {\n  font-size: 11px;\n  color: var(--color-text-secondary, #6b6b6b);\n  margin-top: 2px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.dhead-path i {\n  font-size: 11px;\n}\n.dhead-current {\n  font-weight: 600;\n  color: var(--color-text-primary, #1a1a1a);\n}\n.dhead-acts {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.act-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 11px;\n  border-radius: 8px;\n  font-size: 12px;\n  cursor: pointer;\n  border: 0.5px solid var(--color-border-secondary, #d4d4d0);\n  background: transparent;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.act-btn:hover {\n  background: var(--color-background-secondary, #f5f5f3);\n}\n.act-btn.primary {\n  background: #0f6e56;\n  border-color: #0f6e56;\n  color: #fff;\n  font-weight: 500;\n}\n.act-btn.primary:hover {\n  background: #0b5a46;\n}\n.act-btn.danger {\n  color: #a32d2d;\n  border-color: #f09595;\n}\n.act-btn.danger:hover {\n  background: #fef2f2;\n}\n.stats-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n}\n.stat-card {\n  background: var(--color-background-secondary, #f5f5f3);\n  border-radius: 8px;\n  padding: 9px 11px;\n  text-align: center;\n}\n.sc-v {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1a1a1a);\n}\n.sc-l {\n  font-size: 10px;\n  color: var(--color-text-secondary, #6b6b6b);\n  margin-top: 2px;\n}\n.status-active {\n  color: #0f6e56;\n}\n.status-inactive {\n  color: #a32d2d;\n}\n.type-badge {\n  font-size: 12px;\n}\n.detail-tabs {\n  display: flex;\n  padding: 0 16px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n}\n.dtab {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 9px 12px;\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--color-text-secondary, #6b6b6b);\n  border-bottom: 2px solid transparent;\n  transition: all 0.15s;\n}\n.dtab i {\n  font-size: 13px;\n}\n.dtab.on {\n  color: #0f6e56;\n  border-bottom-color: #0f6e56;\n  font-weight: 500;\n}\n.dtab:hover {\n  color: var(--color-text-primary, #1a1a1a);\n}\n.dtv {\n  padding: 14px 16px;\n  flex: 1;\n  overflow-y: auto;\n}\n.emp-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.emp-table th {\n  font-size: 10px;\n  font-weight: 500;\n  color: var(--color-text-secondary, #6b6b6b);\n  text-align: left;\n  padding: 7px 12px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  background: var(--color-background-secondary, #f5f5f3);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.emp-table td {\n  font-size: 12px;\n  padding: 9px 12px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  color: var(--color-text-primary, #1a1a1a);\n  vertical-align: middle;\n}\n.emp-table tr:last-child td {\n  border-bottom: none;\n}\n.emp-table tr:hover td {\n  background: var(--color-background-secondary, #f5f5f3);\n}\n.emp-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.emp-av {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 9px;\n  font-weight: 500;\n}\n.av-g {\n  background: #e1f5ee;\n  color: #085041;\n}\n.av-b {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.av-p {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.av-a {\n  background: #faeeda;\n  color: #633806;\n}\n.emp-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1a1a1a);\n}\n.emp-role {\n  font-size: 10px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.emp-email {\n  font-size: 11px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.emp-fonction {\n  font-size: 12px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.td-actions {\n  display: flex;\n  gap: 4px;\n}\n.tbl-act {\n  width: 24px;\n  height: 24px;\n  border: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.tbl-act.danger {\n  color: #a32d2d;\n}\n.tbl-act.danger:hover {\n  background: #fef2f2;\n}\n.struct-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.struct-card {\n  background: var(--color-background-secondary, #f5f5f3);\n  border: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  border-radius: 8px;\n  padding: 11px 13px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  transition: border-color 0.12s;\n}\n.struct-card:hover {\n  border-color: var(--color-border-secondary, #d4d4d0);\n}\n.sc-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.sci-g {\n  background: #e1f5ee;\n  color: #0f6e56;\n}\n.sci-b {\n  background: #e6f1fb;\n  color: #185fa5;\n}\n.sc-info {\n  flex: 1;\n}\n.sc-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1a1a1a);\n}\n.sc-meta {\n  font-size: 11px;\n  color: var(--color-text-secondary, #6b6b6b);\n  margin-top: 2px;\n}\n.sc-arr {\n  font-size: 14px;\n  color: var(--color-text-tertiary, #999);\n}\n.add-card {\n  border: 1.5px dashed var(--color-border-secondary, #d4d4d0);\n  background: transparent;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 16px;\n}\n.add-card i {\n  font-size: 20px;\n  color: var(--color-text-tertiary, #999);\n}\n.add-card span {\n  font-size: 12px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.empty-tree,\n.empty-detail,\n.empty-tab {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n}\n.empty-tree i,\n.empty-detail i,\n.empty-tab i {\n  font-size: 32px;\n  color: var(--color-text-tertiary, #999);\n  margin-bottom: 8px;\n}\n.empty-tree p,\n.empty-detail p,\n.empty-tab p {\n  font-size: 12px;\n  color: var(--color-text-secondary, #6b6b6b);\n  margin-bottom: 12px;\n}\n.empty-detail {\n  flex: 1;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 40px;\n}\n.loading-state span {\n  font-size: 12px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.spinner {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--color-border-tertiary, #e8e8e4);\n  border-top-color: #0f6e56;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n.spinner-sm {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border: 1.5px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.toast-container {\n  position: fixed;\n  top: 16px;\n  right: 16px;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.toast {\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  animation: slideIn 0.2s ease;\n}\n.toast-success {\n  background: #e1f5ee;\n  color: #085041;\n  border: 1px solid #a3e4cc;\n}\n.toast-error {\n  background: #fef2f2;\n  color: #a32d2d;\n  border: 1px solid #f09595;\n}\n@keyframes slideIn {\n  from {\n    transform: translateX(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  animation: fadeIn 0.15s;\n}\n.modal-box {\n  background: var(--color-background-primary, #fff);\n  border-radius: 12px;\n  width: 440px;\n  max-height: 80vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n}\n.modal-lg {\n  width: 540px;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n}\n.modal-header h3 {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1a1a1a);\n  margin: 0;\n}\n.modal-close {\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n.modal-close:hover {\n  background: var(--color-background-secondary, #f5f5f3);\n}\n.modal-body {\n  padding: 16px 18px;\n}\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n}\n.modal-error {\n  margin-top: 10px;\n  padding: 8px 12px;\n  background: #fef2f2;\n  border: 1px solid #f09595;\n  border-radius: 6px;\n  font-size: 12px;\n  color: #a32d2d;\n}\n.form-group {\n  margin-bottom: 12px;\n}\n.form-group label {\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--color-text-secondary, #6b6b6b);\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.form-input {\n  width: 100%;\n  padding: 8px 10px;\n  border: 0.5px solid var(--color-border-secondary, #d4d4d0);\n  border-radius: 8px;\n  font-size: 13px;\n  color: var(--color-text-primary, #1a1a1a);\n  background: var(--color-background-primary, #fff);\n  outline: none;\n}\n.form-input:focus {\n  border-color: #0f6e56;\n  box-shadow: 0 0 0 2px rgba(15, 110, 86, 0.1);\n}\n.form-input::placeholder {\n  color: var(--color-text-tertiary, #999);\n}\ntextarea.form-input {\n  resize: vertical;\n  min-height: 60px;\n}\nselect.form-input {\n  appearance: auto;\n}\n.modal-search {\n  margin-bottom: 12px;\n  padding: 6px 10px;\n  border-radius: 8px;\n  border: 0.5px solid var(--color-border-secondary, #d4d4d0);\n}\n.modal-search .search-input {\n  width: 100%;\n}\n.employe-list {\n  max-height: 300px;\n  overflow-y: auto;\n  border: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n  border-radius: 8px;\n}\n.employe-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  cursor: pointer;\n  transition: background 0.1s;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #e8e8e4);\n}\n.employe-item:last-child {\n  border-bottom: none;\n}\n.employe-item:hover {\n  background: var(--color-background-secondary, #f5f5f3);\n}\n.employe-item.selected {\n  background: #e1f5ee;\n}\n.emp-check {\n  font-size: 16px;\n  color: var(--color-text-tertiary, #999);\n}\n.employe-item.selected .emp-check {\n  color: #0f6e56;\n}\n.emp-info-line {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.emp-email-sm {\n  font-size: 10px;\n  color: var(--color-text-tertiary, #999);\n}\n.selected-count {\n  flex: 1;\n  font-size: 11px;\n  color: var(--color-text-secondary, #6b6b6b);\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=adminrh-direction.component.css.map */\n'] }]
  }], () => [{ type: DirectionService }, { type: UserService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhDirectionComponent, { className: "AdminrhDirectionComponent", filePath: "app/features/adminrh/adminrh-direction/adminrh-direction.component.ts", lineNumber: 17 });
})();
export {
  AdminrhDirectionComponent
};
//# sourceMappingURL=chunk-GZECTPKR.js.map
