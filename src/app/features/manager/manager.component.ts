import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { routes } from '../../shared/service/routes/routes';
import { AuthService } from '../../shared/service/authentification/auth.service';
import { ManagerService } from '../../shared/service/manager/manager.service';
import { ManagerStatut } from '../../shared/models/manager.models';
import { RoleRedirectService } from '../../core/services/role-redirect.service';
import { ManagerSidebarComponent } from './common/manager-sidebar/manager-sidebar.component';
import { EspaceOrigine, espaceOrigine } from './common/manager-ui.utils';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
  imports: [CommonModule, RouterOutlet, RouterModule, ManagerSidebarComponent],
})
export class ManagerComponent implements OnInit, OnDestroy {
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
    this.managerService.getStatut().subscribe();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  getFullName(): string {
    const u = this.currentUser;
    if (!u) return 'Manager';
    return `${u.prenom ?? ''} ${u.nom ?? ''}`.trim() || u.name || 'Manager';
  }

  getInitials(): string {
    const u = this.currentUser;
    const initials = `${u?.prenom?.charAt(0) ?? ''}${u?.nom?.charAt(0) ?? ''}`.toUpperCase();
    return initials || 'MG';
  }
}
