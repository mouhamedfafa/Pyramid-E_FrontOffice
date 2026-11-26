import { Component } from '@angular/core';
import { AdminrhTicketsComponent } from '../../adminrh/adminrh-tickets/adminrh-tickets.component';

/**
 * Tickets support de l'espace Employé : l'employé soumet et suit ses propres demandes. Elles arrivent au support
 * interne de son entreprise (Admin RH, Administrateur entreprise, informatique), qui les traite et les ferme, ou les
 * escalade au support Pyramide. Même écran que celui du support, en mode « employe ».
 */
@Component({
  selector: 'app-student-tickets',
  standalone: true,
  imports: [AdminrhTicketsComponent],
  template: `<app-adminrh-tickets espace="employe"></app-adminrh-tickets>`,
})
export class StudentTicketsComponent {}
