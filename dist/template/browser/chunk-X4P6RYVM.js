import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-XZLGMMSK.js";
import {
  BehaviorSubject,
  Injectable,
  catchError,
  map,
  of,
  setClassMetadata,
  shareReplay,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ON7U2Q36.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/shared/service/manager/manager.service.ts
var STATUT_VIDE = {
  status: false,
  is_manager: false,
  nb_collaborateurs_directs: 0,
  nb_collaborateurs_total: 0,
  demandes_a_traiter: 0
};
var ManagerService = class _ManagerService {
  http;
  apiUrl = `${environment.apiUrl}/manager`;
  statut$ = new BehaviorSubject(STATUT_VIDE);
  statutRequest$;
  constructor(http) {
    this.http = http;
  }
  /** Statut manager (mis en cache). `force` pour recharger, ex. après une décision. */
  getStatut(force = false) {
    if (!this.statutRequest$ || force) {
      this.statutRequest$ = this.http.get(`${this.apiUrl}/statut`).pipe(catchError(() => of(STATUT_VIDE)), tap((s) => this.statut$.next(s)), shareReplay(1));
    }
    return this.statutRequest$;
  }
  isManager() {
    return this.getStatut().pipe(map((s) => !!s.is_manager));
  }
  getDashboard(perimetre = "tous") {
    return this.http.get(`${this.apiUrl}/dashboard`, { params: { perimetre } });
  }
  getEquipe(filtres = {}) {
    return this.http.get(`${this.apiUrl}/equipe`, { params: this.toParams(filtres) });
  }
  getArbre() {
    return this.http.get(`${this.apiUrl}/equipe/arbre`);
  }
  getCollaborateur(id) {
    return this.http.get(`${this.apiUrl}/equipe/${id}`);
  }
  getDemandes(filtres = {}) {
    return this.http.get(`${this.apiUrl}/demandes`, {
      params: this.toParams(__spreadProps(__spreadValues({}, filtres), { a_traiter: filtres.a_traiter ? 1 : void 0 }))
    });
  }
  validerDemande(id, commentaire_manager) {
    return this.http.put(`${this.apiUrl}/demandes/${id}/valider`, { commentaire_manager }).pipe(tap(() => this.getStatut(true).subscribe()));
  }
  refuserDemande(id, motif_refus_manager, commentaire_manager) {
    return this.http.put(`${this.apiUrl}/demandes/${id}/refuser`, { motif_refus_manager, commentaire_manager }).pipe(tap(() => this.getStatut(true).subscribe()));
  }
  /** À appeler à la déconnexion / changement d'utilisateur. */
  reset() {
    this.statutRequest$ = void 0;
    this.statut$.next(STATUT_VIDE);
  }
  toParams(obj) {
    let params = new HttpParams();
    Object.entries(obj).forEach(([k, v]) => {
      if (v !== void 0 && v !== null && v !== "")
        params = params.set(k, String(v));
    });
    return params;
  }
  static \u0275fac = function ManagerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManagerService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ManagerService, factory: _ManagerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagerService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ManagerService
};
//# sourceMappingURL=chunk-X4P6RYVM.js.map
