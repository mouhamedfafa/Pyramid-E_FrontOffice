import type { HttpErrorResponse } from '@angular/common/http';

const CONSEIL = 'Réessayez ; si le problème persiste, contactez le support.';

/** Messages neutres du serveur (erreur imprévue) : on leur préfère le message de l'écran, plus précis sur l'action. */
const MESSAGES_SERVEUR_GENERIQUES = [
  'Une erreur inattendue est survenue',
  'L\'opération n\'a pas pu être effectuée',
];

/**
 * Message d'erreur clair pour l'utilisateur à partir d'une erreur HTTP.
 *  - le serveur renvoie la raison précise (validation, droits, statut, élément supprimé…) : elle est affichée ;
 *  - sinon, le message de l'écran (`parDefaut`, ex. « Erreur lors de la suppression. ») complété d'un conseil ;
 *  - cas réseau / session expirée / droits : messages dédiés.
 */
export function messageErreurApi(err: unknown, parDefaut: string): string {
  const e = err as HttpErrorResponse;
  const serveur: string | undefined = typeof e?.error?.message === 'string' ? e.error.message.trim() : undefined;
  const defaut = completer(parDefaut);

  // Erreur non HTTP (exception JavaScript, rejet de promesse…) : message de l'écran
  if (typeof e?.status !== 'number') {
    return defaut;
  }

  switch (e.status) {
    case 0:
      return 'Connexion au serveur impossible. Vérifiez votre connexion internet puis réessayez.';
    case 401:
      return 'Votre session a expiré. Reconnectez-vous.';
    case 403:
      return serveur || 'Vous n\'avez pas les droits nécessaires pour cette action. Contactez votre administrateur.';
    case 404:
      return serveur || 'Élément introuvable : il a peut-être été supprimé. Actualisez la page.';
    case 413:
      return serveur || 'Le fichier est trop volumineux.';
    case 429:
      return serveur || 'Trop de tentatives. Patientez quelques instants avant de réessayer.';
    case 502:
    case 503:
    case 504:
      return 'Le serveur est momentanément indisponible. Réessayez dans quelques instants.';
  }

  if (e.status >= 500) {
    return serveur && !MESSAGES_SERVEUR_GENERIQUES.some(g => serveur.startsWith(g)) ? serveur : defaut;
  }

  // 400, 409, 422… : la raison métier renvoyée par le serveur, sinon la première erreur de champ
  return serveur || premiereErreurChamp(e) || defaut;
}

function premiereErreurChamp(e: HttpErrorResponse): string | undefined {
  const errors = e?.error?.errors;
  if (!errors || typeof errors !== 'object') return undefined;
  const premiere = Object.values(errors).flat()[0];
  return typeof premiere === 'string' ? premiere : undefined;
}

/** « Erreur lors de la suppression: » → « Erreur lors de la suppression. Réessayez ; … » */
function completer(message: string): string {
  const base = (message || 'L\'opération n\'a pas pu être effectuée').trim().replace(/[\s:.!]+$/, '');
  return /réessa/i.test(base) ? base + '.' : `${base}. ${CONSEIL}`;
}
