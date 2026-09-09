import {
  FormationService
} from "./chunk-JOKQFHBP.js";
import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-GE23GOQB.js";
import {
  DomSanitizer
} from "./chunk-IN7OGW6T.js";
import "./chunk-YONGDJMG.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
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
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-F67U43FE.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/video-ressources/video-ressources.component.ts
function VideoRessourcesComponent_div_0_option_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    \u0275\u0275property("value", f_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r3);
  }
}
function VideoRessourcesComponent_div_0_ng_container_113_div_6_div_1_iframe_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 102);
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.getEmbedUrl(r_r5), \u0275\u0275sanitizeResourceUrl);
  }
}
function VideoRessourcesComponent_div_0_ng_container_113_div_6_div_1_video_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 103);
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.getVideoFileUrl(r_r5), \u0275\u0275sanitizeUrl);
  }
}
function VideoRessourcesComponent_div_0_ng_container_113_div_6_div_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 104);
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("color", ctx_r1.getIconColor(r_r5));
  }
}
function VideoRessourcesComponent_div_0_ng_container_113_div_6_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 105);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getDuration(r_r5));
  }
}
function VideoRessourcesComponent_div_0_ng_container_113_div_6_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", ctx_r1.getDuration(r_r5));
  }
}
function VideoRessourcesComponent_div_0_ng_container_113_div_6_div_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5.niveau);
  }
}
function VideoRessourcesComponent_div_0_ng_container_113_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85);
    \u0275\u0275template(2, VideoRessourcesComponent_div_0_ng_container_113_div_6_div_1_iframe_2_Template, 1, 1, "iframe", 86)(3, VideoRessourcesComponent_div_0_ng_container_113_div_6_div_1_video_3_Template, 1, 1, "video", 87)(4, VideoRessourcesComponent_div_0_ng_container_113_div_6_div_1_i_4_Template, 1, 2, "i", 88)(5, VideoRessourcesComponent_div_0_ng_container_113_div_6_div_1_span_5_Template, 2, 1, "span", 89);
    \u0275\u0275elementStart(6, "span", 90);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 91)(9, "div", 92);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 93);
    \u0275\u0275element(12, "i", 12);
    \u0275\u0275text(13);
    \u0275\u0275template(14, VideoRessourcesComponent_div_0_ng_container_113_div_6_div_1_span_14_Template, 2, 1, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 94)(16, "span", 95);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, VideoRessourcesComponent_div_0_ng_container_113_div_6_div_1_span_18_Template, 2, 1, "span", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 97)(20, "div", 98);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_ng_container_113_div_6_div_1_Template_div_click_20_listener() {
      const r_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openRessource(r_r5));
    });
    \u0275\u0275element(21, "i", 99);
    \u0275\u0275text(22, " Ouvrir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 100);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_ng_container_113_div_6_div_1_Template_div_click_23_listener() {
      const r_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editFormation(r_r5));
    });
    \u0275\u0275element(24, "i", 101);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("card-unused", !ctx_r1.isUsed(r_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getThumbClass(r_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEmbedVideo(r_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFileVideo(r_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEmbedVideo(r_r5) && !ctx_r1.isFileVideo(r_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getDuration(r_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.formationTitre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r5.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTypeLabel(r_r5), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getDuration(r_r5));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r5.moduleTitre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r5.niveau && r_r5.niveau !== "Non d\xE9fini");
  }
}
function VideoRessourcesComponent_div_0_ng_container_113_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275template(1, VideoRessourcesComponent_div_0_ng_container_113_div_6_div_1_Template, 25, 13, "div", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.videos);
  }
}
function VideoRessourcesComponent_div_0_ng_container_113_div_7_div_1_iframe_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 120);
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.getEmbedUrl(r_r7), \u0275\u0275sanitizeResourceUrl);
  }
}
function VideoRessourcesComponent_div_0_ng_container_113_div_7_div_1_video_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 121);
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.getVideoFileUrl(r_r7), \u0275\u0275sanitizeUrl);
  }
}
function VideoRessourcesComponent_div_0_ng_container_113_div_7_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("background", ctx_r1.getListIconBg(r_r7))("color", ctx_r1.getListIconColor(r_r7));
  }
}
function VideoRessourcesComponent_div_0_ng_container_113_div_7_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getDuration(r_r7));
  }
}
function VideoRessourcesComponent_div_0_ng_container_113_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107)(1, "div", 108);
    \u0275\u0275template(2, VideoRessourcesComponent_div_0_ng_container_113_div_7_div_1_iframe_2_Template, 1, 1, "iframe", 109)(3, VideoRessourcesComponent_div_0_ng_container_113_div_7_div_1_video_3_Template, 1, 1, "video", 110)(4, VideoRessourcesComponent_div_0_ng_container_113_div_7_div_1_div_4_Template, 2, 4, "div", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 112)(6, "div", 113);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 114);
    \u0275\u0275element(9, "i", 115);
    \u0275\u0275text(10);
    \u0275\u0275template(11, VideoRessourcesComponent_div_0_ng_container_113_div_7_div_1_span_11_Template, 3, 1, "span", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 116);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 117)(15, "button", 118);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_ng_container_113_div_7_div_1_Template_button_click_15_listener() {
      const r_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openRessource(r_r7));
    });
    \u0275\u0275element(16, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 119);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_ng_container_113_div_7_div_1_Template_button_click_17_listener() {
      const r_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editFormation(r_r7));
    });
    \u0275\u0275element(18, "i", 101);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("item-unused", !ctx_r1.isUsed(r_r7));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isEmbedVideo(r_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFileVideo(r_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEmbedVideo(r_r7) && !ctx_r1.isFileVideo(r_r7));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r7.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", r_r7.formationTitre, " \xB7 ", r_r7.moduleTitre, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getDuration(r_r7));
    \u0275\u0275advance();
    \u0275\u0275classProp("lb-used", ctx_r1.isUsed(r_r7))("lb-unused", !ctx_r1.isUsed(r_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isUsed(r_r7) ? "Publi\xE9" : "Brouillon", " ");
  }
}
function VideoRessourcesComponent_div_0_ng_container_113_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, VideoRessourcesComponent_div_0_ng_container_113_div_7_div_1_Template, 19, 14, "div", 106);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.videos);
  }
}
function VideoRessourcesComponent_div_0_ng_container_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 78)(2, "span", 79);
    \u0275\u0275text(3, "Vid\xE9os");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 80);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, VideoRessourcesComponent_div_0_ng_container_113_div_6_Template, 2, 1, "div", 81)(7, VideoRessourcesComponent_div_0_ng_container_113_div_7_Template, 2, 1, "div", 52);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.videos.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewMode === "grid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewMode === "list");
  }
}
function VideoRessourcesComponent_div_0_ng_container_114_div_6_div_1_iframe_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 131);
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.getDocumentSafeUrl(r_r9), \u0275\u0275sanitizeResourceUrl);
  }
}
function VideoRessourcesComponent_div_0_ng_container_114_div_6_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 132);
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("alt", \u0275\u0275interpolate(r_r9.titre))("src", ctx_r1.getDocumentUrl(r_r9), \u0275\u0275sanitizeUrl);
  }
}
function VideoRessourcesComponent_div_0_ng_container_114_div_6_div_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 133);
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("color", ctx_r1.getIconColor(r_r9));
    \u0275\u0275property("ngClass", ctx_r1.getTypeIconIsax(r_r9));
  }
}
function VideoRessourcesComponent_div_0_ng_container_114_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 124);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_ng_container_114_div_6_div_1_Template_div_click_1_listener() {
      const r_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openRessource(r_r9));
    });
    \u0275\u0275template(2, VideoRessourcesComponent_div_0_ng_container_114_div_6_div_1_iframe_2_Template, 1, 1, "iframe", 125)(3, VideoRessourcesComponent_div_0_ng_container_114_div_6_div_1_img_3_Template, 1, 3, "img", 126)(4, VideoRessourcesComponent_div_0_ng_container_114_div_6_div_1_i_4_Template, 1, 3, "i", 127);
    \u0275\u0275elementStart(5, "span", 90);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 91)(9, "div", 92);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 93);
    \u0275\u0275element(12, "i", 129);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 94)(15, "span", 95);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 97)(18, "div", 98);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_ng_container_114_div_6_div_1_Template_div_click_18_listener() {
      const r_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openRessource(r_r9));
    });
    \u0275\u0275element(19, "i", 130);
    \u0275\u0275text(20, " Voir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 100);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_ng_container_114_div_6_div_1_Template_div_click_21_listener() {
      const r_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editFormation(r_r9));
    });
    \u0275\u0275element(22, "i", 101);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("card-unused", !ctx_r1.isUsed(r_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getThumbClass(r_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPdfFile(r_r9) && ctx_r1.getDocumentSafeUrl(r_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImageFile(r_r9) && ctx_r1.getDocumentUrl(r_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (!ctx_r1.isPdfFile(r_r9) || !ctx_r1.getDocumentSafeUrl(r_r9)) && (!ctx_r1.isImageFile(r_r9) || !ctx_r1.getDocumentUrl(r_r9)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.formationTitre);
    \u0275\u0275advance();
    \u0275\u0275classProp("ms-used", ctx_r1.isUsed(r_r9))("ms-unused", !ctx_r1.isUsed(r_r9));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r9.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getTypeIconIsax(r_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTypeLabel(r_r9), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r9.moduleTitre);
  }
}
function VideoRessourcesComponent_div_0_ng_container_114_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275template(1, VideoRessourcesComponent_div_0_ng_container_114_div_6_div_1_Template, 23, 15, "div", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.documents);
  }
}
function VideoRessourcesComponent_div_0_ng_container_114_div_7_div_1_div_1_iframe_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 140);
  }
  if (rf & 2) {
    const r_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.getDocumentSafeUrl(r_r11), \u0275\u0275sanitizeResourceUrl);
  }
}
function VideoRessourcesComponent_div_0_ng_container_114_div_7_div_1_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 141);
  }
  if (rf & 2) {
    const r_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("alt", \u0275\u0275interpolate(r_r11.titre))("src", ctx_r1.getDocumentUrl(r_r11), \u0275\u0275sanitizeUrl);
  }
}
function VideoRessourcesComponent_div_0_ng_container_114_div_7_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275template(1, VideoRessourcesComponent_div_0_ng_container_114_div_7_div_1_div_1_iframe_1_Template, 1, 1, "iframe", 138)(2, VideoRessourcesComponent_div_0_ng_container_114_div_7_div_1_div_1_img_2_Template, 1, 3, "img", 139);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPdfFile(r_r11) && ctx_r1.getDocumentSafeUrl(r_r11));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImageFile(r_r11) && ctx_r1.getDocumentUrl(r_r11));
  }
}
function VideoRessourcesComponent_div_0_ng_container_114_div_7_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275element(1, "i", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("background", ctx_r1.getListIconBg(r_r11))("color", ctx_r1.getListIconColor(r_r11));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getTypeIconIsax(r_r11));
  }
}
function VideoRessourcesComponent_div_0_ng_container_114_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_ng_container_114_div_7_div_1_Template_div_click_0_listener() {
      const r_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openRessource(r_r11));
    });
    \u0275\u0275template(1, VideoRessourcesComponent_div_0_ng_container_114_div_7_div_1_div_1_Template, 3, 2, "div", 136)(2, VideoRessourcesComponent_div_0_ng_container_114_div_7_div_1_div_2_Template, 2, 5, "div", 111);
    \u0275\u0275elementStart(3, "div", 112)(4, "div", 113);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 114);
    \u0275\u0275element(7, "i", 115);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 116);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 117)(12, "button", 137);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_ng_container_114_div_7_div_1_Template_button_click_12_listener($event) {
      const r_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.openRessource(r_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(13, "i", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 119);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_ng_container_114_div_7_div_1_Template_button_click_14_listener($event) {
      const r_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.editFormation(r_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(15, "i", 101);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("item-unused", !ctx_r1.isUsed(r_r11));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPdfFile(r_r11) || ctx_r1.isImageFile(r_r11));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPdfFile(r_r11) && !ctx_r1.isImageFile(r_r11));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r11.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", r_r11.formationTitre, " \xB7 ", r_r11.moduleTitre, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("lb-used", ctx_r1.isUsed(r_r11))("lb-unused", !ctx_r1.isUsed(r_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isUsed(r_r11) ? "Publi\xE9" : "Brouillon", " ");
  }
}
function VideoRessourcesComponent_div_0_ng_container_114_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, VideoRessourcesComponent_div_0_ng_container_114_div_7_div_1_Template, 16, 12, "div", 134);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.documents);
  }
}
function VideoRessourcesComponent_div_0_ng_container_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 78)(2, "span", 79);
    \u0275\u0275text(3, "Documents & PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 123);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, VideoRessourcesComponent_div_0_ng_container_114_div_6_Template, 2, 1, "div", 81)(7, VideoRessourcesComponent_div_0_ng_container_114_div_7_Template, 2, 1, "div", 52);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("margin-top", ctx_r1.videos.length > 0 ? 16 : 0, "px");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.documents.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewMode === "grid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewMode === "list");
  }
}
function VideoRessourcesComponent_div_0_ng_container_115_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_ng_container_115_div_7_Template_div_click_0_listener() {
      const r_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openRessource(r_r13));
    });
    \u0275\u0275elementStart(1, "div", 144);
    \u0275\u0275element(2, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 112)(4, "div", 113);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 114);
    \u0275\u0275element(7, "i", 115);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 145);
    \u0275\u0275text(10, "Lien");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 117)(12, "button", 118);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_ng_container_115_div_7_Template_button_click_12_listener($event) {
      const r_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.openRessource(r_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(13, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 119);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_ng_container_115_div_7_Template_button_click_14_listener($event) {
      const r_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.editFormation(r_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(15, "i", 101);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r13 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r13.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", r_r13.formationTitre, " \xB7 ", r_r13.moduleTitre, " ");
  }
}
function VideoRessourcesComponent_div_0_ng_container_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 78)(2, "span", 79);
    \u0275\u0275text(3, "Liens externes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 142);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275template(7, VideoRessourcesComponent_div_0_ng_container_115_div_7_Template, 16, 3, "div", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("margin-top", 16, "px");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.liens.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.liens);
  }
}
function VideoRessourcesComponent_div_0_div_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275element(1, "i", 147);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucune ressource trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Ajoutez des contenus \xE0 vos formations ou ajustez vos filtres");
    \u0275\u0275elementEnd()();
  }
}
function VideoRessourcesComponent_div_0_div_156_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 148)(1, "span", 149);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 150)(4, "div", 151);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 152);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r15 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r14.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.getTypeLabel(r_r14), " \xB7 ", r_r14.formationTitre);
  }
}
function VideoRessourcesComponent_div_0_div_163_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_div_163_Template_div_click_0_listener() {
      const r_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRessource(r_r17));
    });
    \u0275\u0275elementStart(1, "div", 154);
    \u0275\u0275element(2, "i", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 155)(4, "div", 156);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 157);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getListIconBg(r_r17))("color", ctx_r1.getListIconColor(r_r17));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getTypeIconIsax(r_r17));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r17.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r17.formationTitre);
  }
}
function VideoRessourcesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275element(3, "i", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6)(5, "div", 7);
    \u0275\u0275text(6, "Vid\xE9os & Ressources \u2014 Ma biblioth\xE8que");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275text(8, "Tous vos contenus p\xE9dagogiques en un seul endroit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "div", 11);
    \u0275\u0275element(12, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "div", 13);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 14);
    \u0275\u0275text(17, "Vid\xE9os");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 10)(19, "div", 15);
    \u0275\u0275element(20, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "div", 13);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 14);
    \u0275\u0275text(25, "Documents");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 10)(27, "div", 17);
    \u0275\u0275element(28, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "div", 13);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 14);
    \u0275\u0275text(33, "PDF");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 10)(35, "div", 19);
    \u0275\u0275element(36, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div")(38, "div", 13);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 14);
    \u0275\u0275text(41, "Liens externes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 10)(43, "div", 21);
    \u0275\u0275element(44, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div")(46, "div", 13);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 14);
    \u0275\u0275text(49, "Stockage utilis\xE9");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 23)(51, "div", 24);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_Template_div_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("all"));
    });
    \u0275\u0275element(52, "i", 25);
    \u0275\u0275text(53, " Tout ");
    \u0275\u0275elementStart(54, "span", 26);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 24);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_Template_div_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("videos"));
    });
    \u0275\u0275element(57, "i", 12);
    \u0275\u0275text(58, " Vid\xE9os ");
    \u0275\u0275elementStart(59, "span", 26);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 24);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_Template_div_click_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("docs"));
    });
    \u0275\u0275element(62, "i", 16);
    \u0275\u0275text(63, " Documents ");
    \u0275\u0275elementStart(64, "span", 27);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 24);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_Template_div_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("links"));
    });
    \u0275\u0275element(67, "i", 20);
    \u0275\u0275text(68, " Liens ");
    \u0275\u0275elementStart(69, "span", 28);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 24);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_Template_div_click_71_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("unused"));
    });
    \u0275\u0275element(72, "i", 29);
    \u0275\u0275text(73, " Non utilis\xE9s ");
    \u0275\u0275elementStart(74, "span", 26);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 30)(77, "div", 31)(78, "div", 32)(79, "div", 33)(80, "div", 34);
    \u0275\u0275element(81, "i", 35);
    \u0275\u0275elementStart(82, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function VideoRessourcesComponent_div_0_Template_input_ngModelChange_82_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function VideoRessourcesComponent_div_0_Template_input_input_82_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function VideoRessourcesComponent_div_0_Template_select_ngModelChange_83_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterType, $event) || (ctx_r1.filterType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function VideoRessourcesComponent_div_0_Template_select_change_83_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementStart(84, "option", 38);
    \u0275\u0275text(85, "Tous types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "option", 39);
    \u0275\u0275text(87, "Vid\xE9o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "option", 40);
    \u0275\u0275text(89, "PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "option", 41);
    \u0275\u0275text(91, "Document");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "option", 42);
    \u0275\u0275text(93, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "option", 43);
    \u0275\u0275text(95, "Fichier");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function VideoRessourcesComponent_div_0_Template_select_ngModelChange_96_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterFormation, $event) || (ctx_r1.filterFormation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function VideoRessourcesComponent_div_0_Template_select_change_96_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementStart(97, "option", 38);
    \u0275\u0275text(98, "Toutes formations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(99, VideoRessourcesComponent_div_0_option_99_Template, 2, 2, "option", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function VideoRessourcesComponent_div_0_Template_select_ngModelChange_100_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sortBy, $event) || (ctx_r1.sortBy = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function VideoRessourcesComponent_div_0_Template_select_change_100_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementStart(101, "option", 45);
    \u0275\u0275text(102, "Plus r\xE9cents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "option", 46);
    \u0275\u0275text(104, "Plus anciens");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "option", 47);
    \u0275\u0275text(106, "Alphab\xE9tique");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(107, "div", 48);
    \u0275\u0275elementStart(108, "div", 49)(109, "button", 50);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_Template_button_click_109_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setView("grid"));
    });
    \u0275\u0275element(110, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "button", 50);
    \u0275\u0275listener("click", function VideoRessourcesComponent_div_0_Template_button_click_111_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setView("list"));
    });
    \u0275\u0275element(112, "i", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(113, VideoRessourcesComponent_div_0_ng_container_113_Template, 8, 3, "ng-container", 52)(114, VideoRessourcesComponent_div_0_ng_container_114_Template, 8, 5, "ng-container", 52)(115, VideoRessourcesComponent_div_0_ng_container_115_Template, 8, 4, "ng-container", 52)(116, VideoRessourcesComponent_div_0_div_116_Template, 6, 0, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "div", 54)(118, "div", 55)(119, "div", 56);
    \u0275\u0275element(120, "i", 22);
    \u0275\u0275elementStart(121, "span", 57);
    \u0275\u0275text(122, "Stockage utilis\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 58)(124, "div", 59)(125, "span", 60);
    \u0275\u0275text(126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "span", 61);
    \u0275\u0275text(128, "10 Go max");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 62);
    \u0275\u0275element(130, "div", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "div", 64)(132, "div", 65);
    \u0275\u0275element(133, "div", 66);
    \u0275\u0275elementStart(134, "span", 67);
    \u0275\u0275text(135, "Vid\xE9os");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "span", 68);
    \u0275\u0275text(137);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "div", 65);
    \u0275\u0275element(139, "div", 69);
    \u0275\u0275elementStart(140, "span", 67);
    \u0275\u0275text(141, "PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "span", 68);
    \u0275\u0275text(143);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "div", 65);
    \u0275\u0275element(145, "div", 70);
    \u0275\u0275elementStart(146, "span", 67);
    \u0275\u0275text(147, "Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "span", 68);
    \u0275\u0275text(149);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(150, "div", 55)(151, "div", 56);
    \u0275\u0275element(152, "i", 71);
    \u0275\u0275elementStart(153, "span", 57);
    \u0275\u0275text(154, "Ressources principales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(155, "div", 72);
    \u0275\u0275template(156, VideoRessourcesComponent_div_0_div_156_Template, 8, 4, "div", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(157, "div", 55)(158, "div", 56);
    \u0275\u0275element(159, "i", 74);
    \u0275\u0275elementStart(160, "span", 57);
    \u0275\u0275text(161, "Ajout\xE9s r\xE9cemment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(162, "div", 75);
    \u0275\u0275template(163, VideoRessourcesComponent_div_0_div_163_Template, 8, 7, "div", 76);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r1.stats.videos);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.documents);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.pdf);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.liens);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.stockage);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("on", ctx_r1.activeTab === "all");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.totalCount);
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.activeTab === "videos");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.stats.videos);
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.activeTab === "docs");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.stats.documents + ctx_r1.stats.pdf);
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.activeTab === "links");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.stats.liens);
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.activeTab === "unused");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.unusedCount);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterType);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterFormation);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.formationNames);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sortBy);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("on", ctx_r1.viewMode === "grid");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("on", ctx_r1.viewMode === "list");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.videos.length > 0 && (ctx_r1.activeTab === "all" || ctx_r1.activeTab === "videos"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.documents.length > 0 && (ctx_r1.activeTab === "all" || ctx_r1.activeTab === "docs"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.liens.length > 0 && (ctx_r1.activeTab === "all" || ctx_r1.activeTab === "links"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredRessources.length === 0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.stockage, " utilis\xE9s");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r1.getStoragePercent(), "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.videos, " fichiers");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.pdf, " fichiers");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.documents, " fichiers");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.topRessources);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.recentRessources);
  }
}
function VideoRessourcesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158);
    \u0275\u0275element(1, "div", 159);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement de vos ressources...");
    \u0275\u0275elementEnd()();
  }
}
var VideoRessourcesComponent = class _VideoRessourcesComponent {
  formationService;
  sanitizer;
  formations = [];
  allRessources = [];
  filteredRessources = [];
  videos = [];
  documents = [];
  liens = [];
  activeTab = "all";
  viewMode = "grid";
  searchQuery = "";
  filterType = "";
  filterFormation = "";
  sortBy = "recent";
  loading = true;
  stats = {
    videos: 0,
    documents: 0,
    pdf: 0,
    liens: 0,
    stockage: "0"
  };
  formationNames = [];
  embedCache = /* @__PURE__ */ new Map();
  storageBase = environment.apiUrl.replace("/api", "");
  constructor(formationService, sanitizer) {
    this.formationService = formationService;
    this.sanitizer = sanitizer;
  }
  ngOnInit() {
    this.loadRessources();
  }
  loadRessources() {
    this.loading = true;
    this.formationService.getFormationsformateur().subscribe({
      next: (res) => {
        if (res.status && res.formations) {
          this.formations = res.formations;
          this.extractRessources();
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  extractRessources() {
    this.allRessources = [];
    const formationNamesSet = /* @__PURE__ */ new Set();
    for (const formation of this.formations) {
      formationNamesSet.add(formation.titre);
      if (formation.modules) {
        for (const mod of formation.modules) {
          if (mod.sections) {
            for (const section of mod.sections) {
              if (["video", "pdf", "ressource", "image", "fichier", "exercice"].includes(section.type)) {
                this.allRessources.push({
                  id: section.id,
                  titre: section.titre,
                  type: section.type,
                  contenu: section.contenu,
                  ressources: section.ressources,
                  metadata: section.metadata,
                  duree_estimee: section.duree_estimee,
                  statut: formation.est_publie ? "publie" : section.statut || "brouillon",
                  ordre: section.ordre,
                  formationTitre: formation.titre,
                  formationId: formation.id,
                  moduleTitre: mod.titre,
                  moduleId: mod.id,
                  niveau: formation.niveau || "Non d\xE9fini"
                });
              }
            }
          }
        }
      }
    }
    this.formationNames = Array.from(formationNamesSet);
    this.computeStats();
    this.applyFilters();
  }
  computeStats() {
    this.stats.videos = this.allRessources.filter((r) => r.type === "video").length;
    this.stats.documents = this.allRessources.filter((r) => ["ressource", "image", "fichier", "exercice"].includes(r.type)).length;
    this.stats.pdf = this.allRessources.filter((r) => r.type === "pdf" || this.isPdfFile(r)).length;
    this.stats.liens = this.allRessources.filter((r) => this.isLien(r)).length;
    const totalSections = this.allRessources.length;
    const estimatedMo = totalSections * 50;
    if (estimatedMo >= 1e3) {
      this.stats.stockage = (estimatedMo / 1e3).toFixed(1) + " Go";
    } else {
      this.stats.stockage = estimatedMo + " Mo";
    }
  }
  applyFilters() {
    let filtered = [...this.allRessources];
    if (this.activeTab === "videos") {
      filtered = filtered.filter((r) => r.type === "video");
    } else if (this.activeTab === "docs") {
      filtered = filtered.filter((r) => ["pdf", "ressource", "image", "fichier", "exercice"].includes(r.type));
    } else if (this.activeTab === "links") {
      filtered = filtered.filter((r) => this.isLien(r));
    } else if (this.activeTab === "unused") {
      filtered = filtered.filter((r) => r.statut === "brouillon");
    }
    if (this.filterType) {
      filtered = filtered.filter((r) => r.type === this.filterType);
    }
    if (this.filterFormation) {
      filtered = filtered.filter((r) => r.formationTitre === this.filterFormation);
    }
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter((r) => r.titre.toLowerCase().includes(q) || r.formationTitre.toLowerCase().includes(q) || r.moduleTitre.toLowerCase().includes(q));
    }
    if (this.sortBy === "recent") {
      filtered.sort((a, b) => b.id - a.id);
    } else if (this.sortBy === "ancien") {
      filtered.sort((a, b) => a.id - b.id);
    } else if (this.sortBy === "alpha") {
      filtered.sort((a, b) => a.titre.localeCompare(b.titre));
    }
    this.filteredRessources = filtered;
    this.videos = filtered.filter((r) => r.type === "video");
    this.documents = filtered.filter((r) => ["pdf", "ressource", "image", "fichier", "exercice"].includes(r.type));
    this.liens = filtered.filter((r) => this.isLien(r));
  }
  switchTab(tab) {
    this.activeTab = tab;
    this.applyFilters();
  }
  setView(mode) {
    this.viewMode = mode;
  }
  onSearch() {
    this.applyFilters();
  }
  onFilterChange() {
    this.applyFilters();
  }
  isLien(r) {
    if (r.contenu && (r.contenu.startsWith("http://") || r.contenu.startsWith("https://"))) {
      return true;
    }
    return r.type === "ressource" && !!r.contenu && r.contenu.includes("://");
  }
  isVideo(r) {
    return r.type === "video";
  }
  isPdf(r) {
    return r.type === "pdf";
  }
  getTypeIcon(r) {
    if (this.isPdfFile(r))
      return "isax-document-copy";
    if (this.isImageFile(r))
      return "isax-gallery";
    switch (r.type) {
      case "video":
        return "isax-video-circle";
      case "pdf":
        return "isax-document-copy";
      case "image":
        return "isax-gallery";
      case "fichier":
        return "isax-document-text";
      case "exercice":
        return "isax-edit-2";
      case "ressource":
        return this.isLien(r) ? "isax-link-21" : "isax-document-text";
      default:
        return "isax-document";
    }
  }
  getTypeIconIsax(r) {
    return this.getTypeIcon(r);
  }
  openRessource(r) {
    const src = this.extractFirstUrl(r.ressources) || r.contenu || "";
    const url = this.resolveContentUrl(src);
    if (url) {
      window.open(url, "_blank");
    }
  }
  resolveContentUrl(content) {
    if (!content)
      return null;
    if (content.startsWith("http://") || content.startsWith("https://")) {
      return content;
    }
    return `${this.storageBase}/storage/${content}`;
  }
  getVideoSource(r) {
    return this.extractFirstUrl(r.ressources) || r.contenu || "";
  }
  extractFirstUrl(res) {
    if (!res)
      return "";
    if (typeof res === "string")
      return res;
    if (Array.isArray(res) && res.length > 0) {
      const first = res[0];
      if (typeof first === "string")
        return first;
      if (Array.isArray(first) && first.length > 0)
        return first[0];
    }
    return "";
  }
  getEmbedUrl(r) {
    if (this.embedCache.has(r.id))
      return this.embedCache.get(r.id);
    const url = this.getVideoSource(r);
    const embed = this.toEmbedUrl(url);
    const safe = embed ? this.sanitizer.bypassSecurityTrustResourceUrl(embed) : null;
    this.embedCache.set(r.id, safe);
    return safe;
  }
  getVideoFileUrl(r) {
    const url = this.getVideoSource(r);
    if (!url)
      return null;
    if (this.toEmbedUrl(url))
      return null;
    if (url.startsWith("http://") || url.startsWith("https://"))
      return url;
    return `${this.storageBase}/storage/${url}`;
  }
  isEmbedVideo(r) {
    return !!this.toEmbedUrl(this.getVideoSource(r));
  }
  isFileVideo(r) {
    const src = this.getVideoSource(r);
    return r.type === "video" && !this.isEmbedVideo(r) && !!src;
  }
  isPdfFile(r) {
    if (r.type === "pdf")
      return true;
    const url = this.extractFirstUrl(r.ressources);
    return !!url && url.toLowerCase().endsWith(".pdf");
  }
  isImageFile(r) {
    if (r.type === "image")
      return true;
    const url = this.extractFirstUrl(r.ressources);
    if (!url)
      return false;
    return /\.(jpe?g|png|gif|webp|svg|bmp)$/i.test(url);
  }
  getDocumentUrl(r) {
    const src = this.extractFirstUrl(r.ressources) || r.contenu || "";
    return this.resolveContentUrl(src);
  }
  getDocumentSafeUrl(r) {
    if (this.embedCache.has(r.id))
      return this.embedCache.get(r.id);
    const url = this.getDocumentUrl(r);
    const safe = url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
    this.embedCache.set(r.id, safe);
    return safe;
  }
  toEmbedUrl(url) {
    if (!url)
      return null;
    let match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
    if (match)
      return `https://www.youtube.com/embed/${match[1]}`;
    match = url.match(/vimeo\.com\/(\d+)/);
    if (match)
      return `https://player.vimeo.com/video/${match[1]}`;
    match = url.match(/dailymotion\.com\/video\/([\w]+)/);
    if (match)
      return `https://www.dailymotion.com/embed/video/${match[1]}`;
    if (url.includes("/embed/") || url.includes("player.vimeo.com"))
      return url;
    return null;
  }
  editFormation(r) {
    window.open("/courses/instructor-course-edit/" + r.formationId, "_blank");
  }
  getTypeLabel(r) {
    if (this.isPdfFile(r))
      return "PDF";
    if (this.isImageFile(r))
      return "Image";
    switch (r.type) {
      case "video":
        return "Vid\xE9o";
      case "pdf":
        return "PDF";
      case "image":
        return "Image";
      case "fichier":
        return "Document";
      case "exercice":
        return "Exercice";
      case "ressource":
        return this.isLien(r) ? "Lien" : "Document";
      default:
        return "Fichier";
    }
  }
  getThumbClass(r) {
    if (this.isPdfFile(r))
      return "mt-pdf";
    if (this.isImageFile(r))
      return "mt-img";
    switch (r.type) {
      case "video":
        return "mt-video";
      case "pdf":
        return "mt-pdf";
      case "image":
        return "mt-img";
      case "fichier":
        return "mt-doc";
      case "exercice":
        return "mt-doc";
      case "ressource":
        return this.isLien(r) ? "mt-link" : "mt-doc";
      default:
        return "mt-doc";
    }
  }
  getIconColor(r) {
    if (this.isPdfFile(r))
      return "#F0A8A8";
    if (this.isImageFile(r))
      return "#A8F0C8";
    switch (r.type) {
      case "video":
        return "#F0CFA8";
      case "pdf":
        return "#F0A8A8";
      case "image":
        return "#A8F0C8";
      case "ressource":
        return this.isLien(r) ? "#C8A8F0" : "#A8C8F0";
      default:
        return "#A8C8F0";
    }
  }
  getListIconBg(r) {
    if (this.isPdfFile(r))
      return "#FCEBEB";
    if (this.isImageFile(r))
      return "#EAF3DE";
    switch (r.type) {
      case "video":
        return "#FAEEDA";
      case "pdf":
        return "#FCEBEB";
      case "image":
        return "#EAF3DE";
      case "ressource":
        return this.isLien(r) ? "#EEEDFE" : "#E6F1FB";
      default:
        return "#E6F1FB";
    }
  }
  getListIconColor(r) {
    if (this.isPdfFile(r))
      return "#A32D2D";
    if (this.isImageFile(r))
      return "#3B6D11";
    switch (r.type) {
      case "video":
        return "#854F0B";
      case "pdf":
        return "#A32D2D";
      case "image":
        return "#3B6D11";
      case "ressource":
        return this.isLien(r) ? "#534AB7" : "#185FA5";
      default:
        return "#185FA5";
    }
  }
  getDuration(r) {
    if (!r.duree_estimee)
      return "";
    const mins = typeof r.duree_estimee === "string" ? parseInt(r.duree_estimee, 10) : r.duree_estimee;
    if (isNaN(mins) || mins <= 0)
      return "";
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    if (h > 0)
      return `${h}:${m.toString().padStart(2, "0")}`;
    return `${m}:00`;
  }
  isUsed(r) {
    return r.statut === "publie";
  }
  get totalCount() {
    return this.allRessources.length;
  }
  get unusedCount() {
    return this.allRessources.filter((r) => r.statut === "brouillon").length;
  }
  get topRessources() {
    return this.allRessources.slice(0, 4);
  }
  get recentRessources() {
    return [...this.allRessources].sort((a, b) => b.id - a.id).slice(0, 3);
  }
  getStoragePercent() {
    const totalSections = this.allRessources.length;
    const estimatedMo = totalSections * 50;
    const maxMo = 1e4;
    return Math.min(Math.round(estimatedMo / maxMo * 100), 100);
  }
  static \u0275fac = function VideoRessourcesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VideoRessourcesComponent)(\u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoRessourcesComponent, selectors: [["app-video-ressources"]], decls: 2, vars: 2, consts: [["class", "page", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "page"], [1, "ph"], [1, "ph-icon"], [1, "isax", "isax-folder-2"], [1, "ph-info"], [1, "ph-title"], [1, "ph-sub"], [1, "kpi-row"], [1, "kpi"], [1, "ki", "ki-a"], [1, "isax", "isax-video-circle"], [1, "kpi-v"], [1, "kpi-l"], [1, "ki", "ki-b"], [1, "isax", "isax-document-text"], [1, "ki", "ki-r"], [1, "isax", "isax-document-copy"], [1, "ki", "ki-p"], [1, "isax", "isax-link-21"], [1, "ki", "ki-g"], [1, "isax", "isax-data"], [1, "tab-bar"], [1, "tab", 3, "click"], [1, "isax", "isax-element-3"], [1, "tc", "tc-a"], [1, "tc", "tc-b"], [1, "tc", "tc-p"], [1, "isax", "isax-warning-2"], [1, "tv"], [1, "main-layout"], [1, "ml-main"], [1, "toolbar"], [1, "search"], [1, "isax", "isax-search-normal-1"], ["type", "text", "placeholder", "Rechercher une ressource...", 3, "ngModelChange", "input", "ngModel"], [1, "fsel", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "video"], ["value", "pdf"], ["value", "ressource"], ["value", "image"], ["value", "fichier"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "recent"], ["value", "ancien"], ["value", "alpha"], [1, "ml"], [1, "view-tog"], [1, "vt", 3, "click"], [1, "isax", "isax-row-horizontal"], [4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "ml-side"], [1, "side-card"], [1, "sc-head"], [1, "sc-title"], [1, "storage-card"], [1, "storage-total"], [1, "st-lbl"], [1, "st-val"], [1, "st-bar"], [1, "st-fill"], [1, "st-types"], [1, "st-type-row"], [1, "st-dot", 2, "background", "#854F0B"], [1, "st-type-lbl"], [1, "st-type-val"], [1, "st-dot", 2, "background", "#A32D2D"], [1, "st-dot", 2, "background", "#185FA5"], [1, "isax", "isax-trend-up"], [1, "usage-list"], ["class", "usage-item", 4, "ngFor", "ngForOf"], [1, "isax", "isax-clock"], [1, "recent-list"], ["class", "recent-item", 3, "click", 4, "ngFor", "ngForOf"], [3, "value"], [1, "section-head"], [1, "sh-title"], [1, "sh-badge", "shb-a"], ["class", "media-grid", 4, "ngIf"], [1, "media-grid"], ["class", "media-card", 3, "card-unused", 4, "ngFor", "ngForOf"], [1, "media-card"], [1, "mc-thumb", "mc-thumb--video", 3, "ngClass"], ["class", "mc-iframe", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", 4, "ngIf"], ["class", "mc-video", "preload", "metadata", "controls", "", 3, "src", 4, "ngIf"], ["class", "isax isax-play-circle mc-icon", 3, "color", 4, "ngIf"], ["class", "mc-duration", 4, "ngIf"], [1, "mc-formation-tag"], [1, "mc-body"], [1, "mc-title"], [1, "mc-meta"], [1, "mc-tags"], [1, "mc-tag"], ["class", "mc-tag", 4, "ngIf"], [1, "mc-footer"], [1, "mcf-btn", "mcf-primary", 3, "click"], [1, "isax", "isax-export-1"], [1, "mcf-btn", 3, "click"], [1, "isax", "isax-edit-2"], ["frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "mc-iframe", 3, "src"], ["preload", "metadata", "controls", "", 1, "mc-video", 3, "src"], [1, "isax", "isax-play-circle", "mc-icon"], [1, "mc-duration"], ["class", "list-item", 3, "item-unused", 4, "ngFor", "ngForOf"], [1, "list-item"], [1, "li-preview"], ["class", "li-iframe", "frameborder", "0", "allowfullscreen", "", 3, "src", 4, "ngIf"], ["class", "li-video", "preload", "metadata", "controls", "", 3, "src", 4, "ngIf"], ["class", "li-icon", 3, "background", "color", 4, "ngIf"], [1, "li-info"], [1, "li-title"], [1, "li-meta"], [1, "isax", "isax-book-1"], [1, "li-badge"], [1, "li-acts"], ["title", "Ouvrir", 1, "la-btn", 3, "click"], ["title", "Modifier", 1, "la-btn", 3, "click"], ["frameborder", "0", "allowfullscreen", "", 1, "li-iframe", 3, "src"], ["preload", "metadata", "controls", "", 1, "li-video", 3, "src"], [1, "li-icon"], [1, "sh-badge", "shb-b"], [1, "mc-thumb", "mc-thumb--doc", 3, "click", "ngClass"], ["class", "mc-iframe mc-doc-preview", "frameborder", "0", 3, "src", 4, "ngIf"], ["class", "mc-img", 3, "src", "alt", 4, "ngIf"], ["class", "isax mc-icon", 3, "ngClass", "color", 4, "ngIf"], [1, "mc-status"], [1, "isax", 3, "ngClass"], [1, "isax", "isax-eye"], ["frameborder", "0", 1, "mc-iframe", "mc-doc-preview", 3, "src"], [1, "mc-img", 3, "src", "alt"], [1, "isax", "mc-icon", 3, "ngClass"], ["class", "list-item", 3, "item-unused", "click", 4, "ngFor", "ngForOf"], [1, "list-item", 3, "click"], ["class", "li-preview", 4, "ngIf"], ["title", "Aper\xE7u", 1, "la-btn", 3, "click"], ["class", "li-iframe li-doc-preview", "frameborder", "0", 3, "src", 4, "ngIf"], ["class", "li-img", 3, "src", "alt", 4, "ngIf"], ["frameborder", "0", 1, "li-iframe", "li-doc-preview", 3, "src"], [1, "li-img", 3, "src", "alt"], [1, "sh-badge", "shb-p"], ["class", "list-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "li-icon", 2, "background", "#EEEDFE", "color", "#534AB7"], [1, "li-badge", "lb-used"], [1, "empty-state"], [1, "isax", "isax-folder-cross"], [1, "usage-item"], [1, "ui-rank"], [1, "ui-info"], [1, "ui-name"], [1, "ui-type"], [1, "recent-item", 3, "click"], [1, "ri-icon"], [1, "ri-info"], [1, "ri-name"], [1, "ri-date"], [1, "loading-state"], [1, "spinner"]], template: function VideoRessourcesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, VideoRessourcesComponent_div_0_Template, 164, 41, "div", 0)(1, VideoRessourcesComponent_div_1_Template, 4, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  background: var(--color-background-tertiary);\n  min-height: 700px;\n}\n.ph[_ngcontent-%COMP%] {\n  background: var(--color-background-primary);\n  border-bottom: 0.5px solid var(--color-border-tertiary);\n  padding: 13px 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ph-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--border-radius-md);\n  background: #FAEEDA;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  color: #854F0B;\n  flex-shrink: 0;\n}\n.ph-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.ph-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n}\n.ph-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n  margin-top: 2px;\n}\n.ph-acts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-o[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: 0.5px solid var(--color-border-secondary);\n  border-radius: var(--border-radius-md);\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  background: transparent;\n  cursor: pointer;\n}\n.btn-p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: none;\n  border-radius: var(--border-radius-md);\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #854F0B;\n  cursor: pointer;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 10px;\n  padding: 12px 20px;\n}\n.kpi[_ngcontent-%COMP%] {\n  background: var(--color-background-primary);\n  border: 0.5px solid var(--color-border-tertiary);\n  border-radius: var(--border-radius-md);\n  padding: 10px 12px;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ki[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: var(--border-radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.ki-a[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ki-b[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ki-g[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ki-p[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ki-r[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.kpi-v[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n}\n.kpi-l[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-secondary);\n  margin-top: 1px;\n}\n.tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 0.5px solid var(--color-border-tertiary);\n  padding: 0 20px;\n  background: var(--color-background-primary);\n}\n.tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 14px;\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  border-bottom: 2px solid transparent;\n  white-space: nowrap;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.tab.on[_ngcontent-%COMP%] {\n  color: #854F0B;\n  border-bottom-color: #854F0B;\n  font-weight: 500;\n}\n.tc[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 20px;\n  margin-left: 2px;\n}\n.tc-a[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.tc-b[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.tc-p[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #3C3489;\n}\n.tv[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--color-background-primary);\n  border: 0.5px solid var(--color-border-tertiary);\n  border-radius: var(--border-radius-md);\n  padding: 6px 10px;\n  width: 220px;\n}\n.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-text-tertiary);\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 12px;\n  color: var(--color-text-primary);\n  width: 100%;\n  font-family: inherit;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-tertiary);\n}\n.fsel[_ngcontent-%COMP%] {\n  border: 0.5px solid var(--color-border-secondary);\n  border-radius: var(--border-radius-md);\n  padding: 5px 9px;\n  font-size: 12px;\n  color: var(--color-text-primary);\n  background: var(--color-background-primary);\n  font-family: inherit;\n}\n.ml[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.view-tog[_ngcontent-%COMP%] {\n  display: flex;\n  border: 0.5px solid var(--color-border-tertiary);\n  border-radius: var(--border-radius-md);\n  overflow: hidden;\n}\n.vt[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-size: 14px;\n  color: var(--color-text-secondary);\n}\n.vt.on[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.upload-zone[_ngcontent-%COMP%] {\n  border: 1.5px dashed var(--color-border-secondary);\n  border-radius: var(--border-radius-lg);\n  padding: 28px;\n  text-align: center;\n  margin-bottom: 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n  background: var(--color-background-primary);\n}\n.upload-zone[_ngcontent-%COMP%]:hover {\n  border-color: #D4956A;\n  background: rgba(250, 238, 218, 0.13);\n}\n.uz-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--color-text-tertiary);\n  margin-bottom: 8px;\n}\n.uz-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  margin-bottom: 4px;\n}\n.uz-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n  margin-bottom: 10px;\n}\n.uz-formats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.fmt-tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: var(--color-background-secondary);\n  border: 0.5px solid var(--color-border-tertiary);\n  color: var(--color-text-secondary);\n}\n.main-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 260px;\n  gap: 12px;\n}\n.ml-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ml-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.sh-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  flex: 1;\n}\n.sh-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.shb-a[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.shb-b[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.shb-p[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #3C3489;\n}\n.media-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.media-card[_ngcontent-%COMP%] {\n  background: var(--color-background-primary);\n  border: 0.5px solid var(--color-border-tertiary);\n  border-radius: var(--border-radius-lg);\n  overflow: hidden;\n  cursor: pointer;\n  transition: border-color 0.12s;\n}\n.media-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-border-secondary);\n}\n.media-card.card-unused[_ngcontent-%COMP%] {\n  border-color: #EF9F27;\n}\n.mc-thumb[_ngcontent-%COMP%] {\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.mt-video[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1A1005,\n      #4A2C08);\n}\n.mt-pdf[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1A0A0A,\n      #6B1414);\n}\n.mt-doc[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0A1A2E,\n      #0C447C);\n}\n.mt-ppt[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1A0A05,\n      #8B3008);\n}\n.mt-img[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0A1A0A,\n      #0F6E56);\n}\n.mt-link[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0A0A1A,\n      #534AB7);\n}\n.mc-thumb--video[_ngcontent-%COMP%], \n.mc-thumb--doc[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 140px;\n}\n.mc-iframe[_ngcontent-%COMP%], \n.mc-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  border: none;\n}\n.mc-doc-preview[_ngcontent-%COMP%] {\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n}\n.mc-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.li-doc-preview[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.li-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.mc-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  opacity: 0.9;\n}\n.mc-duration[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5px;\n  right: 6px;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 4px;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n}\n.mc-formation-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: 6px;\n  font-size: 9px;\n  padding: 2px 6px;\n  border-radius: 20px;\n  background: rgba(0, 0, 0, 0.5);\n  color: rgba(255, 255, 255, 0.8);\n}\n.mc-status[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 6px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.ms-used[_ngcontent-%COMP%] {\n  background: #3B6D11;\n}\n.ms-unused[_ngcontent-%COMP%] {\n  background: #EF9F27;\n}\n.mc-body[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n}\n.mc-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  margin-bottom: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mc-meta[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 6px;\n}\n.mc-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.mc-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n  margin-bottom: 6px;\n}\n.mc-tag[_ngcontent-%COMP%] {\n  font-size: 9px;\n  padding: 1px 6px;\n  border-radius: 20px;\n  background: var(--color-background-secondary);\n  border: 0.5px solid var(--color-border-tertiary);\n  color: var(--color-text-secondary);\n}\n.mc-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.mcf-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n  padding: 5px;\n  border-radius: var(--border-radius-md);\n  font-size: 11px;\n  cursor: pointer;\n  border: 0.5px solid var(--color-border-secondary);\n  background: transparent;\n  color: var(--color-text-secondary);\n  transition: all 0.12s;\n}\n.mcf-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-background-secondary);\n}\n.mcf-primary[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  border-color: #EF9F27;\n  color: #854F0B;\n}\n.list-item[_ngcontent-%COMP%] {\n  background: var(--color-background-primary);\n  border: 0.5px solid var(--color-border-tertiary);\n  border-radius: var(--border-radius-md);\n  padding: 10px 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 6px;\n  cursor: pointer;\n  transition: border-color 0.12s;\n}\n.list-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-border-secondary);\n}\n.list-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.list-item.item-unused[_ngcontent-%COMP%] {\n  border-color: #EF9F27;\n}\n.li-preview[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 68px;\n  border-radius: var(--border-radius-md);\n  overflow: hidden;\n  flex-shrink: 0;\n  background: #1a1a2e;\n}\n.li-iframe[_ngcontent-%COMP%], \n.li-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  border: none;\n}\n.li-preview[_ngcontent-%COMP%]   .li-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 0;\n}\n.li-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--border-radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.li-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.li-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.li-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n  margin-top: 2px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.li-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.li-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  flex-shrink: 0;\n}\n.lb-used[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.lb-unused[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.li-acts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.la-btn[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border: 0.5px solid var(--color-border-tertiary);\n  border-radius: var(--border-radius-md);\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.la-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-background-secondary);\n}\n.side-card[_ngcontent-%COMP%] {\n  background: var(--color-background-primary);\n  border: 0.5px solid var(--color-border-tertiary);\n  border-radius: var(--border-radius-lg);\n  overflow: hidden;\n}\n.sc-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-bottom: 0.5px solid var(--color-border-tertiary);\n}\n.sc-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-text-secondary);\n}\n.sc-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  flex: 1;\n}\n.storage-card[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.storage-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.st-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n}\n.st-val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n}\n.st-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: var(--color-background-secondary);\n  border-radius: 6px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.st-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #854F0B,\n      #D4956A);\n}\n.st-types[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.st-type-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.st-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.st-dot-video[_ngcontent-%COMP%] {\n  background: #854F0B;\n}\n.st-dot-pdf[_ngcontent-%COMP%] {\n  background: #A32D2D;\n}\n.st-dot-doc[_ngcontent-%COMP%] {\n  background: #185FA5;\n}\n.st-type-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n  flex: 1;\n}\n.st-type-val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n}\n.usage-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.usage-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid var(--color-border-tertiary);\n}\n.usage-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ui-rank[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--color-text-tertiary);\n  width: 16px;\n  flex-shrink: 0;\n}\n.ui-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ui-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ui-type[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-secondary);\n}\n.recent-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.recent-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid var(--color-border-tertiary);\n  cursor: pointer;\n}\n.recent-item[_ngcontent-%COMP%]:hover {\n  background: var(--color-background-secondary);\n}\n.recent-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ri-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: var(--border-radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.ri-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ri-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ri-date[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-secondary);\n  margin-top: 1px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: var(--color-text-tertiary);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-text-secondary);\n  margin-bottom: 4px;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--color-border-tertiary);\n  border-top-color: #854F0B;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=video-ressources.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoRessourcesComponent, [{
    type: Component,
    args: [{ selector: "app-video-ressources", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page" *ngIf="!loading">
  <!-- Header -->
  <div class="ph">
    <div class="ph-icon"><i class="isax isax-folder-2"></i></div>
    <div class="ph-info">
      <div class="ph-title">Vid\xE9os & Ressources \u2014 Ma biblioth\xE8que</div>
      <div class="ph-sub">Tous vos contenus p\xE9dagogiques en un seul endroit</div>
    </div>
  </div>

  <!-- KPI Row -->
  <div class="kpi-row">
    <div class="kpi">
      <div class="ki ki-a"><i class="isax isax-video-circle"></i></div>
      <div><div class="kpi-v">{{ stats.videos }}</div><div class="kpi-l">Vid\xE9os</div></div>
    </div>
    <div class="kpi">
      <div class="ki ki-b"><i class="isax isax-document-text"></i></div>
      <div><div class="kpi-v">{{ stats.documents }}</div><div class="kpi-l">Documents</div></div>
    </div>
    <div class="kpi">
      <div class="ki ki-r"><i class="isax isax-document-copy"></i></div>
      <div><div class="kpi-v">{{ stats.pdf }}</div><div class="kpi-l">PDF</div></div>
    </div>
    <div class="kpi">
      <div class="ki ki-p"><i class="isax isax-link-21"></i></div>
      <div><div class="kpi-v">{{ stats.liens }}</div><div class="kpi-l">Liens externes</div></div>
    </div>
    <div class="kpi">
      <div class="ki ki-g"><i class="isax isax-data"></i></div>
      <div><div class="kpi-v">{{ stats.stockage }}</div><div class="kpi-l">Stockage utilis\xE9</div></div>
    </div>
  </div>

  <!-- Tab Bar -->
  <div class="tab-bar">
    <div class="tab" [class.on]="activeTab === 'all'" (click)="switchTab('all')">
      <i class="isax isax-element-3"></i> Tout <span class="tc tc-a">{{ totalCount }}</span>
    </div>
    <div class="tab" [class.on]="activeTab === 'videos'" (click)="switchTab('videos')">
      <i class="isax isax-video-circle"></i> Vid\xE9os <span class="tc tc-a">{{ stats.videos }}</span>
    </div>
    <div class="tab" [class.on]="activeTab === 'docs'" (click)="switchTab('docs')">
      <i class="isax isax-document-text"></i> Documents <span class="tc tc-b">{{ stats.documents + stats.pdf }}</span>
    </div>
    <div class="tab" [class.on]="activeTab === 'links'" (click)="switchTab('links')">
      <i class="isax isax-link-21"></i> Liens <span class="tc tc-p">{{ stats.liens }}</span>
    </div>
    <div class="tab" [class.on]="activeTab === 'unused'" (click)="switchTab('unused')">
      <i class="isax isax-warning-2"></i> Non utilis\xE9s <span class="tc tc-a">{{ unusedCount }}</span>
    </div>
  </div>

  <!-- Tab Content -->
  <div class="tv">
    <!-- Main Layout -->
    <div class="main-layout">
      <div class="ml-main">
        <!-- Toolbar -->
        <div class="toolbar">
          <div class="search">
            <i class="isax isax-search-normal-1"></i>
            <input type="text" [(ngModel)]="searchQuery" (input)="onSearch()" placeholder="Rechercher une ressource..." />
          </div>
          <select class="fsel" [(ngModel)]="filterType" (change)="onFilterChange()">
            <option value="">Tous types</option>
            <option value="video">Vid\xE9o</option>
            <option value="pdf">PDF</option>
            <option value="ressource">Document</option>
            <option value="image">Image</option>
            <option value="fichier">Fichier</option>
          </select>
          <select class="fsel" [(ngModel)]="filterFormation" (change)="onFilterChange()">
            <option value="">Toutes formations</option>
            <option *ngFor="let f of formationNames" [value]="f">{{ f }}</option>
          </select>
          <select class="fsel" [(ngModel)]="sortBy" (change)="onFilterChange()">
            <option value="recent">Plus r\xE9cents</option>
            <option value="ancien">Plus anciens</option>
            <option value="alpha">Alphab\xE9tique</option>
          </select>
          <div class="ml"></div>
          <div class="view-tog">
            <button class="vt" [class.on]="viewMode === 'grid'" (click)="setView('grid')"><i class="isax isax-element-3"></i></button>
            <button class="vt" [class.on]="viewMode === 'list'" (click)="setView('list')"><i class="isax isax-row-horizontal"></i></button>
          </div>
        </div>

        <!-- Videos Section -->
        <ng-container *ngIf="videos.length > 0 && (activeTab === 'all' || activeTab === 'videos')">
          <div class="section-head">
            <span class="sh-title">Vid\xE9os</span>
            <span class="sh-badge shb-a">{{ videos.length }}</span>
          </div>

          <!-- Grid View -->
          <div class="media-grid" *ngIf="viewMode === 'grid'">
            <div class="media-card" *ngFor="let r of videos" [class.card-unused]="!isUsed(r)">
              <div class="mc-thumb mc-thumb--video" [ngClass]="getThumbClass(r)">
                <!-- YouTube / Vimeo / Dailymotion embed -->
                <iframe *ngIf="isEmbedVideo(r)"
                        [src]="getEmbedUrl(r)"
                        class="mc-iframe"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                <!-- Uploaded video file -->
                <video *ngIf="isFileVideo(r)"
                       [src]="getVideoFileUrl(r)!"
                       class="mc-video"
                       preload="metadata"
                       controls></video>
                <!-- Fallback icon if no content -->
                <i *ngIf="!isEmbedVideo(r) && !isFileVideo(r)"
                   class="isax isax-play-circle mc-icon" [style.color]="getIconColor(r)"></i>
                <span class="mc-duration" *ngIf="getDuration(r)">{{ getDuration(r) }}</span>
                <span class="mc-formation-tag">{{ r.formationTitre }}</span>
              </div>
              <div class="mc-body">
                <div class="mc-title">{{ r.titre }}</div>
                <div class="mc-meta">
                  <i class="isax isax-video-circle"></i> {{ getTypeLabel(r) }}
                  <span *ngIf="getDuration(r)">\xB7 {{ getDuration(r) }}</span>
                </div>
                <div class="mc-tags">
                  <span class="mc-tag">{{ r.moduleTitre }}</span>
                  <span class="mc-tag" *ngIf="r.niveau && r.niveau !== 'Non d\xE9fini'">{{ r.niveau }}</span>
                </div>
                <div class="mc-footer">
                  <div class="mcf-btn mcf-primary" (click)="openRessource(r)"><i class="isax isax-export-1"></i> Ouvrir</div>
                  <div class="mcf-btn" (click)="editFormation(r)"><i class="isax isax-edit-2"></i></div>
                </div>
              </div>
            </div>
          </div>

          <!-- List View -->
          <div *ngIf="viewMode === 'list'">
            <div class="list-item" *ngFor="let r of videos" [class.item-unused]="!isUsed(r)">
              <div class="li-preview">
                <iframe *ngIf="isEmbedVideo(r)"
                        [src]="getEmbedUrl(r)"
                        class="li-iframe"
                        frameborder="0"
                        allowfullscreen></iframe>
                <video *ngIf="isFileVideo(r)"
                       [src]="getVideoFileUrl(r)!"
                       class="li-video"
                       preload="metadata"
                       controls></video>
                <div *ngIf="!isEmbedVideo(r) && !isFileVideo(r)"
                     class="li-icon" [style.background]="getListIconBg(r)" [style.color]="getListIconColor(r)">
                  <i class="isax isax-video-circle"></i>
                </div>
              </div>
              <div class="li-info">
                <div class="li-title">{{ r.titre }}</div>
                <div class="li-meta">
                  <i class="isax isax-book-1"></i> {{ r.formationTitre }} \xB7 {{ r.moduleTitre }}
                  <span *ngIf="getDuration(r)"><i class="isax isax-clock"></i> {{ getDuration(r) }}</span>
                </div>
              </div>
              <span class="li-badge" [class.lb-used]="isUsed(r)" [class.lb-unused]="!isUsed(r)">
                {{ isUsed(r) ? 'Publi\xE9' : 'Brouillon' }}
              </span>
              <div class="li-acts">
                <button class="la-btn" title="Ouvrir" (click)="openRessource(r)"><i class="isax isax-export-1"></i></button>
                <button class="la-btn" title="Modifier" (click)="editFormation(r)"><i class="isax isax-edit-2"></i></button>
              </div>
            </div>
          </div>
        </ng-container>

        <!-- Documents Section -->
        <ng-container *ngIf="documents.length > 0 && (activeTab === 'all' || activeTab === 'docs')">
          <div class="section-head" [style.margin-top.px]="videos.length > 0 ? 16 : 0">
            <span class="sh-title">Documents & PDF</span>
            <span class="sh-badge shb-b">{{ documents.length }}</span>
          </div>

          <!-- Grid View -->
          <div class="media-grid" *ngIf="viewMode === 'grid'">
            <div class="media-card" *ngFor="let r of documents" [class.card-unused]="!isUsed(r)">
              <div class="mc-thumb mc-thumb--doc" [ngClass]="getThumbClass(r)" (click)="openRessource(r)">
                <!-- PDF preview -->
                <iframe *ngIf="isPdfFile(r) && getDocumentSafeUrl(r)"
                        [src]="getDocumentSafeUrl(r)"
                        class="mc-iframe mc-doc-preview"
                        frameborder="0"></iframe>
                <!-- Image preview -->
                <img *ngIf="isImageFile(r) && getDocumentUrl(r)"
                     [src]="getDocumentUrl(r)"
                     class="mc-img"
                     alt="{{ r.titre }}" />
                <!-- Fallback icon -->
                <i *ngIf="(!isPdfFile(r) || !getDocumentSafeUrl(r)) && (!isImageFile(r) || !getDocumentUrl(r))"
                   class="isax mc-icon" [ngClass]="getTypeIconIsax(r)" [style.color]="getIconColor(r)"></i>
                <span class="mc-formation-tag">{{ r.formationTitre }}</span>
                <div class="mc-status" [class.ms-used]="isUsed(r)" [class.ms-unused]="!isUsed(r)"></div>
              </div>
              <div class="mc-body">
                <div class="mc-title">{{ r.titre }}</div>
                <div class="mc-meta">
                  <i class="isax" [ngClass]="getTypeIconIsax(r)"></i> {{ getTypeLabel(r) }}
                </div>
                <div class="mc-tags">
                  <span class="mc-tag">{{ r.moduleTitre }}</span>
                </div>
                <div class="mc-footer">
                  <div class="mcf-btn mcf-primary" (click)="openRessource(r)"><i class="isax isax-eye"></i> Voir</div>
                  <div class="mcf-btn" (click)="editFormation(r)"><i class="isax isax-edit-2"></i></div>
                </div>
              </div>
            </div>
          </div>

          <!-- List View -->
          <div *ngIf="viewMode === 'list'">
            <div class="list-item" *ngFor="let r of documents" [class.item-unused]="!isUsed(r)" (click)="openRessource(r)">
              <div class="li-preview" *ngIf="isPdfFile(r) || isImageFile(r)">
                <iframe *ngIf="isPdfFile(r) && getDocumentSafeUrl(r)"
                        [src]="getDocumentSafeUrl(r)"
                        class="li-iframe li-doc-preview"
                        frameborder="0"></iframe>
                <img *ngIf="isImageFile(r) && getDocumentUrl(r)"
                     [src]="getDocumentUrl(r)"
                     class="li-img"
                     alt="{{ r.titre }}" />
              </div>
              <div class="li-icon" *ngIf="!isPdfFile(r) && !isImageFile(r)" [style.background]="getListIconBg(r)" [style.color]="getListIconColor(r)">
                <i class="isax" [ngClass]="getTypeIconIsax(r)"></i>
              </div>
              <div class="li-info">
                <div class="li-title">{{ r.titre }}</div>
                <div class="li-meta">
                  <i class="isax isax-book-1"></i> {{ r.formationTitre }} \xB7 {{ r.moduleTitre }}
                </div>
              </div>
              <span class="li-badge" [class.lb-used]="isUsed(r)" [class.lb-unused]="!isUsed(r)">
                {{ isUsed(r) ? 'Publi\xE9' : 'Brouillon' }}
              </span>
              <div class="li-acts">
                <button class="la-btn" title="Aper\xE7u" (click)="openRessource(r); $event.stopPropagation()"><i class="isax isax-eye"></i></button>
                <button class="la-btn" title="Modifier" (click)="editFormation(r); $event.stopPropagation()"><i class="isax isax-edit-2"></i></button>
              </div>
            </div>
          </div>
        </ng-container>

        <!-- Liens Section -->
        <ng-container *ngIf="liens.length > 0 && (activeTab === 'all' || activeTab === 'links')">
          <div class="section-head" [style.margin-top.px]="16">
            <span class="sh-title">Liens externes</span>
            <span class="sh-badge shb-p">{{ liens.length }}</span>
          </div>

          <div>
            <div class="list-item" *ngFor="let r of liens" (click)="openRessource(r)">
              <div class="li-icon" style="background:#EEEDFE;color:#534AB7;">
                <i class="isax isax-link-21"></i>
              </div>
              <div class="li-info">
                <div class="li-title">{{ r.titre }}</div>
                <div class="li-meta">
                  <i class="isax isax-book-1"></i> {{ r.formationTitre }} \xB7 {{ r.moduleTitre }}
                </div>
              </div>
              <span class="li-badge lb-used">Lien</span>
              <div class="li-acts">
                <button class="la-btn" title="Ouvrir" (click)="openRessource(r); $event.stopPropagation()"><i class="isax isax-export-1"></i></button>
                <button class="la-btn" title="Modifier" (click)="editFormation(r); $event.stopPropagation()"><i class="isax isax-edit-2"></i></button>
              </div>
            </div>
          </div>
        </ng-container>

        <!-- Empty State -->
        <div class="empty-state" *ngIf="filteredRessources.length === 0">
          <i class="isax isax-folder-cross"></i>
          <p>Aucune ressource trouv\xE9e</p>
          <span>Ajoutez des contenus \xE0 vos formations ou ajustez vos filtres</span>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="ml-side">
        <!-- Storage Card -->
        <div class="side-card">
          <div class="sc-head">
            <i class="isax isax-data"></i>
            <span class="sc-title">Stockage utilis\xE9</span>
          </div>
          <div class="storage-card">
            <div class="storage-total">
              <span class="st-lbl">{{ stats.stockage }} utilis\xE9s</span>
              <span class="st-val">10 Go max</span>
            </div>
            <div class="st-bar"><div class="st-fill" [style.width.%]="getStoragePercent()"></div></div>
            <div class="st-types">
              <div class="st-type-row">
                <div class="st-dot" style="background:#854F0B;"></div>
                <span class="st-type-lbl">Vid\xE9os</span>
                <span class="st-type-val">{{ stats.videos }} fichiers</span>
              </div>
              <div class="st-type-row">
                <div class="st-dot" style="background:#A32D2D;"></div>
                <span class="st-type-lbl">PDF</span>
                <span class="st-type-val">{{ stats.pdf }} fichiers</span>
              </div>
              <div class="st-type-row">
                <div class="st-dot" style="background:#185FA5;"></div>
                <span class="st-type-lbl">Documents</span>
                <span class="st-type-val">{{ stats.documents }} fichiers</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Top Resources -->
        <div class="side-card">
          <div class="sc-head">
            <i class="isax isax-trend-up"></i>
            <span class="sc-title">Ressources principales</span>
          </div>
          <div class="usage-list">
            <div class="usage-item" *ngFor="let r of topRessources; let i = index">
              <span class="ui-rank">{{ i + 1 }}</span>
              <div class="ui-info">
                <div class="ui-name">{{ r.titre }}</div>
                <div class="ui-type">{{ getTypeLabel(r) }} \xB7 {{ r.formationTitre }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Imports -->
        <div class="side-card">
          <div class="sc-head">
            <i class="isax isax-clock"></i>
            <span class="sc-title">Ajout\xE9s r\xE9cemment</span>
          </div>
          <div class="recent-list">
            <div class="recent-item" *ngFor="let r of recentRessources" (click)="openRessource(r)">
              <div class="ri-icon" [style.background]="getListIconBg(r)" [style.color]="getListIconColor(r)">
                <i class="isax" [ngClass]="getTypeIconIsax(r)"></i>
              </div>
              <div class="ri-info">
                <div class="ri-name">{{ r.titre }}</div>
                <div class="ri-date">{{ r.formationTitre }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Loading State -->
<div class="loading-state" *ngIf="loading">
  <div class="spinner"></div>
  <p>Chargement de vos ressources...</p>
</div>
`, styles: ["/* src/app/features/instructor/video-ressources/video-ressources.component.scss */\n.page {\n  background: var(--color-background-tertiary);\n  min-height: 700px;\n}\n.ph {\n  background: var(--color-background-primary);\n  border-bottom: 0.5px solid var(--color-border-tertiary);\n  padding: 13px 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ph-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--border-radius-md);\n  background: #FAEEDA;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  color: #854F0B;\n  flex-shrink: 0;\n}\n.ph-info {\n  flex: 1;\n}\n.ph-title {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n}\n.ph-sub {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n  margin-top: 2px;\n}\n.ph-acts {\n  display: flex;\n  gap: 8px;\n}\n.btn-o {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: 0.5px solid var(--color-border-secondary);\n  border-radius: var(--border-radius-md);\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  background: transparent;\n  cursor: pointer;\n}\n.btn-p {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: none;\n  border-radius: var(--border-radius-md);\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #854F0B;\n  cursor: pointer;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 10px;\n  padding: 12px 20px;\n}\n.kpi {\n  background: var(--color-background-primary);\n  border: 0.5px solid var(--color-border-tertiary);\n  border-radius: var(--border-radius-md);\n  padding: 10px 12px;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ki {\n  width: 30px;\n  height: 30px;\n  border-radius: var(--border-radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.ki-a {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ki-b {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ki-g {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ki-p {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ki-r {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.kpi-v {\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n}\n.kpi-l {\n  font-size: 10px;\n  color: var(--color-text-secondary);\n  margin-top: 1px;\n}\n.tab-bar {\n  display: flex;\n  border-bottom: 0.5px solid var(--color-border-tertiary);\n  padding: 0 20px;\n  background: var(--color-background-primary);\n}\n.tab {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 14px;\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  border-bottom: 2px solid transparent;\n  white-space: nowrap;\n  transition: all 0.15s;\n}\n.tab i {\n  font-size: 14px;\n}\n.tab.on {\n  color: #854F0B;\n  border-bottom-color: #854F0B;\n  font-weight: 500;\n}\n.tc {\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 20px;\n  margin-left: 2px;\n}\n.tc-a {\n  background: #FAEEDA;\n  color: #633806;\n}\n.tc-b {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.tc-p {\n  background: #EEEDFE;\n  color: #3C3489;\n}\n.tv {\n  padding: 14px 20px;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.search {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--color-background-primary);\n  border: 0.5px solid var(--color-border-tertiary);\n  border-radius: var(--border-radius-md);\n  padding: 6px 10px;\n  width: 220px;\n}\n.search i {\n  font-size: 14px;\n  color: var(--color-text-tertiary);\n}\n.search input {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 12px;\n  color: var(--color-text-primary);\n  width: 100%;\n  font-family: inherit;\n}\n.search input::placeholder {\n  color: var(--color-text-tertiary);\n}\n.fsel {\n  border: 0.5px solid var(--color-border-secondary);\n  border-radius: var(--border-radius-md);\n  padding: 5px 9px;\n  font-size: 12px;\n  color: var(--color-text-primary);\n  background: var(--color-background-primary);\n  font-family: inherit;\n}\n.ml {\n  margin-left: auto;\n}\n.view-tog {\n  display: flex;\n  border: 0.5px solid var(--color-border-tertiary);\n  border-radius: var(--border-radius-md);\n  overflow: hidden;\n}\n.vt {\n  padding: 5px 8px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-size: 14px;\n  color: var(--color-text-secondary);\n}\n.vt.on {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.upload-zone {\n  border: 1.5px dashed var(--color-border-secondary);\n  border-radius: var(--border-radius-lg);\n  padding: 28px;\n  text-align: center;\n  margin-bottom: 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n  background: var(--color-background-primary);\n}\n.upload-zone:hover {\n  border-color: #D4956A;\n  background: rgba(250, 238, 218, 0.13);\n}\n.uz-icon {\n  font-size: 32px;\n  color: var(--color-text-tertiary);\n  margin-bottom: 8px;\n}\n.uz-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  margin-bottom: 4px;\n}\n.uz-sub {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n  margin-bottom: 10px;\n}\n.uz-formats {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.fmt-tag {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: var(--color-background-secondary);\n  border: 0.5px solid var(--color-border-tertiary);\n  color: var(--color-text-secondary);\n}\n.main-layout {\n  display: grid;\n  grid-template-columns: 1fr 260px;\n  gap: 12px;\n}\n.ml-main {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ml-side {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.section-head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.sh-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  flex: 1;\n}\n.sh-badge {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.shb-a {\n  background: #FAEEDA;\n  color: #633806;\n}\n.shb-b {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.shb-p {\n  background: #EEEDFE;\n  color: #3C3489;\n}\n.media-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.media-card {\n  background: var(--color-background-primary);\n  border: 0.5px solid var(--color-border-tertiary);\n  border-radius: var(--border-radius-lg);\n  overflow: hidden;\n  cursor: pointer;\n  transition: border-color 0.12s;\n}\n.media-card:hover {\n  border-color: var(--color-border-secondary);\n}\n.media-card.card-unused {\n  border-color: #EF9F27;\n}\n.mc-thumb {\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.mt-video {\n  background:\n    linear-gradient(\n      135deg,\n      #1A1005,\n      #4A2C08);\n}\n.mt-pdf {\n  background:\n    linear-gradient(\n      135deg,\n      #1A0A0A,\n      #6B1414);\n}\n.mt-doc {\n  background:\n    linear-gradient(\n      135deg,\n      #0A1A2E,\n      #0C447C);\n}\n.mt-ppt {\n  background:\n    linear-gradient(\n      135deg,\n      #1A0A05,\n      #8B3008);\n}\n.mt-img {\n  background:\n    linear-gradient(\n      135deg,\n      #0A1A0A,\n      #0F6E56);\n}\n.mt-link {\n  background:\n    linear-gradient(\n      135deg,\n      #0A0A1A,\n      #534AB7);\n}\n.mc-thumb--video,\n.mc-thumb--doc {\n  overflow: hidden;\n  height: 140px;\n}\n.mc-iframe,\n.mc-video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  border: none;\n}\n.mc-doc-preview {\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n}\n.mc-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.li-doc-preview {\n  pointer-events: none;\n}\n.li-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.mc-icon {\n  font-size: 28px;\n  opacity: 0.9;\n}\n.mc-duration {\n  position: absolute;\n  bottom: 5px;\n  right: 6px;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 4px;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n}\n.mc-formation-tag {\n  position: absolute;\n  top: 5px;\n  left: 6px;\n  font-size: 9px;\n  padding: 2px 6px;\n  border-radius: 20px;\n  background: rgba(0, 0, 0, 0.5);\n  color: rgba(255, 255, 255, 0.8);\n}\n.mc-status {\n  position: absolute;\n  top: 5px;\n  right: 6px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.ms-used {\n  background: #3B6D11;\n}\n.ms-unused {\n  background: #EF9F27;\n}\n.mc-body {\n  padding: 8px 10px;\n}\n.mc-title {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  margin-bottom: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mc-meta {\n  font-size: 10px;\n  color: var(--color-text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 6px;\n}\n.mc-meta i {\n  font-size: 11px;\n}\n.mc-tags {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n  margin-bottom: 6px;\n}\n.mc-tag {\n  font-size: 9px;\n  padding: 1px 6px;\n  border-radius: 20px;\n  background: var(--color-background-secondary);\n  border: 0.5px solid var(--color-border-tertiary);\n  color: var(--color-text-secondary);\n}\n.mc-footer {\n  display: flex;\n  gap: 4px;\n}\n.mcf-btn {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n  padding: 5px;\n  border-radius: var(--border-radius-md);\n  font-size: 11px;\n  cursor: pointer;\n  border: 0.5px solid var(--color-border-secondary);\n  background: transparent;\n  color: var(--color-text-secondary);\n  transition: all 0.12s;\n}\n.mcf-btn:hover {\n  background: var(--color-background-secondary);\n}\n.mcf-primary {\n  background: #FAEEDA;\n  border-color: #EF9F27;\n  color: #854F0B;\n}\n.list-item {\n  background: var(--color-background-primary);\n  border: 0.5px solid var(--color-border-tertiary);\n  border-radius: var(--border-radius-md);\n  padding: 10px 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 6px;\n  cursor: pointer;\n  transition: border-color 0.12s;\n}\n.list-item:hover {\n  border-color: var(--color-border-secondary);\n}\n.list-item:last-child {\n  margin-bottom: 0;\n}\n.list-item.item-unused {\n  border-color: #EF9F27;\n}\n.li-preview {\n  width: 120px;\n  height: 68px;\n  border-radius: var(--border-radius-md);\n  overflow: hidden;\n  flex-shrink: 0;\n  background: #1a1a2e;\n}\n.li-iframe,\n.li-video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  border: none;\n}\n.li-preview .li-icon {\n  width: 100%;\n  height: 100%;\n  border-radius: 0;\n}\n.li-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--border-radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.li-info {\n  flex: 1;\n  min-width: 0;\n}\n.li-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.li-meta {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n  margin-top: 2px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.li-meta i {\n  font-size: 12px;\n}\n.li-badge {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  flex-shrink: 0;\n}\n.lb-used {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.lb-unused {\n  background: #FAEEDA;\n  color: #633806;\n}\n.li-acts {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.la-btn {\n  width: 26px;\n  height: 26px;\n  border: 0.5px solid var(--color-border-tertiary);\n  border-radius: var(--border-radius-md);\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.la-btn:hover {\n  background: var(--color-background-secondary);\n}\n.side-card {\n  background: var(--color-background-primary);\n  border: 0.5px solid var(--color-border-tertiary);\n  border-radius: var(--border-radius-lg);\n  overflow: hidden;\n}\n.sc-head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-bottom: 0.5px solid var(--color-border-tertiary);\n}\n.sc-head i {\n  font-size: 14px;\n  color: var(--color-text-secondary);\n}\n.sc-title {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  flex: 1;\n}\n.storage-card {\n  padding: 12px;\n}\n.storage-total {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.st-lbl {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n}\n.st-val {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n}\n.st-bar {\n  height: 8px;\n  background: var(--color-background-secondary);\n  border-radius: 6px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.st-fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #854F0B,\n      #D4956A);\n}\n.st-types {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.st-type-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.st-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.st-dot-video {\n  background: #854F0B;\n}\n.st-dot-pdf {\n  background: #A32D2D;\n}\n.st-dot-doc {\n  background: #185FA5;\n}\n.st-type-lbl {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n  flex: 1;\n}\n.st-type-val {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n}\n.usage-list {\n  display: flex;\n  flex-direction: column;\n}\n.usage-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid var(--color-border-tertiary);\n}\n.usage-item:last-child {\n  border-bottom: none;\n}\n.ui-rank {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--color-text-tertiary);\n  width: 16px;\n  flex-shrink: 0;\n}\n.ui-info {\n  flex: 1;\n  min-width: 0;\n}\n.ui-name {\n  font-size: 12px;\n  color: var(--color-text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ui-type {\n  font-size: 10px;\n  color: var(--color-text-secondary);\n}\n.recent-list {\n  display: flex;\n  flex-direction: column;\n}\n.recent-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid var(--color-border-tertiary);\n  cursor: pointer;\n}\n.recent-item:hover {\n  background: var(--color-background-secondary);\n}\n.recent-item:last-child {\n  border-bottom: none;\n}\n.ri-icon {\n  width: 28px;\n  height: 28px;\n  border-radius: var(--border-radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.ri-info {\n  flex: 1;\n  min-width: 0;\n}\n.ri-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ri-date {\n  font-size: 10px;\n  color: var(--color-text-secondary);\n  margin-top: 1px;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px 20px;\n  color: var(--color-text-tertiary);\n}\n.empty-state i {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state p {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-text-secondary);\n  margin-bottom: 4px;\n}\n.empty-state span {\n  font-size: 12px;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: 12px;\n}\n.loading-state p {\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--color-border-tertiary);\n  border-top-color: #854F0B;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=video-ressources.component.css.map */\n"] }]
  }], () => [{ type: FormationService }, { type: DomSanitizer }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoRessourcesComponent, { className: "VideoRessourcesComponent", filePath: "app/features/instructor/video-ressources/video-ressources.component.ts", lineNumber: 33 });
})();
export {
  VideoRessourcesComponent
};
//# sourceMappingURL=chunk-FNSICU4N.js.map
