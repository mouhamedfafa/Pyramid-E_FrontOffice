import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from '../shared/service/authentification/auth.service';
import { ManagerService } from '../shared/service/manager/manager.service';
import { RoleRedirectService } from '../core/services/role-redirect.service';

/**
 * Accès à l'espace Manager : réservé aux utilisateurs ayant au moins un N-1,
 * quel que soit leur rôle (employé, formateur, RH…). Vérifié côté serveur.
 */
export const managerGuard: CanActivateFn = () => {
  const authService     = inject(AuthService);
  const managerService  = inject(ManagerService);
  const redirectService = inject(RoleRedirectService);
  const router          = inject(Router);

  if (!authService.isLoggedIn()) {
    return router.createUrlTree(['/auth/login']);
  }

  return managerService.getStatut(true).pipe(
    map(statut => statut.is_manager
      ? true
      : router.createUrlTree([redirectService.getDefaultRoute()])
    )
  );
};
