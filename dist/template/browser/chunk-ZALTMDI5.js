import {
  CommonService
} from "./chunk-IBELF3ZV.js";
import {
  require_aos
} from "./chunk-EOCJYYK5.js";
import {
  routes
} from "./chunk-DN5YN62E.js";
import {
  RouterLink
} from "./chunk-WU2IX7JC.js";
import {
  CommonModule
} from "./chunk-O72RKWZB.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-F67U43FE.js";
import {
  __toESM
} from "./chunk-4MWRP73S.js";

// src/app/features/layouts/footer/footer.component.ts
var Aos = __toESM(require_aos());

// src/app/features/layouts/footer/footer-top-container/footer-top-container.component.ts
var FooterTopContainerComponent = class _FooterTopContainerComponent {
  routes = routes;
  static \u0275fac = function FooterTopContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterTopContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterTopContainerComponent, selectors: [["app-footer-top-container"]], decls: 89, vars: 9, consts: [[1, "container"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo-white.png", "alt", "", 2, "max-height", "56px"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-5"], [1, "col-lg-4", "col-md-4"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], ["href", "javscript:void(0);"], [1, "col-lg-3"], [1, "footer-widget", "footer-contact"], [1, "footer-newsletter"], ["action", "javascript:void(0);"], [1, "subscribe-form"], [1, "isax", "isax-message-text"], ["type", "email", "placeholder", "Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-secondary", "btn-xl", "w-100"]], template: function FooterTopContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "D\xE9veloppez les comp\xE9tences qui font avancer votre entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "a", 7);
      \u0275\u0275element(10, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 9);
      \u0275\u0275element(12, "img", 10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 1)(15, "div", 12)(16, "div", 13)(17, "h5", 14);
      \u0275\u0275text(18, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "ul")(20, "li")(21, "a", 15);
      \u0275\u0275text(22, "Formation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li")(24, "a", 15);
      \u0275\u0275text(25, "Enroll Course");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 16);
      \u0275\u0275text(28, "Orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li")(30, "a", 15);
      \u0275\u0275text(31, "Payments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "li")(33, "a", 15);
      \u0275\u0275text(34, "Blogs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(35, "div", 12)(36, "div", 13)(37, "h5", 14);
      \u0275\u0275text(38, "About");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "ul")(40, "li")(41, "a", 15);
      \u0275\u0275text(42, "Categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "li")(44, "a", 15);
      \u0275\u0275text(45, "Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "li")(47, "a", 15);
      \u0275\u0275text(48, "About Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "a", 15);
      \u0275\u0275text(51, "Faq");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 15);
      \u0275\u0275text(54, "Contacts");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(55, "div", 12)(56, "div", 13)(57, "h5", 14);
      \u0275\u0275text(58, "Useful Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "ul")(60, "li")(61, "a", 9);
      \u0275\u0275text(62, "Our values");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li")(64, "a", 9);
      \u0275\u0275text(65, "Our advisory board");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "li")(67, "a", 9);
      \u0275\u0275text(68, "Our partners");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "li")(70, "a", 9);
      \u0275\u0275text(71, "Become a partner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "li")(73, "a", 9);
      \u0275\u0275text(74, "Work at Future Learn");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(75, "div", 17)(76, "div", 18)(77, "h5", 14);
      \u0275\u0275text(78, "Subscribe Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 19)(80, "p");
      \u0275\u0275text(81, "Sign up to get updates & news.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "form", 20)(83, "div", 21)(84, "span");
      \u0275\u0275element(85, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "input", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "button", 24);
      \u0275\u0275text(88, "Subscribe");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.addCourse);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.page_pricing_plan);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.aboutUs);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.page_faq);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.contactUs);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterTopContainerComponent, [{
    type: Component,
    args: [{ selector: "app-footer-top-container", imports: [CommonModule, RouterLink], template: '<div class="container">\r\n    <div class="row row-gap-4">\r\n        <div class="col-lg-4">\r\n            <div class="footer-about">\r\n                <div class="footer-logo">\r\n                    <img src="assets/img/logo-white.png" alt="" style="max-height:56px">\r\n                </div>\r\n                <p>D\xE9veloppez les comp\xE9tences qui font avancer votre entreprise</p>\r\n                <div class="d-flex align-items-center">\r\n                    <a href="javascript:void(0);" class="me-2"><img src="assets/img/icon/appstore.svg" alt=""></a>\r\n                    <a href="javascript:void(0);"><img src="assets/img/icon/googleplay.svg" alt=""></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="col-lg-5">\r\n            <div class="row row-gap-4">\r\n                <div class="col-lg-4 col-md-4">\r\n                    <div class="footer-widget footer-menu">\r\n                        <h5 class="footer-title">Support</h5>\r\n                        <ul>\r\n                            <li><a [routerLink]="routes.courseGrid">Formation</a></li>\r\n                            <li><a [routerLink]="routes.addCourse">Enroll Course</a></li>\r\n                            <li><a href="javscript:void(0);">Orders</a></li>\r\n                            <li><a [routerLink]="routes.page_pricing_plan">Payments</a></li>\r\n                            <li><a [routerLink]="routes.blog_grid">Blogs</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class="col-lg-4 col-md-4">\r\n                    <div class="footer-widget footer-menu">\r\n                        <h5 class="footer-title">About</h5>\r\n                        <ul>\r\n                            <li><a [routerLink]="routes.courseCategory">Categories</a></li>\r\n                            <li><a [routerLink]="routes.courseList">Courses</a></li>\r\n                            <li><a [routerLink]="routes.aboutUs">About Us</a></li>\r\n                            <li><a [routerLink]="routes.page_faq">Faq</a></li>\r\n                            <li><a [routerLink]="routes.contactUs">Contacts</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class="col-lg-4 col-md-4">\r\n                    <div class="footer-widget footer-menu">\r\n                        <h5 class="footer-title">Useful Links</h5>\r\n                        <ul>\r\n                            <li><a href="javascript:void(0);">Our values</a></li>\r\n                            <li><a href="javascript:void(0);">Our advisory board</a></li>\r\n                            <li><a href="javascript:void(0);">Our partners</a></li>\r\n                            <li><a href="javascript:void(0);">Become a partner</a></li>\r\n                            <li><a href="javascript:void(0);">Work at Future Learn</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>							\r\n        <div class="col-lg-3">\r\n            <div class="footer-widget footer-contact">\r\n                <h5 class="footer-title">Subscribe Newsletter</h5>\r\n                <div class="footer-newsletter">\r\n                    <p>Sign up to get updates & news.</p>							\r\n                    <form action="javascript:void(0);">\r\n                        <div class="subscribe-form">\r\n                            <span>\r\n                                <i class="isax isax-message-text"></i>\r\n                            </span>\r\n                            <input type="email" class="form-control" placeholder="Email Address">\r\n                        </div>\r\n                        <button type="submit" class="btn btn-secondary btn-xl w-100">Subscribe</button>		\r\n                    </form>	\r\n                </div>	\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterTopContainerComponent, { className: "FooterTopContainerComponent", filePath: "app/features/layouts/footer/footer-top-container/footer-top-container.component.ts", lineNumber: 12 });
})();

// src/app/features/layouts/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  common;
  base = "";
  routes = routes;
  constructor(common) {
    this.common = common;
    this.common.base.subscribe((res) => {
      this.base = res;
    });
  }
  ngOnInit() {
    Aos.init({
      duration: 1500,
      once: true
    });
  }
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)(\u0275\u0275directiveInject(CommonService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 29, vars: 0, consts: [[1, "footer-pyramide"], [1, "container"], [1, "footer-content", "text-center"], ["src", "assets/img/logo-white.png", "alt", "Pyramide", 1, "footer-logo"], [1, "footer-text"], [1, "footer-bottom-bar"], [1, "footer-bottom-inner"], [1, "footer-copyright"], [1, "footer-links"], ["href", "javascript:void(0);"], [1, "footer-socials"], ["href", "javascript:void(0);", "aria-label", "Twitter"], [1, "fa-brands", "fa-x-twitter"], ["href", "javascript:void(0);", "aria-label", "Facebook"], [1, "fa-brands", "fa-facebook-f"], ["href", "javascript:void(0);", "aria-label", "LinkedIn"], [1, "fa-brands", "fa-linkedin-in"], ["href", "javascript:void(0);", "aria-label", "TikTok"], [1, "fa-brands", "fa-tiktok"], ["href", "javascript:void(0);", "aria-label", "Instagram"], [1, "fa-brands", "fa-instagram"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275domElement(3, "img", 3);
      \u0275\u0275domElementStart(4, "p", 4);
      \u0275\u0275text(5, " La plateforme LMS d'excellence d\xE9di\xE9e \xE0 la formation, au suivi d'impact et \xE0 la transformation des entreprises sur le continent africain. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(6, "div", 5)(7, "div", 1)(8, "div", 6)(9, "span", 7);
      \u0275\u0275text(10, "\xA9 2024 Pyramide LMS. Tous droits r\xE9serv\xE9s.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "div", 8)(12, "a", 9);
      \u0275\u0275text(13, "CGU");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "a", 9);
      \u0275\u0275text(15, "Mentions l\xE9gales");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "a", 9);
      \u0275\u0275text(17, "Politique de confidentialit\xE9");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(18, "div", 10)(19, "a", 11);
      \u0275\u0275domElement(20, "i", 12);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "a", 13);
      \u0275\u0275domElement(22, "i", 14);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "a", 15);
      \u0275\u0275domElement(24, "i", 16);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "a", 17);
      \u0275\u0275domElement(26, "i", 18);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "a", 19);
      \u0275\u0275domElement(28, "i", 20);
      \u0275\u0275domElementEnd()()()()()();
    }
  }, dependencies: [CommonModule], styles: ["\n\n.footer-pyramide[_ngcontent-%COMP%] {\n  background-color: #006F78;\n  padding: 80px 0 0;\n}\n.footer-pyramide[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n  max-width: 450px;\n  margin: 0 auto;\n  padding-bottom: 60px;\n}\n.footer-pyramide[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  height: 48px;\n  margin-bottom: 24px;\n}\n.footer-pyramide[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 1.7;\n  margin-bottom: 0;\n}\n.footer-pyramide[_ngcontent-%COMP%]   .footer-bottom-bar[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.15);\n  padding: 20px 0;\n}\n.footer-pyramide[_ngcontent-%COMP%]   .footer-bottom-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n@media (max-width: 991px) {\n  .footer-pyramide[_ngcontent-%COMP%]   .footer-bottom-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.footer-pyramide[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.7);\n  white-space: nowrap;\n}\n.footer-pyramide[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.footer-pyramide[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.footer-pyramide[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.footer-pyramide[_ngcontent-%COMP%]   .footer-socials[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.footer-pyramide[_ngcontent-%COMP%]   .footer-socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 14px;\n  text-decoration: none;\n  transition: background 0.2s ease;\n}\n.footer-pyramide[_ngcontent-%COMP%]   .footer-socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [CommonModule, RouterLink, FooterTopContainerComponent], template: `<!-- Footer -->\r
<footer class="footer-pyramide">\r
  <div class="container">\r
    <div class="footer-content text-center">\r
      <img src="assets/img/logo-white.png" alt="Pyramide" class="footer-logo" />\r
      <p class="footer-text">\r
        La plateforme LMS d'excellence d&eacute;di&eacute;e &agrave; la formation, au\r
        suivi d'impact et &agrave; la transformation des entreprises sur le\r
        continent africain.\r
      </p>\r
    </div>\r
  </div>\r
  <div class="footer-bottom-bar">\r
    <div class="container">\r
      <div class="footer-bottom-inner">\r
        <span class="footer-copyright">&copy; 2024 Pyramide LMS. Tous droits r&eacute;serv&eacute;s.</span>\r
        <div class="footer-links">\r
          <a href="javascript:void(0);">CGU</a>\r
          <a href="javascript:void(0);">Mentions l&eacute;gales</a>\r
          <a href="javascript:void(0);">Politique de confidentialit&eacute;</a>\r
        </div>\r
        <div class="footer-socials">\r
          <a href="javascript:void(0);" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>\r
          <a href="javascript:void(0);" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>\r
          <a href="javascript:void(0);" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>\r
          <a href="javascript:void(0);" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>\r
          <a href="javascript:void(0);" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</footer>\r
<!-- /Footer -->\r
`, styles: ["/* src/app/features/layouts/footer/footer.component.scss */\n.footer-pyramide {\n  background-color: #006F78;\n  padding: 80px 0 0;\n}\n.footer-pyramide .footer-content {\n  max-width: 450px;\n  margin: 0 auto;\n  padding-bottom: 60px;\n}\n.footer-pyramide .footer-logo {\n  height: 48px;\n  margin-bottom: 24px;\n}\n.footer-pyramide .footer-text {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 1.7;\n  margin-bottom: 0;\n}\n.footer-pyramide .footer-bottom-bar {\n  border-top: 1px solid rgba(255, 255, 255, 0.15);\n  padding: 20px 0;\n}\n.footer-pyramide .footer-bottom-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n@media (max-width: 991px) {\n  .footer-pyramide .footer-bottom-inner {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.footer-pyramide .footer-copyright {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.7);\n  white-space: nowrap;\n}\n.footer-pyramide .footer-links {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.footer-pyramide .footer-links a {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.footer-pyramide .footer-links a:hover {\n  color: #fff;\n}\n.footer-pyramide .footer-socials {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.footer-pyramide .footer-socials a {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 14px;\n  text-decoration: none;\n  transition: background 0.2s ease;\n}\n.footer-pyramide .footer-socials a:hover {\n  background: rgba(255, 255, 255, 0.25);\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], () => [{ type: CommonService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "app/features/layouts/footer/footer.component.ts", lineNumber: 15 });
})();

export {
  FooterComponent
};
//# sourceMappingURL=chunk-ZALTMDI5.js.map
