import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/service/authentification/auth.service';
import { RoleRedirectService } from '../../core/services/role-redirect.service';
import { routes } from '../../shared/service/routes/routes';

@Component({
  standalone: true,
  selector: 'app-magic-verify',
  imports: [CommonModule, RouterLink],
  templateUrl: './magic-verify.component.html',
})
export class MagicVerifyComponent implements OnInit {
  public routes = routes;
  state: 'loading' | 'success' | 'error' = 'loading';
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
      this.errorMsg = 'Lien de connexion invalide.';
      return;
    }

    this.authService.verifyMagicLink(token).subscribe({
      next: (res) => {
        this.state = 'success';
        const roleId = res.user?.role_id;
        setTimeout(() => {
          this.roleRedirect.redirectAfterLogin(roleId!, res.role_type ?? undefined, res.roles);
        }, 1200);
      },
      error: (err) => {
        this.state = 'error';
        this.errorMsg = err?.message || 'Lien invalide ou expiré.';
      }
    });
  }
}
