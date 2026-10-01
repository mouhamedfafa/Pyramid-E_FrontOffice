import { DecisionManager, StatutDemande } from './formation.models';

// =============================================
// ESPACE MANAGER — hiérarchie N+1 / N-1
// =============================================

export interface ManagerStatut {
  status: boolean;
  is_manager: boolean;
  nb_collaborateurs_directs: number;
  nb_collaborateurs_total: number;
  demandes_a_traiter: number;
  /** Responsable d'au moins une entité (direction, département, équipe). */
  est_responsable_entite?: boolean;
}

export interface Collaborateur {
  id: number;
  name: string;
  prenom?: string;
  nom?: string;
  email?: string;
  fonction?: string;
  matricule?: string;
  statut: number;
  /** 1 = N-1, 2 = N-2… */
  niveau: number;
  manager_id: number | null;
  manager?: { id: number; name: string; prenom?: string; nom?: string } | null;
  direction?: string | null;
  role?: string | null;
  collaborateurs_count?: number | null;
  formations_total: number;
  formations_en_cours: number;
  formations_terminees: number;
  progression_moyenne: number;
}

export interface NoeudArbre extends Partial<Collaborateur> {
  id: number;
  name: string;
  fonction?: string;
  enfants: NoeudArbre[];
}

export interface DemandeManager {
  id: number;
  user_id: number;
  type_demande: 'formation' | 'catalogue' | 'parcours' | 'session';
  titre: string;
  statut: StatutDemande;
  statut_display: string;
  priorite?: string;
  priorite_display?: string;
  motif_demande?: string;
  objectifs_personnels?: string | null;
  date_souhaitee_debut?: string | null;
  commentaire_employe?: string | null;
  commentaire_rh?: string | null;
  motif_refus?: string | null;
  date_validation?: string | null;
  created_at: string;
  niveau: number | null;
  /** true si je suis le N+1 ou le N+2 actuel du demandeur et que la demande attend un manager */
  peut_decider: boolean;
  employe: { id: number; name: string; prenom?: string; nom?: string; email?: string; fonction?: string } | null;
  session_formation?: { id: number; titre: string; date_debut?: string; lieu?: string } | null;
  decision_manager: DecisionManager | null;
}

export interface ManagerDashboard {
  status: boolean;
  perimetre: 'directs' | 'tous';
  kpis: {
    effectif: number;
    effectif_directs: number;
    effectif_total: number;
    actifs: number;
    demandes_a_traiter: number;
    demandes_en_attente_rh: number;
    formations_total: number;
    formations_en_cours: number;
    formations_terminees: number;
    formations_non_commencees: number;
    formations_en_retard: number;
    taux_completion_moyen: number;
    certificats: number;
  };
  repartition_niveaux: { niveau: number; effectif: number }[];
  demandes_a_traiter: DemandeManager[];
  collaborateurs_a_suivre: Collaborateur[];
}

export interface ManagerEquipeResponse {
  status: boolean;
  collaborateurs: Collaborateur[];
  pagination: { current_page: number; per_page: number; total: number; last_page: number };
  niveaux: number[];
}

export interface ManagerDemandesResponse {
  status: boolean;
  compteurs: {
    a_traiter: number;
    en_attente_manager: number;
    en_attente_rh: number;
    validees: number;
    refusees: number;
    total: number;
  };
  demandes: DemandeManager[];
}

export interface CollaborateurDetail {
  status: boolean;
  collaborateur: any;
  resume: {
    formations_total: number;
    formations_en_cours: number;
    formations_terminees: number;
    progression_moyenne: number;
    certificats: number;
    quiz_reussis: number;
    quiz_total: number;
  };
  formations: any[];
  parcours: any[];
  catalogues: any[];
  certificats: any[];
  quiz: any[];
  demandes: DemandeManager[];
}
