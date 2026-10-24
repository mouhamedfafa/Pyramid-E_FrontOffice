import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../shared/service/common/common.service';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HasPermissionDirective } from '../../../../directive/has-permission-directive.directive';
import { AuthService } from '../../../../shared/service/authentification/auth.service';
import { KPI_PLATEFORME, kpiPlateformePermission, kpiPlateformeRoute } from '../../../../core/config/role-routing.config';
import { ManagerService } from '../../../../shared/service/manager/manager.service';
import { ManagerStatut } from '../../../../shared/models/manager.models';

@Component({
    selector: 'app-superadmin-sidebar',
    templateUrl: './superadmin-sidebar.component.html',
    styleUrl: './superadmin-sidebar.component.scss',
    imports: [CommonModule, RouterLink, RouterLinkActive, HasPermissionDirective]
})
export class SuperadminSidebarComponent implements OnInit {
  public routes = routes;
  // Dashboards KPI de l'équipe Pyramide LMS : chaque lien n'apparaît qu'avec sa permission
  public readonly indicateurs = KPI_PLATEFORME.map(k => ({
    ...k, route: kpiPlateformeRoute(k.slug), permission: kpiPlateformePermission(k.slug),
  }));
  public base = '';
  public page = '';
  public last = '';
  currentUser: any;
  managerStatut: ManagerStatut | null = null;

  openGroups: Record<string, boolean> = {
    utilisateurs: true,
    pedagogie:    false,
    finance:      false,
    aide:         false,
  };

  toggleGroup(key: string): void {
    this.openGroups[key] = !this.openGroups[key];
  }

  getInitials(): string {
    const u = this.currentUser;
    if (!u) return 'SA';
    const n = u.name || `${u.prenom ?? ''} ${u.nom ?? ''}`.trim() || u.email || '';
    return n.split(' ').map((w: string) => w[0]).join('').substring(0, 2).toUpperCase() || 'SA';
  }

  getDisplayName(): string {
    const u = this.currentUser;
    if (!u) return 'Super Admin';
    return u.name || `${u.prenom ?? ''} ${u.nom ?? ''}`.trim() || u.email || 'Super Admin';
  }

  getRoleLabel(): string {
    return this.currentUser?.role?.name || 'Superadministrateur';
  }

  constructor(
    private common: CommonService,
    private auth: AuthService,
    private managerService: ManagerService,
  ) {
    this.common.base.subscribe((base: string) => { this.base = base; });
    this.common.page.subscribe((page: string) => { this.page = page; });
    this.common.last.subscribe((last: string) => { this.last = last; });
  }

  ngOnInit(): void {
    this.currentUser = this.auth.getUser();
    this.managerService.getStatut(true).subscribe(s => this.managerStatut = s);
  }

  logout(): void {
    this.auth.logout();
  }
}
