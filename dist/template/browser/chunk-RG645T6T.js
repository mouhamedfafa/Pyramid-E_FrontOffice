import {
  LightgalleryComponent,
  LightgalleryModule
} from "./chunk-YVUS4CKY.js";
import {
  Swiper,
  createElement,
  elementTransitionEnd,
  getSlideTransformEl,
  getWindow,
  nextTick,
  now
} from "./chunk-6ZN2N5QW.js";
import {
  FooterComponent
} from "./chunk-P3QSTHZV.js";
import "./chunk-CUL6WAJO.js";
import {
  require_aos
} from "./chunk-EOCJYYK5.js";
import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  DataService
} from "./chunk-XF2ZZMCS.js";
import {
  SlickCarouselModule
} from "./chunk-Q4YV4INV.js";
import {
  routes
} from "./chunk-42QKTZAV.js";
import "./chunk-RNP5DT5T.js";
import {
  Router,
  RouterLink
} from "./chunk-VMXPZP5A.js";
import {
  DomSanitizer
} from "./chunk-47WYM2C2.js";
import {
  HttpClient
} from "./chunk-XZLGMMSK.js";
import {
  CommonModule,
  NgIf
} from "./chunk-ZRUSYSCI.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-ON7U2Q36.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-4MWRP73S.js";

// src/app/features/home-list/home/home.component.ts
var AOS = __toESM(require_aos());

// node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js
var __assign = function() {
  __assign = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var zoomSettings = {
  scale: 1,
  zoom: true,
  infiniteZoom: true,
  actualSize: true,
  showZoomInOutIcons: false,
  actualSizeIcons: {
    zoomIn: "lg-zoom-in",
    zoomOut: "lg-zoom-out"
  },
  enableZoomAfter: 300,
  zoomPluginStrings: {
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    viewActualSize: "View actual size"
  }
};
var lGEvents = {
  afterAppendSlide: "lgAfterAppendSlide",
  init: "lgInit",
  hasVideo: "lgHasVideo",
  containerResize: "lgContainerResize",
  updateSlides: "lgUpdateSlides",
  afterAppendSubHtml: "lgAfterAppendSubHtml",
  beforeOpen: "lgBeforeOpen",
  afterOpen: "lgAfterOpen",
  slideItemLoad: "lgSlideItemLoad",
  beforeSlide: "lgBeforeSlide",
  afterSlide: "lgAfterSlide",
  posterClick: "lgPosterClick",
  dragStart: "lgDragStart",
  dragMove: "lgDragMove",
  dragEnd: "lgDragEnd",
  beforeNextSlide: "lgBeforeNextSlide",
  beforePrevSlide: "lgBeforePrevSlide",
  beforeClose: "lgBeforeClose",
  afterClose: "lgAfterClose",
  rotateLeft: "lgRotateLeft",
  rotateRight: "lgRotateRight",
  flipHorizontal: "lgFlipHorizontal",
  flipVertical: "lgFlipVertical",
  autoplay: "lgAutoplay",
  autoplayStart: "lgAutoplayStart",
  autoplayStop: "lgAutoplayStop"
};
var ZOOM_TRANSITION_DURATION = 500;
var Zoom = (
  /** @class */
  (function() {
    function Zoom3(instance, $LG) {
      this.core = instance;
      this.$LG = $LG;
      this.settings = __assign(__assign({}, zoomSettings), this.core.settings);
      return this;
    }
    Zoom3.prototype.buildTemplates = function() {
      var zoomIcons = this.settings.showZoomInOutIcons ? '<button id="' + this.core.getIdName("lg-zoom-in") + '" type="button" aria-label="' + this.settings.zoomPluginStrings["zoomIn"] + '" class="lg-zoom-in lg-icon"></button><button id="' + this.core.getIdName("lg-zoom-out") + '" type="button" aria-label="' + this.settings.zoomPluginStrings["zoomOut"] + '" class="lg-zoom-out lg-icon"></button>' : "";
      if (this.settings.actualSize) {
        zoomIcons += '<button id="' + this.core.getIdName("lg-actual-size") + '" type="button" aria-label="' + this.settings.zoomPluginStrings["viewActualSize"] + '" class="' + this.settings.actualSizeIcons.zoomIn + ' lg-icon"></button>';
      }
      this.core.outer.addClass("lg-use-transition-for-zoom");
      this.core.$toolbar.first().append(zoomIcons);
    };
    Zoom3.prototype.enableZoom = function(event2) {
      var _this = this;
      var _speed = this.settings.enableZoomAfter + event2.detail.delay;
      if (this.$LG("body").first().hasClass("lg-from-hash") && event2.detail.delay) {
        _speed = 0;
      } else {
        this.$LG("body").first().removeClass("lg-from-hash");
      }
      this.zoomableTimeout = setTimeout(function() {
        if (!_this.isImageSlide(_this.core.index)) {
          return;
        }
        _this.core.getSlideItem(event2.detail.index).addClass("lg-zoomable");
        if (event2.detail.index === _this.core.index) {
          _this.setZoomEssentials();
        }
      }, _speed + 30);
    };
    Zoom3.prototype.enableZoomOnSlideItemLoad = function() {
      this.core.LGel.on(lGEvents.slideItemLoad + ".zoom", this.enableZoom.bind(this));
    };
    Zoom3.prototype.getDragCords = function(e) {
      return {
        x: e.pageX,
        y: e.pageY
      };
    };
    Zoom3.prototype.getSwipeCords = function(e) {
      var x = e.touches[0].pageX;
      var y = e.touches[0].pageY;
      return {
        x,
        y
      };
    };
    Zoom3.prototype.getDragAllowedAxises = function(scale, scaleDiff) {
      if (!this.containerRect) {
        return {
          allowX: false,
          allowY: false
        };
      }
      var $image = this.core.getSlideItem(this.core.index).find(".lg-image").first().get();
      var height = 0;
      var width = 0;
      var rect = $image.getBoundingClientRect();
      if (scale) {
        height = $image.offsetHeight * scale;
        width = $image.offsetWidth * scale;
      } else if (scaleDiff) {
        height = rect.height + scaleDiff * rect.height;
        width = rect.width + scaleDiff * rect.width;
      } else {
        height = rect.height;
        width = rect.width;
      }
      var allowY = height > this.containerRect.height;
      var allowX = width > this.containerRect.width;
      return {
        allowX,
        allowY
      };
    };
    Zoom3.prototype.setZoomEssentials = function() {
      this.containerRect = this.core.$content.get().getBoundingClientRect();
    };
    Zoom3.prototype.zoomImage = function(scale, scaleDiff, reposition, resetToMax) {
      if (Math.abs(scaleDiff) <= 0)
        return;
      var offsetX = this.containerRect.width / 2 + this.containerRect.left;
      var offsetY = this.containerRect.height / 2 + this.containerRect.top + this.scrollTop;
      var originalX;
      var originalY;
      if (scale === 1) {
        this.positionChanged = false;
      }
      var dragAllowedAxises = this.getDragAllowedAxises(0, scaleDiff);
      var allowY = dragAllowedAxises.allowY, allowX = dragAllowedAxises.allowX;
      if (this.positionChanged) {
        originalX = this.left / (this.scale - scaleDiff);
        originalY = this.top / (this.scale - scaleDiff);
        this.pageX = offsetX - originalX;
        this.pageY = offsetY - originalY;
        this.positionChanged = false;
      }
      var possibleSwipeCords = this.getPossibleSwipeDragCords(scaleDiff);
      var x;
      var y;
      var _x = offsetX - this.pageX;
      var _y = offsetY - this.pageY;
      if (scale - scaleDiff > 1) {
        var scaleVal = (scale - scaleDiff) / Math.abs(scaleDiff);
        _x = (scaleDiff < 0 ? -_x : _x) + this.left * (scaleVal + (scaleDiff < 0 ? -1 : 1));
        _y = (scaleDiff < 0 ? -_y : _y) + this.top * (scaleVal + (scaleDiff < 0 ? -1 : 1));
        x = _x / scaleVal;
        y = _y / scaleVal;
      } else {
        var scaleVal = (scale - scaleDiff) * scaleDiff;
        x = _x * scaleVal;
        y = _y * scaleVal;
      }
      if (reposition) {
        if (allowX) {
          if (this.isBeyondPossibleLeft(x, possibleSwipeCords.minX)) {
            x = possibleSwipeCords.minX;
          } else if (this.isBeyondPossibleRight(x, possibleSwipeCords.maxX)) {
            x = possibleSwipeCords.maxX;
          }
        } else {
          if (scale > 1) {
            if (x < possibleSwipeCords.minX) {
              x = possibleSwipeCords.minX;
            } else if (x > possibleSwipeCords.maxX) {
              x = possibleSwipeCords.maxX;
            }
          }
        }
        if (allowY) {
          if (this.isBeyondPossibleTop(y, possibleSwipeCords.minY)) {
            y = possibleSwipeCords.minY;
          } else if (this.isBeyondPossibleBottom(y, possibleSwipeCords.maxY)) {
            y = possibleSwipeCords.maxY;
          }
        } else {
          if (scale > 1) {
            if (y < possibleSwipeCords.minY) {
              y = possibleSwipeCords.minY;
            } else if (y > possibleSwipeCords.maxY) {
              y = possibleSwipeCords.maxY;
            }
          }
        }
      }
      this.setZoomStyles({
        x,
        y,
        scale
      });
      this.left = x;
      this.top = y;
      if (resetToMax) {
        this.setZoomImageSize();
      }
    };
    Zoom3.prototype.resetImageTranslate = function(index) {
      if (!this.isImageSlide(index)) {
        return;
      }
      var $image = this.core.getSlideItem(index).find(".lg-image").first();
      this.imageReset = false;
      $image.removeClass("reset-transition reset-transition-y reset-transition-x");
      this.core.outer.removeClass("lg-actual-size");
      $image.css("width", "auto").css("height", "auto");
      setTimeout(function() {
        $image.removeClass("no-transition");
      }, 10);
    };
    Zoom3.prototype.setZoomImageSize = function() {
      var _this = this;
      var $image = this.core.getSlideItem(this.core.index).find(".lg-image").first();
      setTimeout(function() {
        var actualSizeScale = _this.getCurrentImageActualSizeScale();
        if (_this.scale >= actualSizeScale) {
          $image.addClass("no-transition");
          _this.imageReset = true;
        }
      }, ZOOM_TRANSITION_DURATION);
      setTimeout(function() {
        var actualSizeScale = _this.getCurrentImageActualSizeScale();
        if (_this.scale >= actualSizeScale) {
          var dragAllowedAxises = _this.getDragAllowedAxises(_this.scale);
          $image.css("width", $image.get().naturalWidth + "px").css("height", $image.get().naturalHeight + "px");
          _this.core.outer.addClass("lg-actual-size");
          if (dragAllowedAxises.allowX && dragAllowedAxises.allowY) {
            $image.addClass("reset-transition");
          } else if (dragAllowedAxises.allowX && !dragAllowedAxises.allowY) {
            $image.addClass("reset-transition-x");
          } else if (!dragAllowedAxises.allowX && dragAllowedAxises.allowY) {
            $image.addClass("reset-transition-y");
          }
        }
      }, ZOOM_TRANSITION_DURATION + 50);
    };
    Zoom3.prototype.setZoomStyles = function(style) {
      var $imageWrap = this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first();
      var $image = this.core.getSlideItem(this.core.index).find(".lg-image").first();
      var $dummyImage = this.core.outer.find(".lg-current .lg-dummy-img").first();
      this.scale = style.scale;
      $image.css("transform", "scale3d(" + style.scale + ", " + style.scale + ", 1)");
      $dummyImage.css("transform", "scale3d(" + style.scale + ", " + style.scale + ", 1)");
      var transform = "translate3d(" + style.x + "px, " + style.y + "px, 0)";
      $imageWrap.css("transform", transform);
    };
    Zoom3.prototype.setActualSize = function(index, event2) {
      var _this = this;
      if (this.zoomInProgress) {
        return;
      }
      this.zoomInProgress = true;
      var currentItem = this.core.galleryItems[this.core.index];
      this.resetImageTranslate(index);
      setTimeout(function() {
        if (!currentItem.src || _this.core.outer.hasClass("lg-first-slide-loading")) {
          return;
        }
        var scale = _this.getCurrentImageActualSizeScale();
        var prevScale = _this.scale;
        if (_this.core.outer.hasClass("lg-zoomed")) {
          _this.scale = 1;
        } else {
          _this.scale = _this.getScale(scale);
        }
        _this.setPageCords(event2);
        _this.beginZoom(_this.scale);
        _this.zoomImage(_this.scale, _this.scale - prevScale, true, true);
      }, 50);
      setTimeout(function() {
        _this.core.outer.removeClass("lg-grabbing").addClass("lg-grab");
      }, 60);
      setTimeout(function() {
        _this.zoomInProgress = false;
      }, ZOOM_TRANSITION_DURATION + 110);
    };
    Zoom3.prototype.getNaturalWidth = function(index) {
      var $image = this.core.getSlideItem(index).find(".lg-image").first();
      var naturalWidth = this.core.galleryItems[index].width;
      return naturalWidth ? parseFloat(naturalWidth) : $image.get().naturalWidth;
    };
    Zoom3.prototype.getActualSizeScale = function(naturalWidth, width) {
      var _scale;
      var scale;
      if (naturalWidth >= width) {
        _scale = naturalWidth / width;
        scale = _scale || 2;
      } else {
        scale = 1;
      }
      return scale;
    };
    Zoom3.prototype.getCurrentImageActualSizeScale = function() {
      var $image = this.core.getSlideItem(this.core.index).find(".lg-image").first();
      var width = $image.get().offsetWidth;
      var naturalWidth = this.getNaturalWidth(this.core.index) || width;
      return this.getActualSizeScale(naturalWidth, width);
    };
    Zoom3.prototype.getPageCords = function(event2) {
      var cords = {};
      if (event2) {
        cords.x = event2.pageX || event2.touches[0].pageX;
        cords.y = event2.pageY || event2.touches[0].pageY;
      } else {
        var containerRect = this.core.$content.get().getBoundingClientRect();
        cords.x = containerRect.width / 2 + containerRect.left;
        cords.y = containerRect.height / 2 + this.scrollTop + containerRect.top;
      }
      return cords;
    };
    Zoom3.prototype.setPageCords = function(event2) {
      var pageCords = this.getPageCords(event2);
      this.pageX = pageCords.x;
      this.pageY = pageCords.y;
    };
    Zoom3.prototype.manageActualPixelClassNames = function() {
      var $actualSize = this.core.getElementById("lg-actual-size");
      $actualSize.removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut);
    };
    Zoom3.prototype.beginZoom = function(scale) {
      this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging");
      if (scale > 1) {
        this.core.outer.addClass("lg-zoomed");
        this.manageActualPixelClassNames();
      } else {
        this.resetZoom();
      }
      return scale > 1;
    };
    Zoom3.prototype.getScale = function(scale) {
      var actualSizeScale = this.getCurrentImageActualSizeScale();
      if (scale < 1) {
        scale = 1;
      } else if (scale > actualSizeScale) {
        scale = actualSizeScale;
      }
      return scale;
    };
    Zoom3.prototype.init = function() {
      var _this = this;
      if (!this.settings.zoom) {
        return;
      }
      this.buildTemplates();
      this.enableZoomOnSlideItemLoad();
      var tapped = null;
      this.core.outer.on("dblclick.lg", function(event2) {
        if (!_this.$LG(event2.target).hasClass("lg-image")) {
          return;
        }
        _this.setActualSize(_this.core.index, event2);
      });
      this.core.outer.on("touchstart.lg", function(event2) {
        var $target = _this.$LG(event2.target);
        if (event2.touches.length === 1 && $target.hasClass("lg-image")) {
          if (!tapped) {
            tapped = setTimeout(function() {
              tapped = null;
            }, 300);
          } else {
            clearTimeout(tapped);
            tapped = null;
            event2.preventDefault();
            _this.setActualSize(_this.core.index, event2);
          }
        }
      });
      this.core.LGel.on(lGEvents.containerResize + ".zoom " + lGEvents.rotateRight + ".zoom " + lGEvents.rotateLeft + ".zoom " + lGEvents.flipHorizontal + ".zoom " + lGEvents.flipVertical + ".zoom", function() {
        if (!_this.core.lgOpened || !_this.isImageSlide(_this.core.index) || _this.core.touchAction) {
          return;
        }
        var _LGel = _this.core.getSlideItem(_this.core.index).find(".lg-img-wrap").first();
        _this.top = 0;
        _this.left = 0;
        _this.setZoomEssentials();
        _this.setZoomSwipeStyles(_LGel, { x: 0, y: 0 });
        _this.positionChanged = true;
      });
      this.$LG(window).on("scroll.lg.zoom.global" + this.core.lgId, function() {
        if (!_this.core.lgOpened)
          return;
        _this.scrollTop = _this.$LG(window).scrollTop();
      });
      this.core.getElementById("lg-zoom-out").on("click.lg", function() {
        if (!_this.isImageSlide(_this.core.index)) {
          return;
        }
        var timeout = 0;
        if (_this.imageReset) {
          _this.resetImageTranslate(_this.core.index);
          timeout = 50;
        }
        setTimeout(function() {
          var scale = _this.scale - _this.settings.scale;
          if (scale < 1) {
            scale = 1;
          }
          _this.beginZoom(scale);
          _this.zoomImage(scale, -_this.settings.scale, true, !_this.settings.infiniteZoom);
        }, timeout);
      });
      this.core.getElementById("lg-zoom-in").on("click.lg", function() {
        _this.zoomIn();
      });
      this.core.getElementById("lg-actual-size").on("click.lg", function() {
        _this.setActualSize(_this.core.index);
      });
      this.core.LGel.on(lGEvents.beforeOpen + ".zoom", function() {
        _this.core.outer.find(".lg-item").removeClass("lg-zoomable");
      });
      this.core.LGel.on(lGEvents.afterOpen + ".zoom", function() {
        _this.scrollTop = _this.$LG(window).scrollTop();
        _this.pageX = _this.core.outer.width() / 2;
        _this.pageY = _this.core.outer.height() / 2 + _this.scrollTop;
        _this.scale = 1;
      });
      this.core.LGel.on(lGEvents.afterSlide + ".zoom", function(event2) {
        var prevIndex = event2.detail.prevIndex;
        _this.scale = 1;
        _this.positionChanged = false;
        _this.zoomInProgress = false;
        _this.resetZoom(prevIndex);
        _this.resetImageTranslate(prevIndex);
        if (_this.isImageSlide(_this.core.index)) {
          _this.setZoomEssentials();
        }
      });
      this.zoomDrag();
      this.pinchZoom();
      this.zoomSwipe();
      this.zoomableTimeout = false;
      this.positionChanged = false;
      this.zoomInProgress = false;
    };
    Zoom3.prototype.zoomIn = function() {
      if (!this.isImageSlide(this.core.index)) {
        return;
      }
      var scale = this.scale + this.settings.scale;
      if (!this.settings.infiniteZoom) {
        scale = this.getScale(scale);
      }
      this.beginZoom(scale);
      this.zoomImage(scale, Math.min(this.settings.scale, scale - this.scale), true, !this.settings.infiniteZoom);
    };
    Zoom3.prototype.resetZoom = function(index) {
      this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition");
      var $actualSize = this.core.getElementById("lg-actual-size");
      var $item = this.core.getSlideItem(index !== void 0 ? index : this.core.index);
      $actualSize.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn);
      $item.find(".lg-img-wrap").first().removeAttr("style");
      $item.find(".lg-image").first().removeAttr("style");
      this.scale = 1;
      this.left = 0;
      this.top = 0;
      this.setPageCords();
    };
    Zoom3.prototype.getTouchDistance = function(e) {
      return Math.sqrt((e.touches[0].pageX - e.touches[1].pageX) * (e.touches[0].pageX - e.touches[1].pageX) + (e.touches[0].pageY - e.touches[1].pageY) * (e.touches[0].pageY - e.touches[1].pageY));
    };
    Zoom3.prototype.pinchZoom = function() {
      var _this = this;
      var startDist = 0;
      var pinchStarted = false;
      var initScale = 1;
      var prevScale = 0;
      var $item = this.core.getSlideItem(this.core.index);
      this.core.outer.on("touchstart.lg", function(e) {
        $item = _this.core.getSlideItem(_this.core.index);
        if (!_this.isImageSlide(_this.core.index)) {
          return;
        }
        if (e.touches.length === 2) {
          e.preventDefault();
          if (_this.core.outer.hasClass("lg-first-slide-loading")) {
            return;
          }
          initScale = _this.scale || 1;
          _this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging");
          _this.setPageCords(e);
          _this.resetImageTranslate(_this.core.index);
          _this.core.touchAction = "pinch";
          startDist = _this.getTouchDistance(e);
        }
      });
      this.core.$inner.on("touchmove.lg", function(e) {
        if (e.touches.length === 2 && _this.core.touchAction === "pinch" && (_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target))) {
          e.preventDefault();
          var endDist = _this.getTouchDistance(e);
          var distance = startDist - endDist;
          if (!pinchStarted && Math.abs(distance) > 5) {
            pinchStarted = true;
          }
          if (pinchStarted) {
            prevScale = _this.scale;
            var _scale = Math.max(1, initScale + -distance * 0.02);
            _this.scale = Math.round((_scale + Number.EPSILON) * 100) / 100;
            var diff = _this.scale - prevScale;
            _this.zoomImage(_this.scale, Math.round((diff + Number.EPSILON) * 100) / 100, false, false);
          }
        }
      });
      this.core.$inner.on("touchend.lg", function(e) {
        if (_this.core.touchAction === "pinch" && (_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target))) {
          pinchStarted = false;
          startDist = 0;
          if (_this.scale <= 1) {
            _this.resetZoom();
          } else {
            var actualSizeScale = _this.getCurrentImageActualSizeScale();
            if (_this.scale >= actualSizeScale) {
              var scaleDiff = actualSizeScale - _this.scale;
              if (scaleDiff === 0) {
                scaleDiff = 0.01;
              }
              _this.zoomImage(actualSizeScale, scaleDiff, false, true);
            }
            _this.manageActualPixelClassNames();
            _this.core.outer.addClass("lg-zoomed");
          }
          _this.core.touchAction = void 0;
        }
      });
    };
    Zoom3.prototype.touchendZoom = function(startCoords, endCoords, allowX, allowY, touchDuration) {
      var distanceXnew = endCoords.x - startCoords.x;
      var distanceYnew = endCoords.y - startCoords.y;
      var speedX = Math.abs(distanceXnew) / touchDuration + 1;
      var speedY = Math.abs(distanceYnew) / touchDuration + 1;
      if (speedX > 2) {
        speedX += 1;
      }
      if (speedY > 2) {
        speedY += 1;
      }
      distanceXnew = distanceXnew * speedX;
      distanceYnew = distanceYnew * speedY;
      var _LGel = this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first();
      var distance = {};
      distance.x = this.left + distanceXnew;
      distance.y = this.top + distanceYnew;
      var possibleSwipeCords = this.getPossibleSwipeDragCords();
      if (Math.abs(distanceXnew) > 15 || Math.abs(distanceYnew) > 15) {
        if (allowY) {
          if (this.isBeyondPossibleTop(distance.y, possibleSwipeCords.minY)) {
            distance.y = possibleSwipeCords.minY;
          } else if (this.isBeyondPossibleBottom(distance.y, possibleSwipeCords.maxY)) {
            distance.y = possibleSwipeCords.maxY;
          }
        }
        if (allowX) {
          if (this.isBeyondPossibleLeft(distance.x, possibleSwipeCords.minX)) {
            distance.x = possibleSwipeCords.minX;
          } else if (this.isBeyondPossibleRight(distance.x, possibleSwipeCords.maxX)) {
            distance.x = possibleSwipeCords.maxX;
          }
        }
        if (allowY) {
          this.top = distance.y;
        } else {
          distance.y = this.top;
        }
        if (allowX) {
          this.left = distance.x;
        } else {
          distance.x = this.left;
        }
        this.setZoomSwipeStyles(_LGel, distance);
        this.positionChanged = true;
      }
    };
    Zoom3.prototype.getZoomSwipeCords = function(startCoords, endCoords, allowX, allowY, possibleSwipeCords) {
      var distance = {};
      if (allowY) {
        distance.y = this.top + (endCoords.y - startCoords.y);
        if (this.isBeyondPossibleTop(distance.y, possibleSwipeCords.minY)) {
          var diffMinY = possibleSwipeCords.minY - distance.y;
          distance.y = possibleSwipeCords.minY - diffMinY / 6;
        } else if (this.isBeyondPossibleBottom(distance.y, possibleSwipeCords.maxY)) {
          var diffMaxY = distance.y - possibleSwipeCords.maxY;
          distance.y = possibleSwipeCords.maxY + diffMaxY / 6;
        }
      } else {
        distance.y = this.top;
      }
      if (allowX) {
        distance.x = this.left + (endCoords.x - startCoords.x);
        if (this.isBeyondPossibleLeft(distance.x, possibleSwipeCords.minX)) {
          var diffMinX = possibleSwipeCords.minX - distance.x;
          distance.x = possibleSwipeCords.minX - diffMinX / 6;
        } else if (this.isBeyondPossibleRight(distance.x, possibleSwipeCords.maxX)) {
          var difMaxX = distance.x - possibleSwipeCords.maxX;
          distance.x = possibleSwipeCords.maxX + difMaxX / 6;
        }
      } else {
        distance.x = this.left;
      }
      return distance;
    };
    Zoom3.prototype.isBeyondPossibleLeft = function(x, minX) {
      return x >= minX;
    };
    Zoom3.prototype.isBeyondPossibleRight = function(x, maxX) {
      return x <= maxX;
    };
    Zoom3.prototype.isBeyondPossibleTop = function(y, minY) {
      return y >= minY;
    };
    Zoom3.prototype.isBeyondPossibleBottom = function(y, maxY) {
      return y <= maxY;
    };
    Zoom3.prototype.isImageSlide = function(index) {
      var currentItem = this.core.galleryItems[index];
      return this.core.getSlideType(currentItem) === "image";
    };
    Zoom3.prototype.getPossibleSwipeDragCords = function(scale) {
      var $image = this.core.getSlideItem(this.core.index).find(".lg-image").first();
      var bottom = this.core.mediaContainerPosition.bottom;
      var imgRect = $image.get().getBoundingClientRect();
      var imageHeight = imgRect.height;
      var imageWidth = imgRect.width;
      if (scale) {
        imageHeight = imageHeight + scale * imageHeight;
        imageWidth = imageWidth + scale * imageWidth;
      }
      var minY = (imageHeight - this.containerRect.height) / 2;
      var maxY = (this.containerRect.height - imageHeight) / 2 + bottom;
      var minX = (imageWidth - this.containerRect.width) / 2;
      var maxX = (this.containerRect.width - imageWidth) / 2;
      var possibleSwipeCords = {
        minY,
        maxY,
        minX,
        maxX
      };
      return possibleSwipeCords;
    };
    Zoom3.prototype.setZoomSwipeStyles = function(LGel, distance) {
      LGel.css("transform", "translate3d(" + distance.x + "px, " + distance.y + "px, 0)");
    };
    Zoom3.prototype.zoomSwipe = function() {
      var _this = this;
      var startCoords = {};
      var endCoords = {};
      var isMoved = false;
      var allowX = false;
      var allowY = false;
      var startTime = /* @__PURE__ */ new Date();
      var endTime = /* @__PURE__ */ new Date();
      var possibleSwipeCords;
      var _LGel;
      var $item = this.core.getSlideItem(this.core.index);
      this.core.$inner.on("touchstart.lg", function(e) {
        if (!_this.isImageSlide(_this.core.index)) {
          return;
        }
        $item = _this.core.getSlideItem(_this.core.index);
        if ((_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) && e.touches.length === 1 && _this.core.outer.hasClass("lg-zoomed")) {
          e.preventDefault();
          startTime = /* @__PURE__ */ new Date();
          _this.core.touchAction = "zoomSwipe";
          _LGel = _this.core.getSlideItem(_this.core.index).find(".lg-img-wrap").first();
          var dragAllowedAxises = _this.getDragAllowedAxises(0);
          allowY = dragAllowedAxises.allowY;
          allowX = dragAllowedAxises.allowX;
          if (allowX || allowY) {
            startCoords = _this.getSwipeCords(e);
          }
          possibleSwipeCords = _this.getPossibleSwipeDragCords();
          _this.core.outer.addClass("lg-zoom-dragging lg-zoom-drag-transition");
        }
      });
      this.core.$inner.on("touchmove.lg", function(e) {
        if (e.touches.length === 1 && _this.core.touchAction === "zoomSwipe" && (_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target))) {
          e.preventDefault();
          _this.core.touchAction = "zoomSwipe";
          endCoords = _this.getSwipeCords(e);
          var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords);
          if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {
            isMoved = true;
            _this.setZoomSwipeStyles(_LGel, distance);
          }
        }
      });
      this.core.$inner.on("touchend.lg", function(e) {
        if (_this.core.touchAction === "zoomSwipe" && (_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target))) {
          e.preventDefault();
          _this.core.touchAction = void 0;
          _this.core.outer.removeClass("lg-zoom-dragging");
          if (!isMoved) {
            return;
          }
          isMoved = false;
          endTime = /* @__PURE__ */ new Date();
          var touchDuration = endTime.valueOf() - startTime.valueOf();
          _this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration);
        }
      });
    };
    Zoom3.prototype.zoomDrag = function() {
      var _this = this;
      var startCoords = {};
      var endCoords = {};
      var isDragging = false;
      var isMoved = false;
      var allowX = false;
      var allowY = false;
      var startTime;
      var endTime;
      var possibleSwipeCords;
      var _LGel;
      this.core.outer.on("mousedown.lg.zoom", function(e) {
        if (!_this.isImageSlide(_this.core.index)) {
          return;
        }
        var $item = _this.core.getSlideItem(_this.core.index);
        if (_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) {
          startTime = /* @__PURE__ */ new Date();
          _LGel = _this.core.getSlideItem(_this.core.index).find(".lg-img-wrap").first();
          var dragAllowedAxises = _this.getDragAllowedAxises(0);
          allowY = dragAllowedAxises.allowY;
          allowX = dragAllowedAxises.allowX;
          if (_this.core.outer.hasClass("lg-zoomed")) {
            if (_this.$LG(e.target).hasClass("lg-object") && (allowX || allowY)) {
              e.preventDefault();
              startCoords = _this.getDragCords(e);
              possibleSwipeCords = _this.getPossibleSwipeDragCords();
              isDragging = true;
              _this.core.outer.removeClass("lg-grab").addClass("lg-grabbing lg-zoom-drag-transition lg-zoom-dragging");
            }
          }
        }
      });
      this.$LG(window).on("mousemove.lg.zoom.global" + this.core.lgId, function(e) {
        if (isDragging) {
          isMoved = true;
          endCoords = _this.getDragCords(e);
          var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords);
          _this.setZoomSwipeStyles(_LGel, distance);
        }
      });
      this.$LG(window).on("mouseup.lg.zoom.global" + this.core.lgId, function(e) {
        if (isDragging) {
          endTime = /* @__PURE__ */ new Date();
          isDragging = false;
          _this.core.outer.removeClass("lg-zoom-dragging");
          if (isMoved && (startCoords.x !== endCoords.x || startCoords.y !== endCoords.y)) {
            endCoords = _this.getDragCords(e);
            var touchDuration = endTime.valueOf() - startTime.valueOf();
            _this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration);
          }
          isMoved = false;
        }
        _this.core.outer.removeClass("lg-grabbing").addClass("lg-grab");
      });
    };
    Zoom3.prototype.closeGallery = function() {
      this.resetZoom();
      this.zoomInProgress = false;
    };
    Zoom3.prototype.destroy = function() {
      this.$LG(window).off(".lg.zoom.global" + this.core.lgId);
      this.core.LGel.off(".lg.zoom");
      this.core.LGel.off(".zoom");
      clearTimeout(this.zoomableTimeout);
      this.zoomableTimeout = false;
    };
    return Zoom3;
  })()
);
var lg_zoom_es5_default = Zoom;

// node_modules/lightgallery/plugins/video/lg-video.es5.js
var __assign2 = function() {
  __assign2 = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var videoSettings = {
  autoplayFirstVideo: true,
  youTubePlayerParams: false,
  vimeoPlayerParams: false,
  wistiaPlayerParams: false,
  gotoNextSlideOnVideoEnd: true,
  autoplayVideoOnSlide: false,
  videojs: false,
  videojsTheme: "",
  videojsOptions: {}
};
var lGEvents2 = {
  afterAppendSlide: "lgAfterAppendSlide",
  init: "lgInit",
  hasVideo: "lgHasVideo",
  containerResize: "lgContainerResize",
  updateSlides: "lgUpdateSlides",
  afterAppendSubHtml: "lgAfterAppendSubHtml",
  beforeOpen: "lgBeforeOpen",
  afterOpen: "lgAfterOpen",
  slideItemLoad: "lgSlideItemLoad",
  beforeSlide: "lgBeforeSlide",
  afterSlide: "lgAfterSlide",
  posterClick: "lgPosterClick",
  dragStart: "lgDragStart",
  dragMove: "lgDragMove",
  dragEnd: "lgDragEnd",
  beforeNextSlide: "lgBeforeNextSlide",
  beforePrevSlide: "lgBeforePrevSlide",
  beforeClose: "lgBeforeClose",
  afterClose: "lgAfterClose",
  rotateLeft: "lgRotateLeft",
  rotateRight: "lgRotateRight",
  flipHorizontal: "lgFlipHorizontal",
  flipVertical: "lgFlipVertical",
  autoplay: "lgAutoplay",
  autoplayStart: "lgAutoplayStart",
  autoplayStop: "lgAutoplayStop"
};
var param = function(obj) {
  return Object.keys(obj).map(function(k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
  }).join("&");
};
var paramsToObject = function(url) {
  var paramas = url.slice(1).split("&").map(function(p) {
    return p.split("=");
  }).reduce(function(obj, pair) {
    var _a = pair.map(decodeURIComponent), key = _a[0], value = _a[1];
    obj[key] = value;
    return obj;
  }, {});
  return paramas;
};
var getYouTubeParams = function(videoInfo, youTubePlayerParamsSettings) {
  if (!videoInfo.youtube)
    return "";
  var slideUrlParams = videoInfo.youtube[2] ? paramsToObject(videoInfo.youtube[2]) : "";
  var defaultYouTubePlayerParams = {
    wmode: "opaque",
    autoplay: 0,
    mute: 1,
    enablejsapi: 1
  };
  var playerParamsSettings = youTubePlayerParamsSettings || {};
  var youTubePlayerParams = __assign2(__assign2(__assign2({}, defaultYouTubePlayerParams), playerParamsSettings), slideUrlParams);
  var youTubeParams = "?" + param(youTubePlayerParams);
  return youTubeParams;
};
var isYouTubeNoCookie = function(url) {
  return url.includes("youtube-nocookie.com");
};
var getVimeoURLParams = function(defaultParams, videoInfo) {
  if (!videoInfo || !videoInfo.vimeo)
    return "";
  var urlParams = videoInfo.vimeo[2] || "";
  var defaultVimeoPlayerParams = Object.assign({}, {
    autoplay: 0,
    muted: 1
  }, defaultParams);
  var defaultPlayerParams = defaultVimeoPlayerParams && Object.keys(defaultVimeoPlayerParams).length !== 0 ? param(defaultVimeoPlayerParams) : "";
  var urlWithHash = videoInfo.vimeo[0].split("/").pop() || "";
  var urlWithHashWithParams = urlWithHash.split("?")[0] || "";
  var hash = urlWithHashWithParams.split("#")[0];
  var isPrivate = videoInfo.vimeo[1] !== hash;
  if (isPrivate) {
    urlParams = urlParams.replace("/" + hash, "");
  }
  urlParams = urlParams[0] == "?" ? "&" + urlParams.slice(1) : urlParams || "";
  var privateUrlParams = isPrivate ? "h=" + hash : "";
  defaultPlayerParams = privateUrlParams ? "&" + defaultPlayerParams : defaultPlayerParams;
  var vimeoPlayerParams = "?" + privateUrlParams + defaultPlayerParams + urlParams;
  return vimeoPlayerParams;
};
var Video = (
  /** @class */
  (function() {
    function Video2(instance) {
      this.core = instance;
      this.settings = __assign2(__assign2({}, videoSettings), this.core.settings);
      return this;
    }
    Video2.prototype.init = function() {
      var _this = this;
      this.core.LGel.on(lGEvents2.hasVideo + ".video", this.onHasVideo.bind(this));
      this.core.LGel.on(lGEvents2.posterClick + ".video", function() {
        var $el = _this.core.getSlideItem(_this.core.index);
        _this.loadVideoOnPosterClick($el);
      });
      this.core.LGel.on(lGEvents2.slideItemLoad + ".video", this.onSlideItemLoad.bind(this));
      this.core.LGel.on(lGEvents2.beforeSlide + ".video", this.onBeforeSlide.bind(this));
      this.core.LGel.on(lGEvents2.afterSlide + ".video", this.onAfterSlide.bind(this));
    };
    Video2.prototype.onSlideItemLoad = function(event2) {
      var _this = this;
      var _a = event2.detail, isFirstSlide = _a.isFirstSlide, index = _a.index;
      if (this.settings.autoplayFirstVideo && isFirstSlide && index === this.core.index) {
        setTimeout(function() {
          _this.loadAndPlayVideo(index);
        }, 200);
      }
      if (!isFirstSlide && this.settings.autoplayVideoOnSlide && index === this.core.index) {
        this.loadAndPlayVideo(index);
      }
    };
    Video2.prototype.onHasVideo = function(event2) {
      var _a = event2.detail, index = _a.index, src = _a.src, html5Video = _a.html5Video, hasPoster = _a.hasPoster;
      if (!hasPoster) {
        this.appendVideos(this.core.getSlideItem(index), {
          src,
          addClass: "lg-object",
          index,
          html5Video
        });
        this.gotoNextSlideOnVideoEnd(src, index);
      }
    };
    Video2.prototype.onBeforeSlide = function(event2) {
      if (this.core.lGalleryOn) {
        var prevIndex = event2.detail.prevIndex;
        this.pauseVideo(prevIndex);
      }
    };
    Video2.prototype.onAfterSlide = function(event2) {
      var _this = this;
      var _a = event2.detail, index = _a.index, prevIndex = _a.prevIndex;
      var $slide = this.core.getSlideItem(index);
      if (this.settings.autoplayVideoOnSlide && index !== prevIndex) {
        if ($slide.hasClass("lg-complete")) {
          setTimeout(function() {
            _this.loadAndPlayVideo(index);
          }, 100);
        }
      }
    };
    Video2.prototype.loadAndPlayVideo = function(index) {
      var $slide = this.core.getSlideItem(index);
      var currentGalleryItem = this.core.galleryItems[index];
      if (currentGalleryItem.poster) {
        this.loadVideoOnPosterClick($slide, true);
      } else {
        this.playVideo(index);
      }
    };
    Video2.prototype.playVideo = function(index) {
      this.controlVideo(index, "play");
    };
    Video2.prototype.pauseVideo = function(index) {
      this.controlVideo(index, "pause");
    };
    Video2.prototype.getVideoHtml = function(src, addClass, index, html5Video) {
      var video = "";
      var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
      var currentGalleryItem = this.core.galleryItems[index];
      var videoTitle = currentGalleryItem.title || currentGalleryItem.alt;
      videoTitle = videoTitle ? 'title="' + videoTitle + '"' : "";
      var commonIframeProps = 'allowtransparency="true"\n            frameborder="0"\n            scrolling="no"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen';
      if (videoInfo.youtube) {
        var videoId = "lg-youtube" + index;
        var youTubeParams = getYouTubeParams(videoInfo, this.settings.youTubePlayerParams);
        var isYouTubeNoCookieURL = isYouTubeNoCookie(src);
        var youtubeURL = isYouTubeNoCookieURL ? "//www.youtube-nocookie.com/" : "//www.youtube.com/";
        video = '<iframe allow="autoplay" id=' + videoId + ' class="lg-video-object lg-youtube ' + addClass + '" ' + videoTitle + ' src="' + youtubeURL + "embed/" + (videoInfo.youtube[1] + youTubeParams) + '" ' + commonIframeProps + "></iframe>";
      } else if (videoInfo.vimeo) {
        var videoId = "lg-vimeo" + index;
        var playerParams = getVimeoURLParams(this.settings.vimeoPlayerParams, videoInfo);
        video = '<iframe allow="autoplay" id=' + videoId + ' class="lg-video-object lg-vimeo ' + addClass + '" ' + videoTitle + ' src="//player.vimeo.com/video/' + (videoInfo.vimeo[1] + playerParams) + '" ' + commonIframeProps + "></iframe>";
      } else if (videoInfo.wistia) {
        var wistiaId = "lg-wistia" + index;
        var playerParams = param(this.settings.wistiaPlayerParams);
        playerParams = playerParams ? "?" + playerParams : "";
        video = '<iframe allow="autoplay" id="' + wistiaId + '" src="//fast.wistia.net/embed/iframe/' + (videoInfo.wistia[4] + playerParams) + '" ' + videoTitle + ' class="wistia_embed lg-video-object lg-wistia ' + addClass + '" name="wistia_embed" ' + commonIframeProps + "></iframe>";
      } else if (videoInfo.html5) {
        var html5VideoMarkup = "";
        for (var i = 0; i < html5Video.source.length; i++) {
          var type = html5Video.source[i].type;
          var typeAttr = type ? 'type="' + type + '"' : "";
          html5VideoMarkup += '<source src="' + html5Video.source[i].src + '" ' + typeAttr + ">";
        }
        if (html5Video.tracks) {
          var _loop_1 = function(i2) {
            var trackAttributes = "";
            var track = html5Video.tracks[i2];
            Object.keys(track || {}).forEach(function(key) {
              trackAttributes += key + '="' + track[key] + '" ';
            });
            html5VideoMarkup += "<track " + trackAttributes + ">";
          };
          for (var i = 0; i < html5Video.tracks.length; i++) {
            _loop_1(i);
          }
        }
        var html5VideoAttrs_1 = "";
        var videoAttributes_1 = html5Video.attributes || {};
        Object.keys(videoAttributes_1 || {}).forEach(function(key) {
          html5VideoAttrs_1 += key + '="' + videoAttributes_1[key] + '" ';
        });
        video = '<video class="lg-video-object lg-html5 ' + (this.settings.videojs && this.settings.videojsTheme ? this.settings.videojsTheme + " " : "") + " " + (this.settings.videojs ? " video-js" : "") + '" ' + html5VideoAttrs_1 + ">\n                " + html5VideoMarkup + "\n                Your browser does not support HTML5 video.\n            </video>";
      }
      return video;
    };
    Video2.prototype.appendVideos = function(el, videoParams) {
      var _a;
      var videoHtml = this.getVideoHtml(videoParams.src, videoParams.addClass, videoParams.index, videoParams.html5Video);
      el.find(".lg-video-cont").append(videoHtml);
      var $videoElement = el.find(".lg-video-object").first();
      if (videoParams.html5Video) {
        $videoElement.on("mousedown.lg.video", function(e) {
          e.stopPropagation();
        });
      }
      if (this.settings.videojs && ((_a = this.core.galleryItems[videoParams.index].__slideVideoInfo) === null || _a === void 0 ? void 0 : _a.html5)) {
        try {
          return videojs($videoElement.get(), this.settings.videojsOptions);
        } catch (e) {
          console.error("lightGallery:- Make sure you have included videojs");
        }
      }
    };
    Video2.prototype.gotoNextSlideOnVideoEnd = function(src, index) {
      var _this = this;
      var $videoElement = this.core.getSlideItem(index).find(".lg-video-object").first();
      var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
      if (this.settings.gotoNextSlideOnVideoEnd) {
        if (videoInfo.html5) {
          $videoElement.on("ended", function() {
            _this.core.goToNextSlide();
          });
        } else if (videoInfo.vimeo) {
          try {
            new Vimeo.Player($videoElement.get()).on("ended", function() {
              _this.core.goToNextSlide();
            });
          } catch (e) {
            console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js");
          }
        } else if (videoInfo.wistia) {
          try {
            window._wq = window._wq || [];
            window._wq.push({
              id: $videoElement.attr("id"),
              onReady: function(video) {
                video.bind("end", function() {
                  _this.core.goToNextSlide();
                });
              }
            });
          } catch (e) {
            console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js");
          }
        }
      }
    };
    Video2.prototype.controlVideo = function(index, action) {
      var $videoElement = this.core.getSlideItem(index).find(".lg-video-object").first();
      var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
      if (!$videoElement.get())
        return;
      if (videoInfo.youtube) {
        try {
          $videoElement.get().contentWindow.postMessage('{"event":"command","func":"' + action + 'Video","args":""}', "*");
        } catch (e) {
          console.error("lightGallery:- " + e);
        }
      } else if (videoInfo.vimeo) {
        try {
          new Vimeo.Player($videoElement.get())[action]();
        } catch (e) {
          console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js");
        }
      } else if (videoInfo.html5) {
        if (this.settings.videojs) {
          try {
            videojs($videoElement.get())[action]();
          } catch (e) {
            console.error("lightGallery:- Make sure you have included videojs");
          }
        } else {
          $videoElement.get()[action]();
        }
      } else if (videoInfo.wistia) {
        try {
          window._wq = window._wq || [];
          window._wq.push({
            id: $videoElement.attr("id"),
            onReady: function(video) {
              video[action]();
            }
          });
        } catch (e) {
          console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js");
        }
      }
    };
    Video2.prototype.loadVideoOnPosterClick = function($el, forcePlay) {
      var _this = this;
      if (!$el.hasClass("lg-video-loaded")) {
        if (!$el.hasClass("lg-has-video")) {
          $el.addClass("lg-has-video");
          var _html = void 0;
          var _src = this.core.galleryItems[this.core.index].src;
          var video = this.core.galleryItems[this.core.index].video;
          if (video) {
            _html = typeof video === "string" ? JSON.parse(video) : video;
          }
          var videoJsPlayer_1 = this.appendVideos($el, {
            src: _src,
            addClass: "",
            index: this.core.index,
            html5Video: _html
          });
          this.gotoNextSlideOnVideoEnd(_src, this.core.index);
          var $tempImg = $el.find(".lg-object").first().get();
          $el.find(".lg-video-cont").first().append($tempImg);
          $el.addClass("lg-video-loading");
          videoJsPlayer_1 && videoJsPlayer_1.ready(function() {
            videoJsPlayer_1.on("loadedmetadata", function() {
              _this.onVideoLoadAfterPosterClick($el, _this.core.index);
            });
          });
          $el.find(".lg-video-object").first().on("load.lg error.lg loadedmetadata.lg", function() {
            setTimeout(function() {
              _this.onVideoLoadAfterPosterClick($el, _this.core.index);
            }, 50);
          });
        } else {
          this.playVideo(this.core.index);
        }
      } else if (forcePlay) {
        this.playVideo(this.core.index);
      }
    };
    Video2.prototype.onVideoLoadAfterPosterClick = function($el, index) {
      $el.addClass("lg-video-loaded");
      this.playVideo(index);
    };
    Video2.prototype.destroy = function() {
      this.core.LGel.off(".lg.video");
      this.core.LGel.off(".video");
    };
    return Video2;
  })()
);
var lg_video_es5_default = Video;

// node_modules/swiper/modules/mousewheel.mjs
function Mousewheel({
  swiper,
  extendParams,
  on,
  emit
}) {
  const window2 = getWindow();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel"
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = now();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0;
    let pX = 0;
    let pY = 0;
    if ("detail" in e) {
      sY = e.detail;
    }
    if ("wheelDelta" in e) {
      sY = -e.wheelDelta / 120;
    }
    if ("wheelDeltaY" in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ("wheelDeltaX" in e) {
      sX = -e.wheelDeltaX / 120;
    }
    if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ("deltaY" in e) {
      pY = e.deltaY;
    }
    if ("deltaX" in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      return false;
    }
    if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
      return true;
    }
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit("scroll", newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit("scroll", newEvent.raw);
    }
    lastScrollTime = new window2.Date().getTime();
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      return true;
    }
    return false;
  }
  function handle(event2) {
    let e = event2;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;
    if (event2.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== "container") {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent;
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
        else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
      else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event2
      };
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift();
      }
      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
      recentWheelEvents.push(newEvent);
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = void 0;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? "next" : "prev",
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          clearTimeout(timeout);
          timeout = void 0;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift();
          }
          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = nextTick(() => {
              if (swiper.destroyed || !swiper.params) return;
              swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
            }, 0);
          }
          if (!timeout) {
            timeout = nextTick(() => {
              if (swiper.destroyed || !swiper.params) return;
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
            }, 500);
          }
        }
        if (!ignoreWheelEvents) emit("scroll", e);
        if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    return false;
  }
  function events(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== "container") {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]("mouseenter", handleMouseEnter);
    targetEl[method]("mouseleave", handleMouseLeave);
    targetEl[method]("wheel", handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener("wheel", handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events("addEventListener");
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events("removeEventListener");
    swiper.mousewheel.enabled = false;
    return true;
  }
  on("init", () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on("destroy", () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}

// node_modules/swiper/shared/effect-init.mjs
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on("beforeInit", () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on("setTranslate _virtualUpdated", () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on("setTransition", (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on("transitionEnd", () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      swiper.slides.forEach((slideEl) => {
        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
      });
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on("virtualUpdate", () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}

// node_modules/swiper/shared/effect-target.mjs
function effectTarget(effectParams, slideEl) {
  const transformEl = getSlideTransformEl(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = "hidden";
    transformEl.style["-webkit-backface-visibility"] = "hidden";
  }
  return transformEl;
}

// node_modules/swiper/shared/effect-virtual-transition-end.mjs
function effectVirtualTransitionEnd({
  swiper,
  duration,
  transformElements,
  allSlides
}) {
  const {
    activeIndex
  } = swiper;
  const getSlide = (el) => {
    if (!el.parentElement) {
      const slide = swiper.slides.find((slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter((transformEl) => {
        const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach((el) => {
      elementTransitionEnd(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}

// node_modules/swiper/shared/create-shadow.mjs
function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}${suffix ? ` swiper-slide-shadow-${suffix}` : ""}`;
  const shadowContainer = getSlideTransformEl(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(" ").join(".")}`);
  if (!shadowEl) {
    shadowEl = createElement("div", shadowClass.split(" "));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}

// node_modules/swiper/modules/effect-cards.mjs
function EffectCards({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${(params.rotate || swiper.isHorizontal() ? -25 : 0) * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        tX = `calc(${tX}px ${rtl ? "-" : "+"} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        tX = `calc(${tX}px ${rtl ? "-" : "+"} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      if (params.slideShadows) {
        let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
        if (!shadowEl) {
          shadowEl = createShadow("cards", slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: "cards",
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      _loopSwapReset: false,
      watchSlidesProgress: true,
      loopAdditionalSlides: swiper.params.cardsEffect.rotate ? 3 : 2,
      centeredSlides: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// src/app/features/home-list/home/home.component.ts
function HomeComponent_section_18_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 41)(1, "span", 42);
    \u0275\u0275element(2, "i", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.videoAccueil.safeUrl, \u0275\u0275sanitizeUrl);
  }
}
function HomeComponent_section_18_a_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 41)(1, "span", 42);
    \u0275\u0275element(2, "i", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.videoAccueil.accueil_url, \u0275\u0275sanitizeUrl);
  }
}
function HomeComponent_section_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 32)(1, "div", 1)(2, "div", 33)(3, "span", 34);
    \u0275\u0275text(4, "NOUVEAUT\xC9 SUR LA PLATEFORME");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 35);
    \u0275\u0275text(6, "Suivez les nouveaut\xE9s sur la plateforme");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 36);
    \u0275\u0275element(8, "img", 37);
    \u0275\u0275elementStart(9, "div", 38)(10, "lightgallery", 39);
    \u0275\u0275template(11, HomeComponent_section_18_a_11_Template, 3, 1, "a", 40)(12, HomeComponent_section_18_a_12_Template, 3, 1, "a", 40);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("src", ctx_r0.videoAccueil.coverUrl || "assets/img/feature/feature-1.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("settings", ctx_r0.settings)("onInit", ctx_r0.onInit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.videoAccueil.isEmbed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.videoAccueil.isEmbed);
  }
}
Swiper.use([EffectCards, Mousewheel]);
var HomeComponent = class _HomeComponent {
  DataService;
  router;
  http;
  sanitizer;
  routes = routes;
  videoAccueil = null;
  loading = true;
  isSelected = [false];
  constructor(DataService2, router, http, sanitizer) {
    this.DataService = DataService2;
    this.router = router;
    this.http = http;
    this.sanitizer = sanitizer;
  }
  //   config: SwiperOptions = {
  //     effect: 'cards',
  //     loop: false,
  //     grabCursor: true,
  //     slidesPerView: 'auto',
  //   };
  bannercard = [
    {
      img: "course-22.jpg",
      img1: "assets/img/icons/course-01.svg",
      img2: "user-50.jpg",
      name: "David Benitz",
      department: "Productivity",
      description: "The Complete Business and Management Course",
      rating: "5.0 (210 Reviews)",
      price: "$168",
      fav: 0
    },
    {
      img: "course-25.jpg",
      img1: "assets/img/featured-courses/Clip-path-group.svg",
      img2: "user-20.jpg",
      name: "Edith Dorsey",
      department: "Lifestyles",
      description: "Build Creative Arts & media Course Completed",
      rating: "4.9 (178 Reviews)",
      price: "$190",
      fav: 6
    },
    {
      img: "course-24.jpg",
      img1: "assets/img/featured-courses/react.svg",
      img2: "user-23.jpg",
      name: "Calvin Johnsen",
      department: "Development",
      description: "Learn & Create ReactJS Tech Fundamentals Apps",
      rating: "5.0 (154 Reviews)",
      price: "$147",
      fav: 7
    }
  ];
  slideConfig = {
    lazyLoad: "ondemand",
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3e3,
    autoplaySpeed: 1800,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };
  topCourseSlider = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  featureCourseSlider2 = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
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
  brandSlide = {
    dots: false,
    infinite: true,
    speed: 2e3,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  instructorSlider = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScrol: 1
        }
      }
    ]
  };
  testimonialSlider = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  settings = {
    counter: false,
    plugins: [lg_zoom_es5_default, lg_video_es5_default]
  };
  lightGallery;
  needRefresh = false;
  ngAfterViewChecked() {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  onInit = (detail) => {
    this.lightGallery = detail.instance;
  };
  ngOnInit() {
    this.http.get(`${environment.apiUrl}/help-center/accueil`).subscribe({
      next: (res) => {
        if (!res?.est_actif) {
          this.videoAccueil = null;
          this.loading = false;
          return;
        }
        const url = res?.accueil_url || "";
        const embedUrl = this.toEmbedUrl(url);
        const isEmbed = embedUrl !== null;
        this.videoAccueil = __spreadProps(__spreadValues({}, res), {
          accueil_url: url,
          accueil_type: res?.accueil_type || "url",
          isEmbed,
          coverUrl: this.toCoverUrl(url),
          safeUrl: isEmbed ? this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl) : null
        });
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    AOS.init({ duration: 1200, once: true });
  }
  toggleClass(slide) {
    slide.active = !slide.active;
  }
  directPath() {
    this.router.navigate(["/pages/course/course-list"]);
  }
  iconSelect(index) {
    this.isSelected[index] = !this.isSelected[index];
  }
  onSubmit() {
    this.router.navigate([routes.courseList]);
  }
  toCoverUrl(url) {
    if (!url)
      return "assets/img/feature/feature-1.jpg";
    const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
    if (yt?.[1])
      return `https://img.youtube.com/vi/${yt[1]}/hqdefault.jpg`;
    const vimeo = url.match(/vimeo\.com\/(\d+)/);
    if (vimeo?.[1])
      return `https://vumbnail.com/${vimeo[1]}.jpg`;
    const dm = url.match(/dailymotion\.com\/video\/([\w]+)/);
    if (dm?.[1])
      return `https://www.dailymotion.com/thumbnail/video/${dm[1]}`;
    if (url.includes("/embed/") || url.includes("player.vimeo.com"))
      return "assets/img/feature/feature-1.jpg";
    return "assets/img/feature/feature-1.jpg";
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
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 80, vars: 1, consts: [[1, "banner-section"], [1, "container"], [1, "row"], [1, "col-xl-7", "col-lg-8"], [1, "banner-content"], [1, "hero-badge"], [1, "text-white"], [1, "hero-description"], ["href", "https://calendar.app.google/u8est9D1WgQ4mMkf6", 1, "btn", "btn-demo"], ["class", "video-nouveautes-section", 4, "ngIf"], [1, "why-section"], [1, "text-center", "why-header"], [1, "why-title"], [1, "why-description"], [1, "row", "g-4"], [1, "col-lg-4", "col-md-6"], [1, "why-card"], [1, "why-card-icon"], [1, "isax", "isax-book-1"], [1, "why-card-title"], [1, "why-card-text"], [1, "why-card-stat"], [1, "stat-number"], [1, "stat-label"], [1, "isax", "isax-chart-26"], [1, "isax", "isax-clock"], [1, "client-section"], [1, "cta-section"], [1, "text-center"], [1, "cta-title"], [1, "cta-description"], ["href", "https://calendar.app.google/u8est9D1WgQ4mMkf6\n", 1, "btn", "btn-cta"], [1, "video-nouveautes-section"], [1, "text-center", "video-nouveautes-header"], [1, "video-nouveautes-badge"], [1, "video-nouveautes-title"], [1, "video-showcase"], ["alt", "Aper\xE7u de la vid\xE9o d'accueil", 1, "img-fluid", "w-100", 3, "src"], [1, "video-play"], ["size", "1400-933", 3, "settings", "onInit"], ["title", "Voir la vid\xE9o d'accueil", "class", "video-play-link", 3, "href", 4, "ngIf"], ["title", "Voir la vid\xE9o d'accueil", 1, "video-play-link", 3, "href"], [1, "play-icon-wrap"], [1, "isax", "isax-play5"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6, "PLATEFORME LMS D'EXCELLENCE POUR LES ENTREPRISES OP\xC9RANTES EN AFRIQUE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 6);
      \u0275\u0275text(8, "Formez vos Talents, ");
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "Transformez");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " votre ");
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "croissance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p", 7);
      \u0275\u0275text(15, " Permettez \xE0 vos collaborateurs d'acqu\xE9rir les comp\xE9tences dont ils ont besoin exactement au moment o\xF9 ils en ont besoin. Personnalisez vos parcours de formation, d\xE9ployez-les \xE0 l'\xE9chelle de toute votre organisation et mesurez l'impact r\xE9el sur la performance globale de votre entreprise. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 8);
      \u0275\u0275text(17, "Demander une d\xE9mo");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(18, HomeComponent_section_18_Template, 13, 5, "section", 9);
      \u0275\u0275elementStart(19, "section", 10)(20, "div", 1)(21, "div", 11)(22, "h2", 12);
      \u0275\u0275text(23, "Pourquoi la formation classique ne suffit plus ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 13);
      \u0275\u0275text(25, " Dans un monde o\xF9 les mutations technologiques et la ma\xEEtrise de l'intelligence artificielle sont devenues des facteurs de productivit\xE9 et d'efficacit\xE9 op\xE9rationnelle, les m\xE9thodes de formation classiques tendent \xE0 devenir quasi-inefficaces et obsol\xE8tes. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 14)(27, "div", 15)(28, "div", 16)(29, "div", 17);
      \u0275\u0275element(30, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "h5", 19);
      \u0275\u0275text(32, "Contenus rapidement obsol\xE8tes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p", 20);
      \u0275\u0275text(34, " Dans un monde o\xF9 les comp\xE9tences \xE9voluent tous les 18 mois, les manuels et autres supports de formation transforment vos \xE9quipes en spectateurs plut\xF4t qu'en acteurs du changement. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 21)(36, "span", 22);
      \u0275\u0275text(37, "72 %");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 23);
      \u0275\u0275text(39, "des formations d\xE9pass\xE9es en moins d'un an");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 15)(41, "div", 16)(42, "div", 17);
      \u0275\u0275element(43, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "h5", 19);
      \u0275\u0275text(45, "Absence de suivi d'impact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p", 20);
      \u0275\u0275text(47, " Sans donn\xE9es fiables, impossible de justifier votre budget formation, d'identifier les lacunes critiques ou de prouver le retour sur investissement \xE0 votre direction. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 21)(49, "span", 22);
      \u0275\u0275text(50, "67 %");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 23);
      \u0275\u0275text(52, "des DRH ne mesurent pas le ROI");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 15)(54, "div", 16)(55, "div", 17);
      \u0275\u0275element(56, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "h5", 19);
      \u0275\u0275text(58, "Taux d'engagement trop faible");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p", 20);
      \u0275\u0275text(60, " Les collaborateurs qui d\xE9crochent car les sessions longues et passives ne retiennent plus l'attention. Vos \xE9quipes abandonnent les parcours \xE0 mi-chemin, et vos investissements partent \xE0 la corbeille. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 21)(62, "span", 22);
      \u0275\u0275text(63, "15 %");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "span", 23);
      \u0275\u0275text(65, "seulement finissent leurs formations");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(66, "section", 26);
      \u0275\u0275element(67, "div", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "section", 27)(69, "div", 1)(70, "div", 28)(71, "h2", 29);
      \u0275\u0275text(72, "Pr\xEAt \xE0 d\xE9velopper les comp\xE9tences");
      \u0275\u0275element(73, "br");
      \u0275\u0275text(74, "de vos \xE9quipes ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "p", 30);
      \u0275\u0275text(76, " Rejoignez d\xE8s aujourd'hui les entreprises leaders en Afrique qui font confiance \xE0 Pyramide LMS pour la mont\xE9e en comp\xE9tences et la fid\xE9lisation de leurs talents. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "a", 31);
      \u0275\u0275text(78, "Contacter notre \xE9quipe");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(79, "app-footer");
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("ngIf", ctx.videoAccueil);
    }
  }, dependencies: [CommonModule, NgIf, FooterComponent, SlickCarouselModule, LightgalleryModule, LightgalleryComponent], styles: ['/* src/app/features/home-list/home/home.component.scss */\n.video-nouveautes-section {\n  padding: 80px 0 60px;\n  background: #fff;\n}\n.video-nouveautes-section .video-nouveautes-header {\n  margin-bottom: 40px;\n}\n.video-nouveautes-section .video-nouveautes-badge {\n  display: inline-block;\n  border: 2px solid #006F78;\n  color: #006F78;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  padding: 8px 24px;\n  border-radius: 30px;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n}\n.video-nouveautes-section .video-nouveautes-title {\n  font-size: 36px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 0;\n}\n@media (max-width: 767px) {\n  .video-nouveautes-section .video-nouveautes-title {\n    font-size: 24px;\n  }\n}\n.video-nouveautes-section .video-showcase {\n  position: relative;\n  overflow: hidden;\n  border-radius: 18px;\n  background: #0f172a;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n  max-width: 960px;\n  margin: 0 auto;\n}\n.video-nouveautes-section .video-showcase img {\n  display: block;\n  width: 100%;\n  border-radius: 18px;\n}\n.video-nouveautes-section .video-showcase .video-frame,\n.video-nouveautes-section .video-showcase video {\n  display: block;\n  width: 100%;\n  min-height: 420px;\n  border: 0;\n  border-radius: 18px;\n  background: #0f172a;\n}\n.video-nouveautes-section .video-showcase .video-frame {\n  position: relative;\n  overflow: hidden;\n}\n.video-nouveautes-section .video-showcase .video-frame iframe {\n  width: 100%;\n  min-height: 420px;\n  border: 0;\n  display: block;\n}\n.video-nouveautes-section .video-showcase video {\n  object-fit: cover;\n}\n.video-nouveautes-section .video-showcase .video-play {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n}\n.video-nouveautes-section .video-showcase .video-play a {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.video-nouveautes-section .video-showcase .video-play a:hover {\n  transform: scale(1.1);\n  box-shadow: 0 6px 32px rgba(0, 0, 0, 0.2);\n}\n.video-nouveautes-section .video-showcase .video-play a i {\n  font-size: 24px;\n  color: #006F78;\n}\n.banner-section {\n  position: relative;\n  background: url("./media/home-bg-white.png") no-repeat center center;\n  background-size: cover;\n  width: 100%;\n  min-height: 90vh;\n  display: flex;\n  align-items: center;\n  padding: 180px 0 80px;\n  z-index: 0;\n  overflow: hidden;\n}\n.banner-section .container {\n  position: relative;\n  z-index: 1;\n}\n.banner-section .banner-content {\n  position: relative;\n  z-index: 1;\n}\n.banner-section .banner-content .hero-badge {\n  display: inline-block;\n  background-color: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  padding: 8px 20px;\n  color: #F5A623;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  margin-bottom: 24px;\n  border-radius: 30px;\n  text-transform: uppercase;\n}\n.banner-section .banner-content h1 {\n  font-size: 48px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin-bottom: 24px;\n  max-width: 600px;\n}\n.banner-section .banner-content h1 span {\n  color: #F5A623;\n}\n@media (max-width: 991px) {\n  .banner-section .banner-content h1 {\n    font-size: 36px;\n  }\n}\n@media (max-width: 767px) {\n  .banner-section .banner-content h1 {\n    font-size: 28px;\n  }\n}\n@media (max-width: 575px) {\n  .banner-section .banner-content h1 {\n    font-size: 24px;\n  }\n}\n.banner-section .banner-content .hero-description {\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 16px;\n  line-height: 1.7;\n  margin-bottom: 32px;\n  max-width: 560px;\n}\n.banner-section .banner-content .btn-demo {\n  display: inline-block;\n  background-color: #F5A623;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 14px 32px;\n  border-radius: 8px;\n  border: none;\n  transition: background-color 0.3s ease;\n}\n.banner-section .banner-content .btn-demo:hover {\n  background-color: #e09515;\n  color: #fff;\n}\n.tuto-page {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n  margin: 16px 0 32px;\n}\n.tuto-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.tuto-header h4 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tuto-header h4 i {\n  font-size: 18px;\n  color: #006F78;\n}\n.tuto-sub {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.tuto-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n  padding: 20px 24px;\n}\n.tuto-card {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: box-shadow 0.15s;\n}\n.tuto-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.tuto-video {\n  position: relative;\n  padding-top: 56.25%;\n  background: #f3f4f6;\n}\n.tuto-video iframe,\n.tuto-video video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n  object-fit: cover;\n}\n.tuto-info {\n  padding: 14px 16px;\n}\n.tuto-info h5 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.tuto-info p {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n}\n.tuto-empty {\n  padding: 60px 24px;\n  text-align: center;\n  color: #9ca3af;\n}\n.tuto-empty i {\n  font-size: 48px;\n  margin-bottom: 12px;\n  display: block;\n}\n.tuto-empty p {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 4px;\n}\n.tuto-empty small {\n  font-size: 12px;\n}\n.tuto-loading {\n  padding: 40px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: #6b7280;\n  font-size: 13px;\n}\n.course-browser-section {\n  padding: 0 0 80px;\n  background-color: #f8f9fa;\n}\n.course-browser-section .browser-mockup {\n  background: #fff;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.course-browser-section .browser-toolbar {\n  display: flex;\n  align-items: center;\n  padding: 14px 20px;\n  background: #f1f1f1;\n  border-bottom: 1px solid #e5e5e5;\n  gap: 16px;\n}\n.course-browser-section .browser-dots {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.course-browser-section .browser-dots .dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.course-browser-section .browser-dots .dot-red {\n  background-color: #ff5f57;\n}\n.course-browser-section .browser-dots .dot-yellow {\n  background-color: #febc2e;\n}\n.course-browser-section .browser-dots .dot-green {\n  background-color: #28c840;\n}\n.course-browser-section .browser-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n  flex-grow: 1;\n  max-width: 300px;\n  margin-left: auto;\n  color: #adb5bd;\n  font-size: 13px;\n}\n.course-browser-section .browser-search i {\n  font-size: 14px;\n}\n.course-browser-section .browser-body {\n  padding: 28px 32px 32px;\n}\n@media (max-width: 767px) {\n  .course-browser-section .browser-body {\n    padding: 20px 16px 24px;\n  }\n}\n.course-browser-section .filter-bar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n}\n.course-browser-section .filter-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  white-space: nowrap;\n}\n.course-browser-section .filter-label i {\n  font-size: 16px;\n}\n.course-browser-section .filter-tags {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.course-browser-section .filter-tag {\n  display: inline-block;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n  background: #f1f3f5;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.course-browser-section .filter-tag:hover {\n  background: #e9ecef;\n}\n.course-browser-section .filter-tag.active {\n  background: #006F78;\n  color: #fff;\n}\n.course-browser-section .course-card {\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid #e9ecef;\n  transition: box-shadow 0.2s ease;\n  height: 100%;\n}\n.course-browser-section .course-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.course-browser-section .course-card-img {\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n}\n.course-browser-section .course-card-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.course-browser-section .course-card-body {\n  padding: 16px;\n}\n.course-browser-section .course-card-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.course-browser-section .course-card-badge.badge-teal {\n  background: #e6f7f8;\n  color: #006F78;\n}\n.course-browser-section .course-card-badge.badge-green {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.course-browser-section .course-card-badge.badge-orange {\n  background: #fff3e0;\n  color: #e65100;\n}\n.course-browser-section .course-card-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 12px;\n  line-height: 1.4;\n}\n.course-browser-section .course-card-meta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #6c757d;\n  margin-bottom: 12px;\n}\n.course-browser-section .course-card-meta span {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.course-browser-section .course-card-meta i {\n  font-size: 14px;\n}\n.course-browser-section .course-card-rating {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.course-browser-section .course-card-rating .stars {\n  display: flex;\n  gap: 2px;\n  color: #ffc107;\n  font-size: 14px;\n}\n.course-browser-section .course-card-rating .rating-text {\n  font-size: 12px;\n  color: #6c757d;\n}\n.course-browser-section .course-card-progress .progress-label {\n  font-size: 12px;\n  color: #6c757d;\n  margin-bottom: 6px;\n  display: block;\n}\n.course-browser-section .course-card-progress .progress-bar-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.course-browser-section .course-card-progress .progress-bar-track {\n  flex-grow: 1;\n  height: 6px;\n  background: #e9ecef;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.course-browser-section .course-card-progress .progress-bar-fill {\n  height: 100%;\n  background: #006F78;\n  border-radius: 3px;\n}\n.course-browser-section .course-card-progress .progress-value {\n  font-size: 13px;\n  font-weight: 600;\n  color: #006F78;\n  white-space: nowrap;\n}\n.why-section {\n  padding: 80px 0;\n  background-color: #1a1a2e;\n}\n.why-section .why-header {\n  margin-bottom: 48px;\n}\n.why-section .why-title {\n  font-size: 36px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 16px;\n}\n@media (max-width: 767px) {\n  .why-section .why-title {\n    font-size: 26px;\n  }\n}\n.why-section .why-description {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.7;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.why-section .why-card {\n  background: #222240;\n  border-radius: 16px;\n  padding: 32px 28px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.why-section .why-card-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.why-section .why-card-icon i {\n  font-size: 22px;\n  color: #fff;\n}\n.why-section .why-card-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #fff;\n  margin-bottom: 12px;\n}\n.why-section .why-card-text {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.65);\n  line-height: 1.7;\n  margin-bottom: 24px;\n  flex-grow: 1;\n}\n.why-section .why-card-stat {\n  background: #006F78;\n  border-radius: 12px;\n  padding: 20px 24px;\n}\n.why-section .why-card-stat .stat-number {\n  display: block;\n  font-size: 32px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 4px;\n}\n.why-section .why-card-stat .stat-label {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.cta-section {\n  padding: 100px 0;\n  background: #e8f4f5;\n}\n.cta-section .cta-title {\n  font-size: 42px;\n  font-weight: 700;\n  color: #006F78;\n  margin-bottom: 20px;\n  line-height: 1.25;\n}\n@media (max-width: 767px) {\n  .cta-section .cta-title {\n    font-size: 28px;\n  }\n}\n.cta-section .cta-description {\n  font-size: 16px;\n  color: #6c757d;\n  line-height: 1.7;\n  max-width: 650px;\n  margin: 0 auto 32px;\n}\n.cta-section .btn-cta {\n  display: inline-block;\n  background: #D4A843;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 16px 36px;\n  border-radius: 30px;\n  border: none;\n  transition: background-color 0.3s ease;\n}\n.cta-section .btn-cta:hover {\n  background: #c0952e;\n  color: #fff;\n}\n/*# sourceMappingURL=home.component.css.map */\n'], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", imports: [CommonModule, FooterComponent, RouterLink, SlickCarouselModule, LightgalleryModule], encapsulation: ViewEncapsulation.None, template: `<!-- banner -->\r
<section class="banner-section">\r
  <div class="container">\r
    <div class="row">\r
      <div class="col-xl-7 col-lg-8">\r
        <div class="banner-content">\r
          <span class="hero-badge">PLATEFORME LMS D'EXCELLENCE POUR LES ENTREPRISES OP&Eacute;RANTES EN AFRIQUE</span>\r
          <h1 class="text-white">Formez vos Talents,\r
            <span>Transformez</span> votre\r
            <span>croissance</span>\r
          </h1>\r
          <p class="hero-description">\r
            Permettez \xE0 vos collaborateurs d'acqu\xE9rir les comp\xE9tences dont ils ont\r
            besoin exactement au moment o\xF9 ils en ont besoin. Personnalisez vos\r
            parcours de formation, d\xE9ployez-les \xE0 l'\xE9chelle de toute votre\r
            organisation et mesurez l'impact r\xE9el sur la performance globale de\r
            votre entreprise.\r
          </p>\r
          <a href="https://calendar.app.google/u8est9D1WgQ4mMkf6" class="btn btn-demo">Demander une d\xE9mo</a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
<!-- banner -->\r
\r
<!-- video nouveaut\xE9s -->\r
<section class="video-nouveautes-section" *ngIf="videoAccueil">\r
  <div class="container">\r
    <div class="text-center video-nouveautes-header">\r
      <span class="video-nouveautes-badge">NOUVEAUT&Eacute; SUR LA PLATEFORME</span>\r
      <h2 class="video-nouveautes-title">Suivez les nouveaut&eacute;s sur la plateforme</h2>\r
    </div>\r
    <div class="video-showcase">\r
      <img [src]="videoAccueil.coverUrl || 'assets/img/feature/feature-1.jpg'" class="img-fluid w-100" alt="Aper\xE7u de la vid\xE9o d'accueil" />\r
      <div class="video-play">\r
        <lightgallery [settings]="settings" [onInit]="onInit" size="1400-933">\r
          <a *ngIf="videoAccueil.isEmbed" [href]="videoAccueil.safeUrl" title="Voir la vid\xE9o d'accueil" class="video-play-link">\r
            <span class="play-icon-wrap">\r
              <i class="isax isax-play5"></i>\r
            </span>\r
          </a>\r
          <a *ngIf="!videoAccueil.isEmbed" [href]="videoAccueil.accueil_url" title="Voir la vid\xE9o d'accueil" class="video-play-link">\r
            <span class="play-icon-wrap">\r
              <i class="isax isax-play5"></i>\r
            </span>\r
          </a>\r
        </lightgallery>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
<!-- /video nouveaut\xE9s -->\r
\r
<!-- course browser mockup -->\r
<!-- <section class="course-browser-section">\r
  <div class="container">\r
    <div class="browser-mockup">\r
      <div class="browser-toolbar">\r
        <div class="browser-dots">\r
          <span class="dot dot-red"></span>\r
          <span class="dot dot-yellow"></span>\r
          <span class="dot dot-green"></span>\r
        </div>\r
        <div class="browser-search">\r
          <i class="isax isax-search-normal-1"></i>\r
          <span>Rechercher une formations, un catalogue...</span>\r
        </div>\r
      </div>\r
      <div class="browser-body">\r
        <div class="filter-bar">\r
          <div class="filter-label">\r
            <i class="isax isax-tag"></i>\r
            Filtrer par &eacute;tiquette :\r
          </div>\r
          <div class="filter-tags">\r
            <span class="filter-tag active">Tous les parcours</span>\r
            <span class="filter-tag">Nouveau</span>\r
            <span class="filter-tag">Populaire</span>\r
            <span class="filter-tag">Certifiant</span>\r
            <span class="filter-tag">Micro-learning</span>\r
            <span class="filter-tag">Pr&eacute;sentiel</span>\r
            <span class="filter-tag">E-learning</span>\r
            <span class="filter-tag">Blended</span>\r
          </div>\r
        </div>\r
        <div class="row g-4">\r
          <div class="col-lg-4 col-md-6">\r
            <div class="course-card">\r
              <div class="course-card-img">\r
                <img src="assets/img/section_middle_1.png" alt="Leadership & Management" />\r
              </div>\r
              <div class="course-card-body">\r
                <span class="course-card-badge badge-teal">Leadership &amp; Management</span>\r
                <h6 class="course-card-title">Principes du Leadership Moderne pour Managers</h6>\r
                <div class="course-card-meta">\r
                  <span><i class="isax isax-clock"></i> 6 heures</span>\r
                  <span><i class="isax isax-chart-1"></i> Interm&eacute;diaire</span>\r
                </div>\r
                <div class="course-card-rating">\r
                  <div class="stars">\r
                    <i class="isax isax-star-15"></i>\r
                    <i class="isax isax-star-15"></i>\r
                    <i class="isax isax-star-15"></i>\r
                    <i class="isax isax-star-15"></i>\r
                    <i class="isax isax-star"></i>\r
                  </div>\r
                  <span class="rating-text">4.9 (&eacute;valuations)</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="col-lg-4 col-md-6">\r
            <div class="course-card">\r
              <div class="course-card-img">\r
                <img src="assets/img/section_middle_2.png" alt="Comp&eacute;tences Techniques" />\r
              </div>\r
              <div class="course-card-body">\r
                <span class="course-card-badge badge-green">Comp&eacute;tences Techniques</span>\r
                <h6 class="course-card-title">Introduction pratique &agrave; la cybers&eacute;curit&eacute; en entreprise</h6>\r
                <div class="course-card-meta">\r
                  <span><i class="isax isax-clock"></i> 4.5 heures</span>\r
                  <span><i class="isax isax-chart-1"></i> D&eacute;butant</span>\r
                </div>\r
                <div class="course-card-progress">\r
                  <span class="progress-label">Progression</span>\r
                  <div class="progress-bar-wrapper">\r
                    <div class="progress-bar-track">\r
                      <div class="progress-bar-fill" style="width: 75%"></div>\r
                    </div>\r
                    <span class="progress-value">75%</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="col-lg-4 col-md-6">\r
            <div class="course-card">\r
              <div class="course-card-img">\r
                <img src="assets/img/section_middle_3.png" alt="Soft Skills" />\r
              </div>\r
              <div class="course-card-body">\r
                <span class="course-card-badge badge-orange">Soft Skills</span>\r
                <h6 class="course-card-title">N&eacute;gociation et R&eacute;solution de Conflits en &Eacute;quipe</h6>\r
                <div class="course-card-meta">\r
                  <span><i class="isax isax-clock"></i> 3 heures</span>\r
                  <span><i class="isax isax-chart-1"></i> Avanc&eacute;</span>\r
                </div>\r
                <div class="course-card-rating">\r
                  <div class="stars">\r
                    <i class="isax isax-star-15"></i>\r
                    <i class="isax isax-star-15"></i>\r
                    <i class="isax isax-star-15"></i>\r
                    <i class="isax isax-star-15"></i>\r
                    <i class="isax isax-star"></i>\r
                  </div>\r
                  <span class="rating-text">4.8 (&eacute;valuations)</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section> -->\r
<!-- /course browser mockup -->\r
\r
<!-- why classic training fails -->\r
<section class="why-section">\r
  <div class="container">\r
    <div class="text-center why-header">\r
      <h2 class="why-title">Pourquoi la formation classique ne suffit plus ?</h2>\r
      <p class="why-description">\r
        Dans un monde o&ugrave; les mutations technologiques et la ma&icirc;trise de l'intelligence artificielle sont devenues des facteurs de productivit&eacute; et d'efficacit&eacute;\r
        op&eacute;rationnelle, les m&eacute;thodes de formation classiques tendent &agrave; devenir quasi-inefficaces et obsol&egrave;tes.\r
      </p>\r
    </div>\r
    <div class="row g-4">\r
      <div class="col-lg-4 col-md-6">\r
        <div class="why-card">\r
          <div class="why-card-icon">\r
            <i class="isax isax-book-1"></i>\r
          </div>\r
          <h5 class="why-card-title">Contenus rapidement obsol&egrave;tes</h5>\r
          <p class="why-card-text">\r
            Dans un monde o&ugrave; les comp&eacute;tences &eacute;voluent tous les 18 mois, les manuels et\r
            autres supports de formation transforment vos &eacute;quipes en spectateurs plut&ocirc;t qu'en\r
            acteurs du changement.\r
          </p>\r
          <div class="why-card-stat">\r
            <span class="stat-number">72 %</span>\r
            <span class="stat-label">des formations d&eacute;pass&eacute;es en moins d'un an</span>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="col-lg-4 col-md-6">\r
        <div class="why-card">\r
          <div class="why-card-icon">\r
            <i class="isax isax-chart-26"></i>\r
          </div>\r
          <h5 class="why-card-title">Absence de suivi d'impact</h5>\r
          <p class="why-card-text">\r
            Sans donn&eacute;es fiables, impossible de justifier votre budget formation, d'identifier\r
            les lacunes critiques ou de prouver le retour sur investissement &agrave; votre direction.\r
          </p>\r
          <div class="why-card-stat">\r
            <span class="stat-number">67 %</span>\r
            <span class="stat-label">des DRH ne mesurent pas le ROI</span>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="col-lg-4 col-md-6">\r
        <div class="why-card">\r
          <div class="why-card-icon">\r
            <i class="isax isax-clock"></i>\r
          </div>\r
          <h5 class="why-card-title">Taux d'engagement trop faible</h5>\r
          <p class="why-card-text">\r
            Les collaborateurs qui d&eacute;crochent car les sessions longues et passives ne retiennent\r
            plus l'attention. Vos &eacute;quipes abandonnent les parcours &agrave; mi-chemin, et vos\r
            investissements partent &agrave; la corbeille.\r
          </p>\r
          <div class="why-card-stat">\r
            <span class="stat-number">15 %</span>\r
            <span class="stat-label">seulement finissent leurs formations</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
<!-- /why classic training fails -->\r
\r
<!-- institutions -->\r
<section class="client-section">\r
  <div class="container">\r
    <!-- <h6 class="fw-medium text-center mb-4">\r
      Approuv\xE9 par\r
      <span class="text-decoration-underline text-secondary">200+</span>\r
      Entreprises \xE0 Travers l'Afrique\r
    </h6> -->\r
    <!-- <div class="institutions-slider lazy slider">\r
      <ngx-slick-carousel #slickModal="slick-carousel" [config]="slideConfig">\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/01.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/02.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/03.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/04.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/05.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/06.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/07.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/02.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/03.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/04.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/05.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/06.svg" alt="img" />\r
        </div>\r
      </ngx-slick-carousel>\r
    </div> -->\r
  </div>\r
</section>\r
<!-- institutions -->\r
\r
<!-- top courses -->\r
<!-- <section class="top-courses-sec">\r
  <img class="top-courses-bg" src="./assets/img/bg/bg-20.png" alt="img" />\r
  <div class="container">\r
    <div class="section-header text-center">\r
      <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Nos Cat\xE9gories</span>\r
      <h2>Formations & Cat\xE9gories </h2>\r
      <p>\r
       Cat\xE9goriser vos formations pour une navigation facile et une meilleure organisation.\r
      </p>\r
    </div>\r
    <div class="top-courses-slider lazy">\r
      <ngx-slick-carousel #slickModal="slick-carousel" [config]="topCourseSlider">\r
        <div ngxSlickItem>\r
          <div class="categories-item categories-item-three mb-0">\r
            <img class="mx-auto" src="assets/img/category/icons/icon-6.svg" alt="img" />\r
            <h6 class="title">\r
              <a [routerLink]="routes.courseCategory">Management</a>\r
            </h6>\r
          </div>\r
        </div>\r
        <div ngxSlickItem>\r
          <div class="categories-item categories-item-three mb-0">\r
            <img class="mx-auto" src="assets/img/category/icons/icon-7.svg" alt="img" />\r
            <h6 class="title">\r
              <a [routerLink]="routes.courseCategory">Ressources Humaines</a>\r
            </h6>\r
          </div>\r
        </div>\r
        <div ngxSlickItem>\r
          <div class="categories-item categories-item-three mb-0">\r
            <img class="mx-auto" src="assets/img/category/icons/icon-8.svg" alt="img" />\r
            <h6 class="title">\r
              <a [routerLink]="routes.courseCategory">Marketing Digital</a>\r
            </h6>\r
          </div>\r
        </div>\r
        <div ngxSlickItem>\r
          <div class="categories-item categories-item-three mb-0">\r
            <img class="mx-auto" src="assets/img/category/icons/icon-9.svg" alt="img" />\r
            <h6 class="title">\r
              <a [routerLink]="routes.courseCategory">Finance & Comptabilit\xE9</a>\r
            </h6>\r
          </div>\r
        </div>\r
        <div ngxSlickItem>\r
          <div class="categories-item categories-item-three mb-0">\r
            <img class="mx-auto" src="assets/img/category/icons/icon-10.svg" alt="img" />\r
            <h6 class="title">\r
              <a [routerLink]="routes.courseCategory">Leadership</a>\r
            </h6>\r
          </div>\r
        </div>\r
        <div ngxSlickItem>\r
          <div class="categories-item categories-item-three mb-0">\r
            <img class="mx-auto" src="assets/img/category/icons/icon-11.svg" alt="img" />\r
            <h6 class="title">\r
              <a [routerLink]="routes.courseCategory">D\xE9veloppement Web</a>\r
            </h6>\r
          </div>\r
        </div>\r
      </ngx-slick-carousel>\r
    </div>\r
    <a [routerLink]="routes.courseCategory" class="btn btn-primary btn-md">Voir Toutes les Cat\xE9gories</a>\r
  </div>\r
</section> -->\r
<!-- /top courses -->\r
\r
<!-- CTA final -->\r
<section class="cta-section">\r
  <div class="container">\r
    <div class="text-center">\r
      <h2 class="cta-title">Pr&ecirc;t &agrave; d&eacute;velopper les comp&eacute;tences<br>de vos &eacute;quipes ?</h2>\r
      <p class="cta-description">\r
        Rejoignez d&egrave;s aujourd'hui les entreprises leaders en Afrique qui font confiance &agrave; Pyramide LMS\r
        pour la mont&eacute;e en comp&eacute;tences et la fid&eacute;lisation de leurs talents.\r
      </p>\r
      <a href="https://calendar.app.google/u8est9D1WgQ4mMkf6\r
" class="btn btn-cta">Contacter notre &eacute;quipe</a>\r
    </div>\r
  </div>\r
</section>\r
<!-- /CTA final -->\r
\r
  <app-footer></app-footer>\r
`, styles: ['/* src/app/features/home-list/home/home.component.scss */\n.video-nouveautes-section {\n  padding: 80px 0 60px;\n  background: #fff;\n}\n.video-nouveautes-section .video-nouveautes-header {\n  margin-bottom: 40px;\n}\n.video-nouveautes-section .video-nouveautes-badge {\n  display: inline-block;\n  border: 2px solid #006F78;\n  color: #006F78;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  padding: 8px 24px;\n  border-radius: 30px;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n}\n.video-nouveautes-section .video-nouveautes-title {\n  font-size: 36px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 0;\n}\n@media (max-width: 767px) {\n  .video-nouveautes-section .video-nouveautes-title {\n    font-size: 24px;\n  }\n}\n.video-nouveautes-section .video-showcase {\n  position: relative;\n  overflow: hidden;\n  border-radius: 18px;\n  background: #0f172a;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n  max-width: 960px;\n  margin: 0 auto;\n}\n.video-nouveautes-section .video-showcase img {\n  display: block;\n  width: 100%;\n  border-radius: 18px;\n}\n.video-nouveautes-section .video-showcase .video-frame,\n.video-nouveautes-section .video-showcase video {\n  display: block;\n  width: 100%;\n  min-height: 420px;\n  border: 0;\n  border-radius: 18px;\n  background: #0f172a;\n}\n.video-nouveautes-section .video-showcase .video-frame {\n  position: relative;\n  overflow: hidden;\n}\n.video-nouveautes-section .video-showcase .video-frame iframe {\n  width: 100%;\n  min-height: 420px;\n  border: 0;\n  display: block;\n}\n.video-nouveautes-section .video-showcase video {\n  object-fit: cover;\n}\n.video-nouveautes-section .video-showcase .video-play {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n}\n.video-nouveautes-section .video-showcase .video-play a {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.video-nouveautes-section .video-showcase .video-play a:hover {\n  transform: scale(1.1);\n  box-shadow: 0 6px 32px rgba(0, 0, 0, 0.2);\n}\n.video-nouveautes-section .video-showcase .video-play a i {\n  font-size: 24px;\n  color: #006F78;\n}\n.banner-section {\n  position: relative;\n  background: url("./media/home-bg-white.png") no-repeat center center;\n  background-size: cover;\n  width: 100%;\n  min-height: 90vh;\n  display: flex;\n  align-items: center;\n  padding: 180px 0 80px;\n  z-index: 0;\n  overflow: hidden;\n}\n.banner-section .container {\n  position: relative;\n  z-index: 1;\n}\n.banner-section .banner-content {\n  position: relative;\n  z-index: 1;\n}\n.banner-section .banner-content .hero-badge {\n  display: inline-block;\n  background-color: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  padding: 8px 20px;\n  color: #F5A623;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  margin-bottom: 24px;\n  border-radius: 30px;\n  text-transform: uppercase;\n}\n.banner-section .banner-content h1 {\n  font-size: 48px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin-bottom: 24px;\n  max-width: 600px;\n}\n.banner-section .banner-content h1 span {\n  color: #F5A623;\n}\n@media (max-width: 991px) {\n  .banner-section .banner-content h1 {\n    font-size: 36px;\n  }\n}\n@media (max-width: 767px) {\n  .banner-section .banner-content h1 {\n    font-size: 28px;\n  }\n}\n@media (max-width: 575px) {\n  .banner-section .banner-content h1 {\n    font-size: 24px;\n  }\n}\n.banner-section .banner-content .hero-description {\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 16px;\n  line-height: 1.7;\n  margin-bottom: 32px;\n  max-width: 560px;\n}\n.banner-section .banner-content .btn-demo {\n  display: inline-block;\n  background-color: #F5A623;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 14px 32px;\n  border-radius: 8px;\n  border: none;\n  transition: background-color 0.3s ease;\n}\n.banner-section .banner-content .btn-demo:hover {\n  background-color: #e09515;\n  color: #fff;\n}\n.tuto-page {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n  margin: 16px 0 32px;\n}\n.tuto-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.tuto-header h4 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tuto-header h4 i {\n  font-size: 18px;\n  color: #006F78;\n}\n.tuto-sub {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.tuto-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n  padding: 20px 24px;\n}\n.tuto-card {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: box-shadow 0.15s;\n}\n.tuto-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.tuto-video {\n  position: relative;\n  padding-top: 56.25%;\n  background: #f3f4f6;\n}\n.tuto-video iframe,\n.tuto-video video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n  object-fit: cover;\n}\n.tuto-info {\n  padding: 14px 16px;\n}\n.tuto-info h5 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.tuto-info p {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n}\n.tuto-empty {\n  padding: 60px 24px;\n  text-align: center;\n  color: #9ca3af;\n}\n.tuto-empty i {\n  font-size: 48px;\n  margin-bottom: 12px;\n  display: block;\n}\n.tuto-empty p {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 4px;\n}\n.tuto-empty small {\n  font-size: 12px;\n}\n.tuto-loading {\n  padding: 40px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: #6b7280;\n  font-size: 13px;\n}\n.course-browser-section {\n  padding: 0 0 80px;\n  background-color: #f8f9fa;\n}\n.course-browser-section .browser-mockup {\n  background: #fff;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.course-browser-section .browser-toolbar {\n  display: flex;\n  align-items: center;\n  padding: 14px 20px;\n  background: #f1f1f1;\n  border-bottom: 1px solid #e5e5e5;\n  gap: 16px;\n}\n.course-browser-section .browser-dots {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.course-browser-section .browser-dots .dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.course-browser-section .browser-dots .dot-red {\n  background-color: #ff5f57;\n}\n.course-browser-section .browser-dots .dot-yellow {\n  background-color: #febc2e;\n}\n.course-browser-section .browser-dots .dot-green {\n  background-color: #28c840;\n}\n.course-browser-section .browser-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n  flex-grow: 1;\n  max-width: 300px;\n  margin-left: auto;\n  color: #adb5bd;\n  font-size: 13px;\n}\n.course-browser-section .browser-search i {\n  font-size: 14px;\n}\n.course-browser-section .browser-body {\n  padding: 28px 32px 32px;\n}\n@media (max-width: 767px) {\n  .course-browser-section .browser-body {\n    padding: 20px 16px 24px;\n  }\n}\n.course-browser-section .filter-bar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n}\n.course-browser-section .filter-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  white-space: nowrap;\n}\n.course-browser-section .filter-label i {\n  font-size: 16px;\n}\n.course-browser-section .filter-tags {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.course-browser-section .filter-tag {\n  display: inline-block;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n  background: #f1f3f5;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.course-browser-section .filter-tag:hover {\n  background: #e9ecef;\n}\n.course-browser-section .filter-tag.active {\n  background: #006F78;\n  color: #fff;\n}\n.course-browser-section .course-card {\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid #e9ecef;\n  transition: box-shadow 0.2s ease;\n  height: 100%;\n}\n.course-browser-section .course-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.course-browser-section .course-card-img {\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n}\n.course-browser-section .course-card-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.course-browser-section .course-card-body {\n  padding: 16px;\n}\n.course-browser-section .course-card-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.course-browser-section .course-card-badge.badge-teal {\n  background: #e6f7f8;\n  color: #006F78;\n}\n.course-browser-section .course-card-badge.badge-green {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.course-browser-section .course-card-badge.badge-orange {\n  background: #fff3e0;\n  color: #e65100;\n}\n.course-browser-section .course-card-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 12px;\n  line-height: 1.4;\n}\n.course-browser-section .course-card-meta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #6c757d;\n  margin-bottom: 12px;\n}\n.course-browser-section .course-card-meta span {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.course-browser-section .course-card-meta i {\n  font-size: 14px;\n}\n.course-browser-section .course-card-rating {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.course-browser-section .course-card-rating .stars {\n  display: flex;\n  gap: 2px;\n  color: #ffc107;\n  font-size: 14px;\n}\n.course-browser-section .course-card-rating .rating-text {\n  font-size: 12px;\n  color: #6c757d;\n}\n.course-browser-section .course-card-progress .progress-label {\n  font-size: 12px;\n  color: #6c757d;\n  margin-bottom: 6px;\n  display: block;\n}\n.course-browser-section .course-card-progress .progress-bar-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.course-browser-section .course-card-progress .progress-bar-track {\n  flex-grow: 1;\n  height: 6px;\n  background: #e9ecef;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.course-browser-section .course-card-progress .progress-bar-fill {\n  height: 100%;\n  background: #006F78;\n  border-radius: 3px;\n}\n.course-browser-section .course-card-progress .progress-value {\n  font-size: 13px;\n  font-weight: 600;\n  color: #006F78;\n  white-space: nowrap;\n}\n.why-section {\n  padding: 80px 0;\n  background-color: #1a1a2e;\n}\n.why-section .why-header {\n  margin-bottom: 48px;\n}\n.why-section .why-title {\n  font-size: 36px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 16px;\n}\n@media (max-width: 767px) {\n  .why-section .why-title {\n    font-size: 26px;\n  }\n}\n.why-section .why-description {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.7;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.why-section .why-card {\n  background: #222240;\n  border-radius: 16px;\n  padding: 32px 28px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.why-section .why-card-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.why-section .why-card-icon i {\n  font-size: 22px;\n  color: #fff;\n}\n.why-section .why-card-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #fff;\n  margin-bottom: 12px;\n}\n.why-section .why-card-text {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.65);\n  line-height: 1.7;\n  margin-bottom: 24px;\n  flex-grow: 1;\n}\n.why-section .why-card-stat {\n  background: #006F78;\n  border-radius: 12px;\n  padding: 20px 24px;\n}\n.why-section .why-card-stat .stat-number {\n  display: block;\n  font-size: 32px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 4px;\n}\n.why-section .why-card-stat .stat-label {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.cta-section {\n  padding: 100px 0;\n  background: #e8f4f5;\n}\n.cta-section .cta-title {\n  font-size: 42px;\n  font-weight: 700;\n  color: #006F78;\n  margin-bottom: 20px;\n  line-height: 1.25;\n}\n@media (max-width: 767px) {\n  .cta-section .cta-title {\n    font-size: 28px;\n  }\n}\n.cta-section .cta-description {\n  font-size: 16px;\n  color: #6c757d;\n  line-height: 1.7;\n  max-width: 650px;\n  margin: 0 auto 32px;\n}\n.cta-section .btn-cta {\n  display: inline-block;\n  background: #D4A843;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 16px 36px;\n  border-radius: 30px;\n  border: none;\n  transition: background-color 0.3s ease;\n}\n.cta-section .btn-cta:hover {\n  background: #c0952e;\n  color: #fff;\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: Router }, { type: HttpClient }, { type: DomSanitizer }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "app/features/home-list/home/home.component.ts", lineNumber: 63 });
})();
export {
  HomeComponent
};
/*! Bundled license information:

lightgallery/plugins/zoom/lg-zoom.es5.js:
lightgallery/plugins/video/lg-video.es5.js:
  (*!
   * lightgallery | 2.8.3 | March 1st 2025
   * http://www.lightgalleryjs.com/
   * Copyright (c) 2020 Sachin Neravath;
   * @license GPLv3
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=chunk-RG645T6T.js.map
