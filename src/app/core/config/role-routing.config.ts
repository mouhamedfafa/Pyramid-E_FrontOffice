import type { KpiDashboardSlug } from '../../shared/service/dashboards/kpi-dashboard.service';

export type LayoutType = 'superadmin' | 'adminrh' | 'formateur' | 'employe';

export interface RoleRoutingConfig {
  roleIds: number[];
  defaultRoute: string;
  layout: LayoutType;
}

export const ROLE_ROUTING: RoleRoutingConfig[] = [
  {
    roleIds: [1],
    defaultRoute: '/superadmin/superadmin-user-list',
    layout: 'superadmin',
  },
  {
    // Admin RH, Responsable RH, Admin Holding, Manager, + tout rôle créé par RH (type='rh')
    roleIds: [4, 5, 9, 14],
    defaultRoute: '/adminrh/adminrh-user-list',
    layout: 'adminrh',
  },
  {
    // Formateur, Consultant (Gestionnaire de compte, id 6, fait partie de l'équipe Pyramide LMS :
    // type « admin » → espace superadmin, comme les autres rôles plateforme)
    roleIds: [3, 10, 13],
    defaultRoute: '/instructor/instructor-course-grid',
    layout: 'formateur',
  },
  {
    roleIds: [2],
    defaultRoute: '/student/student-dashboard',
    layout: 'employe',
  },
];

// Page d'accueil après connexion : le premier dashboard KPI auquel l'utilisateur a droit,
// par ordre de priorité (un Responsable RH arrive sur son KPI RH, pas sur « Mes indicateurs »).
// Le dashboard manager n'est retenu que si l'utilisateur a au moins un N-1 (managerGuard).
export interface KpiRoute {
  permission: string;
  route: string;
  manager?: boolean;
}

// Dashboards de l'équipe Pyramide LMS (domaine plateforme), servis dans l'espace /superadmin.
// Une entrée = une route /superadmin/dashboard-<slug>, une permission « voir dashboard <slug> », un lien de menu.
export interface KpiPlateforme {
  slug: KpiDashboardSlug;
  label: string;
}

export const KPI_PLATEFORME: KpiPlateforme[] = [
  { slug: 'sa-ceo',               label: 'Dashboard' },
  { slug: 'sa-cto',               label: 'Dashboard' },
  { slug: 'sa-coo',               label: 'Dashboard' },
  { slug: 'customer-experience',  label: 'Dashboard' },
  { slug: 'head-sales',           label: 'Dashboard' },
  { slug: 'head-marketing',       label: 'Dashboard' },
  { slug: 'head-product',         label: 'Dashboard' },
  { slug: 'gestionnaire-comptes', label: 'Mon portefeuille clients' },
  { slug: 'qa',                   label: 'Dashboard' },
];

export const kpiPlateformeRoute = (slug: string) => `/superadmin/dashboard-${slug}`;
export const kpiPlateformePermission = (slug: string) => `voir dashboard ${slug}`;

export const KPI_ROUTES: KpiRoute[] = [
  ...KPI_PLATEFORME.map(k => ({ permission: kpiPlateformePermission(k.slug), route: kpiPlateformeRoute(k.slug) })),
  { permission: 'voir dashboard admin-rh',       route: '/adminrh/dashboard-admin-rh' },
  { permission: 'voir dashboard responsable-rh', route: '/adminrh/dashboard-responsable-rh' },
  { permission: 'voir dashboard formateur',      route: '/instructor/dashboard-formateur' },
  { permission: 'voir dashboard consultant',     route: '/instructor/dashboard-consultant' },
  { permission: 'voir dashboard manager',        route: '/manager/dashboard-manager', manager: true },
  { permission: 'voir dashboard employe',        route: '/student/dashboard-employe' },
];

// Layouts autorisés par préfixe de route
// Tous les profils non-employé peuvent accéder à /student (mode apprenant) et /courses
// /manager : tout profil peut être N+1 — l'accès réel est contrôlé par managerGuard (hiérarchie)
export const LAYOUT_ROUTE_PREFIXES: Record<LayoutType, string[]> = {
  superadmin: ['/superadmin', '/student', '/instructor', '/courses', '/manager'],
  adminrh:    ['/adminrh',    '/student', '/instructor', '/courses', '/manager'],
  formateur:  ['/instructor', '/student',               '/courses', '/manager'],
  employe:    ['/student',                              '/courses', '/manager'],
};
