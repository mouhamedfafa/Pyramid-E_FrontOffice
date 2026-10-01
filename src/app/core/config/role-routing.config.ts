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
    // Formateur, Consultant, Gestionnaire de compte
    roleIds: [3, 6, 10, 13],
    defaultRoute: '/instructor/instructor-course-grid',
    layout: 'formateur',
  },
  {
    roleIds: [2],
    defaultRoute: '/student/student-dashboard',
    layout: 'employe',
  },
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
