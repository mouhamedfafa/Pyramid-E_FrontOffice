import {
  RoleRedirectService
} from "./chunk-WWL5QCGB.js";
import {
  PermissionService
} from "./chunk-KO4UL2MU.js";
import {
  AuthService
} from "./chunk-6DGDCR4J.js";
import {
  Router
} from "./chunk-WU2IX7JC.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-F67U43FE.js";

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

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  },
  {
    path: "auth",
    loadComponent: () => import("./chunk-UTZGOTB2.js").then((m) => m.AuthComponent),
    children: [
      { path: "forgot-password", loadComponent: () => import("./chunk-Z43RLDRG.js").then((m) => m.ForgotPasswordComponent) },
      { path: "login", loadComponent: () => import("./chunk-YVFJFVCN.js").then((m) => m.LoginComponent) },
      { path: "register", loadComponent: () => import("./chunk-DUSKBODG.js").then((m) => m.RegisterComponent) },
      { path: "set-password", loadComponent: () => import("./chunk-2G2ERBDC.js").then((m) => m.SetPasswordComponent) },
      { path: "otp", loadComponent: () => import("./chunk-MNTU5QMW.js").then((m) => m.OtpComponent) },
      { path: "lock-screen", loadComponent: () => import("./chunk-XRS6IJN7.js").then((m) => m.LockScreenComponent) },
      { path: "magic-verify", loadComponent: () => import("./chunk-QHHTZM4S.js").then((m) => m.MagicVerifyComponent) },
      { path: "activate", loadComponent: () => import("./chunk-KDW4J5ID.js").then((m) => m.ActivateComponent) }
    ]
  },
  // ══════════════════════════════════════════════════════════════════════
  // PAGES PLEIN ÉCRAN — en dehors de tout layout back-office
  // ══════════════════════════════════════════════════════════════════════
  {
    path: "courses/course-watch/:id",
    loadComponent: () => import("./chunk-ARSAAYPX.js").then((m) => m.CourseWatchComponent),
    canActivate: [authGuard]
  },
  // Rétrocompatibilité ancienne URL
  {
    path: "student/lecture-formation/:id",
    loadComponent: () => import("./chunk-ARSAAYPX.js").then((m) => m.CourseWatchComponent),
    canActivate: [authGuard]
  },
  // ✅ Route quiz plein écran — hors layout, même niveau que lecture-formation
  {
    path: "student/quiz/:id",
    loadComponent: () => import("./chunk-KELJE4GY.js").then((m) => m.StudentQuizQuestionsComponent),
    canActivate: [authGuard]
  },
  {
    path: "",
    loadComponent: () => import("./chunk-7LQZZFM6.js").then((m) => m.FeaturesComponent),
    children: [
      { path: "index", loadComponent: () => import("./chunk-3LJXADS3.js").then((m) => m.HomeComponent) },
      { path: "index-two", loadComponent: () => import("./chunk-JKE6EERV.js").then((m) => m.Home2Component) },
      { path: "index-three", loadComponent: () => import("./chunk-AQ44UREL.js").then((m) => m.Home3Component) },
      { path: "index-four", loadComponent: () => import("./chunk-LZXWH2DH.js").then((m) => m.Home4Component) },
      { path: "index-five", loadComponent: () => import("./chunk-I47SJBDB.js").then((m) => m.Home5Component) },
      { path: "index-six", loadComponent: () => import("./chunk-RWTBXU2J.js").then((m) => m.Home6Component) },
      {
        path: "courses",
        loadComponent: () => import("./chunk-4KIERR7M.js").then((m) => m.CoursesComponent),
        children: [
          { path: "add-course", loadComponent: () => import("./chunk-B2AU2PG5.js").then((m) => m.AddCourseComponent) },
          { path: "course-details/:id", loadComponent: () => import("./chunk-YO7U2KZE.js").then((m) => m.CourseDetailsComponent) },
          { path: "course-details-2", loadComponent: () => import("./chunk-ZAFK6WFH.js").then((m) => m.CourseDetails2Component) },
          { path: "course-list", loadComponent: () => import("./chunk-UN76Y7GC.js").then((m) => m.CourseListComponent) },
          { path: "course-grid", loadComponent: () => import("./chunk-V7633A62.js").then((m) => m.CourseGridComponent) },
          { path: "course-category", loadComponent: () => import("./chunk-HQ72UAQK.js").then((m) => m.CourseCategoryComponent) },
          { path: "course-category-2", loadComponent: () => import("./chunk-77AS37WM.js").then((m) => m.CourseCategory2Component) },
          { path: "course-category-3", loadComponent: () => import("./chunk-JQ655ITJ.js").then((m) => m.CourseCategory3Component) },
          { path: "course-resume", loadComponent: () => import("./chunk-NSOG6LD5.js").then((m) => m.CourseResumeComponent) },
          { path: "cart", loadComponent: () => import("./chunk-KHLCHGKC.js").then((m) => m.CourseCartComponent) },
          { path: "checkout", loadComponent: () => import("./chunk-346QYDXX.js").then((m) => m.CourseCheckoutComponent) },
          { path: "add-course", loadComponent: () => import("./chunk-B2AU2PG5.js").then((m) => m.AddCourseComponent) },
          { path: "instructor-course-add", loadComponent: () => import("./chunk-TGW2GD7N.js").then((m) => m.InstructorCourseAddComponent) },
          { path: "instructor-course-edit/:id", loadComponent: () => import("./chunk-PRHKAEUH.js").then((m) => m.InstructorCourseEditComponent) },
          { path: "instructor-course-details/:id", loadComponent: () => import("./chunk-2GA3IXR3.js").then((m) => m.InstructorCourseDetailsComponent) }
        ]
      },
      {
        path: "instructor",
        loadComponent: () => import("./chunk-2L5H2X2B.js").then((m) => m.InstructorComponent),
        canActivate: [layoutGuard],
        children: [
          { path: "instructor-dashboard", loadComponent: () => import("./chunk-OXQTLODK.js").then((m) => m.InstructorDashboardComponent) },
          { path: "instructor-profile", loadComponent: () => import("./chunk-A2VR4TCZ.js").then((m) => m.InstructorProfileComponent) },
          { path: "instructor-payouts", loadComponent: () => import("./chunk-MYIZ4NZZ.js").then((m) => m.InstructorPayoutsComponent) },
          { path: "instructor-tickets", loadComponent: () => import("./chunk-QQIOOXS2.js").then((m) => m.InstructorTicketsComponent) },
          { path: "instructor-announcements", loadComponent: () => import("./chunk-NFJPQ5YW.js").then((m) => m.AnnoncesComponent) },
          { path: "instructor-quiz-questions/:quizId", loadComponent: () => import("./chunk-VXTRLYQ5.js").then((m) => m.InstructorQuizQuestionsComponent) },
          { path: "instructor-quiz-results", loadComponent: () => import("./chunk-J7PHCXHI.js").then((m) => m.InstructorQuizResultsComponent) },
          { path: "instructor-quiz-details", loadComponent: () => import("./chunk-OBYMENWW.js").then((m) => m.InstructorQuizDetailsComponent) },
          { path: "instructor-quiz", loadComponent: () => import("./chunk-QD2YF3V2.js").then((m) => m.InstructorQuizComponent) },
          { path: "instructor-certificate", loadComponent: () => import("./chunk-GPRXTUCY.js").then((m) => m.InstructorCertificateComponent) },
          { path: "instructor-earnings", loadComponent: () => import("./chunk-VUFO3UFI.js").then((m) => m.InstructorEarningsComponent) },
          { path: "instructor-statements", loadComponent: () => import("./chunk-PLYA3OHO.js").then((m) => m.InstructorStatementsComponent) },
          { path: "instructor-course", loadComponent: () => import("./chunk-LFPWCWBN.js").then((m) => m.InstructorCourseComponent) },
          { path: "instructor-course-grid", loadComponent: () => import("./chunk-UI336VJZ.js").then((m) => m.InstructorCourseGridComponent) },
          { path: "instructor-session", loadComponent: () => import("./chunk-JGDE2XIF.js").then((m) => m.InstructorSessionComponent) },
          { path: "instructor-mes-sondages", loadComponent: () => import("./chunk-2IUMQUNO.js").then((m) => m.InstructorMesSondagesComponent) },
          { path: "video-ressources", loadComponent: () => import("./chunk-FNSICU4N.js").then((m) => m.VideoRessourcesComponent) },
          { path: "guide-utilisation", loadComponent: () => import("./chunk-IKJUJ7U5.js").then((m) => m.GuideUtilisationComponent) },
          { path: "tutoriels-video", loadComponent: () => import("./chunk-TNXOPL3X.js").then((m) => m.TutorielsVideoComponent) },
          { path: "instructor-message", loadComponent: () => import("./chunk-UPPANP4W.js").then((m) => m.InstructorMessageComponent) },
          { path: "instructor-assignment", loadComponent: () => import("./chunk-NTVR65IG.js").then((m) => m.InstructorAssignmentComponent) },
          { path: "students-list", loadComponent: () => import("./chunk-UHC5PS2N.js").then((m) => m.StudentsListComponent) },
          { path: "students-grid", loadComponent: () => import("./chunk-HBLNBK66.js").then((m) => m.StudentsGridComponent) },
          { path: "students-details", loadComponent: () => import("./chunk-2ADGVYW4.js").then((m) => m.StudentsDetailsComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-KHRE4MTY.js").then((m) => m.SettingsComponent),
            children: [
              { path: "instructor-setting-withdraw", loadComponent: () => import("./chunk-SJL53T5M.js").then((m) => m.InstructorSettingWithdrawComponent) },
              { path: "instructor-setting-notifications", loadComponent: () => import("./chunk-DF24GNEQ.js").then((m) => m.InstructorSettingNotificationsComponent) },
              { path: "instructor-plans", loadComponent: () => import("./chunk-E6ITXKW2.js").then((m) => m.InstructorPlansComponent) },
              { path: "instructor-integrations", loadComponent: () => import("./chunk-EV6LYLPF.js").then((m) => m.InstructorIntegrationsComponent) },
              { path: "instructor-linked-accounts", loadComponent: () => import("./chunk-OR4F3XPS.js").then((m) => m.InstructorLinkedAccountsComponent) },
              { path: "instructor-social-profiles", loadComponent: () => import("./chunk-SWDHN4HR.js").then((m) => m.InstructorSocialProfilesComponent) },
              { path: "instructor-change-password", loadComponent: () => import("./chunk-IV3NBLDQ.js").then((m) => m.InstructorChangePasswordComponent) },
              { path: "instructor-settings", loadComponent: () => import("./chunk-F4DPN6UR.js").then((m) => m.InstructorSettingsComponent) }
            ]
          }
        ]
      },
      {
        path: "superadmin",
        loadComponent: () => import("./chunk-CLZ3POUD.js").then((m) => m.SuperadminComponent),
        canActivate: [layoutGuard],
        children: [
          { path: "superadmin-dashboard", loadComponent: () => import("./chunk-D3CU2YYW.js").then((m) => m.SuperAdminDashboardComponent) },
          { path: "superadmin-profile", loadComponent: () => import("./chunk-ELRGAQTY.js").then((m) => m.SuperadminProfileComponent) },
          { path: "superadmin-payouts", loadComponent: () => import("./chunk-P5RZ4SRE.js").then((m) => m.SuperadminPayoutsComponent) },
          { path: "superadmin-tickets", loadComponent: () => import("./chunk-MCAQYHGM.js").then((m) => m.SuperadminTicketsComponent) },
          { path: "superadmin-companymanagement", loadComponent: () => import("./chunk-JQ3H2WXU.js").then((m) => m.CompanyManagementComponent) },
          { path: "superadmin-company-details/:id", loadComponent: () => import("./chunk-R3FHNCPT.js").then((m) => m.CompanyDetailsComponent) },
          { path: "superadmin-company-add", loadComponent: () => import("./chunk-O2IYPOUM.js").then((m) => m.CompanyAddComponent) },
          { path: "superadmin-client-list", loadComponent: () => import("./chunk-VXLOX6MQ.js").then((m) => m.ClientListComponent) },
          { path: "superadmin-client-add", loadComponent: () => import("./chunk-BW5IET7Q.js").then((m) => m.ClientAddComponent) },
          { path: "superadmin-client-details/:id", loadComponent: () => import("./chunk-N6MB6EWZ.js").then((m) => m.ClientDetailsComponent) },
          { path: "superadmin-permission", loadComponent: () => import("./chunk-RORMVRFD.js").then((m) => m.SuperadminPermissionComponent) },
          { path: "superadmin-role", loadComponent: () => import("./chunk-EH7CRCUE.js").then((m) => m.SuperadminRoleComponent) },
          // {path:'superadmin-register',loadComponent:()=>import ('./features/superadmin/register/register.component').then((m)=>m.RegisterComponent)},
          { path: "superadmin-user-list", loadComponent: () => import("./chunk-LL2BQCOR.js").then((m) => m.UserListComponent), canActivate: [PermissionGuard], data: { permission: "lister utilisateurs" } },
          { path: "superadmin-user-details/:id", loadComponent: () => import("./chunk-KQ2GXPKY.js").then((m) => m.UserDetailsComponent) },
          { path: "superadmin-user-add", loadComponent: () => import("./chunk-QC7HUZZ5.js").then((m) => m.UserAddComponent) },
          { path: "superadmin-announcements", loadComponent: () => import("./chunk-XSPP63UD.js").then((m) => m.SuperadminAnnouncementsComponent) },
          { path: "superadmin-quiz-questions", loadComponent: () => import("./chunk-AW43KEW2.js").then((m) => m.SuperadminQuizQuestionsComponent) },
          { path: "superadmin-quiz-results", loadComponent: () => import("./chunk-LQ4ZTTX2.js").then((m) => m.SuperadminQuizResultsComponent) },
          { path: "superadmin-quiz-details", loadComponent: () => import("./chunk-OMKZXY3B.js").then((m) => m.SuperadminQuizDetailsComponent) },
          { path: "superadmin-quiz", loadComponent: () => import("./chunk-WS2ZNOVS.js").then((m) => m.SuperadminQuizComponent) },
          { path: "superadmin-certificate", loadComponent: () => import("./chunk-D7DODWCZ.js").then((m) => m.SuperadminCertificateComponent) },
          { path: "superadmin-earnings", loadComponent: () => import("./chunk-ZF7KOEAU.js").then((m) => m.SuperadminEarningsComponent) },
          { path: "superadmin-rapports", loadComponent: () => import("./chunk-R64MYUFE.js").then((m) => m.SuperadminRapportsComponent) },
          { path: "superadmin-course", loadComponent: () => import("./chunk-ZAJ3A2EM.js").then((m) => m.SuperadminCourseComponent) },
          { path: "superadmin-course-grid", loadComponent: () => import("./chunk-3J4FQDY5.js").then((m) => m.SuperadminCourseGridComponent) },
          { path: "superadmin-session", loadComponent: () => import("./chunk-7FWD4EK6.js").then((m) => m.SuperadminSessionComponent) },
          { path: "superadmin-parcours", loadComponent: () => import("./chunk-JQSUSFK6.js").then((m) => m.SuperadminParcoursComponent) },
          { path: "superadmin-catalogue", loadComponent: () => import("./chunk-CEVHIAPJ.js").then((m) => m.SuperadminCatalogueComponent) },
          { path: "superadmin-message", loadComponent: () => import("./chunk-56P2HP6A.js").then((m) => m.SuperadminMessageComponent) },
          { path: "superadmin-audit-logs", loadComponent: () => import("./chunk-EOY3ZIRO.js").then((m) => m.SuperadminAuditLogsComponent) },
          { path: "superadmin-sondage", loadComponent: () => import("./chunk-X4TCITIZ.js").then((m) => m.SuperadminSondageComponent) },
          { path: "manage-guide-utilisation", loadComponent: () => import("./chunk-MPJQUMMM.js").then((m) => m.ManageGuideUtilisationComponent) },
          { path: "manage-tutoriels-video", loadComponent: () => import("./chunk-DD2TU5UR.js").then((m) => m.ManageTutorielsVideoComponent) },
          { path: "manage-annonces", loadComponent: () => import("./chunk-AIU6MXYT.js").then((m) => m.ManageAnnoncesComponent) },
          { path: "superadmin-assignment", loadComponent: () => import("./chunk-KJ7G7TCH.js").then((m) => m.SuperadminAssignmentComponent) },
          { path: "students-list", loadComponent: () => import("./chunk-A5HWTLS3.js").then((m) => m.StudentsListComponent) },
          { path: "students-grid", loadComponent: () => import("./chunk-UX4DJJCP.js").then((m) => m.StudentsGridComponent) },
          { path: "students-details", loadComponent: () => import("./chunk-TGPZIND3.js").then((m) => m.StudentsDetailsComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-PIYELU66.js").then((m) => m.SettingsComponent),
            children: [
              { path: "superadmin-setting-withdraw", loadComponent: () => import("./chunk-PVEYOABW.js").then((m) => m.SuperadminSettingWithdrawComponent) },
              { path: "superadmin-setting-notifications", loadComponent: () => import("./chunk-Z7D5MLWS.js").then((m) => m.SuperadminSettingNotificationsComponent) },
              { path: "superadmin-plans", loadComponent: () => import("./chunk-5TMXTWGG.js").then((m) => m.SuperadminPlansComponent) },
              { path: "superadmin-integrations", loadComponent: () => import("./chunk-ZVT5RTFS.js").then((m) => m.SuperadminIntegrationsComponent) },
              { path: "superadmin-linked-accounts", loadComponent: () => import("./chunk-PS2JWHZQ.js").then((m) => m.SuperadminLinkedAccountsComponent) },
              { path: "superadmin-social-profiles", loadComponent: () => import("./chunk-56TJVI5L.js").then((m) => m.SuperadminSocialProfilesComponent) },
              { path: "superadmin-change-password", loadComponent: () => import("./chunk-A35VXM5I.js").then((m) => m.SuperadminChangePasswordComponent) },
              { path: "superadmin-settings", loadComponent: () => import("./chunk-S337RV2O.js").then((m) => m.SuperadminSettingsComponent) }
            ]
          }
        ]
      },
      {
        path: "adminrh",
        loadComponent: () => import("./chunk-UGMDDGGH.js").then((m) => m.AdminrhComponent),
        canActivate: [layoutGuard],
        children: [
          { path: "adminrh-dashboard", loadComponent: () => import("./chunk-OSUEOXZX.js").then((m) => m.AdminrhDashboardComponent) },
          { path: "adminrh-profile", loadComponent: () => import("./chunk-5SN5RZ7J.js").then((m) => m.AdminrhProfileComponent) },
          { path: "adminrh-payouts", loadComponent: () => import("./chunk-CITN4B5Q.js").then((m) => m.AdminrhPayoutsComponent) },
          { path: "adminrh-tickets", loadComponent: () => import("./chunk-XNGYOL5H.js").then((m) => m.AdminrhTicketsComponent) },
          { path: "adminrh-companymanagement", loadComponent: () => import("./chunk-RIUHO2VQ.js").then((m) => m.CompanyManagementComponent) },
          { path: "adminrh-company-details/:id", loadComponent: () => import("./chunk-T4LJIOR4.js").then((m) => m.CompanyDetailsComponent) },
          { path: "adminrh-company-add", loadComponent: () => import("./chunk-LELW3LXV.js").then((m) => m.CompanyAddComponent) },
          { path: "adminrh-client-list", loadComponent: () => import("./chunk-PE6XHHRU.js").then((m) => m.ClientListComponent) },
          { path: "adminrh-client-add", loadComponent: () => import("./chunk-BFIGZ5DB.js").then((m) => m.ClientAddComponent) },
          { path: "adminrh-client-details/:id", loadComponent: () => import("./chunk-PW5GXCYG.js").then((m) => m.ClientDetailsComponent) },
          { path: "adminrh-permission", loadComponent: () => import("./chunk-4EFA3JKX.js").then((m) => m.AdminrhPermissionComponent) },
          { path: "adminrh-role", loadComponent: () => import("./chunk-JXZ55CW4.js").then((m) => m.AdminrhRoleComponent) },
          // {path:'adminrh-register',loadComponent:()=>import ('./features/adminrh/register/register.component').then((m)=>m.RegisterComponent)},
          { path: "adminrh-user-list", loadComponent: () => import("./chunk-YIS6ZFYU.js").then((m) => m.UserListComponent) },
          { path: "adminrh-user-group-list", loadComponent: () => import("./chunk-V3RZSRYY.js").then((m) => m.UserGroupListComponent) },
          { path: "adminrh-user-details/:id", loadComponent: () => import("./chunk-BXHU336F.js").then((m) => m.UserDetailsComponent) },
          { path: "adminrh-user-add", loadComponent: () => import("./chunk-DNQTLIV7.js").then((m) => m.UserAddComponent) },
          { path: "adminrh-demande", loadComponent: () => import("./chunk-KHLOJFCM.js").then((m) => m.AdminrhDemandeComponent) },
          { path: "adminrh-announcements", loadComponent: () => import("./chunk-NFJPQ5YW.js").then((m) => m.AnnoncesComponent) },
          { path: "adminrh-quiz-questions/:quizId", loadComponent: () => import("./chunk-ACWTI6PJ.js").then((m) => m.AdminrhQuizQuestionsComponent) },
          { path: "adminrh-quiz-questions", loadComponent: () => import("./chunk-ACWTI6PJ.js").then((m) => m.AdminrhQuizQuestionsComponent) },
          { path: "adminrh-quiz-results", loadComponent: () => import("./chunk-S6HVHQZE.js").then((m) => m.AdminrhQuizResultsComponent) },
          { path: "adminrh-quiz-details", loadComponent: () => import("./chunk-Q6MPVWWU.js").then((m) => m.AdminrhQuizDetailsComponent) },
          { path: "adminrh-quiz", loadComponent: () => import("./chunk-5UKY4K2B.js").then((m) => m.AdminrhQuizComponent) },
          { path: "adminrh-certificate", loadComponent: () => import("./chunk-UJSDFP2K.js").then((m) => m.AdminrhCertificateComponent) },
          { path: "adminrh-certificate-modele", loadComponent: () => import("./chunk-X24TYKGH.js").then((m) => m.AdminrhCertificateModeleComponent) },
          { path: "adminrh-sondage", loadComponent: () => import("./chunk-APFPCPEW.js").then((m) => m.AdminrhSondageComponent) },
          { path: "adminrh-mes-sondages", loadComponent: () => import("./chunk-ORNU4C5B.js").then((m) => m.AdminrhMesSondagesComponent) },
          { path: "adminrh-certifier", loadComponent: () => import("./chunk-THNKOQBI.js").then((m) => m.AdminrhCertifierComponent) },
          { path: "adminrh-categorie", loadComponent: () => import("./chunk-HBNY3XPA.js").then((m) => m.AdminrhCategorieComponent) },
          { path: "adminrh-catalogue", loadComponent: () => import("./chunk-VBZKDJOL.js").then((m) => m.AdminrhCatalogueComponent) },
          { path: "adminrh-parcours", loadComponent: () => import("./chunk-CNRRRGIQ.js").then((m) => m.AdminrhParcoursComponent) },
          { path: "adminrh-demande-parcours", loadComponent: () => import("./chunk-WPCPSADK.js").then((m) => m.AdminrhDemandeParcoursComponent) },
          { path: "adminrh-demande-catalogue", loadComponent: () => import("./chunk-BGCEMJPR.js").then((m) => m.AdminrhDemandeCatalogueComponent) },
          { path: "adminrh-demande-session", loadComponent: () => import("./chunk-SJVJWZ3R.js").then((m) => m.AdminrhDemandeSessionComponent) },
          { path: "adminrh-earnings", loadComponent: () => import("./chunk-YIST54IP.js").then((m) => m.AdminrhEarningsComponent) },
          { path: "adminrh-rapport", loadComponent: () => import("./chunk-GYRH47NT.js").then((m) => m.AdminrhStatementsComponent) },
          { path: "adminrh-statements", loadComponent: () => import("./chunk-GYRH47NT.js").then((m) => m.AdminrhStatementsComponent) },
          { path: "adminrh-direction", loadComponent: () => import("./chunk-GZECTPKR.js").then((m) => m.AdminrhDirectionComponent) },
          { path: "adminrh-course", loadComponent: () => import("./chunk-PTMH6LFJ.js").then((m) => m.AdminrhCourseComponent) },
          { path: "adminrh-course-grid", loadComponent: () => import("./chunk-DZ4DQROT.js").then((m) => m.AdminrhCourseGridComponent) },
          { path: "adminrh-session", loadComponent: () => import("./chunk-JZDE7V4C.js").then((m) => m.AdminrhSessionComponent) },
          { path: "guide-utilisation", loadComponent: () => import("./chunk-IKJUJ7U5.js").then((m) => m.GuideUtilisationComponent) },
          { path: "tutoriels-video", loadComponent: () => import("./chunk-TNXOPL3X.js").then((m) => m.TutorielsVideoComponent) },
          { path: "adminrh-message", loadComponent: () => import("./chunk-KNSMFM2H.js").then((m) => m.AdminrhMessageComponent) },
          { path: "adminrh-assignment", loadComponent: () => import("./chunk-2EC6JF6D.js").then((m) => m.AdminrhAssignmentComponent) },
          { path: "students-list", loadComponent: () => import("./chunk-MYVQOUHE.js").then((m) => m.StudentsListComponent) },
          { path: "students-grid", loadComponent: () => import("./chunk-QQ43FKWQ.js").then((m) => m.StudentsGridComponent) },
          { path: "students-details", loadComponent: () => import("./chunk-DSWIKUGI.js").then((m) => m.StudentsDetailsComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-PSFFFX2S.js").then((m) => m.SettingsComponent),
            children: [
              { path: "adminrh-setting-withdraw", loadComponent: () => import("./chunk-X353P4NZ.js").then((m) => m.AdminrhSettingWithdrawComponent) },
              { path: "adminrh-setting-notifications", loadComponent: () => import("./chunk-SPP2DDZC.js").then((m) => m.AdminrhSettingNotificationsComponent) },
              { path: "adminrh-plans", loadComponent: () => import("./chunk-MZADPEF4.js").then((m) => m.AdminrhPlansComponent) },
              { path: "adminrh-integrations", loadComponent: () => import("./chunk-YJGN3GSQ.js").then((m) => m.AdminrhIntegrationsComponent) },
              { path: "adminrh-linked-accounts", loadComponent: () => import("./chunk-3E3NDW7W.js").then((m) => m.AdminrhLinkedAccountsComponent) },
              { path: "adminrh-social-profiles", loadComponent: () => import("./chunk-NBZ424XV.js").then((m) => m.AdminrhSocialProfilesComponent) },
              { path: "adminrh-change-password", loadComponent: () => import("./chunk-I5QJDN7P.js").then((m) => m.AdminrhChangePasswordComponent) },
              { path: "adminrh-settings", loadComponent: () => import("./chunk-WLXRLBIF.js").then((m) => m.AdminrhSettingsComponent) }
            ]
          }
        ]
      },
      {
        path: "pages",
        loadComponent: () => import("./chunk-UMI33Y2X.js").then((m) => m.PagesComponent),
        children: [
          { path: "faq", loadComponent: () => import("./chunk-NVTPRD5K.js").then((m) => m.FaqComponent) },
          { path: "notifications", loadComponent: () => import("./chunk-YPESUX6F.js").then((m) => m.NotificationsComponent) },
          { path: "pricing-plan", loadComponent: () => import("./chunk-GAY7H2IK.js").then((m) => m.PricingPlanComponent) },
          { path: "term-condition", loadComponent: () => import("./chunk-5I5ARLOR.js").then((m) => m.TermConditionComponent) },
          { path: "privacy-policy", loadComponent: () => import("./chunk-DZQTZEUJ.js").then((m) => m.PrivacyPolicyComponent) },
          { path: "instructor-details", loadComponent: () => import("./chunk-5WL6LSJT.js").then((m) => m.InstructorDetailsComponent) },
          { path: "become-an-instructor", loadComponent: () => import("./chunk-DWTPRTW4.js").then((m) => m.BecomeAnExpertComponent) },
          { path: "instructor-grid", loadComponent: () => import("./chunk-CAQLINV6.js").then((m) => m.InstructorGridComponent) },
          { path: "instructor-list", loadComponent: () => import("./chunk-PYCAVCSP.js").then((m) => m.InstructorListComponent) },
          { path: "contact-us", loadComponent: () => import("./chunk-WVJUVII6.js").then((m) => m.ContactUsComponent) },
          { path: "about-us", loadComponent: () => import("./chunk-ENB3B2LX.js").then((m) => m.AboutUsComponent) },
          { path: "testimonial", loadComponent: () => import("./chunk-OZARSWWU.js").then((m) => m.TestimonialComponent) }
        ]
      },
      {
        path: "blog",
        loadComponent: () => import("./chunk-25AESXMX.js").then((m) => m.BlogComponent),
        children: [
          { path: "blog-grid", loadComponent: () => import("./chunk-WGJLZEHP.js").then((m) => m.BlogGridComponent) },
          { path: "blog-masonry", loadComponent: () => import("./chunk-WYOYNRO5.js").then((m) => m.BlogMasonryComponent) },
          { path: "blog-details-left-sidebar", loadComponent: () => import("./chunk-FRXB7BQ2.js").then((m) => m.BlogDetailsLeftSidebarComponent) },
          { path: "blog-details-right-sidebar", loadComponent: () => import("./chunk-HCNTEZ4P.js").then((m) => m.BlogDetailsRightSidebarComponent) },
          { path: "blog-2-grid", loadComponent: () => import("./chunk-PY7WO3IS.js").then((m) => m.Blog2GridComponent) },
          { path: "blog-3-grid", loadComponent: () => import("./chunk-FZZZBPGC.js").then((m) => m.Blog3GridComponent) },
          { path: "blog-carousal", loadComponent: () => import("./chunk-H7FZ56OY.js").then((m) => m.BlogCarousalComponent) },
          { path: "blog-left-sidebar", loadComponent: () => import("./chunk-BZKWSAFQ.js").then((m) => m.BlogLeftSidebarComponent) },
          { path: "blog-right-sidebar", loadComponent: () => import("./chunk-5PSPE4SL.js").then((m) => m.BlogRightSidebarComponent) },
          { path: "blog-details", loadComponent: () => import("./chunk-WPB6JR6W.js").then((m) => m.BlogDetailsComponent) }
        ]
      },
      {
        path: "student",
        loadComponent: () => import("./chunk-YQIW425G.js").then((m) => m.StudentComponent),
        canActivate: [layoutGuard],
        children: [
          { path: "student-dashboard", loadComponent: () => import("./chunk-ANVI5LMN.js").then((m) => m.StudentDashboardComponent) },
          { path: "student-profile", loadComponent: () => import("./chunk-MQW477DL.js").then((m) => m.StudentProfileComponent) },
          // RENOMMÉ : student-courses → mes-catalogues
          { path: "mes-catalogues", loadComponent: () => import("./chunk-6SR4TPA2.js").then((m) => m.MesCataloguesComponent) },
          { path: "mes-catalogues/:id", loadComponent: () => import("./chunk-2ZAA2NBO.js").then((m) => m.MesCataloguesDetailsComponent) },
          { path: "student-courses", redirectTo: "mes-catalogues", pathMatch: "full" },
          { path: "catalogue-detail/:id", loadComponent: () => import("./chunk-5K2LWDJE.js").then((m) => m.CatalogueDetailComponent) },
          // RENOMMÉ : mes-cours → mes-formations
          { path: "mes-formations", loadComponent: () => import("./chunk-V75HZWK7.js").then((m) => m.MesCoursComponent) },
          { path: "mes-cours", redirectTo: "mes-formations", pathMatch: "full" },
          { path: "student-tickets", loadComponent: () => import("./chunk-KGRZ2UXU.js").then((m) => m.StudentTicketsComponent) },
          { path: "students-session", loadComponent: () => import("./chunk-E6BLXREP.js").then((m) => m.StudentsSessionsComponent) },
          { path: "sessions-acceptees", loadComponent: () => import("./chunk-EJNXFSEM.js").then((m) => m.SessionsAccepteesComponent) },
          // RENOMMÉ : students-catalogue → student-demande-catalogue
          { path: "student-demande-catalogue", loadComponent: () => import("./chunk-QY26TOYQ.js").then((m) => m.StudentDemandeCatalogueComponent) },
          { path: "students-catalogue", redirectTo: "student-demande-catalogue", pathMatch: "full" },
          { path: "students-explorer", loadComponent: () => import("./chunk-SPRHQYSF.js").then((m) => m.ExplorerComponent) },
          // RENOMMÉ : students-parcours → mes-demandes-parcours
          { path: "mes-demandes-parcours", loadComponent: () => import("./chunk-NQ53DEMK.js").then((m) => m.StudentDemandeParcoursComponent) },
          { path: "students-parcours", redirectTo: "mes-demandes-parcours", pathMatch: "full" },
          // RENOMMÉ : parcours-assignes → mes-parcours-assignes
          // RENOMMÉ : parcours-assignes → mes-parcours-assignes
          { path: "mes-parcours", loadComponent: () => import("./chunk-TLNXX5Z5.js").then((m) => m.MesParcoursComponent) },
          { path: "parcours-assignes", redirectTo: "mes-parcours-assignes", pathMatch: "full" },
          { path: "mes-parcours", redirectTo: "mes-parcours-assignes", pathMatch: "full" },
          { path: "mes-parcours", redirectTo: "mes-parcours", pathMatch: "full" },
          // RENOMMÉ : parcours-assigne/:id → mes-parcours/:id
          { path: "mes-parcours/:id", loadComponent: () => import("./chunk-UB7A2C24.js").then((m) => m.ParcoursAssigneDetailComponent) },
          { path: "parcours-assigne/:id", redirectTo: "mes-parcours/:id", pathMatch: "full" },
          // Détails parcours (pour n'importe quel parcours depuis l'explorer)
          { path: "parcours-details/:id", loadComponent: () => import("./chunk-CLTBADPS.js").then((m) => m.ParcoursDetailsComponent) },
          { path: "student-sondage/:id", loadComponent: () => import("./chunk-DFXV353X.js").then((m) => m.StudentSondageComponent) },
          { path: "student-mes-sondages", loadComponent: () => import("./chunk-JYKC6KP3.js").then((m) => m.StudentMesSondagesComponent) },
          { path: "student-quiz", loadComponent: () => import("./chunk-237BYXEF.js").then((m) => m.StudentQuizComponent) },
          { path: "student-quiz-questions/:id", loadComponent: () => import("./chunk-KELJE4GY.js").then((m) => m.StudentQuizQuestionsComponent) },
          { path: "student-planning", loadComponent: () => import("./chunk-E2HZH3CA.js").then((m) => m.StudentPlanningComponent) },
          { path: "student-certificate", loadComponent: () => import("./chunk-KC6CEWWA.js").then((m) => m.StudentCertificateComponent) },
          { path: "student-demande", loadComponent: () => import("./chunk-UYOGYRSC.js").then((m) => m.StudentDemandeComponent) },
          { path: "mes-competences", loadComponent: () => import("./chunk-7BLYJJOS.js").then((m) => m.MesCompetencesComponent) },
          { path: "mes-competences-recommandees", loadComponent: () => import("./chunk-O3GK4PX7.js").then((m) => m.MesCompetencesRecommandeesComponent) },
          { path: "student-message", loadComponent: () => import("./chunk-NZFVOQLE.js").then((m) => m.StudentMessageComponent) },
          { path: "student-qa", loadComponent: () => import("./chunk-R7LP3DK3.js").then((m) => m.StudentQaComponent) },
          { path: "student-order-history", loadComponent: () => import("./chunk-MPPAJIQY.js").then((m) => m.StudentOrderHistoryComponent) },
          { path: "student-referral", loadComponent: () => import("./chunk-6WPB54AQ.js").then((m) => m.StudentReferralComponent) },
          { path: "student-reviews", loadComponent: () => import("./chunk-D2YUKXBF.js").then((m) => m.StudentReviewsComponent) },
          { path: "student-wishlist", loadComponent: () => import("./chunk-FZKKZODV.js").then((m) => m.StudentWishlistComponent) },
          { path: "ecart-competences", loadComponent: () => import("./chunk-MVVCT3UO.js").then((m) => m.EcartCompetencesComponent) },
          { path: "guide-utilisation", loadComponent: () => import("./chunk-IKJUJ7U5.js").then((m) => m.GuideUtilisationComponent) },
          { path: "tutoriels-video", loadComponent: () => import("./chunk-TNXOPL3X.js").then((m) => m.TutorielsVideoComponent) },
          { path: "annonces-maj", loadComponent: () => import("./chunk-NFJPQ5YW.js").then((m) => m.AnnoncesComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-BHJ6OOVY.js").then((m) => m.SettingsComponent),
            children: [
              { path: "student-linked-accounts", loadComponent: () => import("./chunk-YAPDLRKA.js").then((m) => m.StudentLinkedAccountsComponent) },
              { path: "student-change-password", loadComponent: () => import("./chunk-VKRWCKGJ.js").then((m) => m.StudentChangePasswordComponent) },
              { path: "student-settings", loadComponent: () => import("./chunk-5S7ACK4U.js").then((m) => m.StudentSettingsComponent) },
              { path: "student-notifications", loadComponent: () => import("./chunk-3RBN23DG.js").then((m) => m.StudentNotificationsComponent) },
              { path: "student-billing-address", loadComponent: () => import("./chunk-4FMYKS5E.js").then((m) => m.StudentBillingAddressComponent) },
              { path: "student-social-profile", loadComponent: () => import("./chunk-ZGHKXZMR.js").then((m) => m.StudentSocialProfileComponent) }
            ]
          }
        ]
      }
    ]
  },
  { path: "verify-certificate", loadComponent: () => import("./chunk-42CRHO4M.js").then((m) => m.VerifyCertificateComponent) },
  { path: "sondage/:token", loadComponent: () => import("./chunk-76ZZA2U7.js").then((m) => m.SondagePublicComponent) },
  { path: "under-construction", loadComponent: () => import("./chunk-OCTK5WPN.js").then((m) => m.UnderConstructionComponent) },
  { path: "coming-soon", loadComponent: () => import("./chunk-ZX6BWNZD.js").then((m) => m.ComingSoonComponent) },
  { path: "error-500", loadComponent: () => import("./chunk-Y4C2LH5G.js").then((m) => m.Error500Component) },
  { path: "error-404", loadComponent: () => import("./chunk-ZA3BZ3AM.js").then((m) => m.Error404Component) },
  {
    path: "**",
    redirectTo: "error-404",
    pathMatch: "full"
  }
];

export {
  routes
};
//# sourceMappingURL=chunk-MSZXW5Y7.js.map
