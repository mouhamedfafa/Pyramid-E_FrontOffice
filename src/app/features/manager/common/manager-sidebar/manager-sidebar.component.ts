import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { routes } from '../../../../shared/service/routes/routes';
import { AuthService } from '../../../../shared/service/authentification/auth.service';
import { ManagerService } from '../../../../shared/service/manager/manager.service';
import { ManagerStatut } from '../../../../shared/models/manager.models';
import { RoleRedirectService } from '../../../../core/services/role-redirect.service';
import { HasPermissionDirective } from '../../../../directive/has-permission-directive.directive';
import { EspaceOrigine, espaceOrigine } from '../manager-ui.utils';

@Component({
  selector: 'app-manager-sidebar',
  templateUrl: './manager-sidebar.component.html',
  styleUrl: './manager-sidebar.component.scss',
  imports: [CommonModule, RouterLink, RouterLinkActive, HasPermissionDirective],
})
export class ManagerSidebarComponent implements OnInit, OnDestroy {
  public routes = routes;
  currentUser: any = null;
  statut: ManagerStatut | null = null;
  retourRoute = '/index';
  origine: EspaceOrigine = espaceOrigine(null);
  private sub?: Subscription;

  constructor(
    private authService: AuthService,
    private managerService: ManagerService,
    private redirectService: RoleRedirectService,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.retourRoute = this.redirectService.getDefaultRoute();
    this.origine = espaceOrigine(this.redirectService.getCurrentLayout());
    this.sub = this.managerService.statut$.subscribe(s => this.statut = s);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  /** Les modes employé / formateur ne sont proposés que s'ils diffèrent de l'espace d'origine. */
  get proposerModeEmploye(): boolean {
    return this.origine.layout !== 'employe';
  }

  get proposerModeFormateur(): boolean {
    return this.origine.layout !== 'formateur';
  }

  getInitials(): string {
    const u = this.currentUser;
    const initials = `${u?.prenom?.charAt(0) ?? ''}${u?.nom?.charAt(0) ?? ''}`.toUpperCase();
    return initials || 'MG';
  }

  getDisplayName(): string {
    const u = this.currentUser;
    return u?.name || `${u?.prenom ?? ''} ${u?.nom ?? ''}`.trim() || u?.email || 'Manager';
  }

  logout(): void {
    this.managerService.reset();
    this.authService.logout();
  }
}
