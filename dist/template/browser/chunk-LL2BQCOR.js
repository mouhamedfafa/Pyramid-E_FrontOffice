import {
  SuperadminRoleComponent
} from "./chunk-I6EZTUEN.js";
import "./chunk-NIJ6MT74.js";
import {
  UserAddComponent
} from "./chunk-5L5OWXWJ.js";
import {
  sortRoleNames,
  sortRoles
} from "./chunk-CCCDGN6S.js";
import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import "./chunk-FGFZGLIF.js";
import {
  UserService
} from "./chunk-R4IU522L.js";
import {
  CustomPaginationComponent
} from "./chunk-ZJKM6ASN.js";
import "./chunk-YDGV2JUC.js";
import {
  PermissionService
} from "./chunk-KO4UL2MU.js";
import "./chunk-6DGDCR4J.js";
import "./chunk-K7E3GT3E.js";
import "./chunk-DN5YN62E.js";
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
  ActivatedRoute,
  RouterLink
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
  HostListener,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-F67U43FE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/superadmin/user/user-list.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => [1, 2, 3, 4, 5];
function UserListComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275text(2, "Retour aux entreprises");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_15_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedRoleFilter);
  }
}
function UserListComponent_ng_container_15_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_10_div_3_Template_div_click_0_listener() {
      const r_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setRoleFilter(r_r5.name));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ul-dropdown__item--on", ctx_r1.selectedRoleFilter === r_r5.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5.name);
  }
}
function UserListComponent_ng_container_15_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_10_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRoleFilter(""));
    });
    \u0275\u0275text(2, "Tous les r\xF4les");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserListComponent_ng_container_15_div_10_div_3_Template, 2, 3, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.allRoles);
  }
}
function UserListComponent_ng_container_15_div_11_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEntrepriseName(ctx_r1.selectedEntrepriseFilter), " ");
  }
}
function UserListComponent_ng_container_15_div_11_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_11_div_5_div_3_Template_div_click_0_listener() {
      const e_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setEntrepriseFilter(e_r9.id.toString()));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("ul-dropdown__item--on", ctx_r1.selectedEntrepriseFilter === e_r9.id.toString());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r9.nom);
  }
}
function UserListComponent_ng_container_15_div_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_11_div_5_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setEntrepriseFilter(""));
    });
    \u0275\u0275text(2, "Toutes les entreprises");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserListComponent_ng_container_15_div_11_div_5_div_3_Template, 2, 3, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.allEntreprises);
  }
}
function UserListComponent_ng_container_15_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_11_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleEntrepriseDropdown($event));
    });
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275text(3, " Entreprise ");
    \u0275\u0275template(4, UserListComponent_ng_container_15_div_11_span_4_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, UserListComponent_ng_container_15_div_11_div_5_Template, 4, 1, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("ul-filter--on", !!ctx_r1.selectedEntrepriseFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedEntrepriseFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showEntrepriseDropdown);
  }
}
function UserListComponent_ng_container_15_button_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ul-filter--on", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEntrepriseName(ctx_r1.entrepriseId.toString()), " ");
  }
}
function UserListComponent_ng_container_15_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedStatutFilter === "1" ? "Actif" : ctx_r1.selectedStatutFilter === "locked" ? "Verrouill\xE9" : "Inactif", " ");
  }
}
function UserListComponent_ng_container_15_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_18_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setStatutFilter(""));
    });
    \u0275\u0275text(2, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_18_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setStatutFilter("1"));
    });
    \u0275\u0275text(4, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_18_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setStatutFilter("0"));
    });
    \u0275\u0275text(6, "Inactif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_18_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setStatutFilter("locked"));
    });
    \u0275\u0275text(8, "Verrouill\xE9");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("ul-dropdown__item--on", ctx_r1.selectedStatutFilter === "1");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ul-dropdown__item--on", ctx_r1.selectedStatutFilter === "0");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ul-dropdown__item--on", ctx_r1.selectedStatutFilter === "locked");
  }
}
function UserListComponent_ng_container_15_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function UserListComponent_ng_container_15_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 50);
  }
}
function UserListComponent_ng_container_15_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275template(1, UserListComponent_ng_container_15_div_32_div_1_Template, 1, 0, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function UserListComponent_ng_container_15_table_33_tr_16_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r12.entreprise.nom);
  }
}
function UserListComponent_ng_container_15_table_33_tr_16_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1, "\u2014 Plateforme");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_15_table_33_tr_16_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_table_33_tr_16_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const u_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.archiveUser(u_r12));
    });
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_15_table_33_tr_16_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_table_33_tr_16_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const u_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reactivateUser(u_r12));
    });
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_15_table_33_tr_16_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_table_33_tr_16_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const u_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.unlockUser(u_r12));
    });
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_15_table_33_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 57)(3, "div", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 59);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 60);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 61);
    \u0275\u0275element(12, "i");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, UserListComponent_ng_container_15_table_33_tr_16_span_15_Template, 2, 1, "span", 62)(16, UserListComponent_ng_container_15_table_33_tr_16_span_16_Template, 2, 0, "span", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 64);
    \u0275\u0275element(19, "i");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 65);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "div", 66)(25, "button", 67);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_table_33_tr_16_Template_button_click_25_listener() {
      const u_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editUser(u_r12));
    });
    \u0275\u0275element(26, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, UserListComponent_ng_container_15_table_33_tr_16_button_27_Template, 2, 0, "button", 69)(28, UserListComponent_ng_container_15_table_33_tr_16_button_28_Template, 2, 0, "button", 70)(29, UserListComponent_ng_container_15_table_33_tr_16_button_29_Template, 2, 0, "button", 71);
    \u0275\u0275elementStart(30, "button", 72);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_table_33_tr_16_Template_button_click_30_listener() {
      const u_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteUser(u_r12.id));
    });
    \u0275\u0275element(31, "i", 73);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const u_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-role", ctx_r1.getRoleKey(ctx_r1.getRoleName(u_r12)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(u_r12), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getDisplayName(u_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r12.email);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-role", ctx_r1.getRoleKey(ctx_r1.getRoleName(u_r12)));
    \u0275\u0275advance();
    \u0275\u0275classMap("isax " + ctx_r1.getRoleIcon(ctx_r1.getRoleName(u_r12)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRoleName(u_r12), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", u_r12.entreprise == null ? null : u_r12.entreprise.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(u_r12.entreprise == null ? null : u_r12.entreprise.nom));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", ctx_r1.isLocked(u_r12) ? "verrouille" : u_r12.statut === 1 ? "actif" : "inactif");
    \u0275\u0275advance();
    \u0275\u0275classMap("isax " + (ctx_r1.isLocked(u_r12) ? "isax-lock" : u_r12.statut === 1 ? "isax-tick-circle" : "isax-minus-cirlce"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isLocked(u_r12) ? "Verrouill\xE9" : u_r12.statut === 1 ? "Actif" : "Inactif", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(u_r12.updated_at));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", u_r12.statut === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r12.statut === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLocked(u_r12));
  }
}
function UserListComponent_ng_container_15_table_33_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 82);
    \u0275\u0275element(2, "i", 83);
    \u0275\u0275text(3, " Aucun utilisateur trouv\xE9 ");
    \u0275\u0275elementEnd()();
  }
}
function UserListComponent_ng_container_15_table_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 51)(1, "thead")(2, "tr")(3, "th", 52);
    \u0275\u0275text(4, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 53);
    \u0275\u0275text(6, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 53);
    \u0275\u0275text(8, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 54);
    \u0275\u0275text(10, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 55);
    \u0275\u0275text(12, "Derni\xE8re activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 55);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, UserListComponent_ng_container_15_table_33_tr_16_Template, 32, 18, "tr", 56)(17, UserListComponent_ng_container_15_table_33_tr_17_Template, 4, 0, "tr", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.tableData)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tableData.length);
  }
}
function UserListComponent_ng_container_15_div_34_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_34_button_6_Template_button_click_0_listener() {
      const i_r18 = \u0275\u0275restoreView(_r17).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange(i_r18 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r18 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ul-pager__btn--active", ctx_r1.currentPage === i_r18 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r18 + 1);
  }
}
function UserListComponent_ng_container_15_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "span", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 86)(4, "button", 87);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_34_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UserListComponent_ng_container_15_div_34_button_6_Template, 2, 3, "button", 89);
    \u0275\u0275elementStart(7, "button", 87);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_34_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 90);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.skip + 1, "\u2013", ctx_r1.skip + ctx_r1.tableData.length, " sur ", ctx_r1.totalData, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pageSelection);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.pageSelection.length || !ctx_r1.pageSelection.length);
  }
}
function UserListComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 16)(2, "div", 17);
    \u0275\u0275element(3, "i", 18);
    \u0275\u0275elementStart(4, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function UserListComponent_ng_container_15_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchDataValue, $event) || (ctx_r1.searchDataValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UserListComponent_ng_container_15_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchData($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 20)(6, "button", 21);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleRoleDropdown($event));
    });
    \u0275\u0275element(7, "i", 22);
    \u0275\u0275text(8, " R\xF4le ");
    \u0275\u0275template(9, UserListComponent_ng_container_15_span_9_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, UserListComponent_ng_container_15_div_10_Template, 4, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, UserListComponent_ng_container_15_div_11_Template, 6, 4, "div", 25)(12, UserListComponent_ng_container_15_button_12_Template, 3, 3, "button", 26);
    \u0275\u0275elementStart(13, "div", 20)(14, "button", 21);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleStatutDropdown($event));
    });
    \u0275\u0275element(15, "i", 27);
    \u0275\u0275text(16, " Statut ");
    \u0275\u0275template(17, UserListComponent_ng_container_15_span_17_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, UserListComponent_ng_container_15_div_18_Template, 9, 6, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 28);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openImportDialog());
    });
    \u0275\u0275element(20, "i", 29);
    \u0275\u0275text(21, " Importer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 30);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275element(23, "i", 31);
    \u0275\u0275text(24, " Template ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 32);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportUsers());
    });
    \u0275\u0275element(26, "i", 33);
    \u0275\u0275text(27, " Exporter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 34);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNew());
    });
    \u0275\u0275element(29, "i", 35);
    \u0275\u0275text(30, " Nouvel utilisateur ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, UserListComponent_ng_container_15_div_31_Template, 3, 1, "div", 36)(32, UserListComponent_ng_container_15_div_32_Template, 2, 2, "div", 37)(33, UserListComponent_ng_container_15_table_33_Template, 18, 3, "table", 38)(34, UserListComponent_ng_container_15_div_34_Template, 9, 6, "div", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchDataValue);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(16, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ul-filter--on", !!ctx_r1.selectedRoleFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedRoleFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showRoleDropdown);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.entrepriseId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entrepriseId);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ul-filter--on", ctx_r1.selectedStatutFilter !== "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedStatutFilter !== "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showStatutDropdown);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.totalData > ctx_r1.pageSize);
  }
}
function UserListComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275element(1, "app-superadmin-role");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_17_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 50);
  }
}
function UserListComponent_div_17_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275template(1, UserListComponent_div_17_div_7_div_1_Template, 1, 0, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function UserListComponent_div_17_ng_container_8_ng_container_3_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 123);
  }
}
function UserListComponent_div_17_ng_container_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 121);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserListComponent_div_17_ng_container_8_ng_container_3_i_3_Template, 1, 0, "i", 122);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const role_r20 = ctx.$implicit;
    const last_r21 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getHierBadgeClass(role_r20));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r20.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r21);
  }
}
function UserListComponent_div_17_ng_container_8_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 124)(1, "span", 125);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const role_r22 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", role_r22.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getRoleColorClass(role_r22));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getRoleAbbr(role_r22));
  }
}
function UserListComponent_div_17_ng_container_8_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 126);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r23 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r23.name);
  }
}
function UserListComponent_div_17_ng_container_8_ng_container_16_tr_4_td_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 116);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_17_ng_container_8_ng_container_16_tr_4_td_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 117);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_17_ng_container_8_ng_container_16_tr_4_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, UserListComponent_div_17_ng_container_8_ng_container_16_tr_4_td_3_span_1_Template, 2, 0, "span", 128)(2, UserListComponent_div_17_ng_container_8_ng_container_16_tr_4_td_3_span_2_Template, 2, 0, "span", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r24 = ctx.$implicit;
    const perm_r25 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.roleHasPermission(role_r24, perm_r25.name));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.roleHasPermission(role_r24, perm_r25.name));
  }
}
function UserListComponent_div_17_ng_container_8_ng_container_16_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserListComponent_div_17_ng_container_8_ng_container_16_tr_4_td_3_Template, 3, 2, "td", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const perm_r25 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perm_r25.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.matrixRoles);
  }
}
function UserListComponent_div_17_ng_container_8_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td", 127);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, UserListComponent_div_17_ng_container_8_ng_container_16_tr_4_Template, 4, 2, "tr", 101);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cat_r26 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("colspan", ctx_r1.matrixRoles.length + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r26.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", cat_r26.permissions);
  }
}
function UserListComponent_div_17_ng_container_8_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 130);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r27 = ctx.$implicit;
    \u0275\u0275property("ngValue", opt_r27);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r27);
  }
}
function UserListComponent_div_17_ng_container_8_div_25_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function UserListComponent_div_17_ng_container_8_div_25_button_3_Template_button_click_0_listener() {
      const p_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.matrixGoToPage(p_r30));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r30 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("ul-pager__btn--active", ctx_r1.matrixCurrentPage === p_r30);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r30);
  }
}
function UserListComponent_div_17_ng_container_8_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "button", 87);
    \u0275\u0275listener("click", function UserListComponent_div_17_ng_container_8_div_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.matrixGoToPage(ctx_r1.matrixCurrentPage - 1));
    });
    \u0275\u0275element(2, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserListComponent_div_17_ng_container_8_div_25_button_3_Template, 2, 3, "button", 89);
    \u0275\u0275elementStart(4, "button", 87);
    \u0275\u0275listener("click", function UserListComponent_div_17_ng_container_8_div_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.matrixGoToPage(ctx_r1.matrixCurrentPage + 1));
    });
    \u0275\u0275element(5, "i", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.matrixCurrentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.matrixPageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.matrixCurrentPage === ctx_r1.matrixTotalPages);
  }
}
function UserListComponent_div_17_ng_container_8_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const role_r31 = ctx.$implicit;
    const last_r32 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRoleAbbr(role_r31));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" = ", role_r31.name, "", last_r32 ? "" : " \xB7 ", " ");
  }
}
function UserListComponent_div_17_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 99)(2, "div", 100);
    \u0275\u0275template(3, UserListComponent_div_17_ng_container_8_ng_container_3_Template, 4, 3, "ng-container", 101);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 102)(5, "table", 103)(6, "thead")(7, "tr")(8, "th", 104);
    \u0275\u0275text(9, "Permission");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, UserListComponent_div_17_ng_container_8_th_10_Template, 3, 3, "th", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "tr", 106)(12, "td", 107);
    \u0275\u0275text(13, "R\xF4les (ordre hi\xE9rarchique \u2193)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, UserListComponent_div_17_ng_container_8_td_14_Template, 2, 1, "td", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, UserListComponent_div_17_ng_container_8_ng_container_16_Template, 5, 3, "ng-container", 101);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 109)(18, "div", 110)(19, "label", 111);
    \u0275\u0275text(20, "Afficher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 112);
    \u0275\u0275listener("ngModelChange", function UserListComponent_div_17_ng_container_8_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.matrixChangePageSize($event));
    });
    \u0275\u0275template(22, UserListComponent_div_17_ng_container_8_option_22_Template, 2, 2, "option", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 85);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, UserListComponent_div_17_ng_container_8_div_25_Template, 6, 3, "div", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 115)(27, "span")(28, "span", 116);
    \u0275\u0275text(29, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Acc\xE8s complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span")(32, "span", 117);
    \u0275\u0275text(33, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Aucun acc\xE8s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 118);
    \u0275\u0275element(36, "i", 119);
    \u0275\u0275elementStart(37, "small", 120);
    \u0275\u0275template(38, UserListComponent_div_17_ng_container_8_ng_container_38_Template, 4, 3, "ng-container", 101);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.matrixRoles);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.matrixRoles);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.matrixRoles);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.matrixCategories);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.matrixPageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.matrixPageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", (ctx_r1.matrixCurrentPage - 1) * ctx_r1.matrixPageSize + 1, "\u2013", ctx_r1.matrixCurrentPage * ctx_r1.matrixPageSize > ctx_r1.matrixTotalPermissions ? ctx_r1.matrixTotalPermissions : ctx_r1.matrixCurrentPage * ctx_r1.matrixPageSize, " sur ", ctx_r1.matrixTotalPermissions, " permissions ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.matrixTotalPages > 1);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.matrixRoles);
  }
}
function UserListComponent_div_17_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275element(1, "i", 132);
    \u0275\u0275text(2, " Aucun r\xF4le trouv\xE9 pour afficher la matrice ");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94)(2, "h2", 95);
    \u0275\u0275element(3, "i", 96);
    \u0275\u0275text(4, "Matrice des Habilitations ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 97);
    \u0275\u0275text(6, " Chaque r\xF4le h\xE9rite des acc\xE8s de tous les r\xF4les qui lui sont inf\xE9rieurs dans la hi\xE9rarchie. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, UserListComponent_div_17_div_7_Template, 2, 2, "div", 37)(8, UserListComponent_div_17_ng_container_8_Template, 39, 11, "ng-container", 8)(9, UserListComponent_div_17_div_9_Template, 3, 0, "div", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.matrixLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.matrixLoading && ctx_r1.matrixRoles.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.matrixLoading && !ctx_r1.matrixRoles.length);
  }
}
function UserListComponent_div_18_ng_container_9_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 155);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedFile.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", (ctx_r1.selectedFile.size / 1024 / 1024).toFixed(2), " MB)");
  }
}
function UserListComponent_div_18_ng_container_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145)(1, "div", 156)(2, "div", 157);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.importProgress, "%");
    \u0275\u0275attribute("aria-valuenow", ctx_r1.importProgress);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.importProgress, "% ");
  }
}
function UserListComponent_div_18_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 145)(2, "label", 146);
    \u0275\u0275text(3, "Fichier Excel / CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 147);
    \u0275\u0275listener("change", function UserListComponent_div_18_ng_container_9_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 148);
    \u0275\u0275text(6, "Formats accept\xE9s : .xlsx, .xls, .csv");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, UserListComponent_div_18_ng_container_9_div_7_Template, 5, 2, "div", 149)(8, UserListComponent_div_18_ng_container_9_div_8_Template, 4, 4, "div", 150);
    \u0275\u0275elementStart(9, "div", 151)(10, "h6", 152);
    \u0275\u0275element(11, "i", 119);
    \u0275\u0275text(12, "Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul", 153)(14, "li");
    \u0275\u0275text(15, "T\xE9l\xE9chargez d'abord le template pour voir la structure requise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li");
    \u0275\u0275text(17, "Colonnes obligatoires : ");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19, "nom, prenom, email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21, "Colonnes optionnelles : ");
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23, "matricule, direction, role, entreprise");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li");
    \u0275\u0275text(25, "Matricule et num\xE9ro de t\xE9l\xE9phone doivent \xEAtre uniques");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isImporting);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImporting);
  }
}
function UserListComponent_div_18_ng_container_10_div_1_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r35 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r35);
  }
}
function UserListComponent_div_18_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159)(1, "h6", 160);
    \u0275\u0275element(2, "i", 161);
    \u0275\u0275text(3, "Structure du fichier invalide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 153);
    \u0275\u0275template(5, UserListComponent_div_18_ng_container_10_div_1_li_5_Template, 2, 1, "li", 101);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.importResult.headerErrors);
  }
}
function UserListComponent_div_18_ng_container_10_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164);
    \u0275\u0275element(1, "i", 165);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.importResult.totalCreated);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" utilisateur(s) cr\xE9\xE9(s) sur ", ctx_r1.importResult.totalProcessed, " trait\xE9(s) ");
  }
}
function UserListComponent_div_18_ng_container_10_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154);
    \u0275\u0275element(1, "i", 119);
    \u0275\u0275text(2, " Aucune ligne \xE0 traiter dans le fichier. ");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_18_ng_container_10_ng_container_2_div_3_div_5_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r36 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r36);
  }
}
function UserListComponent_div_18_ng_container_10_ng_container_2_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 171)(1, "span", 172);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 173);
    \u0275\u0275template(4, UserListComponent_div_18_ng_container_10_ng_container_2_div_3_div_5_li_4_Template, 2, 1, "li", 101);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r37 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ligne ", e_r37.line);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", e_r37.errors);
  }
}
function UserListComponent_div_18_ng_container_10_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 166)(1, "div", 167);
    \u0275\u0275element(2, "i", 168);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 169);
    \u0275\u0275template(5, UserListComponent_div_18_ng_container_10_ng_container_2_div_3_div_5_Template, 5, 2, "div", 170);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.importResult.rowErrors.length, " ligne(s) en erreur ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.importResult.rowErrors);
  }
}
function UserListComponent_div_18_ng_container_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UserListComponent_div_18_ng_container_10_ng_container_2_div_1_Template, 5, 2, "div", 162)(2, UserListComponent_div_18_ng_container_10_ng_container_2_div_2_Template, 3, 0, "div", 149)(3, UserListComponent_div_18_ng_container_10_ng_container_2_div_3_Template, 6, 2, "div", 163);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importResult.totalCreated > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importResult.totalCreated === 0 && ctx_r1.importResult.totalErrors === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importResult.rowErrors.length);
  }
}
function UserListComponent_div_18_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UserListComponent_div_18_ng_container_10_div_1_Template, 6, 1, "div", 158)(2, UserListComponent_div_18_ng_container_10_ng_container_2_Template, 4, 3, "ng-container", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importResult.headerErrors.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.importResult.headerErrors.length);
  }
}
function UserListComponent_div_18_button_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 176);
  }
}
function UserListComponent_div_18_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 174);
    \u0275\u0275listener("click", function UserListComponent_div_18_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.importUsers());
    });
    \u0275\u0275template(1, UserListComponent_div_18_button_14_span_1_Template, 1, 0, "span", 175);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.selectedFile || ctx_r1.isImporting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImporting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isImporting ? "Import en cours..." : "Importer", " ");
  }
}
function UserListComponent_div_18_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 177);
    \u0275\u0275listener("click", function UserListComponent_div_18_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.importResult = null;
      return \u0275\u0275resetView(ctx_r1.selectedFile = null);
    });
    \u0275\u0275element(1, "i", 178);
    \u0275\u0275text(2, " Nouvel import ");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 134)(2, "div", 135)(3, "div", 136)(4, "h5", 137);
    \u0275\u0275element(5, "i", 138);
    \u0275\u0275text(6, "Importer des utilisateurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 139);
    \u0275\u0275listener("click", function UserListComponent_div_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportDialog());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 140);
    \u0275\u0275template(9, UserListComponent_div_18_ng_container_9_Template, 26, 3, "ng-container", 8)(10, UserListComponent_div_18_ng_container_10_Template, 3, 2, "ng-container", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 141)(12, "button", 142);
    \u0275\u0275listener("click", function UserListComponent_div_18_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportDialog());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, UserListComponent_div_18_button_14_Template, 3, 3, "button", 143)(15, UserListComponent_div_18_button_15_Template, 3, 0, "button", 144);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.showImportDialog ? "block" : "none");
    \u0275\u0275classProp("show", ctx_r1.showImportDialog);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", !ctx_r1.importResult);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importResult);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.importResult ? "Fermer" : "Annuler", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.importResult);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importResult && !ctx_r1.importResult.headerErrors.length);
  }
}
function UserListComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 179);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.showImportDialog);
  }
}
var UserListComponent = class _UserListComponent {
  userService;
  permissionService;
  route;
  // ── Tabs ──────────────────────────────────────
  activeTab = "users";
  // ── Pagination ───────────────────────────────
  pageSize = 10;
  tableData = [];
  tableDataCopy = [];
  actualData = [];
  currentPage = 1;
  skip = 0;
  limit = this.pageSize;
  totalData = 0;
  pageSelection = [];
  // ── Filtres ──────────────────────────────────
  searchDataValue = "";
  selectedRoleFilter = "";
  selectedStatutFilter = "";
  selectedEntrepriseFilter = "";
  showRoleDropdown = false;
  showStatutDropdown = false;
  showEntrepriseDropdown = false;
  // ── Context entreprise (depuis query param) ──
  entrepriseId = null;
  // ── Listes pour filtres ──────────────────────
  allRoles = [];
  allEntreprises = [];
  // ── KPIs topbar ──────────────────────────────
  get rolesCount() {
    return this.availableRoles.length;
  }
  get entreprisesCount() {
    return new Set(this.actualData.map((u) => u.entreprise_id).filter(Boolean)).size;
  }
  get availableRoles() {
    const roles = [...new Set(this.actualData.map((u) => this.getRoleName(u)).filter(Boolean))];
    return sortRoleNames(roles);
  }
  // ── État ─────────────────────────────────────
  loading = false;
  error = "";
  userDialog = false;
  isEditMode = false;
  selectedUser = null;
  // ── Import ───────────────────────────────────
  selectedFile = null;
  isImporting = false;
  importProgress = 0;
  showImportDialog = false;
  importResult = null;
  // ── Matrice des habilitations ──────────────
  matrixRoles = [];
  matrixCategories = [];
  matrixLoading = false;
  matrixPageSize = 20;
  matrixPageSizeOptions = [20, 40, 80, 100, 200];
  matrixCurrentPage = 1;
  matrixAllPermissions = [];
  matrixTotalPermissions = 0;
  constructor(userService, permissionService, route) {
    this.userService = userService;
    this.permissionService = permissionService;
    this.route = route;
  }
  ngOnInit() {
    this.loadRoles();
    this.loadEntreprises();
    this.route.queryParamMap.subscribe((params) => {
      const id = params.get("entreprise_id");
      this.entrepriseId = id ? +id : null;
      this.selectedEntrepriseFilter = id || "";
      this.getUserList();
    });
  }
  loadRoles() {
    this.userService.getRoles().subscribe({
      next: (response) => {
        const roles = response.roles || [];
        this.allRoles = sortRoles(roles);
        console.log("Roles charg\xE9s:", this.allRoles);
      },
      error: (err) => {
        console.error("Erreur lors du chargement des r\xF4les:", err);
      }
    });
  }
  loadEntreprises() {
    this.userService.getEntreprises().subscribe({
      next: (response) => {
        this.allEntreprises = response.entreprises || response.data || response || [];
        console.log("Entreprises charg\xE9es:", this.allEntreprises);
      },
      error: (err) => {
        console.error("Erreur lors du chargement des entreprises:", err);
      }
    });
  }
  // ── Toggle dropdowns ──
  toggleRoleDropdown(event) {
    event.stopPropagation();
    this.showStatutDropdown = false;
    this.showEntrepriseDropdown = false;
    this.showRoleDropdown = !this.showRoleDropdown;
  }
  toggleStatutDropdown(event) {
    event.stopPropagation();
    this.showRoleDropdown = false;
    this.showEntrepriseDropdown = false;
    this.showStatutDropdown = !this.showStatutDropdown;
  }
  toggleEntrepriseDropdown(event) {
    event.stopPropagation();
    this.showRoleDropdown = false;
    this.showStatutDropdown = false;
    this.showEntrepriseDropdown = !this.showEntrepriseDropdown;
  }
  // ── Ferme les dropdowns sur clic extérieur ──
  onDocumentClick() {
    this.showRoleDropdown = false;
    this.showStatutDropdown = false;
    this.showEntrepriseDropdown = false;
  }
  // ════════════════════════════════════════════
  // TABS
  // ════════════════════════════════════════════
  setTab(tab) {
    this.activeTab = tab;
    if (tab === "matrix" && !this.matrixRoles.length) {
      this.loadMatrix();
    }
  }
  // ════════════════════════════════════════════
  // MATRICE DES HABILITATIONS
  // ════════════════════════════════════════════
  loadMatrix() {
    this.matrixLoading = true;
    this.userService.getRoles().subscribe({
      next: (response) => {
        const roles = response.roles || [];
        this.matrixRoles = roles.filter((r) => r.role_level != null).sort((a, b) => (a.role_level || 99) - (b.role_level || 99));
        this.permissionService.getAllPermissions().subscribe({
          next: (permRes) => {
            const permissions = permRes.permissions || [];
            this.matrixAllPermissions = permissions.map((p) => __spreadProps(__spreadValues({}, p), { category: p.category || "G\xE9n\xE9ral" })).sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
            this.matrixTotalPermissions = this.matrixAllPermissions.length;
            this.matrixCurrentPage = 1;
            this.buildMatrixPage();
            this.matrixLoading = false;
          },
          error: () => {
            this.matrixLoading = false;
          }
        });
      },
      error: () => {
        this.matrixLoading = false;
      }
    });
  }
  buildMatrixPage() {
    const start = (this.matrixCurrentPage - 1) * this.matrixPageSize;
    const pagePerms = this.matrixAllPermissions.slice(start, start + this.matrixPageSize);
    const categoryMap = /* @__PURE__ */ new Map();
    for (const perm of pagePerms) {
      const cat = perm.category || "G\xE9n\xE9ral";
      if (!categoryMap.has(cat))
        categoryMap.set(cat, []);
      categoryMap.get(cat).push(perm);
    }
    this.matrixCategories = Array.from(categoryMap.entries()).map(([name, perms]) => ({ name, permissions: perms }));
  }
  get matrixTotalPages() {
    return Math.ceil(this.matrixTotalPermissions / this.matrixPageSize);
  }
  get matrixPageNumbers() {
    return Array.from({ length: this.matrixTotalPages }, (_, i) => i + 1);
  }
  matrixChangePageSize(size) {
    this.matrixPageSize = size;
    this.matrixCurrentPage = 1;
    this.buildMatrixPage();
  }
  matrixGoToPage(page) {
    if (page < 1 || page > this.matrixTotalPages)
      return;
    this.matrixCurrentPage = page;
    this.buildMatrixPage();
  }
  roleHasPermission(role, permissionName) {
    if (!role.permissions)
      return false;
    return role.permissions.some((p) => p.name === permissionName);
  }
  getRoleAbbr(role) {
    const map = {
      "super admin": "SA",
      "superadmin holding": "SH",
      "admin rh holding": "ARH-H",
      "admin rh": "ARH",
      "admin it": "AIT",
      "responsable rh": "RRH",
      "manager": "MGR",
      "formateur": "FOR",
      "consultant": "CST",
      "employ\xE9": "EMP"
    };
    return map[role.name?.toLowerCase()] || role.name?.substring(0, 3).toUpperCase() || "?";
  }
  getRoleColorClass(role) {
    const name = role.name?.toLowerCase() || "";
    if (name.includes("super admin") && !name.includes("holding"))
      return "ul-mh--sa";
    if (name.includes("holding"))
      return "ul-mh--holding";
    if (name.includes("admin rh"))
      return "ul-mh--rh";
    if (name.includes("admin it"))
      return "ul-mh--it";
    if (name.includes("responsable rh"))
      return "ul-mh--rh";
    if (name.includes("manager"))
      return "ul-mh--mgr";
    if (name.includes("formateur") || name.includes("consultant"))
      return "ul-mh--form";
    if (name.includes("employ\xE9") || name.includes("employee"))
      return "ul-mh--emp";
    return "ul-mh--default";
  }
  getHierBadgeClass(role) {
    const name = role.name?.toLowerCase() || "";
    if (name.includes("super admin") && !name.includes("holding"))
      return "ul-hier--sa";
    if (name.includes("holding"))
      return "ul-hier--holding";
    if (name.includes("admin rh"))
      return "ul-hier--rh";
    if (name.includes("admin it"))
      return "ul-hier--it";
    if (name.includes("responsable rh"))
      return "ul-hier--rh";
    if (name.includes("manager"))
      return "ul-hier--mgr";
    if (name.includes("formateur") || name.includes("consultant"))
      return "ul-hier--form";
    if (name.includes("employ\xE9") || name.includes("employee"))
      return "ul-hier--emp";
    return "ul-hier--default";
  }
  // ════════════════════════════════════════════
  // CHARGEMENT
  // ════════════════════════════════════════════
  getUserList() {
    this.loading = true;
    this.error = "";
    const request$ = this.entrepriseId ? this.userService.getEmployesByEntreprise(this.entrepriseId) : this.userService.getUsers();
    request$.subscribe({
      next: (response) => {
        this.actualData = response.employes ?? response.users ?? response.data ?? [];
        this.tableDataCopy = [...this.actualData];
        this.totalData = this.actualData.length;
        this.calculateTotalPages(this.totalData, this.pageSize);
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Impossible de charger les utilisateurs.");
        this.loading = false;
      }
    });
  }
  refreshData() {
    this.getUserList();
  }
  // ════════════════════════════════════════════
  // FILTRES
  // ════════════════════════════════════════════
  setRoleFilter(role) {
    this.selectedRoleFilter = role;
    this.showRoleDropdown = false;
    this.applyFilters();
  }
  setStatutFilter(s) {
    this.selectedStatutFilter = s;
    this.showStatutDropdown = false;
    this.applyFilters();
  }
  setEntrepriseFilter(id) {
    this.selectedEntrepriseFilter = id;
    this.showEntrepriseDropdown = false;
    this.applyFilters();
  }
  searchData(value) {
    this.searchDataValue = value;
    this.applyFilters();
  }
  applyFilters() {
    let data = [...this.tableDataCopy];
    if (this.searchDataValue.trim()) {
      const q = this.searchDataValue.toLowerCase();
      data = data.filter((u) => u.nom?.toLowerCase().includes(q) || u.prenom?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q) || u.fonction?.toLowerCase().includes(q) || u.numero?.toLowerCase().includes(q));
    }
    if (this.selectedRoleFilter) {
      data = data.filter((u) => this.getRoleName(u) === this.selectedRoleFilter);
    }
    if (this.selectedStatutFilter !== "") {
      if (this.selectedStatutFilter === "locked") {
        data = data.filter((u) => this.isLocked(u));
      } else {
        const s = +this.selectedStatutFilter;
        data = data.filter((u) => u.statut === s);
      }
    }
    if (this.selectedEntrepriseFilter) {
      const eid = +this.selectedEntrepriseFilter;
      data = data.filter((u) => u.entreprise_id === eid);
    }
    this.actualData = data;
    this.totalData = data.length;
    this.currentPage = 1;
    this.calculateTotalPages(this.totalData, this.pageSize);
    this.getTableData({ skip: 0, limit: this.pageSize });
  }
  // ════════════════════════════════════════════
  // PAGINATION
  // ════════════════════════════════════════════
  getTableData(opt) {
    this.skip = opt.skip;
    this.limit = opt.limit;
    this.tableData = this.actualData.slice(this.skip, this.skip + this.limit);
  }
  onPageChange(page) {
    this.currentPage = page;
    this.getTableData({ skip: (page - 1) * this.pageSize, limit: this.pageSize });
  }
  calculateTotalPages(total, size) {
    this.pageSelection = [];
    for (let i = 1; i <= Math.ceil(total / size); i++) {
      this.pageSelection.push({ skip: (i - 1) * size, limit: size });
    }
  }
  // ════════════════════════════════════════════
  // CRUD
  // ════════════════════════════════════════════
  openNew() {
    this.userDialog = true;
    this.isEditMode = false;
    this.selectedUser = null;
  }
  hideDialog() {
    this.userDialog = false;
    this.selectedUser = null;
  }
  editUser(user) {
    this.userDialog = true;
    this.isEditMode = true;
    this.selectedUser = __spreadValues({}, user);
  }
  deleteUser(id) {
    if (!confirm("Supprimer cet utilisateur ?"))
      return;
    this.userService.deleteUser(id).subscribe({ next: () => this.refreshData() });
  }
  archiveUser(user) {
    if (!confirm("Archiver cet utilisateur ?"))
      return;
    this.userService.updateUser(user.id, __spreadProps(__spreadValues({}, user), { statut: 0 })).subscribe({ next: () => this.refreshData() });
  }
  reactivateUser(user) {
    if (!confirm("R\xE9activer cet utilisateur ?"))
      return;
    this.userService.updateUser(user.id, __spreadProps(__spreadValues({}, user), { statut: 1 })).subscribe({ next: () => this.refreshData() });
  }
  // ════════════════════════════════════════════
  // IMPORT
  // ════════════════════════════════════════════
  openImportDialog() {
    this.showImportDialog = true;
    this.selectedFile = null;
    this.importProgress = 0;
    this.importResult = null;
  }
  closeImportDialog() {
    this.showImportDialog = false;
    this.isImporting = false;
    this.importResult = null;
  }
  onFileSelected(event) {
    const f = event.target.files?.[0];
    if (!f)
      return;
    const ok = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
      "text/csv"
    ].includes(f.type);
    this.selectedFile = ok ? f : null;
    if (!ok)
      alert("Format non support\xE9. Utilisez .xlsx, .xls ou .csv");
  }
  importUsers() {
    if (!this.selectedFile)
      return;
    this.isImporting = true;
    this.importProgress = 0;
    this.importResult = null;
    this.userService.importUsers(this.selectedFile).subscribe({
      next: (res) => {
        this.isImporting = false;
        this.importProgress = 100;
        this.importResult = {
          done: true,
          totalProcessed: res.total_processed ?? 0,
          totalCreated: res.total_created ?? 0,
          totalErrors: res.total_errors ?? 0,
          headerErrors: res.header_errors ?? [],
          rowErrors: (res.errors ?? []).map((e) => ({ line: e.line, errors: e.errors }))
        };
        if (res.total_created > 0)
          this.refreshData();
      },
      error: (err) => {
        this.isImporting = false;
        this.importResult = {
          done: true,
          totalProcessed: 0,
          totalCreated: 0,
          totalErrors: 1,
          headerErrors: [err.error?.message ?? "Erreur serveur lors de l'import"],
          rowErrors: []
        };
      }
    });
  }
  downloadTemplate() {
    this.userService.downloadTemplate().subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "template_import_users.xlsx";
        link.click();
        window.URL.revokeObjectURL(url);
      },
      error: () => alert("Erreur lors du t\xE9l\xE9chargement du template")
    });
  }
  exportUsers() {
    const data = this.tableDataCopy;
    if (!data.length) {
      alert("Aucune donn\xE9e \xE0 exporter");
      return;
    }
    const headers = ["Nom", "Pr\xE9nom", "Email", "Matricule", "Direction", "R\xF4le", "Statut"];
    const rows = data.map((u) => [
      u.nom || "",
      u.prenom || "",
      u.email || "",
      u.matricule || "",
      u.direction || "",
      this.getRoleName(u),
      u.statut === 1 ? "Actif" : "Inactif"
    ]);
    const csv = [headers, ...rows].map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(";")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `utilisateurs_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  // ════════════════════════════════════════════
  // HELPERS TEMPLATE
  // ════════════════════════════════════════════
  isLocked(u) {
    return !!u.locked_until && new Date(u.locked_until) > /* @__PURE__ */ new Date();
  }
  unlockUser(user) {
    if (!confirm(`D\xE9bloquer le compte de ${user.email} ?`))
      return;
    this.userService.unlockUser(user.id).subscribe({
      next: () => this.refreshData(),
      error: (err) => alert(err.error?.message || "Erreur lors du d\xE9blocage")
    });
  }
  trackById(_, u) {
    return u.id;
  }
  getDisplayName(u) {
    return u.name || [u.prenom, u.nom].filter(Boolean).join(" ") || u.email;
  }
  getInitials(u) {
    const name = this.getDisplayName(u);
    return name.split(" ").map((w) => w[0]).join("").substring(0, 2).toUpperCase();
  }
  getRoleName(u) {
    return u.role?.name || "Non d\xE9fini";
  }
  getRoleKey(roleName) {
    const map = {
      "super admin": "superadmin",
      "superadmin": "superadmin",
      "admin rh": "adminrh",
      "responsable rh": "adminrh",
      "responsable rh groupe": "adminrh",
      "formateur": "formateur",
      "employ\xE9": "employe",
      "employee": "employe"
    };
    return map[roleName?.toLowerCase()] ?? "default";
  }
  getRoleIcon(roleName) {
    const map = {
      superadmin: "isax-shield-tick",
      adminrh: "isax-briefcase",
      formateur: "isax-teacher",
      employe: "isax-user"
    };
    return map[this.getRoleKey(roleName)] ?? "isax-user";
  }
  formatDate(d) {
    if (!d)
      return "\u2014";
    const diff = Date.now() - new Date(d).getTime();
    const h = Math.floor(diff / 36e5);
    const j = Math.floor(diff / 864e5);
    if (h < 1)
      return "\xC0 l'instant";
    if (h < 24)
      return `Il y a ${h}h`;
    if (j < 2)
      return "Hier";
    return `Il y a ${j}j`;
  }
  getEntrepriseName(id) {
    const entreprise = this.allEntreprises.find((e) => e.id.toString() === id);
    return entreprise?.nom || `Entreprise #${id}`;
  }
  static \u0275fac = function UserListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserListComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(PermissionService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserListComponent, selectors: [["app-user-list"]], hostBindings: function UserListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function UserListComponent_click_HostBindingHandler() {
        return ctx.onDocumentClick();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 21, vars: 21, consts: [[1, "ul-shell"], [1, "ul-topbar"], [1, "isax", "isax-people", "ul-topbar__icon"], [1, "ul-topbar__title"], [1, "ul-topbar__stats"], ["routerLink", "/superadmin/superadmin-companymanagement", "class", "ul-back", 4, "ngIf"], [1, "ul-tabbar"], [1, "ul-tab", 3, "click"], [4, "ngIf"], ["class", "ul-role-embed", 4, "ngIf"], ["class", "ul-matrix-wrap", 4, "ngIf"], ["class", "modal", "tabindex", "-1", "role", "dialog", 3, "show", "display", 4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [3, "onClose", "onSave", "visible", "isEditMode", "userData"], ["routerLink", "/superadmin/superadmin-companymanagement", 1, "ul-back"], [1, "isax", "isax-arrow-left-2", "me-1"], [1, "ul-toolbar"], [1, "ul-search"], [1, "isax", "isax-search-normal-1", "ul-search__icon"], ["type", "search", "placeholder", "Rechercher un utilisateur...", 1, "ul-search__input", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "ul-filter-group"], [1, "ul-filter", 3, "click"], [1, "isax", "isax-filter"], ["class", "ul-filter__chip", 4, "ngIf"], ["class", "ul-dropdown", 4, "ngIf"], ["class", "ul-filter-group", 4, "ngIf"], ["class", "ul-filter", 3, "ul-filter--on", 4, "ngIf"], [1, "isax", "isax-tick-circle"], [1, "ul-import-btn", 3, "click"], [1, "isax", "isax-import"], [1, "ul-tpl-btn", 3, "click"], [1, "isax", "isax-export"], [1, "ul-export-btn", 3, "click"], [1, "isax", "isax-document-download"], [1, "ul-add-btn", 3, "click"], [1, "isax", "isax-add"], ["class", "ul-alert", 4, "ngIf"], ["class", "ul-skeletons", 4, "ngIf"], ["class", "ul-table", 4, "ngIf"], ["class", "ul-pager", 4, "ngIf"], [1, "ul-filter__chip"], [1, "ul-dropdown"], [1, "ul-dropdown__item", 3, "click"], ["class", "ul-dropdown__item", 3, "ul-dropdown__item--on", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-building"], [1, "ul-filter"], [1, "ul-alert"], [1, "isax", "isax-warning-2"], [1, "ul-skeletons"], ["class", "ul-skeleton-row", 4, "ngFor", "ngForOf"], [1, "ul-skeleton-row"], [1, "ul-table"], [2, "width", "28%"], [2, "width", "16%"], [2, "width", "12%"], [2, "width", "14%"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ul-user"], [1, "ul-avatar"], [1, "ul-user__name"], [1, "ul-user__email"], [1, "ul-role-badge"], ["class", "ul-cie", 4, "ngIf"], ["class", "ul-cie-none", 4, "ngIf"], [1, "ul-statut"], [1, "ul-date"], [1, "ul-actions"], ["title", "Modifier", 1, "ul-act", 3, "click"], [1, "isax", "isax-edit"], ["class", "ul-act ul-act--warn", "title", "Archiver", 3, "click", 4, "ngIf"], ["class", "ul-act ul-act--ok", "title", "R\xE9activer", 3, "click", 4, "ngIf"], ["class", "ul-act ul-act--ok", "title", "D\xE9bloquer le compte", 3, "click", 4, "ngIf"], ["title", "Supprimer", 1, "ul-act", "ul-act--del", 3, "click"], [1, "isax", "isax-trash"], [1, "ul-cie"], [1, "ul-cie-none"], ["title", "Archiver", 1, "ul-act", "ul-act--warn", 3, "click"], [1, "isax", "isax-archive"], ["title", "R\xE9activer", 1, "ul-act", "ul-act--ok", 3, "click"], [1, "isax", "isax-refresh"], ["title", "D\xE9bloquer le compte", 1, "ul-act", "ul-act--ok", 3, "click"], [1, "isax", "isax-unlock"], ["colspan", "6", 1, "ul-empty"], [1, "isax", "isax-people", "d-block", "mb-2", 2, "font-size", "2rem"], [1, "ul-pager"], [1, "ul-pager__info"], [1, "ul-pager__btns"], [1, "ul-pager__btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["class", "ul-pager__btn", 3, "ul-pager__btn--active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"], [1, "ul-pager__btn", 3, "click"], [1, "ul-role-embed"], [1, "ul-matrix-wrap"], [1, "ul-matrix__header"], [1, "ul-matrix__title"], [1, "isax", "isax-shield-security", "me-2"], [1, "ul-matrix__subtitle", "text-muted", "small"], ["class", "ul-empty p-4 text-center", 4, "ngIf"], [1, "ul-matrix__hierarchy", "mb-3"], [1, "ul-hier-chain"], [4, "ngFor", "ngForOf"], [1, "table-responsive"], [1, "ul-matrix"], [2, "min-width", "220px"], [3, "title", 4, "ngFor", "ngForOf"], [1, "ul-matrix__role-names"], [1, "ul-matrix__group-label"], ["class", "small text-nowrap", 4, "ngFor", "ngForOf"], [1, "ul-pager", "mt-3", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "ul-pager__label", "mb-0"], [1, "form-select", "form-select-sm", "ul-pager__select", 3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "ul-pager__btns", 4, "ngIf"], [1, "ul-matrix__legend", "mt-3"], [1, "ul-c-yes"], [1, "ul-c-no"], [1, "ul-matrix__note", "mt-2"], [1, "isax", "isax-info-circle", "me-1"], [1, "text-muted"], [1, "ul-hier-badge", 3, "ngClass"], ["class", "isax isax-arrow-right-3 ul-hier-arrow", 4, "ngIf"], [1, "isax", "isax-arrow-right-3", "ul-hier-arrow"], [3, "title"], [1, "ul-mh-role", 3, "ngClass"], [1, "small", "text-nowrap"], [1, "ul-matrix__group"], ["class", "ul-c-yes", 4, "ngIf"], ["class", "ul-c-no", 4, "ngIf"], [3, "ngValue"], [1, "ul-empty", "p-4", "text-center"], [1, "isax", "isax-shield-security", "d-block", "mb-2", 2, "font-size", "2rem"], ["tabindex", "-1", "role", "dialog", 1, "modal"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "isax", "isax-import", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], [1, "mb-3"], ["for", "fileInput", 1, "form-label"], ["id", "fileInput", "type", "file", "accept", ".xlsx,.xls,.csv", 1, "form-control", 3, "change", "disabled"], [1, "form-text"], ["class", "alert alert-info py-2", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "alert", "alert-warning", "mb-0"], [1, "alert-heading", "small", "fw-bold"], [1, "mb-0", "mt-1", "small"], [1, "alert", "alert-info", "py-2"], [1, "text-muted", "ms-1"], [1, "progress"], ["role", "progressbar", "aria-label", "Progression de l'import", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "alert-heading", "fw-bold"], [1, "isax", "isax-close-circle", "me-1"], ["class", "alert alert-success py-2", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], [1, "alert", "alert-success", "py-2"], [1, "isax", "isax-tick-circle", "me-1"], [1, "mt-2"], [1, "alert", "alert-danger", "mb-2", "py-2", "fw-bold", "small"], [1, "isax", "isax-warning-2", "me-1"], [1, "ul-import-error-list"], ["class", "ul-import-error-item", 4, "ngFor", "ngForOf"], [1, "ul-import-error-item"], [1, "badge", "bg-danger", "me-2"], [1, "mb-0", "small"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-1"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "isax", "isax-refresh", "me-1"], [1, "modal-backdrop", "fade"]], template: function UserListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementStart(3, "h1", 3);
      \u0275\u0275text(4, "Utilisateurs & r\xF4les");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, UserListComponent_a_7_Template, 3, 0, "a", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function UserListComponent_Template_button_click_9_listener() {
        return ctx.setTab("users");
      });
      \u0275\u0275text(10, "Utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 7);
      \u0275\u0275listener("click", function UserListComponent_Template_button_click_11_listener() {
        return ctx.setTab("roles");
      });
      \u0275\u0275text(12, "R\xF4les & permissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function UserListComponent_Template_button_click_13_listener() {
        return ctx.setTab("matrix");
      });
      \u0275\u0275text(14, "Matrice des Habilitations");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(15, UserListComponent_ng_container_15_Template, 35, 17, "ng-container", 8)(16, UserListComponent_div_16_Template, 2, 0, "div", 9)(17, UserListComponent_div_17_Template, 10, 3, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, UserListComponent_div_18_Template, 16, 9, "div", 11)(19, UserListComponent_div_19_Template, 1, 2, "div", 12);
      \u0275\u0275elementStart(20, "app-user-add", 13);
      \u0275\u0275listener("onClose", function UserListComponent_Template_app_user_add_onClose_20_listener() {
        return ctx.hideDialog();
      })("onSave", function UserListComponent_Template_app_user_add_onSave_20_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate6(" ", ctx.totalData, " utilisateur", ctx.totalData > 1 ? "s" : "", " \xB7 ", ctx.rolesCount, " r\xF4le", ctx.rolesCount > 1 ? "s" : "", " \xB7 ", ctx.entreprisesCount, " entreprise", ctx.entreprisesCount > 1 ? "s" : "", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.entrepriseId);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ul-tab--active", ctx.activeTab === "users");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ul-tab--active", ctx.activeTab === "roles");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ul-tab--active", ctx.activeTab === "matrix");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.activeTab === "users");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "roles");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "matrix");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showImportDialog);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showImportDialog);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.userDialog)("isEditMode", ctx.isEditMode)("userData", ctx.selectedUser);
    }
  }, dependencies: [RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, CommonModule, NgClass, NgForOf, NgIf, UserAddComponent, SuperadminRoleComponent], styles: ["\n\n.ul-shell[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ul-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.ul-topbar__icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #9ca3af;\n}\n.ul-topbar__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n  flex: 1;\n}\n.ul-topbar__stats[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-back[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #185FA5;\n  text-decoration: none;\n}\n.ul-back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.ul-tabbar[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-tab[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  font-size: 13px;\n  font-weight: 400;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ul-tab--active[_ngcontent-%COMP%] {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ul-tab[_ngcontent-%COMP%]:hover:not(.ul-tab--active) {\n  color: #111827;\n}\n.ul-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 180px;\n  max-width: 240px;\n}\n.ul-search__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ul-search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px 6px 32px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ul-search__input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.ul-filter-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ul-filter[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 11px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color 0.15s, background 0.15s;\n}\n.ul-filter[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ul-filter--on[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n  color: #185FA5;\n  background: #e6f1fb;\n}\n.ul-filter__chip[_ngcontent-%COMP%] {\n  padding: 1px 6px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 10px;\n}\n.ul-filter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #185FA5;\n  background: #e6f1fb;\n  border: 1px solid #185FA5;\n  border-radius: 8px;\n  cursor: pointer;\n  margin-left: auto;\n  transition: background 0.15s;\n}\n.ul-add-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(208.0172413793, 228.6896551724, 247.4827586207);\n}\n.ul-add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-import-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517,\n      #D4941E);\n  border: 1px solid #8C5410;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: opacity 0.15s;\n}\n.ul-import-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.ul-import-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-tpl-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #006F78;\n  background: #E6F4F5;\n  border: 1px solid #9DD4D8;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.ul-tpl-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(215.4285714286, 237.5885714286, 239.1714285714);\n}\n.ul-tpl-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-export-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #006F78,\n      #00949F);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: 0 2px 6px rgba(0, 111, 120, 0.3);\n  transition: opacity 0.15s, transform 0.1s;\n}\n.ul-export-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.ul-export-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.ul-export-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  z-index: 200;\n  min-width: 160px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.ul-dropdown__item[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.ul-dropdown__item[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.ul-dropdown__item--on[_ngcontent-%COMP%] {\n  color: #185FA5;\n  font-weight: 500;\n  background: #e6f1fb;\n}\n.ul-alert[_ngcontent-%COMP%] {\n  margin: 10px 14px 0;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ul-skeletons[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ul-skeleton-row[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 8px;\n  background: #f3f4f6;\n  animation: _ngcontent-%COMP%_ul-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ul-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ul-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.ul-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ul-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ul-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ul-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 14px !important;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ul-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ul-user__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.ul-user__email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ul-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.ul-avatar[data-role=superadmin][_ngcontent-%COMP%] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-avatar[data-role=adminrh][_ngcontent-%COMP%] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-avatar[data-role=formateur][_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-avatar[data-role=employe][_ngcontent-%COMP%] {\n  background: #faeeda;\n  color: #633806;\n}\n.ul-avatar[data-role=default][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ul-role-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ul-role-badge[data-role=superadmin][_ngcontent-%COMP%] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-role-badge[data-role=adminrh][_ngcontent-%COMP%] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-role-badge[data-role=formateur][_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-role-badge[data-role=employe][_ngcontent-%COMP%] {\n  background: #f1efe8;\n  color: #444441;\n}\n.ul-role-badge[data-role=default][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-cie[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  padding: 2px 8px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.ul-cie-none[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-statut[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n}\n.ul-statut[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ul-statut[data-s=actif][_ngcontent-%COMP%] {\n  background: #eaf3de;\n  color: #3b6d11;\n}\n.ul-statut[data-s=inactif][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-statut[data-s=verrouille][_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.ul-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.ul-act[_ngcontent-%COMP%] {\n  padding: 4px 7px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.ul-act[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.ul-act--warn[_ngcontent-%COMP%] {\n  color: #92400e;\n  border-color: #fcd34d;\n}\n.ul-act--warn[_ngcontent-%COMP%]:hover {\n  background: #fffbeb;\n}\n.ul-act--ok[_ngcontent-%COMP%] {\n  color: #065f46;\n  border-color: #6ee7b7;\n}\n.ul-act--ok[_ngcontent-%COMP%]:hover {\n  background: #ecfdf5;\n}\n.ul-act--del[_ngcontent-%COMP%] {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ul-act--del[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.ul-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ul-pager__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-pager__btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ul-pager__btn[_ngcontent-%COMP%] {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ul-pager__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ul-pager__btn--active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ul-pager__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ul-role-embed[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ul-role-embed[_ngcontent-%COMP%]     .page-content > .d-md-flex:first-child, \n.ul-role-embed[_ngcontent-%COMP%]     .page-content > .d-block:first-child, \n.ul-role-embed[_ngcontent-%COMP%]     .d-md-flex.align-items-center.justify-content-between.mb-4 {\n  display: none !important;\n}\n.ul-role-embed[_ngcontent-%COMP%]     .page-content {\n  padding: 0 !important;\n}\n.ul-matrix-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 14px;\n}\n.ul-matrix__header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.ul-matrix__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.ul-matrix__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ul-matrix__hierarchy[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 8px 0;\n}\n.ul-hier-chain[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 4px;\n  width: max-content;\n}\n.ul-hier-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.ul-hier-arrow[_ngcontent-%COMP%] {\n  color: #aaa;\n  font-size: 12px;\n}\n.ul-hier--sa[_ngcontent-%COMP%] {\n  background: #fff0f0;\n  color: #c0392b;\n  border: 1px solid #f5c6c6;\n}\n.ul-hier--holding[_ngcontent-%COMP%] {\n  background: #fdf3ff;\n  color: #8e44ad;\n  border: 1px solid #e8c6f5;\n}\n.ul-hier--rh[_ngcontent-%COMP%] {\n  background: #eef4ff;\n  color: #2563eb;\n  border: 1px solid #bfdbfe;\n}\n.ul-hier--it[_ngcontent-%COMP%] {\n  background: #f0fff4;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.ul-hier--mgr[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n  border: 1px solid #fde68a;\n}\n.ul-hier--form[_ngcontent-%COMP%] {\n  background: #f0fdfd;\n  color: #0891b2;\n  border: 1px solid #a5f3fc;\n}\n.ul-hier--emp[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n}\n.ul-mh-role[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 7px;\n  border-radius: 6px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n.ul-mh--sa[_ngcontent-%COMP%] {\n  background: #fff0f0;\n  color: #c0392b;\n}\n.ul-mh--holding[_ngcontent-%COMP%] {\n  background: #fdf3ff;\n  color: #8e44ad;\n}\n.ul-mh--rh[_ngcontent-%COMP%] {\n  background: #eef4ff;\n  color: #2563eb;\n}\n.ul-mh--it[_ngcontent-%COMP%] {\n  background: #f0fff4;\n  color: #16a34a;\n}\n.ul-mh--mgr[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.ul-mh--form[_ngcontent-%COMP%] {\n  background: #f0fdfd;\n  color: #0891b2;\n}\n.ul-mh--emp[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #6b7280;\n}\n.ul-matrix[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  font-size: 12px;\n}\n.ul-matrix[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.ul-matrix[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid #e5e7eb;\n  text-align: center;\n}\n.ul-matrix[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.ul-matrix[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n  font-weight: 500;\n  background: #f9fafb;\n}\n.ul-matrix[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-matrix[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.ul-matrix__role-names[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #4b5563;\n  background: #f8f9fc !important;\n  white-space: nowrap;\n  padding: 5px 8px !important;\n}\n.ul-matrix__group-label[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #9ca3af !important;\n  font-weight: 400 !important;\n}\n.ul-matrix__group[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: #f3f4f6 !important;\n  text-align: left !important;\n  padding-left: 12px !important;\n}\n.ul-matrix__legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 11px;\n  color: #9ca3af;\n  flex-wrap: wrap;\n}\n.ul-matrix__note[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ul-c-yes[_ngcontent-%COMP%] {\n  color: #3b6d11;\n  font-size: 15px;\n  font-weight: 700;\n}\n.ul-c-no[_ngcontent-%COMP%] {\n  color: #d3d1c7;\n  font-size: 15px;\n}\n.ul-c-partial[_ngcontent-%COMP%] {\n  color: #ba7517;\n  font-size: 15px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.45);\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n.ul-import-error-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  padding-right: 4px;\n}\n.ul-import-error-item[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #FECACA;\n  border-radius: 6px;\n  padding: 8px 10px;\n  font-size: 12.5px;\n  color: #7F1D1D;\n}\n.ul-import-error-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  padding-left: 16px;\n}\n.ul-import-error-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=user-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserListComponent, [{
    type: Component,
    args: [{ selector: "app-user-list", standalone: true, imports: [RouterLink, FormsModule, CommonModule, CustomPaginationComponent, UserAddComponent, SuperadminRoleComponent], template: `<!-- \u2500\u2500 SHELL \u2500\u2500 -->\r
<div class="ul-shell">\r
\r
  <!-- \u2500\u2500 TOP BAR \u2500\u2500 -->\r
  <div class="ul-topbar">\r
    <i class="isax isax-people ul-topbar__icon"></i>\r
    <h1 class="ul-topbar__title">Utilisateurs & r\xF4les</h1>\r
    <span class="ul-topbar__stats">\r
      {{ totalData }} utilisateur{{ totalData > 1 ? 's' : '' }}\r
      \xB7 {{ rolesCount }} r\xF4le{{ rolesCount > 1 ? 's' : '' }}\r
      \xB7 {{ entreprisesCount }} entreprise{{ entreprisesCount > 1 ? 's' : '' }}\r
    </span>\r
    <a *ngIf="entrepriseId" routerLink="/superadmin/superadmin-companymanagement"\r
       class="ul-back"><i class="isax isax-arrow-left-2 me-1"></i>Retour aux entreprises</a>\r
  </div>\r
\r
  <!-- \u2500\u2500 TABS \u2500\u2500 -->\r
  <div class="ul-tabbar">\r
    <button class="ul-tab" [class.ul-tab--active]="activeTab === 'users'"\r
            (click)="setTab('users')">Utilisateurs</button>\r
    <button class="ul-tab" [class.ul-tab--active]="activeTab === 'roles'"\r
            (click)="setTab('roles')">R\xF4les & permissions</button>\r
    <button class="ul-tab" [class.ul-tab--active]="activeTab === 'matrix'"\r
            (click)="setTab('matrix')">Matrice des Habilitations</button>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       TAB 1 : UTILISATEURS\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <ng-container *ngIf="activeTab === 'users'">\r
\r
    <!-- Toolbar -->\r
    <div class="ul-toolbar">\r
      <div class="ul-search">\r
        <i class="isax isax-search-normal-1 ul-search__icon"></i>\r
        <input type="search" class="ul-search__input"\r
               placeholder="Rechercher un utilisateur..."\r
               [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\r
               (ngModelChange)="searchData($event)">\r
      </div>\r
\r
      <!-- Filtre R\xF4le -->\r
      <div class="ul-filter-group">\r
        <button class="ul-filter" [class.ul-filter--on]="!!selectedRoleFilter"\r
                (click)="toggleRoleDropdown($event)">\r
          <i class="isax isax-filter"></i> R\xF4le\r
          <span *ngIf="selectedRoleFilter" class="ul-filter__chip">{{ selectedRoleFilter }}</span>\r
        </button>\r
        <div class="ul-dropdown" *ngIf="showRoleDropdown">\r
          <div class="ul-dropdown__item" (click)="setRoleFilter('')">Tous les r\xF4les</div>\r
          <div class="ul-dropdown__item"\r
               *ngFor="let r of allRoles"\r
               [class.ul-dropdown__item--on]="selectedRoleFilter === r.name"\r
               (click)="setRoleFilter(r.name)">{{ r.name }}</div>\r
        </div>\r
      </div>\r
\r
      <!-- Filtre Entreprise -->\r
      <div class="ul-filter-group" *ngIf="!entrepriseId">\r
        <button class="ul-filter" [class.ul-filter--on]="!!selectedEntrepriseFilter"\r
                (click)="toggleEntrepriseDropdown($event)">\r
          <i class="isax isax-building"></i> Entreprise\r
          <span *ngIf="selectedEntrepriseFilter" class="ul-filter__chip">\r
            {{ getEntrepriseName(selectedEntrepriseFilter) }}\r
          </span>\r
        </button>\r
        <div class="ul-dropdown" *ngIf="showEntrepriseDropdown">\r
          <div class="ul-dropdown__item" (click)="setEntrepriseFilter('')">Toutes les entreprises</div>\r
          <div class="ul-dropdown__item"\r
               *ngFor="let e of allEntreprises"\r
               [class.ul-dropdown__item--on]="selectedEntrepriseFilter === e.id.toString()"\r
               (click)="setEntrepriseFilter(e.id.toString())">{{ e.nom }}</div>\r
        </div>\r
      </div>\r
      <button *ngIf="entrepriseId" class="ul-filter" [class.ul-filter--on]="true">\r
        <i class="isax isax-building"></i>\r
        {{ getEntrepriseName(entrepriseId.toString()) }}\r
      </button>\r
\r
      <!-- Filtre Statut -->\r
      <div class="ul-filter-group">\r
        <button class="ul-filter" [class.ul-filter--on]="selectedStatutFilter !== ''"\r
                (click)="toggleStatutDropdown($event)">\r
          <i class="isax isax-tick-circle"></i> Statut\r
          <span *ngIf="selectedStatutFilter !== ''" class="ul-filter__chip">\r
            {{ selectedStatutFilter === '1' ? 'Actif' : (selectedStatutFilter === 'locked' ? 'Verrouill\xE9' : 'Inactif') }}\r
          </span>\r
        </button>\r
        <div class="ul-dropdown" *ngIf="showStatutDropdown">\r
          <div class="ul-dropdown__item" (click)="setStatutFilter('')">Tous</div>\r
          <div class="ul-dropdown__item"\r
               [class.ul-dropdown__item--on]="selectedStatutFilter === '1'"\r
               (click)="setStatutFilter('1')">Actif</div>\r
          <div class="ul-dropdown__item"\r
               [class.ul-dropdown__item--on]="selectedStatutFilter === '0'"\r
               (click)="setStatutFilter('0')">Inactif</div>\r
          <div class="ul-dropdown__item"\r
               [class.ul-dropdown__item--on]="selectedStatutFilter === 'locked'"\r
               (click)="setStatutFilter('locked')">Verrouill\xE9</div>\r
        </div>\r
      </div>\r
\r
      <button class="ul-import-btn" (click)="openImportDialog()">\r
        <i class="isax isax-import"></i> Importer\r
      </button>\r
      <button class="ul-tpl-btn" (click)="downloadTemplate()">\r
        <i class="isax isax-export"></i> Template\r
      </button>\r
      <button class="ul-export-btn" (click)="exportUsers()">\r
        <i class="isax isax-document-download"></i> Exporter\r
      </button>\r
\r
      <button class="ul-add-btn" (click)="openNew()">\r
        <i class="isax isax-add"></i> Nouvel utilisateur\r
      </button>\r
    </div>\r
\r
    <!-- Erreur -->\r
    <div *ngIf="error" class="ul-alert">\r
      <i class="isax isax-warning-2"></i> {{ error }}\r
    </div>\r
\r
    <!-- Skeleton loading -->\r
    <div *ngIf="loading" class="ul-skeletons">\r
      <div *ngFor="let i of [1,2,3,4,5]" class="ul-skeleton-row"></div>\r
    </div>\r
\r
    <!-- Tableau -->\r
    <table class="ul-table" *ngIf="!loading">\r
      <thead>\r
        <tr>\r
          <th style="width:28%">Utilisateur</th>\r
          <th style="width:16%">R\xF4le</th>\r
          <th style="width:16%">Entreprise</th>\r
          <th style="width:12%">Statut</th>\r
          <th style="width:14%">Derni\xE8re activit\xE9</th>\r
          <th style="width:14%">Actions</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let u of tableData; trackBy: trackById">\r
          <td>\r
            <div class="ul-user">\r
              <div class="ul-avatar" [attr.data-role]="getRoleKey(getRoleName(u))">\r
                {{ getInitials(u) }}\r
              </div>\r
              <div>\r
                <div class="ul-user__name">{{ getDisplayName(u) }}</div>\r
                <div class="ul-user__email">{{ u.email }}</div>\r
              </div>\r
            </div>\r
          </td>\r
          <td>\r
            <span class="ul-role-badge" [attr.data-role]="getRoleKey(getRoleName(u))">\r
              <i [class]="'isax ' + getRoleIcon(getRoleName(u))"></i>\r
              {{ getRoleName(u) }}\r
            </span>\r
          </td>\r
          <td>\r
            <span *ngIf="u.entreprise?.nom" class="ul-cie">{{ u.entreprise!.nom }}</span>\r
            <span *ngIf="!u.entreprise?.nom" class="ul-cie-none">\u2014 Plateforme</span>\r
          </td>\r
          <td>\r
            <span class="ul-statut" [attr.data-s]="isLocked(u) ? 'verrouille' : (u.statut === 1 ? 'actif' : 'inactif')">\r
              <i [class]="'isax ' + (isLocked(u) ? 'isax-lock' : (u.statut === 1 ? 'isax-tick-circle' : 'isax-minus-cirlce'))"></i>\r
              {{ isLocked(u) ? 'Verrouill\xE9' : (u.statut === 1 ? 'Actif' : 'Inactif') }}\r
            </span>\r
          </td>\r
          <td class="ul-date">{{ formatDate(u.updated_at) }}</td>\r
          <td>\r
            <div class="ul-actions">\r
              <button class="ul-act" title="Modifier" (click)="editUser(u)">\r
                <i class="isax isax-edit"></i>\r
              </button>\r
              <button class="ul-act ul-act--warn" *ngIf="u.statut === 1"\r
                      title="Archiver" (click)="archiveUser(u)">\r
                <i class="isax isax-archive"></i>\r
              </button>\r
              <button class="ul-act ul-act--ok" *ngIf="u.statut === 0"\r
                      title="R\xE9activer" (click)="reactivateUser(u)">\r
                <i class="isax isax-refresh"></i>\r
              </button>\r
              <button class="ul-act ul-act--ok" *ngIf="isLocked(u)"\r
                      title="D\xE9bloquer le compte" (click)="unlockUser(u)">\r
                <i class="isax isax-unlock"></i>\r
              </button>\r
              <button class="ul-act ul-act--del" title="Supprimer" (click)="deleteUser(u.id)">\r
                <i class="isax isax-trash"></i>\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
        <tr *ngIf="!tableData.length">\r
          <td colspan="6" class="ul-empty">\r
            <i class="isax isax-people d-block mb-2" style="font-size:2rem;"></i>\r
            Aucun utilisateur trouv\xE9\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
\r
    <!-- Pagination -->\r
    <div class="ul-pager" *ngIf="!loading && totalData > pageSize">\r
      <span class="ul-pager__info">\r
        {{ skip + 1 }}\u2013{{ skip + tableData.length }} sur {{ totalData }}\r
      </span>\r
      <div class="ul-pager__btns">\r
        <button class="ul-pager__btn" [disabled]="currentPage === 1"\r
                (click)="onPageChange(currentPage - 1)">\r
          <i class="isax isax-arrow-left-2"></i>\r
        </button>\r
        <button *ngFor="let p of pageSelection; let i = index"\r
                class="ul-pager__btn"\r
                [class.ul-pager__btn--active]="currentPage === i + 1"\r
                (click)="onPageChange(i + 1)">{{ i + 1 }}</button>\r
        <button class="ul-pager__btn"\r
                [disabled]="currentPage === pageSelection.length || !pageSelection.length"\r
                (click)="onPageChange(currentPage + 1)">\r
          <i class="isax isax-arrow-right-3"></i>\r
        </button>\r
      </div>\r
    </div>\r
\r
  </ng-container>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       TAB 2 : R\xD4LES & PERMISSIONS\r
       Embedded SuperadminRoleComponent (full CRUD)\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="ul-role-embed" *ngIf="activeTab === 'roles'">\r
    <app-superadmin-role></app-superadmin-role>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       TAB 3 : MATRICE DES HABILITATIONS\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="ul-matrix-wrap" *ngIf="activeTab === 'matrix'">\r
\r
    <div class="ul-matrix__header">\r
      <h2 class="ul-matrix__title">\r
        <i class="isax isax-shield-security me-2"></i>Matrice des Habilitations\r
      </h2>\r
      <p class="ul-matrix__subtitle text-muted small">\r
        Chaque r\xF4le h\xE9rite des acc\xE8s de tous les r\xF4les qui lui sont inf\xE9rieurs dans la hi\xE9rarchie.\r
      </p>\r
    </div>\r
\r
    <!-- Skeleton loading -->\r
    <div *ngIf="matrixLoading" class="ul-skeletons">\r
      <div *ngFor="let i of [1,2,3,4,5]" class="ul-skeleton-row"></div>\r
    </div>\r
\r
    <ng-container *ngIf="!matrixLoading && matrixRoles.length">\r
\r
      <!-- L\xE9gende hi\xE9rarchique -->\r
      <div class="ul-matrix__hierarchy mb-3">\r
        <div class="ul-hier-chain">\r
          <ng-container *ngFor="let role of matrixRoles; let last = last">\r
            <span class="ul-hier-badge" [ngClass]="getHierBadgeClass(role)">{{ role.name }}</span>\r
            <i *ngIf="!last" class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
          </ng-container>\r
        </div>\r
      </div>\r
\r
      <div class="table-responsive">\r
      <table class="ul-matrix">\r
        <thead>\r
          <tr>\r
            <th style="min-width:220px">Permission</th>\r
            <th *ngFor="let role of matrixRoles" [title]="role.name">\r
              <span class="ul-mh-role" [ngClass]="getRoleColorClass(role)">{{ getRoleAbbr(role) }}</span>\r
            </th>\r
          </tr>\r
          <tr class="ul-matrix__role-names">\r
            <td class="ul-matrix__group-label">R\xF4les (ordre hi\xE9rarchique \u2193)</td>\r
            <td *ngFor="let role of matrixRoles" class="small text-nowrap">{{ role.name }}</td>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <ng-container *ngFor="let cat of matrixCategories">\r
            <tr><td class="ul-matrix__group" [attr.colspan]="matrixRoles.length + 1">{{ cat.name }}</td></tr>\r
            <tr *ngFor="let perm of cat.permissions">\r
              <td>{{ perm.name }}</td>\r
              <td *ngFor="let role of matrixRoles">\r
                <span *ngIf="roleHasPermission(role, perm.name)" class="ul-c-yes">\u2713</span>\r
                <span *ngIf="!roleHasPermission(role, perm.name)" class="ul-c-no">\u2014</span>\r
              </td>\r
            </tr>\r
          </ng-container>\r
        </tbody>\r
      </table>\r
      </div>\r
\r
      <!-- Pagination matrice -->\r
      <div class="ul-pager mt-3 d-flex align-items-center justify-content-between flex-wrap gap-2">\r
        <div class="d-flex align-items-center gap-2">\r
          <label class="ul-pager__label mb-0">Afficher</label>\r
          <select class="form-select form-select-sm ul-pager__select"\r
                  [ngModel]="matrixPageSize"\r
                  (ngModelChange)="matrixChangePageSize($event)">\r
            <option *ngFor="let opt of matrixPageSizeOptions" [ngValue]="opt">{{ opt }}</option>\r
          </select>\r
          <span class="ul-pager__info">\r
            {{ (matrixCurrentPage - 1) * matrixPageSize + 1 }}\u2013{{ matrixCurrentPage * matrixPageSize > matrixTotalPermissions ? matrixTotalPermissions : matrixCurrentPage * matrixPageSize }}\r
            sur {{ matrixTotalPermissions }} permissions\r
          </span>\r
        </div>\r
        <div class="ul-pager__btns" *ngIf="matrixTotalPages > 1">\r
          <button class="ul-pager__btn" [disabled]="matrixCurrentPage === 1"\r
                  (click)="matrixGoToPage(matrixCurrentPage - 1)">\r
            <i class="isax isax-arrow-left-2"></i>\r
          </button>\r
          <button *ngFor="let p of matrixPageNumbers"\r
                  class="ul-pager__btn"\r
                  [class.ul-pager__btn--active]="matrixCurrentPage === p"\r
                  (click)="matrixGoToPage(p)">{{ p }}</button>\r
          <button class="ul-pager__btn" [disabled]="matrixCurrentPage === matrixTotalPages"\r
                  (click)="matrixGoToPage(matrixCurrentPage + 1)">\r
            <i class="isax isax-arrow-right-3"></i>\r
          </button>\r
        </div>\r
      </div>\r
\r
      <div class="ul-matrix__legend mt-3">\r
        <span><span class="ul-c-yes">\u2713</span> Acc\xE8s complet</span>\r
        <span><span class="ul-c-no">\u2014</span> Aucun acc\xE8s</span>\r
      </div>\r
\r
      <div class="ul-matrix__note mt-2">\r
        <i class="isax isax-info-circle me-1"></i>\r
        <small class="text-muted">\r
          <ng-container *ngFor="let role of matrixRoles; let last = last">\r
            <strong>{{ getRoleAbbr(role) }}</strong> = {{ role.name }}{{ last ? '' : ' \xB7 ' }}\r
          </ng-container>\r
        </small>\r
      </div>\r
\r
    </ng-container>\r
\r
    <!-- Pas de donn\xE9es -->\r
    <div *ngIf="!matrixLoading && !matrixRoles.length" class="ul-empty p-4 text-center">\r
      <i class="isax isax-shield-security d-block mb-2" style="font-size:2rem;"></i>\r
      Aucun r\xF4le trouv\xE9 pour afficher la matrice\r
    </div>\r
\r
  </div>\r
\r
</div>\r
\r
<!-- \u2500\u2500 MODAL IMPORT \u2500\u2500 -->\r
<div class="modal"\r
     [class.show]="showImportDialog"\r
     [style.display]="showImportDialog ? 'block' : 'none'"\r
     tabindex="-1"\r
     *ngIf="showImportDialog"\r
     role="dialog">\r
  <div class="modal-dialog modal-dialog-centered">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title"><i class="isax isax-import me-2"></i>Importer des utilisateurs</h5>\r
        <button type="button" class="btn-close" (click)="closeImportDialog()"></button>\r
      </div>\r
      <div class="modal-body">\r
\r
        <!-- \u2500\u2500 Zone de d\xE9p\xF4t (masqu\xE9e apr\xE8s r\xE9sultat) \u2500\u2500 -->\r
        <ng-container *ngIf="!importResult">\r
          <div class="mb-3">\r
            <label for="fileInput" class="form-label">Fichier Excel / CSV</label>\r
            <input id="fileInput" type="file" class="form-control"\r
                   (change)="onFileSelected($event)" accept=".xlsx,.xls,.csv" [disabled]="isImporting">\r
            <div class="form-text">Formats accept\xE9s : .xlsx, .xls, .csv</div>\r
          </div>\r
          <div *ngIf="selectedFile" class="alert alert-info py-2">\r
            <strong>{{ selectedFile.name }}</strong>\r
            <small class="text-muted ms-1">({{ (selectedFile.size / 1024 / 1024).toFixed(2) }} MB)</small>\r
          </div>\r
          <div *ngIf="isImporting" class="mb-3">\r
            <div class="progress">\r
              <div class="progress-bar progress-bar-striped progress-bar-animated"\r
                   role="progressbar" aria-label="Progression de l'import"\r
                   [style.width.%]="importProgress"\r
                   [attr.aria-valuenow]="importProgress" aria-valuemin="0" aria-valuemax="100">\r
                {{ importProgress }}%\r
              </div>\r
            </div>\r
          </div>\r
          <div class="alert alert-warning mb-0">\r
            <h6 class="alert-heading small fw-bold"><i class="isax isax-info-circle me-1"></i>Instructions</h6>\r
            <ul class="mb-0 mt-1 small">\r
              <li>T\xE9l\xE9chargez d'abord le template pour voir la structure requise</li>\r
              <li>Colonnes obligatoires : <strong>nom, prenom, email</strong></li>\r
              <li>Colonnes optionnelles : <strong>matricule, direction, role, entreprise</strong></li>\r
              <li>Matricule et num\xE9ro de t\xE9l\xE9phone doivent \xEAtre uniques</li>\r
            </ul>\r
          </div>\r
        </ng-container>\r
\r
        <!-- \u2500\u2500 Rapport d'import \u2500\u2500 -->\r
        <ng-container *ngIf="importResult">\r
\r
          <!-- Erreurs de structure -->\r
          <div class="alert alert-danger" *ngIf="importResult.headerErrors.length">\r
            <h6 class="alert-heading fw-bold"><i class="isax isax-close-circle me-1"></i>Structure du fichier invalide</h6>\r
            <ul class="mb-0 mt-1 small">\r
              <li *ngFor="let e of importResult.headerErrors">{{ e }}</li>\r
            </ul>\r
          </div>\r
\r
          <ng-container *ngIf="!importResult.headerErrors.length">\r
            <!-- R\xE9sum\xE9 succ\xE8s -->\r
            <div class="alert alert-success py-2" *ngIf="importResult.totalCreated > 0">\r
              <i class="isax isax-tick-circle me-1"></i>\r
              <strong>{{ importResult.totalCreated }}</strong> utilisateur(s) cr\xE9\xE9(s) sur {{ importResult.totalProcessed }} trait\xE9(s)\r
            </div>\r
            <div class="alert alert-info py-2" *ngIf="importResult.totalCreated === 0 && importResult.totalErrors === 0">\r
              <i class="isax isax-info-circle me-1"></i> Aucune ligne \xE0 traiter dans le fichier.\r
            </div>\r
\r
            <!-- D\xE9tail erreurs par ligne -->\r
            <div *ngIf="importResult.rowErrors.length" class="mt-2">\r
              <div class="alert alert-danger mb-2 py-2 fw-bold small">\r
                <i class="isax isax-warning-2 me-1"></i>\r
                {{ importResult.rowErrors.length }} ligne(s) en erreur\r
              </div>\r
              <div class="ul-import-error-list">\r
                <div class="ul-import-error-item" *ngFor="let e of importResult.rowErrors">\r
                  <span class="badge bg-danger me-2">Ligne {{ e.line }}</span>\r
                  <ul class="mb-0 small">\r
                    <li *ngFor="let msg of e.errors">{{ msg }}</li>\r
                  </ul>\r
                </div>\r
              </div>\r
            </div>\r
          </ng-container>\r
\r
        </ng-container>\r
      </div>\r
\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="closeImportDialog()">\r
          {{ importResult ? 'Fermer' : 'Annuler' }}\r
        </button>\r
        <button type="button" *ngIf="!importResult" class="btn btn-primary" (click)="importUsers()" [disabled]="!selectedFile || isImporting">\r
          <span *ngIf="isImporting" class="spinner-border spinner-border-sm me-1"></span>\r
          {{ isImporting ? 'Import en cours...' : 'Importer' }}\r
        </button>\r
        <button type="button" *ngIf="importResult && !importResult.headerErrors.length" class="btn btn-outline-secondary"\r
                (click)="importResult = null; selectedFile = null">\r
          <i class="isax isax-refresh me-1"></i> Nouvel import\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div class="modal-backdrop fade" [class.show]="showImportDialog" *ngIf="showImportDialog"></div>\r
\r
<!-- \u2500\u2500 USER ADD/EDIT \u2500\u2500 -->\r
<app-user-add\r
  [visible]="userDialog"\r
  [isEditMode]="isEditMode"\r
  [userData]="selectedUser"\r
  (onClose)="hideDialog()"\r
  (onSave)="refreshData()">\r
</app-user-add>\r
`, styles: ["/* src/app/features/superadmin/user/user-list.component.scss */\n.ul-shell {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ul-topbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.ul-topbar__icon {\n  font-size: 16px;\n  color: #9ca3af;\n}\n.ul-topbar__title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n  flex: 1;\n}\n.ul-topbar__stats {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-back {\n  font-size: 12px;\n  color: #185FA5;\n  text-decoration: none;\n}\n.ul-back:hover {\n  text-decoration: underline;\n}\n.ul-tabbar {\n  display: flex;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-tab {\n  padding: 10px 18px;\n  font-size: 13px;\n  font-weight: 400;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ul-tab--active {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ul-tab:hover:not(.ul-tab--active) {\n  color: #111827;\n}\n.ul-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-search {\n  position: relative;\n  flex: 1;\n  min-width: 180px;\n  max-width: 240px;\n}\n.ul-search__icon {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ul-search__input {\n  width: 100%;\n  padding: 6px 10px 6px 32px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ul-search__input:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.ul-filter-group {\n  position: relative;\n}\n.ul-filter {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 11px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color 0.15s, background 0.15s;\n}\n.ul-filter:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ul-filter--on {\n  border-color: #185FA5;\n  color: #185FA5;\n  background: #e6f1fb;\n}\n.ul-filter__chip {\n  padding: 1px 6px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 10px;\n}\n.ul-filter i {\n  font-size: 13px;\n}\n.ul-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #185FA5;\n  background: #e6f1fb;\n  border: 1px solid #185FA5;\n  border-radius: 8px;\n  cursor: pointer;\n  margin-left: auto;\n  transition: background 0.15s;\n}\n.ul-add-btn:hover {\n  background: rgb(208.0172413793, 228.6896551724, 247.4827586207);\n}\n.ul-add-btn i {\n  font-size: 13px;\n}\n.ul-import-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517,\n      #D4941E);\n  border: 1px solid #8C5410;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: opacity 0.15s;\n}\n.ul-import-btn:hover {\n  opacity: 0.88;\n}\n.ul-import-btn i {\n  font-size: 13px;\n}\n.ul-tpl-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #006F78;\n  background: #E6F4F5;\n  border: 1px solid #9DD4D8;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.ul-tpl-btn:hover {\n  background: rgb(215.4285714286, 237.5885714286, 239.1714285714);\n}\n.ul-tpl-btn i {\n  font-size: 13px;\n}\n.ul-export-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #006F78,\n      #00949F);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: 0 2px 6px rgba(0, 111, 120, 0.3);\n  transition: opacity 0.15s, transform 0.1s;\n}\n.ul-export-btn:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.ul-export-btn:active {\n  transform: translateY(0);\n}\n.ul-export-btn i {\n  font-size: 13px;\n}\n.ul-dropdown {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  z-index: 200;\n  min-width: 160px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.ul-dropdown__item {\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.ul-dropdown__item:hover {\n  background: #f9fafb;\n}\n.ul-dropdown__item--on {\n  color: #185FA5;\n  font-weight: 500;\n  background: #e6f1fb;\n}\n.ul-alert {\n  margin: 10px 14px 0;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ul-skeletons {\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ul-skeleton-row {\n  height: 40px;\n  border-radius: 8px;\n  background: #f3f4f6;\n  animation: ul-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes ul-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ul-table {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.ul-table th {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-table td {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ul-table tr:last-child td {\n  border-bottom: none;\n}\n.ul-table tr:hover td {\n  background: #f9fafb;\n}\n.ul-empty {\n  text-align: center;\n  padding: 40px 14px !important;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ul-user {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ul-user__name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.ul-user__email {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ul-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.ul-avatar[data-role=superadmin] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-avatar[data-role=adminrh] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-avatar[data-role=formateur] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-avatar[data-role=employe] {\n  background: #faeeda;\n  color: #633806;\n}\n.ul-avatar[data-role=default] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-role-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ul-role-badge i {\n  font-size: 11px;\n}\n.ul-role-badge[data-role=superadmin] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-role-badge[data-role=adminrh] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-role-badge[data-role=formateur] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-role-badge[data-role=employe] {\n  background: #f1efe8;\n  color: #444441;\n}\n.ul-role-badge[data-role=default] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-cie {\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  padding: 2px 8px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.ul-cie-none {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-statut {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n}\n.ul-statut i {\n  font-size: 11px;\n}\n.ul-statut[data-s=actif] {\n  background: #eaf3de;\n  color: #3b6d11;\n}\n.ul-statut[data-s=inactif] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-statut[data-s=verrouille] {\n  background: #fff3cd;\n  color: #856404;\n}\n.ul-date {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-actions {\n  display: flex;\n  gap: 5px;\n}\n.ul-act {\n  padding: 4px 7px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.ul-act:hover {\n  background: #f3f4f6;\n}\n.ul-act--warn {\n  color: #92400e;\n  border-color: #fcd34d;\n}\n.ul-act--warn:hover {\n  background: #fffbeb;\n}\n.ul-act--ok {\n  color: #065f46;\n  border-color: #6ee7b7;\n}\n.ul-act--ok:hover {\n  background: #ecfdf5;\n}\n.ul-act--del {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ul-act--del:hover {\n  background: #fef2f2;\n}\n.ul-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ul-pager__info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-pager__btns {\n  display: flex;\n  gap: 4px;\n}\n.ul-pager__btn {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ul-pager__btn:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ul-pager__btn--active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ul-pager__btn:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ul-role-embed {\n  padding: 0;\n}\n.ul-role-embed ::ng-deep .page-content > .d-md-flex:first-child,\n.ul-role-embed ::ng-deep .page-content > .d-block:first-child,\n.ul-role-embed ::ng-deep .d-md-flex.align-items-center.justify-content-between.mb-4 {\n  display: none !important;\n}\n.ul-role-embed ::ng-deep .page-content {\n  padding: 0 !important;\n}\n.ul-matrix-wrap {\n  overflow-x: auto;\n  padding: 14px;\n}\n.ul-matrix__header {\n  margin-bottom: 16px;\n}\n.ul-matrix__title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.ul-matrix__subtitle {\n  margin: 0;\n}\n.ul-matrix__hierarchy {\n  overflow-x: auto;\n  padding: 8px 0;\n}\n.ul-hier-chain {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 4px;\n  width: max-content;\n}\n.ul-hier-badge {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.ul-hier-arrow {\n  color: #aaa;\n  font-size: 12px;\n}\n.ul-hier--sa {\n  background: #fff0f0;\n  color: #c0392b;\n  border: 1px solid #f5c6c6;\n}\n.ul-hier--holding {\n  background: #fdf3ff;\n  color: #8e44ad;\n  border: 1px solid #e8c6f5;\n}\n.ul-hier--rh {\n  background: #eef4ff;\n  color: #2563eb;\n  border: 1px solid #bfdbfe;\n}\n.ul-hier--it {\n  background: #f0fff4;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.ul-hier--mgr {\n  background: #fffbeb;\n  color: #d97706;\n  border: 1px solid #fde68a;\n}\n.ul-hier--form {\n  background: #f0fdfd;\n  color: #0891b2;\n  border: 1px solid #a5f3fc;\n}\n.ul-hier--emp {\n  background: #f9fafb;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n}\n.ul-mh-role {\n  display: inline-block;\n  padding: 3px 7px;\n  border-radius: 6px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n.ul-mh--sa {\n  background: #fff0f0;\n  color: #c0392b;\n}\n.ul-mh--holding {\n  background: #fdf3ff;\n  color: #8e44ad;\n}\n.ul-mh--rh {\n  background: #eef4ff;\n  color: #2563eb;\n}\n.ul-mh--it {\n  background: #f0fff4;\n  color: #16a34a;\n}\n.ul-mh--mgr {\n  background: #fffbeb;\n  color: #d97706;\n}\n.ul-mh--form {\n  background: #f0fdfd;\n  color: #0891b2;\n}\n.ul-mh--emp {\n  background: #f9fafb;\n  color: #6b7280;\n}\n.ul-matrix {\n  border-collapse: collapse;\n  width: 100%;\n  font-size: 12px;\n}\n.ul-matrix th,\n.ul-matrix td {\n  padding: 7px 10px;\n  border: 1px solid #e5e7eb;\n  text-align: center;\n}\n.ul-matrix th:first-child,\n.ul-matrix td:first-child {\n  text-align: left;\n  font-weight: 500;\n  background: #f9fafb;\n}\n.ul-matrix thead th {\n  background: #f9fafb;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-matrix thead th:first-child {\n  text-align: left;\n}\n.ul-matrix__role-names td {\n  font-size: 10px;\n  font-weight: 600;\n  color: #4b5563;\n  background: #f8f9fc !important;\n  white-space: nowrap;\n  padding: 5px 8px !important;\n}\n.ul-matrix__group-label {\n  font-style: italic;\n  color: #9ca3af !important;\n  font-weight: 400 !important;\n}\n.ul-matrix__group {\n  font-size: 10px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: #f3f4f6 !important;\n  text-align: left !important;\n  padding-left: 12px !important;\n}\n.ul-matrix__legend {\n  display: flex;\n  gap: 16px;\n  font-size: 11px;\n  color: #9ca3af;\n  flex-wrap: wrap;\n}\n.ul-matrix__note {\n  font-size: 11px;\n}\n.ul-c-yes {\n  color: #3b6d11;\n  font-size: 15px;\n  font-weight: 700;\n}\n.ul-c-no {\n  color: #d3d1c7;\n  font-size: 15px;\n}\n.ul-c-partial {\n  color: #ba7517;\n  font-size: 15px;\n}\n.modal {\n  background: rgba(0, 0, 0, 0.45);\n}\n.modal-content {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n.ul-import-error-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  padding-right: 4px;\n}\n.ul-import-error-item {\n  background: #fff;\n  border: 1px solid #FECACA;\n  border-radius: 6px;\n  padding: 8px 10px;\n  font-size: 12.5px;\n  color: #7F1D1D;\n}\n.ul-import-error-item ul {\n  margin: 4px 0 0 0;\n  padding-left: 16px;\n}\n.ul-import-error-item ul li {\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=user-list.component.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: PermissionService }, { type: ActivatedRoute }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListComponent, { className: "UserListComponent", filePath: "app/features/superadmin/user/user-list.component.ts", lineNumber: 22 });
})();
export {
  UserListComponent
};
//# sourceMappingURL=chunk-LL2BQCOR.js.map
