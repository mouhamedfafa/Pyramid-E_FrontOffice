/**
 * Retourne un message d'erreur lisible selon le statut HTTP.
 * Utilisé dans les composants pour remplacer les messages génériques.
 */
const SPATIE_MESSAGES = [
  'User does not have the right permissions.',
  'User does not have the right roles.',
  'This action is unauthorized.',
];

export function httpErrorMessage(err: any, fallback = 'Une erreur est survenue.'): string {
  const status = err?.status ?? err?.error?.status;
  const backendMsg = err?.error?.message as string | undefined;

  if (status === 403) {
    // Masquer les messages techniques Spatie en anglais
    if (!backendMsg || SPATIE_MESSAGES.includes(backendMsg)) {
      return 'Vous n\'avez pas les permissions nécessaires pour accéder à cette ressource.';
    }
    return backendMsg;
  }
  if (status === 401) {
    return 'Votre session a expiré. Veuillez vous reconnecter.';
  }
  if (status === 404) {
    return 'Ressource introuvable.';
  }
  if (status === 500) {
    return 'Erreur serveur. Veuillez réessayer plus tard.';
  }
  if (backendMsg) {
    return backendMsg;
  }
  return fallback;
}

/**
 * Message d'échec d'envoi d'un fichier. Un fichier refusé par le serveur web (413) arrive
 * souvent sans en-tête CORS : le navigateur ne voit alors qu'un statut 0.
 */
export function uploadErrorMessage(err: any): string {
  const status = err?.status ?? 0;

  if (status === 413) {
    return 'Le fichier est trop volumineux pour le serveur.';
  }
  if (status === 0) {
    return 'L\'envoi du fichier a échoué : fichier trop volumineux ou serveur injoignable.';
  }
  if (status === 422) {
    const errors = err?.error?.errors;
    const premier = errors ? Object.values(errors).flat()[0] : null;
    return (premier as string) || err?.error?.message || 'Fichier refusé par le serveur.';
  }
  return httpErrorMessage(err, 'L\'envoi du fichier a échoué.');
}
