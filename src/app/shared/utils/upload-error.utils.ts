import { HttpErrorResponse } from '@angular/common/http';

/** Taille maximale d'un fichier de section (identique à UploadController::TAILLE_MAX_MO côté serveur). */
export const TAILLE_MAX_UPLOAD_MO = 10;

const MO = 1024 * 1024;

const formatMo = (octets: number) => (octets / MO).toLocaleString('fr-FR', { maximumFractionDigits: 1 }) + ' Mo';

/** Contrôle avant envoi : évite d'attendre la fin de l'upload pour apprendre que le fichier est trop gros. */
export function verifierTailleFichier(file: File, maxMo = TAILLE_MAX_UPLOAD_MO): string | null {
  return file.size > maxMo * MO
    ? `Le fichier « ${file.name} » fait ${formatMo(file.size)} : la taille maximale est de ${maxMo} Mo.`
    : null;
}

/** Message clair à partir de l'erreur HTTP d'un upload (jamais un « Échec de l'upload » générique). */
export function messageErreurUpload(err: unknown, maxMo = TAILLE_MAX_UPLOAD_MO): string {
  const e = err as HttpErrorResponse;
  const messageServeur: string | undefined = e?.error?.message;

  switch (e?.status) {
    case 0:
      return 'Connexion au serveur impossible pendant l\'envoi. Vérifiez votre connexion internet puis réessayez.';
    case 413:
      return messageServeur || `Le fichier est trop volumineux : la taille maximale est de ${maxMo} Mo.`;
    case 401:
      return 'Votre session a expiré. Reconnectez-vous puis renvoyez le fichier.';
    case 403:
      return 'Vous n\'avez pas l\'autorisation d\'envoyer des fichiers. Contactez votre administrateur.';
    case 422:
      return messageServeur || 'Le fichier n\'est pas valide. Vérifiez son format et sa taille.';
    case 504:
    case 408:
      return 'L\'envoi a pris trop de temps. Réessayez avec une meilleure connexion ou un fichier plus léger.';
    default:
      return messageServeur
        || 'Le serveur n\'a pas pu enregistrer le fichier. Réessayez ; si le problème persiste, contactez le support.';
  }
}
