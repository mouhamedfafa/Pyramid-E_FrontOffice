import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-F67U43FE.js";

// src/app/features/instructor/common/instructor-theme.service.ts
var InstructorThemeService = class _InstructorThemeService {
  STORAGE_KEY = "instructor-sidebar-theme";
  theme$ = new BehaviorSubject(this.loadTheme());
  loadTheme() {
    return localStorage.getItem(this.STORAGE_KEY) || "caramel";
  }
  setTheme(theme) {
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.theme$.next(theme);
  }
  static \u0275fac = function InstructorThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InstructorThemeService, factory: _InstructorThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  InstructorThemeService
};
//# sourceMappingURL=chunk-KMQHEM2Y.js.map
