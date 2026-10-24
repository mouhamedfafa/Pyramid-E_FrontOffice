import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/service/authentification/auth.service';
import { RoleRedirectService } from '../../core/services/role-redirect.service';
import { routes } from '../../shared/service/routes/routes';

@Component({
  standalone: true,
  selector: 'app-activate',
  imports: [CommonModule, RouterLink],
  templateUrl: './activate.component.html',
  styleUrl: './activate.component.scss',
})
export class ActivateComponent implements OnInit {
  public routes = routes;
  state: 'loading' | 'success' | 'error' = 'loading';
  userName = '';
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private roleRedirect: RoleRedirectService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (!token) {
      this.state = 'error';
      this.errorMsg = 'Lien d\'activation invalide.';
      return;
    }

    this.authService.activateAccount(token).subscribe({
      next: (res) => {
        this.state = 'success';
        const u = res.user;
        this.userName = u ? (u['prenom'] ? `${u['prenom']} ${u['nom'] ?? ''}`.trim() : (u.name ?? '')) : '';
        const roleId = res.user?.role_id;
        setTimeout(() => {
          this.roleRedirect.redirectAfterLogin(roleId!, res.role_type ?? undefined, res.roles);
        }, 2500);
      },
      error: (err) => {
        this.state = 'error';
        this.errorMsg = err?.message || 'Lien d\'activation invalide ou déjà utilisé.';
      }
    });
  }
}
