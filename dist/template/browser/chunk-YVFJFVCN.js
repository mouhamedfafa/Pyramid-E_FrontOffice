import {
  RoleRedirectService
} from "./chunk-WWL5QCGB.js";
import {
  AuthService
} from "./chunk-6DGDCR4J.js";
import "./chunk-K7E3GT3E.js";
import {
  DataService
} from "./chunk-D4NYV26W.js";
import {
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective
} from "./chunk-SQQX572X.js";
import {
  routes
} from "./chunk-DN5YN62E.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-GE23GOQB.js";
import {
  Router,
  RouterLink
} from "./chunk-WU2IX7JC.js";
import "./chunk-IN7OGW6T.js";
import "./chunk-YONGDJMG.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-O72RKWZB.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-F67U43FE.js";
import "./chunk-4MWRP73S.js";

// src/app/auth/login/login.component.ts
function LoginComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 33)(2, "span", 34);
    \u0275\u0275text(3, "BIENVENUE SUR PYRAMIDE LMS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 35);
    \u0275\u0275text(5, "Votre plateforme de formation et de d\xE9veloppement des comp\xE9tences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 36);
    \u0275\u0275text(7, " Pyramide LMS donne \xE0 vos experts internes et consultants externes les outils n\xE9cessaires pour cr\xE9er, diffuser et piloter des formations 100 % adapt\xE9es \xE0 vos r\xE9alit\xE9s m\xE9tier et mesurer leur impact sur la performance de vos \xE9quipes. ");
    \u0275\u0275elementEnd()()();
  }
}
function LoginComponent_ng_container_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 60);
    \u0275\u0275listener("click", function LoginComponent_ng_container_37_div_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.errorMessage, " ");
  }
}
function LoginComponent_ng_container_37_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Compte temporairement bloqu\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.errorMessage);
  }
}
function LoginComponent_ng_container_37_div_13_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "L'email est requis");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_37_div_13_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Veuillez entrer un email valide");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_37_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275template(1, LoginComponent_ng_container_37_div_13_small_1_Template, 2, 0, "small", 29)(2, LoginComponent_ng_container_37_div_13_small_2_Template, 2, 0, "small", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.f["email"].hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.f["email"].hasError("email"));
  }
}
function LoginComponent_ng_container_37_div_24_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Le mot de passe est requis");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_37_div_24_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Le mot de passe doit contenir au moins 6 caract\xE8res");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_37_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275template(1, LoginComponent_ng_container_37_div_24_small_1_Template, 2, 0, "small", 29)(2, LoginComponent_ng_container_37_div_24_small_2_Template, 2, 0, "small", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.f["password"].hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.f["password"].hasError("minlength"));
  }
}
function LoginComponent_ng_container_37_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 64);
  }
}
function LoginComponent_ng_container_37_i_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 65);
  }
}
function LoginComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LoginComponent_ng_container_37_div_1_Template, 4, 1, "div", 37)(2, LoginComponent_ng_container_37_div_2_Template, 7, 1, "div", 38);
    \u0275\u0275elementStart(3, "form", 39);
    \u0275\u0275listener("ngSubmit", function LoginComponent_ng_container_37_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275elementStart(4, "div", 40)(5, "label", 41);
    \u0275\u0275text(6, "Adresse Email ");
    \u0275\u0275elementStart(7, "span", 42);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 43);
    \u0275\u0275element(10, "input", 44);
    \u0275\u0275elementStart(11, "span", 45);
    \u0275\u0275element(12, "i", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, LoginComponent_ng_container_37_div_13_Template, 3, 2, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 40)(15, "label", 41);
    \u0275\u0275text(16, "Mot de Passe ");
    \u0275\u0275elementStart(17, "span", 42);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 43);
    \u0275\u0275element(20, "input", 47);
    \u0275\u0275elementStart(21, "span", 45);
    \u0275\u0275element(22, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 48);
    \u0275\u0275listener("click", function LoginComponent_ng_container_37_Template_span_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePassword());
    })("keydown.enter", function LoginComponent_ng_container_37_Template_span_keydown_enter_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePassword());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, LoginComponent_ng_container_37_div_24_Template, 3, 2, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 49)(26, "div", 50);
    \u0275\u0275element(27, "input", 51);
    \u0275\u0275elementStart(28, "label", 52);
    \u0275\u0275text(29, "Se souvenir de moi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "a", 53);
    \u0275\u0275text(31, "Mot de passe oubli\xE9 ?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 54)(33, "button", 55);
    \u0275\u0275template(34, LoginComponent_ng_container_37_span_34_Template, 1, 0, "span", 56);
    \u0275\u0275text(35);
    \u0275\u0275template(36, LoginComponent_ng_container_37_i_36_Template, 1, 0, "i", 57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorMessage && !ctx_r2.isLocked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLocked);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.loginForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r2.f["email"].invalid && ctx_r2.f["email"].touched);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.f["email"].invalid && ctx_r2.f["email"].touched);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r2.f["password"].invalid && ctx_r2.f["password"].touched);
    \u0275\u0275property("type", ctx_r2.password ? "text" : "password");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.password ? "isax isax-eye" : "isax isax-eye-slash");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.f["password"].invalid && ctx_r2.f["password"].touched);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r2.routes.forgot_password);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.isLoading || ctx_r2.loginForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isLoading ? "Connexion en cours..." : "Se Connecter", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoading);
  }
}
function LoginComponent_ng_container_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68);
    \u0275\u0275element(2, "i", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70)(4, "div", 71);
    \u0275\u0275text(5, "E-mail envoy\xE9 !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 72);
    \u0275\u0275text(7, " V\xE9rifiez votre bo\xEEte de r\xE9ception \xE0 ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ".");
    \u0275\u0275element(11, "br");
    \u0275\u0275text(12, " Le lien est valable ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14, "15 minutes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, ". ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 73);
    \u0275\u0275listener("click", function LoginComponent_ng_container_38_div_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.magicSent = false);
    });
    \u0275\u0275text(17, "Renvoyer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.magicEmail);
  }
}
function LoginComponent_ng_container_38_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.magicError, " ");
  }
}
function LoginComponent_ng_container_38_ng_container_2_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 64);
  }
}
function LoginComponent_ng_container_38_ng_container_2_i_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 81);
  }
}
function LoginComponent_ng_container_38_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 74);
    \u0275\u0275element(2, "i", 75);
    \u0275\u0275text(3, " Entrez votre e-mail. Nous vous enverrons un lien de connexion instantan\xE9, sans mot de passe. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LoginComponent_ng_container_38_ng_container_2_div_4_Template, 3, 1, "div", 76);
    \u0275\u0275elementStart(5, "div", 40)(6, "label", 41);
    \u0275\u0275text(7, "Adresse Email ");
    \u0275\u0275elementStart(8, "span", 42);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 43)(11, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_ng_container_38_ng_container_2_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.magicEmail, $event) || (ctx_r2.magicEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function LoginComponent_ng_container_38_ng_container_2_Template_input_keydown_enter_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.sendMagicLink());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 45);
    \u0275\u0275element(13, "i", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 54)(15, "button", 78);
    \u0275\u0275listener("click", function LoginComponent_ng_container_38_ng_container_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.sendMagicLink());
    });
    \u0275\u0275template(16, LoginComponent_ng_container_38_ng_container_2_span_16_Template, 1, 0, "span", 56)(17, LoginComponent_ng_container_38_ng_container_2_i_17_Template, 1, 0, "i", 79);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.magicError);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.magicEmail);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.magicLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.magicLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.magicLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.magicLoading ? "Envoi en cours..." : "Envoyer le lien de connexion", " ");
  }
}
function LoginComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LoginComponent_ng_container_38_div_1_Template, 18, 1, "div", 66)(2, LoginComponent_ng_container_38_ng_container_2_Template, 19, 6, "ng-container", 29);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.magicSent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.magicSent);
  }
}
var LoginComponent = class _LoginComponent {
  dataService;
  fb;
  authService;
  roleRedirect;
  router;
  routes = routes;
  loginForm;
  welcomeLogin = [];
  password = false;
  isLoading = false;
  errorMessage = "";
  isLocked = false;
  lockedMinutes = 0;
  // Magic link
  loginMode = "password";
  magicEmail = "";
  magicLoading = false;
  magicSent = false;
  magicError = "";
  authSlider = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  constructor(dataService, fb, authService, roleRedirect, router) {
    this.dataService = dataService;
    this.fb = fb;
    this.authService = authService;
    this.roleRedirect = roleRedirect;
    this.router = router;
    this.welcomeLogin = this.dataService.welcomeLogin;
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  togglePassword() {
    this.password = !this.password;
  }
  onSubmit() {
    this.errorMessage = "";
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    const payload = {
      email: this.loginForm.get("email")?.value.trim(),
      password: this.loginForm.get("password")?.value
    };
    this.authService.login(payload).subscribe({
      next: (res) => {
        this.isLoading = false;
        const roleId = res.user?.role_id ?? 0;
        const roleType = res.role_type ?? res.user?.["role_type"];
        const roleNames = res.roles ?? res.user?.roles ?? [];
        this.roleRedirect.redirectAfterLogin(roleId, roleType, roleNames);
      },
      error: (err) => {
        this.isLoading = false;
        const httpError = err?.error;
        const body = httpError?.error;
        if (body?.locked || httpError?.status === 423) {
          this.isLocked = true;
          this.lockedMinutes = body?.remaining_minutes || 15;
          this.errorMessage = body?.message || `Compte bloqu\xE9 pendant ${this.lockedMinutes} minutes.`;
        } else {
          this.isLocked = false;
          const validationErrors = body?.errors;
          if (validationErrors) {
            const msgs = Object.values(validationErrors).flat();
            this.errorMessage = msgs[0] || "Identifiants incorrects.";
          } else {
            this.errorMessage = body?.message || err?.message || "Erreur de connexion. Veuillez v\xE9rifier vos identifiants.";
          }
        }
      }
    });
  }
  sendMagicLink() {
    this.magicError = "";
    if (!this.magicEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.magicEmail)) {
      this.magicError = "Veuillez entrer une adresse e-mail valide.";
      return;
    }
    this.magicLoading = true;
    this.authService.sendMagicLink(this.magicEmail).subscribe({
      next: () => {
        this.magicLoading = false;
        this.magicSent = true;
      },
      error: (err) => {
        this.magicLoading = false;
        this.magicError = err?.message || "Une erreur est survenue.";
      }
    });
  }
  directIndex() {
    this.onSubmit();
  }
  get f() {
    return this.loginForm.controls;
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(RoleRedirectService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 46, vars: 8, consts: [[1, "login-page"], [1, "row", "g-0", "min-vh-100"], [1, "col-lg-6", "d-none", "d-lg-flex", "login-left"], [1, "login-left-content"], [1, "login-left-logo"], ["src", "assets/img/logo.png", "alt", "Pyramide"], [1, "login-left-visual"], [1, "login-image-card"], [1, "login-image-ring"], ["src", "assets/img/auth/image-connexion.png", "alt", "Formation", 1, "login-image"], [1, "login-image-badge"], [1, "isax", "isax-star-1"], [1, "login-left-text"], [3, "config"], ["ngxSlickItem", ""], [1, "col-lg-6", "login-right"], [1, "login-right-top"], [1, "login-back-link", 3, "routerLink"], [1, "isax", "isax-arrow-left"], [1, "login-right-content"], [1, "login-right-logo"], ["src", "assets/img/logo-white.png", "alt", "Pyramide"], [1, "login-card"], [1, "login-card-title"], [1, "login-card-subtitle"], [1, "login-mode-toggle"], ["type", "button", 1, "lmt-btn", 3, "click"], [1, "isax", "isax-lock"], [1, "isax", "isax-sms"], [4, "ngIf"], [1, "login-right-footer"], [1, "isax", "isax-sms", "me-1"], ["href", "mailto:contact@pyramide-e.com"], [1, "login-slide"], [1, "login-slide-label"], [1, "login-slide-title"], [1, "login-slide-desc"], ["class", "alert alert-danger alert-dismissible fade show mb-3", "role", "alert", 4, "ngIf"], ["class", "alert alert-warning fade show mb-3", "role", "alert", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "position-relative"], ["type", "email", "formControlName", "email", "placeholder", "Entrez votre adresse email", 1, "form-control", "form-control-lg", "login-input"], [1, "login-input-icon"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["formControlName", "password", "placeholder", "Entrez votre mot de passe", 1, "form-control", "form-control-lg", "login-input", 3, "type"], ["tabindex", "0", 1, "login-eye-icon", 3, "click", "keydown.enter", "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "d-flex", "align-items-center"], ["type", "checkbox", "id", "rememberMe", 1, "form-check-input", "login-check"], ["for", "rememberMe", 1, "form-check-label", "ms-2", "login-check-label"], [1, "login-forgot", 3, "routerLink"], [1, "d-grid"], ["type", "submit", 1, "btn", "login-submit-btn", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax isax-arrow-right-3 ms-2", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "mb-3"], [1, "isax", "isax-close-circle", "me-2"], ["type", "button", "aria-label", "Fermer", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-warning", "fade", "show", "mb-3"], [1, "isax", "isax-lock", "me-2"], [1, "invalid-feedback", "d-block"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "isax-arrow-right-3", "ms-2"], ["class", "magic-sent-box mb-3", 4, "ngIf"], [1, "magic-sent-box", "mb-3"], [1, "msb-icon"], [1, "isax", "isax-sms-star"], [1, "msb-text"], [1, "msb-title"], [1, "msb-sub"], ["type", "button", 1, "msb-resend", 3, "click"], [1, "magic-desc", "mb-3"], [1, "isax", "isax-info-circle", "me-2"], ["class", "alert alert-danger mb-3", 4, "ngIf"], ["type", "email", "placeholder", "votre@email.com", 1, "form-control", "form-control-lg", "login-input", 3, "ngModelChange", "keydown.enter", "ngModel"], ["type", "button", 1, "btn", "login-submit-btn", 3, "click", "disabled"], ["class", "isax isax-send-2 me-2", 4, "ngIf"], [1, "alert", "alert-danger", "mb-3"], [1, "isax", "isax-send-2", "me-2"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8);
      \u0275\u0275element(9, "img", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 10);
      \u0275\u0275element(11, "i", 11);
      \u0275\u0275text(12, " LMS d'Excellence ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 12)(14, "ngx-slick-carousel", 13);
      \u0275\u0275repeaterCreate(15, LoginComponent_For_16_Template, 8, 0, "div", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 15)(18, "div", 16)(19, "a", 17);
      \u0275\u0275element(20, "i", 18);
      \u0275\u0275text(21, " Retour \xE0 l'Accueil ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 19)(23, "div", 20);
      \u0275\u0275element(24, "img", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 22)(26, "h1", 23);
      \u0275\u0275text(27, "Connectez-vous \xE0 Pyramide LMS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 24);
      \u0275\u0275text(29, "Am\xE9liorer vos comp\xE9tences simplement !");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 25)(31, "button", 26);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_31_listener() {
        ctx.loginMode = "password";
        ctx.magicSent = false;
        return ctx.magicError = "";
      });
      \u0275\u0275element(32, "i", 27);
      \u0275\u0275text(33, " Mot de passe ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 26);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_34_listener() {
        ctx.loginMode = "magic";
        return ctx.errorMessage = "";
      });
      \u0275\u0275element(35, "i", 28);
      \u0275\u0275text(36, " Lien par e-mail ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(37, LoginComponent_ng_container_37_Template, 37, 16, "ng-container", 29)(38, LoginComponent_ng_container_38_Template, 3, 2, "ng-container", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 30)(40, "p");
      \u0275\u0275text(41, "Besoins d'aide? Contactez-nous !");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275element(43, "i", 31);
      \u0275\u0275elementStart(44, "a", 32);
      \u0275\u0275text(45, "contact@pyramide-e.com");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("config", ctx.authSlider);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.welcomeLogin);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.loginMode === "password");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.loginMode === "magic");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loginMode === "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loginMode === "magic");
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], styles: ['\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.login-left[_ngcontent-%COMP%] {\n  background: #f7f3eb;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n  overflow: hidden;\n}\n.login-left-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n}\n.login-left-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  margin-bottom: 40px;\n}\n.login-left-visual[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 36px;\n}\n.login-image-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 32px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n.login-image-ring[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 280px;\n  border-radius: 50%;\n  border: 4px solid #D4A843;\n  padding: 8px;\n  position: relative;\n}\n.login-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.login-image-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -8px;\n  left: 24px;\n  background: #fff;\n  color: #006F78;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 8px 18px;\n  border-radius: 20px;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);\n  z-index: 1;\n}\n.login-image-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #D4A843;\n  font-size: 16px;\n}\n.login-left-text[_ngcontent-%COMP%] {\n  color: #1a1a2e;\n}\n.login-slide-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1.5px;\n  color: #D4A843;\n  margin-bottom: 12px;\n  text-transform: uppercase;\n}\n.login-slide-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #006F78;\n  line-height: 1.3;\n  margin-bottom: 16px;\n}\n.login-slide-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #495057;\n  line-height: 1.7;\n}\n[_nghost-%COMP%]     .login-left-text .slick-dots {\n  text-align: left;\n  bottom: -30px;\n}\n[_nghost-%COMP%]     .login-left-text .slick-dots li {\n  width: 10px;\n  height: 10px;\n  margin: 0 4px;\n}\n[_nghost-%COMP%]     .login-left-text .slick-dots li button {\n  width: 10px;\n  height: 10px;\n  padding: 0;\n}\n[_nghost-%COMP%]     .login-left-text .slick-dots li button::before {\n  font-size: 0;\n  width: 10px;\n  height: 4px;\n  border-radius: 2px;\n  background: #ced4da;\n  content: "";\n  display: block;\n}\n[_nghost-%COMP%]     .login-left-text .slick-dots li.slick-active button::before {\n  width: 24px;\n  background: #006F78;\n}\n[_nghost-%COMP%]     .login-left-text .slick-prev, \n[_nghost-%COMP%]     .login-left-text .slick-next {\n  bottom: -36px;\n  top: auto;\n  width: 32px;\n  height: 32px;\n  border: 1px solid #ced4da;\n  border-radius: 50%;\n  z-index: 1;\n  background: #fff;\n}\n[_nghost-%COMP%]     .login-left-text .slick-prev::before, \n[_nghost-%COMP%]     .login-left-text .slick-next::before {\n  font-size: 14px;\n  color: #006F78;\n  opacity: 0.7;\n}\n[_nghost-%COMP%]     .login-left-text .slick-prev:hover, \n[_nghost-%COMP%]     .login-left-text .slick-next:hover {\n  border-color: #006F78;\n}\n[_nghost-%COMP%]     .login-left-text .slick-prev:hover::before, \n[_nghost-%COMP%]     .login-left-text .slick-next:hover::before {\n  opacity: 1;\n}\n[_nghost-%COMP%]     .login-left-text .slick-prev {\n  right: 48px;\n  left: auto;\n}\n[_nghost-%COMP%]     .login-left-text .slick-next {\n  right: 8px;\n}\n.login-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: #006F78;\n  min-height: 100vh;\n}\n.login-right-top[_ngcontent-%COMP%] {\n  padding: 24px 40px;\n  text-align: right;\n}\n.login-back-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #D4A843;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: color 0.2s;\n}\n.login-back-link[_ngcontent-%COMP%]:hover {\n  color: #c0952e;\n}\n.login-back-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.login-right-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 40px 40px;\n  max-width: 520px;\n  margin: 0 auto;\n  width: 100%;\n}\n.login-right-logo[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  text-align: center;\n}\n.login-right-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 48px;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 16px;\n  padding: 32px 28px;\n  margin-bottom: 32px;\n}\n.login-card-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 4px;\n  white-space: nowrap;\n}\n.login-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n  margin-bottom: 24px;\n}\n.login-mode-toggle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 6px;\n  background: #f3f4f6;\n  border-radius: 10px;\n  padding: 4px;\n  margin-bottom: 24px;\n}\n.lmt-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  padding: 10px 14px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.lmt-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.lmt-btn.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #006F78;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);\n  font-weight: 600;\n}\n.lmt-btn[_ngcontent-%COMP%]:not(.active):hover {\n  color: #374151;\n}\n.login-input[_ngcontent-%COMP%] {\n  padding-left: 44px !important;\n  border-radius: 10px;\n  border: 1px solid #dee2e6;\n  font-size: 14px;\n}\n.login-input[_ngcontent-%COMP%]:focus {\n  border-color: #006F78;\n  box-shadow: 0 0 0 3px rgba(0, 111, 120, 0.1);\n}\n.login-input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #adb5bd;\n  font-size: 18px;\n  pointer-events: none;\n}\n.login-eye-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #adb5bd;\n  font-size: 18px;\n  cursor: pointer;\n}\n.login-eye-icon[_ngcontent-%COMP%]:hover {\n  color: #6c757d;\n}\n.login-check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 2px solid #006F78;\n}\n.login-check[_ngcontent-%COMP%]:checked {\n  background-color: #006F78;\n  border-color: #006F78;\n}\n.login-check-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #495057;\n}\n.login-forgot[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #D4A843;\n  text-decoration: none;\n  font-weight: 500;\n}\n.login-forgot[_ngcontent-%COMP%]:hover {\n  color: #c0952e;\n  text-decoration: underline;\n}\n.login-submit-btn[_ngcontent-%COMP%] {\n  background: #D4A843;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 14px;\n  border-radius: 30px;\n  border: none;\n  transition: background 0.2s;\n}\n.login-submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #c0952e;\n  color: #fff;\n}\n.login-submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  color: #fff;\n}\n.login-submit-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.magic-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  background: #f0fdf9;\n  border: 1px solid #b2e8e3;\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  line-height: 1.5;\n}\n.magic-desc[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #006F78;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.magic-sent-box[_ngcontent-%COMP%] {\n  background: #f0fdf9;\n  border: 1px solid #b2e8e3;\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.msb-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #006F78;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.msb-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.msb-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #005a61;\n  margin-bottom: 4px;\n}\n.msb-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #374151;\n  line-height: 1.5;\n}\n.msb-resend[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #006F78;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  font-weight: 500;\n  padding: 4px 0;\n  text-decoration: underline;\n  flex-shrink: 0;\n}\n.msb-resend[_ngcontent-%COMP%]:hover {\n  color: #005a61;\n}\n.login-right-footer[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.login-right-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n  margin-bottom: 4px;\n}\n.login-right-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #fff;\n  display: inline-flex;\n  align-items: center;\n}\n.login-right-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: underline;\n}\n.login-right-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #D4A843;\n}\n@media (max-width: 991px) {\n  .login-right-content[_ngcontent-%COMP%] {\n    padding: 24px 20px 40px;\n  }\n  .login-right-top[_ngcontent-%COMP%] {\n    padding: 16px 20px;\n  }\n  .login-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, SlickCarouselModule], template: `<div class="login-page">
  <div class="row g-0 min-vh-100">
    <!-- Left Panel -->
    <div class="col-lg-6 d-none d-lg-flex login-left">
      <div class="login-left-content">
        <div class="login-left-logo">
          <img src="assets/img/logo.png" alt="Pyramide" />
        </div>
        <div class="login-left-visual">
          <div class="login-image-card">
            <div class="login-image-ring">
              <img src="assets/img/auth/image-connexion.png" alt="Formation" class="login-image" />
            </div>
            <div class="login-image-badge">
              <i class="isax isax-star-1"></i> LMS d'Excellence
            </div>
          </div>
        </div>
        <div class="login-left-text">
          <ngx-slick-carousel [config]="authSlider">
            @for (slide of welcomeLogin; track slide) {
              <div ngxSlickItem>
                <div class="login-slide">
                  <span class="login-slide-label">BIENVENUE SUR PYRAMIDE LMS</span>
                  <h2 class="login-slide-title">Votre plateforme de formation et de d&eacute;veloppement des comp&eacute;tences</h2>
                  <p class="login-slide-desc">
                    Pyramide LMS donne &agrave; vos experts internes et consultants externes les
                    outils n&eacute;cessaires pour cr&eacute;er, diffuser et piloter des formations 100 %
                    adapt&eacute;es &agrave; vos r&eacute;alit&eacute;s m&eacute;tier et mesurer leur impact sur la
                    performance de vos &eacute;quipes.
                  </p>
                </div>
              </div>
            }
          </ngx-slick-carousel>
        </div>
      </div>
    </div>

    <!-- Right Panel -->
    <div class="col-lg-6 login-right">
      <div class="login-right-top">
        <a [routerLink]="routes.home" class="login-back-link">
          <i class="isax isax-arrow-left"></i> Retour &agrave; l'Accueil
        </a>
      </div>
      <div class="login-right-content">
        <div class="login-right-logo">
          <img src="assets/img/logo-white.png" alt="Pyramide" />
        </div>
        <div class="login-card">
          <h1 class="login-card-title">Connectez-vous &agrave; Pyramide LMS</h1>
          <p class="login-card-subtitle">Am&eacute;liorer vos comp&eacute;tences simplement !</p>

          <!-- Toggle mode -->
          <div class="login-mode-toggle">
            <button type="button"
                    class="lmt-btn"
                    [class.active]="loginMode === 'password'"
                    (click)="loginMode = 'password'; magicSent = false; magicError = ''">
              <i class="isax isax-lock"></i> Mot de passe
            </button>
            <button type="button"
                    class="lmt-btn"
                    [class.active]="loginMode === 'magic'"
                    (click)="loginMode = 'magic'; errorMessage = ''">
              <i class="isax isax-sms"></i> Lien par e-mail
            </button>
          </div>

          <!-- MODE MOT DE PASSE -->
          <ng-container *ngIf="loginMode === 'password'">
            <div *ngIf="errorMessage && !isLocked" class="alert alert-danger alert-dismissible fade show mb-3" role="alert">
              <i class="isax isax-close-circle me-2"></i>
              {{ errorMessage }}
              <button type="button" class="btn-close" (click)="errorMessage = ''" aria-label="Fermer"></button>
            </div>
            <div *ngIf="isLocked" class="alert alert-warning fade show mb-3" role="alert">
              <i class="isax isax-lock me-2"></i>
              <strong>Compte temporairement bloqu\xE9</strong><br>
              <small>{{ errorMessage }}</small>
            </div>

            <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
              <div class="mb-3">
                <label class="form-label">Adresse Email <span class="text-danger">*</span></label>
                <div class="position-relative">
                  <input
                    type="email"
                    class="form-control form-control-lg login-input"
                    formControlName="email"
                    [class.is-invalid]="f['email'].invalid && f['email'].touched"
                    placeholder="Entrez votre adresse email">
                  <span class="login-input-icon"><i class="isax isax-sms"></i></span>
                </div>
                <div *ngIf="f['email'].invalid && f['email'].touched" class="invalid-feedback d-block">
                  <small *ngIf="f['email'].hasError('required')">L'email est requis</small>
                  <small *ngIf="f['email'].hasError('email')">Veuillez entrer un email valide</small>
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label">Mot de Passe <span class="text-danger">*</span></label>
                <div class="position-relative">
                  <input
                    [type]="password ? 'text' : 'password'"
                    class="form-control form-control-lg login-input"
                    formControlName="password"
                    [class.is-invalid]="f['password'].invalid && f['password'].touched"
                    placeholder="Entrez votre mot de passe">
                  <span class="login-input-icon"><i class="isax isax-lock"></i></span>
                  <span
                    tabindex="0"
                    (click)="togglePassword()"
                    (keydown.enter)="togglePassword()"
                    class="login-eye-icon"
                    [ngClass]="password ? 'isax isax-eye' : 'isax isax-eye-slash'">
                  </span>
                </div>
                <div *ngIf="f['password'].invalid && f['password'].touched" class="invalid-feedback d-block">
                  <small *ngIf="f['password'].hasError('required')">Le mot de passe est requis</small>
                  <small *ngIf="f['password'].hasError('minlength')">Le mot de passe doit contenir au moins 6 caract&egrave;res</small>
                </div>
              </div>

              <div class="d-flex align-items-center justify-content-between mb-4">
                <div class="d-flex align-items-center">
                  <input class="form-check-input login-check" type="checkbox" id="rememberMe">
                  <label class="form-check-label ms-2 login-check-label" for="rememberMe">Se souvenir de moi</label>
                </div>
                <a [routerLink]="routes.forgot_password" class="login-forgot">Mot de passe oubli&eacute; ?</a>
              </div>

              <div class="d-grid">
                <button
                  class="btn login-submit-btn"
                  type="submit"
                  [disabled]="isLoading || loginForm.invalid">
                  <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                  {{ isLoading ? 'Connexion en cours...' : 'Se Connecter' }}
                  <i *ngIf="!isLoading" class="isax isax-arrow-right-3 ms-2"></i>
                </button>
              </div>
            </form>
          </ng-container>

          <!-- MODE MAGIC LINK -->
          <ng-container *ngIf="loginMode === 'magic'">
            <div *ngIf="magicSent" class="magic-sent-box mb-3">
              <div class="msb-icon"><i class="isax isax-sms-star"></i></div>
              <div class="msb-text">
                <div class="msb-title">E-mail envoy&eacute; !</div>
                <div class="msb-sub">
                  V&eacute;rifiez votre bo&icirc;te de r&eacute;ception &agrave; <strong>{{ magicEmail }}</strong>.<br>
                  Le lien est valable <strong>15 minutes</strong>.
                </div>
              </div>
              <button type="button" class="msb-resend" (click)="magicSent = false">Renvoyer</button>
            </div>

            <ng-container *ngIf="!magicSent">
              <div class="magic-desc mb-3">
                <i class="isax isax-info-circle me-2"></i>
                Entrez votre e-mail. Nous vous enverrons un lien de connexion instantan&eacute;, sans mot de passe.
              </div>

              <div *ngIf="magicError" class="alert alert-danger mb-3">
                <i class="isax isax-close-circle me-2"></i>{{ magicError }}
              </div>

              <div class="mb-3">
                <label class="form-label">Adresse Email <span class="text-danger">*</span></label>
                <div class="position-relative">
                  <input
                    type="email"
                    class="form-control form-control-lg login-input"
                    [(ngModel)]="magicEmail"
                    placeholder="votre&#64;email.com"
                    (keydown.enter)="sendMagicLink()">
                  <span class="login-input-icon"><i class="isax isax-sms"></i></span>
                </div>
              </div>

              <div class="d-grid">
                <button
                  type="button"
                  class="btn login-submit-btn"
                  [disabled]="magicLoading"
                  (click)="sendMagicLink()">
                  <span *ngIf="magicLoading" class="spinner-border spinner-border-sm me-2"></span>
                  <i *ngIf="!magicLoading" class="isax isax-send-2 me-2"></i>
                  {{ magicLoading ? 'Envoi en cours...' : 'Envoyer le lien de connexion' }}
                </button>
              </div>
            </ng-container>
          </ng-container>
        </div>

        <div class="login-right-footer">
          <p>Besoins d'aide? Contactez-nous !</p>
          <span>
            <i class="isax isax-sms me-1"></i>
            <a href="mailto:contact@pyramide-e.com">contact&#64;pyramide-e.com</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ['/* src/app/auth/login/login.component.scss */\n.login-page {\n  min-height: 100vh;\n}\n.login-left {\n  background: #f7f3eb;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n  overflow: hidden;\n}\n.login-left-content {\n  width: 100%;\n  max-width: 480px;\n}\n.login-left-logo img {\n  height: 40px;\n  margin-bottom: 40px;\n}\n.login-left-visual {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 36px;\n}\n.login-image-card {\n  background: #fff;\n  border-radius: 20px;\n  padding: 32px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n.login-image-ring {\n  width: 280px;\n  height: 280px;\n  border-radius: 50%;\n  border: 4px solid #D4A843;\n  padding: 8px;\n  position: relative;\n}\n.login-image {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.login-image-badge {\n  position: absolute;\n  bottom: -8px;\n  left: 24px;\n  background: #fff;\n  color: #006F78;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 8px 18px;\n  border-radius: 20px;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);\n  z-index: 1;\n}\n.login-image-badge i {\n  color: #D4A843;\n  font-size: 16px;\n}\n.login-left-text {\n  color: #1a1a2e;\n}\n.login-slide-label {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1.5px;\n  color: #D4A843;\n  margin-bottom: 12px;\n  text-transform: uppercase;\n}\n.login-slide-title {\n  font-size: 28px;\n  font-weight: 700;\n  color: #006F78;\n  line-height: 1.3;\n  margin-bottom: 16px;\n}\n.login-slide-desc {\n  font-size: 14px;\n  color: #495057;\n  line-height: 1.7;\n}\n:host ::ng-deep .login-left-text .slick-dots {\n  text-align: left;\n  bottom: -30px;\n}\n:host ::ng-deep .login-left-text .slick-dots li {\n  width: 10px;\n  height: 10px;\n  margin: 0 4px;\n}\n:host ::ng-deep .login-left-text .slick-dots li button {\n  width: 10px;\n  height: 10px;\n  padding: 0;\n}\n:host ::ng-deep .login-left-text .slick-dots li button::before {\n  font-size: 0;\n  width: 10px;\n  height: 4px;\n  border-radius: 2px;\n  background: #ced4da;\n  content: "";\n  display: block;\n}\n:host ::ng-deep .login-left-text .slick-dots li.slick-active button::before {\n  width: 24px;\n  background: #006F78;\n}\n:host ::ng-deep .login-left-text .slick-prev,\n:host ::ng-deep .login-left-text .slick-next {\n  bottom: -36px;\n  top: auto;\n  width: 32px;\n  height: 32px;\n  border: 1px solid #ced4da;\n  border-radius: 50%;\n  z-index: 1;\n  background: #fff;\n}\n:host ::ng-deep .login-left-text .slick-prev::before,\n:host ::ng-deep .login-left-text .slick-next::before {\n  font-size: 14px;\n  color: #006F78;\n  opacity: 0.7;\n}\n:host ::ng-deep .login-left-text .slick-prev:hover,\n:host ::ng-deep .login-left-text .slick-next:hover {\n  border-color: #006F78;\n}\n:host ::ng-deep .login-left-text .slick-prev:hover::before,\n:host ::ng-deep .login-left-text .slick-next:hover::before {\n  opacity: 1;\n}\n:host ::ng-deep .login-left-text .slick-prev {\n  right: 48px;\n  left: auto;\n}\n:host ::ng-deep .login-left-text .slick-next {\n  right: 8px;\n}\n.login-right {\n  display: flex;\n  flex-direction: column;\n  background: #006F78;\n  min-height: 100vh;\n}\n.login-right-top {\n  padding: 24px 40px;\n  text-align: right;\n}\n.login-back-link {\n  font-size: 14px;\n  font-weight: 500;\n  color: #D4A843;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: color 0.2s;\n}\n.login-back-link:hover {\n  color: #c0952e;\n}\n.login-back-link i {\n  font-size: 16px;\n}\n.login-right-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 40px 40px;\n  max-width: 520px;\n  margin: 0 auto;\n  width: 100%;\n}\n.login-right-logo {\n  margin-bottom: 32px;\n  text-align: center;\n}\n.login-right-logo img {\n  height: 48px;\n}\n.login-card {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 16px;\n  padding: 32px 28px;\n  margin-bottom: 32px;\n}\n.login-card-title {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 4px;\n  white-space: nowrap;\n}\n.login-card-subtitle {\n  font-size: 14px;\n  color: #6c757d;\n  margin-bottom: 24px;\n}\n.login-mode-toggle {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 6px;\n  background: #f3f4f6;\n  border-radius: 10px;\n  padding: 4px;\n  margin-bottom: 24px;\n}\n.lmt-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  padding: 10px 14px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.lmt-btn i {\n  font-size: 15px;\n}\n.lmt-btn.active {\n  background: #fff;\n  color: #006F78;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);\n  font-weight: 600;\n}\n.lmt-btn:not(.active):hover {\n  color: #374151;\n}\n.login-input {\n  padding-left: 44px !important;\n  border-radius: 10px;\n  border: 1px solid #dee2e6;\n  font-size: 14px;\n}\n.login-input:focus {\n  border-color: #006F78;\n  box-shadow: 0 0 0 3px rgba(0, 111, 120, 0.1);\n}\n.login-input-icon {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #adb5bd;\n  font-size: 18px;\n  pointer-events: none;\n}\n.login-eye-icon {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #adb5bd;\n  font-size: 18px;\n  cursor: pointer;\n}\n.login-eye-icon:hover {\n  color: #6c757d;\n}\n.login-check {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 2px solid #006F78;\n}\n.login-check:checked {\n  background-color: #006F78;\n  border-color: #006F78;\n}\n.login-check-label {\n  font-size: 13px;\n  color: #495057;\n}\n.login-forgot {\n  font-size: 13px;\n  color: #D4A843;\n  text-decoration: none;\n  font-weight: 500;\n}\n.login-forgot:hover {\n  color: #c0952e;\n  text-decoration: underline;\n}\n.login-submit-btn {\n  background: #D4A843;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 14px;\n  border-radius: 30px;\n  border: none;\n  transition: background 0.2s;\n}\n.login-submit-btn:hover:not(:disabled) {\n  background: #c0952e;\n  color: #fff;\n}\n.login-submit-btn:disabled {\n  opacity: 0.6;\n  color: #fff;\n}\n.login-submit-btn i {\n  font-size: 18px;\n}\n.magic-desc {\n  font-size: 13px;\n  color: #6b7280;\n  background: #f0fdf9;\n  border: 1px solid #b2e8e3;\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  line-height: 1.5;\n}\n.magic-desc i {\n  font-size: 15px;\n  color: #006F78;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.magic-sent-box {\n  background: #f0fdf9;\n  border: 1px solid #b2e8e3;\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.msb-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #006F78;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.msb-text {\n  flex: 1;\n}\n.msb-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #005a61;\n  margin-bottom: 4px;\n}\n.msb-sub {\n  font-size: 12px;\n  color: #374151;\n  line-height: 1.5;\n}\n.msb-resend {\n  font-size: 12px;\n  color: #006F78;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  font-weight: 500;\n  padding: 4px 0;\n  text-decoration: underline;\n  flex-shrink: 0;\n}\n.msb-resend:hover {\n  color: #005a61;\n}\n.login-right-footer {\n  text-align: center;\n}\n.login-right-footer p {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n  margin-bottom: 4px;\n}\n.login-right-footer span {\n  font-size: 14px;\n  color: #fff;\n  display: inline-flex;\n  align-items: center;\n}\n.login-right-footer a {\n  color: #fff;\n  text-decoration: underline;\n}\n.login-right-footer a:hover {\n  color: #D4A843;\n}\n@media (max-width: 991px) {\n  .login-right-content {\n    padding: 24px 20px 40px;\n  }\n  .login-right-top {\n    padding: 16px 20px;\n  }\n  .login-card {\n    padding: 24px 20px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: FormBuilder }, { type: AuthService }, { type: RoleRedirectService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app/auth/login/login.component.ts", lineNumber: 18 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-YVFJFVCN.js.map
