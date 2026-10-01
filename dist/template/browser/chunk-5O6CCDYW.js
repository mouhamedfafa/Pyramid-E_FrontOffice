import {
  AdminrhRoleComponent
} from "./chunk-3KDTJP4M.js";
import {
  UserAddComponent
} from "./chunk-DTPDBD3Z.js";
import {
  DirectionService
} from "./chunk-TFXXNVPH.js";
import {
  RoleService
} from "./chunk-6XDKD7O3.js";
import {
  sortRoleNames
} from "./chunk-CCCDGN6S.js";
import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import "./chunk-OH5R3FNC.js";
import {
  UserService
} from "./chunk-LDSCSSHB.js";
import {
  CustomPaginationComponent
} from "./chunk-MDSXZZ37.js";
import "./chunk-4M3HTYDR.js";
import {
  HasPermissionDirective
} from "./chunk-R37243IZ.js";
import {
  PermissionService
} from "./chunk-IGS3DTTC.js";
import {
  AuthService
} from "./chunk-U7Y6GEK6.js";
import "./chunk-K7E3GT3E.js";
import "./chunk-42QKTZAV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-RNP5DT5T.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-VMXPZP5A.js";
import "./chunk-47WYM2C2.js";
import "./chunk-XZLGMMSK.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-ZRUSYSCI.js";
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ON7U2Q36.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/adminrh/user/user-list.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => [1, 2, 3, 4, 5];
function UserListComponent_ng_container_14_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedRoleFilter);
  }
}
function UserListComponent_ng_container_14_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_10_div_3_Template_div_click_0_listener() {
      const r_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setRoleFilter(r_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ul-dropdown__item--on", ctx_r1.selectedRoleFilter === r_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5);
  }
}
function UserListComponent_ng_container_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_10_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRoleFilter(""));
    });
    \u0275\u0275text(2, "Tous les r\xF4les");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserListComponent_ng_container_14_div_10_div_3_Template, 2, 3, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.availableRoles);
  }
}
function UserListComponent_ng_container_14_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedStatutFilter === "1" ? "Actif" : ctx_r1.selectedStatutFilter === "locked" ? "Verrouill\xE9" : "Inactif", " ");
  }
}
function UserListComponent_ng_container_14_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_16_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setStatutFilter(""));
    });
    \u0275\u0275text(2, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_16_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setStatutFilter("1"));
    });
    \u0275\u0275text(4, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_16_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setStatutFilter("0"));
    });
    \u0275\u0275text(6, "Inactif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 39);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_16_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r6);
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
function UserListComponent_ng_container_14_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.managerFilterLabel);
  }
}
function UserListComponent_ng_container_14_div_22_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_22_div_5_Template_div_click_0_listener() {
      const m_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setManagerFilter("" + m_r9.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ul-dropdown__item--on", ctx_r1.selectedManagerFilter === "" + m_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r9.label);
  }
}
function UserListComponent_ng_container_14_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_22_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setManagerFilter(""));
    });
    \u0275\u0275text(2, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_22_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setManagerFilter("none"));
    });
    \u0275\u0275text(4, "Sans manager");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, UserListComponent_ng_container_14_div_22_div_5_Template, 2, 3, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("ul-dropdown__item--on", ctx_r1.selectedManagerFilter === "none");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.availableManagers);
  }
}
function UserListComponent_ng_container_14_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openNew());
    });
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2, " Nouvel utilisateur ");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_14_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function UserListComponent_ng_container_14_div_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 47);
  }
}
function UserListComponent_ng_container_14_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, UserListComponent_ng_container_14_div_37_div_1_Template, 1, 0, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function UserListComponent_ng_container_14_table_38_tr_20_div_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 78);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const u_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r12.direction_obj == null ? null : u_r12.direction_obj.parent == null ? null : u_r12.direction_obj.parent.parent == null ? null : u_r12.direction_obj.parent.parent.nom);
  }
}
function UserListComponent_ng_container_14_table_38_tr_20_div_14_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 78);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const u_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r12.direction_obj == null ? null : u_r12.direction_obj.parent == null ? null : u_r12.direction_obj.parent.nom);
  }
}
function UserListComponent_ng_container_14_table_38_tr_20_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "span", 75);
    \u0275\u0275template(2, UserListComponent_ng_container_14_table_38_tr_20_div_14_ng_container_2_Template, 4, 1, "ng-container", 8)(3, UserListComponent_ng_container_14_table_38_tr_20_div_14_ng_container_3_Template, 4, 1, "ng-container", 8);
    \u0275\u0275elementStart(4, "span", 76);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", u_r12.direction_obj == null ? null : u_r12.direction_obj.parent == null ? null : u_r12.direction_obj.parent.parent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r12.direction_obj == null ? null : u_r12.direction_obj.parent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r12.direction_obj == null ? null : u_r12.direction_obj.nom);
  }
}
function UserListComponent_ng_container_14_table_38_tr_20_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r12.direction || "\u2014");
  }
}
function UserListComponent_ng_container_14_table_38_tr_20_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getDisplayName(u_r12.manager));
  }
}
function UserListComponent_ng_container_14_table_38_tr_20_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_14_table_38_tr_20_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", u_r12.collaborateurs_count, " N-1 ");
  }
}
function UserListComponent_ng_container_14_table_38_tr_20_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_table_38_tr_20_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const u_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.archiveUser(u_r12));
    });
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_14_table_38_tr_20_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_table_38_tr_20_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const u_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.activateManual(u_r12));
    });
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_14_table_38_tr_20_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_table_38_tr_20_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const u_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sendInvitation(u_r12));
    });
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_14_table_38_tr_20_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_table_38_tr_20_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const u_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.unlockUser(u_r12));
    });
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_14_table_38_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 56)(6, "div", 57);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "div", 58);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 59);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, UserListComponent_ng_container_14_table_38_tr_20_div_14_Template, 6, 3, "div", 60)(15, UserListComponent_ng_container_14_table_38_tr_20_span_15_Template, 2, 1, "span", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275template(17, UserListComponent_ng_container_14_table_38_tr_20_span_17_Template, 2, 1, "span", 62)(18, UserListComponent_ng_container_14_table_38_tr_20_ng_template_18_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(20, UserListComponent_ng_container_14_table_38_tr_20_span_20_Template, 3, 1, "span", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 64);
    \u0275\u0275element(23, "i");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td")(26, "span", 65);
    \u0275\u0275element(27, "i");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 66);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td")(32, "div", 67)(33, "button", 68);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_table_38_tr_20_Template_button_click_33_listener() {
      const u_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editUser(u_r12));
    });
    \u0275\u0275element(34, "i", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, UserListComponent_ng_container_14_table_38_tr_20_button_35_Template, 2, 0, "button", 70)(36, UserListComponent_ng_container_14_table_38_tr_20_button_36_Template, 2, 0, "button", 71)(37, UserListComponent_ng_container_14_table_38_tr_20_button_37_Template, 2, 0, "button", 72)(38, UserListComponent_ng_container_14_table_38_tr_20_button_38_Template, 2, 0, "button", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r12 = ctx.$implicit;
    const sansManager_r17 = \u0275\u0275reference(19);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r12.matricule || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-role", ctx_r1.getRoleKey(ctx_r1.getRoleName(u_r12)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(u_r12), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getDisplayName(u_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r12.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", u_r12.direction_obj);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !u_r12.direction_obj);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", u_r12.manager)("ngIfElse", sansManager_r17);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", u_r12.collaborateurs_count);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-role", ctx_r1.getRoleKey(ctx_r1.getRoleName(u_r12)));
    \u0275\u0275advance();
    \u0275\u0275classMap("isax " + ctx_r1.getRoleIcon(ctx_r1.getRoleName(u_r12)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRoleName(u_r12), " ");
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
    \u0275\u0275property("ngIf", u_r12.statut === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLocked(u_r12));
  }
}
function UserListComponent_ng_container_14_table_38_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 88);
    \u0275\u0275element(2, "i", 89);
    \u0275\u0275text(3, " Aucun utilisateur trouv\xE9 ");
    \u0275\u0275elementEnd()();
  }
}
function UserListComponent_ng_container_14_table_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 48)(1, "thead")(2, "tr")(3, "th", 49);
    \u0275\u0275text(4, "Matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 50);
    \u0275\u0275text(6, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 51);
    \u0275\u0275text(8, "Direction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 51);
    \u0275\u0275text(10, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 51);
    \u0275\u0275text(12, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 52);
    \u0275\u0275text(14, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 52);
    \u0275\u0275text(16, "Derni\xE8re activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 53);
    \u0275\u0275text(18, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, UserListComponent_ng_container_14_table_38_tr_20_Template, 39, 23, "tr", 54)(21, UserListComponent_ng_container_14_table_38_tr_21_Template, 4, 0, "tr", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r1.tableData)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tableData.length);
  }
}
function UserListComponent_ng_container_14_div_39_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_39_button_6_Template_button_click_0_listener() {
      const i_r20 = \u0275\u0275restoreView(_r19).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange(i_r20 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r20 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ul-pager__btn--active", ctx_r1.currentPage === i_r20 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r20 + 1);
  }
}
function UserListComponent_ng_container_14_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "span", 91);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 92)(4, "button", 93);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_39_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UserListComponent_ng_container_14_div_39_button_6_Template, 2, 3, "button", 95);
    \u0275\u0275elementStart(7, "button", 93);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_39_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 96);
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
function UserListComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14);
    \u0275\u0275element(3, "i", 15);
    \u0275\u0275elementStart(4, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function UserListComponent_ng_container_14_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchDataValue, $event) || (ctx_r1.searchDataValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UserListComponent_ng_container_14_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchData($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_div_click_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(6, "button", 18);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRoleDropdown = !ctx_r1.showRoleDropdown);
    });
    \u0275\u0275element(7, "i", 19);
    \u0275\u0275text(8, " R\xF4le ");
    \u0275\u0275template(9, UserListComponent_ng_container_14_span_9_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, UserListComponent_ng_container_14_div_10_Template, 4, 1, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_div_click_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(12, "button", 18);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showStatutDropdown = !ctx_r1.showStatutDropdown);
    });
    \u0275\u0275element(13, "i", 22);
    \u0275\u0275text(14, " Statut ");
    \u0275\u0275template(15, UserListComponent_ng_container_14_span_15_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, UserListComponent_ng_container_14_div_16_Template, 9, 6, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 17);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_div_click_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(18, "button", 18);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showManagerDropdown = !ctx_r1.showManagerDropdown);
    });
    \u0275\u0275element(19, "i", 23);
    \u0275\u0275text(20, " Manager ");
    \u0275\u0275template(21, UserListComponent_ng_container_14_span_21_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, UserListComponent_ng_container_14_div_22_Template, 6, 3, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 24);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openMassInviteDialog());
    });
    \u0275\u0275element(24, "i", 25);
    \u0275\u0275text(25, " Invitations ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 26);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openImportDialog());
    });
    \u0275\u0275element(27, "i", 27);
    \u0275\u0275text(28, " Importer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 28);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275element(30, "i", 29);
    \u0275\u0275text(31, " Template ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 30);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportUsers());
    });
    \u0275\u0275element(33, "i", 31);
    \u0275\u0275text(34, " Exporter ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, UserListComponent_ng_container_14_button_35_Template, 3, 0, "button", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, UserListComponent_ng_container_14_div_36_Template, 3, 1, "div", 33)(37, UserListComponent_ng_container_14_div_37_Template, 2, 2, "div", 34)(38, UserListComponent_ng_container_14_table_38_Template, 22, 3, "table", 35)(39, UserListComponent_ng_container_14_div_39_Template, 9, 6, "div", 36);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchDataValue);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(19, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ul-filter--on", !!ctx_r1.selectedRoleFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedRoleFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showRoleDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ul-filter--on", ctx_r1.selectedStatutFilter !== "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedStatutFilter !== "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showStatutDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ul-filter--on", !!ctx_r1.selectedManagerFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedManagerFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showManagerDropdown);
    \u0275\u0275advance(13);
    \u0275\u0275property("appHasPermission", "creer utilisateurs");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.totalData > ctx_r1.pageSize);
  }
}
function UserListComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275element(1, "app-adminrh-role");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_16_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 47);
  }
}
function UserListComponent_div_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, UserListComponent_div_16_div_7_div_1_Template, 1, 0, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function UserListComponent_div_16_ng_container_8_ng_container_3_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 129);
  }
}
function UserListComponent_div_16_ng_container_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 127);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserListComponent_div_16_ng_container_8_ng_container_3_i_3_Template, 1, 0, "i", 128);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const role_r22 = ctx.$implicit;
    const last_r23 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getHierBadgeClassMatrix(role_r22));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r22.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r23);
  }
}
function UserListComponent_div_16_ng_container_8_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 130)(1, "span", 131);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const role_r24 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", role_r24.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getRoleColorClassMatrix(role_r24));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getRoleAbbrMatrix(role_r24));
  }
}
function UserListComponent_div_16_ng_container_8_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r25 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r25.name);
  }
}
function UserListComponent_div_16_ng_container_8_ng_container_16_tr_4_td_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 122);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_16_ng_container_8_ng_container_16_tr_4_td_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 123);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_16_ng_container_8_ng_container_16_tr_4_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, UserListComponent_div_16_ng_container_8_ng_container_16_tr_4_td_3_span_1_Template, 2, 0, "span", 134)(2, UserListComponent_div_16_ng_container_8_ng_container_16_tr_4_td_3_span_2_Template, 2, 0, "span", 135);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r26 = ctx.$implicit;
    const perm_r27 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.roleHasPermission(role_r26, perm_r27.name));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.roleHasPermission(role_r26, perm_r27.name));
  }
}
function UserListComponent_div_16_ng_container_8_ng_container_16_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserListComponent_div_16_ng_container_8_ng_container_16_tr_4_td_3_Template, 3, 2, "td", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const perm_r27 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perm_r27.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.matrixRoles);
  }
}
function UserListComponent_div_16_ng_container_8_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td", 133);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, UserListComponent_div_16_ng_container_8_ng_container_16_tr_4_Template, 4, 2, "tr", 107);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cat_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("colspan", ctx_r1.matrixRoles.length + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r28.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", cat_r28.permissions);
  }
}
function UserListComponent_div_16_ng_container_8_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r29 = ctx.$implicit;
    \u0275\u0275property("ngValue", opt_r29);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r29);
  }
}
function UserListComponent_div_16_ng_container_8_div_25_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 139);
    \u0275\u0275listener("click", function UserListComponent_div_16_ng_container_8_div_25_button_3_Template_button_click_0_listener() {
      const p_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.matrixGoToPage(p_r32));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r32 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("ul-pager__btn--active", ctx_r1.matrixCurrentPage === p_r32);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r32);
  }
}
function UserListComponent_div_16_ng_container_8_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "button", 137);
    \u0275\u0275listener("click", function UserListComponent_div_16_ng_container_8_div_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.matrixGoToPage(ctx_r1.matrixCurrentPage - 1));
    });
    \u0275\u0275element(2, "i", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserListComponent_div_16_ng_container_8_div_25_button_3_Template, 2, 3, "button", 138);
    \u0275\u0275elementStart(4, "button", 137);
    \u0275\u0275listener("click", function UserListComponent_div_16_ng_container_8_div_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.matrixGoToPage(ctx_r1.matrixCurrentPage + 1));
    });
    \u0275\u0275element(5, "i", 96);
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
function UserListComponent_div_16_ng_container_8_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const role_r33 = ctx.$implicit;
    const last_r34 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRoleAbbrMatrix(role_r33));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" = ", role_r33.name, "", last_r34 ? "" : " \xB7 ", " ");
  }
}
function UserListComponent_div_16_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 105)(2, "div", 106);
    \u0275\u0275template(3, UserListComponent_div_16_ng_container_8_ng_container_3_Template, 4, 3, "ng-container", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 108)(5, "table", 109)(6, "thead")(7, "tr")(8, "th", 110);
    \u0275\u0275text(9, "Permission");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, UserListComponent_div_16_ng_container_8_th_10_Template, 3, 3, "th", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "tr", 112)(12, "td", 113);
    \u0275\u0275text(13, "R\xF4les (ordre hi\xE9rarchique \u2193)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, UserListComponent_div_16_ng_container_8_td_14_Template, 2, 1, "td", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, UserListComponent_div_16_ng_container_8_ng_container_16_Template, 5, 3, "ng-container", 107);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 115)(18, "div", 116)(19, "label", 117);
    \u0275\u0275text(20, "Afficher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 118);
    \u0275\u0275listener("ngModelChange", function UserListComponent_div_16_ng_container_8_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.matrixChangePageSize($event));
    });
    \u0275\u0275template(22, UserListComponent_div_16_ng_container_8_option_22_Template, 2, 2, "option", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 91);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, UserListComponent_div_16_ng_container_8_div_25_Template, 6, 3, "div", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 121)(27, "span")(28, "span", 122);
    \u0275\u0275text(29, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Acc\xE8s complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span")(32, "span", 123);
    \u0275\u0275text(33, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Aucun acc\xE8s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 124);
    \u0275\u0275element(36, "i", 125);
    \u0275\u0275elementStart(37, "small", 126);
    \u0275\u0275template(38, UserListComponent_div_16_ng_container_8_ng_container_38_Template, 4, 3, "ng-container", 107);
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
function UserListComponent_div_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140);
    \u0275\u0275element(1, "i", 141);
    \u0275\u0275text(2, " Aucun r\xF4le trouv\xE9 pour afficher la matrice ");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "div", 100)(2, "h2", 101);
    \u0275\u0275element(3, "i", 102);
    \u0275\u0275text(4, "Matrice des Habilitations ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 103);
    \u0275\u0275text(6, " R\xF4les accessibles dans votre p\xE9rim\xE8tre, du plus habilit\xE9 au moins habilit\xE9. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, UserListComponent_div_16_div_7_Template, 2, 2, "div", 34)(8, UserListComponent_div_16_ng_container_8_Template, 39, 11, "ng-container", 8)(9, UserListComponent_div_16_div_9_Template, 3, 0, "div", 104);
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
function UserListComponent_div_17_ng_container_9_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 160);
    \u0275\u0275text(1, " Cliquer ou glisser votre fichier ici ");
    \u0275\u0275elementStart(2, "small");
    \u0275\u0275text(3, ".xlsx \xB7 .xls \xB7 .csv");
    \u0275\u0275elementEnd()();
  }
}
function UserListComponent_div_17_ng_container_9_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 160)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedFile.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (ctx_r1.selectedFile.size / 1024).toFixed(0), " Ko");
  }
}
function UserListComponent_div_17_ng_container_9_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 161);
    \u0275\u0275element(1, "div", 162);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.importProgress, "%");
  }
}
function UserListComponent_div_17_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 153);
    \u0275\u0275element(2, "i", 154);
    \u0275\u0275template(3, UserListComponent_div_17_ng_container_9_span_3_Template, 4, 0, "span", 155)(4, UserListComponent_div_17_ng_container_9_span_4_Template, 5, 2, "span", 155);
    \u0275\u0275elementStart(5, "input", 156);
    \u0275\u0275listener("change", function UserListComponent_div_17_ng_container_9_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, UserListComponent_div_17_ng_container_9_div_6_Template, 2, 2, "div", 157);
    \u0275\u0275elementStart(7, "div", 158);
    \u0275\u0275element(8, "i", 159);
    \u0275\u0275elementStart(9, "ul")(10, "li");
    \u0275\u0275text(11, "T\xE9l\xE9chargez d'abord le ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "template");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " pour voir la structure requise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16, "Colonnes obligatoires : ");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18, "nom, prenom, email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "li");
    \u0275\u0275text(20, "Colonnes optionnelles : ");
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22, "matricule, direction, role, entreprise");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275text(24, "Matricule et num\xE9ro de t\xE9l\xE9phone doivent \xEAtre uniques");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("ul-dropzone--active", !!ctx_r1.selectedFile);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.selectedFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedFile);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isImporting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImporting);
  }
}
function UserListComponent_div_17_ng_container_10_div_1_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r37 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r37);
  }
}
function UserListComponent_div_17_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164)(1, "div", 165);
    \u0275\u0275element(2, "i", 147);
    \u0275\u0275text(3, " Structure du fichier invalide ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 166);
    \u0275\u0275template(5, UserListComponent_div_17_ng_container_10_div_1_li_5_Template, 2, 1, "li", 107);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.importResult.headerErrors);
  }
}
function UserListComponent_div_17_ng_container_10_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169);
    \u0275\u0275element(1, "i", 22);
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
function UserListComponent_div_17_ng_container_10_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170);
    \u0275\u0275element(1, "i", 159);
    \u0275\u0275text(2, " Aucune ligne \xE0 traiter dans le fichier. ");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_17_ng_container_10_ng_container_2_div_3_div_5_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r38 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r38);
  }
}
function UserListComponent_div_17_ng_container_10_ng_container_2_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 173)(1, "span", 174);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 166);
    \u0275\u0275template(4, UserListComponent_div_17_ng_container_10_ng_container_2_div_3_div_5_li_4_Template, 2, 1, "li", 107);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r39 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ligne ", e_r39.line);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", e_r39.errors);
  }
}
function UserListComponent_div_17_ng_container_10_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164)(1, "div", 165);
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 171);
    \u0275\u0275template(5, UserListComponent_div_17_ng_container_10_ng_container_2_div_3_div_5_Template, 5, 2, "div", 172);
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
function UserListComponent_div_17_ng_container_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UserListComponent_div_17_ng_container_10_ng_container_2_div_1_Template, 5, 2, "div", 167)(2, UserListComponent_div_17_ng_container_10_ng_container_2_div_2_Template, 3, 0, "div", 168)(3, UserListComponent_div_17_ng_container_10_ng_container_2_div_3_Template, 6, 2, "div", 163);
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
function UserListComponent_div_17_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UserListComponent_div_17_ng_container_10_div_1_Template, 6, 1, "div", 163)(2, UserListComponent_div_17_ng_container_10_ng_container_2_Template, 4, 3, "ng-container", 8);
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
function UserListComponent_div_17_button_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 178);
  }
}
function UserListComponent_div_17_button_14_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 27);
  }
}
function UserListComponent_div_17_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 175);
    \u0275\u0275listener("click", function UserListComponent_div_17_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.importUsers());
    });
    \u0275\u0275template(1, UserListComponent_div_17_button_14_span_1_Template, 1, 0, "span", 176)(2, UserListComponent_div_17_button_14_i_2_Template, 1, 0, "i", 177);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.selectedFile || ctx_r1.isImporting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImporting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isImporting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isImporting ? "Import en cours\u2026" : "Importer", " ");
  }
}
function UserListComponent_div_17_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 179);
    \u0275\u0275listener("click", function UserListComponent_div_17_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.importResult = null;
      return \u0275\u0275resetView(ctx_r1.selectedFile = null);
    });
    \u0275\u0275element(1, "i", 180);
    \u0275\u0275text(2, " Nouvel import ");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275listener("click", function UserListComponent_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportDialog());
    });
    \u0275\u0275elementStart(1, "div", 143);
    \u0275\u0275listener("click", function UserListComponent_div_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r35);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 144)(3, "div", 145);
    \u0275\u0275element(4, "i", 27);
    \u0275\u0275text(5, " Importer des utilisateurs ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 146);
    \u0275\u0275listener("click", function UserListComponent_div_17_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportDialog());
    });
    \u0275\u0275element(7, "i", 147);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 148);
    \u0275\u0275template(9, UserListComponent_div_17_ng_container_9_Template, 25, 6, "ng-container", 8)(10, UserListComponent_div_17_ng_container_10_Template, 3, 2, "ng-container", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 149)(12, "button", 150);
    \u0275\u0275listener("click", function UserListComponent_div_17_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportDialog());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, UserListComponent_div_17_button_14_Template, 4, 4, "button", 151)(15, UserListComponent_div_17_button_15_Template, 3, 0, "button", 152);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
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
function UserListComponent_div_18_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r43 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r43.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r43.label);
  }
}
function UserListComponent_div_18_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r44 = ctx.$implicit;
    \u0275\u0275property("ngValue", r_r44.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r44.name);
  }
}
function UserListComponent_div_18_div_26_label_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 198)(1, "input", 193);
    \u0275\u0275listener("change", function UserListComponent_div_18_div_26_label_9_Template_input_change_1_listener() {
      const u_r47 = \u0275\u0275restoreView(_r46).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleInactiveUser(u_r47.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 199)(3, "span", 200);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 201);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 202);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r47 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selectedInactiveUserIds.includes(u_r47.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r47.name || u_r47.prenom + " " + u_r47.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r47.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((u_r47.role == null ? null : u_r47.role.name) || "\u2014");
  }
}
function UserListComponent_div_18_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 190)(1, "div", 191)(2, "label", 192)(3, "input", 193);
    \u0275\u0275listener("change", function UserListComponent_div_18_div_26_Template_input_change_3_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSelectAllInactive());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 194);
    \u0275\u0275text(5, "Tout s\xE9lectionner");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 195);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 196);
    \u0275\u0275template(9, UserListComponent_div_18_div_26_label_9_Template, 9, 4, "label", 197);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.massInviteSelectAll);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.filteredInactiveUsers.length, " compte(s) inactif(s)");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredInactiveUsers);
  }
}
function UserListComponent_div_18_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 203);
    \u0275\u0275element(1, "i", 204);
    \u0275\u0275text(2, " Aucun compte inactif trouv\xE9 avec ces crit\xE8res. ");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_18_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 205);
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ul-import-report--success", ctx_r1.massInviteResult.success)("ul-import-report--error", !ctx_r1.massInviteResult.success);
    \u0275\u0275advance();
    \u0275\u0275classMap("isax " + (ctx_r1.massInviteResult.success ? "isax-tick-circle" : "isax-close-circle"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.massInviteResult.message, " ");
  }
}
function UserListComponent_div_18_button_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 178);
  }
}
function UserListComponent_div_18_button_32_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 208);
  }
}
function UserListComponent_div_18_button_32_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 209);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.selectedInactiveUserIds.length, ")");
  }
}
function UserListComponent_div_18_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 175);
    \u0275\u0275listener("click", function UserListComponent_div_18_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendMassInvitation());
    });
    \u0275\u0275template(1, UserListComponent_div_18_button_32_span_1_Template, 1, 0, "span", 176)(2, UserListComponent_div_18_button_32_i_2_Template, 1, 0, "i", 206);
    \u0275\u0275text(3);
    \u0275\u0275template(4, UserListComponent_div_18_button_32_span_4_Template, 2, 1, "span", 207);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.selectedMassDirection && !ctx_r1.selectedMassRole && !ctx_r1.selectedInactiveUserIds.length || ctx_r1.isSendingMassInvite);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSendingMassInvite);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSendingMassInvite);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSendingMassInvite ? "Envoi en cours\u2026" : "Envoyer les invitations", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedInactiveUserIds.length);
  }
}
function UserListComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275listener("click", function UserListComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMassInviteDialog());
    });
    \u0275\u0275elementStart(1, "div", 181);
    \u0275\u0275listener("click", function UserListComponent_div_18_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r42);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 144)(3, "div", 145);
    \u0275\u0275element(4, "i", 25);
    \u0275\u0275text(5, " Invitations en masse ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 146);
    \u0275\u0275listener("click", function UserListComponent_div_18_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMassInviteDialog());
    });
    \u0275\u0275element(7, "i", 147);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 148)(9, "p", 182);
    \u0275\u0275text(10, " Filtrez par direction et/ou r\xF4le, ou s\xE9lectionnez manuellement les comptes inactifs \xE0 inviter. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 183)(12, "div", 184)(13, "label", 185);
    \u0275\u0275text(14, "Direction / D\xE9partement / \xC9quipe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 186);
    \u0275\u0275twoWayListener("ngModelChange", function UserListComponent_div_18_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedMassDirection, $event) || (ctx_r1.selectedMassDirection = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UserListComponent_div_18_Template_select_ngModelChange_15_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterInactiveUsers());
    });
    \u0275\u0275elementStart(16, "option", 136);
    \u0275\u0275text(17, "\u2014 Toutes \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, UserListComponent_div_18_option_18_Template, 2, 2, "option", 119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 184)(20, "label", 185);
    \u0275\u0275text(21, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 186);
    \u0275\u0275twoWayListener("ngModelChange", function UserListComponent_div_18_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedMassRole, $event) || (ctx_r1.selectedMassRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UserListComponent_div_18_Template_select_ngModelChange_22_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterInactiveUsers());
    });
    \u0275\u0275elementStart(23, "option", 136);
    \u0275\u0275text(24, "\u2014 Tous les r\xF4les \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, UserListComponent_div_18_option_25_Template, 2, 2, "option", 119);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, UserListComponent_div_18_div_26_Template, 10, 3, "div", 187)(27, UserListComponent_div_18_div_27_Template, 3, 0, "div", 188)(28, UserListComponent_div_18_div_28_Template, 3, 7, "div", 189);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 149)(30, "button", 150);
    \u0275\u0275listener("click", function UserListComponent_div_18_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMassInviteDialog());
    });
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, UserListComponent_div_18_button_32_Template, 5, 5, "button", 151);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedMassDirection);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(13, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.massInviteDirections);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedMassRole);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(14, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.massInviteRoles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredInactiveUsers.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filteredInactiveUsers.length && !ctx_r1.massInviteResult);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.massInviteResult);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.massInviteResult ? "Fermer" : "Annuler", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.massInviteResult);
  }
}
var UserListComponent = class _UserListComponent {
  userService;
  directionService;
  permissionService;
  roleService;
  authService;
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
  showRoleDropdown = false;
  showStatutDropdown = false;
  // '' = tous, 'none' = sans manager, sinon id du manager
  selectedManagerFilter = "";
  showManagerDropdown = false;
  /** Utilisateurs qui sont N+1 d'au moins une personne de la liste. */
  get availableManagers() {
    const ids = new Set(this.tableDataCopy.map((u) => u.manager_id).filter((id) => !!id));
    return this.tableDataCopy.filter((u) => ids.has(u.id)).map((u) => ({ id: u.id, label: this.getDisplayName(u) })).sort((a, b) => a.label.localeCompare(b.label));
  }
  get managerFilterLabel() {
    if (this.selectedManagerFilter === "none")
      return "Sans manager";
    return this.availableManagers.find((m) => "" + m.id === this.selectedManagerFilter)?.label ?? "";
  }
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
  currentUser = null;
  // ── Import ───────────────────────────────────
  showImportDialog = false;
  selectedFile = null;
  isImporting = false;
  importProgress = 0;
  importResult = null;
  // ── Invitation en masse ───────────────────
  showMassInviteDialog = false;
  massInviteDirections = [];
  selectedMassDirection = null;
  selectedMassRole = null;
  massInviteRoles = [];
  isSendingMassInvite = false;
  massInviteResult = null;
  inactiveUsers = [];
  filteredInactiveUsers = [];
  selectedInactiveUserIds = [];
  massInviteSelectAll = false;
  // ── Matrice des habilitations ──────────────
  matrixRoles = [];
  matrixCategories = [];
  matrixLoading = false;
  matrixPageSize = 20;
  matrixPageSizeOptions = [20, 40, 80, 100, 200];
  matrixCurrentPage = 1;
  matrixAllPermissions = [];
  matrixTotalPermissions = 0;
  constructor(userService, directionService, permissionService, roleService, authService, route) {
    this.userService = userService;
    this.directionService = directionService;
    this.permissionService = permissionService;
    this.roleService = roleService;
    this.authService = authService;
    this.route = route;
  }
  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.getUserList();
    if (this.route.snapshot.queryParamMap.get("action") === "create") {
      this.openNew();
    }
  }
  onDocumentClick() {
    this.showRoleDropdown = false;
    this.showStatutDropdown = false;
    this.showManagerDropdown = false;
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
  // CHARGEMENT
  // ════════════════════════════════════════════
  getUserList() {
    this.loading = true;
    this.error = "";
    const roleId = Number(this.currentUser?.role_id) || 0;
    const request$ = roleId === 5 ? this.userService.getMyUsersgroup() : this.userService.getMyUsers();
    request$.subscribe({
      next: (response) => {
        this.actualData = response.users ?? response.data ?? [];
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
  setManagerFilter(value) {
    this.selectedManagerFilter = value;
    this.showManagerDropdown = false;
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
      data = data.filter((u) => u.nom?.toLowerCase().includes(q) || u.prenom?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q) || u.fonction?.toLowerCase().includes(q) || u.numero?.toLowerCase().includes(q) || u.matricule?.toLowerCase().includes(q) || u.direction?.toLowerCase().includes(q) || u.direction_obj?.nom?.toLowerCase().includes(q) || u.direction_obj?.parent?.nom?.toLowerCase().includes(q) || u.direction_obj?.parent?.parent?.nom?.toLowerCase().includes(q));
    }
    if (this.selectedRoleFilter) {
      data = data.filter((u) => this.getRoleName(u) === this.selectedRoleFilter);
    }
    if (this.selectedManagerFilter === "none") {
      data = data.filter((u) => !u.manager_id);
    } else if (this.selectedManagerFilter) {
      const managerId = +this.selectedManagerFilter;
      data = data.filter((u) => u.manager_id === managerId);
    }
    if (this.selectedStatutFilter !== "") {
      if (this.selectedStatutFilter === "locked") {
        data = data.filter((u) => this.isLocked(u));
      } else {
        const s = +this.selectedStatutFilter;
        data = data.filter((u) => u.statut === s);
      }
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
    const headers = ["Matricule", "Nom", "Pr\xE9nom", "Email", "Direction", "Matricule manager", "Manager", "R\xF4le", "Entreprise", "Statut"];
    const rows = data.map((u) => [
      u.matricule || "",
      u.nom || "",
      u.prenom || "",
      u.email || "",
      this.getDirectionPath(u),
      u.manager?.matricule || "",
      u.manager ? this.getDisplayName(u.manager) : "",
      this.getRoleName(u),
      u.entreprise?.nom || "",
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
  getDirectionPath(u) {
    if (!u.direction_obj)
      return u.direction || "";
    const parts = [];
    if (u.direction_obj.parent?.parent)
      parts.push(u.direction_obj.parent.parent.nom);
    if (u.direction_obj.parent)
      parts.push(u.direction_obj.parent.nom);
    parts.push(u.direction_obj.nom);
    return parts.join(" \u2192 ");
  }
  // ════════════════════════════════════════════
  // MATRICE DES HABILITATIONS
  // ════════════════════════════════════════════
  loadMatrix() {
    this.matrixLoading = true;
    this.userService.getRoles().subscribe({
      next: (response) => {
        const roles = Array.isArray(response) ? response : response.roles || response.data || [];
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
  getRoleAbbrMatrix(role) {
    const map = {
      "admin rh": "ARH",
      "responsable rh": "RRH",
      "manager": "MGR",
      "formateur": "FOR",
      "consultant": "CST",
      "employ\xE9": "EMP"
    };
    return map[role.name?.toLowerCase()] || role.name?.substring(0, 3).toUpperCase() || "?";
  }
  getRoleColorClassMatrix(role) {
    const name = role.name?.toLowerCase() || "";
    if (name.includes("admin rh") || name.includes("responsable rh"))
      return "ul-mh--rh";
    if (name.includes("manager"))
      return "ul-mh--mgr";
    if (name.includes("formateur") || name.includes("consultant"))
      return "ul-mh--form";
    if (name.includes("employ\xE9") || name.includes("employee"))
      return "ul-mh--emp";
    return "ul-mh--default";
  }
  getHierBadgeClassMatrix(role) {
    const name = role.name?.toLowerCase() || "";
    if (name.includes("admin rh") || name.includes("responsable rh"))
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
    return this.getDisplayName(u).split(" ").map((w) => w[0]).join("").substring(0, 2).toUpperCase();
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
  getStatutBadgeClass(statut) {
    return statut === 1 ? "badge bg-success" : "badge bg-warning";
  }
  // ════════════════════════════════════════════
  // INVITATIONS
  // ════════════════════════════════════════════
  sendInvitation(user) {
    if (!confirm(`Envoyer l'invitation d'activation \xE0 ${user.email} ?`))
      return;
    this.userService.sendInvitation(user.id).subscribe({
      next: (res) => alert(res.message || "Invitation envoy\xE9e"),
      error: (err) => alert(err.error?.message || "Erreur lors de l'envoi")
    });
  }
  activateManual(user) {
    if (!confirm(`Activer manuellement le compte de ${user.email} ?`))
      return;
    this.userService.activateManual(user.id).subscribe({
      next: () => this.refreshData(),
      error: (err) => alert(err.error?.message || "Erreur lors de l'activation")
    });
  }
  openMassInviteDialog() {
    this.showMassInviteDialog = true;
    this.selectedMassDirection = null;
    this.selectedMassRole = null;
    this.selectedInactiveUserIds = [];
    this.massInviteSelectAll = false;
    this.massInviteResult = null;
    this.loadMassInviteDirections();
    this.loadMassInviteRoles();
    this.loadInactiveUsers();
  }
  closeMassInviteDialog() {
    this.showMassInviteDialog = false;
    this.isSendingMassInvite = false;
    this.massInviteResult = null;
  }
  loadMassInviteDirections() {
    this.directionService.getArborescence().subscribe({
      next: (res) => {
        this.massInviteDirections = [];
        const arbo = res.arborescence || [];
        for (const dir of arbo) {
          this.massInviteDirections.push({ id: dir.id, label: dir.nom });
          for (const dept of dir.enfants || []) {
            this.massInviteDirections.push({ id: dept.id, label: `${dir.nom} \u2192 ${dept.nom}` });
            for (const equipe of dept.enfants || []) {
              this.massInviteDirections.push({ id: equipe.id, label: `${dir.nom} \u2192 ${dept.nom} \u2192 ${equipe.nom}` });
            }
          }
        }
      }
    });
  }
  loadMassInviteRoles() {
    this.roleService.getAllRoles().subscribe({
      next: (res) => {
        this.massInviteRoles = res.roles || res.data || res || [];
      }
    });
  }
  loadInactiveUsers() {
    this.inactiveUsers = this.actualData.filter((u) => u.statut === 0);
    this.filterInactiveUsers();
  }
  filterInactiveUsers() {
    let users = [...this.inactiveUsers];
    if (this.selectedMassDirection) {
      users = users.filter((u) => u.direction_id === this.selectedMassDirection);
    }
    if (this.selectedMassRole) {
      users = users.filter((u) => u.role_id === this.selectedMassRole || u.role?.id === this.selectedMassRole);
    }
    this.filteredInactiveUsers = users;
    this.selectedInactiveUserIds = this.selectedInactiveUserIds.filter((id) => users.some((u) => u.id === id));
    this.massInviteSelectAll = this.filteredInactiveUsers.length > 0 && this.filteredInactiveUsers.every((u) => this.selectedInactiveUserIds.includes(u.id));
  }
  toggleInactiveUser(userId) {
    const idx = this.selectedInactiveUserIds.indexOf(userId);
    if (idx > -1) {
      this.selectedInactiveUserIds.splice(idx, 1);
    } else {
      this.selectedInactiveUserIds.push(userId);
    }
    this.massInviteSelectAll = this.filteredInactiveUsers.length > 0 && this.filteredInactiveUsers.every((u) => this.selectedInactiveUserIds.includes(u.id));
  }
  toggleSelectAllInactive() {
    if (this.massInviteSelectAll) {
      this.selectedInactiveUserIds = [];
      this.massInviteSelectAll = false;
    } else {
      this.selectedInactiveUserIds = this.filteredInactiveUsers.map((u) => u.id);
      this.massInviteSelectAll = true;
    }
  }
  sendMassInvitation() {
    const hasFilter = this.selectedMassDirection || this.selectedMassRole;
    const hasSelection = this.selectedInactiveUserIds.length > 0;
    if (!hasFilter && !hasSelection)
      return;
    this.isSendingMassInvite = true;
    this.massInviteResult = null;
    const params = {};
    if (hasSelection) {
      params.user_ids = this.selectedInactiveUserIds;
    } else {
      if (this.selectedMassDirection)
        params.direction_id = this.selectedMassDirection;
      if (this.selectedMassRole)
        params.role_id = this.selectedMassRole;
    }
    this.userService.sendMassInvitation(params).subscribe({
      next: (res) => {
        this.isSendingMassInvite = false;
        this.massInviteResult = { message: res.message, success: true };
        this.refreshData();
      },
      error: (err) => {
        this.isSendingMassInvite = false;
        this.massInviteResult = { message: err.error?.message || "Erreur lors de l'envoi", success: false };
      }
    });
  }
  static \u0275fac = function UserListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserListComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(DirectionService), \u0275\u0275directiveInject(PermissionService), \u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserListComponent, selectors: [["app-user-list"]], hostBindings: function UserListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function UserListComponent_click_HostBindingHandler() {
        return ctx.onDocumentClick();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 20, vars: 21, consts: [["sansManager", ""], [1, "ul-shell"], [1, "ul-topbar"], [1, "isax", "isax-people", "ul-topbar__icon"], [1, "ul-topbar__title"], [1, "ul-topbar__stats"], [1, "ul-tabbar"], ["type", "button", 1, "ul-tab", 3, "click"], [4, "ngIf"], ["class", "ul-role-embed", 4, "ngIf"], ["class", "ul-matrix-wrap", 4, "ngIf"], ["class", "ul-import-overlay", 3, "click", 4, "ngIf"], [3, "onClose", "onSave", "visible", "isEditMode", "userData", "utilisateurs"], [1, "ul-toolbar"], [1, "ul-search"], [1, "isax", "isax-search-normal-1", "ul-search__icon"], ["type", "search", "placeholder", "Rechercher un utilisateur...", 1, "ul-search__input", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "ul-filter-group", 3, "click"], ["type", "button", 1, "ul-filter", 3, "click"], [1, "isax", "isax-filter"], ["class", "ul-filter__chip", 4, "ngIf"], ["class", "ul-dropdown", 4, "ngIf"], [1, "isax", "isax-tick-circle"], [1, "isax", "isax-hierarchy"], ["type", "button", 1, "ul-invite-btn", 3, "click"], [1, "isax", "isax-sms"], ["type", "button", 1, "ul-import-btn", 3, "click"], [1, "isax", "isax-import"], ["type", "button", 1, "ul-tpl-btn", 3, "click"], [1, "isax", "isax-export"], ["type", "button", 1, "ul-export-btn", 3, "click"], [1, "isax", "isax-document-download"], ["type", "button", "class", "ul-add-btn", 3, "click", 4, "appHasPermission"], ["class", "ul-alert", 4, "ngIf"], ["class", "ul-skeletons", 4, "ngIf"], ["class", "ul-table", 4, "ngIf"], ["class", "ul-pager", 4, "ngIf"], [1, "ul-filter__chip"], [1, "ul-dropdown"], [1, "ul-dropdown__item", 3, "click"], ["class", "ul-dropdown__item", 3, "ul-dropdown__item--on", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "ul-add-btn", 3, "click"], [1, "isax", "isax-add"], [1, "ul-alert"], [1, "isax", "isax-warning-2"], [1, "ul-skeletons"], ["class", "ul-skeleton-row", 4, "ngFor", "ngForOf"], [1, "ul-skeleton-row"], [1, "ul-table"], [2, "width", "10%"], [2, "width", "23%"], [2, "width", "12%"], [2, "width", "9%"], [2, "width", "13%"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ul-meta", "ul-meta--mono"], [1, "ul-user"], [1, "ul-avatar"], [1, "ul-user__name"], [1, "ul-user__email"], ["class", "ul-direction", 4, "ngIf"], ["class", "ul-meta", 4, "ngIf"], ["class", "ul-meta", 4, "ngIf", "ngIfElse"], ["class", "ul-meta ul-n1-count", "title", "Collaborateurs directs (N-1)", 4, "ngIf"], [1, "ul-role-badge"], [1, "ul-statut"], [1, "ul-date"], [1, "ul-actions"], ["type", "button", "title", "Modifier", 1, "ul-act", 3, "click"], [1, "isax", "isax-edit"], ["type", "button", "class", "ul-act ul-act--warn", "title", "D\xE9sactiver", 3, "click", 4, "ngIf"], ["type", "button", "class", "ul-act ul-act--ok", "title", "Activer", 3, "click", 4, "ngIf"], ["type", "button", "class", "ul-act ul-act--invite", "title", "Envoyer l'invitation", 3, "click", 4, "ngIf"], ["type", "button", "class", "ul-act ul-act--ok", "title", "D\xE9bloquer le compte", 3, "click", 4, "ngIf"], [1, "ul-direction"], [1, "ul-dir-path"], [1, "ul-dir-leaf"], [1, "ul-dir-root"], [1, "isax", "isax-arrow-right-3", "ul-dir-sep"], [1, "ul-dir-mid"], [1, "ul-meta"], ["title", "Collaborateurs directs (N-1)", 1, "ul-meta", "ul-n1-count"], ["type", "button", "title", "D\xE9sactiver", 1, "ul-act", "ul-act--warn", 3, "click"], [1, "isax", "isax-archive"], ["type", "button", "title", "Activer", 1, "ul-act", "ul-act--ok", 3, "click"], ["type", "button", "title", "Envoyer l'invitation", 1, "ul-act", "ul-act--invite", 3, "click"], ["type", "button", "title", "D\xE9bloquer le compte", 1, "ul-act", "ul-act--ok", 3, "click"], [1, "isax", "isax-unlock"], ["colspan", "8", 1, "ul-empty"], [1, "isax", "isax-people", "d-block", "mb-2", 2, "font-size", "2rem"], [1, "ul-pager"], [1, "ul-pager__info"], [1, "ul-pager__btns"], ["type", "button", 1, "ul-pager__btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["type", "button", "class", "ul-pager__btn", 3, "ul-pager__btn--active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"], ["type", "button", 1, "ul-pager__btn", 3, "click"], [1, "ul-role-embed"], [1, "ul-matrix-wrap"], [1, "ul-matrix__header"], [1, "ul-matrix__title"], [1, "isax", "isax-shield-security", "me-2"], [1, "ul-matrix__subtitle", "text-muted", "small"], ["class", "ul-empty p-4 text-center", 4, "ngIf"], [1, "ul-matrix__hierarchy", "mb-3"], [1, "ul-hier-chain"], [4, "ngFor", "ngForOf"], [1, "table-responsive"], [1, "ul-matrix"], [2, "min-width", "200px"], [3, "title", 4, "ngFor", "ngForOf"], [1, "ul-matrix__role-names"], [1, "ul-matrix__group-label"], ["class", "small text-nowrap", 4, "ngFor", "ngForOf"], [1, "ul-pager", "mt-3", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "ul-pager__label", "mb-0"], [1, "form-select", "form-select-sm", "ul-pager__select", 3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "ul-pager__btns", 4, "ngIf"], [1, "ul-matrix__legend", "mt-3"], [1, "ul-c-yes"], [1, "ul-c-no"], [1, "ul-matrix__note", "mt-2"], [1, "isax", "isax-info-circle", "me-1"], [1, "text-muted"], [1, "ul-hier-badge", 3, "ngClass"], ["class", "isax isax-arrow-right-3 ul-hier-arrow", 4, "ngIf"], [1, "isax", "isax-arrow-right-3", "ul-hier-arrow"], [3, "title"], [1, "ul-mh-role", 3, "ngClass"], [1, "small", "text-nowrap"], [1, "ul-matrix__group"], ["class", "ul-c-yes", 4, "ngIf"], ["class", "ul-c-no", 4, "ngIf"], [3, "ngValue"], [1, "ul-pager__btn", 3, "click", "disabled"], ["class", "ul-pager__btn", 3, "ul-pager__btn--active", "click", 4, "ngFor", "ngForOf"], [1, "ul-pager__btn", 3, "click"], [1, "ul-empty", "p-4", "text-center"], [1, "isax", "isax-shield-security", "d-block", "mb-2", 2, "font-size", "2rem"], [1, "ul-import-overlay", 3, "click"], [1, "ul-import-modal", 3, "click"], [1, "ul-import-modal__head"], [1, "ul-import-modal__title"], ["type", "button", 1, "ul-import-modal__close", 3, "click"], [1, "isax", "isax-close-circle"], [1, "ul-import-modal__body"], [1, "ul-import-modal__foot"], ["type", "button", 1, "ul-import-modal__cancel", 3, "click"], ["type", "button", "class", "ul-import-modal__submit", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "ul-import-modal__submit ul-import-modal__submit--retry", 3, "click", 4, "ngIf"], ["for", "rh-file-input", 1, "ul-dropzone"], [1, "isax", "isax-document-upload", "ul-dropzone__icon"], ["class", "ul-dropzone__label", 4, "ngIf"], ["id", "rh-file-input", "type", "file", "accept", ".xlsx,.xls,.csv", 1, "ul-file-hidden", 3, "change", "disabled"], ["class", "ul-import-progress", 4, "ngIf"], [1, "ul-import-info"], [1, "isax", "isax-info-circle"], [1, "ul-dropzone__label"], [1, "ul-import-progress"], [1, "ul-import-progress__bar"], ["class", "ul-import-report ul-import-report--error", 4, "ngIf"], [1, "ul-import-report", "ul-import-report--error"], [1, "ul-import-report__title"], [1, "ul-import-report__list"], ["class", "ul-import-report ul-import-report--success", 4, "ngIf"], ["class", "ul-import-report ul-import-report--warn", 4, "ngIf"], [1, "ul-import-report", "ul-import-report--success"], [1, "ul-import-report", "ul-import-report--warn"], [1, "ul-import-report__rows"], ["class", "ul-import-report__row", 4, "ngFor", "ngForOf"], [1, "ul-import-report__row"], [1, "ul-import-report__line"], ["type", "button", 1, "ul-import-modal__submit", 3, "click", "disabled"], ["class", "ul-spinner", 4, "ngIf"], ["class", "isax isax-import", 4, "ngIf"], [1, "ul-spinner"], ["type", "button", 1, "ul-import-modal__submit", "ul-import-modal__submit--retry", 3, "click"], [1, "isax", "isax-refresh"], [1, "ul-import-modal", "ul-import-modal--wide", 3, "click"], [1, "mb-3", "text-muted"], [1, "row", "g-2", "mb-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "form-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "ul-invite-list", 4, "ngIf"], ["class", "text-center text-muted py-3", 4, "ngIf"], ["class", "ul-import-report mt-3", 3, "ul-import-report--success", "ul-import-report--error", 4, "ngIf"], [1, "ul-invite-list"], [1, "ul-invite-list__head"], [1, "ul-invite-list__check-all"], ["type", "checkbox", 3, "change", "checked"], [1, "ms-2", "fw-semibold"], [1, "text-muted", "small"], [1, "ul-invite-list__body"], ["class", "ul-invite-list__item", 4, "ngFor", "ngForOf"], [1, "ul-invite-list__item"], [1, "ul-invite-list__info"], [1, "ul-invite-list__name"], [1, "ul-invite-list__email"], [1, "ul-invite-list__role"], [1, "text-center", "text-muted", "py-3"], [1, "isax", "isax-info-circle", "d-block", "mb-1", 2, "font-size", "1.5rem"], [1, "ul-import-report", "mt-3"], ["class", "isax isax-send-2", 4, "ngIf"], ["class", "ms-1", 4, "ngIf"], [1, "isax", "isax-send-2"], [1, "ms-1"]], template: function UserListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275element(2, "i", 3);
      \u0275\u0275elementStart(3, "h1", 4);
      \u0275\u0275text(4, "Utilisateurs & r\xF4les");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
      \u0275\u0275listener("click", function UserListComponent_Template_button_click_8_listener() {
        return ctx.setTab("users");
      });
      \u0275\u0275text(9, "Utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 7);
      \u0275\u0275listener("click", function UserListComponent_Template_button_click_10_listener() {
        return ctx.setTab("roles");
      });
      \u0275\u0275text(11, "R\xF4les & permissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 7);
      \u0275\u0275listener("click", function UserListComponent_Template_button_click_12_listener() {
        return ctx.setTab("matrix");
      });
      \u0275\u0275text(13, "Matrice des Habilitations");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, UserListComponent_ng_container_14_Template, 40, 20, "ng-container", 8)(15, UserListComponent_div_15_Template, 2, 0, "div", 9)(16, UserListComponent_div_16_Template, 10, 3, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, UserListComponent_div_17_Template, 16, 5, "div", 11)(18, UserListComponent_div_18_Template, 33, 15, "div", 11);
      \u0275\u0275elementStart(19, "app-user-add", 12);
      \u0275\u0275listener("onClose", function UserListComponent_Template_app_user_add_onClose_19_listener() {
        return ctx.hideDialog();
      })("onSave", function UserListComponent_Template_app_user_add_onSave_19_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate6(" ", ctx.totalData, " utilisateur", ctx.totalData > 1 ? "s" : "", " \xB7 ", ctx.rolesCount, " r\xF4le", ctx.rolesCount > 1 ? "s" : "", " \xB7 ", ctx.entreprisesCount, " entreprise", ctx.entreprisesCount > 1 ? "s" : "", " ");
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
      \u0275\u0275property("ngIf", ctx.showMassInviteDialog);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.userDialog)("isEditMode", ctx.isEditMode)("userData", ctx.selectedUser)("utilisateurs", ctx.tableDataCopy);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, CommonModule, NgClass, NgForOf, NgIf, UserAddComponent, AdminrhRoleComponent, HasPermissionDirective], styles: ['\n\n.ul-shell[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ul-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.ul-topbar__icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #9ca3af;\n}\n.ul-topbar__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n  flex: 1;\n}\n.ul-topbar__stats[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-tabbar[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-tab[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  font-size: 13px;\n  font-weight: 400;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ul-tab--active[_ngcontent-%COMP%] {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ul-tab[_ngcontent-%COMP%]:hover:not(.ul-tab--active) {\n  color: #111827;\n}\n.ul-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 180px;\n  max-width: 240px;\n}\n.ul-search__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ul-search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px 6px 32px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ul-search__input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.ul-filter-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ul-filter[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 11px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color 0.15s, background 0.15s;\n}\n.ul-filter[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ul-filter--on[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n  color: #185FA5;\n  background: #e6f1fb;\n}\n.ul-filter__chip[_ngcontent-%COMP%] {\n  padding: 1px 6px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 10px;\n}\n.ul-filter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-invite-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #1e40af 0%,\n      #3b82f6 100%);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(30, 64, 175, 0.35);\n  transition: opacity 0.15s, transform 0.1s;\n}\n.ul-invite-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.ul-invite-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-import-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517 0%,\n      #D4941E 100%);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(186, 117, 23, 0.35);\n  transition: opacity 0.15s, transform 0.1s;\n}\n.ul-import-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.ul-import-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.ul-import-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-tpl-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #006F78;\n  background: #E6F4F5;\n  border: 1.5px solid #9DD4D8;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s, transform 0.1s;\n}\n.ul-tpl-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(215.4285714286, 237.5885714286, 239.1714285714);\n  transform: translateY(-1px);\n}\n.ul-tpl-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.ul-tpl-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-export-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #006F78,\n      #00949F);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: 0 2px 6px rgba(0, 111, 120, 0.3);\n  transition: opacity 0.15s, transform 0.1s;\n}\n.ul-export-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.ul-export-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.ul-export-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #185FA5;\n  background: #e6f1fb;\n  border: 1px solid #185FA5;\n  border-radius: 8px;\n  cursor: pointer;\n  margin-left: auto;\n  transition: background 0.15s;\n}\n.ul-add-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(208.0172413793, 228.6896551724, 247.4827586207);\n}\n.ul-add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-import-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_ul-fade-in 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_ul-fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.ul-import-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  width: 460px;\n  max-width: calc(100vw - 32px);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_ul-slide-up 0.18s ease;\n}\n@keyframes _ngcontent-%COMP%_ul-slide-up {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.ul-import-modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517 0%,\n      #D4941E 100%);\n  color: #fff;\n}\n.ul-import-modal__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.ul-import-modal__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.ul-import-modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n  font-size: 18px;\n  line-height: 1;\n  padding: 0;\n  transition: color 0.15s;\n}\n.ul-import-modal__close[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.ul-import-modal__body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.ul-import-modal__foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.ul-import-modal__cancel[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #4b5563;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.ul-import-modal__cancel[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.ul-import-modal__cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ul-import-modal__submit[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517 0%,\n      #D4941E 100%);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(186, 117, 23, 0.35);\n  transition: opacity 0.15s;\n}\n.ul-import-modal__submit[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.ul-import-modal__submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ul-import-modal__submit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ul-dropzone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 16px;\n  border: 2px dashed #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n  text-align: center;\n}\n.ul-dropzone[_ngcontent-%COMP%]:hover, \n.ul-dropzone--active[_ngcontent-%COMP%] {\n  border-color: #BA7517;\n  background: #FAEEDA;\n}\n.ul-dropzone__icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #BA7517;\n}\n.ul-dropzone__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ul-dropzone__label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 13px;\n}\n.ul-dropzone__label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 11px;\n}\n.ul-import-progress[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #f3f4f6;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.ul-import-progress__bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #BA7517,\n      #E8B84B);\n  border-radius: 99px;\n  transition: width 0.3s ease;\n}\n.ul-import-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 12px;\n  background: #FAEEDA;\n  border: 1px solid #E9C97E;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #8C5410;\n}\n.ul-import-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #BA7517;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.ul-import-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 16px;\n}\n.ul-import-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n.ul-import-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #6B3C10;\n}\n.ul-file-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.ul-import-report[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 12px 14px;\n  font-size: 12.5px;\n  margin-top: 10px;\n}\n.ul-import-report--success[_ngcontent-%COMP%] {\n  background: #EDFAF2;\n  border: 1px solid #6FCF97;\n  color: #1A5C35;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ul-import-report--success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #27AE60;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.ul-import-report--warn[_ngcontent-%COMP%] {\n  background: #FAFAEC;\n  border: 1px solid #D4C84A;\n  color: #6B5E10;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ul-import-report--warn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #B8A800;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.ul-import-report--error[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n  color: #7F1D1D;\n}\n.ul-import-report__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.ul-import-report__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #DC2626;\n}\n.ul-import-report__rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  padding-right: 4px;\n}\n.ul-import-report__row[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #FECACA;\n  border-radius: 6px;\n  padding: 8px 10px;\n}\n.ul-import-report__line[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #DC2626;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  border-radius: 4px;\n  padding: 1px 7px;\n  margin-bottom: 4px;\n}\n.ul-import-report__list[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  padding-left: 16px;\n}\n.ul-import-report__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n.ul-import-modal__submit--retry[_ngcontent-%COMP%] {\n  background: #6B7280;\n}\n.ul-import-modal__submit--retry[_ngcontent-%COMP%]:hover {\n  background: #4B5563;\n}\n.ul-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_ul-spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_ul-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ul-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  z-index: 200;\n  min-width: 160px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.ul-dropdown__item[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.ul-dropdown__item[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.ul-dropdown__item--on[_ngcontent-%COMP%] {\n  color: #185FA5;\n  font-weight: 500;\n  background: #e6f1fb;\n}\n.ul-alert[_ngcontent-%COMP%] {\n  margin: 10px 14px 0;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ul-skeletons[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ul-skeleton-row[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 8px;\n  background: #f3f4f6;\n  animation: _ngcontent-%COMP%_ul-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ul-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ul-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.ul-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ul-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ul-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ul-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 14px !important;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ul-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ul-user__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.ul-user__email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ul-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.ul-avatar[data-role=superadmin][_ngcontent-%COMP%] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-avatar[data-role=adminrh][_ngcontent-%COMP%] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-avatar[data-role=formateur][_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-avatar[data-role=employe][_ngcontent-%COMP%] {\n  background: #faeeda;\n  color: #633806;\n}\n.ul-avatar[data-role=default][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ul-role-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ul-role-badge[data-role=superadmin][_ngcontent-%COMP%] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-role-badge[data-role=adminrh][_ngcontent-%COMP%] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-role-badge[data-role=formateur][_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-role-badge[data-role=employe][_ngcontent-%COMP%] {\n  background: #f1efe8;\n  color: #444441;\n}\n.ul-role-badge[data-role=default][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-cie[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  padding: 2px 8px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.ul-cie-none[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-statut[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n}\n.ul-statut[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ul-statut[data-s=actif][_ngcontent-%COMP%] {\n  background: #eaf3de;\n  color: #3b6d11;\n}\n.ul-statut[data-s=inactif][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-statut[data-s=verrouille][_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.ul-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4b5563;\n}\n.ul-meta--mono[_ngcontent-%COMP%] {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n}\n.ul-n1-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 11px;\n  color: #4f46e5;\n  margin-top: 2px;\n}\n.ul-n1-count[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ul-direction[_ngcontent-%COMP%] {\n  line-height: 1.3;\n}\n.ul-dir-path[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex-wrap: wrap;\n  font-size: 11px;\n}\n.ul-dir-root[_ngcontent-%COMP%] {\n  color: #4b5563;\n  font-weight: 500;\n}\n.ul-dir-mid[_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.ul-dir-leaf[_ngcontent-%COMP%] {\n  color: #111827;\n  font-weight: 600;\n}\n.ul-dir-sep[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n}\n.ul-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.ul-act[_ngcontent-%COMP%] {\n  padding: 4px 7px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.ul-act[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.ul-act--warn[_ngcontent-%COMP%] {\n  color: #92400e;\n  border-color: #fcd34d;\n}\n.ul-act--warn[_ngcontent-%COMP%]:hover {\n  background: #fffbeb;\n}\n.ul-act--ok[_ngcontent-%COMP%] {\n  color: #065f46;\n  border-color: #6ee7b7;\n}\n.ul-act--ok[_ngcontent-%COMP%]:hover {\n  background: #ecfdf5;\n}\n.ul-act--del[_ngcontent-%COMP%] {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ul-act--del[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.ul-act--invite[_ngcontent-%COMP%] {\n  color: #1e40af;\n  border-color: #93c5fd;\n}\n.ul-act--invite[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.ul-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ul-pager__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-pager__btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ul-pager__btn[_ngcontent-%COMP%] {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ul-pager__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ul-pager__btn--active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ul-pager__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ul-role-embed[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ul-role-embed[_ngcontent-%COMP%]     .page-content > .d-md-flex:first-child, \n.ul-role-embed[_ngcontent-%COMP%]     .page-content > .d-block:first-child, \n.ul-role-embed[_ngcontent-%COMP%]     .d-md-flex.align-items-center.justify-content-between.mb-4 {\n  display: none !important;\n}\n.ul-role-embed[_ngcontent-%COMP%]     .page-content {\n  padding: 0 !important;\n}\n.ul-matrix-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 14px;\n}\n.ul-matrix__header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.ul-matrix__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.ul-matrix__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ul-matrix__hierarchy[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 8px 0;\n}\n.ul-hier-chain[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 4px;\n  width: max-content;\n}\n.ul-hier-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.ul-hier-arrow[_ngcontent-%COMP%] {\n  color: #aaa;\n  font-size: 12px;\n}\n.ul-hier--rh[_ngcontent-%COMP%] {\n  background: #eef4ff;\n  color: #2563eb;\n  border: 1px solid #bfdbfe;\n}\n.ul-hier--mgr[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n  border: 1px solid #fde68a;\n}\n.ul-hier--form[_ngcontent-%COMP%] {\n  background: #f0fdfd;\n  color: #0891b2;\n  border: 1px solid #a5f3fc;\n}\n.ul-hier--emp[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n}\n.ul-mh-role[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 7px;\n  border-radius: 6px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n.ul-mh--rh[_ngcontent-%COMP%] {\n  background: #eef4ff;\n  color: #2563eb;\n}\n.ul-mh--mgr[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.ul-mh--form[_ngcontent-%COMP%] {\n  background: #f0fdfd;\n  color: #0891b2;\n}\n.ul-mh--emp[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #6b7280;\n}\n.ul-matrix[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  font-size: 12px;\n}\n.ul-matrix[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.ul-matrix[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid #e5e7eb;\n  text-align: center;\n}\n.ul-matrix[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.ul-matrix[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n  font-weight: 500;\n  background: #f9fafb;\n}\n.ul-matrix[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-matrix[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.ul-matrix__role-names[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #4b5563;\n  background: #f8f9fc !important;\n  white-space: nowrap;\n  padding: 5px 8px !important;\n}\n.ul-matrix__group-label[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #9ca3af !important;\n  font-weight: 400 !important;\n}\n.ul-matrix__group[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: #f3f4f6 !important;\n  text-align: left !important;\n  padding-left: 12px !important;\n}\n.ul-matrix__legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 11px;\n  color: #9ca3af;\n  flex-wrap: wrap;\n}\n.ul-matrix__note[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ul-c-yes[_ngcontent-%COMP%] {\n  color: #3b6d11;\n  font-size: 15px;\n  font-weight: 700;\n}\n.ul-c-no[_ngcontent-%COMP%] {\n  color: #d3d1c7;\n  font-size: 15px;\n}\n.ul-c-partial[_ngcontent-%COMP%] {\n  color: #ba7517;\n  font-size: 15px;\n}\n.ul-import-modal--wide[_ngcontent-%COMP%] {\n  width: 600px;\n  max-width: calc(100vw - 32px);\n}\n.ul-invite-list[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.ul-invite-list__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ul-invite-list__check-all[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-size: 12px;\n}\n.ul-invite-list__check-all[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n}\n.ul-invite-list__body[_ngcontent-%COMP%] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.ul-invite-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 1px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.ul-invite-list__item[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.ul-invite-list__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ul-invite-list__item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.ul-invite-list__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.ul-invite-list__name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ul-invite-list__email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ul-invite-list__role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  flex-shrink: 0;\n  background: #f3f4f6;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=user-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserListComponent, [{
    type: Component,
    args: [{ selector: "app-user-list", standalone: true, imports: [RouterLink, FormsModule, CommonModule, CustomPaginationComponent, UserAddComponent, AdminrhRoleComponent, HasPermissionDirective], template: `<!-- \u2500\u2500 SHELL \u2500\u2500 -->\r
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
  </div>\r
\r
  <!-- \u2500\u2500 TABS \u2500\u2500 -->\r
  <div class="ul-tabbar">\r
    <button type="button" class="ul-tab" [class.ul-tab--active]="activeTab === 'users'"\r
            (click)="setTab('users')">Utilisateurs</button>\r
    <button type="button" class="ul-tab" [class.ul-tab--active]="activeTab === 'roles'"\r
            (click)="setTab('roles')">R\xF4les & permissions</button>\r
    <button type="button" class="ul-tab" [class.ul-tab--active]="activeTab === 'matrix'"\r
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
      <div class="ul-filter-group" (click)="$event.stopPropagation()">\r
        <button type="button" class="ul-filter" [class.ul-filter--on]="!!selectedRoleFilter"\r
                (click)="showRoleDropdown = !showRoleDropdown">\r
          <i class="isax isax-filter"></i> R\xF4le\r
          <span *ngIf="selectedRoleFilter" class="ul-filter__chip">{{ selectedRoleFilter }}</span>\r
        </button>\r
        <div class="ul-dropdown" *ngIf="showRoleDropdown">\r
          <div class="ul-dropdown__item" (click)="setRoleFilter('')">Tous les r\xF4les</div>\r
          <div class="ul-dropdown__item"\r
               *ngFor="let r of availableRoles"\r
               [class.ul-dropdown__item--on]="selectedRoleFilter === r"\r
               (click)="setRoleFilter(r)">{{ r }}</div>\r
        </div>\r
      </div>\r
\r
      <!-- Filtre Statut -->\r
      <div class="ul-filter-group" (click)="$event.stopPropagation()">\r
        <button type="button" class="ul-filter" [class.ul-filter--on]="selectedStatutFilter !== ''"\r
                (click)="showStatutDropdown = !showStatutDropdown">\r
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
      <!-- Filtre Manager (N+1) -->\r
      <div class="ul-filter-group" (click)="$event.stopPropagation()">\r
        <button type="button" class="ul-filter" [class.ul-filter--on]="!!selectedManagerFilter"\r
                (click)="showManagerDropdown = !showManagerDropdown">\r
          <i class="isax isax-hierarchy"></i> Manager\r
          <span *ngIf="selectedManagerFilter" class="ul-filter__chip">{{ managerFilterLabel }}</span>\r
        </button>\r
        <div class="ul-dropdown" *ngIf="showManagerDropdown">\r
          <div class="ul-dropdown__item" (click)="setManagerFilter('')">Tous</div>\r
          <div class="ul-dropdown__item" [class.ul-dropdown__item--on]="selectedManagerFilter === 'none'"\r
               (click)="setManagerFilter('none')">Sans manager</div>\r
          <div class="ul-dropdown__item"\r
               *ngFor="let m of availableManagers"\r
               [class.ul-dropdown__item--on]="selectedManagerFilter === '' + m.id"\r
               (click)="setManagerFilter('' + m.id)">{{ m.label }}</div>\r
        </div>\r
      </div>\r
\r
      <button type="button" class="ul-invite-btn" (click)="openMassInviteDialog()">\r
        <i class="isax isax-sms"></i> Invitations\r
      </button>\r
      <button type="button" class="ul-import-btn" (click)="openImportDialog()">\r
        <i class="isax isax-import"></i> Importer\r
      </button>\r
      <button type="button" class="ul-tpl-btn" (click)="downloadTemplate()">\r
        <i class="isax isax-export"></i> Template\r
      </button>\r
      <button type="button" class="ul-export-btn" (click)="exportUsers()">\r
        <i class="isax isax-document-download"></i> Exporter\r
      </button>\r
\r
      <button *appHasPermission="'creer utilisateurs'" type="button" class="ul-add-btn" (click)="openNew()">\r
        <i class="isax isax-add"></i> Nouvel utilisateur\r
      </button>\r
    </div>\r
\r
    <!-- Erreur -->\r
    <div *ngIf="error" class="ul-alert">\r
      <i class="isax isax-warning-2"></i> {{ error }}\r
    </div>\r
\r
    <!-- Skeleton -->\r
    <div *ngIf="loading" class="ul-skeletons">\r
      <div *ngFor="let i of [1,2,3,4,5]" class="ul-skeleton-row"></div>\r
    </div>\r
\r
    <!-- Tableau -->\r
    <table class="ul-table" *ngIf="!loading">\r
      <thead>\r
        <tr>\r
          <th style="width:10%">Matricule</th>\r
          <th style="width:23%">Utilisateur</th>\r
          <th style="width:12%">Direction</th>\r
          <th style="width:12%">Manager</th>\r
          <th style="width:12%">R\xF4le</th>\r
          <th style="width:9%">Statut</th>\r
          <th style="width:9%">Derni\xE8re activit\xE9</th>\r
          <th style="width:13%">Actions</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let u of tableData; trackBy: trackById">\r
          <td>\r
            <span class="ul-meta ul-meta--mono">{{ u.matricule || '\u2014' }}</span>\r
          </td>\r
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
            <div class="ul-direction" *ngIf="u.direction_obj">\r
              <span class="ul-dir-path">\r
                <ng-container *ngIf="u.direction_obj?.parent?.parent">\r
                  <span class="ul-dir-root">{{ u.direction_obj?.parent?.parent?.nom }}</span>\r
                  <i class="isax isax-arrow-right-3 ul-dir-sep"></i>\r
                </ng-container>\r
                <ng-container *ngIf="u.direction_obj?.parent">\r
                  <span class="ul-dir-mid">{{ u.direction_obj?.parent?.nom }}</span>\r
                  <i class="isax isax-arrow-right-3 ul-dir-sep"></i>\r
                </ng-container>\r
                <span class="ul-dir-leaf">{{ u.direction_obj?.nom }}</span>\r
              </span>\r
            </div>\r
            <span class="ul-meta" *ngIf="!u.direction_obj">{{ u.direction || '\u2014' }}</span>\r
          </td>\r
          <td>\r
            <span class="ul-meta" *ngIf="u.manager; else sansManager">{{ getDisplayName($any(u.manager)) }}</span>\r
            <ng-template #sansManager><span class="ul-meta">\u2014</span></ng-template>\r
            <span class="ul-meta ul-n1-count" *ngIf="u.collaborateurs_count" title="Collaborateurs directs (N-1)">\r
              <i class="isax isax-hierarchy"></i>{{ u.collaborateurs_count }} N-1\r
            </span>\r
          </td>\r
          <td>\r
            <span class="ul-role-badge" [attr.data-role]="getRoleKey(getRoleName(u))">\r
              <i [class]="'isax ' + getRoleIcon(getRoleName(u))"></i>\r
              {{ getRoleName(u) }}\r
            </span>\r
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
              <button type="button" class="ul-act" title="Modifier" (click)="editUser(u)">\r
                <i class="isax isax-edit"></i>\r
              </button>\r
              <button type="button" class="ul-act ul-act--warn" *ngIf="u.statut === 1"\r
                      title="D\xE9sactiver" (click)="archiveUser(u)">\r
                <i class="isax isax-archive"></i>\r
              </button>\r
              <button type="button" class="ul-act ul-act--ok" *ngIf="u.statut === 0"\r
                      title="Activer" (click)="activateManual(u)">\r
                <i class="isax isax-tick-circle"></i>\r
              </button>\r
              <button type="button" class="ul-act ul-act--invite" *ngIf="u.statut === 0"\r
                      title="Envoyer l'invitation" (click)="sendInvitation(u)">\r
                <i class="isax isax-sms"></i>\r
              </button>\r
              <button type="button" class="ul-act ul-act--ok" *ngIf="isLocked(u)"\r
                      title="D\xE9bloquer le compte" (click)="unlockUser(u)">\r
                <i class="isax isax-unlock"></i>\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
        <tr *ngIf="!tableData.length">\r
          <td colspan="8" class="ul-empty">\r
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
        <button type="button" class="ul-pager__btn" [disabled]="currentPage === 1"\r
                (click)="onPageChange(currentPage - 1)">\r
          <i class="isax isax-arrow-left-2"></i>\r
        </button>\r
        <button type="button" *ngFor="let p of pageSelection; let i = index"\r
                class="ul-pager__btn"\r
                [class.ul-pager__btn--active]="currentPage === i + 1"\r
                (click)="onPageChange(i + 1)">{{ i + 1 }}</button>\r
        <button type="button" class="ul-pager__btn"\r
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
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="ul-role-embed" *ngIf="activeTab === 'roles'">\r
    <app-adminrh-role></app-adminrh-role>\r
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
        R\xF4les accessibles dans votre p\xE9rim\xE8tre, du plus habilit\xE9 au moins habilit\xE9.\r
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
            <span class="ul-hier-badge" [ngClass]="getHierBadgeClassMatrix(role)">{{ role.name }}</span>\r
            <i *ngIf="!last" class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
          </ng-container>\r
        </div>\r
      </div>\r
\r
      <div class="table-responsive">\r
      <table class="ul-matrix">\r
        <thead>\r
          <tr>\r
            <th style="min-width:200px">Permission</th>\r
            <th *ngFor="let role of matrixRoles" [title]="role.name">\r
              <span class="ul-mh-role" [ngClass]="getRoleColorClassMatrix(role)">{{ getRoleAbbrMatrix(role) }}</span>\r
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
            <strong>{{ getRoleAbbrMatrix(role) }}</strong> = {{ role.name }}{{ last ? '' : ' \xB7 ' }}\r
          </ng-container>\r
        </small>\r
      </div>\r
\r
    </ng-container>\r
\r
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
<div class="ul-import-overlay" *ngIf="showImportDialog" (click)="closeImportDialog()">\r
  <div class="ul-import-modal" (click)="$event.stopPropagation()">\r
    <div class="ul-import-modal__head">\r
      <div class="ul-import-modal__title">\r
        <i class="isax isax-import"></i> Importer des utilisateurs\r
      </div>\r
      <button type="button" class="ul-import-modal__close" (click)="closeImportDialog()">\r
        <i class="isax isax-close-circle"></i>\r
      </button>\r
    </div>\r
\r
    <div class="ul-import-modal__body">\r
\r
      <!-- \u2500\u2500 Zone de d\xE9p\xF4t (masqu\xE9e apr\xE8s r\xE9sultat) \u2500\u2500 -->\r
      <ng-container *ngIf="!importResult">\r
        <label class="ul-dropzone" for="rh-file-input" [class.ul-dropzone--active]="!!selectedFile">\r
          <i class="isax isax-document-upload ul-dropzone__icon"></i>\r
          <span class="ul-dropzone__label" *ngIf="!selectedFile">\r
            Cliquer ou glisser votre fichier ici\r
            <small>.xlsx \xB7 .xls \xB7 .csv</small>\r
          </span>\r
          <span class="ul-dropzone__label" *ngIf="selectedFile">\r
            <strong>{{ selectedFile.name }}</strong>\r
            <small>{{ (selectedFile.size / 1024).toFixed(0) }} Ko</small>\r
          </span>\r
          <input id="rh-file-input" type="file" accept=".xlsx,.xls,.csv"\r
                 (change)="onFileSelected($event)" [disabled]="isImporting" class="ul-file-hidden">\r
        </label>\r
\r
        <!-- Barre de progression -->\r
        <div class="ul-import-progress" *ngIf="isImporting">\r
          <div class="ul-import-progress__bar" [style.width.%]="importProgress"></div>\r
        </div>\r
\r
        <!-- Instructions -->\r
        <div class="ul-import-info">\r
          <i class="isax isax-info-circle"></i>\r
          <ul>\r
            <li>T\xE9l\xE9chargez d'abord le <strong>template</strong> pour voir la structure requise</li>\r
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
        <!-- Erreurs de structure (colonnes manquantes) -->\r
        <div class="ul-import-report ul-import-report--error" *ngIf="importResult.headerErrors.length">\r
          <div class="ul-import-report__title">\r
            <i class="isax isax-close-circle"></i> Structure du fichier invalide\r
          </div>\r
          <ul class="ul-import-report__list">\r
            <li *ngFor="let e of importResult.headerErrors">{{ e }}</li>\r
          </ul>\r
        </div>\r
\r
        <!-- R\xE9sum\xE9 succ\xE8s/erreurs lignes -->\r
        <ng-container *ngIf="!importResult.headerErrors.length">\r
          <div class="ul-import-report ul-import-report--success" *ngIf="importResult.totalCreated > 0">\r
            <i class="isax isax-tick-circle"></i>\r
            <strong>{{ importResult.totalCreated }}</strong> utilisateur(s) cr\xE9\xE9(s) sur {{ importResult.totalProcessed }} trait\xE9(s)\r
          </div>\r
\r
          <div class="ul-import-report ul-import-report--warn" *ngIf="importResult.totalCreated === 0 && importResult.totalErrors === 0">\r
            <i class="isax isax-info-circle"></i> Aucune ligne \xE0 traiter dans le fichier.\r
          </div>\r
\r
          <!-- D\xE9tail des erreurs par ligne -->\r
          <div class="ul-import-report ul-import-report--error" *ngIf="importResult.rowErrors.length">\r
            <div class="ul-import-report__title">\r
              <i class="isax isax-warning-2"></i>\r
              {{ importResult.rowErrors.length }} ligne(s) en erreur\r
            </div>\r
            <div class="ul-import-report__rows">\r
              <div class="ul-import-report__row" *ngFor="let e of importResult.rowErrors">\r
                <span class="ul-import-report__line">Ligne {{ e.line }}</span>\r
                <ul class="ul-import-report__list">\r
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
    <div class="ul-import-modal__foot">\r
      <button type="button" class="ul-import-modal__cancel" (click)="closeImportDialog()">\r
        {{ importResult ? 'Fermer' : 'Annuler' }}\r
      </button>\r
      <button *ngIf="!importResult" type="button" class="ul-import-modal__submit"\r
              (click)="importUsers()" [disabled]="!selectedFile || isImporting">\r
        <span *ngIf="isImporting" class="ul-spinner"></span>\r
        <i *ngIf="!isImporting" class="isax isax-import"></i>\r
        {{ isImporting ? 'Import en cours\u2026' : 'Importer' }}\r
      </button>\r
      <button *ngIf="importResult && !importResult.headerErrors.length" type="button"\r
              class="ul-import-modal__submit ul-import-modal__submit--retry"\r
              (click)="importResult = null; selectedFile = null">\r
        <i class="isax isax-refresh"></i> Nouvel import\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2500\u2500 MODAL INVITATION EN MASSE \u2500\u2500 -->\r
<div class="ul-import-overlay" *ngIf="showMassInviteDialog" (click)="closeMassInviteDialog()">\r
  <div class="ul-import-modal ul-import-modal--wide" (click)="$event.stopPropagation()">\r
    <div class="ul-import-modal__head">\r
      <div class="ul-import-modal__title">\r
        <i class="isax isax-sms"></i> Invitations en masse\r
      </div>\r
      <button type="button" class="ul-import-modal__close" (click)="closeMassInviteDialog()">\r
        <i class="isax isax-close-circle"></i>\r
      </button>\r
    </div>\r
\r
    <div class="ul-import-modal__body">\r
      <p class="mb-3 text-muted">\r
        Filtrez par direction et/ou r\xF4le, ou s\xE9lectionnez manuellement les comptes inactifs \xE0 inviter.\r
      </p>\r
\r
      <!-- Filtres -->\r
      <div class="row g-2 mb-3">\r
        <div class="col-md-6">\r
          <label class="form-label fw-semibold">Direction / D\xE9partement / \xC9quipe</label>\r
          <select class="form-select" [(ngModel)]="selectedMassDirection" [ngModelOptions]="{standalone: true}"\r
                  (ngModelChange)="filterInactiveUsers()">\r
            <option [ngValue]="null">\u2014 Toutes \u2014</option>\r
            <option *ngFor="let d of massInviteDirections" [ngValue]="d.id">{{ d.label }}</option>\r
          </select>\r
        </div>\r
        <div class="col-md-6">\r
          <label class="form-label fw-semibold">R\xF4le</label>\r
          <select class="form-select" [(ngModel)]="selectedMassRole" [ngModelOptions]="{standalone: true}"\r
                  (ngModelChange)="filterInactiveUsers()">\r
            <option [ngValue]="null">\u2014 Tous les r\xF4les \u2014</option>\r
            <option *ngFor="let r of massInviteRoles" [ngValue]="r.id">{{ r.name }}</option>\r
          </select>\r
        </div>\r
      </div>\r
\r
      <!-- Liste des utilisateurs inactifs -->\r
      <div class="ul-invite-list" *ngIf="filteredInactiveUsers.length">\r
        <div class="ul-invite-list__head">\r
          <label class="ul-invite-list__check-all">\r
            <input type="checkbox" [checked]="massInviteSelectAll" (change)="toggleSelectAllInactive()">\r
            <span class="ms-2 fw-semibold">Tout s\xE9lectionner</span>\r
          </label>\r
          <span class="text-muted small">{{ filteredInactiveUsers.length }} compte(s) inactif(s)</span>\r
        </div>\r
        <div class="ul-invite-list__body">\r
          <label class="ul-invite-list__item" *ngFor="let u of filteredInactiveUsers">\r
            <input type="checkbox" [checked]="selectedInactiveUserIds.includes(u.id!)"\r
                   (change)="toggleInactiveUser(u.id!)">\r
            <div class="ul-invite-list__info">\r
              <span class="ul-invite-list__name">{{ u.name || (u.prenom + ' ' + u.nom) }}</span>\r
              <span class="ul-invite-list__email">{{ u.email }}</span>\r
            </div>\r
            <span class="ul-invite-list__role">{{ u.role?.name || '\u2014' }}</span>\r
          </label>\r
        </div>\r
      </div>\r
\r
      <div *ngIf="!filteredInactiveUsers.length && !massInviteResult" class="text-center text-muted py-3">\r
        <i class="isax isax-info-circle d-block mb-1" style="font-size:1.5rem"></i>\r
        Aucun compte inactif trouv\xE9 avec ces crit\xE8res.\r
      </div>\r
\r
      <!-- R\xE9sultat -->\r
      <div *ngIf="massInviteResult" class="ul-import-report mt-3"\r
           [class.ul-import-report--success]="massInviteResult.success"\r
           [class.ul-import-report--error]="!massInviteResult.success">\r
        <i [class]="'isax ' + (massInviteResult.success ? 'isax-tick-circle' : 'isax-close-circle')"></i>\r
        {{ massInviteResult.message }}\r
      </div>\r
    </div>\r
\r
    <div class="ul-import-modal__foot">\r
      <button type="button" class="ul-import-modal__cancel" (click)="closeMassInviteDialog()">\r
        {{ massInviteResult ? 'Fermer' : 'Annuler' }}\r
      </button>\r
      <button *ngIf="!massInviteResult" type="button" class="ul-import-modal__submit"\r
              (click)="sendMassInvitation()"\r
              [disabled]="(!selectedMassDirection && !selectedMassRole && !selectedInactiveUserIds.length) || isSendingMassInvite">\r
        <span *ngIf="isSendingMassInvite" class="ul-spinner"></span>\r
        <i *ngIf="!isSendingMassInvite" class="isax isax-send-2"></i>\r
        {{ isSendingMassInvite ? 'Envoi en cours\u2026' : 'Envoyer les invitations' }}\r
        <span *ngIf="selectedInactiveUserIds.length" class="ms-1">({{ selectedInactiveUserIds.length }})</span>\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2500\u2500 USER ADD/EDIT \u2500\u2500 -->\r
<app-user-add\r
  [visible]="userDialog"\r
  [isEditMode]="isEditMode"\r
  [userData]="selectedUser"\r
  [utilisateurs]="tableDataCopy"\r
  (onClose)="hideDialog()"\r
  (onSave)="refreshData()">\r
</app-user-add>\r
`, styles: ['/* src/app/features/adminrh/user/user-list.component.scss */\n.ul-shell {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ul-topbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.ul-topbar__icon {\n  font-size: 16px;\n  color: #9ca3af;\n}\n.ul-topbar__title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n  flex: 1;\n}\n.ul-topbar__stats {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-tabbar {\n  display: flex;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-tab {\n  padding: 10px 18px;\n  font-size: 13px;\n  font-weight: 400;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ul-tab--active {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ul-tab:hover:not(.ul-tab--active) {\n  color: #111827;\n}\n.ul-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-search {\n  position: relative;\n  flex: 1;\n  min-width: 180px;\n  max-width: 240px;\n}\n.ul-search__icon {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ul-search__input {\n  width: 100%;\n  padding: 6px 10px 6px 32px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ul-search__input:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.ul-filter-group {\n  position: relative;\n}\n.ul-filter {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 11px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color 0.15s, background 0.15s;\n}\n.ul-filter:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ul-filter--on {\n  border-color: #185FA5;\n  color: #185FA5;\n  background: #e6f1fb;\n}\n.ul-filter__chip {\n  padding: 1px 6px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 10px;\n}\n.ul-filter i {\n  font-size: 13px;\n}\n.ul-invite-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #1e40af 0%,\n      #3b82f6 100%);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(30, 64, 175, 0.35);\n  transition: opacity 0.15s, transform 0.1s;\n}\n.ul-invite-btn:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.ul-invite-btn i {\n  font-size: 13px;\n}\n.ul-import-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517 0%,\n      #D4941E 100%);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(186, 117, 23, 0.35);\n  transition: opacity 0.15s, transform 0.1s;\n}\n.ul-import-btn:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.ul-import-btn:active {\n  transform: translateY(0);\n}\n.ul-import-btn i {\n  font-size: 13px;\n}\n.ul-tpl-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #006F78;\n  background: #E6F4F5;\n  border: 1.5px solid #9DD4D8;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s, transform 0.1s;\n}\n.ul-tpl-btn:hover {\n  background: rgb(215.4285714286, 237.5885714286, 239.1714285714);\n  transform: translateY(-1px);\n}\n.ul-tpl-btn:active {\n  transform: translateY(0);\n}\n.ul-tpl-btn i {\n  font-size: 13px;\n}\n.ul-export-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #006F78,\n      #00949F);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: 0 2px 6px rgba(0, 111, 120, 0.3);\n  transition: opacity 0.15s, transform 0.1s;\n}\n.ul-export-btn:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.ul-export-btn:active {\n  transform: translateY(0);\n}\n.ul-export-btn i {\n  font-size: 13px;\n}\n.ul-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #185FA5;\n  background: #e6f1fb;\n  border: 1px solid #185FA5;\n  border-radius: 8px;\n  cursor: pointer;\n  margin-left: auto;\n  transition: background 0.15s;\n}\n.ul-add-btn:hover {\n  background: rgb(208.0172413793, 228.6896551724, 247.4827586207);\n}\n.ul-add-btn i {\n  font-size: 13px;\n}\n.ul-import-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: ul-fade-in 0.15s ease;\n}\n@keyframes ul-fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.ul-import-modal {\n  background: #fff;\n  border-radius: 14px;\n  width: 460px;\n  max-width: calc(100vw - 32px);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  animation: ul-slide-up 0.18s ease;\n}\n@keyframes ul-slide-up {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.ul-import-modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517 0%,\n      #D4941E 100%);\n  color: #fff;\n}\n.ul-import-modal__title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.ul-import-modal__title i {\n  font-size: 16px;\n}\n.ul-import-modal__close {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n  font-size: 18px;\n  line-height: 1;\n  padding: 0;\n  transition: color 0.15s;\n}\n.ul-import-modal__close:hover {\n  color: #fff;\n}\n.ul-import-modal__body {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.ul-import-modal__foot {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.ul-import-modal__cancel {\n  padding: 7px 16px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #4b5563;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.ul-import-modal__cancel:hover {\n  background: #e5e7eb;\n}\n.ul-import-modal__cancel:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ul-import-modal__submit {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517 0%,\n      #D4941E 100%);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(186, 117, 23, 0.35);\n  transition: opacity 0.15s;\n}\n.ul-import-modal__submit:hover {\n  opacity: 0.88;\n}\n.ul-import-modal__submit:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ul-import-modal__submit i {\n  font-size: 14px;\n}\n.ul-dropzone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 16px;\n  border: 2px dashed #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n  text-align: center;\n}\n.ul-dropzone:hover,\n.ul-dropzone--active {\n  border-color: #BA7517;\n  background: #FAEEDA;\n}\n.ul-dropzone__icon {\n  font-size: 28px;\n  color: #BA7517;\n}\n.ul-dropzone__label {\n  font-size: 13px;\n  color: #4b5563;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ul-dropzone__label strong {\n  color: #111827;\n  font-size: 13px;\n}\n.ul-dropzone__label small {\n  color: #9ca3af;\n  font-size: 11px;\n}\n.ul-import-progress {\n  height: 6px;\n  background: #f3f4f6;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.ul-import-progress__bar {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #BA7517,\n      #E8B84B);\n  border-radius: 99px;\n  transition: width 0.3s ease;\n}\n.ul-import-info {\n  display: flex;\n  gap: 10px;\n  padding: 12px;\n  background: #FAEEDA;\n  border: 1px solid #E9C97E;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #8C5410;\n}\n.ul-import-info i {\n  font-size: 15px;\n  color: #BA7517;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.ul-import-info ul {\n  margin: 0;\n  padding-left: 16px;\n}\n.ul-import-info ul li + li {\n  margin-top: 3px;\n}\n.ul-import-info ul strong {\n  color: #6B3C10;\n}\n.ul-file-hidden {\n  display: none;\n}\n.ul-import-report {\n  border-radius: 8px;\n  padding: 12px 14px;\n  font-size: 12.5px;\n  margin-top: 10px;\n}\n.ul-import-report--success {\n  background: #EDFAF2;\n  border: 1px solid #6FCF97;\n  color: #1A5C35;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ul-import-report--success i {\n  color: #27AE60;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.ul-import-report--warn {\n  background: #FAFAEC;\n  border: 1px solid #D4C84A;\n  color: #6B5E10;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ul-import-report--warn i {\n  color: #B8A800;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.ul-import-report--error {\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n  color: #7F1D1D;\n}\n.ul-import-report__title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.ul-import-report__title i {\n  font-size: 15px;\n  color: #DC2626;\n}\n.ul-import-report__rows {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  padding-right: 4px;\n}\n.ul-import-report__row {\n  background: #fff;\n  border: 1px solid #FECACA;\n  border-radius: 6px;\n  padding: 8px 10px;\n}\n.ul-import-report__line {\n  display: inline-block;\n  background: #DC2626;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  border-radius: 4px;\n  padding: 1px 7px;\n  margin-bottom: 4px;\n}\n.ul-import-report__list {\n  margin: 4px 0 0 0;\n  padding-left: 16px;\n}\n.ul-import-report__list li {\n  margin-bottom: 2px;\n}\n.ul-import-modal__submit--retry {\n  background: #6B7280;\n}\n.ul-import-modal__submit--retry:hover {\n  background: #4B5563;\n}\n.ul-spinner {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: ul-spin 0.6s linear infinite;\n}\n@keyframes ul-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ul-dropdown {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  z-index: 200;\n  min-width: 160px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.ul-dropdown__item {\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.ul-dropdown__item:hover {\n  background: #f9fafb;\n}\n.ul-dropdown__item--on {\n  color: #185FA5;\n  font-weight: 500;\n  background: #e6f1fb;\n}\n.ul-alert {\n  margin: 10px 14px 0;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ul-skeletons {\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ul-skeleton-row {\n  height: 40px;\n  border-radius: 8px;\n  background: #f3f4f6;\n  animation: ul-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes ul-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ul-table {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.ul-table th {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-table td {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ul-table tr:last-child td {\n  border-bottom: none;\n}\n.ul-table tr:hover td {\n  background: #f9fafb;\n}\n.ul-empty {\n  text-align: center;\n  padding: 40px 14px !important;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ul-user {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ul-user__name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.ul-user__email {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ul-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.ul-avatar[data-role=superadmin] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-avatar[data-role=adminrh] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-avatar[data-role=formateur] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-avatar[data-role=employe] {\n  background: #faeeda;\n  color: #633806;\n}\n.ul-avatar[data-role=default] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-role-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ul-role-badge i {\n  font-size: 11px;\n}\n.ul-role-badge[data-role=superadmin] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-role-badge[data-role=adminrh] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-role-badge[data-role=formateur] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-role-badge[data-role=employe] {\n  background: #f1efe8;\n  color: #444441;\n}\n.ul-role-badge[data-role=default] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-cie {\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  padding: 2px 8px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.ul-cie-none {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-statut {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n}\n.ul-statut i {\n  font-size: 11px;\n}\n.ul-statut[data-s=actif] {\n  background: #eaf3de;\n  color: #3b6d11;\n}\n.ul-statut[data-s=inactif] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-statut[data-s=verrouille] {\n  background: #fff3cd;\n  color: #856404;\n}\n.ul-date {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-meta {\n  font-size: 12px;\n  color: #4b5563;\n}\n.ul-meta--mono {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n}\n.ul-n1-count {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 11px;\n  color: #4f46e5;\n  margin-top: 2px;\n}\n.ul-n1-count i {\n  font-size: 12px;\n}\n.ul-direction {\n  line-height: 1.3;\n}\n.ul-dir-path {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex-wrap: wrap;\n  font-size: 11px;\n}\n.ul-dir-root {\n  color: #4b5563;\n  font-weight: 500;\n}\n.ul-dir-mid {\n  color: #4b5563;\n}\n.ul-dir-leaf {\n  color: #111827;\n  font-weight: 600;\n}\n.ul-dir-sep {\n  font-size: 10px;\n  color: #9ca3af;\n}\n.ul-actions {\n  display: flex;\n  gap: 5px;\n}\n.ul-act {\n  padding: 4px 7px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.ul-act:hover {\n  background: #f3f4f6;\n}\n.ul-act--warn {\n  color: #92400e;\n  border-color: #fcd34d;\n}\n.ul-act--warn:hover {\n  background: #fffbeb;\n}\n.ul-act--ok {\n  color: #065f46;\n  border-color: #6ee7b7;\n}\n.ul-act--ok:hover {\n  background: #ecfdf5;\n}\n.ul-act--del {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ul-act--del:hover {\n  background: #fef2f2;\n}\n.ul-act--invite {\n  color: #1e40af;\n  border-color: #93c5fd;\n}\n.ul-act--invite:hover {\n  background: #eff6ff;\n}\n.ul-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ul-pager__info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-pager__btns {\n  display: flex;\n  gap: 4px;\n}\n.ul-pager__btn {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ul-pager__btn:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ul-pager__btn--active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ul-pager__btn:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ul-role-embed {\n  padding: 0;\n}\n.ul-role-embed ::ng-deep .page-content > .d-md-flex:first-child,\n.ul-role-embed ::ng-deep .page-content > .d-block:first-child,\n.ul-role-embed ::ng-deep .d-md-flex.align-items-center.justify-content-between.mb-4 {\n  display: none !important;\n}\n.ul-role-embed ::ng-deep .page-content {\n  padding: 0 !important;\n}\n.ul-matrix-wrap {\n  overflow-x: auto;\n  padding: 14px;\n}\n.ul-matrix__header {\n  margin-bottom: 16px;\n}\n.ul-matrix__title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.ul-matrix__subtitle {\n  margin: 0;\n}\n.ul-matrix__hierarchy {\n  overflow-x: auto;\n  padding: 8px 0;\n}\n.ul-hier-chain {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 4px;\n  width: max-content;\n}\n.ul-hier-badge {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.ul-hier-arrow {\n  color: #aaa;\n  font-size: 12px;\n}\n.ul-hier--rh {\n  background: #eef4ff;\n  color: #2563eb;\n  border: 1px solid #bfdbfe;\n}\n.ul-hier--mgr {\n  background: #fffbeb;\n  color: #d97706;\n  border: 1px solid #fde68a;\n}\n.ul-hier--form {\n  background: #f0fdfd;\n  color: #0891b2;\n  border: 1px solid #a5f3fc;\n}\n.ul-hier--emp {\n  background: #f9fafb;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n}\n.ul-mh-role {\n  display: inline-block;\n  padding: 3px 7px;\n  border-radius: 6px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n.ul-mh--rh {\n  background: #eef4ff;\n  color: #2563eb;\n}\n.ul-mh--mgr {\n  background: #fffbeb;\n  color: #d97706;\n}\n.ul-mh--form {\n  background: #f0fdfd;\n  color: #0891b2;\n}\n.ul-mh--emp {\n  background: #f9fafb;\n  color: #6b7280;\n}\n.ul-matrix {\n  border-collapse: collapse;\n  width: 100%;\n  font-size: 12px;\n}\n.ul-matrix th,\n.ul-matrix td {\n  padding: 7px 10px;\n  border: 1px solid #e5e7eb;\n  text-align: center;\n}\n.ul-matrix th:first-child,\n.ul-matrix td:first-child {\n  text-align: left;\n  font-weight: 500;\n  background: #f9fafb;\n}\n.ul-matrix thead th {\n  background: #f9fafb;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-matrix thead th:first-child {\n  text-align: left;\n}\n.ul-matrix__role-names td {\n  font-size: 10px;\n  font-weight: 600;\n  color: #4b5563;\n  background: #f8f9fc !important;\n  white-space: nowrap;\n  padding: 5px 8px !important;\n}\n.ul-matrix__group-label {\n  font-style: italic;\n  color: #9ca3af !important;\n  font-weight: 400 !important;\n}\n.ul-matrix__group {\n  font-size: 10px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: #f3f4f6 !important;\n  text-align: left !important;\n  padding-left: 12px !important;\n}\n.ul-matrix__legend {\n  display: flex;\n  gap: 16px;\n  font-size: 11px;\n  color: #9ca3af;\n  flex-wrap: wrap;\n}\n.ul-matrix__note {\n  font-size: 11px;\n}\n.ul-c-yes {\n  color: #3b6d11;\n  font-size: 15px;\n  font-weight: 700;\n}\n.ul-c-no {\n  color: #d3d1c7;\n  font-size: 15px;\n}\n.ul-c-partial {\n  color: #ba7517;\n  font-size: 15px;\n}\n.ul-import-modal--wide {\n  width: 600px;\n  max-width: calc(100vw - 32px);\n}\n.ul-invite-list {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.ul-invite-list__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ul-invite-list__check-all {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-size: 12px;\n}\n.ul-invite-list__check-all input[type=checkbox] {\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n}\n.ul-invite-list__body {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.ul-invite-list__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 1px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.ul-invite-list__item:hover {\n  background: #f9fafb;\n}\n.ul-invite-list__item:last-child {\n  border-bottom: none;\n}\n.ul-invite-list__item input[type=checkbox] {\n  width: 15px;\n  height: 15px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.ul-invite-list__info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.ul-invite-list__name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ul-invite-list__email {\n  font-size: 11px;\n  color: #9ca3af;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ul-invite-list__role {\n  font-size: 11px;\n  color: #4b5563;\n  flex-shrink: 0;\n  background: #f3f4f6;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=user-list.component.css.map */\n'] }]
  }], () => [{ type: UserService }, { type: DirectionService }, { type: PermissionService }, { type: RoleService }, { type: AuthService }, { type: ActivatedRoute }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListComponent, { className: "UserListComponent", filePath: "app/features/adminrh/user/user-list.component.ts", lineNumber: 26 });
})();
export {
  UserListComponent
};
//# sourceMappingURL=chunk-5O6CCDYW.js.map
