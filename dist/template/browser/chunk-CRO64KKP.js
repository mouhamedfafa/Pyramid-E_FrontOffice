import {
  espaceOrigine
} from "./chunk-4GCFTWOO.js";
import {
  RoleRedirectService
} from "./chunk-BR65O5BA.js";
import {
  ManagerService
} from "./chunk-X4P6RYVM.js";
import {
  HasPermissionDirective
} from "./chunk-R37243IZ.js";
import "./chunk-IGS3DTTC.js";
import {
  AuthService
} from "./chunk-U7Y6GEK6.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-42QKTZAV.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-VMXPZP5A.js";
import "./chunk-47WYM2C2.js";
import "./chunk-XZLGMMSK.js";
import {
  CommonModule,
  NgClass,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ON7U2Q36.js";
import "./chunk-4MWRP73S.js";

// src/app/features/manager/common/manager-sidebar/manager-sidebar.component.ts
function ManagerSidebarComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statut == null ? null : ctx_r0.statut.demandes_a_traiter);
  }
}
function ManagerSidebarComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275element(2, "i", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 44);
    \u0275\u0275text(5, "Traiter maintenant \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.statut == null ? null : ctx_r0.statut.demandes_a_traiter, " demande", ((ctx_r0.statut == null ? null : ctx_r0.statut.demandes_a_traiter) ?? 0) > 1 ? "s" : "", " en attente de votre avis ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.managerDemandes);
  }
}
function ManagerSidebarComponent_ng_container_71_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 46)(1, "span", 30);
    \u0275\u0275element(2, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32)(4, "span", 33);
    \u0275\u0275text(5, "Mode employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 34);
    \u0275\u0275text(7, "Vos formations et demandes");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.students_Dashboard);
  }
}
function ManagerSidebarComponent_ng_container_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ManagerSidebarComponent_ng_container_71_a_1_Template, 9, 1, "a", 45);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "acceder-mode-employe");
  }
}
function ManagerSidebarComponent_ng_container_72_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 49)(1, "span", 30);
    \u0275\u0275element(2, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32)(4, "span", 33);
    \u0275\u0275text(5, "Mode formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 34);
    \u0275\u0275text(7, "Cr\xE9er et g\xE9rer des formations");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructor_dashboard);
  }
}
function ManagerSidebarComponent_ng_container_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ManagerSidebarComponent_ng_container_72_a_1_Template, 9, 1, "a", 48);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "acceder-mode-formateur");
  }
}
var ManagerSidebarComponent = class _ManagerSidebarComponent {
  authService;
  managerService;
  redirectService;
  routes = routes;
  currentUser = null;
  statut = null;
  retourRoute = "/index";
  origine = espaceOrigine(null);
  sub;
  constructor(authService, managerService, redirectService) {
    this.authService = authService;
    this.managerService = managerService;
    this.redirectService = redirectService;
  }
  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.retourRoute = this.redirectService.getDefaultRoute();
    this.origine = espaceOrigine(this.redirectService.getCurrentLayout());
    this.sub = this.managerService.statut$.subscribe((s) => this.statut = s);
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  /** Les modes employé / formateur ne sont proposés que s'ils diffèrent de l'espace d'origine. */
  get proposerModeEmploye() {
    return this.origine.layout !== "employe";
  }
  get proposerModeFormateur() {
    return this.origine.layout !== "formateur";
  }
  getInitials() {
    const u = this.currentUser;
    const initials = `${u?.prenom?.charAt(0) ?? ""}${u?.nom?.charAt(0) ?? ""}`.toUpperCase();
    return initials || "MG";
  }
  getDisplayName() {
    const u = this.currentUser;
    return u?.name || `${u?.prenom ?? ""} ${u?.nom ?? ""}`.trim() || u?.email || "Manager";
  }
  logout() {
    this.managerService.reset();
    this.authService.logout();
  }
  static \u0275fac = function ManagerSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManagerSidebarComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ManagerService), \u0275\u0275directiveInject(RoleRedirectService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManagerSidebarComponent, selectors: [["app-manager-sidebar"]], decls: 77, vars: 20, consts: [[1, "sb-shell"], [1, "sb-logo"], [1, "sb-logo-mark"], [1, "isax", "isax-hierarchy"], [1, "sb-logo-text"], [1, "sb-logo-badge"], [1, "sb-profile"], [1, "sb-av"], [1, "sb-profile-info"], [1, "sb-pname"], [1, "sb-prole"], [1, "sb-ministats"], [1, "sb-ministat"], [1, "sb-ministat-val"], [1, "sb-ministat-lbl"], [1, "sb-ministat-div"], [1, "sb-scroll"], [1, "sb-section"], [1, "sb-section-label"], ["routerLinkActive", "active", 1, "sb-item", 3, "routerLink"], [1, "isax", "isax-grid-3"], [1, "sb-item-label"], [1, "sb-divider"], [1, "isax", "isax-people"], [1, "sb-badge"], [1, "isax", "isax-task-square"], ["class", "sb-badge sb-badge--red", 4, "ngIf"], ["class", "sb-widget-alert", 4, "ngIf"], [1, "sb-spaces"], [1, "sb-space", "sb-space--home", 3, "routerLink"], [1, "sb-space__icon"], [1, "isax", 3, "ngClass"], [1, "sb-space__text"], [1, "sb-space__label"], [1, "sb-space__sub"], [1, "isax", "isax-arrow-right-3", "sb-space__arrow"], [4, "ngIf"], [1, "sb-bottom"], ["href", "javascript:void(0);", 1, "sb-bottom-item", "logout", 3, "click"], [1, "isax", "isax-logout"], [1, "sb-badge", "sb-badge--red"], [1, "sb-widget-alert"], [1, "sb-widget-alert-title"], [1, "isax", "isax-warning-2"], [1, "sb-widget-alert-link", 3, "routerLink"], ["class", "sb-space sb-space--employe", 3, "routerLink", 4, "appHasPermission"], [1, "sb-space", "sb-space--employe", 3, "routerLink"], [1, "isax", "isax-user-octagon"], ["class", "sb-space sb-space--formateur", 3, "routerLink", 4, "appHasPermission"], [1, "sb-space", "sb-space--formateur", 3, "routerLink"], [1, "isax", "isax-teacher"]], template: function ManagerSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 4);
      \u0275\u0275text(6, "Pyramide LMS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8, "Espace Manager");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "div", 13);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14);
      \u0275\u0275text(22, "DIRECTS");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "div", 15);
      \u0275\u0275elementStart(24, "div", 12)(25, "div", 13);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 14);
      \u0275\u0275text(28, "\xC9QUIPE");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(29, "div", 15);
      \u0275\u0275elementStart(30, "div", 12)(31, "div", 13);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 14);
      \u0275\u0275text(34, "\xC0 TRAITER");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 16)(36, "div", 17)(37, "div", 18);
      \u0275\u0275text(38, "Vue d'ensemble");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "a", 19);
      \u0275\u0275element(40, "i", 20);
      \u0275\u0275elementStart(41, "span", 21);
      \u0275\u0275text(42, "Tableau de bord");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(43, "div", 22);
      \u0275\u0275elementStart(44, "div", 17)(45, "div", 18);
      \u0275\u0275text(46, "Mon \xE9quipe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "a", 19);
      \u0275\u0275element(48, "i", 23);
      \u0275\u0275elementStart(49, "span", 21);
      \u0275\u0275text(50, "Collaborateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 24);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "a", 19);
      \u0275\u0275element(54, "i", 25);
      \u0275\u0275elementStart(55, "span", 21);
      \u0275\u0275text(56, "Demandes de formation");
      \u0275\u0275elementEnd();
      \u0275\u0275template(57, ManagerSidebarComponent_span_57_Template, 2, 1, "span", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(58, ManagerSidebarComponent_div_58_Template, 6, 3, "div", 27);
      \u0275\u0275elementStart(59, "div", 28)(60, "div", 18);
      \u0275\u0275text(61, "Changer d'espace");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "a", 29)(63, "span", 30);
      \u0275\u0275element(64, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "span", 32)(66, "span", 33);
      \u0275\u0275text(67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "span", 34);
      \u0275\u0275text(69);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(70, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275template(71, ManagerSidebarComponent_ng_container_71_Template, 2, 1, "ng-container", 36)(72, ManagerSidebarComponent_ng_container_72_Template, 2, 1, "ng-container", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 37)(74, "a", 38);
      \u0275\u0275listener("click", function ManagerSidebarComponent_Template_a_click_74_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(75, "i", 39);
      \u0275\u0275text(76, " D\xE9connexion ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.getInitials());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getDisplayName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((ctx.currentUser == null ? null : ctx.currentUser.fonction) || "Manager");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate((ctx.statut == null ? null : ctx.statut.nb_collaborateurs_directs) ?? 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate((ctx.statut == null ? null : ctx.statut.nb_collaborateurs_total) ?? 0);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("sb-ministat--warn", ((ctx.statut == null ? null : ctx.statut.demandes_a_traiter) ?? 0) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((ctx.statut == null ? null : ctx.statut.demandes_a_traiter) ?? 0);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.manager_dashboard);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.managerEquipe);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((ctx.statut == null ? null : ctx.statut.nb_collaborateurs_total) ?? 0);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.managerDemandes);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ((ctx.statut == null ? null : ctx.statut.demandes_a_traiter) ?? 0) > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((ctx.statut == null ? null : ctx.statut.demandes_a_traiter) ?? 0) > 0);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.retourRoute);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.origine.icon);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.origine.label);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.origine.sub);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.proposerModeEmploye);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.proposerModeFormateur);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterLink, RouterLinkActive, HasPermissionDirective], styles: ["\n\n.sb-shell[_ngcontent-%COMP%] {\n  --sb-bg: #1E1B4B;\n  --sb-bg-item: rgba(255,255,255,.06);\n  --sb-active: #4F46E5;\n  --sb-active-text: #fff;\n  --sb-accent: #A5B4FC;\n  --sb-accent-light: rgba(165,180,252,.2);\n  --sb-text: rgba(255,255,255,.65);\n  --sb-text-hi: rgba(255,255,255,.92);\n  --sb-text-dim: rgba(255,255,255,.35);\n  --sb-border: rgba(255,255,255,.08);\n}\n[_nghost-%COMP%] {\n  display: block;\n  padding: 0 !important;\n}\n.sb-shell[_ngcontent-%COMP%] {\n  background: var(--sb-bg);\n  display: flex;\n  flex-direction: column;\n  min-height: 520px;\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.sb-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 16px 13px;\n  border-bottom: 1px solid var(--sb-border);\n}\n.sb-logo-mark[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  background: var(--sb-active);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  color: #fff;\n}\n.sb-logo-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n}\n.sb-logo-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10px;\n  padding: 1px 8px;\n  border-radius: 20px;\n  background: var(--sb-accent-light);\n  color: var(--sb-accent);\n  margin-top: 2px;\n}\n.sb-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 14px 10px;\n  border-bottom: 1px solid var(--sb-border);\n}\n.sb-av[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: var(--sb-active);\n  border: 2px solid var(--sb-accent-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sb-profile-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sb-pname[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sb-prole[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--sb-text-dim);\n  margin-top: 1px;\n}\n.sb-ministats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--sb-border);\n}\n.sb-ministat[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.sb-ministat--warn[_ngcontent-%COMP%]   .sb-ministat-val[_ngcontent-%COMP%], \n.sb-ministat--warn[_ngcontent-%COMP%]   .sb-ministat-lbl[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.sb-ministat-val[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n}\n.sb-ministat-lbl[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 600;\n  color: var(--sb-text-dim);\n  letter-spacing: 0.06em;\n  margin-top: 3px;\n}\n.sb-ministat-div[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 30px;\n  background: var(--sb-border);\n  margin: 0 4px;\n}\n.sb-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 6px 0 10px;\n}\n.sb-section[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.sb-section-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--sb-text-dim);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  padding: 10px 16px 4px;\n}\n.sb-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--sb-border);\n  margin: 4px 12px;\n}\n.sb-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 12px;\n  margin: 1px 8px;\n  border-radius: 8px;\n  color: var(--sb-text);\n  font-size: 13px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--sb-text-dim);\n}\n.sb-item[_ngcontent-%COMP%]:hover {\n  background: var(--sb-bg-item);\n  color: var(--sb-text-hi);\n}\n.sb-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--sb-accent);\n}\n.sb-item.active[_ngcontent-%COMP%] {\n  background: var(--sb-active);\n  color: var(--sb-active-text);\n  font-weight: 500;\n}\n.sb-item.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sb-item-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sb-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.75);\n  font-weight: 500;\n}\n.sb-badge--red[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n}\n.sb-widget-alert[_ngcontent-%COMP%] {\n  margin: 4px 10px 8px;\n  background: rgba(245, 158, 11, 0.15);\n  border: 1px solid rgba(245, 158, 11, 0.35);\n  border-radius: 8px;\n  padding: 12px;\n}\n.sb-widget-alert-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fcd34d;\n}\n.sb-widget-alert-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sb-widget-alert-link[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: #fcd34d;\n  text-decoration: underline;\n  margin: 6px 0 0 20px;\n}\n.sb-widget-alert-link[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.sb-spaces[_ngcontent-%COMP%] {\n  padding: 4px 10px 10px;\n  border-top: 1px solid var(--sb-border);\n}\n.sb-spaces[_ngcontent-%COMP%]   .sb-section-label[_ngcontent-%COMP%] {\n  padding: 10px 6px 6px;\n}\n.sb-space[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 10px;\n  margin-bottom: 6px;\n  border-radius: 10px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    transform 0.15s;\n}\n.sb-space[_ngcontent-%COMP%]:hover {\n  transform: translateX(2px);\n}\n.sb-space__icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.sb-space__text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.sb-space__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n}\n.sb-space__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--sb-text-dim);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sb-space__arrow[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--sb-text-dim);\n}\n.sb-space--home[_ngcontent-%COMP%] {\n  background: rgba(165, 180, 252, 0.12);\n  border-color: rgba(165, 180, 252, 0.3);\n}\n.sb-space--home[_ngcontent-%COMP%]   .sb-space__icon[_ngcontent-%COMP%] {\n  background: #4F46E5;\n}\n.sb-space--home[_ngcontent-%COMP%]:hover {\n  background: rgba(165, 180, 252, 0.2);\n  border-color: rgba(165, 180, 252, 0.5);\n}\n.sb-space--employe[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.08);\n  border-color: rgba(16, 185, 129, 0.25);\n}\n.sb-space--employe[_ngcontent-%COMP%]   .sb-space__icon[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.sb-space--employe[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.15);\n  border-color: rgba(16, 185, 129, 0.45);\n}\n.sb-space--formateur[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1);\n  border-color: rgba(139, 92, 246, 0.28);\n}\n.sb-space--formateur[_ngcontent-%COMP%]   .sb-space__icon[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.sb-space--formateur[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 92, 246, 0.18);\n  border-color: rgba(139, 92, 246, 0.5);\n}\n.sb-bottom[_ngcontent-%COMP%] {\n  padding: 8px 10px 12px;\n  border-top: 1px solid var(--sb-border);\n}\n.sb-bottom-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 8px;\n  border-radius: 8px;\n  margin-bottom: 2px;\n  color: rgba(255, 255, 255, 0.45);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-bottom-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.sb-bottom-item[_ngcontent-%COMP%]:hover {\n  background: var(--sb-bg-item);\n  color: var(--sb-text-hi);\n}\n.sb-bottom-item.logout[_ngcontent-%COMP%] {\n  color: rgba(220, 38, 38, 0.65);\n}\n.sb-bottom-item.logout[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.1);\n  color: #fca5a5;\n}\n/*# sourceMappingURL=manager-sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagerSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-manager-sidebar", imports: [CommonModule, RouterLink, RouterLinkActive, HasPermissionDirective], template: `<div class="sb-shell">

  <!-- \u2500\u2500 LOGO \u2500\u2500 -->
  <div class="sb-logo">
    <div class="sb-logo-mark"><i class="isax isax-hierarchy"></i></div>
    <div>
      <div class="sb-logo-text">Pyramide LMS</div>
      <span class="sb-logo-badge">Espace Manager</span>
    </div>
  </div>

  <!-- \u2500\u2500 PROFIL \u2500\u2500 -->
  <div class="sb-profile">
    <div class="sb-av">{{ getInitials() }}</div>
    <div class="sb-profile-info">
      <div class="sb-pname">{{ getDisplayName() }}</div>
      <div class="sb-prole">{{ currentUser?.fonction || 'Manager' }}</div>
    </div>
  </div>

  <!-- \u2500\u2500 MINI-STATS \u2500\u2500 -->
  <div class="sb-ministats">
    <div class="sb-ministat">
      <div class="sb-ministat-val">{{ statut?.nb_collaborateurs_directs ?? 0 }}</div>
      <div class="sb-ministat-lbl">DIRECTS</div>
    </div>
    <div class="sb-ministat-div"></div>
    <div class="sb-ministat">
      <div class="sb-ministat-val">{{ statut?.nb_collaborateurs_total ?? 0 }}</div>
      <div class="sb-ministat-lbl">\xC9QUIPE</div>
    </div>
    <div class="sb-ministat-div"></div>
    <div class="sb-ministat" [class.sb-ministat--warn]="(statut?.demandes_a_traiter ?? 0) > 0">
      <div class="sb-ministat-val">{{ statut?.demandes_a_traiter ?? 0 }}</div>
      <div class="sb-ministat-lbl">\xC0 TRAITER</div>
    </div>
  </div>

  <!-- \u2500\u2500 NAV \u2500\u2500 -->
  <div class="sb-scroll">
    <div class="sb-section">
      <div class="sb-section-label">Vue d'ensemble</div>
      <a [routerLink]="routes.manager_dashboard" routerLinkActive="active" class="sb-item">
        <i class="isax isax-grid-3"></i>
        <span class="sb-item-label">Tableau de bord</span>
      </a>
    </div>

    <div class="sb-divider"></div>

    <div class="sb-section">
      <div class="sb-section-label">Mon \xE9quipe</div>
      <a [routerLink]="routes.managerEquipe" routerLinkActive="active" class="sb-item">
        <i class="isax isax-people"></i>
        <span class="sb-item-label">Collaborateurs</span>
        <span class="sb-badge">{{ statut?.nb_collaborateurs_total ?? 0 }}</span>
      </a>
      <a [routerLink]="routes.managerDemandes" routerLinkActive="active" class="sb-item">
        <i class="isax isax-task-square"></i>
        <span class="sb-item-label">Demandes de formation</span>
        <span *ngIf="(statut?.demandes_a_traiter ?? 0) > 0" class="sb-badge sb-badge--red">{{ statut?.demandes_a_traiter }}</span>
      </a>
    </div>
  </div>

  <!-- \u2500\u2500 WIDGET ALERTE DEMANDES \u2500\u2500 -->
  <div class="sb-widget-alert" *ngIf="(statut?.demandes_a_traiter ?? 0) > 0">
    <div class="sb-widget-alert-title">
      <i class="isax isax-warning-2"></i>
      {{ statut?.demandes_a_traiter }} demande{{ (statut?.demandes_a_traiter ?? 0) > 1 ? 's' : '' }} en attente de votre avis
    </div>
    <a [routerLink]="routes.managerDemandes" class="sb-widget-alert-link">Traiter maintenant \u2192</a>
  </div>

  <!-- \u2500\u2500 CHANGER D'ESPACE \u2500\u2500 -->
  <div class="sb-spaces">
    <div class="sb-section-label">Changer d'espace</div>

    <!-- Espace d'origine (RH, formateur, Super Admin ou employ\xE9) -->
    <a [routerLink]="retourRoute" class="sb-space sb-space--home">
      <span class="sb-space__icon"><i class="isax" [ngClass]="origine.icon"></i></span>
      <span class="sb-space__text">
        <span class="sb-space__label">{{ origine.label }}</span>
        <span class="sb-space__sub">{{ origine.sub }}</span>
      </span>
      <i class="isax isax-arrow-right-3 sb-space__arrow"></i>
    </a>

    <ng-container *ngIf="proposerModeEmploye">
      <a *appHasPermission="'acceder-mode-employe'" [routerLink]="routes.students_Dashboard" class="sb-space sb-space--employe">
        <span class="sb-space__icon"><i class="isax isax-user-octagon"></i></span>
        <span class="sb-space__text">
          <span class="sb-space__label">Mode employ\xE9</span>
          <span class="sb-space__sub">Vos formations et demandes</span>
        </span>
        <i class="isax isax-arrow-right-3 sb-space__arrow"></i>
      </a>
    </ng-container>

    <ng-container *ngIf="proposerModeFormateur">
      <a *appHasPermission="'acceder-mode-formateur'" [routerLink]="routes.instructor_dashboard" class="sb-space sb-space--formateur">
        <span class="sb-space__icon"><i class="isax isax-teacher"></i></span>
        <span class="sb-space__text">
          <span class="sb-space__label">Mode formateur</span>
          <span class="sb-space__sub">Cr\xE9er et g\xE9rer des formations</span>
        </span>
        <i class="isax isax-arrow-right-3 sb-space__arrow"></i>
      </a>
    </ng-container>
  </div>

  <!-- \u2500\u2500 BOTTOM \u2500\u2500 -->
  <div class="sb-bottom">
    <a href="javascript:void(0);" (click)="logout()" class="sb-bottom-item logout">
      <i class="isax isax-logout"></i> D\xE9connexion
    </a>
  </div>

</div>
`, styles: ["/* src/app/features/manager/common/manager-sidebar/manager-sidebar.component.scss */\n.sb-shell {\n  --sb-bg: #1E1B4B;\n  --sb-bg-item: rgba(255,255,255,.06);\n  --sb-active: #4F46E5;\n  --sb-active-text: #fff;\n  --sb-accent: #A5B4FC;\n  --sb-accent-light: rgba(165,180,252,.2);\n  --sb-text: rgba(255,255,255,.65);\n  --sb-text-hi: rgba(255,255,255,.92);\n  --sb-text-dim: rgba(255,255,255,.35);\n  --sb-border: rgba(255,255,255,.08);\n}\n:host {\n  display: block;\n  padding: 0 !important;\n}\n.sb-shell {\n  background: var(--sb-bg);\n  display: flex;\n  flex-direction: column;\n  min-height: 520px;\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.sb-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 16px 13px;\n  border-bottom: 1px solid var(--sb-border);\n}\n.sb-logo-mark {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  background: var(--sb-active);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  color: #fff;\n}\n.sb-logo-text {\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n}\n.sb-logo-badge {\n  display: inline-block;\n  font-size: 10px;\n  padding: 1px 8px;\n  border-radius: 20px;\n  background: var(--sb-accent-light);\n  color: var(--sb-accent);\n  margin-top: 2px;\n}\n.sb-profile {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 14px 10px;\n  border-bottom: 1px solid var(--sb-border);\n}\n.sb-av {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: var(--sb-active);\n  border: 2px solid var(--sb-accent-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sb-profile-info {\n  flex: 1;\n  min-width: 0;\n}\n.sb-pname {\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sb-prole {\n  font-size: 11px;\n  color: var(--sb-text-dim);\n  margin-top: 1px;\n}\n.sb-ministats {\n  display: flex;\n  align-items: center;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--sb-border);\n}\n.sb-ministat {\n  flex: 1;\n  text-align: center;\n}\n.sb-ministat--warn .sb-ministat-val,\n.sb-ministat--warn .sb-ministat-lbl {\n  color: #f59e0b;\n}\n.sb-ministat-val {\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n}\n.sb-ministat-lbl {\n  font-size: 9px;\n  font-weight: 600;\n  color: var(--sb-text-dim);\n  letter-spacing: 0.06em;\n  margin-top: 3px;\n}\n.sb-ministat-div {\n  width: 1px;\n  height: 30px;\n  background: var(--sb-border);\n  margin: 0 4px;\n}\n.sb-scroll {\n  flex: 1;\n  padding: 6px 0 10px;\n}\n.sb-section {\n  margin-bottom: 4px;\n}\n.sb-section-label {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--sb-text-dim);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  padding: 10px 16px 4px;\n}\n.sb-divider {\n  height: 1px;\n  background: var(--sb-border);\n  margin: 4px 12px;\n}\n.sb-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 12px;\n  margin: 1px 8px;\n  border-radius: 8px;\n  color: var(--sb-text);\n  font-size: 13px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-item i {\n  font-size: 16px;\n  color: var(--sb-text-dim);\n}\n.sb-item:hover {\n  background: var(--sb-bg-item);\n  color: var(--sb-text-hi);\n}\n.sb-item:hover i {\n  color: var(--sb-accent);\n}\n.sb-item.active {\n  background: var(--sb-active);\n  color: var(--sb-active-text);\n  font-weight: 500;\n}\n.sb-item.active i {\n  color: #fff;\n}\n.sb-item-label {\n  flex: 1;\n}\n.sb-badge {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.75);\n  font-weight: 500;\n}\n.sb-badge--red {\n  background: #dc2626;\n  color: #fff;\n}\n.sb-widget-alert {\n  margin: 4px 10px 8px;\n  background: rgba(245, 158, 11, 0.15);\n  border: 1px solid rgba(245, 158, 11, 0.35);\n  border-radius: 8px;\n  padding: 12px;\n}\n.sb-widget-alert-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fcd34d;\n}\n.sb-widget-alert-title i {\n  font-size: 14px;\n}\n.sb-widget-alert-link {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: #fcd34d;\n  text-decoration: underline;\n  margin: 6px 0 0 20px;\n}\n.sb-widget-alert-link:hover {\n  color: #fff;\n}\n.sb-spaces {\n  padding: 4px 10px 10px;\n  border-top: 1px solid var(--sb-border);\n}\n.sb-spaces .sb-section-label {\n  padding: 10px 6px 6px;\n}\n.sb-space {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 10px;\n  margin-bottom: 6px;\n  border-radius: 10px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    transform 0.15s;\n}\n.sb-space:hover {\n  transform: translateX(2px);\n}\n.sb-space__icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.sb-space__text {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.sb-space__label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n}\n.sb-space__sub {\n  font-size: 11px;\n  color: var(--sb-text-dim);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sb-space__arrow {\n  font-size: 13px;\n  color: var(--sb-text-dim);\n}\n.sb-space--home {\n  background: rgba(165, 180, 252, 0.12);\n  border-color: rgba(165, 180, 252, 0.3);\n}\n.sb-space--home .sb-space__icon {\n  background: #4F46E5;\n}\n.sb-space--home:hover {\n  background: rgba(165, 180, 252, 0.2);\n  border-color: rgba(165, 180, 252, 0.5);\n}\n.sb-space--employe {\n  background: rgba(16, 185, 129, 0.08);\n  border-color: rgba(16, 185, 129, 0.25);\n}\n.sb-space--employe .sb-space__icon {\n  background: #10b981;\n}\n.sb-space--employe:hover {\n  background: rgba(16, 185, 129, 0.15);\n  border-color: rgba(16, 185, 129, 0.45);\n}\n.sb-space--formateur {\n  background: rgba(139, 92, 246, 0.1);\n  border-color: rgba(139, 92, 246, 0.28);\n}\n.sb-space--formateur .sb-space__icon {\n  background: #8b5cf6;\n}\n.sb-space--formateur:hover {\n  background: rgba(139, 92, 246, 0.18);\n  border-color: rgba(139, 92, 246, 0.5);\n}\n.sb-bottom {\n  padding: 8px 10px 12px;\n  border-top: 1px solid var(--sb-border);\n}\n.sb-bottom-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 8px;\n  border-radius: 8px;\n  margin-bottom: 2px;\n  color: rgba(255, 255, 255, 0.45);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-bottom-item i {\n  font-size: 15px;\n}\n.sb-bottom-item:hover {\n  background: var(--sb-bg-item);\n  color: var(--sb-text-hi);\n}\n.sb-bottom-item.logout {\n  color: rgba(220, 38, 38, 0.65);\n}\n.sb-bottom-item.logout:hover {\n  background: rgba(220, 38, 38, 0.1);\n  color: #fca5a5;\n}\n/*# sourceMappingURL=manager-sidebar.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: ManagerService }, { type: RoleRedirectService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManagerSidebarComponent, { className: "ManagerSidebarComponent", filePath: "app/features/manager/common/manager-sidebar/manager-sidebar.component.ts", lineNumber: 19 });
})();

// src/app/features/manager/manager.component.ts
function ManagerComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.currentUser == null ? null : ctx_r0.currentUser.fonction, " ");
  }
}
function ManagerComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statut == null ? null : ctx_r0.statut.demandes_a_traiter);
  }
}
var ManagerComponent = class _ManagerComponent {
  authService;
  managerService;
  redirectService;
  routes = routes;
  currentUser = null;
  statut = null;
  retourRoute = "/index";
  origine = espaceOrigine(null);
  sub;
  constructor(authService, managerService, redirectService) {
    this.authService = authService;
    this.managerService = managerService;
    this.redirectService = redirectService;
  }
  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.retourRoute = this.redirectService.getDefaultRoute();
    this.origine = espaceOrigine(this.redirectService.getCurrentLayout());
    this.sub = this.managerService.statut$.subscribe((s) => this.statut = s);
    this.managerService.getStatut().subscribe();
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  getFullName() {
    const u = this.currentUser;
    if (!u)
      return "Manager";
    return `${u.prenom ?? ""} ${u.nom ?? ""}`.trim() || u.name || "Manager";
  }
  getInitials() {
    const u = this.currentUser;
    const initials = `${u?.prenom?.charAt(0) ?? ""}${u?.nom?.charAt(0) ?? ""}`.toUpperCase();
    return initials || "MG";
  }
  static \u0275fac = function ManagerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManagerComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ManagerService), \u0275\u0275directiveInject(RoleRedirectService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManagerComponent, selectors: [["app-manager"]], decls: 63, vars: 17, consts: [[1, "content", "mgr-content"], [1, "container"], [1, "mgr-header"], [1, "mgr-header-top-label"], [1, "mgr-header-card"], [1, "mgr-identity"], [1, "mgr-av"], [1, "mgr-name"], ["class", "mgr-fonction", 4, "ngIf"], [1, "mgr-role-badge"], [1, "isax", "isax-hierarchy"], [1, "mgr-actions"], [1, "mgr-hbtn", "mgr-hbtn-outline", 3, "routerLink", "title"], [1, "isax", "isax-arrow-left-2"], [1, "mgr-hbtn", "mgr-hbtn-primary", 3, "routerLink"], [1, "isax", "isax-task-square"], ["class", "mgr-hbtn-count", 4, "ngIf"], [1, "mgr-stats-row"], [1, "mgr-stat"], [1, "mgr-stat-val"], [1, "mgr-stat-lbl"], [1, "isax", "isax-user"], [1, "isax", "isax-people"], [1, "isax", "isax-clock"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9"], [1, "footer"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "col-md-6"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"], [3, "routerLink"], [1, "mgr-fonction"], [1, "isax", "isax-briefcase"], [1, "mgr-hbtn-count"]], template: function ManagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "MANAGER \u2014 MON \xC9QUIPE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div")(10, "h5", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, ManagerComponent_p_12_Template, 3, 1, "p", 8);
      \u0275\u0275elementStart(13, "span", 9);
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 11)(17, "a", 12);
      \u0275\u0275element(18, "i", 13);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 14);
      \u0275\u0275element(21, "i", 15);
      \u0275\u0275text(22, "Demandes \xE0 valider ");
      \u0275\u0275template(23, ManagerComponent_span_23_Template, 2, 1, "span", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 17)(25, "div", 18)(26, "div", 19);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 20);
      \u0275\u0275element(29, "i", 21);
      \u0275\u0275text(30, "Collaborateurs directs (N-1)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 18)(32, "div", 19);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 20);
      \u0275\u0275element(35, "i", 22);
      \u0275\u0275text(36, "\xC9quipe totale (N-1, N-2\u2026)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 18)(38, "div", 19);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 20);
      \u0275\u0275element(41, "i", 23);
      \u0275\u0275text(42, "Demandes \xE0 traiter par moi");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "div", 24);
      \u0275\u0275element(44, "app-manager-sidebar", 25);
      \u0275\u0275elementStart(45, "div", 26);
      \u0275\u0275element(46, "router-outlet");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "footer", 27)(48, "div", 28)(49, "div", 1)(50, "div", 29)(51, "div", 30)(52, "div", 31)(53, "p", 32);
      \u0275\u0275text(54, "Copyright \xA9 2025 Pyramide. tout droits reserv\xE9s.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 30)(56, "ul", 33)(57, "li")(58, "a", 34);
      \u0275\u0275text(59, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li")(61, "a", 34);
      \u0275\u0275text(62, "Politique de Confidentialit\xE9");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.getInitials());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getFullName());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentUser == null ? null : ctx.currentUser.fonction);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" Manager \xB7 ", (ctx.statut == null ? null : ctx.statut.nb_collaborateurs_total) ?? 0, " collaborateur", ((ctx.statut == null ? null : ctx.statut.nb_collaborateurs_total) ?? 0) > 1 ? "s" : "", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.retourRoute)("title", "Revenir \xE0 : " + ctx.origine.label);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.origine.label, " ");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.managerDemandes);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ((ctx.statut == null ? null : ctx.statut.demandes_a_traiter) ?? 0) > 0);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate((ctx.statut == null ? null : ctx.statut.nb_collaborateurs_directs) ?? 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate((ctx.statut == null ? null : ctx.statut.nb_collaborateurs_total) ?? 0);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("mgr-stat--warn", ((ctx.statut == null ? null : ctx.statut.demandes_a_traiter) ?? 0) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((ctx.statut == null ? null : ctx.statut.demandes_a_traiter) ?? 0);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.page_term_condition);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.page_privacy_policy);
    }
  }, dependencies: [CommonModule, NgIf, RouterOutlet, RouterModule, RouterLink, ManagerSidebarComponent], styles: ["\n\n.mgr-content[_ngcontent-%COMP%] {\n  padding: 21px 0 !important;\n}\n.mgr-header[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e5e7eb;\n  padding: 20px 24px 0;\n  margin-bottom: 24px;\n}\n.mgr-header-top-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #6b7280;\n  margin-bottom: 16px;\n}\n.mgr-header-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.mgr-identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.mgr-av[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: #EEF2FF;\n  color: #4F46E5;\n  border: 2px solid #4F46E5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.mgr-name[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 3px;\n}\n.mgr-fonction[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0 0 6px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.mgr-fonction[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4F46E5;\n}\n.mgr-role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  padding: 2px 12px;\n  border-radius: 20px;\n  background: #EEF2FF;\n  color: #4338CA;\n  border: 1px solid #C7D2FE;\n  font-weight: 500;\n}\n.mgr-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.mgr-hbtn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 8px 18px;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: all 0.15s;\n}\n.mgr-hbtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.mgr-hbtn.mgr-hbtn-outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1a1a2e;\n  border: 1px solid #d1d5db;\n}\n.mgr-hbtn.mgr-hbtn-outline[_ngcontent-%COMP%]:hover {\n  border-color: #4F46E5;\n  color: #4F46E5;\n}\n.mgr-hbtn.mgr-hbtn-primary[_ngcontent-%COMP%] {\n  background: #4F46E5;\n  color: #fff;\n  border: 1px solid #4F46E5;\n}\n.mgr-hbtn.mgr-hbtn-primary[_ngcontent-%COMP%]:hover {\n  background: #4338CA;\n  border-color: #4338CA;\n}\n.mgr-hbtn-count[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #4338CA;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 0 7px;\n  margin-left: 2px;\n}\n.mgr-stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  padding: 16px 0 20px;\n  border-top: 1px solid #f0f0f0;\n}\n.mgr-stat[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e9ecef;\n  border-top: 3px solid #4F46E5;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.mgr-stat--warn[_ngcontent-%COMP%] {\n  background: #fff8ee;\n  border-color: #f5c77e;\n  border-top-color: #f59e0b;\n}\n.mgr-stat-val[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.1;\n}\n.mgr-stat-lbl[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 5px;\n}\n.mgr-stat-lbl[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n@media (max-width: 767px) {\n  .mgr-stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .mgr-header[_ngcontent-%COMP%] {\n    padding: 16px 16px 0;\n  }\n}\n/*# sourceMappingURL=manager.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagerComponent, [{
    type: Component,
    args: [{ selector: "app-manager", imports: [CommonModule, RouterOutlet, RouterModule, ManagerSidebarComponent], template: `<div class="content mgr-content">
  <div class="container">

    <!-- \u2500\u2500 En-t\xEAte Manager \u2500\u2500 -->
    <div class="mgr-header">
      <div class="mgr-header-top-label">MANAGER \u2014 MON \xC9QUIPE</div>

      <div class="mgr-header-card">
        <div class="mgr-identity">
          <div class="mgr-av">{{ getInitials() }}</div>
          <div>
            <h5 class="mgr-name">{{ getFullName() }}</h5>
            <p class="mgr-fonction" *ngIf="currentUser?.fonction">
              <i class="isax isax-briefcase"></i>{{ currentUser?.fonction }}
            </p>
            <span class="mgr-role-badge">
              <i class="isax isax-hierarchy"></i>
              Manager \xB7 {{ statut?.nb_collaborateurs_total ?? 0 }} collaborateur{{ (statut?.nb_collaborateurs_total ?? 0) > 1 ? 's' : '' }}
            </span>
          </div>
        </div>

        <div class="mgr-actions">
          <a [routerLink]="retourRoute" class="mgr-hbtn mgr-hbtn-outline" [title]="'Revenir \xE0 : ' + origine.label">
            <i class="isax isax-arrow-left-2"></i>{{ origine.label }}
          </a>
          <a [routerLink]="routes.managerDemandes" class="mgr-hbtn mgr-hbtn-primary">
            <i class="isax isax-task-square"></i>Demandes \xE0 valider
            <span class="mgr-hbtn-count" *ngIf="(statut?.demandes_a_traiter ?? 0) > 0">{{ statut?.demandes_a_traiter }}</span>
          </a>
        </div>
      </div>

      <div class="mgr-stats-row">
        <div class="mgr-stat">
          <div class="mgr-stat-val">{{ statut?.nb_collaborateurs_directs ?? 0 }}</div>
          <div class="mgr-stat-lbl"><i class="isax isax-user"></i>Collaborateurs directs (N-1)</div>
        </div>
        <div class="mgr-stat">
          <div class="mgr-stat-val">{{ statut?.nb_collaborateurs_total ?? 0 }}</div>
          <div class="mgr-stat-lbl"><i class="isax isax-people"></i>\xC9quipe totale (N-1, N-2\u2026)</div>
        </div>
        <div class="mgr-stat" [class.mgr-stat--warn]="(statut?.demandes_a_traiter ?? 0) > 0">
          <div class="mgr-stat-val">{{ statut?.demandes_a_traiter ?? 0 }}</div>
          <div class="mgr-stat-lbl"><i class="isax isax-clock"></i>Demandes \xE0 traiter par moi</div>
        </div>
      </div>
    </div>

    <div class="row">
      <app-manager-sidebar class="col-lg-3"></app-manager-sidebar>
      <div class="col-lg-9">
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>
</div>

<footer class="footer">
  <div class="footer-bottom">
    <div class="container">
      <div class="row row-gap-2">
        <div class="col-md-6">
          <div class="text-center text-md-start">
            <p class="text-white">Copyright &copy; 2025 Pyramide. tout droits reserv\xE9s.</p>
          </div>
        </div>
        <div class="col-md-6">
          <ul class="d-flex align-items-center justify-content-center justify-content-md-end footer-link">
            <li><a [routerLink]="routes.page_term_condition">Terms & Conditions</a></li>
            <li><a [routerLink]="routes.page_privacy_policy">Politique de Confidentialit\xE9</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
`, styles: ["/* src/app/features/manager/manager.component.scss */\n.mgr-content {\n  padding: 21px 0 !important;\n}\n.mgr-header {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e5e7eb;\n  padding: 20px 24px 0;\n  margin-bottom: 24px;\n}\n.mgr-header-top-label {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #6b7280;\n  margin-bottom: 16px;\n}\n.mgr-header-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.mgr-identity {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.mgr-av {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: #EEF2FF;\n  color: #4F46E5;\n  border: 2px solid #4F46E5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.mgr-name {\n  font-size: 17px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 3px;\n}\n.mgr-fonction {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0 0 6px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.mgr-fonction i {\n  font-size: 13px;\n  color: #4F46E5;\n}\n.mgr-role-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  padding: 2px 12px;\n  border-radius: 20px;\n  background: #EEF2FF;\n  color: #4338CA;\n  border: 1px solid #C7D2FE;\n  font-weight: 500;\n}\n.mgr-actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.mgr-hbtn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 8px 18px;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: all 0.15s;\n}\n.mgr-hbtn i {\n  font-size: 15px;\n}\n.mgr-hbtn.mgr-hbtn-outline {\n  background: #fff;\n  color: #1a1a2e;\n  border: 1px solid #d1d5db;\n}\n.mgr-hbtn.mgr-hbtn-outline:hover {\n  border-color: #4F46E5;\n  color: #4F46E5;\n}\n.mgr-hbtn.mgr-hbtn-primary {\n  background: #4F46E5;\n  color: #fff;\n  border: 1px solid #4F46E5;\n}\n.mgr-hbtn.mgr-hbtn-primary:hover {\n  background: #4338CA;\n  border-color: #4338CA;\n}\n.mgr-hbtn-count {\n  background: #fff;\n  color: #4338CA;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 0 7px;\n  margin-left: 2px;\n}\n.mgr-stats-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  padding: 16px 0 20px;\n  border-top: 1px solid #f0f0f0;\n}\n.mgr-stat {\n  background: #f8fafc;\n  border: 1px solid #e9ecef;\n  border-top: 3px solid #4F46E5;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.mgr-stat--warn {\n  background: #fff8ee;\n  border-color: #f5c77e;\n  border-top-color: #f59e0b;\n}\n.mgr-stat-val {\n  font-size: 26px;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.1;\n}\n.mgr-stat-lbl {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 5px;\n}\n.mgr-stat-lbl i {\n  font-size: 13px;\n}\n@media (max-width: 767px) {\n  .mgr-stats-row {\n    grid-template-columns: 1fr;\n  }\n  .mgr-header {\n    padding: 16px 16px 0;\n  }\n}\n/*# sourceMappingURL=manager.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: ManagerService }, { type: RoleRedirectService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManagerComponent, { className: "ManagerComponent", filePath: "app/features/manager/manager.component.ts", lineNumber: 19 });
})();
export {
  ManagerComponent
};
//# sourceMappingURL=chunk-CRO64KKP.js.map
