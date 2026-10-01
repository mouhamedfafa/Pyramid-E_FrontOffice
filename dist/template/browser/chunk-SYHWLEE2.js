import {
  RoleRedirectService
} from "./chunk-BR65O5BA.js";
import {
  ManagerService
} from "./chunk-X4P6RYVM.js";
import {
  PermissionService
} from "./chunk-IGS3DTTC.js";
import {
  AuthService
} from "./chunk-U7Y6GEK6.js";
import {
  Router
} from "./chunk-VMXPZP5A.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ON7U2Q36.js";

// src/app/guards/permission-guard.guard.ts
var PermissionGuard = class _PermissionGuard {
  permissionService;
  router;
  constructor(permissionService, router) {
    this.permissionService = permissionService;
    this.router = router;
  }
  canActivate(route) {
    const requiredPermission = route.data["permission"];
    if (!requiredPermission) {
      return true;
    }
    if (this.permissionService.hasPermission(requiredPermission)) {
      return true;
    }
    this.router.navigate(["/unauthorized"]);
    return false;
  }
  static \u0275fac = function PermissionGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionGuard)(\u0275\u0275inject(PermissionService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PermissionGuard, factory: _PermissionGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: PermissionService }, { type: Router }], null);
})();

// src/app/guards/auth.guard.ts
var authGuard = (_route, _state) => {
  const router = inject(Router);
  const token = localStorage.getItem("pyramide_token");
  const userData = localStorage.getItem("pyramide_user");
  if (token && userData) {
    try {
      JSON.parse(userData);
      return true;
    } catch {
      router.navigate(["/auth/login"]);
      return false;
    }
  }
  router.navigate(["/auth/login"]);
  return false;
};

// src/app/guards/layout.guard.ts
var layoutGuard = (_route, state) => {
  const authService = inject(AuthService);
  const redirectService = inject(RoleRedirectService);
  const router = inject(Router);
  if (!authService.isLoggedIn()) {
    router.navigate(["/auth/login"]);
    return false;
  }
  if (!redirectService.canAccessUrl(state.url)) {
    const defaultRoute = redirectService.getDefaultRoute();
    if (defaultRoute && defaultRoute !== state.url) {
      router.navigate([defaultRoute]);
    } else {
      router.navigate(["/auth/login"]);
    }
    return false;
  }
  return true;
};

// src/app/guards/manager.guard.ts
var managerGuard = () => {
  const authService = inject(AuthService);
  const managerService = inject(ManagerService);
  const redirectService = inject(RoleRedirectService);
  const router = inject(Router);
  if (!authService.isLoggedIn()) {
    return router.createUrlTree(["/auth/login"]);
  }
  return managerService.getStatut(true).pipe(map((statut) => statut.is_manager ? true : router.createUrlTree([redirectService.getDefaultRoute()])));
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  },
  {
    path: "auth",
    loadComponent: () => import("./chunk-MS2AA6YQ.js").then((m) => m.AuthComponent),
    children: [
      { path: "forgot-password", loadComponent: () => import("./chunk-WVHXX3SO.js").then((m) => m.ForgotPasswordComponent) },
      { path: "login", loadComponent: () => import("./chunk-YGOE3QOT.js").then((m) => m.LoginComponent) },
      { path: "register", loadComponent: () => import("./chunk-ZL26OK42.js").then((m) => m.RegisterComponent) },
      { path: "set-password", loadComponent: () => import("./chunk-GH7UFXRQ.js").then((m) => m.SetPasswordComponent) },
      { path: "otp", loadComponent: () => import("./chunk-MBXNMS7P.js").then((m) => m.OtpComponent) },
      { path: "lock-screen", loadComponent: () => import("./chunk-2MWH5FLD.js").then((m) => m.LockScreenComponent) },
      { path: "magic-verify", loadComponent: () => import("./chunk-SIMP5X2E.js").then((m) => m.MagicVerifyComponent) },
      { path: "activate", loadComponent: () => import("./chunk-7S6Q54YT.js").then((m) => m.ActivateComponent) }
    ]
  },
  // ══════════════════════════════════════════════════════════════════════
  // PAGES PLEIN ÉCRAN — en dehors de tout layout back-office
  // ══════════════════════════════════════════════════════════════════════
  {
    path: "courses/course-watch/:id",
    loadComponent: () => import("./chunk-ZAR27RFU.js").then((m) => m.CourseWatchComponent),
    canActivate: [authGuard]
  },
  // Rétrocompatibilité ancienne URL
  {
    path: "student/lecture-formation/:id",
    loadComponent: () => import("./chunk-ZAR27RFU.js").then((m) => m.CourseWatchComponent),
    canActivate: [authGuard]
  },
  // ✅ Route quiz plein écran — hors layout, même niveau que lecture-formation
  {
    path: "student/quiz/:id",
    loadComponent: () => import("./chunk-67EREGMO.js").then((m) => m.StudentQuizQuestionsComponent),
    canActivate: [authGuard]
  },
  {
    path: "",
    loadComponent: () => import("./chunk-63ODKFFC.js").then((m) => m.FeaturesComponent),
    children: [
      { path: "index", loadComponent: () => import("./chunk-RG645T6T.js").then((m) => m.HomeComponent) },
      { path: "index-two", loadComponent: () => import("./chunk-IOXAKUHW.js").then((m) => m.Home2Component) },
      { path: "index-three", loadComponent: () => import("./chunk-2DZZ5PQ4.js").then((m) => m.Home3Component) },
      { path: "index-four", loadComponent: () => import("./chunk-HEMMTPJH.js").then((m) => m.Home4Component) },
      { path: "index-five", loadComponent: () => import("./chunk-NZIOKCQM.js").then((m) => m.Home5Component) },
      { path: "index-six", loadComponent: () => import("./chunk-G3JKWOS5.js").then((m) => m.Home6Component) },
      {
        path: "courses",
        loadComponent: () => import("./chunk-AUINGHEF.js").then((m) => m.CoursesComponent),
        children: [
          { path: "add-course", loadComponent: () => import("./chunk-2YJHAC2C.js").then((m) => m.AddCourseComponent) },
          { path: "course-details/:id", loadComponent: () => import("./chunk-R2F4F7J4.js").then((m) => m.CourseDetailsComponent) },
          { path: "course-details-2", loadComponent: () => import("./chunk-J6DWKNLL.js").then((m) => m.CourseDetails2Component) },
          { path: "course-list", loadComponent: () => import("./chunk-G3EBZ5EU.js").then((m) => m.CourseListComponent) },
          { path: "course-grid", loadComponent: () => import("./chunk-6ZFOMILU.js").then((m) => m.CourseGridComponent) },
          { path: "course-category", loadComponent: () => import("./chunk-L6SS2BW7.js").then((m) => m.CourseCategoryComponent) },
          { path: "course-category-2", loadComponent: () => import("./chunk-3L3ADI3E.js").then((m) => m.CourseCategory2Component) },
          { path: "course-category-3", loadComponent: () => import("./chunk-PYAXVVK2.js").then((m) => m.CourseCategory3Component) },
          { path: "course-resume", loadComponent: () => import("./chunk-OUXE5T4W.js").then((m) => m.CourseResumeComponent) },
          { path: "cart", loadComponent: () => import("./chunk-74U6Z3BC.js").then((m) => m.CourseCartComponent) },
          { path: "checkout", loadComponent: () => import("./chunk-ZZAA64BX.js").then((m) => m.CourseCheckoutComponent) },
          { path: "add-course", loadComponent: () => import("./chunk-2YJHAC2C.js").then((m) => m.AddCourseComponent) },
          { path: "instructor-course-add", loadComponent: () => import("./chunk-TGBSC4O5.js").then((m) => m.InstructorCourseAddComponent) },
          { path: "instructor-course-edit/:id", loadComponent: () => import("./chunk-6WA5QSAR.js").then((m) => m.InstructorCourseEditComponent) },
          { path: "instructor-course-details/:id", loadComponent: () => import("./chunk-EERUYZQF.js").then((m) => m.InstructorCourseDetailsComponent) }
        ]
      },
      {
        path: "instructor",
        loadComponent: () => import("./chunk-3LSJP5CB.js").then((m) => m.InstructorComponent),
        canActivate: [layoutGuard],
        children: [
          { path: "instructor-dashboard", loadComponent: () => import("./chunk-EBF5P6Z7.js").then((m) => m.InstructorDashboardComponent) },
          { path: "instructor-profile", loadComponent: () => import("./chunk-Z5MKIYZO.js").then((m) => m.InstructorProfileComponent) },
          { path: "instructor-payouts", loadComponent: () => import("./chunk-KRXIYYMH.js").then((m) => m.InstructorPayoutsComponent) },
          { path: "instructor-tickets", loadComponent: () => import("./chunk-65TEJJPW.js").then((m) => m.InstructorTicketsComponent) },
          { path: "instructor-announcements", loadComponent: () => import("./chunk-C6MBMTJH.js").then((m) => m.AnnoncesComponent) },
          { path: "instructor-quiz-questions/:quizId", loadComponent: () => import("./chunk-BT7XJKK2.js").then((m) => m.InstructorQuizQuestionsComponent) },
          { path: "instructor-quiz-results", loadComponent: () => import("./chunk-TCS6OLQ5.js").then((m) => m.InstructorQuizResultsComponent) },
          { path: "instructor-quiz-details", loadComponent: () => import("./chunk-RFUXR5LI.js").then((m) => m.InstructorQuizDetailsComponent) },
          { path: "instructor-quiz", loadComponent: () => import("./chunk-OCCYRFF4.js").then((m) => m.InstructorQuizComponent) },
          { path: "instructor-certificate", loadComponent: () => import("./chunk-5MLIMTWH.js").then((m) => m.InstructorCertificateComponent) },
          { path: "instructor-earnings", loadComponent: () => import("./chunk-QXPE4RIW.js").then((m) => m.InstructorEarningsComponent) },
          { path: "instructor-statements", loadComponent: () => import("./chunk-I2A4T75M.js").then((m) => m.InstructorStatementsComponent) },
          { path: "instructor-course", loadComponent: () => import("./chunk-AGAH7IAF.js").then((m) => m.InstructorCourseComponent) },
          { path: "instructor-course-grid", loadComponent: () => import("./chunk-XJ427RP5.js").then((m) => m.InstructorCourseGridComponent) },
          { path: "instructor-session", loadComponent: () => import("./chunk-TWYM7RE2.js").then((m) => m.InstructorSessionComponent) },
          { path: "instructor-mes-sondages", loadComponent: () => import("./chunk-Z3JDFMX3.js").then((m) => m.InstructorMesSondagesComponent) },
          { path: "video-ressources", loadComponent: () => import("./chunk-RZHMMYJ3.js").then((m) => m.VideoRessourcesComponent) },
          { path: "guide-utilisation", loadComponent: () => import("./chunk-KJFDNOBH.js").then((m) => m.GuideUtilisationComponent) },
          { path: "tutoriels-video", loadComponent: () => import("./chunk-2MPKNUBH.js").then((m) => m.TutorielsVideoComponent) },
          { path: "instructor-message", loadComponent: () => import("./chunk-IY27RZRO.js").then((m) => m.InstructorMessageComponent) },
          { path: "instructor-assignment", loadComponent: () => import("./chunk-ET3GM7FB.js").then((m) => m.InstructorAssignmentComponent) },
          { path: "students-list", loadComponent: () => import("./chunk-KPKXQUHE.js").then((m) => m.StudentsListComponent) },
          { path: "students-grid", loadComponent: () => import("./chunk-3WQMUH7U.js").then((m) => m.StudentsGridComponent) },
          { path: "students-details", loadComponent: () => import("./chunk-TFNUNVVT.js").then((m) => m.StudentsDetailsComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-Z3F2UZLT.js").then((m) => m.SettingsComponent),
            children: [
              { path: "instructor-setting-withdraw", loadComponent: () => import("./chunk-TCQ53F7G.js").then((m) => m.InstructorSettingWithdrawComponent) },
              { path: "instructor-setting-notifications", loadComponent: () => import("./chunk-DEKSZ2H5.js").then((m) => m.InstructorSettingNotificationsComponent) },
              { path: "instructor-plans", loadComponent: () => import("./chunk-BCLDUI7L.js").then((m) => m.InstructorPlansComponent) },
              { path: "instructor-integrations", loadComponent: () => import("./chunk-CMXKQXFY.js").then((m) => m.InstructorIntegrationsComponent) },
              { path: "instructor-linked-accounts", loadComponent: () => import("./chunk-OWL3XHTX.js").then((m) => m.InstructorLinkedAccountsComponent) },
              { path: "instructor-social-profiles", loadComponent: () => import("./chunk-L5DQWMQ2.js").then((m) => m.InstructorSocialProfilesComponent) },
              { path: "instructor-change-password", loadComponent: () => import("./chunk-P52HXJCF.js").then((m) => m.InstructorChangePasswordComponent) },
              { path: "instructor-settings", loadComponent: () => import("./chunk-ONONQZO7.js").then((m) => m.InstructorSettingsComponent) }
            ]
          }
        ]
      },
      {
        path: "superadmin",
        loadComponent: () => import("./chunk-QW2KUQMC.js").then((m) => m.SuperadminComponent),
        canActivate: [layoutGuard],
        children: [
          { path: "superadmin-dashboard", loadComponent: () => import("./chunk-NASPNAH6.js").then((m) => m.SuperAdminDashboardComponent) },
          { path: "superadmin-profile", loadComponent: () => import("./chunk-EID42RAO.js").then((m) => m.SuperadminProfileComponent) },
          { path: "superadmin-payouts", loadComponent: () => import("./chunk-S556OB7Y.js").then((m) => m.SuperadminPayoutsComponent) },
          { path: "superadmin-tickets", loadComponent: () => import("./chunk-NBFXTL6K.js").then((m) => m.SuperadminTicketsComponent) },
          { path: "superadmin-companymanagement", loadComponent: () => import("./chunk-NYAQWJOC.js").then((m) => m.CompanyManagementComponent) },
          { path: "superadmin-company-details/:id", loadComponent: () => import("./chunk-P72WHR3W.js").then((m) => m.CompanyDetailsComponent) },
          { path: "superadmin-company-add", loadComponent: () => import("./chunk-N2LQCSXX.js").then((m) => m.CompanyAddComponent) },
          { path: "superadmin-client-list", loadComponent: () => import("./chunk-NANFDHW7.js").then((m) => m.ClientListComponent) },
          { path: "superadmin-client-add", loadComponent: () => import("./chunk-SBEBOCLI.js").then((m) => m.ClientAddComponent) },
          { path: "superadmin-client-details/:id", loadComponent: () => import("./chunk-FX3KIPSV.js").then((m) => m.ClientDetailsComponent) },
          { path: "superadmin-permission", loadComponent: () => import("./chunk-VSNYJFYI.js").then((m) => m.SuperadminPermissionComponent) },
          { path: "superadmin-role", loadComponent: () => import("./chunk-JWKO3I6J.js").then((m) => m.SuperadminRoleComponent) },
          // {path:'superadmin-register',loadComponent:()=>import ('./features/superadmin/register/register.component').then((m)=>m.RegisterComponent)},
          { path: "superadmin-user-list", loadComponent: () => import("./chunk-5INALBFD.js").then((m) => m.UserListComponent), canActivate: [PermissionGuard], data: { permission: "lister utilisateurs" } },
          { path: "superadmin-user-details/:id", loadComponent: () => import("./chunk-45YBAGBM.js").then((m) => m.UserDetailsComponent) },
          { path: "superadmin-user-add", loadComponent: () => import("./chunk-ICYB4V3D.js").then((m) => m.UserAddComponent) },
          { path: "superadmin-announcements", loadComponent: () => import("./chunk-CSWQQ2GL.js").then((m) => m.SuperadminAnnouncementsComponent) },
          { path: "superadmin-quiz-questions", loadComponent: () => import("./chunk-FLN6CZ23.js").then((m) => m.SuperadminQuizQuestionsComponent) },
          { path: "superadmin-quiz-results", loadComponent: () => import("./chunk-5TKDUZWD.js").then((m) => m.SuperadminQuizResultsComponent) },
          { path: "superadmin-quiz-details", loadComponent: () => import("./chunk-WP6VNGF5.js").then((m) => m.SuperadminQuizDetailsComponent) },
          { path: "superadmin-quiz", loadComponent: () => import("./chunk-GUQ6EMB4.js").then((m) => m.SuperadminQuizComponent) },
          { path: "superadmin-certificate", loadComponent: () => import("./chunk-SFKY42QH.js").then((m) => m.SuperadminCertificateComponent) },
          { path: "superadmin-earnings", loadComponent: () => import("./chunk-5LWF6VVB.js").then((m) => m.SuperadminEarningsComponent) },
          { path: "superadmin-rapports", loadComponent: () => import("./chunk-S4PVXA4V.js").then((m) => m.SuperadminRapportsComponent) },
          { path: "superadmin-course", loadComponent: () => import("./chunk-KQG35STG.js").then((m) => m.SuperadminCourseComponent) },
          { path: "superadmin-course-grid", loadComponent: () => import("./chunk-5EDFINOS.js").then((m) => m.SuperadminCourseGridComponent) },
          { path: "superadmin-session", loadComponent: () => import("./chunk-VGXQCA52.js").then((m) => m.SuperadminSessionComponent) },
          { path: "superadmin-parcours", loadComponent: () => import("./chunk-TVWCXJEV.js").then((m) => m.SuperadminParcoursComponent) },
          { path: "superadmin-catalogue", loadComponent: () => import("./chunk-A5X3SCGR.js").then((m) => m.SuperadminCatalogueComponent) },
          { path: "superadmin-message", loadComponent: () => import("./chunk-J7QX3SMB.js").then((m) => m.SuperadminMessageComponent) },
          { path: "superadmin-audit-logs", loadComponent: () => import("./chunk-4HY6XLUF.js").then((m) => m.SuperadminAuditLogsComponent) },
          { path: "superadmin-sondage", loadComponent: () => import("./chunk-KTUCMNX4.js").then((m) => m.SuperadminSondageComponent) },
          { path: "manage-guide-utilisation", loadComponent: () => import("./chunk-6QYUML3S.js").then((m) => m.ManageGuideUtilisationComponent) },
          { path: "manage-video-acceuil", loadComponent: () => import("./chunk-B24KXUKK.js").then((m) => m.ManageVideoAcceuilComponent) },
          { path: "manage-tutoriels-video", loadComponent: () => import("./chunk-QMHXZHZY.js").then((m) => m.ManageTutorielsVideoComponent) },
          { path: "manage-annonces", loadComponent: () => import("./chunk-K5UKL7VS.js").then((m) => m.ManageAnnoncesComponent) },
          { path: "superadmin-assignment", loadComponent: () => import("./chunk-ITPJVTDP.js").then((m) => m.SuperadminAssignmentComponent) },
          { path: "students-list", loadComponent: () => import("./chunk-LDD6LBSH.js").then((m) => m.StudentsListComponent) },
          { path: "students-grid", loadComponent: () => import("./chunk-QI6DYND5.js").then((m) => m.StudentsGridComponent) },
          { path: "students-details", loadComponent: () => import("./chunk-PHUE3TAM.js").then((m) => m.StudentsDetailsComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-6NYW5J57.js").then((m) => m.SettingsComponent),
            children: [
              { path: "superadmin-setting-withdraw", loadComponent: () => import("./chunk-BEXUWTEL.js").then((m) => m.SuperadminSettingWithdrawComponent) },
              { path: "superadmin-setting-notifications", loadComponent: () => import("./chunk-LN6ABBYT.js").then((m) => m.SuperadminSettingNotificationsComponent) },
              { path: "superadmin-plans", loadComponent: () => import("./chunk-MUH3BRR7.js").then((m) => m.SuperadminPlansComponent) },
              { path: "superadmin-integrations", loadComponent: () => import("./chunk-MAAUHS7P.js").then((m) => m.SuperadminIntegrationsComponent) },
              { path: "superadmin-linked-accounts", loadComponent: () => import("./chunk-234QK2EO.js").then((m) => m.SuperadminLinkedAccountsComponent) },
              { path: "superadmin-social-profiles", loadComponent: () => import("./chunk-STR7PJ3E.js").then((m) => m.SuperadminSocialProfilesComponent) },
              { path: "superadmin-change-password", loadComponent: () => import("./chunk-NKGQMZWJ.js").then((m) => m.SuperadminChangePasswordComponent) },
              { path: "superadmin-settings", loadComponent: () => import("./chunk-W2TWCUWT.js").then((m) => m.SuperadminSettingsComponent) }
            ]
          }
        ]
      },
      {
        path: "adminrh",
        loadComponent: () => import("./chunk-P4RPW5L5.js").then((m) => m.AdminrhComponent),
        canActivate: [layoutGuard],
        children: [
          { path: "adminrh-dashboard", loadComponent: () => import("./chunk-3D3OV66B.js").then((m) => m.AdminrhDashboardComponent) },
          { path: "adminrh-profile", loadComponent: () => import("./chunk-DRIPK2DR.js").then((m) => m.AdminrhProfileComponent) },
          { path: "adminrh-payouts", loadComponent: () => import("./chunk-KNLTI5MN.js").then((m) => m.AdminrhPayoutsComponent) },
          { path: "adminrh-tickets", loadComponent: () => import("./chunk-ZOE5LOQM.js").then((m) => m.AdminrhTicketsComponent) },
          { path: "adminrh-companymanagement", loadComponent: () => import("./chunk-2L7PCABW.js").then((m) => m.CompanyManagementComponent) },
          { path: "adminrh-company-details/:id", loadComponent: () => import("./chunk-RNSWI3G4.js").then((m) => m.CompanyDetailsComponent) },
          { path: "adminrh-company-add", loadComponent: () => import("./chunk-WONMOJCZ.js").then((m) => m.CompanyAddComponent) },
          { path: "adminrh-client-list", loadComponent: () => import("./chunk-XYGY4QDX.js").then((m) => m.ClientListComponent) },
          { path: "adminrh-client-add", loadComponent: () => import("./chunk-SPOVO66M.js").then((m) => m.ClientAddComponent) },
          { path: "adminrh-client-details/:id", loadComponent: () => import("./chunk-SCYTLVKU.js").then((m) => m.ClientDetailsComponent) },
          { path: "adminrh-permission", loadComponent: () => import("./chunk-U6CEZJTG.js").then((m) => m.AdminrhPermissionComponent) },
          { path: "adminrh-role", loadComponent: () => import("./chunk-FOPAHFQD.js").then((m) => m.AdminrhRoleComponent) },
          // {path:'adminrh-register',loadComponent:()=>import ('./features/adminrh/register/register.component').then((m)=>m.RegisterComponent)},
          { path: "adminrh-user-list", loadComponent: () => import("./chunk-5O6CCDYW.js").then((m) => m.UserListComponent) },
          { path: "adminrh-user-group-list", loadComponent: () => import("./chunk-T24LAFIL.js").then((m) => m.UserGroupListComponent) },
          { path: "adminrh-user-details/:id", loadComponent: () => import("./chunk-SADK7U3I.js").then((m) => m.UserDetailsComponent) },
          { path: "adminrh-user-add", loadComponent: () => import("./chunk-CZELKM3E.js").then((m) => m.UserAddComponent) },
          { path: "adminrh-demande", loadComponent: () => import("./chunk-CYIVUOYU.js").then((m) => m.AdminrhDemandeComponent) },
          { path: "adminrh-announcements", loadComponent: () => import("./chunk-C6MBMTJH.js").then((m) => m.AnnoncesComponent) },
          { path: "adminrh-quiz-questions/:quizId", loadComponent: () => import("./chunk-QBEAAWAV.js").then((m) => m.AdminrhQuizQuestionsComponent) },
          { path: "adminrh-quiz-questions", loadComponent: () => import("./chunk-QBEAAWAV.js").then((m) => m.AdminrhQuizQuestionsComponent) },
          { path: "adminrh-quiz-results", loadComponent: () => import("./chunk-AA472XSY.js").then((m) => m.AdminrhQuizResultsComponent) },
          { path: "adminrh-quiz-details", loadComponent: () => import("./chunk-CVWH77CE.js").then((m) => m.AdminrhQuizDetailsComponent) },
          { path: "adminrh-quiz", loadComponent: () => import("./chunk-J2BBDTJE.js").then((m) => m.AdminrhQuizComponent) },
          { path: "adminrh-certificate", loadComponent: () => import("./chunk-TO4KA5RL.js").then((m) => m.AdminrhCertificateComponent) },
          { path: "adminrh-certificate-modele", loadComponent: () => import("./chunk-F75KIV4P.js").then((m) => m.AdminrhCertificateModeleComponent) },
          { path: "adminrh-sondage", loadComponent: () => import("./chunk-AHOPKCZH.js").then((m) => m.AdminrhSondageComponent) },
          { path: "adminrh-mes-sondages", loadComponent: () => import("./chunk-GO7VDIJE.js").then((m) => m.AdminrhMesSondagesComponent) },
          { path: "adminrh-certifier", loadComponent: () => import("./chunk-46V7P6U4.js").then((m) => m.AdminrhCertifierComponent) },
          { path: "adminrh-categorie", loadComponent: () => import("./chunk-SV3O2YWP.js").then((m) => m.AdminrhCategorieComponent) },
          { path: "adminrh-catalogue", loadComponent: () => import("./chunk-LYRQQRHF.js").then((m) => m.AdminrhCatalogueComponent) },
          { path: "adminrh-parcours", loadComponent: () => import("./chunk-AP5E64QR.js").then((m) => m.AdminrhParcoursComponent) },
          { path: "adminrh-demande-parcours", loadComponent: () => import("./chunk-RR3IBORD.js").then((m) => m.AdminrhDemandeParcoursComponent) },
          { path: "adminrh-demande-catalogue", loadComponent: () => import("./chunk-LBM4HJBF.js").then((m) => m.AdminrhDemandeCatalogueComponent) },
          { path: "adminrh-demande-session", loadComponent: () => import("./chunk-CYTC4OE3.js").then((m) => m.AdminrhDemandeSessionComponent) },
          { path: "adminrh-earnings", loadComponent: () => import("./chunk-6MWHM4ZY.js").then((m) => m.AdminrhEarningsComponent) },
          { path: "adminrh-rapport", loadComponent: () => import("./chunk-RE6BTBNF.js").then((m) => m.AdminrhStatementsComponent) },
          { path: "adminrh-statements", loadComponent: () => import("./chunk-RE6BTBNF.js").then((m) => m.AdminrhStatementsComponent) },
          { path: "adminrh-direction", loadComponent: () => import("./chunk-3TOXQ2E5.js").then((m) => m.AdminrhDirectionComponent) },
          { path: "adminrh-course", loadComponent: () => import("./chunk-G43YOU3M.js").then((m) => m.AdminrhCourseComponent) },
          { path: "adminrh-course-grid", loadComponent: () => import("./chunk-7RAQUXL7.js").then((m) => m.AdminrhCourseGridComponent) },
          { path: "adminrh-session", loadComponent: () => import("./chunk-7KEAXTWR.js").then((m) => m.AdminrhSessionComponent) },
          { path: "guide-utilisation", loadComponent: () => import("./chunk-KJFDNOBH.js").then((m) => m.GuideUtilisationComponent) },
          { path: "tutoriels-video", loadComponent: () => import("./chunk-2MPKNUBH.js").then((m) => m.TutorielsVideoComponent) },
          { path: "adminrh-message", loadComponent: () => import("./chunk-54UX7OTX.js").then((m) => m.AdminrhMessageComponent) },
          { path: "adminrh-assignment", loadComponent: () => import("./chunk-UNFK3F3G.js").then((m) => m.AdminrhAssignmentComponent) },
          { path: "students-list", loadComponent: () => import("./chunk-IDI5LOGP.js").then((m) => m.StudentsListComponent) },
          { path: "students-grid", loadComponent: () => import("./chunk-PV5TOMJ6.js").then((m) => m.StudentsGridComponent) },
          { path: "students-details", loadComponent: () => import("./chunk-3ZGAAPOW.js").then((m) => m.StudentsDetailsComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-QVYUIJIZ.js").then((m) => m.SettingsComponent),
            children: [
              { path: "adminrh-setting-withdraw", loadComponent: () => import("./chunk-LRXPHGC5.js").then((m) => m.AdminrhSettingWithdrawComponent) },
              { path: "adminrh-setting-notifications", loadComponent: () => import("./chunk-UFYCGGL2.js").then((m) => m.AdminrhSettingNotificationsComponent) },
              { path: "adminrh-plans", loadComponent: () => import("./chunk-6SLTLPST.js").then((m) => m.AdminrhPlansComponent) },
              { path: "adminrh-integrations", loadComponent: () => import("./chunk-IPGIPKUF.js").then((m) => m.AdminrhIntegrationsComponent) },
              { path: "adminrh-linked-accounts", loadComponent: () => import("./chunk-YT264I5C.js").then((m) => m.AdminrhLinkedAccountsComponent) },
              { path: "adminrh-social-profiles", loadComponent: () => import("./chunk-DXIVAAPH.js").then((m) => m.AdminrhSocialProfilesComponent) },
              { path: "adminrh-change-password", loadComponent: () => import("./chunk-MDZV3FUE.js").then((m) => m.AdminrhChangePasswordComponent) },
              { path: "adminrh-settings", loadComponent: () => import("./chunk-L7W2LCIX.js").then((m) => m.AdminrhSettingsComponent) }
            ]
          }
        ]
      },
      {
        path: "pages",
        loadComponent: () => import("./chunk-NI7KYHDT.js").then((m) => m.PagesComponent),
        children: [
          { path: "faq", loadComponent: () => import("./chunk-I2ONHQR3.js").then((m) => m.FaqComponent) },
          { path: "notifications", loadComponent: () => import("./chunk-RISLOJYD.js").then((m) => m.NotificationsComponent) },
          { path: "pricing-plan", loadComponent: () => import("./chunk-WBXJ25Q6.js").then((m) => m.PricingPlanComponent) },
          { path: "term-condition", loadComponent: () => import("./chunk-DL7TVD6I.js").then((m) => m.TermConditionComponent) },
          { path: "privacy-policy", loadComponent: () => import("./chunk-MWUQWQLZ.js").then((m) => m.PrivacyPolicyComponent) },
          { path: "instructor-details", loadComponent: () => import("./chunk-IGGASK3Q.js").then((m) => m.InstructorDetailsComponent) },
          { path: "become-an-instructor", loadComponent: () => import("./chunk-RAXUVVOS.js").then((m) => m.BecomeAnExpertComponent) },
          { path: "instructor-grid", loadComponent: () => import("./chunk-WNFLOCH7.js").then((m) => m.InstructorGridComponent) },
          { path: "instructor-list", loadComponent: () => import("./chunk-EGGXHJS7.js").then((m) => m.InstructorListComponent) },
          { path: "contact-us", loadComponent: () => import("./chunk-GHZ7YGBJ.js").then((m) => m.ContactUsComponent) },
          { path: "about-us", loadComponent: () => import("./chunk-TUO2HEN5.js").then((m) => m.AboutUsComponent) },
          { path: "testimonial", loadComponent: () => import("./chunk-FKDMQQ6C.js").then((m) => m.TestimonialComponent) }
        ]
      },
      {
        path: "blog",
        loadComponent: () => import("./chunk-KN2PK5JE.js").then((m) => m.BlogComponent),
        children: [
          { path: "blog-grid", loadComponent: () => import("./chunk-NV7I6VHO.js").then((m) => m.BlogGridComponent) },
          { path: "blog-masonry", loadComponent: () => import("./chunk-IZMUPCEO.js").then((m) => m.BlogMasonryComponent) },
          { path: "blog-details-left-sidebar", loadComponent: () => import("./chunk-WAVZUCP6.js").then((m) => m.BlogDetailsLeftSidebarComponent) },
          { path: "blog-details-right-sidebar", loadComponent: () => import("./chunk-UXQJ7L22.js").then((m) => m.BlogDetailsRightSidebarComponent) },
          { path: "blog-2-grid", loadComponent: () => import("./chunk-VEKNS6G2.js").then((m) => m.Blog2GridComponent) },
          { path: "blog-3-grid", loadComponent: () => import("./chunk-74VGX6QH.js").then((m) => m.Blog3GridComponent) },
          { path: "blog-carousal", loadComponent: () => import("./chunk-APUKSOWG.js").then((m) => m.BlogCarousalComponent) },
          { path: "blog-left-sidebar", loadComponent: () => import("./chunk-LF3RWUUG.js").then((m) => m.BlogLeftSidebarComponent) },
          { path: "blog-right-sidebar", loadComponent: () => import("./chunk-J3PIAR35.js").then((m) => m.BlogRightSidebarComponent) },
          { path: "blog-details", loadComponent: () => import("./chunk-IPXZUZ7W.js").then((m) => m.BlogDetailsComponent) }
        ]
      },
      {
        path: "student",
        loadComponent: () => import("./chunk-XA6QBI7W.js").then((m) => m.StudentComponent),
        canActivate: [layoutGuard],
        children: [
          { path: "student-dashboard", loadComponent: () => import("./chunk-PGGATSBP.js").then((m) => m.StudentDashboardComponent) },
          { path: "student-profile", loadComponent: () => import("./chunk-YPUL7VP3.js").then((m) => m.StudentProfileComponent) },
          // RENOMMÉ : student-courses → mes-catalogues
          { path: "mes-catalogues", loadComponent: () => import("./chunk-4S26MJ26.js").then((m) => m.MesCataloguesComponent) },
          { path: "mes-catalogues/:id", loadComponent: () => import("./chunk-GRPAVF2T.js").then((m) => m.MesCataloguesDetailsComponent) },
          { path: "student-courses", redirectTo: "mes-catalogues", pathMatch: "full" },
          { path: "catalogue-detail/:id", loadComponent: () => import("./chunk-B6SJK5WQ.js").then((m) => m.CatalogueDetailComponent) },
          // RENOMMÉ : mes-cours → mes-formations
          { path: "mes-formations", loadComponent: () => import("./chunk-GCIF643G.js").then((m) => m.MesCoursComponent) },
          { path: "mes-cours", redirectTo: "mes-formations", pathMatch: "full" },
          { path: "student-tickets", loadComponent: () => import("./chunk-TIUG3RK7.js").then((m) => m.StudentTicketsComponent) },
          { path: "students-session", loadComponent: () => import("./chunk-IK2FQUPB.js").then((m) => m.StudentsSessionsComponent) },
          { path: "sessions-acceptees", loadComponent: () => import("./chunk-AZZIQ3T5.js").then((m) => m.SessionsAccepteesComponent) },
          // RENOMMÉ : students-catalogue → student-demande-catalogue
          { path: "student-demande-catalogue", loadComponent: () => import("./chunk-PCGROELF.js").then((m) => m.StudentDemandeCatalogueComponent) },
          { path: "students-catalogue", redirectTo: "student-demande-catalogue", pathMatch: "full" },
          { path: "students-explorer", loadComponent: () => import("./chunk-3OUEW5TB.js").then((m) => m.ExplorerComponent) },
          // RENOMMÉ : students-parcours → mes-demandes-parcours
          { path: "mes-demandes-parcours", loadComponent: () => import("./chunk-YI7KQRXO.js").then((m) => m.StudentDemandeParcoursComponent) },
          { path: "students-parcours", redirectTo: "mes-demandes-parcours", pathMatch: "full" },
          // RENOMMÉ : parcours-assignes → mes-parcours-assignes
          // RENOMMÉ : parcours-assignes → mes-parcours-assignes
          { path: "mes-parcours", loadComponent: () => import("./chunk-5FYXVDWZ.js").then((m) => m.MesParcoursComponent) },
          { path: "parcours-assignes", redirectTo: "mes-parcours-assignes", pathMatch: "full" },
          { path: "mes-parcours", redirectTo: "mes-parcours-assignes", pathMatch: "full" },
          { path: "mes-parcours", redirectTo: "mes-parcours", pathMatch: "full" },
          // RENOMMÉ : parcours-assigne/:id → mes-parcours/:id
          { path: "mes-parcours/:id", loadComponent: () => import("./chunk-RJHCYFES.js").then((m) => m.ParcoursAssigneDetailComponent) },
          { path: "parcours-assigne/:id", redirectTo: "mes-parcours/:id", pathMatch: "full" },
          // Détails parcours (pour n'importe quel parcours depuis l'explorer)
          { path: "parcours-details/:id", loadComponent: () => import("./chunk-GJXRU3MZ.js").then((m) => m.ParcoursDetailsComponent) },
          { path: "student-sondage/:id", loadComponent: () => import("./chunk-Q6IBWU7B.js").then((m) => m.StudentSondageComponent) },
          { path: "student-mes-sondages", loadComponent: () => import("./chunk-YXQ74S2G.js").then((m) => m.StudentMesSondagesComponent) },
          { path: "student-quiz", loadComponent: () => import("./chunk-TTZTMO3W.js").then((m) => m.StudentQuizComponent) },
          { path: "student-quiz-questions/:id", loadComponent: () => import("./chunk-67EREGMO.js").then((m) => m.StudentQuizQuestionsComponent) },
          { path: "student-planning", loadComponent: () => import("./chunk-S5MCFRYL.js").then((m) => m.StudentPlanningComponent) },
          { path: "student-certificate", loadComponent: () => import("./chunk-ZSJOEV6R.js").then((m) => m.StudentCertificateComponent) },
          { path: "student-demande", loadComponent: () => import("./chunk-N6RWB5XN.js").then((m) => m.StudentDemandeComponent) },
          { path: "mes-competences", loadComponent: () => import("./chunk-WJ52EHEL.js").then((m) => m.MesCompetencesComponent) },
          { path: "mes-competences-recommandees", loadComponent: () => import("./chunk-HQKXM5GF.js").then((m) => m.MesCompetencesRecommandeesComponent) },
          { path: "student-message", loadComponent: () => import("./chunk-MMK47BH4.js").then((m) => m.StudentMessageComponent) },
          { path: "student-qa", loadComponent: () => import("./chunk-RS5A34UD.js").then((m) => m.StudentQaComponent) },
          { path: "student-order-history", loadComponent: () => import("./chunk-GEEDPWIG.js").then((m) => m.StudentOrderHistoryComponent) },
          { path: "student-referral", loadComponent: () => import("./chunk-HUU6IL3O.js").then((m) => m.StudentReferralComponent) },
          { path: "student-reviews", loadComponent: () => import("./chunk-5RQIVOEM.js").then((m) => m.StudentReviewsComponent) },
          { path: "student-wishlist", loadComponent: () => import("./chunk-WCTXMJSJ.js").then((m) => m.StudentWishlistComponent) },
          { path: "ecart-competences", loadComponent: () => import("./chunk-PDH347L5.js").then((m) => m.EcartCompetencesComponent) },
          { path: "guide-utilisation", loadComponent: () => import("./chunk-KJFDNOBH.js").then((m) => m.GuideUtilisationComponent) },
          { path: "tutoriels-video", loadComponent: () => import("./chunk-2MPKNUBH.js").then((m) => m.TutorielsVideoComponent) },
          { path: "annonces-maj", loadComponent: () => import("./chunk-C6MBMTJH.js").then((m) => m.AnnoncesComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-IQLMRNIE.js").then((m) => m.SettingsComponent),
            children: [
              { path: "student-linked-accounts", loadComponent: () => import("./chunk-6EPZ5HXY.js").then((m) => m.StudentLinkedAccountsComponent) },
              { path: "student-change-password", loadComponent: () => import("./chunk-UNACOV56.js").then((m) => m.StudentChangePasswordComponent) },
              { path: "student-settings", loadComponent: () => import("./chunk-COG37OZM.js").then((m) => m.StudentSettingsComponent) },
              { path: "student-notifications", loadComponent: () => import("./chunk-22OS4H5Z.js").then((m) => m.StudentNotificationsComponent) },
              { path: "student-billing-address", loadComponent: () => import("./chunk-MQHJTPNU.js").then((m) => m.StudentBillingAddressComponent) },
              { path: "student-social-profile", loadComponent: () => import("./chunk-MMJAHPCO.js").then((m) => m.StudentSocialProfileComponent) }
            ]
          }
        ]
      },
      // ── ESPACE MANAGER — accessible à tout utilisateur ayant au moins un N-1 ──
      {
        path: "manager",
        loadComponent: () => import("./chunk-CRO64KKP.js").then((m) => m.ManagerComponent),
        canActivate: [layoutGuard, managerGuard],
        children: [
          { path: "", redirectTo: "manager-dashboard", pathMatch: "full" },
          { path: "manager-dashboard", loadComponent: () => import("./chunk-TK3NCQHX.js").then((m) => m.ManagerDashboardComponent) },
          { path: "manager-equipe", loadComponent: () => import("./chunk-MZBEXAKH.js").then((m) => m.ManagerEquipeComponent) },
          { path: "manager-collaborateur/:id", loadComponent: () => import("./chunk-SUG72DEJ.js").then((m) => m.ManagerCollaborateurDetailsComponent) },
          { path: "manager-demandes", loadComponent: () => import("./chunk-GCXMHDRX.js").then((m) => m.ManagerDemandesComponent) }
        ]
      }
    ]
  },
  { path: "verify-certificate", loadComponent: () => import("./chunk-VRPPP2DP.js").then((m) => m.VerifyCertificateComponent) },
  { path: "sondage/:token", loadComponent: () => import("./chunk-2KEPNHGU.js").then((m) => m.SondagePublicComponent) },
  { path: "under-construction", loadComponent: () => import("./chunk-TW6HM2KS.js").then((m) => m.UnderConstructionComponent) },
  { path: "coming-soon", loadComponent: () => import("./chunk-YJBXTJO5.js").then((m) => m.ComingSoonComponent) },
  { path: "error-500", loadComponent: () => import("./chunk-7OHUH6Q2.js").then((m) => m.Error500Component) },
  { path: "error-404", loadComponent: () => import("./chunk-YIYARQTD.js").then((m) => m.Error404Component) },
  {
    path: "**",
    redirectTo: "error-404",
    pathMatch: "full"
  }
];

export {
  routes
};
//# sourceMappingURL=chunk-SYHWLEE2.js.map
