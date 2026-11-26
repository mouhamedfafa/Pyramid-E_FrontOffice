"""
Extrait le CSS et le moteur JS du modèle « Pyramide LMS — Tableaux de bord V4.12 » et génère :
  - pyramide-dashboard.css        : styles du modèle, adaptés au Shadow DOM (:root -> :host, body -> .pyr-root)
  - pyramide-dashboard.engine.ts  : moteur de rendu du modèle (sans le serveur simulé ni le mode démo),
                                    encapsulé dans une fabrique qui le lie à une racine Shadow DOM.
Usage : python tools/dashboards/extraire_modele.py "<modele V4.12.html>" src/app/shared/components/kpi-dashboard
"""
import re
import sys

src, out = sys.argv[1], sys.argv[2]
html = open(src, encoding='utf-8').read()

# ───────────────────────────── CSS ─────────────────────────────
css = re.search(r'<style>(.*?)</style>', html, re.S).group(1)


def sub1(pattern, repl, text, count=1, flags=0):
    new, n = re.subn(pattern, repl, text, count=count, flags=flags)
    if n == 0:
        raise SystemExit('Motif introuvable : ' + pattern[:80])
    return new


def rep(old, new, text, count=1):
    if old not in text:
        raise SystemExit('Texte introuvable : ' + old[:90])
    return text.replace(old, new, count)


css = rep(':root{', ':host{display:block;', css)
# Agent IA retiré des dashboards : ses styles (trois blocs en fin de feuille) ne sont pas repris
css = css[:css.index('/* ───────── Agent IA ───────── */')]
css = rep('html{height:100%}\n', '', css)
# body -> racine du composant (sans la mise en page pleine page du modèle : barre latérale de démo absente)
css = sub1(r'body\{font-family:var\(--sans\);background:var\(--paper\);color:var\(--txt\);font-size:14px;-webkit-font-smoothing:antialiased;display:flex;min-height:100vh;overflow-x:clip;font-variant-numeric:tabular-nums\}',
           '.pyr-root{font-family:var(--sans);background:var(--paper);color:var(--txt);font-size:14px;line-height:normal;-webkit-font-smoothing:antialiased;font-variant-numeric:tabular-nums;border-radius:18px;overflow:clip;text-align:left}', css)
css = rep('body.prod{display:block}\nbody.prod .main{min-height:100vh}\n', '', css)
# Les règles responsives du modèle portent sur la largeur de la zone principale (fenêtre − barre latérale de 268 px) :
# dans l'application, le dashboard occupe une colonne ; on les convertit en requêtes de conteneur.
def media_vers_container(m):
    largeur = int(m.group(1))
    zone = largeur - 268 if largeur > 860 else largeur - 32
    return '@container pyrdash (max-width:%dpx)' % zone
css = re.sub(r'@media \(max-width:(\d+)px\)', media_vers_container, css)
# Impression : la mise en page est conservée, les commandes sont masquées (règles du modèle inchangées)
css += """
/* ───────── Intégration Pyramide LMS (application Angular) ───────── */
.main{container:pyrdash/inline-size;position:relative}
.topbar{position:relative;top:auto;border-radius:18px 18px 0 0}
.apanel{position:absolute;top:84px;right:16px}
.content{max-width:none}
.st.na{color:var(--txt3)}.st.na i{background:#C5D3D5}
.st-dot.na{background:#C5D3D5}
.pl-tile.na i{background:#9FB3B6}
.hcard.na .hc-val{color:var(--txt3)}
.kd-note{font-size:12.5px;color:var(--txt2);background:#fff;border:1px dashed var(--line);border-radius:12px;padding:12px 14px;line-height:1.5}
.fchip.na{background:var(--paper);color:var(--txt2);border:1px solid var(--line)}
/* Cartes KPI : même taille sur tous les dashboards, quel que soit leur nombre (une seule grille, cartes
   d'au moins 260 px, de même hauteur ; les rangées du modèle ne servent plus qu'à l'ordre des cartes). */
.hero-stack{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr));grid-auto-rows:1fr;gap:14px}
.hero-stack .hero-row{display:contents}
"""
open(out + '/pyramide-dashboard.css', 'w', encoding='utf-8').write(css)

# ───────────────────────────── JS ─────────────────────────────
js = re.search(r'<script>(.*?)</script>', html, re.S).group(1)
fin = js.index('/* ═══════════════════════════════════════════════════════════════════════════════════════════\n   BACKEND DE RÉFÉRENCE (mock)')
js = js[:fin]

js = sub1(r'var PY_CONFIG = \{[^\n]*\};', "var PY_CONFIG = {mode:'prod',realm:'',profiles:[]};", js)

# ── Indicateurs dont la donnée n'est pas encore collectée (« na ») : statut neutre, jamais « Dans le seuil » ──
js = rep("widget:cleanWidget(k.widget),titulaire:",
         "na:k.na===true,widget:cleanWidget(k.widget),titulaire:", js)
js = rep("""function kdef(k){
  var g=GLOSSARY[k.id]||'', f=k.info||'';
  if(!g) return esc(k.label);""", """function kdef(k){
  var g=GLOSSARY[k.id]||'', f=k.na?'':(k.info||'');
  if(k.na) g=(g?g+' ':'')+(k.info||'');
  if(!g) return esc(k.label);""", js)
js = rep("var LVL_TXT=['Dans le seuil','Hors seuil','Critique'];",
         "var LVL_TXT=['Dans le seuil','Hors seuil','Critique'];\n"
         "function stHTML(k,l){ return k.na?'<span class=\"st na\"><i></i>Donnée non disponible</span>':'<span class=\"st lv'+l+'\"><i></i>'+LVL_TXT[l]+'</span>'; }", js)
# Cartes : toujours cliquables (détail, comparaison et historique au fil des mois)
js = rep("  var open=k.hist&&k.hist.length>1;\n  return '<div class=\"hcard'+(f?' feat':'')+(l?' flagged lv'+l:'')",
         "  var open=true;\n  return '<div class=\"hcard'+(f?' feat':'')+(k.na?' na':'')+(l?' flagged lv'+l:'')", js)
js = rep("""'<div class="hthr"><span class="st lv'+l+'"><i></i>'+LVL_TXT[l]+'</span>""", """'<div class="hthr">'+stHTML(k,l)+'""", js)
js = rep("for(var q=0;q<list.length;q++){ if(!lvl(list[q])){fi=q;break;} }",
         "for(var q=0;q<list.length;q++){ if(!lvl(list[q])&&!list[q].na){fi=q;break;} }", js)
# Lignes détaillées : toujours dépliables
js = rep("dr=VCTX.drill.indexOf(k.id)>=0, hc=(k.hist&&k.hist.length>1)||dr;", "dr=VCTX.drill.indexOf(k.id)>=0, hc=true;", js)
js = rep("""<span class="st-dot lv'+l+'" title="'+LVL_TXT[l]+'"></span>'""",
         """<span class="st-dot '+(k.na?'na':'lv'+l)+'" title="'+(k.na?'Donnée non disponible':LVL_TXT[l])+'"></span>'""", js)
# Bandeau « Santé des indicateurs » : seuls les indicateurs mesurés sont comptés
js = rep("var all=collectKpis(p), n=all.length; if(!n) return '';",
         "var tous=collectKpis(p), all=tous.filter(function(k){return !k.na;}), nNa=tous.length-all.length, n=all.length; if(!n) return '';", js)
js = rep("""'<div class="pl-tiles">'+tile('ok',c[0],'Dans le seuil')+tile('w',c[1],'Hors seuil')+tile('b',c[2],'Critiques')+'</div>'""",
         """'<div class="pl-tiles">'+tile('ok',c[0],'Dans le seuil')+tile('w',c[1],'Hors seuil')+tile('b',c[2],'Critiques')+(nNa?tile('na',nNa,'Non disponibles'):'')+'</div>'""", js)
js = rep("else out.push({t:'ok',h:'Tous les indicateurs sont dans leur seuil.'});",
         "else out.push({t:'ok',h:all.some(function(k){return k.na;})?'Tous les indicateurs mesurés sont dans leur seuil.':'Tous les indicateurs sont dans leur seuil.'});", js)
# Détail : raison de l'absence de donnée, historique en cours de constitution
js = rep("  tiles.push('<div class=\"kt\"><span>Valeur actuelle</span>",
         "  if(k.na) return '<div class=\"kdetail\"><div class=\"kd-tiles\"><div class=\"kt\"><span>Valeur actuelle</span><b>—</b><small>Seuil '+thrText(k)+'</small></div></div>'+\n"
         "    '<div class=\"kd-note\">'+esc(k.info||'Donnée non disponible.')+'</div></div>';\n"
         "  tiles.push('<div class=\"kt\"><span>Valeur actuelle</span>", js)
js = rep("  if(drillable) h+='<div class=\"kd-people\">",
         "  if(!hc) h+='<div class=\"kd-note\">L\\'historique mensuel de cet indicateur se constitue automatiquement à chaque mise à jour : l\\'évolution sur 12 mois, la comparaison avec le mois précédent et la projection apparaîtront au fil des mois.</div>';\n"
         "  if(drillable) h+='<div class=\"kd-people\">", js)
# Personnes concernées : délai en retard / à venir propre à chaque ligne
js = rep("""'<td class="pp-days'+(d.late?' late':'')+'">'+(d.late?'En retard de '+fmtN(r.days)+' j':'Dans '+fmtN(r.days)+' j')+'</td>'""",
         """'<td class="pp-days'+(r.late?' late':'')+'">'+(r.late?'En retard de '+fmtN(r.days)+' j':'Dans '+fmtN(r.days)+' j')+'</td>'""", js)
js = rep("rows:S.arr(d.rows,300).map(function(r){r=r||{};return {id:S.str(r.id,80),name:S.str(r.name,80),dept:S.str(r.dept,60),detail:S.str(r.detail,120),days:S.num(r.days),reminded:r.reminded===true};})}; }",
         "rows:S.arr(d.rows,300).map(function(r){r=r||{};return {id:S.str(r.id,80),name:S.str(r.name,80),dept:S.str(r.dept,60),detail:S.str(r.detail,120),days:S.num(r.days),late:r.late===undefined?d.late===true:r.late===true,reminded:r.reminded===true};})}; }", js)
# Tableau de comparaison : intitulé de la première colonne fourni par le serveur
js = rep("return {type:'compare-table',title:S.str(b.title,140),note:S.str(b.note,300),",
         "return {type:'compare-table',title:S.str(b.title,140),note:S.str(b.note,300),header:S.str(b.header,40)||'Collaborateur',", js)
js = rep("""<table class="cmp-tbl"><thead><tr><th>Collaborateur</th>'""",
         """<table class="cmp-tbl"><thead><tr><th>'+esc(b.header)+'</th>'""", js)
# Intégration externe : statut « non connecté »
js = rep("return {type:'integration-status',tool:S.str(b.tool,80),status:(b.status==='error')?'error':'ok',",
         "return {type:'integration-status',tool:S.str(b.tool,80),status:b.status==='ok'?'ok':(b.status==='error'?'error':'disconnected'),", js)
js = rep("""    var ok=b.status==='ok', col=ok?OK:BAD, label=ok?'Connecté':'Erreur de synchronisation';""",
         """    if(b.status==='disconnected') return '<div class="chart-card"><div class="chart-head"><div><div class="chart-title">🔌 Intégration — '+esc(b.tool)+'</div>'+
      '<div class="chart-sub">'+esc(b.detail)+'</div></div><span class="fchip na">○ Non connecté</span></div></div>';
    var ok=b.status==='ok', col=ok?OK:BAD, label=ok?'Connecté':'Erreur de synchronisation';""", js)

# ── Agent IA : retiré des dashboards (code, panneaux, boutons et requêtes) ──
debut = js.index('/* ═══ Agent IA Pyramide LMS : lecture des KPI, synthèse et rapports personnalisés ═══')
js = js[:debut] + js[js.index('/* ═══ Couche de sécurité front-end ═══'):]
js = js[:js.index('function cleanAiStatus(d)')] + js[js.index('function cleanAlertList(l)'):]
js = js[:js.index('    /* ── Agent IA ── */')] + js[js.index('    toggleRow:function(a,t)'):]
js = js[:js.index('  /* Fenêtre de modération avant chaque génération')] + js[js.index('  kpi:function(id)'):]
js = rep(r"""+
    '<div class="ai-zone">'+aiBtn('explain','aiExplain',k.id,'Expliquer cet indicateur avec l\'agent IA')+'<div class="ai-host"></div></div>';""", ";", js)
js = rep(r"""+
    '<span class="sy-acts">'+aiBtn('synth','aiSynth',null,'Approfondir avec l\'agent IA',true)+(aiCan('report')?aiBtn('report','aiReportOpen',null,'Rapport avec l\'agent IA',true):'')+'</span></div>'+""", "+'</div>'+", js)
js = rep("""</ul><div class="ai-host"></div></section>';""", """</ul></section>';""", js)
js = rep("  if(!a) return csmBarHTML();", "  if(!a) return '';", js)
js = sub1(r"var ok=a\.report\.status==='approved', ai=aiSt\(\), aiLbl=[^\n]*\n", "var ok=a.report.status==='approved';\n", js)
js = rep("""</button>'+
    '<button class="ab-btn" data-act="aiOpenAdmin">'+ico('🧭')+'Agent IA'+aiLbl+'</button></div>';""", """</button></div>';""", js)
js = sub1(r"  h\+=aiCan\('report'\)\?aiReportHTML\(\)[^\n]*\n", "", js)
js = rep("closeDrawer:function(){ if(Agent.busy){ Agent.busy.abort(); Agent.busy=null; } document.querySelectorAll('#kdrawer .ai-host,#kdrawer .ai-rep-out').forEach(function(h){ if(h._stop) h._stop(); }); ", "closeDrawer:function(){ ", js)
js = rep("var am=document.getElementById('aimodal'); if(am&&am.className==='open'){ App.actions.aiGateClose(); return; } ", "", js)
js = js.replace(",Api.get('/ai/status').catch(function(){return null;})]", "]").replace(" App.ai=cleanAiStatus(r[2]);", "")
js = rep("App.bind(); Agent.init();", "App.bind();", js)
assert 'Agent.' not in js and 'aiBtn' not in js and 'cleanAiStatus' not in js and '/ai/' not in js, 'reste du code IA'

# ── Liaison au Shadow DOM du composant : « document » désigne la racine du composant ──
moteur = r"""// @ts-nocheck
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
""" + js + r"""
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
"""
open(out + '/pyramide-dashboard.engine.ts', 'w', encoding='utf-8').write(moteur)
print('CSS', len(css), 'octets ; moteur', len(moteur), 'octets')
