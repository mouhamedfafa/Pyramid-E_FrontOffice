import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketService, Ticket } from '../../../shared/service/ticket/ticket.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-adminrh-tickets',
  templateUrl: './adminrh-tickets.component.html',
  styleUrls: ['./adminrh-tickets.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class AdminrhTicketsComponent implements OnInit {
  public routes = routes;

  /**
   * support : page du support interne (Admin RH, Administrateur entreprise, informatique) — tickets de l'entreprise ;
   * employe : espace Employé — uniquement ses propres demandes, transmises au support interne de son entreprise.
   * Les actions de traitement (fermer, escalader) ne sont jamais décidées ici : le serveur les fournit (ticket.actions).
   */
  @Input() espace: 'support' | 'employe' = 'support';

  tickets: Ticket[] = [];
  selectedTicket: Ticket | null = null;
  loading = false;
  showCreateForm = false;

  stats = { total: 0, ouvert: 0, resolu: 0 };

  searchQuery  = '';
  filterStatut = '';

  // Pagination
  currentPage  = 1;
  totalPages   = 1;
  totalItems   = 0;
  readonly pageSize = 15;

  newTicket = { sujet: '', description: '', categorie: 'technique', priorite: 'moyenne', type: 'incident' };
  submitting  = false;
  submitError = '';

  newMessage     = '';
  sendingMessage = false;

  private searchTimeout: any;
  private currentUser: any;

  constructor(
    private ticketService: TicketService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.loadTickets();
  }

  loadTickets(): void {
    this.loading = true;
    // Le périmètre (ses tickets + ceux des utilisateurs de son entreprise) est appliqué par le serveur
    const p: any = { page: this.currentPage, par_page: this.pageSize };
    // Espace Employé : uniquement ses propres demandes (même pour un membre du support en mode employé)
    if (this.espace === 'employe' && this.currentUser?.id) p['user_id'] = this.currentUser.id;
    if (this.filterStatut) p['statut'] = this.filterStatut;
    if (this.searchQuery)  p['search'] = this.searchQuery;

    this.ticketService.getTickets(p).subscribe({
      next: (res) => {
        const paginated = res.data;
        this.tickets     = paginated.data || [];
        this.totalItems  = paginated.total || 0;
        this.totalPages  = paginated.last_page || 1;
        this.currentPage = paginated.current_page || 1;
        this.stats.total  = this.totalItems;
        this.stats.ouvert = this.tickets.filter(t => ['ouvert','en_cours','en_attente'].includes(t.statut)).length;
        this.stats.resolu = this.tickets.filter(t => t.statut === 'resolu').length;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.loadTickets();
  }

  onSearch(): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => { this.currentPage = 1; this.loadTickets(); }, 400);
  }

  applyFilter(): void { this.currentPage = 1; this.loadTickets(); }

  get pageNumbers(): number[] {
    const pages: number[] = [];
    const start = Math.max(1, this.currentPage - 2);
    const end   = Math.min(this.totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }

  selectTicket(ticket: Ticket): void {
    if (this.selectedTicket?.id === ticket.id) { this.selectedTicket = null; return; }
    this.showCreateForm = false;
    this.actionMessage = '';
    this.actionErreur  = '';
    this.ticketService.getTicketById(ticket.id).subscribe({
      next: (res) => { this.selectedTicket = res.data || res; this.chargerAgents(); },
      error: () => {}
    });
  }

  // ── Workflow interne Admin RH ↔ Admin IT : prise en charge et transfert ──
  agents: { id: number; nom: string; role: string; moi: boolean }[] = [];
  agentTransfert: number | null = null;

  /** Le ticket affiché est déjà pris en charge par l'utilisateur connecté. */
  get prisEnChargeParMoi(): boolean {
    return !!this.selectedTicket && Number(this.selectedTicket.assigned_to) === Number(this.currentUser?.id);
  }

  /** Collègues du support à qui transférer le ticket (hors soi-même et hors agent actuel). */
  get agentsTransfert() {
    return this.agents.filter(a => !a.moi && Number(a.id) !== Number(this.selectedTicket?.assigned_to));
  }

  private chargerAgents(): void {
    this.agents = [];
    this.agentTransfert = null;
    const t = this.selectedTicket;
    if (!t?.actions?.peut_affecter) return;
    this.ticketService.getAgents(t.id).subscribe({ next: (res) => this.agents = res?.data || [], error: () => {} });
  }

  prendreEnCharge(): void {
    const t = this.selectedTicket;
    if (!t || this.actionEnCours || !this.currentUser?.id) return;
    this.executerAction(this.ticketService.assigner(t.id, { agent_id: this.currentUser.id }));
  }

  transferer(): void {
    const t = this.selectedTicket;
    if (!t || this.actionEnCours || !this.agentTransfert) return;
    this.executerAction(this.ticketService.assigner(t.id, { agent_id: this.agentTransfert }));
  }

  closeDetail(): void { this.selectedTicket = null; }

  toggleCreateForm(): void {
    this.showCreateForm = !this.showCreateForm;
    if (this.showCreateForm) { this.selectedTicket = null; this.submitError = ''; this.confirmation = ''; }
  }

  /** Confirmation affichée après la création d'un ticket. */
  confirmation = '';

  /** L'utilisateur connecté est l'auteur du ticket affiché. */
  get estAuteur(): boolean {
    return !!this.selectedTicket && Number(this.selectedTicket.user_id) === Number(this.currentUser?.id);
  }

  /** L'auteur peut annuler sa demande tant qu'elle n'est pas traitée. */
  get peutAnnuler(): boolean {
    return this.estAuteur && ['ouvert', 'en_cours', 'en_attente'].includes(this.selectedTicket!.statut);
  }

  /** L'auteur note la réponse reçue, une fois le ticket traité. */
  get peutNoter(): boolean {
    return this.estAuteur && ['resolu', 'ferme'].includes(this.selectedTicket!.statut) && !this.selectedTicket!.satisfaction_score;
  }

  annulerTicket(): void {
    const t = this.selectedTicket;
    if (!t || this.actionEnCours || !confirm('Annuler cette demande ? Le support ne la traitera pas.')) return;
    this.executerAction(this.ticketService.updateTicket(t.id, { statut: 'annule' }));
  }

  noter(score: number): void {
    const t = this.selectedTicket;
    if (!t || this.actionEnCours) return;
    this.executerAction(this.ticketService.noterSatisfaction(t.id, { score }));
  }

  soumettre(): void {
    if (!this.newTicket.sujet.trim()) { this.submitError = 'Le sujet est obligatoire.'; return; }
    if (this.newTicket.description.trim().length < 10) { this.submitError = 'La description doit contenir au moins 10 caractères.'; return; }
    this.submitting = true;
    this.submitError = '';
    const payload: any = { ...this.newTicket };
    if (this.currentUser?.entreprise_id) payload['entreprise_id'] = this.currentUser.entreprise_id;
    this.ticketService.createTicket(payload as Partial<Ticket>).subscribe({
      next: (res) => {
        this.submitting = false;
        this.showCreateForm = false;
        // Le serveur indique à qui le ticket a été transmis (support interne ou support Pyramide)
        this.confirmation = res?.message || 'Ticket créé.';
        this.newTicket = { sujet: '', description: '', categorie: 'technique', priorite: 'moyenne', type: 'incident' };
        this.currentPage = 1;
        this.loadTickets();
      },
      error: (err) => {
        this.submitting = false;
        const errors = err?.error?.errors;
        if (errors) {
          this.submitError = Object.values(errors).flat().join(' ');
        } else {
          this.submitError = err?.error?.message || 'Une erreur est survenue.';
        }
      }
    });
  }

  envoyerMessage(): void {
    if (!this.newMessage.trim() || !this.selectedTicket) return;
    this.sendingMessage = true;
    const texte = this.newMessage;
    this.ticketService.ajouterMessage(this.selectedTicket.id, { contenu: texte }).subscribe({
      next: (res) => {
        const msg = res.data || { id: Date.now(), contenu: texte, created_at: new Date().toISOString(), auteur: { name: 'Moi', id: 0, email: '' } };
        if (this.selectedTicket) {
          this.selectedTicket = { ...this.selectedTicket, messages: [...(this.selectedTicket.messages || []), msg] };
        }
        this.newMessage = '';
        this.sendingMessage = false;
      },
      error: () => { this.sendingMessage = false; }
    });
  }

  // ── Traitement interne : fermer ou escalader au support Pyramide ──
  actionEnCours = false;
  actionMessage = '';
  actionErreur  = '';

  fermerTicket(): void {
    const t = this.selectedTicket;
    if (!t || this.actionEnCours) return;
    const resolution = prompt('Réponse ou solution apportée au collaborateur (visible par lui) :');
    if (resolution === null) return;
    this.executerAction(this.ticketService.fermer(t.id, { resolution: resolution.trim() }));
  }

  escaladerTicket(): void {
    const t = this.selectedTicket;
    if (!t || this.actionEnCours) return;
    const raison = prompt('Pourquoi escalader ce ticket au support Pyramide ? (ex. bug de la plateforme)');
    if (raison === null) return;
    if (!raison.trim()) { this.actionErreur = 'Indiquez la raison de l\'escalade.'; return; }
    this.executerAction(this.ticketService.escalader(t.id, { raison: raison.trim() }));
  }

  private executerAction(obs: any): void {
    const id = this.selectedTicket!.id;
    this.actionEnCours = true;
    this.actionMessage = '';
    this.actionErreur  = '';
    obs.subscribe({
      next: (res: any) => {
        this.actionEnCours = false;
        this.actionMessage = res?.message || 'Ticket mis à jour.';
        this.ticketService.getTicketById(id).subscribe({ next: (r) => { this.selectedTicket = r.data || r; this.chargerAgents(); } });
        this.loadTickets();
      },
      error: (err: any) => {
        this.actionEnCours = false;
        this.actionErreur = err?.status === 0
          ? 'Connexion au serveur impossible. Vérifiez votre connexion internet.'
          : (err?.error?.message || 'L\'action n\'a pas pu être effectuée. Réessayez plus tard.');
      }
    });
  }

  getInitials(name: string | undefined | null): string {
    if (!name) return '??';
    return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
  }

  getPClass(p: string): string {
    const m: Record<string, string> = { basse: 'p-basse', moyenne: 'p-moyenne', haute: 'p-haute', critique: 'p-critique' };
    return m[p] || 'p-basse';
  }

  getSClass(s: string): string {
    const m: Record<string, string> = { ouvert: 's-ouvert', en_cours: 's-encours', en_attente: 's-attente', resolu: 's-resolu', ferme: 's-ferme', annule: 's-annule' };
    return m[s] || 's-ouvert';
  }

  getSLabel(s: string): string {
    const m: Record<string, string> = { ouvert: 'Ouvert', en_cours: 'En cours', en_attente: 'En attente', resolu: 'Résolu', ferme: 'Fermé', annule: 'Annulé' };
    return m[s] || s;
  }

  getPLabel(p: string): string {
    const m: Record<string, string> = { basse: 'Basse', moyenne: 'Moyenne', haute: 'Haute', critique: 'Critique' };
    return m[p] || p;
  }
}
