// src/app/features/manager/common/manager-ui.utils.ts
function espaceOrigine(layout) {
  switch (layout) {
    case "superadmin":
      return { layout, label: "Espace Super Admin", sub: "Administration de la plateforme", icon: "isax-shield-tick" };
    case "adminrh":
      return { layout, label: "Espace RH", sub: "Gestion RH de votre entreprise", icon: "isax-buildings-2" };
    case "formateur":
      return { layout, label: "Espace formateur", sub: "Vos formations et apprenants", icon: "isax-teacher" };
    case "employe":
      return { layout, label: "Espace employ\xE9", sub: "Vos formations et demandes", icon: "isax-user-octagon" };
    default:
      return { layout: null, label: "Mon espace", sub: "Retour \xE0 votre espace", icon: "isax-home-2" };
  }
}
function initiales(u) {
  if (!u)
    return "?";
  const pn = `${u.prenom?.charAt(0) ?? ""}${u.nom?.charAt(0) ?? ""}`;
  if (pn)
    return pn.toUpperCase();
  return (u.name ?? "?").split(" ").map((w) => w.charAt(0)).join("").substring(0, 2).toUpperCase();
}
function nomComplet(u) {
  if (!u)
    return "\u2014";
  return `${u.prenom ?? ""} ${u.nom ?? ""}`.trim() || u.name || "\u2014";
}
function libelleNiveau(niveau) {
  return niveau ? `N-${niveau}` : "\u2014";
}
function classeProgression(p) {
  if (p >= 75)
    return "mgr-progress--high";
  if (p < 30)
    return "mgr-progress--low";
  return "";
}
function classeStatutDemande(statut) {
  return {
    en_attente_manager: "mgr-badge--manager",
    en_attente: "mgr-badge--rh",
    validee: "mgr-badge--validee",
    refusee: "mgr-badge--refusee",
    annulee: "mgr-badge--annulee"
  }[statut] ?? "";
}
function libelleTypeDemande(type) {
  return { formation: "Formation", catalogue: "Catalogue", parcours: "Parcours", session: "Session" }[type] ?? type;
}
function iconeTypeDemande(type) {
  return { formation: "isax-book-1", catalogue: "isax-book-square", parcours: "isax-routing-2", session: "isax-calendar-1" }[type] ?? "isax-document-text";
}

export {
  espaceOrigine,
  initiales,
  nomComplet,
  libelleNiveau,
  classeProgression,
  classeStatutDemande,
  libelleTypeDemande,
  iconeTypeDemande
};
//# sourceMappingURL=chunk-4GCFTWOO.js.map
