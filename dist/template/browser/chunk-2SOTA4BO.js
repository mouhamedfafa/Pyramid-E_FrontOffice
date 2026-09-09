import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-F67U43FE.js";

// src/app/features/adminrh/common/adminrh-theme.service.ts
var AdminrhThemeService = class _AdminrhThemeService {
  STORAGE_KEY = "adminrh-sidebar-theme";
  theme$ = new BehaviorSubject(this.loadTheme());
  loadTheme() {
    return localStorage.getItem(this.STORAGE_KEY) || "navy";
  }
  setTheme(theme) {
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.theme$.next(theme);
  }
  static \u0275fac = function AdminrhThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminrhThemeService, factory: _AdminrhThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AdminrhThemeService
};
//# sourceMappingURL=chunk-2SOTA4BO.js.map
