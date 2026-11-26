// @ts-nocheck
/* eslint-disable */
/**
 * Moteur d'affichage des dashboards KPI — repris tel quel du modèle « Pyramide LMS — Tableaux de bord V4.12 »
 * (fichier généré par tools/dashboards/extraire_modele.py : ne pas modifier à la main, régénérer depuis le modèle).
 *
 * Seuls le serveur simulé et le sélecteur de profils de démonstration sont retirés. Le moteur s'exécute dans le
 * Shadow DOM du composant : « document » y désigne la racine du composant (styles et identifiants isolés de
 * l'application), et toutes les requêtes passent par le transport fourni (HttpClient, API Laravel).
 * Toute donnée dynamique est échappée par esc() ou insérée via textContent, comme dans le modèle.
 */
export interface TransportDashboard {
  (method: string, path: string, query: Record<string, string> | null, body: unknown): Promise<any>;
}

export interface MoteurDashboard {
  demarrer(): Promise<void>;
  detruire(): void;
}

export function creerMoteurDashboard(shadow: ShadowRoot, racine: HTMLElement, transport: TransportDashboard, libelleUtilisateur: string): MoteurDashboard {
  var __ecouteurs = [];
  var document = {
    getElementById: function (id) { return shadow.getElementById(id); },
    querySelector: function (s) { return shadow.querySelector(s); },
    querySelectorAll: function (s) { return shadow.querySelectorAll(s); },
    createElement: function (t) { return window.document.createElement(t); },
    createTextNode: function (t) { return window.document.createTextNode(t); },
    get body() { return racine; },
    get documentElement() { return racine; },
    get activeElement() { return shadow.activeElement; },
    readyState: 'complete',
    addEventListener: function (type, fn, opts) {
      var cible = type === 'scroll' ? window : racine;   // le défilement est celui de la page
      cible.addEventListener(type, fn, opts);
      __ecouteurs.push([cible, type, fn, opts]);
    }
  };
/* Configuration injectée à la construction (build.py). Aucun secret ici : uniquement des paramètres publics. */
var PY_CONFIG = {mode:'prod',realm:'',profiles:[]};

/* ═══ Utilitaires purs (sans DOM) — testables sous Node ═══ */
var OK='#1E8A5A', WARN='#C8860A', BAD='#C2412D', LVC=[OK,WARN,BAD];

/* Toute donnée dynamique insérée dans du HTML passe par esc() : les données du serveur ne sont JAMAIS interprétées comme du HTML. */
function esc(s){
  return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});
}
function fmtN(x){ return typeof x==='number'&&isFinite(x) ? x.toLocaleString('fr-FR',{maximumFractionDigits:2}) : esc(x); }
var r0=Math.round;
var ICO_MAP={"👥": "<circle cx=\"9\" cy=\"8\" r=\"3.2\"/><path d=\"M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6\"/><path d=\"M16 5.2a3 3 0 010 5.6M18 14.3c1.9.8 3.2 2.7 3.2 5.2\"/>", "📋": "<rect x=\"5\" y=\"4\" width=\"14\" height=\"17\" rx=\"2\"/><path d=\"M9 4h6v3H9zM9 12h6M9 16h4\"/>", "📊": "<path d=\"M5 20v-9M12 20V4M19 20v-6\"/>", "🎓": "<path d=\"M2 9l10-5 10 5-10 5z\"/><path d=\"M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5\"/>", "👤": "<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7\"/>", "🧑‍💼": "<rect x=\"3\" y=\"8\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18\"/>", "💼": "<rect x=\"3\" y=\"8\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18\"/>", "🏛": "<path d=\"M3 9l9-5 9 5zM5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 20h18\"/>", "🖥": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8 20h8M12 16v4\"/>", "🛡": "<path d=\"M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z\"/><path d=\"M9 12l2 2 4-4\"/>", "🛠": "<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1\"/>", "📈": "<path d=\"M3 17l6-6 4 4 8-8\"/><path d=\"M15 7h6v6\"/>", "🧭": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M15.5 8.5l-2 5-5 2 2-5z\"/>", "📣": "<path d=\"M3 11v3l12 5V6zM15 9c3 0 5 1.2 5 3s-2 3-5 3M6 15l1.5 5\"/>", "🧩": "<rect x=\"4\" y=\"4\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"13\" y=\"4\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"4\" y=\"13\" width=\"7\" height=\"7\" rx=\"1.5\"/><path d=\"M16.5 13v7M13 16.5h7\"/>", "🤝": "<circle cx=\"9\" cy=\"12\" r=\"5\"/><circle cx=\"15\" cy=\"12\" r=\"5\"/>", "🧪": "<path d=\"M9 3h6M10 3v6L4.5 19a1.5 1.5 0 001.3 2h12.4a1.5 1.5 0 001.3-2L14 9V3\"/><path d=\"M7.5 15h9\"/>", "🎤": "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5 11a7 7 0 0014 0M12 18v3\"/>", "🚩": "<path d=\"M5 21V4M5 4h11l-2 4 2 4H5\"/>", "⚠": "<path d=\"M12 3l10 18H2z\"/><path d=\"M12 10v5M12 18h.01\"/>", "🔒": "<rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 11V8a4 4 0 018 0v3\"/>", "🔌": "<path d=\"M9 3v5M15 3v5M6 8h12v3a6 6 0 01-12 0zM12 17v4\"/>", "🔥": "<path d=\"M12 3c1 4 5 5 5 10a5 5 0 01-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z\"/>", "🎯": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><circle cx=\"12\" cy=\"12\" r=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/>", "🏅": "<circle cx=\"12\" cy=\"14\" r=\"5.5\"/><path d=\"M8 3l4 6 4-6\"/>", "🚀": "<path d=\"M5 19l3-1 8-8c2-2.5 3-6 3-6s-3.5 1-6 3L5 16z\"/><path d=\"M9 15l-3 3M14 10a1 1 0 100-2 1 1 0 000 2z\"/>", "⬇": "<path d=\"M12 4v11M7 11l5 5 5-5M5 20h14\"/>", "✕": "<path d=\"M6 6l12 12M18 6L6 18\"/>"};
var ICO_RX=new RegExp("\ud83e\uddd1\u200d\ud83d\udcbc\\uFE0F?|\ud83d\udc65\\uFE0F?|\ud83d\udccb\\uFE0F?|\ud83d\udcca\\uFE0F?|\ud83c\udf93\\uFE0F?|\ud83d\udc64\\uFE0F?|\ud83d\udcbc\\uFE0F?|\ud83c\udfdb\\uFE0F?|\ud83d\udda5\\uFE0F?|\ud83d\udee1\\uFE0F?|\ud83d\udee0\\uFE0F?|\ud83d\udcc8\\uFE0F?|\ud83e\udded\\uFE0F?|\ud83d\udce3\\uFE0F?|\ud83e\udde9\\uFE0F?|\ud83e\udd1d\\uFE0F?|\ud83e\uddea\\uFE0F?|\ud83c\udfa4\\uFE0F?|\ud83d\udea9\\uFE0F?|\u26a0\\uFE0F?|\ud83d\udd12\\uFE0F?|\ud83d\udd0c\\uFE0F?|\ud83d\udd25\\uFE0F?|\ud83c\udfaf\\uFE0F?|\ud83c\udfc5\\uFE0F?|\ud83d\ude80\\uFE0F?|\u2b07\\uFE0F?|\u2715\\uFE0F?",'g');
function ico(e){ var k=String(e).replace(/\uFE0F/g,''); return ICO_MAP[k]?'<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">'+ICO_MAP[k]+'</svg>':esc(e); }
function icoAll(html){ return String(html).replace(ICO_RX,function(m){return ico(m);}); }


/* Niveau d'un KPI : 0 = dans le seuil, 1 = hors seuil, 2 = critique (Spécifications « profils internes », section 1) */
function lvl(k){
  if(k.n==null) return 0;
  return k.dir==='min' ? (k.n<k.crit?2:(k.n<k.warn?1:0)) : (k.n>k.crit?2:(k.n>k.warn?1:0));
}
function thrText(k){ return k.thrLabel ? esc(k.thrLabel) : (k.dir==='min'?'≥ ':'≤ ')+fmtN(k.warn)+esc(k.unit); }
function collectKpis(p){
  var a=[]; (p.hero||[]).forEach(function(x){a.push(x);});
  (p.sections||[]).forEach(function(s){s.rows.forEach(function(x){a.push(x);});});
  return a;
}

/* Glossaire des indicateurs : explication affichée au survol du nom de l'indicateur.
   Clé = identifiant du KPI. Texte statique, rédigé côté front (aucune donnée serveur). */
var GLOSSARY={
  /* ── Adoption et usage ── */
  stickiness:"Mesure la fidélité d'usage : la part des utilisateurs du mois qui reviennent chaque jour. Plus le ratio est élevé, plus la plateforme fait partie des habitudes de travail.",
  mau:"Nombre d'utilisateurs distincts connectés sur le mois (MAU), la semaine (WAU) et le jour (DAU). Indique l'ampleur réelle de l'usage de la plateforme.",
  growth:"Évolution du nombre d'inscriptions aux Formations par rapport au mois précédent (Month over Month).",
  mobile:"Répartition des connexions entre smartphone et ordinateur. Aide à savoir sur quel support les Employés se forment.",
  /* ── Conformité et complétion ── */
  conf_oblig:"Part des Employés concernés par une Formation obligatoire (réglementaire, sécurité, éthique…) qui l'ont terminée dans les délais.",
  compl_oblig:"Part des inscriptions à des Formations obligatoires qui sont terminées.",
  compl_global:"Part de l'ensemble des inscriptions, obligatoires ou non, menées jusqu'au bout.",
  ecarts:"Nombre de situations où un Employé n'est pas à jour d'une Formation obligatoire pour son poste.",
  echeances:"Formations obligatoires arrivant à échéance dans les 30, 60 et 90 prochains jours, pour anticiper les relances.",
  d_conf:"Taux de conformité réglementaire tous périmètres confondus : part des obligations de Formation respectées dans l'organisation.",
  d_risk:"Nombre d'Employés en retard sur une Formation obligatoire dont le défaut expose l'organisation à un risque légal ou de sécurité.",
  /* ── Compétences ── */
  couverture:"Part des compétences jugées clés pour l'organisation qui sont maîtrisées par au moins le nombre d'Employés requis.",
  decay:"Baisse estimée d'une compétence lorsqu'elle n'a pas été pratiquée ou réévaluée depuis longtemps. Sert à déclencher des remises à niveau.",
  montee:"Gain moyen de niveau de compétence mesuré entre l'évaluation avant et après la Formation.",
  d_comp:"Indice synthétique de progression des compétences dans l'organisation sur la période, toutes Formations confondues.",
  e_gap:"Différence entre votre niveau actuel et le niveau attendu pour votre poste (ou le poste que vous visez), compétence par compétence.",
  pdi:"Part des Plans de Développement Individuel (objectifs de Formation fixés avec le manager) qui sont terminés.",
  mobint:"Part des Employés certifiés qui ont ensuite obtenu une mobilité interne (promotion, changement de poste).",
  d_succession:"Part des postes clés pour lesquels au moins un successeur identifié a suivi le parcours de Formation prévu.",
  d_ret:"Part des Employés formés sur la période qui sont toujours dans l'organisation 12 mois après.",
  /* ── Efficacité et budget ── */
  correl:"Mesure le lien entre le volume de Formation suivi et l'évolution de la performance (évaluations annuelles). Proche de 1 : lien fort ; proche de 0 : pas de lien visible.",
  adm_correl:"Mesure le lien entre le volume de Formation suivi et l'évolution de la performance (évaluations annuelles). Proche de 1 : lien fort ; proche de 0 : pas de lien visible.",
  d_roi:"Retour sur investissement : gains estimés (productivité, réduction d'erreurs, rétention) rapportés au coût total des Formations.",
  d_align:"Part des heures de Formation consacrées aux thèmes définis comme prioritaires par la Direction.",
  cout:"Coût total des Formations divisé par le nombre d'Employés formés sur la période.",
  adm_cout:"Coût total des Formations divisé par le nombre d'Employés formés sur la période.",
  anc:"Plus grand écart de taux de complétion entre deux tranches d'ancienneté. Signale un groupe moins bien accompagné.",
  ecartdep:"Plus grand écart de taux de complétion entre deux départements. Signale un service en retrait.",
  genre:"Répartition des heures de Formation entre femmes et hommes, à comparer à la répartition de l'effectif.",
  adm_genre:"Répartition des heures de Formation entre femmes et hommes, à comparer à la répartition de l'effectif.",
  obsol:"Formations encore proposées comparées à celles dont le contenu n'a pas été revu depuis trop longtemps.",
  maj:"Part des contenus de Formation revus ou mis à jour dans le délai prévu.",
  nps:"Net Promoter Score : part des participants prêts à recommander la Formation moins la part des détracteurs. Va de -100 à +100 ; au-dessus de 30, c'est bon.",
  f_nps:"Net Promoter Score de vos Formations : recommandateurs moins détracteurs, de -100 à +100.",
  /* ── Manager ── */
  m_ecart:"Différence entre la progression moyenne de votre équipe et la moyenne de l'organisation.",
  m_dem:"Demandes de Formation de vos Employés qui attendent votre validation.",
  /* ── Formateur ── */
  f_drop:"Étape d'une Formation où le plus grand nombre de participants abandonnent. C'est le contenu à retravailler en priorité.",
  f_prog:"Écart moyen entre le score obtenu au test avant la Formation et celui obtenu après.",
  f_live:"Part des inscrits réellement présents aux sessions en direct (classe virtuelle ou présentiel).",
  /* ── Employé ── */
  e_streak:"Nombre de jours consécutifs avec une activité de Formation, et badges gagnés.",
  e_rank:"Votre position parmi les Employés de votre organisation. Information privée, visible de vous seul ; vous pouvez la masquer.",
  /* ── Consultant externe / supervision ── */
  c_prog:"Écart moyen entre le score des participants avant et après vos sessions.",
  c_real:"Part des jours ou sessions prévus au contrat effectivement réalisés.",
  c_rein:"Part des participants qui s'inscrivent à une nouvelle Formation que vous animez.",
  c_taux:"Montant facturé rapporté au montant prévu au contrat pour la période.",
  c_nps:"Net Promoter Score de la mission : recommandateurs moins détracteurs, de -100 à +100.",
  s_perf:"Note synthétique du consultant combinant satisfaction, réussite des participants, respect du calendrier et du budget.",
  s_renou:"Part des consultants dont le contrat est recommandé au renouvellement au vu de leurs résultats.",
  s_ecart:"Écart moyen entre le montant facturé par les consultants et le budget prévu.",
  s_roi:"Gains estimés des Formations animées par un consultant rapportés à son coût.",
  /* ── Plateforme : technique ── */
  sa_sla:"Part du temps où la plateforme est accessible, engagement contractuel (SLA) envers les clients.",
  si_avail:"Part du temps où la plateforme a été accessible pour votre organisation sur la période.",
  sa_p50:"Temps de réponse médian : la moitié des requêtes sont traitées plus vite que cette valeur.",
  sa_p95:"95 % des requêtes sont traitées plus vite que cette valeur. Reflète l'expérience des utilisateurs les moins bien servis.",
  si_p95:"95 % des requêtes sont traitées plus vite que cette valeur. Reflète l'expérience des utilisateurs les moins bien servis.",
  sa_mttr:"Mean Time To Restore : temps moyen pour rétablir le service après un incident.",
  qa_mttr:"Mean Time To Restore : temps moyen pour rétablir le service après un incident.",
  sa_inc:"Temps moyen pour résoudre un incident de priorité 1, qui bloque l'usage pour un ou plusieurs clients.",
  sa_bg:"Accès d'urgence exceptionnels (« bris de glace ») aux données d'un client, accordés temporairement, tracés et justifiés par un ticket.",
  sa_bgm:"Nombre d'accès d'urgence exceptionnels (« bris de glace ») ouverts depuis le début du mois.",
  sa_mfa:"Part des comptes de l'équipe Pyramide LMS protégés par une double authentification.",
  si_mfa:"Part des comptes de votre organisation protégés par une double authentification.",
  sa_cost:"Coût d'hébergement et d'infrastructure divisé par le nombre d'entités clientes actives.",
  sa_sto:"Part de la capacité de stockage totale actuellement utilisée.",
  /* ── Plateforme : commercial et clients ── */
  sa_mrr:"Monthly Recurring Revenue : revenu d'abonnement mensuel récurrent de l'ensemble des clients.",
  sa_newmrr:"Revenu mensuel récurrent apporté par les nouveaux clients signés ce mois-ci.",
  gc_churn:"Part des clients (ou du revenu) perdus sur le mois.",
  gc_grr:"Gross Revenue Retention : part du revenu récurrent conservé sur un an, hors ventes additionnelles. Ne peut pas dépasser 100 %.",
  gc_nrr:"Net Revenue Retention : revenu récurrent conservé sur un an, ventes additionnelles comprises. Au-dessus de 100 %, les clients existants rapportent plus qu'avant.",
  gc_health:"Note de santé des comptes clients combinant usage, tickets, satisfaction et paiements. Un score bas signale un risque de départ.",
  sa_slasup:"Part des tickets support traités dans le délai contractuel.",
  sl_pipe:"Valeur totale des opportunités commerciales en cours, toutes étapes confondues.",
  sl_cycle:"Temps moyen entre le premier contact et la signature.",
  sl_quota:"Chiffre d'affaires signé rapporté à l'objectif commercial de la période.",
  mk_mql:"Marketing Qualified Lead : prospect qui correspond à la cible et a montré un intérêt suffisant pour être transmis aux commerciaux.",
  mk_conv:"Part des prospects devenus des MQL (prospects qualifiés transmis aux commerciaux).",
  mk_cpl:"Budget marketing dépensé divisé par le nombre de prospects générés.",
  mk_visconv:"Part des visiteurs du site qui laissent leurs coordonnées.",
  mk_sea:"Prospects venus de la publicité payante sur les moteurs de recherche (Google Ads…).",
  mk_seo:"Prospects venus des résultats naturels des moteurs de recherche, sans publicité.",
  mk_roi:"Revenu généré par les campagnes rapporté à leur coût.",
  /* ── Produit ── */
  pr_velo:"Volume de travail livré par l'équipe à chaque sprint (cycle de développement de 2 semaines), mesuré en points d'effort.",
  pr_sprint:"Part des tâches prévues dans le sprint qui ont été terminées.",
  pr_churn:"Part des utilisateurs qui arrêtent d'utiliser une fonctionnalité après l'avoir adoptée.",
  pr_idea:"Temps moyen entre la validation d'une idée et sa mise en production.",
  pr_nps:"Net Promoter Score du produit : recommandateurs moins détracteurs, de -100 à +100.",
  /* ── QA ── */
  qa_cov:"Part du code vérifiée par des tests automatiques.",
  qa_reg2:"Part des fonctionnalités existantes couvertes par des tests qui vérifient qu'une nouvelle version ne les casse pas.",
  qa_flaky:"Part des tests automatiques qui réussissent ou échouent de façon aléatoire, sans changement du code. Ils réduisent la confiance dans les résultats.",
  qa_ci:"Part des exécutions de la chaîne d'intégration continue (tests automatiques à chaque modification) qui réussissent.",
  qa_lead:"Temps moyen entre la validation d'une modification du code et sa mise en production.",
  qa_roll:"Part des mises en production annulées pour revenir à la version précédente.",
  qa_deploy:"Nombre moyen de mises en production sur la période.",
  qi_rate:"Part des bugs signalés qui ont été corrigés sur la période.",
  /* ── DSI ── */
  si_scim:"Part des synchronisations automatiques des comptes (créations, départs) entre votre annuaire RH et Pyramide LMS qui réussissent.",
  si_sync:"Nombre de comptes synchronisés comparé à l'effectif déclaré. Un écart signale des comptes manquants ou en trop.",
  si_sso:"Part des connexions par authentification unique (identifiants de l'entreprise) qui réussissent.",
  si_ssostat:"État de la connexion entre Pyramide LMS et votre fournisseur d'identité (authentification unique SSO/SAML).",
  si_provdelai:"Temps moyen entre l'arrivée d'un nouvel Employé dans l'annuaire et l'ouverture de son compte Pyramide LMS.",
  si_rgpd:"Temps moyen pour traiter une demande d'accès, de rectification ou de suppression de données personnelles.",
  si_anom:"Erreurs détectées lors des échanges automatiques de données avec vos autres logiciels sur 30 jours.",
  si_stock:"Volume de données (contenus, vidéos, documents) stocké par votre organisation comparé au quota de votre abonnement.",
  /* ── Compléments ── */
  activation:"Part des comptes créés dont l'Employé s'est connecté au moins une fois et a démarré une Formation.",
  abandon:"Part des Formations commencées puis abandonnées avant la fin.",
  depth:"Part moyenne de chaque contenu réellement consultée (pages lues, vidéo regardée). Distingue un simple clic d'un vrai suivi.",
  equite:"Note de 0 à 100 indiquant si l'accès à la Formation est réparti équitablement entre départements, genres, anciennetés et sites. 100 = aucune inégalité.",
  d_invest:"Budget de Formation rapporté à la masse salariale. Repère courant pour comparer l'effort de Formation entre organisations.",
  e_pdi:"Part des objectifs de votre Plan de Développement Individuel (fixés avec votre manager) que vous avez atteints.",
  f_abmod:"Part des participants qui quittent la Formation à chaque module. Montre où se situent les décrochages.",
  f_video:"Part moyenne de chaque vidéo réellement regardée par les participants.",
  c_occ:"Part des places proposées dans vos sessions qui sont effectivement occupées.",
  c_heur:"Heures de Formation réalisées pouvant être facturées au client selon le contrat.",
  c_rep:"Part des participants qui ont répondu à l'évaluation de fin de session.",
  c_cal:"Part des sessions tenues aux dates prévues au contrat.",
  s_conf:"Part des engagements contractuels (livrables, délais, qualité) respectés par les consultants.",
  s_alerte:"Nombre de consultants dont le score de performance est passé sous le niveau minimum attendu.",
  gc_mrr:"Revenu d'abonnement mensuel récurrent de l'ensemble des comptes que vous gérez.",
  gc_risk:"Comptes dont le score de santé (usage, tickets, satisfaction, paiements) est inférieur à 50 sur 100 : risque élevé de départ.",
  gc_ttv:"Time To Value : temps moyen entre la signature et le moment où le client obtient un premier résultat concret (premiers Employés formés).",
  gc_adopt:"Part des clients qui utilisent réellement les fonctionnalités jugées essentielles à la réussite du compte.",
  gc_churnn:"Nombre de clients ayant résilié leur abonnement sur le mois.",
  gc_inactive:"Comptes clients dont aucun utilisateur ne s'est connecté depuis 30 jours : signal fort de désengagement.",
  gc_upn:"Clients existants pour lesquels une vente additionnelle (modules, utilisateurs supplémentaires) a été repérée.",
  gc_upm:"Montant mensuel des ventes additionnelles réalisées auprès des clients existants.",
  gc_follow:"Temps moyen entre deux prises de contact avec un même client.",
  gc_closure:"Part des tickets clients ouverts qui ont été résolus et clôturés sur la période.",
  sa_cac:"Coût d'acquisition client : dépenses marketing et commerciales divisées par le nombre de nouveaux clients signés.",
  sa_5xx:"Part des requêtes qui échouent à cause d'une erreur du serveur (et non de l'utilisateur).",
  si_apierr:"Part des appels entre vos logiciels et Pyramide LMS qui échouent (4xx : requête refusée, 5xx : erreur serveur).",
  si_apivol:"Nombre d'échanges automatiques de données entre vos autres logiciels et Pyramide LMS sur 30 jours.",
  si_revue:"Date de la dernière vérification des droits d'accès : qui peut voir et faire quoi dans Pyramide LMS.",
  si_blk:"Tentatives de connexion refusées (mauvais mot de passe répété, adresse suspecte). Un pic peut signaler une attaque.",
  sa_blk:"Tentatives de connexion refusées (mauvais mot de passe répété, adresse suspecte). Un pic peut signaler une attaque.",
  sa_aud:"Ancienneté du dernier audit de sécurité réalisé par un cabinet indépendant.",
  sa_incn:"Nombre d'incidents de priorité 1 (blocage du service pour au moins un client) sur 30 jours.",
  sa_sec:"Événements ayant pu compromettre la confidentialité ou l'intégrité des données sur 30 jours.",
  sl_lossrate:"Part des opportunités traitées qui ont été perdues.",
  sl_conv:"Part des opportunités traitées (gagnées ou perdues) qui ont été signées.",
  sl_followup:"Relances prévues auprès de prospects dont la date est dépassée.",
  pr_adopt:"Part des utilisateurs ayant utilisé au moins une fois une fonctionnalité livrée récemment.",
  pr_delay:"Part des fonctionnalités de la feuille de route livrées à la date annoncée.",
  pr_backlog:"Nombre de demandes et d'idées en attente de développement.",
  pr_bugs:"Bugs bloquants découverts dans les 30 jours suivant une nouvelle version.",
  qa_cfr:"Change Failure Rate : part des mises en production qui provoquent un incident ou nécessitent une correction urgente.",
  qa_esc:"Part des bugs découverts par les clients en production plutôt que par l'équipe QA avant la mise en ligne.",
  qi_esc:"Part des bugs découverts par les clients en production plutôt que par l'équipe QA avant la mise en ligne.",
  qa_sev:"Bugs non corrigés classés critiques (service bloqué) ou majeurs (fonction importante dégradée).",
  qa_auto:"Répartition entre tests exécutés automatiquement et tests faits à la main.",
  qa_env:"Environnements de test disponibles et fonctionnels pour vérifier les nouvelles versions."
};
/* Libellé avec explication au survol (ou au focus clavier). */
function kdef(k){
  var g=GLOSSARY[k.id]||'', f=k.na?'':(k.info||'');
  if(k.na) g=(g?g+' ':'')+(k.info||'');
  if(!g) return esc(k.label);
  return '<span class="kdef" tabindex="0" data-def="'+esc(g)+'" data-calc="'+esc(f)+'">'+esc(k.label)+'</span>';
}

/* ═══ Widgets SVG / HTML — fonctions pures, toutes les valeurs dynamiques sont échappées ═══ */
function trendBadge(delta,unit){ var up=delta>=0; return '<span class="trend '+(up?'trend-up':'trend-down')+'">'+(up?'▲ +':'▼ ')+fmtN(delta)+esc(unit)+'</span>'; }
function wGauge(v,max,u,col,size,thr){
  size=size||168; var cx=size/2, cy=size*0.6, r=size/2-16, pct=Math.max(0,Math.min(1,v/max)), arc=Math.PI*r, x1=cx-r, x2=cx+r;
  var d='M '+x1+' '+cy+' A '+r+' '+r+' 0 0 1 '+x2+' '+cy, tick='';
  if(typeof thr==='number'&&isFinite(thr)&&thr>0&&thr<=max){ var a=Math.PI*(1-thr/max), c=Math.cos(a), s=Math.sin(a);
    tick='<line class="g-tick" x1="'+(cx+(r-11)*c)+'" y1="'+(cy-(r-11)*s)+'" x2="'+(cx+(r+10)*c)+'" y2="'+(cy-(r+10)*s)+'" stroke-width="2.5" stroke-linecap="round"/>'; }
  return '<svg width="'+size+'" height="'+(size*0.68)+'" viewBox="0 0 '+size+' '+(size*0.68)+'">'+
    '<path class="g-track" d="'+d+'" stroke-width="13" fill="none" stroke-linecap="round"/>'+
    '<path d="'+d+'" stroke="'+col+'" stroke-width="13" fill="none" stroke-linecap="round" stroke-dasharray="'+(pct*arc)+' '+arc+'"/>'+tick+
    '<text x="'+cx+'" y="'+(cy-4)+'" text-anchor="middle" class="gauge-val">'+fmtN(v)+(u==='%'?'%':'')+'</text>'+
    (u!=='%'?'<text x="'+cx+'" y="'+(cy+13)+'" text-anchor="middle" class="gauge-unit">'+esc(u)+'</text>':'')+'</svg>';
}
function wRing(v,max,u,col,size,thr){
  size=size||120; var r=size/2-11, c=size/2, circ=2*Math.PI*r, pct=Math.max(0,Math.min(1,v/max)), tick='';
  if(typeof thr==='number'&&isFinite(thr)&&thr>0&&thr<=max){ var a=2*Math.PI*thr/max-Math.PI/2, ca=Math.cos(a), sa=Math.sin(a);
    tick='<line class="g-tick" x1="'+(c+(r-9)*ca)+'" y1="'+(c+(r-9)*sa)+'" x2="'+(c+(r+9)*ca)+'" y2="'+(c+(r+9)*sa)+'" stroke-width="2.5" stroke-linecap="round"/>'; }
  return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 '+size+' '+size+'">'+
    '<circle class="g-track" cx="'+c+'" cy="'+c+'" r="'+r+'" stroke-width="12" fill="none"/>'+
    '<circle cx="'+c+'" cy="'+c+'" r="'+r+'" stroke="'+col+'" stroke-width="12" fill="none" stroke-linecap="round" stroke-dasharray="'+(pct*circ)+' '+circ+'" transform="rotate(-90 '+c+' '+c+')"/>'+tick+
    '<text x="'+c+'" y="'+(c+7)+'" text-anchor="middle" class="ring-center">'+fmtN(v)+esc(u)+'</text></svg>';
}
function wBar(v,max,u,col,tl,thr){
  var pct=Math.max(0,Math.min(100,(v/max)*100)), tp=(typeof thr==='number'&&isFinite(thr)&&thr>0&&thr<=max)?Math.min(100,thr/max*100):null;
  return '<div class="bar-wrap"><div class="bar-top"><span class="bar-num">'+fmtN(v)+esc(u)+'</span>'+(tl?'<span class="bar-target">'+esc(tl)+'</span>':'')+'</div>'+
    '<div class="bar-track"><div class="bar-fill" style="width:'+pct+'%;background:'+col+'"></div>'+(tp!=null?'<span class="bar-tick" style="left:calc('+tp+'% - 1px)"></span>':'')+'</div></div>';
}
function wCounter(txt,unit,delta,du,col){
  return '<div class="trend-wrap"><div class="counter-num"'+(col?' style="color:'+col+'"':'')+'>'+esc(txt)+'</div><div class="counter-unit">'+esc(unit)+'</div>'+
    (delta!=null?trendBadge(delta,du):'')+'</div>';
}
function wStreak(icons,days){
  return '<div><div class="badge-row">'+icons.map(function(i){return '<div class="badge-ico">'+esc(i)+'</div>';}).join('')+'</div><div class="streak">🔥 '+fmtN(days)+' jours de suite</div></div>';
}
function wCountdown(days,label,col){ return '<div><div class="cd-num" style="color:'+col+'">'+fmtN(days)+'</div><div class="cd-lbl">jours · '+esc(label)+'</div></div>'; }
function wRank(rank,total,id){
  return '<div id="rk_'+esc(id)+'"><div class="rank-num">#'+fmtN(rank)+' <span style="font-size:13px;color:var(--txt3);font-weight:600">/ '+fmtN(total)+'</span></div>'+
    '<div class="rank-sub">Classement général (privé)</div><button class="rank-toggle" data-act="toggleRank" data-arg="rk_'+esc(id)+'">Masquer mon classement</button></div>';
}
function kpiWidget(k,col,l,acc){
  var w=k.widget, c=l?col:acc, thr=(typeof k.warn==='number')?k.warn:null; if(!w) return '';
  switch(w.type){
    case 'gauge': return wGauge(w.value,w.max,w.unit,l?col:acc,null,thr);
    case 'bar': return wBar(w.value,w.max,w.unit,c,w.targetLabel,thr);
    case 'ring': return wRing(w.value,w.max,w.unit,c,null,thr);
    case 'counter': return wCounter(k.text,w.unit,w.delta,w.deltaUnit,l?col:null);
    case 'streak': return wStreak(w.icons,w.days);
    case 'countdown': return wCountdown(w.days,w.label,col);
    case 'rank': return wRank(w.rank,w.total,k.id);
    default: return '';
  }
}

/* Anneau compact des cartes KPI (sans texte : la valeur est affichée à côté, en grand) */
function miniRing(v,max,col,thr){
  var size=68, r=27, c=size/2, circ=2*Math.PI*r, pct=Math.max(0,Math.min(1,(max?v/max:0))), tick='';
  if(typeof thr==='number'&&isFinite(thr)&&thr>0&&thr<=max){ var a=2*Math.PI*thr/max-Math.PI/2, ca=Math.cos(a), sa=Math.sin(a);
    tick='<line class="g-tick" x1="'+(c+(r-8)*ca).toFixed(1)+'" y1="'+(c+(r-8)*sa).toFixed(1)+'" x2="'+(c+(r+8)*ca).toFixed(1)+'" y2="'+(c+(r+8)*sa).toFixed(1)+'" stroke-width="2.4" stroke-linecap="round"/>'; }
  return '<svg class="mring" width="'+size+'" height="'+size+'" viewBox="0 0 '+size+' '+size+'" aria-hidden="true">'+
    '<circle class="g-track" cx="'+c+'" cy="'+c+'" r="'+r+'" stroke-width="8" fill="none"/>'+
    '<circle cx="'+c+'" cy="'+c+'" r="'+r+'" stroke="'+col+'" stroke-width="8" fill="none" stroke-linecap="round" stroke-dasharray="'+(pct*circ).toFixed(1)+' '+circ.toFixed(1)+'" transform="rotate(-90 '+c+' '+c+')"/>'+tick+'</svg>';
}
function miniBar(v,max,col,thr){
  var pct=Math.max(0,Math.min(100,(max?v/max*100:0))), tp=(typeof thr==='number'&&isFinite(thr)&&thr>0&&thr<=max)?Math.min(100,thr/max*100):null;
  return '<div class="bar-track"><div class="bar-fill" style="width:'+pct+'%;background:'+col+'"></div>'+(tp!=null?'<span class="bar-tick" style="left:calc('+tp+'% - 1px)"></span>':'')+'</div>';
}

/* ── Visuels des indicateurs détaillés ── */
var MOIS=['Janv.','Févr.','Mars','Avr.','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'];
function isPct(k){ return k.unit==='%'&&typeof k.n==='number'&&k.n>=0&&k.n<=100; }
function gaugeable(k){ return isPct(k)&&k.warn>=10&&k.warn<100; }
/* Écart entre la valeur actuelle et la valeur d'il y a « back » mois (1 = mois précédent, 12 = même mois de l'année précédente) */
function histDelta(k,back){ var h=k.hist; back=back||1; if(!h||h.length<=back) return null; var a=h[h.length-1-back], b=h[h.length-1];
  return isPct(k)||k.unit==='%'?Math.round((b-a)*10)/10:(a?Math.round((b-a)/Math.abs(a)*1000)/10:null); }
function deltaTxt(k,d){ return (d>0?'+':'')+fmtN(d)+(isPct(k)||k.unit==='%'?' pt':' %'); }
function deltaChip(k){
  var yoy=k.yoy&&k.hist&&k.hist.length>12, d=histDelta(k,yoy?12:1); if(d==null||d===0) return '';
  var good=(k.dir==='min')===(d>0);
  return '<span class="dchip '+(good?'up':'down')+'" title="'+(yoy?'Par rapport au même mois de l\'année précédente':'Par rapport au mois précédent')+'">'+(d>0?'▲ ':'▼ ')+deltaTxt(k,d)+(yoy?' <em>sur 1 an</em>':'')+'</span>';
}
/* Jauge de seuil : valeur, zone d'alerte et repère du seuil */
function rowGauge(k,col){
  var v=Math.max(0,Math.min(100,k.n)), w=Math.max(0,Math.min(100,k.warn)), zone=k.dir==='min'?'left:0;width:'+w+'%':'left:'+w+'%;right:0';
  return '<div class="rg"><div class="rg-track"><span class="rg-zone" style="'+zone+'"></span><span class="rg-fill" style="width:'+v+'%;background:'+col+'"></span><span class="rg-thr" style="left:'+w+'%"></span></div>'+
    '<div class="rg-scale"><span style="left:'+Math.max(8,Math.min(92,w))+'%">seuil '+fmtN(k.warn)+' %</span></div></div>';
}
/* Courbe de tendance 12 mois avec ligne de seuil */
function rowSpark(k,col){
  var h=k.hist.slice(-12), W=170, H=40, lo=Math.min.apply(null,h.concat([k.warn])), hi=Math.max.apply(null,h.concat([k.warn])), r=(hi-lo)||1;
  lo-=r*.12; hi+=r*.12; r=hi-lo;
  var X=function(i){return 3+i*(W-8)/(h.length-1);}, Y=function(v){return 3+(H-6)*(1-(v-lo)/r);};
  var pts=h.map(function(v,i){return X(i).toFixed(1)+','+Y(v).toFixed(1);}).join(' '), ty=Y(k.warn).toFixed(1), id='sg'+Math.random().toString(36).slice(2,8);
  return '<svg class="rspark" viewBox="0 0 '+W+' '+H+'" width="'+W+'" height="'+H+'" aria-hidden="true"><defs><linearGradient id="'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+col+'" stop-opacity=".22"/><stop offset="1" stop-color="'+col+'" stop-opacity="0"/></linearGradient></defs>'+
    '<line x1="0" x2="'+W+'" y1="'+ty+'" y2="'+ty+'" class="rs-thr"/>'+
    '<polygon points="'+X(0).toFixed(1)+','+H+' '+pts+' '+X(h.length-1).toFixed(1)+','+H+'" fill="url(#'+id+')"/>'+
    '<polyline points="'+pts+'" fill="none" stroke="'+col+'" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>'+
    '<circle cx="'+X(h.length-1).toFixed(1)+'" cy="'+Y(h[h.length-1]).toFixed(1)+'" r="3.6" fill="#D4AF37" stroke="#fff" stroke-width="1.5"/></svg>';
}
/* Répartition en deux (ou plus) parts */
function rowSplit(k){
  var t=k.split.reduce(function(a,x){return a+Math.max(0,x.value);},0)||1, C=['#D4AF37','#006F78','#0B8E96','#9A7A16'];
  return '<div class="rsplit"><div class="rsp-bar">'+k.split.map(function(x,i){return '<span style="width:'+(Math.max(0,x.value)/t*100).toFixed(1)+'%;background:'+C[i%4]+'"></span>';}).join('')+'</div>'+
    '<div class="rsp-leg">'+k.split.map(function(x,i){return '<span><i style="background:'+C[i%4]+'"></i>'+esc(x.label)+' '+Math.round(Math.max(0,x.value)/t*100)+' %</span>';}).join('')+'</div></div>';
}
function rowViz(k,col){
  if(k.split&&k.split.length>=2) return rowSplit(k);
  if(gaugeable(k)) return rowGauge(k,col);
  if(k.hist&&k.hist.length>=3) return rowSpark(k,col);
  return '';
}
/* Graphique détaillé (ouvert au clic) : 12 mois, barres colorées selon le seuil, ligne de seuil */
function histChart(k){
  if(!k.hist||k.hist.length<2) return '';
  var h=k.hist.slice(-12), py=k.hist.length>=24?k.hist.slice(-24,-12):null;
  var W=1000, H=220, L=50, B=26, T=16, n=h.length, mx=Math.max.apply(null,h.concat([k.warn],py||[]))*1.12||1;
  if(isPct(k)) mx=Math.min(100,Math.max(mx,Math.max.apply(null,h)+5));
  var raw=mx/4, mag=Math.pow(10,Math.floor(Math.log(raw)/Math.LN10)), st=[1,2,2.5,5,10].map(function(f){return f*mag;}).filter(function(f){return f>=raw;})[0]; mx=st*4;
  var bw=(W-L-10)/n, Y=function(v){return T+(H-T-B)*(1-v/mx);}, now=new Date(), g='';
  for(var t=0;t<=4;t++){ var v=mx*t/4, y=Y(v).toFixed(1); g+='<line x1="'+L+'" x2="'+W+'" y1="'+y+'" y2="'+y+'" class="hc-grid"/><text x="'+(L-8)+'" y="'+(+y+4)+'" class="hc-ax" text-anchor="end">'+fmtN(Math.round(v*10)/10)+'</text>'; }
  var bars=h.map(function(v,i){
    var lv=lvl({n:v,dir:k.dir,warn:k.warn,crit:k.crit}), last=i===n-1, c=lv?LVC[lv]:(last?'#006F78':'#8FC3C7'), x=L+i*bw+bw*.18, y=Y(v);
    var m=MOIS[(now.getMonth()-(n-1-i)+120)%12];
    return '<rect x="'+x.toFixed(1)+'" y="'+y.toFixed(1)+'" width="'+(bw*.64).toFixed(1)+'" height="'+Math.max(1,H-B-y).toFixed(1)+'" rx="3" fill="'+c+'"><title>'+esc(m)+' : '+fmtN(v)+esc(k.unit)+'</title></rect>'+
      (last?'<text x="'+(x+bw*.32).toFixed(1)+'" y="'+(y-6).toFixed(1)+'" class="hc-last" text-anchor="middle">'+fmtN(v)+'</text>':'')+
      '<text x="'+(x+bw*.32).toFixed(1)+'" y="'+(H-8)+'" class="hc-ax" text-anchor="middle">'+esc(m)+'</text>';
  }).join('');
  var ty=Y(k.warn).toFixed(1), prev='';
  if(py) prev='<polyline class="hc-prev" points="'+py.map(function(v,i){return (L+i*bw+bw*.5).toFixed(1)+','+Y(v).toFixed(1);}).join(' ')+'"/>'+
    py.map(function(v,i){return '<circle class="hc-prevd" cx="'+(L+i*bw+bw*.5).toFixed(1)+'" cy="'+Y(v).toFixed(1)+'" r="2.6"><title>Année précédente : '+fmtN(v)+esc(k.unit)+'</title></circle>';}).join('');
  return '<svg class="hchart" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Historique sur 12 mois">'+g+bars+prev+
    '<line x1="'+L+'" x2="'+W+'" y1="'+ty+'" y2="'+ty+'" class="hc-thr"/><rect x="'+(L+6)+'" y="'+(ty-17)+'" width="'+(16+8*('Seuil '+thrText(k)).length)+'" height="18" rx="4" fill="#fff" fill-opacity=".9"/><text x="'+(L+12)+'" y="'+(ty-6)+'" class="hc-thrl">Seuil '+thrText(k)+'</text></svg>';
}

/* ═══ Vues : cartes, lignes, blocs et assemblage du dashboard — fonctions pures (HTML échappé) ═══ */
var BLOCKS={};   /* registre { type: { clean(bloc), render(bloc, ui, accent) } } — étendu par le module de blocs propre à chaque domaine */

var LVL_TXT=['Dans le seuil','Hors seuil','Critique'];
function stHTML(k,l){ return k.na?'<span class="st na"><i></i>Donnée non disponible</span>':'<span class="st lv'+l+'"><i></i>'+LVL_TXT[l]+'</span>'; }
var VCTX={pins:[],drill:[]};   /* contexte de rendu : favoris et indicateurs avec personnes concernées */
/* Carte KPI : libellé, valeur en grand (serif), visuel compact, statut et seuil. Toutes les valeurs dynamiques sont échappées. */
function heroParts(k,col,l,acc){
  var w=k.widget, thr=(typeof k.warn==='number')?k.warn:null, c=l?col:acc, o={val:esc(k.text),viz:'',sub:''};
  if(!w) return o;
  switch(w.type){
    case 'gauge': case 'ring':
      o.viz=miniRing(w.value,w.max,c,thr); if(w.unit&&w.unit!=='%') o.sub='<span class="hc-unit">'+esc(w.unit)+'</span>'; break;
    case 'bar':
      o.sub=miniBar(w.value,w.max,c,thr)+(w.targetLabel?'<div class="hc-note">'+esc(w.targetLabel)+'</div>':''); break;
    case 'counter':
      o.sub='<span class="hc-unit">'+esc(w.unit)+'</span>'+(w.delta!=null?trendBadge(w.delta,w.deltaUnit):''); break;
    case 'streak':
      o.val=fmtN(w.days)+'<small> j</small>'; o.sub='<span class="hc-unit">de suite</span>';
      o.viz='<div class="badge-row">'+w.icons.map(function(i){return '<div class="badge-ico">'+esc(i)+'</div>';}).join('')+'</div>'; break;
    case 'countdown':
      o.val=fmtN(w.days)+'<small> j</small>'; o.sub='<span class="hc-unit">'+esc(w.label)+'</span>'; break;
    case 'rank':
      o.val='<span class="rank-num">#'+fmtN(w.rank)+'<small> / '+fmtN(w.total)+'</small></span>';
      o.sub='<span class="hc-unit">Classement général (privé)</span><button class="rank-toggle" data-act="toggleRank" data-arg="rk_'+esc(k.id)+'">Masquer mon classement</button>'; break;
  }
  return o;
}
function heroCard(k,acc,feat){
  var l=lvl(k), col=LVC[l], f=feat&&!l, P=heroParts(k,col,l,f?'#E9CB66':acc), rank=k.widget&&k.widget.type==='rank';
  var open=true;
  return '<div class="hcard'+(f?' feat':'')+(k.na?' na':'')+(l?' flagged lv'+l:'')+(open?' clickable':'')+'"'+(rank?' id="rk_'+esc(k.id)+'"':'')+(open?' data-act="openKpi" data-arg="'+esc(k.id)+'"':'')+'>'+
    '<div class="hc-top"><span class="hlbl">'+kdef(k)+'</span>'+pinBtn(k,VCTX.pins)+'</div>'+
    '<div class="hc-main"><div class="hc-val'+(String(k.text||'').length>11?' long':'')+'"'+(l?' style="color:'+col+'"':'')+'>'+P.val+'</div>'+(P.viz?'<div class="hc-viz">'+P.viz+'</div>':'')+'</div>'+
    (P.sub?'<div class="hc-sub">'+P.sub+'</div>':'')+
    '<div class="hthr">'+stHTML(k,l)+'<span class="hc-thr">Seuil '+thrText(k)+'</span></div>'+
    (k.titulaire?'<div class="hc-tit"><span class="tit-chip">Titulaire : '+esc(k.titulaire.label)+'</span></div>':'')+'</div>';
}
function heroRows(n){ if(n<=4) return [n]; if(n===5) return [5]; if(n===6) return [3,3]; if(n===9) return [3,3,3]; var rows=Math.ceil(n/4), base=Math.floor(n/rows), extra=n%rows, o=[]; for(var i=0;i<rows;i++) o.push(base+(i<extra?1:0)); return o; }
function heroGrid(list,acc){
  if(!list.length) return '';
  var fi=-1; for(var q=0;q<list.length;q++){ if(!lvl(list[q])&&!list[q].na){fi=q;break;} }
  var rows=heroRows(list.length), i=0, h='<div class="sect-lbl">Indicateurs clés</div><div class="hero-stack hero-grid">';
  rows.forEach(function(n){ h+='<div class="hero-row" style="grid-template-columns:repeat('+n+',minmax(0,1fr))">'; for(var j=0;j<n;j++,i++){ h+=heroCard(list[i],acc,i===fi); } h+='</div>'; });
  return h+'</div>';
}
function catRow(k){
  var l=lvl(k), col=l?LVC[l]:'#006F78', viz=rowViz(k,col), dr=VCTX.drill.indexOf(k.id)>=0, hc=true;
  return '<div class="cat-row'+(l?' lv'+l:'')+(hc?' has-hist':'')+'">'+
    '<div class="crow-main"'+(hc?' data-act="toggleRow" role="button" tabindex="0" aria-expanded="false"':'')+'><span class="st-dot '+(k.na?'na':'lv'+l)+'" title="'+(k.na?'Donnée non disponible':LVL_TXT[l])+'"></span>'+
    '<span class="crow-lbl">'+kdef(k)+(k.titulaire?'<span class="tit-chip">Titulaire : '+esc(k.titulaire.label)+'</span>':'')+
    '<span class="crow-thr">Seuil '+thrText(k)+' · '+esc(k.freq)+'</span></span>'+
    '<span class="crow-viz">'+viz+'</span>'+
    '<span class="crow-val"'+(l?' style="color:'+LVC[l]+'"':'')+'>'+esc(k.text)+deltaChip(k)+'</span>'+
    pinBtn(k,VCTX.pins)+(hc?'<span class="crow-chev" aria-hidden="true"></span>':'<span></span>')+'</div>'+
    (hc?'<div class="crow-detail">'+kpiDetailHTML(k,dr)+'</div>':'')+'</div>';
}
function catBlock(title,rows){
  var bad=rows.filter(function(k){return lvl(k);}).length;
  return '<div class="cat-block"><div class="cat-head"><span>'+esc(title)+'</span><span class="cat-count'+(bad?' has':'')+'">'+(bad?bad+' hors seuil':'Tout dans le seuil')+'</span></div>'+rows.map(catRow).join('')+'</div>';
}
/* Bandeau de synthèse : part des indicateurs dans le seuil, répartition par statut, accès aux alertes */
function pulseHTML(p,a){
  var tous=collectKpis(p), all=tous.filter(function(k){return !k.na;}), nNa=tous.length-all.length, n=all.length; if(!n) return '';
  var c=[0,0,0]; all.forEach(function(k){c[lvl(k)]++;});
  var pct=Math.round(c[0]/n*100), r=34, circ=2*Math.PI*r, nO=a.own.length, nW=a.watched.length;
  var ring='<svg width="88" height="88" viewBox="0 0 88 88" aria-hidden="true"><circle cx="44" cy="44" r="'+r+'" stroke="rgba(255,255,255,.14)" stroke-width="9" fill="none"/>'+
    '<circle cx="44" cy="44" r="'+r+'" stroke="#E9CB66" stroke-width="9" fill="none" stroke-linecap="round" stroke-dasharray="'+(pct/100*circ).toFixed(1)+' '+circ.toFixed(1)+'" transform="rotate(-90 44 44)"/>'+
    '<text x="44" y="50" text-anchor="middle" class="pl-pct">'+pct+'%</text></svg>';
  var tile=function(cls,num,lbl){ return '<div class="pl-tile '+cls+'"><b>'+num+'</b><span><i></i>'+lbl+'</span></div>'; };
  return '<section class="pulse"><div class="pl-ring">'+ring+'</div><div class="pl-txt"><div class="pl-k">Santé des indicateurs</div>'+
    '<div class="pl-t">'+c[0]+' indicateur'+(c[0]>1?'s':'')+' sur '+n+' dans le seuil</div>'+
    '<div class="pl-s">'+(nO||nW?'Alertes sur l\'ensemble de vos périmètres : <b>'+nO+'</b> dont vous êtes titulaire'+(nW?', <b>'+nW+'</b> suivie'+(nW>1?'s':'')+' pour un autre profil':''):'Aucune alerte en cours sur vos périmètres')+'</div></div>'+
    '<div class="pl-tiles">'+tile('ok',c[0],'Dans le seuil')+tile('w',c[1],'Hors seuil')+tile('b',c[2],'Critiques')+(nNa?tile('na',nNa,'Non disponibles'):'')+'</div>'+
    (nO||nW?'<button class="pl-btn" data-act="toggleAlerts">Voir les alertes</button>':'')+'</section>';
}

/* ── Blocs communs ── */
function cellHTML(c){
  if(c.t==='bar') return '<div class="mini-bar-cell"><div class="mini-track"><div class="mini-fill" style="width:'+Math.max(0,Math.min(100,c.v/(c.max||100)*100))+'%;background:'+LVC[c.level]+'"></div></div>'+fmtN(c.v)+esc(c.suffix)+'</div>';
  return esc(c.v);
}
BLOCKS['table']={
  clean:function(b,S){ return {type:'table',title:S.str(b.title,120),columns:S.arr(b.columns,12).map(function(c){return S.str(c,60);}),
    rows:S.arr(b.rows,200).map(function(r){return S.arr(r,12).map(function(c){return c&&c.t==='bar'?{t:'bar',v:S.num(c.v),max:S.num(c.max)||100,level:S.lvl(c.level),suffix:S.str(c.suffix,6)}:{t:'text',v:S.str(c&&c.v,120)};});})}; },
  render:function(b){
    return '<div class="sect-lbl">'+esc(b.title)+'</div><div class="cat-block"><table class="nom-table"><thead><tr>'+b.columns.map(function(c){return '<th>'+esc(c)+'</th>';}).join('')+'</tr></thead><tbody>'+
      b.rows.map(function(r){return '<tr>'+r.map(function(c){return '<td>'+cellHTML(c)+'</td>';}).join('')+'</tr>';}).join('')+'</tbody></table></div>';
  }
};
BLOCKS['bars-target']={
  clean:function(b,S){ return {type:'bars-target',title:S.str(b.title,120),items:S.arr(b.items,30).map(function(i){return {label:S.str(i.label,80),value:S.num(i.value),target:S.num(i.target),max:S.num(i.max)||100};})}; },
  render:function(b){
    return '<div class="sect-lbl">'+esc(b.title)+'</div><div class="cat-block" style="padding:16px">'+b.items.map(function(it){
      var pct=Math.min(100,it.value/it.max*100), tp=Math.min(100,it.target/it.max*100), c=it.value>=it.target?OK:WARN;
      return '<div class="cmp-item"><div class="cmp-lbl"><span>'+esc(it.label)+'</span><span>'+fmtN(it.value)+'% <span style="color:var(--txt3)">/ cible '+fmtN(it.target)+'%</span></span></div>'+
        '<div class="cmp-track"><div class="cmp-fill" style="width:'+pct+'%;background:'+c+'"></div><div class="cmp-target" style="left:'+tp+'%"></div></div></div>';
    }).join('')+'</div>';
  }
};
BLOCKS['bars-level']={
  clean:function(b,S){ return {type:'bars-level',title:S.str(b.title,120),items:S.arr(b.items,30).map(function(i){return {label:S.str(i.label,80),value:S.num(i.value),max:S.num(i.max)||100,level:S.lvl(i.level),marker:S.num(i.marker),text:S.str(i.text,40)};})}; },
  render:function(b){
    return '<div class="sect-lbl">'+esc(b.title)+'</div><div class="cat-block" style="padding:16px">'+b.items.map(function(it){
      var col=LVC[it.level];
      return '<div class="cmp-item"><div class="cmp-lbl"><span>'+esc(it.label)+'</span><span style="color:'+col+'">'+esc(it.text)+(it.level?' 🚩':'')+'</span></div>'+
        '<div class="cmp-track"><div class="cmp-fill" style="width:'+Math.min(100,it.value/it.max*100)+'%;background:'+col+'"></div><div class="cmp-target" style="left:'+Math.min(100,it.marker/it.max*100)+'%"></div></div></div>';
    }).join('')+'</div>';
  }
};
BLOCKS['quotes']={
  clean:function(b,S){ return {type:'quotes',title:S.str(b.title,120),items:S.arr(b.items,20).map(function(x){return S.str(x,400);})}; },
  render:function(b){ return '<div class="sect-lbl">'+esc(b.title)+'</div><div class="cat-block" style="padding:14px 16px">'+b.items.map(function(q){return '<div class="quote">'+esc(q)+'</div>';}).join('')+'</div>'; }
};
BLOCKS['reco']={
  clean:function(b,S){ return {type:'reco',title:S.str(b.title,120),items:S.arr(b.items,20).map(function(i){return {icon:S.str(i.icon,8),text:S.str(i.text,200)};})}; },
  render:function(b,ui,acc){ return '<div class="sect-lbl">'+esc(b.title)+'</div><div class="cat-block" style="padding:6px 16px">'+b.items.map(function(i){
    return '<div class="reco-item"><div class="reco-ico">'+esc(i.icon)+'</div>'+esc(i.text)+'</div>';}).join('')+'</div>'; }
};

/* ── Tableau de comparaison (collaborateurs ou équipes) — bloc générique, partagé entre les deux domaines :
   utilisé côté Plateforme (gestionnaires de comptes, QA) et côté entreprise cliente (managers, membres d'équipe). ── */
BLOCKS['compare-table']={
  clean:function(b,S){ return {type:'compare-table',title:S.str(b.title,140),note:S.str(b.note,300),header:S.str(b.header,40)||'Collaborateur',
    columns:S.arr(b.columns,14).map(function(c){return {id:S.str(c.id,40),label:S.str(c.label,40)};}),
    rows:S.arr(b.rows,60).map(function(r){var cells={}; Object.keys(r.cells||{}).slice(0,14).forEach(function(k){var c=r.cells[k]; cells[S.str(k,40)]={text:S.str(c.text,60),n:S.num(c.n),level:S.lvl(c.level)};});
      return {id:S.str(r.id,40),label:S.str(r.label,60),selected:!!r.selected,total:!!r.total,cells:cells};})}; },
  render:function(b,ui){
    var rows=b.rows.filter(function(r){return !r.total;}), tot=b.rows.filter(function(r){return r.total;});
    if(ui&&ui.sort){ rows=rows.slice().sort(function(a,c){var x=a.cells[ui.sort.id],y=c.cells[ui.sort.id]; return ((x?x.n:0)-(y?y.n:0))*(ui.sort.asc?1:-1);}); }
    var arrow=function(id){return ui&&ui.sort&&ui.sort.id===id?(ui.sort.asc?' ▲':' ▼'):'';};
    var cell=function(r,col){var c=r.cells[col.id]; if(!c) return '<td></td>'; return '<td class="'+(c.level?'cell-lv'+c.level:'')+'">'+esc(c.text)+(c.level?' 🚩':'')+'</td>';};
    var line=function(r){return '<tr class="'+(r.selected?'sel':'')+(r.total?'tot':'')+'"><td>'+esc(r.label)+'</td>'+b.columns.map(function(c){return cell(r,c);}).join('')+'</tr>';};
    return '<div class="sect-lbl">'+esc(b.title)+'</div><div class="cat-block"><div class="cmp-wrap"><table class="cmp-tbl"><thead><tr><th>'+esc(b.header)+'</th>'+
      b.columns.map(function(c){return '<th data-act="sortBy" data-arg="'+esc(c.id)+'">'+esc(c.label)+arrow(c.id)+'</th>';}).join('')+'</tr></thead><tbody>'+rows.map(line).join('')+tot.map(line).join('')+'</tbody></table></div></div>'+
      '<div class="scope-note">'+esc(b.note)+'</div>';
  }
};

/* ── Statut d'intégration avec un outil métier externe (CRM, automatisation marketing, gestion produit) ──
   Affichage seul : la synchronisation réelle est un traitement serveur (job planifié ou webhook), jamais
   déclenchée ni pilotée par le navigateur. Voir docs/API-CONTRACT.md pour le contrat d'intégration. */
BLOCKS['integration-status']={
  clean:function(b,S){ return {type:'integration-status',tool:S.str(b.tool,80),status:b.status==='ok'?'ok':(b.status==='error'?'error':'disconnected'),
    lastSync:S.str(b.lastSync,40),recordsSynced:S.num(b.recordsSynced),detail:S.str(b.detail,240)}; },
  render:function(b){
    if(b.status==='disconnected') return '<div class="chart-card"><div class="chart-head"><div><div class="chart-title">🔌 Intégration — '+esc(b.tool)+'</div>'+
      '<div class="chart-sub">'+esc(b.detail)+'</div></div><span class="fchip na">○ Non connecté</span></div></div>';
    var ok=b.status==='ok', col=ok?OK:BAD, label=ok?'Connecté':'Erreur de synchronisation';
    return '<div class="chart-card"><div class="chart-head"><div><div class="chart-title">🔌 Intégration — '+esc(b.tool)+'</div>'+
      '<div class="chart-sub">'+esc(b.detail)+'</div></div><span class="fchip" style="background:'+(ok?'var(--ok-bg)':'var(--bad-bg)')+';color:'+col+'">'+(ok?'●':'⚠')+' '+label+'</span></div>'+
      '<div class="legend"><span>Dernière synchronisation : '+esc(b.lastSync)+'</span><span>'+fmtN(b.recordsSynced)+' enregistrements synchronisés</span></div></div>';
  }
};

/* ── Barre de filtres (vues, collaborateur, comparaison) — tout est validé côté serveur ── */
function filterBarHTML(f){
  if(!f||(!f.views.length&&!f.people.length)) return '';
  var h='<div class="fbar">';
  if(f.views.length>1){
    h+='<span class="flbl">Vue</span><div class="seg">'+f.views.map(function(v){return '<button class="'+(f.view===v.id?'active':'')+'" data-act="setView" data-arg="'+esc(v.id)+'">'+esc(v.label)+'</button>';}).join('')+'</div>';
  }
  if(f.people.length){
    h+='<span class="flbl">Filtrer</span><select class="fsel" data-chg="setPerson"><option value="all">Tous (vue agrégée)</option>'+
      f.people.map(function(p){return '<option value="'+esc(p.id)+'"'+(f.person===p.id?' selected':'')+'>'+esc(p.label)+'</option>';}).join('')+'</select>';
    if(f.compareAvailable) h+='<label class="fchk"><input type="checkbox" data-chg="setCompare" '+(f.compare?'checked':'')+'> '+esc(f.compareLabel||'Comparer les performances individuelles')+'</label>';
  }
  return h+'</div>';
}
function scopeNoteHTML(f){
  if(!f||f.person==='all'||!f.personLabel) return '';
  return '<div class="scope-note">Filtre actif : <b>'+esc(f.personLabel)+'</b> <a data-act="resetPerson">Réinitialiser</a></div>';
}

/* ── Alertes ── */
function alertItemHTML(e){
  return '<div class="aitem"><span class="adot" style="background:'+LVC[e.level]+'"></span><div><div class="atitle">'+esc(e.label)+'</div>'+
    '<div class="asub">Valeur <b>'+esc(e.text)+'</b> · seuil '+esc(e.thrLabel)+' · <b style="color:'+LVC[e.level]+'">'+(e.level===2?'critique':'hors seuil')+'</b></div>'+
    '<div class="asub">Titulaire : <b>'+esc(e.titulaire)+'</b>'+(e.watchers.length?'<br>Suivi par : '+e.watchers.map(esc).join(', '):'')+'</div></div></div>';
}
function alertsPanelHTML(a,title){
  var h='<div class="ap-h"><span style="display:flex;align-items:center;gap:9px;color:var(--ink);font-size:16px;font-weight:700;cursor:default">'+ico('🚩')+'Alertes de seuil — '+esc(title)+'</span><span data-act="closeAlerts">Fermer</span></div>';
  if(!a.own.length&&!a.watched.length) h+='<div class="aempty">Aucun indicateur hors seuil.</div>';
  if(a.own.length) h+='<div class="ap-g">Mes indicateurs — je suis titulaire ('+a.own.length+')</div>'+a.own.map(alertItemHTML).join('');
  if(a.watched.length) h+='<div class="ap-g">Indicateurs suivis — titulaire : un autre profil ('+a.watched.length+')</div>'+a.watched.map(alertItemHTML).join('');
  return h;
}
function flagBannerHTML(a){
  var nO=a.own.length, nW=a.watched.length; if(!nO&&!nW) return '';
  var crit=a.own.concat(a.watched).some(function(e){return e.level===2;});
  return '<div class="flag-banner'+(crit?' crit':'')+'" data-act="toggleAlerts"><span class="fb-ico">'+ico('🚩')+'</span><span><b>'+nO+'</b> indicateur'+(nO>1?'s':'')+' hors seuil dont vous êtes titulaire'+
    (nW?' · <b>'+nW+'</b> suivi'+(nW>1?'s':'')+' (titulaire : un autre profil)':'')+'</span><u>Voir le détail</u></div>';
}

/* ── Assemblage ── */
function dashboardHTML(p,ui,alerts,ai){
  VCTX={pins:p.pins||[],drill:p.drillable||[],ai:ai||null};
  var acc='#006F78', h=pulseHTML(p,alerts)+adminBarHTML(p.admin)+synthHTML(p);
  if(p.nudges.length) h+='<div class="nudge-box"><div class="nh"><span class="nh-ico">'+ico('⚠')+'</span>Actions requises <em>'+p.nudges.length+'</em></div>'+p.nudges.map(function(n,i){return '<div class="nudge-row"><span class="nn">'+(i+1)+'</span><span>'+esc(n)+'</span></div>';}).join('')+'</div>';
  p.notices.forEach(function(n){ h+='<div class="lock-note">'+ico('🔒')+'<span>'+esc(n)+'</span></div>'; });
  h+=filterBarHTML(p.filters)+scopeNoteHTML(p.filters)+pinnedHTML(p,acc)+heroGrid(p.hero,acc);
  p.blocks.forEach(function(b){ var B=BLOCKS[b.type]; if(B) h+=B.render(b,ui,acc); });
  if(p.sections.length) h+='<div class="sect-lbl">Indicateurs détaillés</div><div class="cat-grid">'+p.sections.map(function(s){ return catBlock(s.title,s.rows); }).join('')+'</div>';
  return h;
}

/* ═══ Blocs propres au domaine PLATEFORME (absents du bundle « entreprise » — Principe 3) ═══ */
BLOCKS['chart-mrr']={
  clean:function(b,S){ return {type:'chart-mrr',title:S.str(b.title,120),subtitle:S.str(b.subtitle,240),labels:S.arr(b.labels,24).map(function(x){return S.str(x,10);}),
    line:S.arr(b.line,24).map(S.num),bars:S.arr(b.bars,24).map(S.num),barWarn:S.num(b.barWarn),lineLegend:S.str(b.lineLegend,60),barLegend:S.str(b.barLegend,60),warnLegend:S.str(b.warnLegend,60)}; },
  render:function(b){
    var n=b.line.length; if(n<2) return '';
    var W=760,x0=54,x1=740,step=(x1-x0)/(n-1), lo=Math.floor(Math.min.apply(null,b.line)), hi=Math.ceil(Math.max.apply(null,b.line)), rng=(hi-lo)||1;
    var ty=function(v){return 130-(v-lo)/rng*110;}, xs=b.line.map(function(_,i){return x0+i*step;});
    var line=b.line.map(function(v,i){return (i?'L':'M')+xs[i].toFixed(1)+' '+ty(v).toFixed(1);}).join(' ');
    var s='<svg viewBox="0 0 '+W+' 262" role="img" aria-label="'+esc(b.title)+'">';
    for(var g=lo;g<=hi;g+=Math.max(1,Math.round(rng/3))){ s+='<line x1="'+x0+'" x2="'+x1+'" y1="'+ty(g)+'" y2="'+ty(g)+'" stroke="#E6EEEF"/><text x="'+(x0-8)+'" y="'+(ty(g)+3)+'" text-anchor="end" font-size="9" fill="#7D9599">'+g+' M</text>'; }
    s+='<path d="'+line+' L'+xs[n-1]+' 135 L'+xs[0]+' 135 Z" fill="#006F78" opacity=".07"/><path d="'+line+'" fill="none" stroke="#006F78" stroke-width="2.4" stroke-linejoin="round"/>';
    b.line.forEach(function(v,i){ s+='<circle cx="'+xs[i]+'" cy="'+ty(v)+'" r="3.2" fill="#fff" stroke="#006F78" stroke-width="2"/>'; });
    s+='<text x="'+xs[n-1]+'" y="'+(ty(b.line[n-1])-10)+'" text-anchor="end" font-size="11" font-weight="700" fill="#006F78">'+fmtN(b.line[n-1])+' M</text>';
    var mx=Math.max.apply(null,b.bars.concat([b.barWarn*2,0.1])), base=222;
    s+='<text x="'+x0+'" y="158" font-size="9.5" font-weight="700" fill="#4E6569">New MRR par mois (M F CFA)</text>';
    b.bars.forEach(function(v,i){ var h=v/mx*52; s+='<rect x="'+(xs[i]-13)+'" y="'+(base-h)+'" width="26" height="'+h+'" rx="3" fill="'+(v<b.barWarn?'#F59E0B':'#D4AF37')+'" opacity=".85"/><text x="'+xs[i]+'" y="'+(base-h-4)+'" text-anchor="middle" font-size="9" fill="#4E6569">'+fmtN(v)+'</text>'; });
    b.labels.forEach(function(l,i){ s+='<text x="'+xs[i]+'" y="240" text-anchor="middle" font-size="9.5" fill="#7D9599">'+esc(l)+'</text>'; });
    return '<div class="chart-card"><div class="chart-head"><div><div class="chart-title">'+esc(b.title)+'</div><div class="chart-sub">'+esc(b.subtitle)+'</div></div></div>'+s+'</svg>'+
      '<div class="legend"><span><i style="background:#006F78"></i>'+esc(b.lineLegend)+'</span><span><i style="background:#D4AF37"></i>'+esc(b.barLegend)+'</span><span><i style="background:#F59E0B"></i>'+esc(b.warnLegend)+'</span></div></div>';
  }
};
BLOCKS['chart-bugs']={
  clean:function(b,S){ return {type:'chart-bugs',title:S.str(b.title,120),subtitle:S.str(b.subtitle,240),labels:S.arr(b.labels,24).map(function(x){return S.str(x,10);}),
    registered:S.arr(b.registered,24).map(S.num),resolved:S.arr(b.resolved,24).map(S.num),note:S.str(b.note,300)}; },
  render:function(b){
    var n=b.registered.length; if(!n) return '';
    var mx=Math.max.apply(null,b.registered.concat(b.resolved))*1.18||1, W=760,x0=40,gw=(W-x0-10)/n,base=190,H=150;
    var s='<svg viewBox="0 0 '+W+' 226" role="img" aria-label="'+esc(b.title)+'">';
    [0.25,0.5,0.75,1].forEach(function(g){var y=base-g*H/1.18; s+='<line x1="'+x0+'" x2="'+(W-6)+'" y1="'+y+'" y2="'+y+'" stroke="#E6EEEF"/>';});
    for(var i=0;i<n;i++){
      var cx=x0+gw*i+gw/2, h1=b.registered[i]/mx*H, h2=b.resolved[i]/mx*H, bw=Math.min(24,gw/3.2);
      s+='<rect x="'+(cx-bw-2)+'" y="'+(base-h1)+'" width="'+bw+'" height="'+h1+'" rx="3" fill="#006F78"/><text x="'+(cx-bw/2-2)+'" y="'+(base-h1-4)+'" text-anchor="middle" font-size="9.5" fill="#4E6569">'+fmtN(b.registered[i])+'</text>';
      s+='<rect x="'+(cx+2)+'" y="'+(base-h2)+'" width="'+bw+'" height="'+h2+'" rx="3" fill="#D4AF37"/><text x="'+(cx+bw/2+2)+'" y="'+(base-h2-4)+'" text-anchor="middle" font-size="9.5" fill="#4E6569">'+fmtN(b.resolved[i])+'</text>';
      s+='<text x="'+cx+'" y="'+(base+16)+'" text-anchor="middle" font-size="10" fill="#7D9599">'+esc(b.labels[i])+'</text>';
    }
    return '<div class="chart-card"><div class="chart-head"><div><div class="chart-title">'+esc(b.title)+'</div><div class="chart-sub">'+esc(b.subtitle)+'</div></div></div>'+s+'</svg>'+
      '<div class="legend"><span><i style="background:#006F78"></i>Enregistrés</span><span><i style="background:#D4AF37"></i>Résolus</span></div><div class="chart-note">'+esc(b.note)+'</div></div>';
  }
};

/* ═══ Lecture avancée des indicateurs : détail, comparaison sur un an, projection, personnes concernées,
       synthèse, favoris, et outils de l'Admin RH (seuils de l'entité, rapport trimestriel).
       Toutes les valeurs affichées sont échappées ; aucun chiffre n'est inventé : tout est dérivé des données reçues. ═══ */
var MOIS_L=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
function monthAgo(n){ var d=new Date(); d.setDate(1); d.setMonth(d.getMonth()-n); return d; }
function monthLbl(n,long){ var d=monthAgo(n); return (long?MOIS_L:MOIS)[d.getMonth()]+' '+d.getFullYear(); }
function r1(x){ return Math.round(x*10)/10; }

/* Projection linéaire (6 derniers mois) jusqu'à la fin du trimestre en cours */
function projection(k){
  var h=k.hist; if(!h||h.length<4||typeof k.n!=='number') return null;
  var s=h.slice(-6), n=s.length, mx=(n-1)/2, my=s.reduce(function(a,b){return a+b;},0)/n, num=0, den=0;
  s.forEach(function(v,i){ num+=(i-mx)*(v-my); den+=(i-mx)*(i-mx); });
  var slope=den?num/den:0, now=new Date(), ahead=2-now.getMonth()%3; if(ahead===0) ahead=3;
  var v=s[n-1]+slope*ahead; v=Math.max(0,v); if(k.unit==='%'&&k.n<=100&&k.warn<=100) v=Math.min(100,v);
  var end=new Date(now.getFullYear(),now.getMonth()+ahead+1,0);
  var l=lvl({n:v,dir:k.dir,warn:k.warn,crit:k.crit});
  return {v:r1(v),date:end.getDate()+' '+MOIS_L[end.getMonth()]+' '+end.getFullYear(),level:l,slope:slope};
}
function projSentence(k,pr){
  var ok=!pr.level, wasOk=!lvl(k);
  if(ok&&wasOk) return 'À ce rythme, l\'indicateur restera dans le seuil.';
  if(ok) return 'À ce rythme, le seuil sera de nouveau atteint.';
  if(wasOk) return 'Attention : à ce rythme, l\'indicateur sortira du seuil.';
  return 'À ce rythme, le seuil ne sera pas atteint.';
}

/* Détail d'un indicateur : chiffres clés, histogramme, comparaison, projection, personnes concernées */
function kpiDetailHTML(k,drillable){
  var hc=histChart(k), tiles=[], mom=histDelta(k,1), yoy=k.hist&&k.hist.length>12?histDelta(k,12):null, pr=projection(k);
  var good=function(d){ return d==null||d===0?'':((k.dir==='min')===(d>0)?' up':' down'); };
  if(k.na) return '<div class="kdetail"><div class="kd-tiles"><div class="kt"><span>Valeur actuelle</span><b>—</b><small>Seuil '+thrText(k)+'</small></div></div>'+
    '<div class="kd-note">'+esc(k.info||'Donnée non disponible.')+'</div></div>';
  tiles.push('<div class="kt"><span>Valeur actuelle</span><b'+(lvl(k)?' style="color:'+LVC[lvl(k)]+'"':'')+'>'+esc(k.text)+'</b><small>Seuil '+thrText(k)+'</small></div>');
  if(mom!=null) tiles.push('<div class="kt'+good(mom)+'"><span>vs '+esc(monthLbl(1,true))+'</span><b>'+deltaTxt(k,mom)+'</b><small>'+fmtN(r1(k.hist[k.hist.length-2]))+esc(k.unit)+' le mois précédent</small></div>');
  if(yoy!=null) tiles.push('<div class="kt'+good(yoy)+'"><span>vs '+esc(monthLbl(12,true))+'</span><b>'+deltaTxt(k,yoy)+'</b><small>'+fmtN(r1(k.hist[k.hist.length-13]))+esc(k.unit)+' il y a un an</small></div>');
  if(pr) tiles.push('<div class="kt proj lv'+pr.level+'"><span>Projection au '+esc(pr.date)+'</span><b>'+fmtN(pr.v)+esc(k.unit)+'</b><small>'+esc(projSentence(k,pr))+'</small></div>');
  var h='<div class="kdetail"><div class="kd-tiles">'+tiles.join('')+'</div>';
  if(hc){ var l12=k.hist.slice(-12), av=l12.reduce(function(a,b){return a+b;},0)/l12.length;
    h+='<div class="cd-head">Évolution sur 12 mois<span class="cd-leg"><i class="b"></i>Cette année'+(k.hist.length>=24?'<i class="p"></i>Année précédente':'')+'<i class="s"></i>Seuil</span></div>'+hc+
      '<div class="cd-stats"><span>Moyenne <b>'+fmtN(r1(av))+esc(k.unit)+'</b></span><span>Plus bas <b>'+fmtN(r1(Math.min.apply(null,l12)))+esc(k.unit)+'</b></span><span>Plus haut <b>'+fmtN(r1(Math.max.apply(null,l12)))+esc(k.unit)+'</b></span></div>'; }
  if(!hc) h+='<div class="kd-note">L\'historique mensuel de cet indicateur se constitue automatiquement à chaque mise à jour : l\'évolution sur 12 mois, la comparaison avec le mois précédent et la projection apparaîtront au fil des mois.</div>';
  if(drillable) h+='<div class="kd-people"><button class="kd-btn" data-act="loadPeople" data-arg="'+esc(k.id)+'">'+ico('👥')+'Voir les personnes concernées</button></div>';
  return h+'</div>';
}
function peopleHTML(d){
  if(!d.rows.length) return '<div class="kd-empty">Personne n\'est concerné actuellement.</div>';
  var rows=d.rows.map(function(r){
    return '<tr><td><input type="checkbox" class="pp-chk" data-chg="peopleSel" value="'+esc(r.id)+'"'+(r.reminded?'':' checked')+' aria-label="Sélectionner '+esc(r.name)+'"></td>'+
      '<td><b>'+esc(r.name)+'</b><small>'+esc(r.dept)+'</small></td><td>'+esc(r.detail)+'</td>'+
      '<td class="pp-days'+(r.late?' late':'')+'">'+(r.late?'En retard de '+fmtN(r.days)+' j':'Dans '+fmtN(r.days)+' j')+'</td>'+
      '<td>'+(r.reminded?'<span class="pp-sent">Relancé</span>':'')+'</td></tr>';
  }).join('');
  var n=d.rows.filter(function(r){return !r.reminded;}).length;
  return '<div class="pp" data-kpi="'+esc(d.kpi)+'"><div class="pp-head"><b>'+esc(d.title)+'</b><span>'+d.rows.length+' personne'+(d.rows.length>1?'s':'')+'</span></div>'+
    '<table class="pp-tbl"><thead><tr><th><input type="checkbox" data-chg="peopleAll" aria-label="Tout sélectionner"'+(n===d.rows.length?' checked':'')+'></th><th>Employé</th><th>'+esc(d.col)+'</th><th>Délai</th><th></th></tr></thead><tbody>'+rows+'</tbody></table>'+
    '<div class="pp-foot"><span class="pp-msg" aria-live="polite"></span><button class="btn pp-send" data-act="sendReminders" data-arg="'+esc(d.kpi)+'">'+ico('📣')+'<span>Relancer la sélection (<span class="pp-n">'+n+'</span>)</span></button></div></div>';
}

/* Synthèse en langage clair, calculée à partir des indicateurs du tableau de bord */
function synthItems(p,report){
  var all=collectKpis(p), out=[], name=function(k){return '« '+esc(k.label)+' »';};
  var bad=all.filter(function(k){return lvl(k);}).sort(function(a,b){return lvl(b)-lvl(a);});
  if(bad.length){ var w=bad[0], d=histDelta(w,1);
    out.push({t:lvl(w)===2?'bad':'warn',h:name(w)+' est '+(lvl(w)===2?'en dessous du seuil critique':'hors seuil')+' à <b>'+esc(w.text)+'</b> (seuil '+thrText(w)+')'+(d?', '+(((w.dir==='min')===(d>0))?'en amélioration de ':'en recul de ')+esc(deltaTxt(w,Math.abs(d)).replace('+',''))+' sur un mois':'')+'.'}); }
  else out.push({t:'ok',h:all.some(function(k){return k.na;})?'Tous les indicateurs mesurés sont dans leur seuil.':'Tous les indicateurs sont dans leur seuil.'});
  var risk=null; all.forEach(function(k){ var pr=projection(k); if(pr&&!lvl(k)&&pr.level&&!risk) risk={k:k,p:pr}; });
  if(!risk) bad.some(function(k){ var pr=projection(k); if(pr&&pr.level){ risk={k:k,p:pr}; return true; } return false; });
  if(risk) out.push({t:'warn',h:'Projection : à ce rythme, '+name(risk.k)+' sera à <b>'+fmtN(risk.p.v)+esc(risk.k.unit)+'</b> au '+esc(risk.p.date)+(risk.p.level?', hors seuil.':'.')});
  var best=null; all.forEach(function(k){ if(!k.hist||k.hist.length<13) return; var d=histDelta(k,12); if(d==null) return; var g=(k.dir==='min'?1:-1)*d; if(g>0&&(!best||g>best.g)) best={k:k,d:d,g:g}; });
  if(best) out.push({t:'ok',h:'Plus forte progression sur un an : '+name(best.k)+' ('+esc(deltaTxt(best.k,best.d))+' par rapport à '+esc(monthLbl(12,true))+').'});
  if(bad.length>1) out.push({t:'info',h:'<b>'+bad.length+'</b> indicateurs sont hors seuil sur '+all.length+'.'+(report?'':' Ouvrez une ligne pour voir le détail et, quand c\'est possible, les personnes concernées.')});
  return out.slice(0,4);
}
function synthHTML(p){
  var it=synthItems(p); if(!it.length) return '';
  return '<section class="synth"><div class="sy-head"><span class="sy-ico">'+ico('🧭')+'</span><div><b>L\'essentiel</b><small>Lecture automatique de vos indicateurs</small></div>'+'</div>'+
    '<ul>'+it.map(function(x){return '<li class="sy-'+x.t+'"><i></i><span>'+x.h+'</span></li>';}).join('')+'</ul></section>';
}

/* Favoris : jusqu'à 6 indicateurs épinglés par l'utilisateur, affichés en tête */
function pinBtn(k,pins){ var on=pins.indexOf(k.id)>=0;
  return '<button class="pin'+(on?' on':'')+'" data-act="togglePin" data-arg="'+esc(k.id)+'" aria-pressed="'+on+'" title="'+(on?'Retirer des favoris':'Épingler dans mes favoris')+'"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/></svg></button>'; }
function pinnedHTML(p,acc){
  var all=collectKpis(p), list=p.pins.map(function(id){ for(var i=0;i<all.length;i++) if(all[i].id===id) return all[i]; return null; }).filter(Boolean);
  if(!list.length) return '<div class="pin-hint">'+pinBtn({id:''},[]).replace('data-act="togglePin"','tabindex="-1" disabled')+'<span>Épinglez jusqu\'à 6 indicateurs avec l\'étoile pour les retrouver ici, en tête de votre tableau de bord.</span></div>';
  return '<div class="sect-lbl">Mes favoris <span class="sect-n">'+list.length+' / 6</span></div><div class="hero-stack pinned"><div class="hero-row" style="grid-template-columns:repeat('+Math.min(list.length,3)+',minmax(0,1fr))">'+
    list.map(function(k){ return heroCard(k,acc,false); }).join('')+'</div></div>';
}

/* Outils de l'Admin RH */
function adminBarHTML(a){
  if(!a) return '';
  var ok=a.report.status==='approved';
  return '<div class="adminbar"><span class="ab-t">'+ico('🛠')+'Administration de l\'entité</span>'+
    '<button class="ab-btn" data-act="openThresholds">'+ico('🎯')+'Paramétrer les seuils</button>'+
    '<button class="ab-btn" data-act="openReport">'+ico('📋')+'Rapport trimestriel '+esc(a.report.period)+'<span class="ab-st '+(ok?'ok':'todo')+'">'+(ok?'Validé':'À valider')+'</span></button></div>';
}
function thresholdsHTML(items,ui){
  var groups=[]; items.forEach(function(x){ if(groups.indexOf(x.group)<0) groups.push(x.group); });
  var g=ui.group||groups[0], shown=items.filter(function(x){return ui.onlyMod?x.modified:x.group===g;}), nMod=items.filter(function(x){return x.modified;}).length;
  var row=function(x){ var sg=x.dir==='min'?'≥':'≤';
    return '<tr data-id="'+esc(x.id)+'" data-dir="'+x.dir+'" data-pct="'+(x.unit==='%'?1:0)+'"'+(x.modified?' class="mod"':'')+'><td><b>'+esc(x.label)+'</b><small>'+(ui.onlyMod?esc(x.group)+' · ':'')+'Par défaut : alerte '+sg+' '+fmtN(x.defWarn)+esc(x.unit)+', critique '+sg+' '+fmtN(x.defCrit)+esc(x.unit)+'</small><em class="th-err"></em></td>'+
      '<td><label class="th-in"><span>'+sg+'</span><input type="number" step="any" data-chg="thrEdit" data-f="warn" value="'+x.warn+'" aria-label="Seuil d\'alerte"><i>'+esc(x.unit)+'</i></label></td>'+
      '<td><label class="th-in crit"><span>'+sg+'</span><input type="number" step="any" data-chg="thrEdit" data-f="crit" value="'+x.crit+'" aria-label="Seuil critique"><i>'+esc(x.unit)+'</i></label></td>'+
      '<td>'+(x.modified?'<button class="lnk" data-act="thrReset" data-arg="'+esc(x.id)+'">Par défaut</button>':'')+'</td></tr>'; };
  return '<div class="dr-h"><div><h2>Seuils de votre entité</h2><p>Les seuils déclenchent les statuts « Hors seuil » et « Critique » ainsi que les alertes, pour tous les profils de votre entreprise. Chaque modification est tracée.</p></div></div>'+
    '<div class="th-bar"><label>Profil <select class="fsel" data-chg="thrGroup"'+(ui.onlyMod?' disabled':'')+'>'+groups.map(function(x){return '<option'+(x===g?' selected':'')+'>'+esc(x)+'</option>';}).join('')+'</select></label>'+
    '<label class="fchk"><input type="checkbox" data-chg="thrOnlyMod"'+(ui.onlyMod?' checked':'')+'> Seuils modifiés uniquement ('+nMod+')</label></div>'+
    (shown.length?'<table class="th-tbl"><thead><tr><th>Indicateur</th><th>Seuil d\'alerte</th><th>Seuil critique</th><th></th></tr></thead><tbody>'+shown.map(row).join('')+'</tbody></table>':'<div class="kd-empty">Aucun seuil modifié pour l\'instant.</div>')+
    '<div class="dr-foot"><span class="dr-msg" aria-live="polite"></span><button class="btn-sec" data-act="closeDrawer">Fermer</button><button class="btn" data-act="thrSave">Enregistrer les seuils</button></div>';
}
var REPORT_MAP={conf:/onformit|obligatoire|Gouvernance/i,eng:/Adoption|Engagement|Catalogue/i,comp:/Compétence|Efficacit|Impact|Performance/i,budget:/Budget|Coût|ROI/i,cons:/onsultant/i};
function reportHTML(r,p,preview){
  var ok=r.status==='approved', nR=r.recipients.filter(function(x){return x.on;}).length;
  var h='<div class="dr-h"><div><h2>Rapport trimestriel '+esc(r.period)+'</h2><p>Le rapport couvre la période jusqu\'au '+esc(r.periodEnd)+'. Il n\'est envoyé qu\'après votre validation, le '+esc(r.sendDate)+'.</p></div></div>'+
    '<div class="rp-status '+(ok?'ok':'todo')+'">'+(ok?ico('🔒')+'<span><b>Envoi validé</b> le '+esc(r.approvedAt)+' : le rapport partira le '+esc(r.sendDate)+' à '+nR+' destinataire'+(nR>1?'s':'')+'.</span><button class="lnk" data-act="reportRevoke">Annuler la validation</button>':
      ico('⚠')+'<span><b>En attente de votre validation.</b> Sans validation, le rapport ne sera pas envoyé.</span>')+'</div>';
  h+='<div class="rp-cols"><fieldset><legend>Destinataires</legend>'+r.recipients.map(function(x){return '<label class="fchk"><input type="checkbox" data-chg="reportEdit" data-k="recipients" value="'+esc(x.id)+'"'+(x.on?' checked':'')+'> '+esc(x.label)+'</label>';}).join('')+'</fieldset>'+
    '<fieldset><legend>Contenu du rapport</legend>'+r.sections.map(function(x){return '<label class="fchk"><input type="checkbox" data-chg="reportEdit" data-k="sections" value="'+esc(x.id)+'"'+(x.on?' checked':'')+'> '+esc(x.label)+'</label>';}).join('')+'</fieldset></div>'+
    '<div class="rp-note">Toute modification du contenu ou des destinataires annule la validation : le rapport doit être revalidé.</div>';
  h+='<div class="rp-prev-h"><b>Aperçu du rapport</b><button class="lnk" data-act="reportPreview">'+(preview?'Masquer l\'aperçu':'Afficher l\'aperçu')+'</button></div>';
  if(preview) h+=reportPreviewHTML(r,p);
  h+='<div class="dr-foot"><span class="dr-msg" aria-live="polite"></span><button class="btn-sec" data-act="closeDrawer">Fermer</button>'+
    (ok?'':'<button class="btn" data-act="reportApprove">'+ico('🔒')+'Valider l\'envoi</button>')+'</div>';
  return h;
}
function reportPreviewHTML(r,p){
  var on=function(id){ return r.sections.some(function(x){return x.id===id&&x.on;}); };
  var h='<div class="rpv"><div class="rpv-top"><div class="rpv-logo">Pyr<span>a</span>mide</div><div><b>Rapport de Formation · '+esc(r.period)+'</b><small>'+esc(p.meta.title)+' · période se terminant le '+esc(r.periodEnd)+'</small></div></div>';
  if(on('synth')) h+='<h3>Synthèse et faits marquants</h3><ul class="rpv-syn">'+synthItems(p,true).map(function(x){return '<li>'+x.h+'</li>';}).join('')+'</ul>';
  var tbl=function(rows){ return '<table class="rpv-tbl"><thead><tr><th>Indicateur</th><th>Valeur</th><th>Seuil</th><th>Sur un an</th><th>Statut</th></tr></thead><tbody>'+rows.map(function(k){ var y=k.hist&&k.hist.length>12?histDelta(k,12):null;
    return '<tr><td>'+esc(k.label)+'</td><td><b>'+esc(k.text)+'</b></td><td>'+thrText(k)+'</td><td>'+(y==null?'—':deltaTxt(k,y))+'</td><td><span class="st lv'+lvl(k)+'"><i></i>'+LVL_TXT[lvl(k)]+'</span></td></tr>'; }).join('')+'</tbody></table>'; };
  h+='<h3>Indicateurs clés</h3>'+tbl(p.hero);
  r.sections.forEach(function(s){ if(!s.on||!REPORT_MAP[s.id]) return; var rows=[]; p.sections.forEach(function(sec){ if(REPORT_MAP[s.id].test(sec.title)) rows=rows.concat(sec.rows); });
    if(rows.length) h+='<h3>'+esc(s.label)+'</h3>'+tbl(rows); });
  if(on('reco')){ var bad=collectKpis(p).filter(function(k){return lvl(k);}).slice(0,4);
    h+='<h3>Recommandations</h3><ul class="rpv-syn">'+(bad.length?bad.map(function(k){return '<li>Ramener « '+esc(k.label)+' » au seuil ('+thrText(k)+') : identifier les personnes concernées et organiser les relances.</li>';}).join(''):'<li>Maintenir le rythme actuel : aucun indicateur hors seuil.</li>')+'</ul>'; }
  return h+'<div class="rpv-foot">Document confidentiel · généré par Pyramide LMS</div></div>';
}

/* ═══ Couche de sécurité front-end ═══
   Rappel (Spécifications de sécurité, principe transversal) : l'interface n'est JAMAIS la frontière de sécurité.
   Cette couche (1) ne fait jamais confiance aux données reçues, (2) n'envoie jamais de périmètre choisi par le client,
   (3) ne conserve aucun secret dans le navigateur, (4) échoue de façon générique. L'autorisation réelle est côté serveur. */

/* ── Assainissement des réponses du serveur (données non fiables) ── */
var S={
  str:function(x,max){ return String(x==null?'':x).slice(0,max||200); },
  num:function(x){ var n=Number(x); return isFinite(n)?n:0; },
  lvl:function(x){ x=Number(x); return x===1||x===2?x:0; },
  arr:function(a,max){ return Array.isArray(a)?a.slice(0,max||100):[]; },
  hex:function(x,d){ return /^#[0-9A-Fa-f]{6}$/.test(x)?x:d; }
};
function cleanWidget(w){
  if(!w||typeof w!=='object') return null;
  switch(w.type){
    case 'gauge': return {type:'gauge',value:S.num(w.value),max:S.num(w.max)||100,unit:S.str(w.unit,10)};
    case 'bar': return {type:'bar',value:S.num(w.value),max:S.num(w.max)||100,unit:S.str(w.unit,10),targetLabel:S.str(w.targetLabel,60)};
    case 'ring': return {type:'ring',value:S.num(w.value),max:S.num(w.max)||100,unit:S.str(w.unit,10)};
    case 'counter': return {type:'counter',unit:S.str(w.unit,60),delta:w.delta==null?null:S.num(w.delta),deltaUnit:S.str(w.deltaUnit,30)};
    case 'streak': return {type:'streak',icons:S.arr(w.icons,6).map(function(i){return S.str(i,8);}),days:S.num(w.days)};
    case 'countdown': return {type:'countdown',days:S.num(w.days),label:S.str(w.label,60)};
    case 'rank': return {type:'rank',rank:S.num(w.rank),total:S.num(w.total)};
    default: return null;
  }
}
function cleanKpi(k){
  k=k||{};
  return {id:S.str(k.id,64),label:S.str(k.label,200),text:S.str(k.text,120),n:k.n==null?null:S.num(k.n),dir:k.dir==='max'?'max':'min',
    warn:S.num(k.warn),crit:S.num(k.crit),unit:S.str(k.unit,20),freq:S.str(k.freq,30),thrLabel:S.str(k.thrLabel,120),info:S.str(k.info,200),
    hist:S.arr(k.hist,36).map(S.num),yoy:k.yoy===true,split:S.arr(k.split,4).map(function(x){x=x||{};return {label:S.str(x.label,30),value:S.num(x.value)};}),
    na:k.na===true,widget:cleanWidget(k.widget),titulaire:k.titulaire&&typeof k.titulaire==='object'?{label:S.str(k.titulaire.label,80)}:null};
}
function cleanPayload(p){
  p=p||{}; var m=p.meta||{}, f=p.filters||{};
  var out={
    meta:{title:S.str(m.title,80),icon:S.str(m.icon,8),subtitle:S.str(m.subtitle,200),accent:S.hex(m.accent,'#1A2E3A'),bg:S.hex(m.bg,'#F1F5F9'),
      actions:S.arr(m.actions,4).filter(function(a){return a==='export';}),userLabel:S.str(m.userLabel,80)},
    nudges:S.arr(p.nudges,10).map(function(x){return S.str(x,300);}),
    notices:S.arr(p.notices,5).map(function(x){return S.str(x,300);}),
    filters:{views:S.arr(f.views,10).map(function(v){return {id:S.str(v.id,20),label:S.str(v.label,40)};}),view:S.str(f.view,20),
      people:S.arr(f.people,60).map(function(v){return {id:S.str(v.id,40),label:S.str(v.label,60)};}),person:S.str(f.person,40)||'all',personLabel:S.str(f.personLabel,60),
      compareAvailable:!!f.compareAvailable,compareLabel:S.str(f.compareLabel,60),compare:!!f.compare,periodAvailable:!!f.periodAvailable,period:S.str(f.period,10)||'month'},
    hero:S.arr(p.hero,12).map(cleanKpi),
    blocks:[],
    sections:S.arr(p.sections,10).map(function(s){return {title:S.str(s.title,120),rows:S.arr(s.rows,40).map(cleanKpi)};})
  };
  S.arr(p.blocks,12).forEach(function(b){ var B=b&&BLOCKS[b.type]; if(B) out.blocks.push(B.clean(b,S)); });   /* type inconnu (ou hors domaine) = ignoré */
  out.pins=S.arr(p.pins,6).map(function(x){return S.str(x,64);});
  out.drillable=S.arr(p.drillable,60).map(function(x){return S.str(x,64);});
  var ad=p.admin; out.admin=ad&&typeof ad==='object'?{thresholds:ad.thresholds===true,report:{status:ad.report&&ad.report.status==='approved'?'approved':'draft',period:S.str(ad.report&&ad.report.period,20)}}:null;
  return out;
}
/* Réponses des fonctions avancées : même principe, tout est retypé et borné avant usage */
function cleanPeople(d){ d=d||{}; return {kpi:S.str(d.kpi,64),title:S.str(d.title,120),col:S.str(d.col,60),late:d.late===true,
  rows:S.arr(d.rows,300).map(function(r){r=r||{};return {id:S.str(r.id,80),name:S.str(r.name,80),dept:S.str(r.dept,60),detail:S.str(r.detail,120),days:S.num(r.days),late:r.late===undefined?d.late===true:r.late===true,reminded:r.reminded===true};})}; }
function cleanThresholds(d){ d=d||{}; return S.arr(d.items,300).map(function(x){x=x||{};return {id:S.str(x.id,64),label:S.str(x.label,200),group:S.str(x.group,60),dir:x.dir==='max'?'max':'min',unit:S.str(x.unit,20),
  warn:S.num(x.warn),crit:S.num(x.crit),defWarn:S.num(x.defWarn),defCrit:S.num(x.defCrit),modified:x.modified===true};}); }
function cleanReport(d){ d=d||{}; var L=function(a){return S.arr(a,20).map(function(x){x=x||{};return {id:S.str(x.id,30),label:S.str(x.label,120),on:x.on===true};});};
  return {period:S.str(d.period,20),periodEnd:S.str(d.periodEnd,40),sendDate:S.str(d.sendDate,40),status:d.status==='approved'?'approved':'draft',approvedAt:S.str(d.approvedAt,40),recipients:L(d.recipients),sections:L(d.sections)}; }
function cleanAlertList(l){
  return S.arr(l,80).map(function(e){return {label:S.str(e.label,200),text:S.str(e.text,120),thrLabel:S.str(e.thrLabel,120),level:S.lvl(e.level)||1,titulaire:S.str(e.titulaire,80),watchers:S.arr(e.watchers,8).map(function(w){return S.str(w,60);})};});
}
function cleanAlerts(a){ a=a||{}; return {own:cleanAlertList(a.own),watched:cleanAlertList(a.watched)}; }
function cleanSession(s){
  s=s||{};
  return {profile:S.str(s.profile,40),realm:S.str(s.realm,20),userLabel:S.str(s.userLabel,80),mfaVerified:s.mfaVerified===true,csrfToken:S.str(s.csrfToken,200),idleTimeoutSec:Math.max(60,S.num(s.idleTimeoutSec)||900)};
}

/* ── Client d'API : cookies de session httpOnly (jamais lisibles par le JS), en-tête anti-CSRF sur les écritures, pas de cache ── */
var Api={
  transport:null, csrf:'',
  get:function(path,query){ return Api.transport('GET',path,query,null); },
  post:function(path,body){ return Api.transport('POST',path,null,body); },
  put:function(path,body){ return Api.transport('PUT',path,null,body); }
};
function safeLocalUrl(u){ return typeof u==='string' && u.charAt(0)==='/' && u.charAt(1)!=='/' && u.indexOf('\\')<0; }
function fetchTransport(method,path,query,body){
  var parts=[]; if(query) Object.keys(query).forEach(function(k){ if(query[k]!=null&&query[k]!=='') parts.push(encodeURIComponent(k)+'='+encodeURIComponent(query[k])); });
  var opt={method:method,credentials:'same-origin',cache:'no-store',redirect:'error',referrerPolicy:'no-referrer',headers:{'Accept':'application/json','X-Requested-With':'pyramide-dashboard'}};
  if(method!=='GET'){ opt.headers['Content-Type']='application/json'; opt.headers['X-CSRF-Token']=Api.csrf; opt.body=JSON.stringify(body||{}); }
  return fetch(PY_CONFIG.apiBase+path+(parts.length?'?'+parts.join('&'):''),opt).then(function(r){
    if(r.status===401){ Screens.redirect(PY_CONFIG.loginUrl); throw {kind:'auth'}; }
    if(r.status===403||r.status===404) throw {kind:'notfound'};          /* 403 et 404 : même écran générique (aucune fuite d'existence) */
    if(r.status===429) throw {kind:'rate'};
    if(!r.ok) throw {kind:'error'};
    if(r.status===204) return null;
    if((r.headers.get('content-type')||'').indexOf('application/json')<0) throw {kind:'error'};
    return r.json();
  });
}

/* ── Écrans d'état : textes fixes, jamais de détail technique venant du serveur ── */
var Screens={
  TEXT:{notfound:['Contenu introuvable',"Ce contenu n'existe pas ou vous n'y avez pas accès."],
        expired:['Session expirée','Pour votre sécurité, votre session a été fermée après une période d\'inactivité.'],
        blocked:['Accès non autorisé',"Cette application n'est pas disponible depuis cette adresse."],
        error:['Service momentanément indisponible','Veuillez réessayer dans quelques instants.'],
        rate:['Trop de requêtes','Veuillez patienter quelques instants avant de réessayer.'],
        auth:['Connexion requise','Vous allez être redirigé vers la page de connexion.']},
  html:function(kind){ var t=Screens.TEXT[kind]||Screens.TEXT.error; return '<div class="screen"><h1>'+esc(t[0])+'</h1><p>'+esc(t[1])+'</p>'+(kind==='expired'&&safeLocalUrl(PY_CONFIG.loginUrl)?'<a href="'+esc(PY_CONFIG.loginUrl)+'">Se reconnecter</a>':'')+'</div>'; },
  show:function(kind){ var c=document.getElementById('content'); if(c) c.innerHTML=Screens.html(kind); var t=document.getElementById('topbar'); if(t) t.style.display='none'; var a=document.getElementById('apanel'); if(a) a.classList.remove('open'); },
  redirect:function(url){ if(safeLocalUrl(url)) location.replace(url); else Screens.show('auth'); }
};

/* ── Verrouillage sur inactivité : la session expire côté serveur (JWT 15 min) ; l'interface efface les données affichées ── */
var Idle={ timer:null,
  start:function(sec,onExpire){
    var reset=function(){ clearTimeout(Idle.timer); Idle.timer=setTimeout(onExpire,sec*1000); };
    ['click','keydown','scroll','touchstart'].forEach(function(ev){ document.addEventListener(ev,reset,{passive:true}); });
    reset();
  }
};

/* ── Traçabilité : seules les actions sensibles listées ici sont envoyées, sans donnée personnelle (F-SEC-07) ── */
var Audit={ ALLOWED:{'dashboard.export':1,'compare.view':1,'filter.person':1,'filter.view':1},
  log:function(action,meta){
    if(!Audit.ALLOWED[action]||PY_CONFIG.mode!=='prod') return;
    var m={}; if(meta&&meta.view) m.view=S.str(meta.view,20); if(meta&&meta.person) m.person=S.str(meta.person,40);   /* identifiants opaques uniquement */
    try{ Api.post('/audit/ui',{action:action,meta:m}).catch(function(){}); }catch(e){}
  }
};

/* ── Durcissement de la page ── */
function frameBust(){ try{ if(window.top!==window.self){ window.top.location=window.self.location; } }catch(e){ document.documentElement.innerHTML=''; } }
function originAllowed(){
  if(PY_CONFIG.mode!=='prod'||!PY_CONFIG.allowedHosts||!PY_CONFIG.allowedHosts.length) return true;
  return PY_CONFIG.allowedHosts.indexOf(location.hostname)>=0;
}

/* ═══ Application : état, actions déléguées (aucun gestionnaire inline → CSP stricte), chargement, rendu ═══ */
var App={
  ui:{view:'global',person:'all',compare:false,period:'month',sort:null},
  session:null, payload:null, alerts:{own:[],watched:[]},

  query:function(){
    var q={}, u=App.ui, f=App.payload&&App.payload.filters;
    if(u.view&&u.view!=='global') q.view=u.view;
    if(u.person&&u.person!=='all') q.person=u.person;     /* identifiant opaque : le serveur vérifie qu'il est dans le périmètre */
    if(u.compare) q.compare='1';
    if(f&&f.periodAvailable&&u.view===f.view) q.period=u.period;   /* la période n'est envoyée que si la vue courante la supporte (sinon 403 côté serveur) */
    return q;
  },
  load:function(){
    return Promise.all([Api.get('/dashboard',App.query()),Api.get('/alerts')]).then(function(r){
      App.payload=cleanPayload(r[0]); App.alerts=cleanAlerts(r[1]);
      var f=App.payload.filters; App.ui.view=f.view||'global'; App.ui.person=f.person; App.ui.compare=f.compare; App.ui.period=f.period;
      App.render();
    }).catch(App.fail);
  },
  fail:function(e){ Screens.show(e&&e.kind&&Screens.TEXT[e.kind]?e.kind:'error'); },

  render:function(){
    var p=App.payload, m=p.meta;
    var set=function(id,fn){ var el=document.getElementById(id); if(el) fn(el); };
    set('topbar',function(e){e.style.display='';});
    set('tbIcon',function(e){e.innerHTML=ico(m.icon);});
    set('tbTitle',function(e){e.textContent=m.title;});
    set('tbSub',function(e){e.textContent=m.subtitle;});
    set('tbUpdated',function(e){e.textContent='Mise à jour · à l\'instant';});
    set('exportBtn',function(e){e.style.display=m.actions.indexOf('export')>=0?'inline-flex':'none';e.style.background='';});
    set('periodSel',function(e){e.style.display=p.filters.periodAvailable?'':'none';e.value=p.filters.period;});
    set('wm',function(e){e.textContent='Document confidentiel — '+(App.session?App.session.userLabel:'')+' — '+new Date().toLocaleString('fr-FR');});
    set('content',function(e){e.innerHTML=icoAll(dashboardHTML(p,App.ui,App.alerts,App.ai));});
    App.updateBell();
    if(App.afterRender) App.afterRender();
  },
  updateBell:function(){
    var n=App.alerts.own.length+App.alerts.watched.length, el=document.getElementById('bellN'); if(!el) return;
    el.textContent=n; el.className='bn'+(n?'':' none');
    var pn=document.getElementById('apanel'); if(pn&&pn.classList.contains('open')) App.renderAlerts();
  },
  renderAlerts:function(){ document.getElementById('apanel').innerHTML=icoAll(alertsPanelHTML(App.alerts,App.payload?App.payload.meta.title:'')); },

  actions:{
    setView:function(v){ App.ui.view=v; App.ui.person='all'; App.ui.compare=false; App.ui.sort=null; Audit.log('filter.view',{view:v}); App.load(); },
    setPerson:function(v,el){ App.ui.person=el.value; Audit.log('filter.person',{view:App.ui.view,person:el.value}); App.load(); },
    setCompare:function(v,el){ App.ui.compare=el.checked; if(el.checked) Audit.log('compare.view',{view:App.ui.view}); App.load(); },
    resetPerson:function(){ App.ui.person='all'; App.load(); },
    sortBy:function(id){ App.ui.sort=(App.ui.sort&&App.ui.sort.id===id)?{id:id,asc:!App.ui.sort.asc}:{id:id,asc:false}; App.render(); },
    toggleAlerts:function(){ var p=document.getElementById('apanel'); if(p.classList.contains('open')) p.classList.remove('open'); else { App.renderAlerts(); p.classList.add('open'); } },
    closeAlerts:function(){ document.getElementById('apanel').classList.remove('open'); },
    toggleRank:function(id){ var el=document.getElementById(id); if(!el) return; var num=el.querySelector('.rank-num'), btn=el.querySelector('.rank-toggle');
      if(num.style.filter==='blur(6px)'){ num.style.filter=''; btn.textContent='Masquer mon classement'; } else { num.style.filter='blur(6px)'; btn.textContent='Afficher mon classement'; } },
    exportPdf:function(){ Audit.log('dashboard.export',{view:App.ui.view}); window.print(); },
    /* ── Détail d'un indicateur (panneau latéral) ── */
    openKpi:function(id){ var k=App.kpi(id); if(!k) return; App.drawer('<div class="dr-h"><div><h2>'+esc(k.label)+'</h2><p>'+(k.freq?'Mise à jour '+esc(k.freq.toLowerCase())+' · ':'')+'Seuil '+thrText(k)+'</p></div></div>'+kpiDetailHTML(k,(App.payload.drillable||[]).indexOf(k.id)>=0)); },
    closeDrawer:function(){ var d=document.getElementById('kdrawer'); if(d){ d.className='drawer'; clearTimeout(App._dt); App._dt=setTimeout(function(){ if(!d.classList.contains('open')){ var bd=d.querySelector('.dr-body'); if(bd) bd.textContent=''; } },300); if(App._focus&&App._focus.focus) App._focus.focus(); } },
    /* ── Personnes concernées et relances ── */
    loadPeople:function(id,t){ var box=t.closest('.kd-people'); t.disabled=true; t.textContent='Chargement…';
      Api.get('/kpi/people',{id:id}).then(function(d){ box.innerHTML=icoAll(peopleHTML(cleanPeople(d))); }).catch(function(){ box.innerHTML='<div class="kd-empty">La liste n\'a pas pu être chargée. Réessayez dans un instant.</div>'; }); },
    peopleAll:function(v,el){ var pp=el.closest('.pp'); pp.querySelectorAll('.pp-chk').forEach(function(c){c.checked=el.checked;}); App.actions.peopleSel(null,el); },
    peopleSel:function(v,el){ var pp=el.closest('.pp'), n=pp.querySelectorAll('.pp-chk:checked').length; pp.querySelector('.pp-n').textContent=n; },
    sendReminders:function(kpi,t){ var pp=t.closest('.pp'), ids=[].map.call(pp.querySelectorAll('.pp-chk:checked'),function(c){return c.value;}), msg=pp.querySelector('.pp-msg');
      if(!ids.length){ msg.textContent='Sélectionnez au moins une personne.'; msg.className='pp-msg err'; return; }
      t.disabled=true; Api.post('/kpi/reminders',{kpi:kpi,ids:ids}).then(function(r){ var n=S.num(r&&r.sent);
        ids.forEach(function(id){ var c=pp.querySelector('.pp-chk[value="'+id.replace(/"/g,'')+'"]'); if(c){ c.checked=false; var td=c.closest('tr').lastChild; td.innerHTML='<span class="pp-sent">Relancé</span>'; } });
        msg.textContent=n+' relance'+(n>1?'s envoyées':' envoyée')+'.'; msg.className='pp-msg ok'; pp.querySelector('.pp-n').textContent='0'; t.disabled=false;
      }).catch(function(){ msg.textContent='Les relances n\'ont pas pu être envoyées. Réessayez.'; msg.className='pp-msg err'; t.disabled=false; }); },
    /* ── Favoris ── */
    togglePin:function(id,t,e){ if(e) e.stopPropagation(); var pins=(App.payload.pins||[]).slice(), i=pins.indexOf(id);
      if(i>=0) pins.splice(i,1); else { if(pins.length>=6){ App.toast('Vous avez déjà 6 favoris : retirez-en un pour en épingler un autre.'); return; } pins.push(id); }
      Api.put('/me/pins',{ids:pins}).then(function(r){ App.payload.pins=S.arr(r&&r.ids,6).map(function(x){return S.str(x,64);}); var y=window.scrollY; App.render(); window.scrollTo(0,y);
        App.toast(i>=0?'Indicateur retiré des favoris.':'Indicateur épinglé dans vos favoris.'); }).catch(function(){ App.toast('Le favori n\'a pas pu être enregistré.'); }); },
    /* ── Admin RH : seuils de l'entité ── */
    openThresholds:function(){ App.thr={items:[],ui:{group:null,onlyMod:false}};
      Api.get('/settings/thresholds').then(function(d){ App.thr.items=cleanThresholds(d); App.drawer(thresholdsHTML(App.thr.items,App.thr.ui),true); }).catch(function(){ App.toast('Les seuils n\'ont pas pu être chargés.'); }); },
    thrGroup:function(v){ App.thrSync(); App.thr.ui.group=v; App.drawerBody(thresholdsHTML(App.thr.items,App.thr.ui)); },
    thrOnlyMod:function(v,el){ App.thrSync(); App.thr.ui.onlyMod=el.checked; App.drawerBody(thresholdsHTML(App.thr.items,App.thr.ui)); },
    thrEdit:function(v,el){ App.thrCheck(el.closest('tr')); },
    thrReset:function(id){ App.thrSync(); App.thr.items.forEach(function(x){ if(x.id===id){ x.warn=x.defWarn; x.crit=x.defCrit; x.modified=false; x.dirty=true; } }); App.drawerBody(thresholdsHTML(App.thr.items,App.thr.ui)); },
    thrSave:function(){ if(!App.thrSync()){ App.drawerMsg('Corrigez les seuils signalés avant d\'enregistrer.',true); return; }
      var items=App.thr.items.filter(function(x){return x.dirty;}).map(function(x){return {id:x.id,warn:x.warn,crit:x.crit};});
      if(!items.length){ App.drawerMsg('Aucune modification à enregistrer.'); return; }
      Api.put('/settings/thresholds',{items:items}).then(function(d){ App.thr.items=cleanThresholds(d); App.drawerBody(thresholdsHTML(App.thr.items,App.thr.ui));
        App.drawerMsg(items.length+' seuil'+(items.length>1?'s enregistrés':' enregistré')+'. Les statuts et alertes sont recalculés.'); App.reload(); })
      .catch(function(){ App.drawerMsg('Les seuils n\'ont pas pu être enregistrés.',true); }); },
    /* ── Admin RH : rapport trimestriel ── */
    openReport:function(){ Api.get('/reports/quarterly').then(function(d){ App.rep={r:cleanReport(d),preview:false}; App.drawer(reportHTML(App.rep.r,App.payload,false),true); }).catch(function(){ App.toast('Le rapport n\'a pas pu être chargé.'); }); },
    reportPreview:function(){ App.rep.preview=!App.rep.preview; App.drawerBody(reportHTML(App.rep.r,App.payload,App.rep.preview)); },
    reportEdit:function(v,el){ var body=App.drawerEl(), pick=function(k){ return [].map.call(body.querySelectorAll('input[data-k="'+k+'"]:checked'),function(c){return c.value;}); };
      var b={recipients:pick('recipients'),sections:pick('sections')};
      if(!b.recipients.length||!b.sections.length){ el.checked=true; App.drawerMsg('Le rapport doit garder au moins un destinataire et une rubrique.',true); return; }
      Api.put('/reports/quarterly',b).then(function(d){ App.rep.r=cleanReport(d); App.drawerBody(reportHTML(App.rep.r,App.payload,App.rep.preview)); App.drawerMsg('Modification enregistrée. Le rapport est à valider.'); App.reload(); })
      .catch(function(){ App.drawerMsg('La modification n\'a pas pu être enregistrée.',true); }); },
    reportApprove:function(a,t){
      if(!t.classList.contains('confirm')){ var n=App.rep.r.recipients.filter(function(x){return x.on;}).length; t.classList.add('confirm'); t.textContent='Confirmer l\'envoi à '+n+' destinataire'+(n>1?'s':''); return; }
      Api.post('/reports/quarterly/approve',{}).then(function(d){ App.rep.r=cleanReport(d); App.drawerBody(reportHTML(App.rep.r,App.payload,App.rep.preview)); App.drawerMsg('Envoi validé.'); App.reload(); })
      .catch(function(){ App.drawerMsg('La validation n\'a pas pu être enregistrée.',true); }); },
    reportRevoke:function(){ Api.post('/reports/quarterly/revoke',{}).then(function(d){ App.rep.r=cleanReport(d); App.drawerBody(reportHTML(App.rep.r,App.payload,App.rep.preview)); App.reload(); }).catch(function(){}); },
    toggleRow:function(a,t){ var r=t.closest('.cat-row'); if(!r) return; var o=r.classList.toggle('open'); t.setAttribute('aria-expanded',o?'true':'false'); },
    toggleMenu:function(){ var s=document.getElementById('sb'); if(s) s.classList.toggle('open'); }
  },
  bind:function(){
    document.addEventListener('click',function(e){
      var t=e.target.closest?e.target.closest('[data-act]'):null;
      if(t&&App.actions[t.getAttribute('data-act')]&&t.tagName!=='SELECT'&&t.tagName!=='INPUT'){ App.actions[t.getAttribute('data-act')](t.getAttribute('data-arg'),t,e); return; }
      var p=document.getElementById('apanel'); if(p&&p.classList.contains('open')&&!p.contains(e.target)&&!e.target.closest('#bell')) p.classList.remove('open');
    });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'){ var d=document.getElementById('kdrawer'); if(d&&d.classList.contains('open')) App.actions.closeDrawer(); } });
    document.addEventListener('keydown',function(e){ if((e.key==='Enter'||e.key===' ')&&e.target.getAttribute&&e.target.getAttribute('data-act')==='toggleRow'){ e.preventDefault(); App.actions.toggleRow(null,e.target,e); } });
    document.addEventListener('change',function(e){
      var t=e.target; if(t.id==='periodSel'){ App.ui.period=t.value; App.load(); return; }
      var a=t.getAttribute&&t.getAttribute('data-chg'); if(a&&App.actions[a]) App.actions[a](t.value,t,e);
    });
    App.bindTips();
    var bell=document.getElementById('bell'); if(bell) bell.addEventListener('click',function(e){e.stopPropagation();App.actions.toggleAlerts();});
  },

  kpi:function(id){ var a=App.payload?collectKpis(App.payload):[]; for(var i=0;i<a.length;i++) if(a[i].id===id) return a[i]; return null; },
  reload:function(){ var y=window.scrollY; return Promise.all([Api.get('/dashboard',App.query()),Api.get('/alerts')]).then(function(r){ App.payload=cleanPayload(r[0]); App.alerts=cleanAlerts(r[1]); App.render(); window.scrollTo(0,y); }).catch(function(){}); },
  /* Panneau latéral (détail d'indicateur, seuils, rapport) : contenu toujours issu de gabarits échappés */
  drawer:function(html,wide){ var d=document.getElementById('kdrawer');
    if(!d){ d=document.createElement('div'); d.id='kdrawer'; d.className='drawer'; d.innerHTML='<div class="dr-back" data-act="closeDrawer"></div><aside class="dr-panel" role="dialog" aria-modal="true" aria-label="Détail"><button class="dr-close" data-act="closeDrawer" aria-label="Fermer">✕</button><div class="dr-body"></div></aside>'; document.body.appendChild(d); }
    App._focus=document.activeElement; App.drawerBody(html); d.className='drawer open'+(wide?' wide':''); d.querySelector('.dr-panel').scrollTop=0; d.querySelector('.dr-close').focus(); },
  drawerEl:function(){ return document.querySelector('#kdrawer .dr-body'); },
  drawerBody:function(html){ var b=App.drawerEl(); if(b) b.innerHTML=icoAll(html); },
  drawerMsg:function(t,err){ var m=document.querySelector('#kdrawer .dr-msg'); if(m){ m.textContent=t; m.className='dr-msg'+(err?' err':' ok'); } },
  toast:function(t){ var el=document.getElementById('toast'); if(!el){ el=document.createElement('div'); el.id='toast'; el.setAttribute('role','status'); document.body.appendChild(el); }
    el.textContent=t; el.className='show'; clearTimeout(App._tt); App._tt=setTimeout(function(){el.className='';},3200); },
  /* Seuils : relit les champs affichés, contrôle la cohérence (le serveur revalide de toute façon) */
  thrCheck:function(tr){ var w=parseFloat(tr.querySelector('[data-f="warn"]').value), c=parseFloat(tr.querySelector('[data-f="crit"]').value), dir=tr.getAttribute('data-dir'), pct=tr.getAttribute('data-pct')==='1', err='';
    if(!isFinite(w)||!isFinite(c)) err='Saisissez deux nombres.'; else if(pct&&(w<0||w>100||c<0||c>100)) err='Un pourcentage doit être compris entre 0 et 100.';
    else if(dir==='min'?c>w:c<w) err='Le seuil critique doit être '+(dir==='min'?'inférieur ou égal':'supérieur ou égal')+' au seuil d\'alerte.';
    tr.querySelector('.th-err').textContent=err; tr.classList.toggle('bad',!!err); return err?null:{w:w,c:c}; },
  thrSync:function(){ var ok=true, b=App.drawerEl(); if(!b) return true;
    [].forEach.call(b.querySelectorAll('.th-tbl tbody tr'),function(tr){ var v=App.thrCheck(tr); if(!v){ ok=false; return; } var id=tr.getAttribute('data-id');
      App.thr.items.forEach(function(x){ if(x.id===id&&(x.warn!==v.w||x.crit!==v.c)){ x.warn=v.w; x.crit=v.c; x.dirty=true; } }); }); return ok; },

  /* Infobulle des indicateurs : texte injecté via textContent uniquement (jamais innerHTML) */
  bindTips:function(){
    var tip=document.createElement('div'); tip.id='ktip'; tip.setAttribute('role','tooltip'); document.body.appendChild(tip); var cur=null;
    function show(el){
      var d=el.getAttribute('data-def')||'', c=el.getAttribute('data-calc')||''; if(!d&&!c) return;
      tip.textContent=''; var t=document.createElement('b'); t.textContent=el.textContent; tip.appendChild(t);
      if(d){ var p=document.createElement('p'); p.textContent=d; tip.appendChild(p); }
      if(c){ var q=document.createElement('div'); q.className='kt-calc'; q.textContent='Calcul : '+c; tip.appendChild(q); }
      tip.className='open'; cur=el; el.setAttribute('aria-describedby','ktip');
      var r=el.getBoundingClientRect(), w=tip.offsetWidth, h=tip.offsetHeight, x=Math.max(10,Math.min(r.left,window.innerWidth-w-10)), y=r.bottom+8;
      if(y+h>window.innerHeight-8) y=r.top-h-8; tip.style.left=x+'px'; tip.style.top=Math.max(8,y)+'px';
    }
    function hide(){ tip.className=''; if(cur){ cur.removeAttribute('aria-describedby'); cur=null; } }
    document.addEventListener('mouseover',function(e){ var el=e.target.closest&&e.target.closest('.kdef'); if(el&&el!==cur) show(el); else if(!el&&cur) hide(); });
    document.addEventListener('focusin',function(e){ var el=e.target.closest&&e.target.closest('.kdef'); if(el) show(el); });
    document.addEventListener('focusout',hide);
    document.addEventListener('scroll',hide,true);
    document.addEventListener('keydown',function(e){ if(e.key==='Escape') hide(); });
  },

  /* Démarrage production : la session est fournie par le serveur ; le navigateur ne « choisit » jamais son profil */
  boot:function(){
    if(PY_CONFIG.mode==='prod') frameBust();   /* anti-clickjacking : désactivé en démo, prévue pour être intégrée dans un aperçu (iframe) */
    App.bind();
    if(!originAllowed()){ Screens.show('blocked'); return; }
    if(typeof App.demoStart==='function'){ App.demoStart(); return; }
    Api.transport=fetchTransport;
    Api.get('/session').then(function(raw){
      var s=cleanSession(raw);
      if(!s.mfaVerified){ Screens.redirect(PY_CONFIG.mfaUrl); return; }                       /* MFA obligatoire (F-SEC-05) */
      if(s.realm!==PY_CONFIG.realm||PY_CONFIG.profiles.indexOf(s.profile)<0){ Screens.show('notfound'); return; }   /* mauvais domaine / profil : écran générique */
      App.session=s; Api.csrf=s.csrfToken;
      Idle.start(s.idleTimeoutSec,function(){ var c=document.getElementById('content'); if(c) c.innerHTML=''; Screens.show('expired'); });
      return App.load();
    }).catch(App.fail);
  }
};


  /* ═══ Démarrage dans l'application : session et transport fournis par le composant Angular ═══ */
  return {
    demarrer: function () {
      App.bind();
      Api.transport = function (method, path, query, body) {
        return transport(method, path, query, body).catch(function (e) { throw (e && e.kind) ? e : { kind: 'error' }; });
      };
      App.session = { userLabel: libelleUtilisateur };
      return App.load();
    },
    detruire: function () {
      __ecouteurs.forEach(function (x) { x[0].removeEventListener(x[1], x[2], x[3]); });
      __ecouteurs = [];
      clearTimeout(App._tt); clearTimeout(App._dt); clearTimeout(Idle.timer);
    }
  };
}
