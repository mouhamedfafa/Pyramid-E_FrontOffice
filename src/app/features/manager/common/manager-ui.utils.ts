// Helpers d'affichage partagés par les pages de l'espace Manager
import { LayoutType } from '../../../core/config/role-routing.config';

export interface EspaceOrigine {
  layout: LayoutType | null;
  label: string;
  sub: string;
  icon: string;
}

/** Libellé de l'espace « maison » de l'utilisateur, vers lequel il revient depuis le mode manager. */
export function espaceOrigine(layout: LayoutType | null): EspaceOrigine {
  switch (layout) {
    case 'superadmin': return { layout, label: 'Espace Super Admin', sub: 'Administration de la plateforme', icon: 'isax-shield-tick' };
    case 'adminrh':    return { layout, label: 'Espace RH', sub: 'Gestion RH de votre entreprise', icon: 'isax-buildings-2' };
    case 'formateur':  return { layout, label: 'Espace formateur', sub: 'Vos formations et apprenants', icon: 'isax-teacher' };
    case 'employe':    return { layout, label: 'Espace employé', sub: 'Vos formations et demandes', icon: 'isax-user-octagon' };
    default:           return { layout: null, label: 'Mon espace', sub: 'Retour à votre espace', icon: 'isax-home-2' };
  }
}

export function initiales(u: { prenom?: string; nom?: string; name?: string } | null | undefined): string {
  if (!u) return '?';
  const pn = `${u.prenom?.charAt(0) ?? ''}${u.nom?.charAt(0) ?? ''}`;
  if (pn) return pn.toUpperCase();
  return (u.name ?? '?').split(' ').map(w => w.charAt(0)).join('').substring(0, 2).toUpperCase();
}

export function nomComplet(u: { prenom?: string; nom?: string; name?: string } | null | undefined): string {
  if (!u) return '—';
  return `${u.prenom ?? ''} ${u.nom ?? ''}`.trim() || u.name || '—';
}

/** « N-1 », « N-2 »… */
export function libelleNiveau(niveau: number | null | undefined): string {
  return niveau ? `N-${niveau}` : '—';
}

export function classeProgression(p: number): string {
  if (p >= 75) return 'mgr-progress--high';
  if (p < 30)  return 'mgr-progress--low';
  return '';
}

export function classeStatutDemande(statut: string): string {
  return ({
    en_attente_manager: 'mgr-badge--manager',
    en_attente:         'mgr-badge--rh',
    validee:            'mgr-badge--validee',
    refusee:            'mgr-badge--refusee',
    annulee:            'mgr-badge--annulee',
  } as Record<string, string>)[statut] ?? '';
}

export function libelleTypeDemande(type: string): string {
  return ({ formation: 'Formation', catalogue: 'Catalogue', parcours: 'Parcours', session: 'Session' } as Record<string, string>)[type] ?? type;
}

export function iconeTypeDemande(type: string): string {
  return ({ formation: 'isax-book-1', catalogue: 'isax-book-square', parcours: 'isax-routing-2', session: 'isax-calendar-1' } as Record<string, string>)[type] ?? 'isax-document-text';
}
