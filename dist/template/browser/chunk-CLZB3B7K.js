import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-F67U43FE.js";

// src/app/features/student/common/student-theme.service.ts
var StudentThemeService = class _StudentThemeService {
  STORAGE_KEY = "student-sidebar-theme";
  theme$ = new BehaviorSubject(this.loadTheme());
  loadTheme() {
    return localStorage.getItem(this.STORAGE_KEY) || "teal";
  }
  setTheme(theme) {
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.theme$.next(theme);
  }
  static \u0275fac = function StudentThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StudentThemeService, factory: _StudentThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  StudentThemeService
};
//# sourceMappingURL=chunk-CLZB3B7K.js.map
