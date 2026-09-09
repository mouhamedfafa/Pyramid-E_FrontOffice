import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  HttpClient
} from "./chunk-YONGDJMG.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-F67U43FE.js";

// src/app/shared/service/direction/direction.service.ts
var DirectionService = class _DirectionService {
  http;
  baseUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getHeaders() {
    const token = localStorage.getItem("pyramide_token");
    return { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
  }
  getEntrepriseId() {
    const user = JSON.parse(localStorage.getItem("pyramide_user") || "{}");
    return user.entreprise_id;
  }
  getAll(params) {
    const entrepriseId = this.getEntrepriseId();
    let url = `${this.baseUrl}/entreprises/${entrepriseId}/directions`;
    const queryParts = [];
    if (params?.type)
      queryParts.push(`type=${params.type}`);
    if (params?.parent_id)
      queryParts.push(`parent_id=${params.parent_id}`);
    if (params?.racines_only)
      queryParts.push(`racines_only=1`);
    if (params?.search)
      queryParts.push(`search=${encodeURIComponent(params.search)}`);
    if (queryParts.length)
      url += "?" + queryParts.join("&");
    return this.http.get(url, { headers: this.getHeaders() });
  }
  getArborescence() {
    const entrepriseId = this.getEntrepriseId();
    return this.http.get(`${this.baseUrl}/entreprises/${entrepriseId}/directions/arborescence`, { headers: this.getHeaders() });
  }
  getById(id) {
    const entrepriseId = this.getEntrepriseId();
    return this.http.get(`${this.baseUrl}/entreprises/${entrepriseId}/directions/${id}`, { headers: this.getHeaders() });
  }
  create(data) {
    const entrepriseId = this.getEntrepriseId();
    return this.http.post(`${this.baseUrl}/entreprises/${entrepriseId}/directions`, data, { headers: this.getHeaders() });
  }
  update(id, data) {
    const entrepriseId = this.getEntrepriseId();
    return this.http.put(`${this.baseUrl}/entreprises/${entrepriseId}/directions/${id}`, data, { headers: this.getHeaders() });
  }
  delete(id) {
    const entrepriseId = this.getEntrepriseId();
    return this.http.delete(`${this.baseUrl}/entreprises/${entrepriseId}/directions/${id}`, { headers: this.getHeaders() });
  }
  affecterEmployes(directionId, userIds) {
    const entrepriseId = this.getEntrepriseId();
    return this.http.post(`${this.baseUrl}/entreprises/${entrepriseId}/directions/${directionId}/affecter`, { user_ids: userIds }, { headers: this.getHeaders() });
  }
  retirerEmployes(directionId, userIds) {
    const entrepriseId = this.getEntrepriseId();
    return this.http.post(`${this.baseUrl}/entreprises/${entrepriseId}/directions/${directionId}/retirer`, { user_ids: userIds }, { headers: this.getHeaders() });
  }
  static \u0275fac = function DirectionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DirectionService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DirectionService, factory: _DirectionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DirectionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  DirectionService
};
//# sourceMappingURL=chunk-OSTMQ554.js.map
