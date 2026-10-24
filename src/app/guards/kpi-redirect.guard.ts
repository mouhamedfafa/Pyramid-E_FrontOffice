import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { RoleRedirectService } from '../core/services/role-redirect.service';

/**
 * Anciens tableaux de bord : redirigés vers la page « Indicateurs KPI » du même espace
 * (lien de menu, d'en-tête, bouton « Mode apprenant » ou URL saisie).
 * Sans dashboard KPI autorisé dans cet espace, l'ancienne page reste affichée
 * (ex. un formateur en mode apprenant sans « voir dashboard employe »).
 */
export const kpiRedirectGuard: CanActivateFn = (_route, state) => {
  const redirect = inject(RoleRedirectService);
  const router = inject(Router);

  const espace = '/' + (state.url.split(/[/?#]/)[1] ?? '');
  const cible = redirect.kpiRouteEspace(espace);

  return cible && cible !== state.url ? router.createUrlTree([cible]) : true;
};
