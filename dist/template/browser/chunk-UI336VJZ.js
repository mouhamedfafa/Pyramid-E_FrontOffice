import {
  UserService
} from "./chunk-R4IU522L.js";
import {
  FormationService
} from "./chunk-JOKQFHBP.js";
import {
  HasPermissionDirective
} from "./chunk-SR2JTDLL.js";
import "./chunk-KO4UL2MU.js";
import "./chunk-6DGDCR4J.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-DN5YN62E.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-GE23GOQB.js";
import {
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
  ɵɵpureFunction2,
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
} from "./chunk-F67U43FE.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-course-grid/instructor-course-grid.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0, a1) => ({ "bg-success": a0, "bg-primary": a1 });
function InstructorCourseGridComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "span", 6);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorCourseGridComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, "\n");
  }
}
function InstructorCourseGridComponent_div_2_div_75_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 77);
    \u0275\u0275element(2, "i", 78);
    \u0275\u0275text(3, " Certifiante ");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseGridComponent_div_2_div_75_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 79);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_div_75_ng_container_44_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const formation_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openParticipants(formation_r4));
    });
    \u0275\u0275element(2, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function InstructorCourseGridComponent_div_2_div_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "div", 46)(3, "a", 47);
    \u0275\u0275element(4, "img", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 49)(6, "span", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 51)(9, "span", 50);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 52)(12, "div", 53)(13, "span", 54);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h6", 55)(16, "a", 56);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p", 57);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 58)(21, "span", 59);
    \u0275\u0275element(22, "i", 60);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 59);
    \u0275\u0275element(25, "i", 61);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275element(28, "i", 62);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 63)(31, "div", 64);
    \u0275\u0275element(32, "i", 65);
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, InstructorCourseGridComponent_div_2_div_75_div_35_Template, 4, 0, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 66)(37, "div", 67)(38, "a", 68);
    \u0275\u0275element(39, "i", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 70);
    \u0275\u0275element(41, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 71);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_div_75_Template_button_click_42_listener() {
      const formation_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.togglePublishStatus(formation_r4));
    });
    \u0275\u0275element(43, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, InstructorCourseGridComponent_div_2_div_75_ng_container_44_Template, 3, 0, "ng-container", 73);
    \u0275\u0275elementStart(45, "button", 74);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_div_75_Template_button_click_45_listener() {
      const formation_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.archiveFormation(formation_r4));
    });
    \u0275\u0275element(46, "i", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 76);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const formation_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "/courses/course-details/" + formation_r4.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getFormationImage(formation_r4), \u0275\u0275sanitizeUrl)("alt", formation_r4.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getStatusClass(formation_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusText(formation_r4), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(26, _c1, ctx_r0.isFormationGratuite(formation_r4), !ctx_r0.isFormationGratuite(formation_r4)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatPrix(formation_r4.prix), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", (formation_r4.categorie == null ? null : formation_r4.categorie.couleur) || "#6c757d");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (formation_r4.categorie == null ? null : formation_r4.categorie.nom) || "Non d\xE9finie", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "/courses/course-details/" + formation_r4.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", formation_r4.titre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", formation_r4.short_description || formation_r4.description, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", formation_r4.nombre_modules || 0, " modules ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", formation_r4.duree_totale || 0, "h ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", formation_r4.niveau_display || formation_r4.niveau, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", formation_r4.nb_participants || 0, "/", formation_r4.nb_max_participants || 0, " participants");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r4.est_certifiante);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "/courses/course-details/" + formation_r4.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "/courses/instructor-course-edit/" + formation_r4.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", formation_r4.est_publie === true || formation_r4.est_publie === 1 ? "btn-outline-danger" : "btn-outline-success")("title", formation_r4.est_publie === true || formation_r4.est_publie === 1 ? "D\xE9publier" : "Publier");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", formation_r4.est_publie === true || formation_r4.est_publie === 1 ? "isax-eye-slash" : "isax-tick-circle");
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "assigner formations");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", formation_r4.type_display || formation_r4.type, " ");
  }
}
function InstructorCourseGridComponent_div_2_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275element(1, "i", 82);
    \u0275\u0275elementStart(2, "h5", 83);
    \u0275\u0275text(3, "Aucune formation trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 83);
    \u0275\u0275text(5, "Commencez par cr\xE9er votre premi\xE8re formation.");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseGridComponent_div_2_div_77_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_div_77_button_6_Template_button_click_0_listener() {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onPageChange(p_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r8 === ctx_r0.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r8);
  }
}
function InstructorCourseGridComponent_div_2_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "span", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 86)(4, "button", 87);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_div_77_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPageChange(ctx_r0.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, InstructorCourseGridComponent_div_2_div_77_button_6_Template, 2, 3, "button", 89);
    \u0275\u0275elementStart(7, "button", 87);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_div_77_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPageChange(ctx_r0.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 90);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.totalData, " formation", ctx_r0.totalData > 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage * ctx_r0.pageSize >= ctx_r0.totalData);
  }
}
function InstructorCourseGridComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 8)(2, "div", 9)(3, "div", 10);
    \u0275\u0275element(4, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275text(9, "Publi\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 9)(11, "div", 14);
    \u0275\u0275element(12, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "div", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 13);
    \u0275\u0275text(17, "En attente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 9)(19, "div", 16);
    \u0275\u0275element(20, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "div", 12);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 13);
    \u0275\u0275text(25, "Brouillons");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 9)(27, "div", 18);
    \u0275\u0275element(28, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "div", 12);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 13);
    \u0275\u0275text(33, "Gratuites");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 9)(35, "div", 20);
    \u0275\u0275element(36, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div")(38, "div", 12);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 13);
    \u0275\u0275text(41, "Payantes");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 22)(43, "h5", 23);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 24)(46, "a", 25);
    \u0275\u0275element(47, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "a", 27);
    \u0275\u0275element(49, "i", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 29)(51, "div", 30)(52, "div", 31)(53, "div", 32)(54, "a", 33);
    \u0275\u0275text(55, " Statut ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "ul", 34)(57, "li")(58, "a", 35);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_Template_a_click_58_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterByStatus("all"));
    });
    \u0275\u0275text(59, "Toutes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "li")(61, "a", 35);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_Template_a_click_61_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterByStatus("active"));
    });
    \u0275\u0275text(62, "Publi\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "li")(64, "a", 35);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_Template_a_click_64_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterByStatus("pending"));
    });
    \u0275\u0275text(65, "En attente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "li")(67, "a", 35);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_Template_a_click_67_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterByStatus("draft"));
    });
    \u0275\u0275text(68, "Brouillons");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(69, "div", 36)(70, "div", 37)(71, "span", 38);
    \u0275\u0275element(72, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseGridComponent_div_2_Template_input_ngModelChange_73_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchDataValue, $event) || (ctx_r0.searchDataValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function InstructorCourseGridComponent_div_2_Template_input_ngModelChange_73_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.searchData(ctx_r0.searchDataValue));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(74, "div", 29);
    \u0275\u0275template(75, InstructorCourseGridComponent_div_2_div_75_Template, 49, 29, "div", 41)(76, InstructorCourseGridComponent_div_2_div_76_Template, 6, 0, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275template(77, InstructorCourseGridComponent_div_2_div_77_Template, 9, 5, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getActiveFormationsCount());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.getPendingFormationsCount());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.getDraftFormationsCount());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.getFreeFormationsCount());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.getPaidFormationsCount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Mes Formations (", ctx_r0.totalData, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorCourse);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorCourseGrid);
    \u0275\u0275advance(25);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchDataValue);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(14, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.tableData)("ngForTrackBy", ctx_r0.trackByFormation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tableData.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.totalData > ctx_r0.pageSize);
  }
}
function InstructorCourseGridComponent_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.inscriptionSuccess, " ");
  }
}
function InstructorCourseGridComponent_div_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275element(1, "i", 120);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.inscriptionError, " ");
  }
}
function InstructorCourseGridComponent_div_3_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275element(1, "span", 122);
    \u0275\u0275text(2, " Chargement... ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseGridComponent_div_3_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucun participant");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseGridComponent_div_3_div_25_div_1_ng_container_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 134);
  }
}
function InstructorCourseGridComponent_div_3_div_25_div_1_ng_container_8_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 135);
  }
}
function InstructorCourseGridComponent_div_3_div_25_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 131);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_3_div_25_div_1_ng_container_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const p_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.desinscrireUser(p_r11));
    });
    \u0275\u0275template(2, InstructorCourseGridComponent_div_3_div_25_div_1_ng_container_8_span_2_Template, 1, 0, "span", 132)(3, InstructorCourseGridComponent_div_3_div_25_div_1_ng_container_8_i_3_Template, 1, 0, "i", 133);
    \u0275\u0275text(4, " Retirer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.inscriptionPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.inscriptionPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.inscriptionPending);
  }
}
function InstructorCourseGridComponent_div_3_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 127);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 128)(4, "div", 129);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 130);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, InstructorCourseGridComponent_div_3_div_25_div_1_ng_container_8_Template, 5, 3, "ng-container", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((p_r11.prenom || p_r11.nom || p_r11.name || p_r11.email || "?").charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r11.prenom && p_r11.nom ? p_r11.prenom + " " + p_r11.nom : p_r11.name || p_r11.nom || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.email);
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "desassigner formations");
  }
}
function InstructorCourseGridComponent_div_3_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124);
    \u0275\u0275template(1, InstructorCourseGridComponent_div_3_div_25_div_1_Template, 9, 4, "div", 125);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.participantsFiltered)("ngForTrackBy", ctx_r0.trackByUserId);
  }
}
function InstructorCourseGridComponent_div_3_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275element(1, "span", 122);
    \u0275\u0275text(2, " Chargement... ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseGridComponent_div_3_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275element(1, "i", 114);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Tous les employ\xE9s sont d\xE9j\xE0 inscrits");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseGridComponent_div_3_div_37_div_1_ng_container_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 134);
  }
}
function InstructorCourseGridComponent_div_3_div_37_div_1_ng_container_8_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 114);
  }
}
function InstructorCourseGridComponent_div_3_div_37_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 137);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_3_div_37_div_1_ng_container_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const u_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.inscrireUser(u_r13));
    });
    \u0275\u0275template(2, InstructorCourseGridComponent_div_3_div_37_div_1_ng_container_8_span_2_Template, 1, 0, "span", 132)(3, InstructorCourseGridComponent_div_3_div_37_div_1_ng_container_8_i_3_Template, 1, 0, "i", 138);
    \u0275\u0275text(4, " Inscrire ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.inscriptionPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.inscriptionPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.inscriptionPending);
  }
}
function InstructorCourseGridComponent_div_3_div_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 136);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 128)(4, "div", 129);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 130);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, InstructorCourseGridComponent_div_3_div_37_div_1_ng_container_8_Template, 5, 3, "ng-container", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((u_r13.prenom || u_r13.nom || u_r13.name || u_r13.email || "?").charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r13.prenom && u_r13.nom ? u_r13.prenom + " " + u_r13.nom : u_r13.name || u_r13.nom || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r13.email);
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "assigner formations");
  }
}
function InstructorCourseGridComponent_div_3_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124);
    \u0275\u0275template(1, InstructorCourseGridComponent_div_3_div_37_div_1_Template, 9, 4, "div", 125);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.availableUsersFiltered)("ngForTrackBy", ctx_r0.trackByUserId);
  }
}
function InstructorCourseGridComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeParticipants());
    });
    \u0275\u0275elementStart(1, "div", 93);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_3_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 94)(3, "div", 95);
    \u0275\u0275element(4, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 96)(6, "div", 97);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 98);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 99);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeParticipants());
    });
    \u0275\u0275element(11, "i", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, InstructorCourseGridComponent_div_3_div_12_Template, 3, 1, "div", 101)(13, InstructorCourseGridComponent_div_3_div_13_Template, 3, 1, "div", 102);
    \u0275\u0275elementStart(14, "div", 103)(15, "div", 104)(16, "div", 105)(17, "span", 106);
    \u0275\u0275element(18, "i", 11);
    \u0275\u0275text(19, " Inscrits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 107);
    \u0275\u0275element(21, "i", 108);
    \u0275\u0275elementStart(22, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseGridComponent_div_3_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.participantsSearch, $event) || (ctx_r0.participantsSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, InstructorCourseGridComponent_div_3_div_23_Template, 3, 0, "div", 110)(24, InstructorCourseGridComponent_div_3_div_24_Template, 4, 0, "div", 111)(25, InstructorCourseGridComponent_div_3_div_25_Template, 2, 2, "div", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "div", 113);
    \u0275\u0275elementStart(27, "div", 104)(28, "div", 105)(29, "span", 106);
    \u0275\u0275element(30, "i", 114);
    \u0275\u0275text(31, " Inscrire un employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 107);
    \u0275\u0275element(33, "i", 108);
    \u0275\u0275elementStart(34, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseGridComponent_div_3_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.usersSearch, $event) || (ctx_r0.usersSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function InstructorCourseGridComponent_div_3_Template_input_ngModelChange_34_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyUsersFilter());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, InstructorCourseGridComponent_div_3_div_35_Template, 3, 0, "div", 110)(36, InstructorCourseGridComponent_div_3_div_36_Template, 4, 0, "div", 111)(37, InstructorCourseGridComponent_div_3_div_37_Template, 2, 2, "div", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 115)(39, "span", 116);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 117);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_3_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeParticipants());
    });
    \u0275\u0275text(42, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.selectedFormation == null ? null : ctx_r0.selectedFormation.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.participants.length, " participant(s) inscrit(s)");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.inscriptionSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.inscriptionError);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.participantsSearch);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(16, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.participantsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.participantsLoading && !ctx_r0.participantsFiltered.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.participantsLoading && ctx_r0.participantsFiltered.length);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.usersSearch);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(17, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.usersLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.usersLoading && !ctx_r0.availableUsersFiltered.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.usersLoading && ctx_r0.availableUsersFiltered.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.participants.length, " inscrit(s) \xB7 ", ctx_r0.availableUsers.length, " disponible(s)");
  }
}
var InstructorCourseGridComponent = class _InstructorCourseGridComponent {
  formationService;
  userService;
  routes = routes;
  loading = false;
  error = "";
  allFormations = [];
  tableData = [];
  totalData = 0;
  currentPage = 1;
  pageSize = 12;
  searchDataValue = "";
  statusFilter = "all";
  _filtered = [];
  selectedFormation = null;
  // ── Modal participants ────────────────────────────────────────
  participantsModalOpen = false;
  participants = [];
  participantsLoading = false;
  participantsSearch = "";
  availableUsers = [];
  availableUsersFiltered = [];
  usersSearch = "";
  usersLoading = false;
  inscriptionPending = false;
  inscriptionSuccess = "";
  inscriptionError = "";
  constructor(formationService, userService) {
    this.formationService = formationService;
    this.userService = userService;
  }
  ngOnInit() {
    this.loadFormations();
  }
  loadFormations() {
    this.loading = true;
    this.error = "";
    this.formationService.getFormationsformateur().subscribe({
      next: (response) => {
        this.allFormations = response.formations || [];
        this.loading = false;
        this.applyFilters();
      },
      error: () => {
        this.error = "Erreur lors du chargement des formations";
        this.loading = false;
      }
    });
  }
  applyFilters() {
    let filtered = [...this.allFormations];
    if (this.searchDataValue.trim()) {
      const q = this.searchDataValue.toLowerCase();
      filtered = filtered.filter((f) => f.titre?.toLowerCase().includes(q) || f.description?.toLowerCase().includes(q));
    }
    if (this.statusFilter !== "all") {
      filtered = filtered.filter((f) => {
        const published = f.est_publie === true || f.est_publie === 1;
        if (this.statusFilter === "active")
          return published;
        if (this.statusFilter === "draft")
          return !published;
        if (this.statusFilter === "pending")
          return f.statut === "pending" || f.statut === "en_attente";
        return true;
      });
    }
    this.totalData = filtered.length;
    this.currentPage = 1;
    this._filtered = filtered;
    this.tableData = filtered.slice(0, this.pageSize);
  }
  searchData(value) {
    this.searchDataValue = value;
    this.applyFilters();
  }
  filterByStatus(status) {
    this.statusFilter = status;
    this.applyFilters();
  }
  onPageChange(page) {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    this.tableData = this._filtered.slice(start, start + this.pageSize);
  }
  getPageNumbers() {
    const pages = [];
    const totalPages = Math.ceil(this.totalData / this.pageSize);
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++)
      pages.push(i);
    return pages;
  }
  // ── KPI ──────────────────────────────────────
  getActiveFormationsCount() {
    return this.allFormations.filter((f) => f.est_publie === true || f.est_publie === 1).length;
  }
  getPendingFormationsCount() {
    return this.allFormations.filter((f) => f.statut === "pending" || f.statut === "en_attente").length;
  }
  getDraftFormationsCount() {
    return this.allFormations.filter((f) => !f.est_publie || f.est_publie === 0).length;
  }
  getFreeFormationsCount() {
    return this.allFormations.filter((f) => !f.prix || parseFloat(f.prix) === 0).length;
  }
  getPaidFormationsCount() {
    return this.allFormations.filter((f) => f.prix && parseFloat(f.prix) > 0).length;
  }
  // ── Helpers ───────────────────────────────────
  isFormationGratuite(f) {
    return !f.prix || parseFloat(f.prix) === 0;
  }
  formatPrix(prix) {
    return !prix || parseFloat(prix) === 0 ? "Gratuit" : `${Math.round(parseFloat(prix))} XOF`;
  }
  getFormationImage(f) {
    return this.formationService.getImageUrl(f.image_couverture || f.image_url || f.image || f.photo);
  }
  getStatusClass(f) {
    return f.est_publie === true || f.est_publie === 1 ? "bg-success" : "bg-secondary";
  }
  getStatusText(f) {
    return f.est_publie === true || f.est_publie === 1 ? "Publi\xE9" : "Brouillon";
  }
  trackByFormation(_, f) {
    return f.id || _;
  }
  togglePublishStatus(formation) {
    const isPublished = formation.est_publie === true || formation.est_publie === 1;
    const action = isPublished ? this.formationService.unpublishFormation(formation.id) : this.formationService.publishFormation(formation.id);
    action.subscribe({
      next: () => {
        formation.est_publie = !isPublished;
      }
    });
  }
  archiveFormation(formation) {
    if (!confirm(`Archiver la formation "${formation.titre}" ?`))
      return;
    this.formationService.deleteFormation(formation.id).subscribe({
      next: () => this.loadFormations()
    });
  }
  // ── PARTICIPANTS ──────────────────────────────────────────────
  openParticipants(f) {
    this.selectedFormation = f;
    this.participants = [];
    this.availableUsers = [];
    this.availableUsersFiltered = [];
    this.participantsSearch = "";
    this.usersSearch = "";
    this.inscriptionSuccess = "";
    this.inscriptionError = "";
    this.participantsModalOpen = true;
    this.loadParticipants(f.id);
  }
  closeParticipants() {
    this.participantsModalOpen = false;
    this.selectedFormation = null;
  }
  loadParticipants(formationId) {
    this.participantsLoading = true;
    this.formationService.getParticipantsFormation(formationId).subscribe({
      next: (res) => {
        this.participants = res.participants || [];
        this.participantsLoading = false;
        this.loadAvailableUsers();
      },
      error: () => {
        this.participantsLoading = false;
      }
    });
  }
  loadAvailableUsers() {
    this.usersLoading = true;
    this.userService.getMyUsers().subscribe({
      next: (res) => {
        const enrolled = new Set(this.participants.map((p) => p.id));
        const all = res.users || res.data || [];
        this.availableUsers = all.filter((u) => !enrolled.has(u.id));
        this.applyUsersFilter();
        this.usersLoading = false;
      },
      error: () => {
        this.usersLoading = false;
      }
    });
  }
  applyUsersFilter() {
    const q = this.usersSearch.toLowerCase();
    this.availableUsersFiltered = this.availableUsers.filter((u) => !q || u.name?.toLowerCase().includes(q) || u.nom?.toLowerCase().includes(q) || u.prenom?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q));
  }
  get participantsFiltered() {
    const q = this.participantsSearch.toLowerCase();
    return this.participants.filter((p) => !q || p.name?.toLowerCase().includes(q) || p.nom?.toLowerCase().includes(q) || p.prenom?.toLowerCase().includes(q) || p.email?.toLowerCase().includes(q));
  }
  inscrireUser(user) {
    if (!this.selectedFormation || this.inscriptionPending)
      return;
    this.inscriptionPending = true;
    this.inscriptionSuccess = "";
    this.inscriptionError = "";
    this.formationService.inscriptionDirecte({
      formation_id: this.selectedFormation.id,
      user_id: user.id
    }).subscribe({
      next: () => {
        this.inscriptionPending = false;
        const displayName = user.prenom && user.nom ? `${user.prenom} ${user.nom}` : user.name || user.email;
        this.inscriptionSuccess = `${displayName} a \xE9t\xE9 inscrit(e) avec succ\xE8s.`;
        this.participants.push(user);
        this.availableUsers = this.availableUsers.filter((u) => u.id !== user.id);
        this.applyUsersFilter();
      },
      error: (err) => {
        this.inscriptionPending = false;
        this.inscriptionError = err?.error?.message || "Erreur lors de l'inscription.";
      }
    });
  }
  desinscrireUser(user) {
    if (!this.selectedFormation || this.inscriptionPending)
      return;
    this.inscriptionPending = true;
    this.inscriptionSuccess = "";
    this.inscriptionError = "";
    this.formationService.desinscriptionDirecte({
      formation_id: this.selectedFormation.id,
      user_id: user.id
    }).subscribe({
      next: () => {
        this.inscriptionPending = false;
        const displayName = user.prenom && user.nom ? `${user.prenom} ${user.nom}` : user.name || user.email;
        this.inscriptionSuccess = `${displayName} a \xE9t\xE9 d\xE9sinscrit(e).`;
        this.participants = this.participants.filter((p) => p.id !== user.id);
        this.availableUsers.push(user);
        this.applyUsersFilter();
      },
      error: (err) => {
        this.inscriptionPending = false;
        this.inscriptionError = err?.error?.message || "Erreur lors de la d\xE9sinscription.";
      }
    });
  }
  trackByUserId(_i, u) {
    return u.id;
  }
  static \u0275fac = function InstructorCourseGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorCourseGridComponent)(\u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(UserService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorCourseGridComponent, selectors: [["app-instructor-course-grid"]], decls: 4, vars: 4, consts: [["class", "d-flex justify-content-center py-5", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [4, "ngIf"], ["class", "pm-overlay", 3, "click", 4, "ngIf"], [1, "d-flex", "justify-content-center", "py-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["role", "alert", 1, "alert", "alert-danger"], [1, "icg-kpi-row"], [1, "icg-kpi"], [1, "icg-kpi__icon", "ki-green"], [1, "isax", "isax-tick-circle"], [1, "icg-kpi__val"], [1, "icg-kpi__lbl"], [1, "icg-kpi__icon", "ki-amber"], [1, "isax", "isax-clock"], [1, "icg-kpi__icon", "ki-blue"], [1, "isax", "isax-edit-2"], [1, "icg-kpi__icon", "ki-teal"], [1, "isax", "isax-tag"], [1, "icg-kpi__icon", "ki-purple"], [1, "isax", "isax-dollar-circle"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold"], [1, "d-flex", "align-items-center", "list-icons"], [1, "me-2", 3, "routerLink"], [1, "isax", "isax-task"], [1, "active", 3, "routerLink"], [1, "isax", "isax-element-3"], [1, "row"], [1, "col-md-8"], [1, "mb-3"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "text-gray-6", "btn", "rounded", "border", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1", 3, "click"], [1, "col-md-4"], [1, "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-14"], ["type", "search", "placeholder", "Rechercher une formation...", 1, "form-control", "form-control-md", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "col-xl-4 col-lg-6 col-md-6", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "col-12 text-center py-5", 4, "ngIf"], ["class", "icg-pagination", 4, "ngIf"], [1, "col-xl-4", "col-lg-6", "col-md-6"], [1, "card", "border-0", "shadow-sm", "mb-4"], [1, "position-relative"], ["target", "_blank", 3, "href"], ["onerror", "this.src='assets/img/course/course-01.jpg'", 1, "card-img-top", 2, "height", "200px", "object-fit", "cover", 3, "src", "alt"], [1, "position-absolute", "top-0", "end-0", "m-2"], [1, "badge", 3, "ngClass"], [1, "position-absolute", "bottom-0", "start-0", "m-2"], [1, "card-body"], [1, "mb-2"], [1, "badge", "rounded-pill", 2, "color", "white", "font-size", "11px"], [1, "fw-bold", "mb-2"], ["target", "_blank", 1, "text-decoration-none", "text-dark", 3, "href"], [1, "text-muted", "small", "mb-3", 2, "height", "40px", "overflow", "hidden"], [1, "d-flex", "align-items-center", "mb-3", "small", "text-muted"], [1, "me-3"], [1, "isax", "isax-video-circle", "me-1"], [1, "isax", "isax-clock", "me-1"], [1, "isax", "isax-flag", "me-1"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-flex", "align-items-center", "small", "text-muted"], [1, "isax", "isax-people", "me-1"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], ["target", "_blank", "title", "Voir les d\xE9tails", 1, "btn", "btn-sm", "btn-outline-primary", "me-2", 3, "href"], [1, "isax", "isax-eye"], ["target", "_blank", "title", "Modifier", 1, "btn", "btn-sm", "btn-outline-secondary", "me-2", 3, "href"], [1, "btn", "btn-sm", "me-2", 3, "click", "ngClass", "title"], [1, "isax", 3, "ngClass"], [4, "appHasPermission"], ["title", "Archiver", 1, "btn", "btn-sm", "btn-outline-warning", 3, "click"], [1, "isax", "isax-archive"], [1, "small", "text-muted"], [1, "badge", "bg-warning"], [1, "isax", "isax-award", "me-1"], ["title", "Participants", 1, "btn", "btn-sm", "btn-outline-info", "me-2", 3, "click"], [1, "isax", "isax-people"], [1, "col-12", "text-center", "py-5"], [1, "isax", "isax-book-1", "fs-48", "text-muted", "mb-3"], [1, "text-muted"], [1, "icg-pagination"], [1, "pg-info"], [1, "pg-controls"], ["type", "button", 1, "pg-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["type", "button", "class", "pg-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-2"], ["type", "button", 1, "pg-btn", 3, "click"], [1, "pm-overlay", 3, "click"], [1, "pm-modal", 3, "click"], [1, "pm-head"], [1, "pm-head__icon"], [1, "pm-head__text"], [1, "pm-head__title"], [1, "pm-head__sub"], ["type", "button", 1, "pm-close", 3, "click"], [1, "isax", "isax-close-circle"], ["class", "pm-alert pm-alert--ok", 4, "ngIf"], ["class", "pm-alert pm-alert--err", 4, "ngIf"], [1, "pm-body"], [1, "pm-col"], [1, "pm-col__header"], [1, "pm-col__title"], [1, "pm-search"], [1, "isax", "isax-search-normal-1"], ["type", "search", "placeholder", "Rechercher...", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "pm-loading", 4, "ngIf"], ["class", "pm-empty", 4, "ngIf"], ["class", "pm-list", 4, "ngIf"], [1, "pm-divider"], [1, "isax", "isax-user-add"], [1, "pm-foot"], [1, "pm-foot__info"], ["type", "button", 1, "pm-close-btn", 3, "click"], [1, "pm-alert", "pm-alert--ok"], [1, "pm-alert", "pm-alert--err"], [1, "isax", "isax-warning-2"], [1, "pm-loading"], [1, "pm-spin"], [1, "pm-empty"], [1, "pm-list"], ["class", "pm-user-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "pm-user-row"], [1, "pm-user-av"], [1, "pm-user-info"], [1, "pm-user-name"], [1, "pm-user-email"], ["type", "button", 1, "pm-unenroll-btn", 3, "click", "disabled"], ["class", "pm-spin pm-spin--sm", 4, "ngIf"], ["class", "isax isax-user-remove", 4, "ngIf"], [1, "pm-spin", "pm-spin--sm"], [1, "isax", "isax-user-remove"], [1, "pm-user-av", "pm-user-av--blue"], ["type", "button", 1, "pm-enroll-btn", 3, "click", "disabled"], ["class", "isax isax-user-add", 4, "ngIf"]], template: function InstructorCourseGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InstructorCourseGridComponent_div_0_Template, 4, 0, "div", 0)(1, InstructorCourseGridComponent_div_1_Template, 2, 1, "div", 1)(2, InstructorCourseGridComponent_div_2_Template, 78, 15, "div", 2)(3, InstructorCourseGridComponent_div_3_Template, 43, 18, "div", 3);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.participantsModalOpen);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, HasPermissionDirective], styles: ["\n\n.icg-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n@media (max-width: 1100px) {\n  .icg-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .icg-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.icg-kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.icg-kpi__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.icg-kpi__val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1A1A2E;\n  line-height: 1;\n}\n.icg-kpi__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 3px;\n}\n.ki-green[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ki-amber[_ngcontent-%COMP%] {\n  background: #FFFBEB;\n  color: #D97706;\n}\n.ki-blue[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.ki-teal[_ngcontent-%COMP%] {\n  background: #F0FDFA;\n  color: #0D9488;\n}\n.ki-purple[_ngcontent-%COMP%] {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.icg-card-img[_ngcontent-%COMP%] {\n  height: 200px;\n  object-fit: cover;\n}\n.icg-categorie-badge[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 11px;\n}\n.icg-desc[_ngcontent-%COMP%] {\n  height: 40px;\n  overflow: hidden;\n}\n.icg-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 4px;\n  margin-top: 8px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pg-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n}\n.pg-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pg-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 0.12s;\n  padding: 0 8px;\n}\n.pg-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #534AB7;\n  color: #534AB7;\n  background: #EEF2FF;\n}\n.pg-btn.active[_ngcontent-%COMP%] {\n  background: #534AB7;\n  border-color: #534AB7;\n  color: #fff;\n}\n.pg-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n  padding: 16px;\n}\n.pm-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 820px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n}\n.pm-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.pm-head__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #DBEAFE;\n  color: #2563EB;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.pm-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pm-head__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-head__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.pm-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #6C757D;\n  cursor: pointer;\n  padding: 4px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.pm-close[_ngcontent-%COMP%]:hover {\n  color: #111827;\n}\n.pm-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 20px;\n  font-size: 13px;\n}\n.pm-alert--ok[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #166534;\n  border-bottom: 1px solid #4ADE80;\n}\n.pm-alert--err[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #991B1B;\n  border-bottom: 1px solid #F87171;\n}\n.pm-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .pm-body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.pm-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  background: #E9ECEF;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .pm-divider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 1px;\n  }\n}\n.pm-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 0;\n}\n.pm-col__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #F3F4F6;\n  flex-wrap: wrap;\n}\n.pm-col__title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.pm-col__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.pm-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 120px;\n  max-width: 180px;\n}\n.pm-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 13px;\n  color: #6C757D;\n  pointer-events: none;\n}\n.pm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 8px 5px 26px;\n  font-size: 12px;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #F9FAFB;\n  outline: none;\n}\n.pm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #2563EB;\n  background: #fff;\n}\n.pm-list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  flex: 1;\n  padding: 6px 0;\n}\n.pm-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 28px 16px;\n  font-size: 13px;\n  color: #6C757D;\n}\n.pm-spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid #E9ECEF;\n  border-top-color: #2563EB;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pm-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.pm-spin--sm[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 11px;\n}\n@keyframes _ngcontent-%COMP%_pm-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pm-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: #6C757D;\n}\n.pm-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.pm-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n}\n.pm-user-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 16px;\n  transition: background 0.1s;\n}\n.pm-user-row[_ngcontent-%COMP%]:hover {\n  background: #F9FAFB;\n}\n.pm-user-av[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #F3F4F6;\n  color: #4b5563;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.pm-user-av--blue[_ngcontent-%COMP%] {\n  background: #DBEAFE;\n  color: #2563EB;\n}\n.pm-user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pm-user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-user-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-enroll-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 500;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.pm-enroll-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.pm-enroll-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #DCFCE7;\n  color: #166534;\n  border-color: #86EFAC;\n}\n.pm-enroll-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-unenroll-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 500;\n  border: 1px solid #FECACA;\n  border-radius: 6px;\n  background: #FFF5F5;\n  color: #991B1B;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.pm-unenroll-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.pm-unenroll-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #FEE2E2;\n  color: #7F1D1D;\n  border-color: #FCA5A5;\n}\n.pm-unenroll-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #E9ECEF;\n  background: #F9FAFB;\n}\n.pm-foot__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n}\n.pm-close-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  height: 30px;\n  padding: 0 14px;\n  font-size: 13px;\n  font-weight: 500;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.pm-close-btn[_ngcontent-%COMP%]:hover {\n  background: #F3F4F6;\n}\n/*# sourceMappingURL=instructor-course-grid.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorCourseGridComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-course-grid", imports: [CommonModule, FormsModule, RouterLink, HasPermissionDirective], template: `<!-- Loading State -->\r
<div *ngIf="loading" class="d-flex justify-content-center py-5">\r
    <div class="spinner-border" role="status">\r
        <span class="visually-hidden">Chargement...</span>\r
    </div>\r
</div>\r
\r
<!-- Error State -->\r
<div *ngIf="error" class="alert alert-danger" role="alert">\r
    {{ error }}\r
</div>\r
\r
<!-- Main Content -->\r
<div *ngIf="!loading && !error">\r
    <!-- KPI row -->\r
    <div class="icg-kpi-row">\r
      <div class="icg-kpi">\r
        <div class="icg-kpi__icon ki-green"><i class="isax isax-tick-circle"></i></div>\r
        <div><div class="icg-kpi__val">{{ getActiveFormationsCount() }}</div><div class="icg-kpi__lbl">Publi\xE9es</div></div>\r
      </div>\r
      <div class="icg-kpi">\r
        <div class="icg-kpi__icon ki-amber"><i class="isax isax-clock"></i></div>\r
        <div><div class="icg-kpi__val">{{ getPendingFormationsCount() }}</div><div class="icg-kpi__lbl">En attente</div></div>\r
      </div>\r
      <div class="icg-kpi">\r
        <div class="icg-kpi__icon ki-blue"><i class="isax isax-edit-2"></i></div>\r
        <div><div class="icg-kpi__val">{{ getDraftFormationsCount() }}</div><div class="icg-kpi__lbl">Brouillons</div></div>\r
      </div>\r
      <div class="icg-kpi">\r
        <div class="icg-kpi__icon ki-teal"><i class="isax isax-tag"></i></div>\r
        <div><div class="icg-kpi__val">{{ getFreeFormationsCount() }}</div><div class="icg-kpi__lbl">Gratuites</div></div>\r
      </div>\r
      <div class="icg-kpi">\r
        <div class="icg-kpi__icon ki-purple"><i class="isax isax-dollar-circle"></i></div>\r
        <div><div class="icg-kpi__val">{{ getPaidFormationsCount() }}</div><div class="icg-kpi__lbl">Payantes</div></div>\r
      </div>\r
    </div>\r
\r
    <!-- Page Header -->\r
    <div class="page-title d-flex align-items-center justify-content-between">\r
        <h5 class="fw-bold">Mes Formations ({{ totalData }})</h5>\r
        <div class="d-flex align-items-center list-icons">\r
            <a [routerLink]="routes.instructorCourse" class="me-2"><i class="isax isax-task"></i></a>\r
            <a [routerLink]="routes.instructorCourseGrid" class="active"><i class="isax isax-element-3"></i></a>\r
        </div>\r
    </div>\r
\r
    <!-- Filters and Search -->\r
    <div class="row">\r
        <div class="col-md-8">\r
            <div class="mb-3">\r
                <div class="dropdown">\r
                    <a href="javascript:void(0);" class="dropdown-toggle text-gray-6 btn rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">\r
                        Statut\r
                    </a>\r
                    <ul class="dropdown-menu dropdown-menu-end p-3">\r
                        <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterByStatus('all')">Toutes</a></li>\r
                        <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterByStatus('active')">Publi\xE9es</a></li>\r
                        <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterByStatus('pending')">En attente</a></li>\r
                        <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterByStatus('draft')">Brouillons</a></li>\r
                    </ul>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="col-md-4">\r
            <div class="input-icon mb-3">\r
                <span class="input-icon-addon">\r
                    <i class="isax isax-search-normal-14"></i>\r
                </span>\r
                <input [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }"\r
                       type="search" (ngModelChange)="searchData(searchDataValue)"\r
                       class="form-control form-control-md" placeholder="Rechercher une formation...">\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Grid Layout -->\r
    <div class="row">\r
        <div class="col-xl-4 col-lg-6 col-md-6" *ngFor="let formation of tableData; trackBy: trackByFormation">\r
            <div class="card border-0 shadow-sm mb-4">\r
                <!-- Image de la formation -->\r
                <div class="position-relative">\r
                    <a [href]="'/courses/course-details/' + formation.id" target="_blank">\r
                        <img class="card-img-top"\r
                             [src]="getFormationImage(formation)"\r
                             [alt]="formation.titre"\r
                             style="height: 200px; object-fit: cover;"\r
                             onerror="this.src='assets/img/course/course-01.jpg'">\r
                    </a>\r
\r
                    <!-- Badge statut -->\r
                    <div class="position-absolute top-0 end-0 m-2">\r
                        <span class="badge" [ngClass]="getStatusClass(formation)">\r
                            {{ getStatusText(formation) }}\r
                        </span>\r
                    </div>\r
\r
                    <!-- Badge prix -->\r
                    <div class="position-absolute bottom-0 start-0 m-2">\r
                        <span class="badge" [ngClass]="{'bg-success': isFormationGratuite(formation), 'bg-primary': !isFormationGratuite(formation)}">\r
                            {{ formatPrix(formation.prix) }}\r
                        </span>\r
                    </div>\r
                </div>\r
\r
                <!-- Contenu de la carte -->\r
                <div class="card-body">\r
                    <!-- Cat\xE9gorie -->\r
                    <div class="mb-2">\r
                        <span class="badge rounded-pill"\r
                              [style.background-color]="formation.categorie?.couleur || '#6c757d'"\r
                              style="color: white; font-size: 11px;">\r
                            {{ formation.categorie?.nom || 'Non d\xE9finie' }}\r
                        </span>\r
                    </div>\r
\r
                    <!-- Titre -->\r
                    <h6 class="fw-bold mb-2">\r
                        <a [href]="'/courses/course-details/' + formation.id" target="_blank"\r
                           class="text-decoration-none text-dark">\r
                            {{ formation.titre }}\r
                        </a>\r
                    </h6>\r
\r
                    <!-- Description courte -->\r
                    <p class="text-muted small mb-3" style="height: 40px; overflow: hidden;">\r
                        {{ formation.short_description || formation.description }}\r
                    </p>\r
\r
                    <!-- Informations -->\r
                    <div class="d-flex align-items-center mb-3 small text-muted">\r
                        <span class="me-3">\r
                            <i class="isax isax-video-circle me-1"></i>\r
                            {{ formation.nombre_modules || 0 }} modules\r
                        </span>\r
                        <span class="me-3">\r
                            <i class="isax isax-clock me-1"></i>\r
                            {{ formation.duree_totale || 0 }}h\r
                        </span>\r
                        <span>\r
                            <i class="isax isax-flag me-1"></i>\r
                            {{ formation.niveau_display || formation.niveau }}\r
                        </span>\r
                    </div>\r
\r
                    <!-- Participants -->\r
                    <div class="d-flex align-items-center justify-content-between mb-3">\r
                        <div class="d-flex align-items-center small text-muted">\r
                            <i class="isax isax-people me-1"></i>\r
                            <span>{{ formation.nb_participants || 0 }}/{{ formation.nb_max_participants || 0 }} participants</span>\r
                        </div>\r
\r
                        <!-- Certification -->\r
                        <div *ngIf="formation.est_certifiante">\r
                            <span class="badge bg-warning">\r
                                <i class="isax isax-award me-1"></i>\r
                                Certifiante\r
                            </span>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Actions -->\r
                    <div class="d-flex align-items-center justify-content-between">\r
                        <div class="d-flex align-items-center">\r
                            <a [href]="'/courses/course-details/' + formation.id" target="_blank"\r
                               class="btn btn-sm btn-outline-primary me-2"\r
                               title="Voir les d\xE9tails">\r
                                <i class="isax isax-eye"></i>\r
                            </a>\r
                            <a [href]="'/courses/instructor-course-edit/' + formation.id" target="_blank"\r
                               class="btn btn-sm btn-outline-secondary me-2"\r
                               title="Modifier">\r
                                <i class="isax isax-edit-2"></i>\r
                            </a>\r
                            <button class="btn btn-sm me-2"\r
                                    [ngClass]="(formation.est_publie === true || formation.est_publie === 1) ? 'btn-outline-danger' : 'btn-outline-success'"\r
                                    (click)="togglePublishStatus(formation)"\r
                                    [title]="(formation.est_publie === true || formation.est_publie === 1) ? 'D\xE9publier' : 'Publier'">\r
                                <i class="isax" [ngClass]="(formation.est_publie === true || formation.est_publie === 1) ? 'isax-eye-slash' : 'isax-tick-circle'"></i>\r
                            </button>\r
                            <ng-container *appHasPermission="'assigner formations'">\r
                              <button class="btn btn-sm btn-outline-info me-2"\r
                                      (click)="openParticipants(formation)"\r
                                      title="Participants">\r
                                  <i class="isax isax-people"></i>\r
                              </button>\r
                            </ng-container>\r
                            <button class="btn btn-sm btn-outline-warning"\r
                                    (click)="archiveFormation(formation)"\r
                                    title="Archiver">\r
                                <i class="isax isax-archive"></i>\r
                            </button>\r
                        </div>\r
\r
                        <div class="small text-muted">\r
                            {{ formation.type_display || formation.type }}\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Empty State -->\r
        <div *ngIf="tableData.length === 0" class="col-12 text-center py-5">\r
            <i class="isax isax-book-1 fs-48 text-muted mb-3"></i>\r
            <h5 class="text-muted">Aucune formation trouv\xE9e</h5>\r
            <p class="text-muted">Commencez par cr\xE9er votre premi\xE8re formation.</p>\r
        </div>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div class="icg-pagination" *ngIf="totalData > pageSize">\r
      <span class="pg-info">{{ totalData }} formation{{ totalData > 1 ? 's' : '' }}</span>\r
      <div class="pg-controls">\r
        <button type="button" class="pg-btn" [disabled]="currentPage === 1" (click)="onPageChange(currentPage - 1)">\r
          <i class="isax isax-arrow-left-2"></i>\r
        </button>\r
        <button type="button" class="pg-btn"\r
                *ngFor="let p of getPageNumbers()"\r
                [class.active]="p === currentPage"\r
                (click)="onPageChange(p)">{{ p }}</button>\r
        <button type="button" class="pg-btn"\r
                [disabled]="currentPage * pageSize >= totalData"\r
                (click)="onPageChange(currentPage + 1)">\r
          <i class="isax isax-arrow-right-2"></i>\r
        </button>\r
      </div>\r
    </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     MODAL PARTICIPANTS\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="pm-overlay" *ngIf="participantsModalOpen" (click)="closeParticipants()">\r
  <div class="pm-modal" (click)="$event.stopPropagation()">\r
\r
    <!-- Head -->\r
    <div class="pm-head">\r
      <div class="pm-head__icon"><i class="isax isax-people"></i></div>\r
      <div class="pm-head__text">\r
        <div class="pm-head__title">{{ selectedFormation?.titre }}</div>\r
        <div class="pm-head__sub">{{ participants.length }} participant(s) inscrit(s)</div>\r
      </div>\r
      <button type="button" class="pm-close" (click)="closeParticipants()">\r
        <i class="isax isax-close-circle"></i>\r
      </button>\r
    </div>\r
\r
    <!-- Alerts -->\r
    <div *ngIf="inscriptionSuccess" class="pm-alert pm-alert--ok">\r
      <i class="isax isax-tick-circle"></i> {{ inscriptionSuccess }}\r
    </div>\r
    <div *ngIf="inscriptionError" class="pm-alert pm-alert--err">\r
      <i class="isax isax-warning-2"></i> {{ inscriptionError }}\r
    </div>\r
\r
    <div class="pm-body">\r
\r
      <!-- Colonne gauche : inscrits -->\r
      <div class="pm-col">\r
        <div class="pm-col__header">\r
          <span class="pm-col__title"><i class="isax isax-tick-circle"></i> Inscrits</span>\r
          <div class="pm-search">\r
            <i class="isax isax-search-normal-1"></i>\r
            <input type="search" placeholder="Rechercher..."\r
                   [(ngModel)]="participantsSearch" [ngModelOptions]="{standalone:true}">\r
          </div>\r
        </div>\r
\r
        <div *ngIf="participantsLoading" class="pm-loading">\r
          <span class="pm-spin"></span> Chargement...\r
        </div>\r
\r
        <div *ngIf="!participantsLoading && !participantsFiltered.length" class="pm-empty">\r
          <i class="isax isax-people"></i>\r
          <p>Aucun participant</p>\r
        </div>\r
\r
        <div class="pm-list" *ngIf="!participantsLoading && participantsFiltered.length">\r
          <div *ngFor="let p of participantsFiltered; trackBy: trackByUserId" class="pm-user-row">\r
            <div class="pm-user-av">{{ ((p.prenom || p.nom || p.name || p.email || '?').charAt(0)).toUpperCase() }}</div>\r
            <div class="pm-user-info">\r
              <div class="pm-user-name">{{ (p.prenom && p.nom) ? (p.prenom + ' ' + p.nom) : (p.name || p.nom || '\u2014') }}</div>\r
              <div class="pm-user-email">{{ p.email }}</div>\r
            </div>\r
            <ng-container *appHasPermission="'desassigner formations'">\r
              <button type="button" class="pm-unenroll-btn"\r
                      [disabled]="inscriptionPending" (click)="desinscrireUser(p)">\r
                <span *ngIf="inscriptionPending" class="pm-spin pm-spin--sm"></span>\r
                <i *ngIf="!inscriptionPending" class="isax isax-user-remove"></i>\r
                Retirer\r
              </button>\r
            </ng-container>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="pm-divider"></div>\r
\r
      <!-- Colonne droite : \xE0 inscrire -->\r
      <div class="pm-col">\r
        <div class="pm-col__header">\r
          <span class="pm-col__title"><i class="isax isax-user-add"></i> Inscrire un employ\xE9</span>\r
          <div class="pm-search">\r
            <i class="isax isax-search-normal-1"></i>\r
            <input type="search" placeholder="Rechercher..."\r
                   [(ngModel)]="usersSearch" [ngModelOptions]="{standalone:true}"\r
                   (ngModelChange)="applyUsersFilter()">\r
          </div>\r
        </div>\r
\r
        <div *ngIf="usersLoading" class="pm-loading">\r
          <span class="pm-spin"></span> Chargement...\r
        </div>\r
\r
        <div *ngIf="!usersLoading && !availableUsersFiltered.length" class="pm-empty">\r
          <i class="isax isax-user-add"></i>\r
          <p>Tous les employ\xE9s sont d\xE9j\xE0 inscrits</p>\r
        </div>\r
\r
        <div class="pm-list" *ngIf="!usersLoading && availableUsersFiltered.length">\r
          <div *ngFor="let u of availableUsersFiltered; trackBy: trackByUserId" class="pm-user-row">\r
            <div class="pm-user-av pm-user-av--blue">{{ ((u.prenom || u.nom || u.name || u.email || '?').charAt(0)).toUpperCase() }}</div>\r
            <div class="pm-user-info">\r
              <div class="pm-user-name">{{ (u.prenom && u.nom) ? (u.prenom + ' ' + u.nom) : (u.name || u.nom || '\u2014') }}</div>\r
              <div class="pm-user-email">{{ u.email }}</div>\r
            </div>\r
            <ng-container *appHasPermission="'assigner formations'">\r
              <button type="button" class="pm-enroll-btn"\r
                      [disabled]="inscriptionPending" (click)="inscrireUser(u)">\r
                <span *ngIf="inscriptionPending" class="pm-spin pm-spin--sm"></span>\r
                <i *ngIf="!inscriptionPending" class="isax isax-user-add"></i>\r
                Inscrire\r
              </button>\r
            </ng-container>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
    <!-- Footer -->\r
    <div class="pm-foot">\r
      <span class="pm-foot__info">{{ participants.length }} inscrit(s) \xB7 {{ availableUsers.length }} disponible(s)</span>\r
      <button type="button" class="pm-close-btn" (click)="closeParticipants()">Fermer</button>\r
    </div>\r
\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/features/instructor/instructor-course-grid/instructor-course-grid.component.scss */\n.icg-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n@media (max-width: 1100px) {\n  .icg-kpi-row {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .icg-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.icg-kpi {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.icg-kpi__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.icg-kpi__val {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1A1A2E;\n  line-height: 1;\n}\n.icg-kpi__lbl {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 3px;\n}\n.ki-green {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ki-amber {\n  background: #FFFBEB;\n  color: #D97706;\n}\n.ki-blue {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.ki-teal {\n  background: #F0FDFA;\n  color: #0D9488;\n}\n.ki-purple {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.icg-card-img {\n  height: 200px;\n  object-fit: cover;\n}\n.icg-categorie-badge {\n  color: #fff;\n  font-size: 11px;\n}\n.icg-desc {\n  height: 40px;\n  overflow: hidden;\n}\n.icg-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 4px;\n  margin-top: 8px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pg-info {\n  font-size: 12px;\n  color: #6C757D;\n}\n.pg-controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pg-btn {\n  min-width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 0.12s;\n  padding: 0 8px;\n}\n.pg-btn:hover:not(:disabled) {\n  border-color: #534AB7;\n  color: #534AB7;\n  background: #EEF2FF;\n}\n.pg-btn.active {\n  background: #534AB7;\n  border-color: #534AB7;\n  color: #fff;\n}\n.pg-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n  padding: 16px;\n}\n.pm-modal {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 820px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n}\n.pm-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.pm-head__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #DBEAFE;\n  color: #2563EB;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.pm-head__text {\n  flex: 1;\n  min-width: 0;\n}\n.pm-head__title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-head__sub {\n  font-size: 12px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.pm-close {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #6C757D;\n  cursor: pointer;\n  padding: 4px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.pm-close:hover {\n  color: #111827;\n}\n.pm-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 20px;\n  font-size: 13px;\n}\n.pm-alert--ok {\n  background: #F0FDF4;\n  color: #166534;\n  border-bottom: 1px solid #4ADE80;\n}\n.pm-alert--err {\n  background: #FEF2F2;\n  color: #991B1B;\n  border-bottom: 1px solid #F87171;\n}\n.pm-body {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .pm-body {\n    flex-direction: column;\n  }\n}\n.pm-divider {\n  width: 1px;\n  background: #E9ECEF;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .pm-divider {\n    width: 100%;\n    height: 1px;\n  }\n}\n.pm-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 0;\n}\n.pm-col__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #F3F4F6;\n  flex-wrap: wrap;\n}\n.pm-col__title {\n  font-size: 12px;\n  font-weight: 600;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.pm-col__title i {\n  font-size: 14px;\n}\n.pm-search {\n  position: relative;\n  flex: 1;\n  min-width: 120px;\n  max-width: 180px;\n}\n.pm-search i {\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 13px;\n  color: #6C757D;\n  pointer-events: none;\n}\n.pm-search input {\n  width: 100%;\n  padding: 5px 8px 5px 26px;\n  font-size: 12px;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #F9FAFB;\n  outline: none;\n}\n.pm-search input:focus {\n  border-color: #2563EB;\n  background: #fff;\n}\n.pm-list {\n  overflow-y: auto;\n  flex: 1;\n  padding: 6px 0;\n}\n.pm-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 28px 16px;\n  font-size: 13px;\n  color: #6C757D;\n}\n.pm-spin {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid #E9ECEF;\n  border-top-color: #2563EB;\n  border-radius: 50%;\n  animation: pm-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.pm-spin--sm {\n  width: 11px;\n  height: 11px;\n}\n@keyframes pm-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pm-empty {\n  text-align: center;\n  padding: 32px 16px;\n  color: #6C757D;\n}\n.pm-empty i {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.pm-empty p {\n  font-size: 13px;\n  margin: 0;\n}\n.pm-user-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 16px;\n  transition: background 0.1s;\n}\n.pm-user-row:hover {\n  background: #F9FAFB;\n}\n.pm-user-av {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #F3F4F6;\n  color: #4b5563;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.pm-user-av--blue {\n  background: #DBEAFE;\n  color: #2563EB;\n}\n.pm-user-info {\n  flex: 1;\n  min-width: 0;\n}\n.pm-user-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-user-email {\n  font-size: 11px;\n  color: #6C757D;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-enroll-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 500;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.pm-enroll-btn i {\n  font-size: 13px;\n}\n.pm-enroll-btn:not(:disabled):hover {\n  background: #DCFCE7;\n  color: #166534;\n  border-color: #86EFAC;\n}\n.pm-enroll-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-unenroll-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 500;\n  border: 1px solid #FECACA;\n  border-radius: 6px;\n  background: #FFF5F5;\n  color: #991B1B;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.pm-unenroll-btn i {\n  font-size: 13px;\n}\n.pm-unenroll-btn:not(:disabled):hover {\n  background: #FEE2E2;\n  color: #7F1D1D;\n  border-color: #FCA5A5;\n}\n.pm-unenroll-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #E9ECEF;\n  background: #F9FAFB;\n}\n.pm-foot__info {\n  font-size: 12px;\n  color: #6C757D;\n}\n.pm-close-btn {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  height: 30px;\n  padding: 0 14px;\n  font-size: 13px;\n  font-weight: 500;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.pm-close-btn:hover {\n  background: #F3F4F6;\n}\n/*# sourceMappingURL=instructor-course-grid.component.css.map */\n"] }]
  }], () => [{ type: FormationService }, { type: UserService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorCourseGridComponent, { className: "InstructorCourseGridComponent", filePath: "app/features/instructor/instructor-course-grid/instructor-course-grid.component.ts", lineNumber: 16 });
})();
export {
  InstructorCourseGridComponent
};
//# sourceMappingURL=chunk-UI336VJZ.js.map
