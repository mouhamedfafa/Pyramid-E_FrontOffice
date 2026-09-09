import {
  LightgalleryComponent,
  LightgalleryModule
} from "./chunk-ZTQOA6HT.js";
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
} from "./chunk-ZALTMDI5.js";
import "./chunk-IBELF3ZV.js";
import {
  require_aos
} from "./chunk-EOCJYYK5.js";
import {
  DataService
} from "./chunk-D4NYV26W.js";
import {
  SlickCarouselModule
} from "./chunk-SQQX572X.js";
import {
  routes
} from "./chunk-DN5YN62E.js";
import "./chunk-GE23GOQB.js";
import {
  Router,
  RouterLink
} from "./chunk-WU2IX7JC.js";
import "./chunk-IN7OGW6T.js";
import "./chunk-YONGDJMG.js";
import {
  CommonModule
} from "./chunk-O72RKWZB.js";
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
  ɵɵproperty,
  ɵɵtext
} from "./chunk-F67U43FE.js";
import {
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
Swiper.use([EffectCards, Mousewheel]);
var HomeComponent = class _HomeComponent {
  DataService;
  router;
  routes = routes;
  isSelected = [false];
  constructor(DataService2, router) {
    this.DataService = DataService2;
    this.router = router;
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
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 362, vars: 4, consts: [[1, "banner-section"], [1, "container"], [1, "row"], [1, "col-xl-7", "col-lg-8"], [1, "banner-content"], [1, "hero-badge"], [1, "text-white"], [1, "hero-description"], ["href", "javascript:void(0);", 1, "btn", "btn-demo"], [1, "catalogue-section"], [1, "text-center"], [1, "catalogue-badge"], [1, "catalogue-title"], [1, "catalogue-description"], [1, "catalogue-tabs"], [1, "catalogue-nav"], [1, "catalogue-nav-item", "active"], [1, "catalogue-nav-indicator"], [1, "catalogue-nav-divider"], [1, "catalogue-nav-item"], [1, "isax", "isax-setting-4"], [1, "course-browser-section"], [1, "browser-mockup"], [1, "browser-toolbar"], [1, "browser-dots"], [1, "dot", "dot-red"], [1, "dot", "dot-yellow"], [1, "dot", "dot-green"], [1, "browser-search"], [1, "isax", "isax-search-normal-1"], [1, "browser-body"], [1, "filter-bar"], [1, "filter-label"], [1, "isax", "isax-tag"], [1, "filter-tags"], [1, "filter-tag", "active"], [1, "filter-tag"], [1, "row", "g-4"], [1, "col-lg-4", "col-md-6"], [1, "course-card"], [1, "course-card-img"], ["src", "assets/img/section_middle_1.png", "alt", "Leadership & Management"], [1, "course-card-body"], [1, "course-card-badge", "badge-teal"], [1, "course-card-title"], [1, "course-card-meta"], [1, "isax", "isax-clock"], [1, "isax", "isax-chart-1"], [1, "course-card-rating"], [1, "stars"], [1, "isax", "isax-star-15"], [1, "isax", "isax-star"], [1, "rating-text"], ["src", "assets/img/section_middle_2.png", "alt", "Comp\xE9tences Techniques"], [1, "course-card-badge", "badge-green"], [1, "course-card-progress"], [1, "progress-label"], [1, "progress-bar-wrapper"], [1, "progress-bar-track"], [1, "progress-bar-fill", 2, "width", "75%"], [1, "progress-value"], ["src", "assets/img/section_middle_3.png", "alt", "Soft Skills"], [1, "course-card-badge", "badge-orange"], [1, "why-section"], [1, "text-center", "why-header"], [1, "why-title"], [1, "why-description"], [1, "why-card"], [1, "why-card-icon"], [1, "isax", "isax-book-1"], [1, "why-card-title"], [1, "why-card-text"], [1, "why-card-stat"], [1, "stat-number"], [1, "stat-label"], [1, "isax", "isax-chart-26"], [1, "client-section"], [1, "trust-sec"], [1, "video-showcase"], ["src", "assets/img/feature/feature-1.jpg", "alt", "banner", 1, "img-fluid", "w-100", "rounded-2"], [1, "video-play"], ["size", "1400-933", 3, "settings", "onInit"], ["src", "https://www.youtube.com/embed/1trvO6dqQUI"], [1, "isax", "isax-play5"], [1, "trust-content"], ["src", "./assets/img/bg/bg-19.png", "alt", "img", 1, "w-100", "trust-bg"], [1, "row", "justify-content-between"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "flex-wrap", "mt-5", "gap-2"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "btn", "btn-dark", 3, "routerLink"], [1, "col-md-7"], [1, "col-md-6"], [1, "text-white", "mb-2"], [1, "text-white", "mb-5"], [1, "d-flex", "align-items-center", "bg-white", "user-goal", "p-2"], [1, "avatar", "avatar-lg", "flex-shrink-0"], ["src", "./assets/img/user/user-28.jpg", "alt", "img", 1, "rounded-pill"], [1, "text-gray-9", "mb-0"], [1, "solution-section"], [1, "text-center", "solution-header"], [1, "solution-badge"], [1, "solution-title"], [1, "solution-subtitle"], [1, "solution-tagline"], [1, "row", "g-4", "align-items-center"], [1, "col-lg-6"], [1, "solution-features"], [1, "solution-feature-card"], [1, "solution-feature-icon"], [1, "isax", "isax-refresh-2"], [1, "solution-feature-title"], [1, "solution-feature-text"], [1, "isax", "isax-trend-up"], [1, "isax", "isax-user-tick"], [1, "solution-image-wrapper"], ["src", "assets/img/sectionrh.png", "alt", "Pyramide LMS en action", 1, "img-fluid", "solution-image"], [1, "solution-image-badge"], [1, "isax", "isax-verify"], [1, "features-section"], [1, "text-center", "features-header"], [1, "features-badge"], [1, "features-title"], [1, "features-description"], [1, "feature-card"], [1, "feature-card-icon"], [1, "feature-card-title"], [1, "feature-card-text"], [1, "isax", "isax-task-square"], [1, "isax", "isax-mobile"], [1, "isax", "isax-activity"], [1, "cta-section"], [1, "cta-title"], [1, "cta-description"], ["href", "javascript:void(0);", 1, "btn", "btn-cta"]], template: function HomeComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(18, "section", 9)(19, "div", 1)(20, "div", 10)(21, "span", 11);
      \u0275\u0275text(22, "CATALOGUE DE FORMATIONS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "h2", 12);
      \u0275\u0275text(24, "Organisez, cat\xE9gorisez, explorez \u2014 en toute simplicit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p", 13);
      \u0275\u0275text(26, " Structurez votre offre de formation avec des cat\xE9gories, tags et th\xE9matiques pour que vos collaborateurs trouvent instantan\xE9ment le parcours qui leur correspond. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 14)(28, "ul", 15)(29, "li", 16);
      \u0275\u0275element(30, "span", 17);
      \u0275\u0275text(31, " Cat\xE9gories de formations ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "li", 18);
      \u0275\u0275elementStart(33, "li", 19);
      \u0275\u0275element(34, "i", 20);
      \u0275\u0275text(35, " Filtrage intelligent ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "li", 18);
      \u0275\u0275elementStart(37, "li", 19);
      \u0275\u0275element(38, "span", 17);
      \u0275\u0275text(39, " Tags ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "li", 18);
      \u0275\u0275elementStart(41, "li", 19);
      \u0275\u0275element(42, "span", 17);
      \u0275\u0275text(43, " Th\xE9matiques ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(44, "li", 18);
      \u0275\u0275elementStart(45, "li", 19);
      \u0275\u0275element(46, "span", 17);
      \u0275\u0275text(47, " Budg\xE9tisation ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(48, "section", 21)(49, "div", 1)(50, "div", 22)(51, "div", 23)(52, "div", 24);
      \u0275\u0275element(53, "span", 25)(54, "span", 26)(55, "span", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 28);
      \u0275\u0275element(57, "i", 29);
      \u0275\u0275elementStart(58, "span");
      \u0275\u0275text(59, "Rechercher une formations, un catalogue...");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 30)(61, "div", 31)(62, "div", 32);
      \u0275\u0275element(63, "i", 33);
      \u0275\u0275text(64, " Filtrer par \xE9tiquette : ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 34)(66, "span", 35);
      \u0275\u0275text(67, "Tous les parcours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "span", 36);
      \u0275\u0275text(69, "Nouveau");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 36);
      \u0275\u0275text(71, "Populaire");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "span", 36);
      \u0275\u0275text(73, "Certifiant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span", 36);
      \u0275\u0275text(75, "Micro-learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 36);
      \u0275\u0275text(77, "Pr\xE9sentiel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "span", 36);
      \u0275\u0275text(79, "E-learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "span", 36);
      \u0275\u0275text(81, "Blended");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "div", 37)(83, "div", 38)(84, "div", 39)(85, "div", 40);
      \u0275\u0275element(86, "img", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 42)(88, "span", 43);
      \u0275\u0275text(89, "Leadership & Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "h6", 44);
      \u0275\u0275text(91, "Principes du Leadership Moderne pour Managers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 45)(93, "span");
      \u0275\u0275element(94, "i", 46);
      \u0275\u0275text(95, " 6 heures");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "span");
      \u0275\u0275element(97, "i", 47);
      \u0275\u0275text(98, " Interm\xE9diaire");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 48)(100, "div", 49);
      \u0275\u0275element(101, "i", 50)(102, "i", 50)(103, "i", 50)(104, "i", 50)(105, "i", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "span", 52);
      \u0275\u0275text(107, "4.9 (\xE9valuations)");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(108, "div", 38)(109, "div", 39)(110, "div", 40);
      \u0275\u0275element(111, "img", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "div", 42)(113, "span", 54);
      \u0275\u0275text(114, "Comp\xE9tences Techniques");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "h6", 44);
      \u0275\u0275text(116, "Introduction pratique \xE0 la cybers\xE9curit\xE9 en entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "div", 45)(118, "span");
      \u0275\u0275element(119, "i", 46);
      \u0275\u0275text(120, " 4.5 heures");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "span");
      \u0275\u0275element(122, "i", 47);
      \u0275\u0275text(123, " D\xE9butant");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 55)(125, "span", 56);
      \u0275\u0275text(126, "Progression");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div", 57)(128, "div", 58);
      \u0275\u0275element(129, "div", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "span", 60);
      \u0275\u0275text(131, "75%");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(132, "div", 38)(133, "div", 39)(134, "div", 40);
      \u0275\u0275element(135, "img", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div", 42)(137, "span", 62);
      \u0275\u0275text(138, "Soft Skills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "h6", 44);
      \u0275\u0275text(140, "N\xE9gociation et R\xE9solution de Conflits en \xC9quipe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div", 45)(142, "span");
      \u0275\u0275element(143, "i", 46);
      \u0275\u0275text(144, " 3 heures");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "span");
      \u0275\u0275element(146, "i", 47);
      \u0275\u0275text(147, " Avanc\xE9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "div", 48)(149, "div", 49);
      \u0275\u0275element(150, "i", 50)(151, "i", 50)(152, "i", 50)(153, "i", 50)(154, "i", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "span", 52);
      \u0275\u0275text(156, "4.8 (\xE9valuations)");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(157, "section", 63)(158, "div", 1)(159, "div", 64)(160, "h2", 65);
      \u0275\u0275text(161, "Pourquoi la formation classique ne suffit plus ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "p", 66);
      \u0275\u0275text(163, " Dans un monde o\xF9 les mutations technologiques et la ma\xEEtrise de l'intelligence artificielle sont devenues des facteurs de productivit\xE9 et d'efficacit\xE9 op\xE9rationnelle, les m\xE9thodes de formation classiques tendent \xE0 devenir quasi-inefficaces et obsol\xE8tes. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "div", 37)(165, "div", 38)(166, "div", 67)(167, "div", 68);
      \u0275\u0275element(168, "i", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "h5", 70);
      \u0275\u0275text(170, "Contenus rapidement obsol\xE8tes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "p", 71);
      \u0275\u0275text(172, " Dans un monde o\xF9 les comp\xE9tences \xE9voluent tous les 18 mois, les manuels et autres supports de formation transforment vos \xE9quipes en spectateurs plut\xF4t qu'en acteurs du changement. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "div", 72)(174, "span", 73);
      \u0275\u0275text(175, "72 %");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "span", 74);
      \u0275\u0275text(177, "des formations d\xE9pass\xE9es en moins d'un an");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(178, "div", 38)(179, "div", 67)(180, "div", 68);
      \u0275\u0275element(181, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "h5", 70);
      \u0275\u0275text(183, "Absence de suivi d'impact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "p", 71);
      \u0275\u0275text(185, " Sans donn\xE9es fiables, impossible de justifier votre budget formation, d'identifier les lacunes critiques ou de prouver le retour sur investissement \xE0 votre direction. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "div", 72)(187, "span", 73);
      \u0275\u0275text(188, "67 %");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "span", 74);
      \u0275\u0275text(190, "des DRH ne mesurent pas le ROI");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(191, "div", 38)(192, "div", 67)(193, "div", 68);
      \u0275\u0275element(194, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "h5", 70);
      \u0275\u0275text(196, "Taux d'engagement trop faible");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "p", 71);
      \u0275\u0275text(198, " Les collaborateurs qui d\xE9crochent car les sessions longues et passives ne retiennent plus l'attention. Vos \xE9quipes abandonnent les parcours \xE0 mi-chemin, et vos investissements partent \xE0 la corbeille. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "div", 72)(200, "span", 73);
      \u0275\u0275text(201, "15 %");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "span", 74);
      \u0275\u0275text(203, "seulement finissent leurs formations");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(204, "section", 76);
      \u0275\u0275element(205, "div", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "section", 77)(207, "div", 1)(208, "div", 78);
      \u0275\u0275element(209, "img", 79);
      \u0275\u0275elementStart(210, "div", 80)(211, "lightgallery", 81)(212, "a", 82);
      \u0275\u0275element(213, "i", 83);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(214, "div", 84);
      \u0275\u0275element(215, "img", 85);
      \u0275\u0275elementStart(216, "div", 86)(217, "div", 87)(218, "h4");
      \u0275\u0275text(219, " Approuv\xE9 par 5.000+ entreprises et employ\xE9s satisfaits depuis 2020 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "div", 88)(221, "a", 89);
      \u0275\u0275text(222, "S'inscrire comme Employ\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "a", 90);
      \u0275\u0275text(224, "Devenir Formateur");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(225, "div", 91)(226, "div", 2)(227, "div", 92)(228, "h4", 93);
      \u0275\u0275text(229, "4.9/5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "h5", 93);
      \u0275\u0275text(231, "Note de Satisfaction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "p", 94);
      \u0275\u0275text(233, " Un taux de satisfaction exceptionnel qui t\xE9moigne de la qualit\xE9 de nos formations. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(234, "div", 92)(235, "h4", 93);
      \u0275\u0275text(236, "5000+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "h5", 93);
      \u0275\u0275text(238, "Employ\xE9s Satisfaits en Afrique");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "p", 94);
      \u0275\u0275text(240, " Des milliers de professionnels africains ont transform\xE9 leur carri\xE8re gr\xE2ce \xE0 Pyramide. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(241, "div", 95)(242, "div", 96);
      \u0275\u0275element(243, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "p", 98);
      \u0275\u0275text(245, ' "Toutes les formations sont incroyablement utiles pour atteindre vos objectifs professionnels" ');
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(246, "section", 99)(247, "div", 1)(248, "div", 100)(249, "span", 101);
      \u0275\u0275text(250, "NOTRE SOLUTION");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "h2", 102);
      \u0275\u0275text(252, "Pyramide LMS : la plateforme qui change la donne");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "p", 103);
      \u0275\u0275text(254, "CE QUE PYRAMIDE LMS CHANGE CONCR\xC8TEMENT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "p", 104);
      \u0275\u0275text(256, " Vous \xEAtes l\u2019expert de votre m\xE9tier.");
      \u0275\u0275element(257, "br");
      \u0275\u0275text(258, " Devenez aussi l\u2019auteur de vos formations. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(259, "div", 105)(260, "div", 106)(261, "div", 107)(262, "div", 108)(263, "div", 109);
      \u0275\u0275element(264, "i", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "div")(266, "h5", 111);
      \u0275\u0275text(267, "Cr\xE9ez vos contenus selon vos enjeux m\xE9tier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "p", 112);
      \u0275\u0275text(269, " Fini les formations g\xE9n\xE9riques, recycl\xE9es, d\xE9connect\xE9es du terrain et de vos priorit\xE9s. Avec Pyramide LMS, vos experts internes deviennent des g\xE9n\xE9rateurs de comp\xE9tences utiles pour la croissance de votre activit\xE9 : ils con\xE7oivent des parcours sur mesure align\xE9s sur vos proc\xE9dures, vos valeurs et vos priorit\xE9s strat\xE9giques. Vid\xE9os, PDF, quiz, pr\xE9sentations - tout vos formats en un seul espace. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(270, "div", 108)(271, "div", 109);
      \u0275\u0275element(272, "i", 113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "div")(274, "h5", 111);
      \u0275\u0275text(275, "Pilotez les comp\xE9tences, pas seulement les pr\xE9sences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "p", 112);
      \u0275\u0275text(277, " Chaque manager, RH et directeur dispose d\u2019un tableau de bord personnalis\xE9 pour suivre en temps r\xE9el l\u2019acquisition des comp\xE9tences, les taux de compl\xE9tion et l\u2019impact des formations sur la performance de ses \xE9quipes. Des donn\xE9es actionnables et dynamiques, pas des statistiques de fa\xE7ade. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(278, "div", 108)(279, "div", 109);
      \u0275\u0275element(280, "i", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "div")(282, "h5", 111);
      \u0275\u0275text(283, "Des parcours qui donnent envie de renforcer ses comp\xE9tences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "p", 112);
      \u0275\u0275text(285, " Micro-learning, gamification, quiz interactifs, badges et certificats - Pyramide LMS transforme la formation en une exp\xE9rience fluide. Vos collaborateurs progressent \xE0 leur rythme, sur mobile comme sur PC ou Tablette, et valident des comp\xE9tences reconnues et utiles pour la croissance de votre organisation. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(286, "div", 106)(287, "div", 115);
      \u0275\u0275element(288, "img", 116);
      \u0275\u0275elementStart(289, "div", 117);
      \u0275\u0275element(290, "i", 118);
      \u0275\u0275text(291, " Nos partenaires enregistrent des taux de compl\xE9tion sup\xE9rieurs \xE0 90% ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(292, "section", 119)(293, "div", 1)(294, "div", 120)(295, "span", 121);
      \u0275\u0275text(296, "FONCTIONNALIT\xC9S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "h2", 122);
      \u0275\u0275text(298, "Fonctionnalit\xE9s premium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "p", 123);
      \u0275\u0275text(300, " Une exp\xE9rience intuitive, structur\xE9e et mesurable - con\xE7ues pour les entreprises qui veulent aller vite, mesurer l'impact et engager durablement leurs \xE9quipes. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(301, "div", 37)(302, "div", 106)(303, "div", 124)(304, "div", 125);
      \u0275\u0275element(305, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "h5", 126);
      \u0275\u0275text(307, "Parcours personnalis\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "p", 127);
      \u0275\u0275text(309, " Assigner les bonnes formations aux bonnes personnes selon leurs responsabilit\xE9s, leur s\xE9niorit\xE9 et leurs objectifs m\xE9tiers. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(310, "div", 106)(311, "div", 124)(312, "div", 125);
      \u0275\u0275element(313, "i", 128);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "h5", 126);
      \u0275\u0275text(315, "Quiz & \xE9valuations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "p", 127);
      \u0275\u0275text(317, " Validez l'ancrage des connaissances gr\xE2ce \xE0 des tests interactifs r\xE9guliers et corrections d\xE9taill\xE9es. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(318, "div", 106)(319, "div", 124)(320, "div", 125);
      \u0275\u0275element(321, "i", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "h5", 126);
      \u0275\u0275text(323, "Certificats officiels");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "p", 127);
      \u0275\u0275text(325, " D\xE9livrez des certificats \xE0 l'image de votre organisation partageables sur les r\xE9seaux professionnels. Cela valorise les efforts de vos collaborateurs et renforce l'engagement. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(326, "div", 106)(327, "div", 124)(328, "div", 125);
      \u0275\u0275element(329, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "h5", 126);
      \u0275\u0275text(331, "Tableau de bord manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "p", 127);
      \u0275\u0275text(333, " Chaque utilisateur dispose d'un espace de pilotage adapt\xE9 \xE0 son r\xF4le. Le DG suit le ROI, les RHs suivent les co\xFBts li\xE9s \xE0 la formation, l'acquisition des comp\xE9tences, les reporting, les managers suivent leurs \xE9quipes et l'employ\xE9 suit ses propres progressions. Chaque profil dispose de ses KPIs en temps r\xE9el. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(334, "div", 106)(335, "div", 124)(336, "div", 125);
      \u0275\u0275element(337, "i", 129);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(338, "h5", 126);
      \u0275\u0275text(339, "Acc\xE8s multi-device");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "p", 127);
      \u0275\u0275text(341, " Vos collaborateurs se forment o\xF9 qu'ils se trouvent sur tablette, desktop et mobile. Une interface intuitive et performante. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(342, "div", 106)(343, "div", 124)(344, "div", 125);
      \u0275\u0275element(345, "i", 130);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "h5", 126);
      \u0275\u0275text(347, "Suivi progression");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "p", 127);
      \u0275\u0275text(349, " Suivez le parcours pas \xE0 pas et relancez automatiquement les employ\xE9s inactifs. ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(350, "section", 131)(351, "div", 1)(352, "div", 10)(353, "h2", 132);
      \u0275\u0275text(354, "Pr\xEAt \xE0 d\xE9velopper les comp\xE9tences");
      \u0275\u0275element(355, "br");
      \u0275\u0275text(356, "de vos \xE9quipes ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "p", 133);
      \u0275\u0275text(358, " Rejoignez d\xE8s aujourd'hui les entreprises leaders en Afrique qui font confiance \xE0 Pyramide LMS pour la mont\xE9e en comp\xE9tences et la fid\xE9lisation de leurs talents. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(359, "a", 134);
      \u0275\u0275text(360, "Contacter notre \xE9quipe");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(361, "app-footer");
    }
    if (rf & 2) {
      \u0275\u0275advance(211);
      \u0275\u0275property("settings", ctx.settings)("onInit", ctx.onInit);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.becomeAnExpert);
    }
  }, dependencies: [CommonModule, FooterComponent, RouterLink, SlickCarouselModule, LightgalleryModule, LightgalleryComponent], styles: ['/* src/app/features/home-list/home/home.component.scss */\n.banner-section {\n  position: relative;\n  background: url("./media/home-bg-white.png") no-repeat center center;\n  background-size: cover;\n  width: 100%;\n  min-height: 737px;\n  display: flex;\n  align-items: center;\n  padding: 180px 0 80px;\n  z-index: 0;\n  overflow: hidden;\n}\n.banner-section .container {\n  position: relative;\n  z-index: 1;\n}\n.banner-section .banner-content {\n  position: relative;\n  z-index: 1;\n}\n.banner-section .banner-content .hero-badge {\n  display: inline-block;\n  background-color: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  padding: 8px 20px;\n  color: #F5A623;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  margin-bottom: 24px;\n  border-radius: 30px;\n  text-transform: uppercase;\n}\n.banner-section .banner-content h1 {\n  font-size: 48px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin-bottom: 24px;\n  max-width: 600px;\n}\n.banner-section .banner-content h1 span {\n  color: #F5A623;\n}\n@media (max-width: 991px) {\n  .banner-section .banner-content h1 {\n    font-size: 36px;\n  }\n}\n@media (max-width: 767px) {\n  .banner-section .banner-content h1 {\n    font-size: 28px;\n  }\n}\n@media (max-width: 575px) {\n  .banner-section .banner-content h1 {\n    font-size: 24px;\n  }\n}\n.banner-section .banner-content .hero-description {\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 16px;\n  line-height: 1.7;\n  margin-bottom: 32px;\n  max-width: 560px;\n}\n.banner-section .banner-content .btn-demo {\n  display: inline-block;\n  background-color: #F5A623;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 14px 32px;\n  border-radius: 8px;\n  border: none;\n  transition: background-color 0.3s ease;\n}\n.banner-section .banner-content .btn-demo:hover {\n  background-color: #e09515;\n  color: #fff;\n}\n.catalogue-section {\n  padding: 80px 0 60px;\n  background-color: #f8f9fa;\n}\n.catalogue-section .catalogue-badge {\n  display: inline-block;\n  border: 2px solid #006F78;\n  color: #006F78;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  padding: 8px 24px;\n  border-radius: 30px;\n  margin-bottom: 24px;\n  text-transform: uppercase;\n}\n.catalogue-section .catalogue-title {\n  font-size: 36px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 16px;\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media (max-width: 767px) {\n  .catalogue-section .catalogue-title {\n    font-size: 24px;\n  }\n}\n.catalogue-section .catalogue-description {\n  font-size: 16px;\n  color: #6c757d;\n  line-height: 1.7;\n  max-width: 700px;\n  margin: 0 auto 40px;\n}\n.catalogue-section .catalogue-tabs {\n  display: flex;\n  justify-content: center;\n}\n.catalogue-section .catalogue-nav {\n  display: inline-flex;\n  align-items: center;\n  list-style: none;\n  padding: 12px 24px;\n  margin: 0;\n  background: #fff;\n  border-radius: 50px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  gap: 0;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n@media (max-width: 767px) {\n  .catalogue-section .catalogue-nav {\n    padding: 10px 16px;\n    border-radius: 16px;\n  }\n}\n.catalogue-section .catalogue-nav-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1a1a2e;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color 0.2s ease;\n}\n.catalogue-section .catalogue-nav-item:hover {\n  color: #006F78;\n}\n.catalogue-section .catalogue-nav-item.active {\n  color: #006F78;\n  font-weight: 600;\n}\n.catalogue-section .catalogue-nav-item i {\n  font-size: 16px;\n}\n.catalogue-section .catalogue-nav-indicator {\n  width: 4px;\n  height: 16px;\n  background-color: #006F78;\n  border-radius: 2px;\n  display: inline-block;\n}\n.catalogue-section .catalogue-nav-divider {\n  width: 1px;\n  height: 20px;\n  background-color: #dee2e6;\n  margin: 0 4px;\n}\n.course-browser-section {\n  padding: 0 0 80px;\n  background-color: #f8f9fa;\n}\n.course-browser-section .browser-mockup {\n  background: #fff;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.course-browser-section .browser-toolbar {\n  display: flex;\n  align-items: center;\n  padding: 14px 20px;\n  background: #f1f1f1;\n  border-bottom: 1px solid #e5e5e5;\n  gap: 16px;\n}\n.course-browser-section .browser-dots {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.course-browser-section .browser-dots .dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.course-browser-section .browser-dots .dot-red {\n  background-color: #ff5f57;\n}\n.course-browser-section .browser-dots .dot-yellow {\n  background-color: #febc2e;\n}\n.course-browser-section .browser-dots .dot-green {\n  background-color: #28c840;\n}\n.course-browser-section .browser-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n  flex-grow: 1;\n  max-width: 300px;\n  margin-left: auto;\n  color: #adb5bd;\n  font-size: 13px;\n}\n.course-browser-section .browser-search i {\n  font-size: 14px;\n}\n.course-browser-section .browser-body {\n  padding: 28px 32px 32px;\n}\n@media (max-width: 767px) {\n  .course-browser-section .browser-body {\n    padding: 20px 16px 24px;\n  }\n}\n.course-browser-section .filter-bar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n}\n.course-browser-section .filter-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  white-space: nowrap;\n}\n.course-browser-section .filter-label i {\n  font-size: 16px;\n}\n.course-browser-section .filter-tags {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.course-browser-section .filter-tag {\n  display: inline-block;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n  background: #f1f3f5;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.course-browser-section .filter-tag:hover {\n  background: #e9ecef;\n}\n.course-browser-section .filter-tag.active {\n  background: #006F78;\n  color: #fff;\n}\n.course-browser-section .course-card {\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid #e9ecef;\n  transition: box-shadow 0.2s ease;\n  height: 100%;\n}\n.course-browser-section .course-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.course-browser-section .course-card-img {\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n}\n.course-browser-section .course-card-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.course-browser-section .course-card-body {\n  padding: 16px;\n}\n.course-browser-section .course-card-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.course-browser-section .course-card-badge.badge-teal {\n  background: #e6f7f8;\n  color: #006F78;\n}\n.course-browser-section .course-card-badge.badge-green {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.course-browser-section .course-card-badge.badge-orange {\n  background: #fff3e0;\n  color: #e65100;\n}\n.course-browser-section .course-card-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 12px;\n  line-height: 1.4;\n}\n.course-browser-section .course-card-meta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #6c757d;\n  margin-bottom: 12px;\n}\n.course-browser-section .course-card-meta span {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.course-browser-section .course-card-meta i {\n  font-size: 14px;\n}\n.course-browser-section .course-card-rating {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.course-browser-section .course-card-rating .stars {\n  display: flex;\n  gap: 2px;\n  color: #ffc107;\n  font-size: 14px;\n}\n.course-browser-section .course-card-rating .rating-text {\n  font-size: 12px;\n  color: #6c757d;\n}\n.course-browser-section .course-card-progress .progress-label {\n  font-size: 12px;\n  color: #6c757d;\n  margin-bottom: 6px;\n  display: block;\n}\n.course-browser-section .course-card-progress .progress-bar-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.course-browser-section .course-card-progress .progress-bar-track {\n  flex-grow: 1;\n  height: 6px;\n  background: #e9ecef;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.course-browser-section .course-card-progress .progress-bar-fill {\n  height: 100%;\n  background: #006F78;\n  border-radius: 3px;\n}\n.course-browser-section .course-card-progress .progress-value {\n  font-size: 13px;\n  font-weight: 600;\n  color: #006F78;\n  white-space: nowrap;\n}\n.why-section {\n  padding: 80px 0;\n  background-color: #1a1a2e;\n}\n.why-section .why-header {\n  margin-bottom: 48px;\n}\n.why-section .why-title {\n  font-size: 36px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 16px;\n}\n@media (max-width: 767px) {\n  .why-section .why-title {\n    font-size: 26px;\n  }\n}\n.why-section .why-description {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.7;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.why-section .why-card {\n  background: #222240;\n  border-radius: 16px;\n  padding: 32px 28px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.why-section .why-card-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.why-section .why-card-icon i {\n  font-size: 22px;\n  color: #fff;\n}\n.why-section .why-card-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #fff;\n  margin-bottom: 12px;\n}\n.why-section .why-card-text {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.65);\n  line-height: 1.7;\n  margin-bottom: 24px;\n  flex-grow: 1;\n}\n.why-section .why-card-stat {\n  background: #006F78;\n  border-radius: 12px;\n  padding: 20px 24px;\n}\n.why-section .why-card-stat .stat-number {\n  display: block;\n  font-size: 32px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 4px;\n}\n.why-section .why-card-stat .stat-label {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.solution-section {\n  padding: 80px 0;\n  background: #fff;\n}\n.solution-section .solution-header {\n  margin-bottom: 56px;\n}\n.solution-section .solution-badge {\n  display: inline-block;\n  background: #006F78;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  padding: 8px 24px;\n  border-radius: 30px;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n}\n.solution-section .solution-title {\n  font-size: 40px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 20px;\n}\n@media (max-width: 767px) {\n  .solution-section .solution-title {\n    font-size: 26px;\n  }\n}\n.solution-section .solution-subtitle {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  color: #6c757d;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n}\n.solution-section .solution-tagline {\n  font-size: 16px;\n  color: #495057;\n  line-height: 1.6;\n}\n.solution-section .solution-features {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.solution-section .solution-feature-card {\n  display: flex;\n  gap: 16px;\n  padding: 24px;\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 16px;\n  transition: box-shadow 0.2s ease;\n}\n.solution-section .solution-feature-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 575px) {\n  .solution-section .solution-feature-card {\n    flex-direction: column;\n  }\n}\n.solution-section .solution-feature-icon {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  border-radius: 12px;\n  background: #f1f3f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.solution-section .solution-feature-icon i {\n  font-size: 20px;\n  color: #006F78;\n}\n.solution-section .solution-feature-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 8px;\n}\n.solution-section .solution-feature-text {\n  font-size: 14px;\n  color: #6c757d;\n  line-height: 1.7;\n  margin-bottom: 0;\n}\n.solution-section .solution-image-wrapper {\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n}\n.solution-section .solution-image {\n  width: 100%;\n  border-radius: 16px;\n}\n.solution-section .solution-image-badge {\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  right: 20px;\n  background: rgba(0, 111, 120, 0.9);\n  color: #fff;\n  padding: 14px 20px;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.solution-section .solution-image-badge i {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.features-section {\n  padding: 80px 0;\n  background: #f5f7f9;\n}\n.features-section .features-header {\n  margin-bottom: 48px;\n}\n.features-section .features-badge {\n  display: inline-block;\n  background: #006F78;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  padding: 8px 24px;\n  border-radius: 30px;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n}\n.features-section .features-title {\n  font-size: 40px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 16px;\n}\n@media (max-width: 767px) {\n  .features-section .features-title {\n    font-size: 28px;\n  }\n}\n.features-section .features-description {\n  font-size: 16px;\n  color: #6c757d;\n  line-height: 1.7;\n  max-width: 650px;\n  margin: 0 auto;\n}\n.features-section .feature-card {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 16px;\n  padding: 32px 28px;\n  height: 100%;\n  transition: box-shadow 0.2s ease;\n}\n.features-section .feature-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n.features-section .feature-card-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: #e6f7f8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.features-section .feature-card-icon i {\n  font-size: 22px;\n  color: #006F78;\n}\n.features-section .feature-card-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 10px;\n}\n.features-section .feature-card-text {\n  font-size: 14px;\n  color: #6c757d;\n  line-height: 1.7;\n  margin-bottom: 0;\n}\n.cta-section {\n  padding: 100px 0;\n  background: #e8f4f5;\n}\n.cta-section .cta-title {\n  font-size: 42px;\n  font-weight: 700;\n  color: #006F78;\n  margin-bottom: 20px;\n  line-height: 1.25;\n}\n@media (max-width: 767px) {\n  .cta-section .cta-title {\n    font-size: 28px;\n  }\n}\n.cta-section .cta-description {\n  font-size: 16px;\n  color: #6c757d;\n  line-height: 1.7;\n  max-width: 650px;\n  margin: 0 auto 32px;\n}\n.cta-section .btn-cta {\n  display: inline-block;\n  background: #D4A843;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 16px 36px;\n  border-radius: 30px;\n  border: none;\n  transition: background-color 0.3s ease;\n}\n.cta-section .btn-cta:hover {\n  background: #c0952e;\n  color: #fff;\n}\n/*# sourceMappingURL=home.component.css.map */\n'], encapsulation: 2 });
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
          <a href="javascript:void(0);" class="btn btn-demo">Demander une d\xE9mo</a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
<!-- banner -->\r
\r
<!-- catalogue de formations -->\r
<section class="catalogue-section">\r
  <div class="container">\r
    <div class="text-center">\r
      <span class="catalogue-badge">CATALOGUE DE FORMATIONS</span>\r
      <h2 class="catalogue-title">Organisez, cat&eacute;gorisez, explorez &mdash; en toute simplicit&eacute;</h2>\r
      <p class="catalogue-description">\r
        Structurez votre offre de formation avec des cat&eacute;gories, tags et th&eacute;matiques pour que vos collaborateurs\r
        trouvent instantan&eacute;ment le parcours qui leur correspond.\r
      </p>\r
    </div>\r
    <div class="catalogue-tabs">\r
      <ul class="catalogue-nav">\r
        <li class="catalogue-nav-item active">\r
          <span class="catalogue-nav-indicator"></span>\r
          Cat&eacute;gories de formations\r
        </li>\r
        <li class="catalogue-nav-divider"></li>\r
        <li class="catalogue-nav-item">\r
          <i class="isax isax-setting-4"></i>\r
          Filtrage intelligent\r
        </li>\r
        <li class="catalogue-nav-divider"></li>\r
        <li class="catalogue-nav-item">\r
          <span class="catalogue-nav-indicator"></span>\r
          Tags\r
        </li>\r
        <li class="catalogue-nav-divider"></li>\r
        <li class="catalogue-nav-item">\r
          <span class="catalogue-nav-indicator"></span>\r
          Th&eacute;matiques\r
        </li>\r
        <li class="catalogue-nav-divider"></li>\r
        <li class="catalogue-nav-item">\r
          <span class="catalogue-nav-indicator"></span>\r
          Budg&eacute;tisation\r
        </li>\r
      </ul>\r
    </div>\r
  </div>\r
</section>\r
<!-- /catalogue de formations -->\r
\r
<!-- course browser mockup -->\r
<section class="course-browser-section">\r
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
</section>\r
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
<!-- trust -->\r
<section class="trust-sec">\r
  <div class="container">\r
    <div class="video-showcase">\r
      <img src="assets/img/feature/feature-1.jpg" class="img-fluid w-100 rounded-2" alt="banner" />\r
      <div class="video-play">\r
        <lightgallery [settings]="settings" [onInit]="onInit" size="1400-933">\r
          <a src="https://www.youtube.com/embed/1trvO6dqQUI"><i class="isax isax-play5"></i></a>\r
      </lightgallery>\r
      </div>\r
    </div>\r
    <div class="trust-content">\r
      <img src="./assets/img/bg/bg-19.png" alt="img" class="w-100 trust-bg" />\r
      <div class="row justify-content-between">\r
        <div class="col-md-4">\r
          <h4>\r
            Approuv\xE9 par 5.000+ entreprises et employ\xE9s satisfaits depuis 2020\r
          </h4>\r
          <div class="d-flex align-items-center flex-wrap mt-5 gap-2">\r
            <a [routerLink]="routes.login" class="btn btn-secondary">S'inscrire comme Employ\xE9</a>\r
            <a [routerLink]="routes.becomeAnExpert" class="btn btn-dark">Devenir Formateur</a>\r
          </div>\r
        </div>\r
        <div class="col-md-7">\r
          <div class="row">\r
            <div class="col-md-6">\r
              <h4 class="text-white mb-2">4.9/5</h4>\r
              <h5 class="text-white mb-2">Note de Satisfaction</h5>\r
              <p class="text-white mb-5">\r
                Un taux de satisfaction exceptionnel qui t\xE9moigne de la qualit\xE9 de nos formations.\r
              </p>\r
            </div>\r
            <div class="col-md-6">\r
              <h4 class="text-white mb-2">5000+</h4>\r
              <h5 class="text-white mb-2">Employ\xE9s Satisfaits en Afrique</h5>\r
              <p class="text-white mb-5">\r
                Des milliers de professionnels africains ont transform\xE9 leur carri\xE8re gr\xE2ce \xE0 Pyramide.\r
              </p>\r
            </div>\r
          </div>\r
          <div class="d-flex align-items-center bg-white user-goal p-2">\r
            <div class="avatar avatar-lg flex-shrink-0">\r
              <img class="rounded-pill" src="./assets/img/user/user-28.jpg" alt="img" />\r
            </div>\r
            <p class="text-gray-9 mb-0">\r
              "Toutes les formations sont incroyablement utiles pour atteindre vos objectifs professionnels"\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
<!-- notre solution -->\r
<section class="solution-section">\r
  <div class="container">\r
    <div class="text-center solution-header">\r
      <span class="solution-badge">NOTRE SOLUTION</span>\r
      <h2 class="solution-title">Pyramide LMS : la plateforme qui change la donne</h2>\r
      <p class="solution-subtitle">CE QUE PYRAMIDE LMS CHANGE CONCR&Egrave;TEMENT</p>\r
      <p class="solution-tagline">\r
        Vous &ecirc;tes l\u2019expert de votre m&eacute;tier.<br>\r
        Devenez aussi l\u2019auteur de vos formations.\r
      </p>\r
    </div>\r
    <div class="row g-4 align-items-center">\r
      <div class="col-lg-6">\r
        <div class="solution-features">\r
          <div class="solution-feature-card">\r
            <div class="solution-feature-icon">\r
              <i class="isax isax-refresh-2"></i>\r
            </div>\r
            <div>\r
              <h5 class="solution-feature-title">Cr&eacute;ez vos contenus selon vos enjeux m&eacute;tier</h5>\r
              <p class="solution-feature-text">\r
                Fini les formations g&eacute;n&eacute;riques, recycl&eacute;es, d&eacute;connect&eacute;es du terrain et\r
                de vos priorit&eacute;s. Avec Pyramide LMS, vos experts internes deviennent\r
                des g&eacute;n&eacute;rateurs de comp&eacute;tences utiles pour la croissance de votre\r
                activit&eacute; : ils con&ccedil;oivent des parcours sur mesure align&eacute;s sur vos\r
                proc&eacute;dures, vos valeurs et vos priorit&eacute;s strat&eacute;giques. Vid&eacute;os, PDF, quiz,\r
                pr&eacute;sentations - tout vos formats en un seul espace.\r
              </p>\r
            </div>\r
          </div>\r
          <div class="solution-feature-card">\r
            <div class="solution-feature-icon">\r
              <i class="isax isax-trend-up"></i>\r
            </div>\r
            <div>\r
              <h5 class="solution-feature-title">Pilotez les comp&eacute;tences, pas seulement les pr&eacute;sences</h5>\r
              <p class="solution-feature-text">\r
                Chaque manager, RH et directeur dispose d\u2019un tableau de bord\r
                personnalis&eacute; pour suivre en temps r&eacute;el l\u2019acquisition des comp&eacute;tences,\r
                les taux de compl&eacute;tion et l\u2019impact des formations sur la performance\r
                de ses &eacute;quipes. Des donn&eacute;es actionnables et dynamiques, pas des\r
                statistiques de fa&ccedil;ade.\r
              </p>\r
            </div>\r
          </div>\r
          <div class="solution-feature-card">\r
            <div class="solution-feature-icon">\r
              <i class="isax isax-user-tick"></i>\r
            </div>\r
            <div>\r
              <h5 class="solution-feature-title">Des parcours qui donnent envie de renforcer ses comp&eacute;tences</h5>\r
              <p class="solution-feature-text">\r
                Micro-learning, gamification, quiz interactifs, badges et certificats -\r
                Pyramide LMS transforme la formation en une exp&eacute;rience fluide. Vos\r
                collaborateurs progressent &agrave; leur rythme, sur mobile comme sur PC ou\r
                Tablette, et valident des comp&eacute;tences reconnues et utiles pour la\r
                croissance de votre organisation.\r
              </p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="col-lg-6">\r
        <div class="solution-image-wrapper">\r
          <img src="assets/img/sectionrh.png" alt="Pyramide LMS en action" class="img-fluid solution-image" />\r
          <div class="solution-image-badge">\r
            <i class="isax isax-verify"></i>\r
            Nos partenaires enregistrent des taux de compl&eacute;tion sup&eacute;rieurs &agrave; 90%\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
<!-- /notre solution -->\r
\r
<!-- fonctionnalit\xE9s premium -->\r
<section class="features-section">\r
  <div class="container">\r
    <div class="text-center features-header">\r
      <span class="features-badge">FONCTIONNALIT&Eacute;S</span>\r
      <h2 class="features-title">Fonctionnalit&eacute;s premium</h2>\r
      <p class="features-description">\r
        Une exp&eacute;rience intuitive, structur&eacute;e et mesurable - con&ccedil;ues pour les entreprises qui\r
        veulent aller vite, mesurer l'impact et engager durablement leurs &eacute;quipes.\r
      </p>\r
    </div>\r
    <div class="row g-4">\r
      <div class="col-lg-6">\r
        <div class="feature-card">\r
          <div class="feature-card-icon">\r
            <i class="isax isax-setting-4"></i>\r
          </div>\r
          <h5 class="feature-card-title">Parcours personnalis&eacute;s</h5>\r
          <p class="feature-card-text">\r
            Assigner les bonnes formations aux bonnes personnes selon leurs\r
            responsabilit&eacute;s, leur s&eacute;niorit&eacute; et leurs objectifs m&eacute;tiers.\r
          </p>\r
        </div>\r
      </div>\r
      <div class="col-lg-6">\r
        <div class="feature-card">\r
          <div class="feature-card-icon">\r
            <i class="isax isax-task-square"></i>\r
          </div>\r
          <h5 class="feature-card-title">Quiz &amp; &eacute;valuations</h5>\r
          <p class="feature-card-text">\r
            Validez l'ancrage des connaissances gr&acirc;ce &agrave; des tests interactifs r&eacute;guliers et\r
            corrections d&eacute;taill&eacute;es.\r
          </p>\r
        </div>\r
      </div>\r
      <div class="col-lg-6">\r
        <div class="feature-card">\r
          <div class="feature-card-icon">\r
            <i class="isax isax-user-tick"></i>\r
          </div>\r
          <h5 class="feature-card-title">Certificats officiels</h5>\r
          <p class="feature-card-text">\r
            D&eacute;livrez des certificats &agrave; l'image de votre organisation partageables sur les\r
            r&eacute;seaux professionnels. Cela valorise les efforts de vos collaborateurs et\r
            renforce l'engagement.\r
          </p>\r
        </div>\r
      </div>\r
      <div class="col-lg-6">\r
        <div class="feature-card">\r
          <div class="feature-card-icon">\r
            <i class="isax isax-chart-26"></i>\r
          </div>\r
          <h5 class="feature-card-title">Tableau de bord manager</h5>\r
          <p class="feature-card-text">\r
            Chaque utilisateur dispose d'un espace de pilotage adapt&eacute; &agrave; son r&ocirc;le. Le DG\r
            suit le ROI, les RHs suivent les co&ucirc;ts li&eacute;s &agrave; la formation, l'acquisition des\r
            comp&eacute;tences, les reporting, les managers suivent leurs &eacute;quipes et l'employ&eacute;\r
            suit ses propres progressions. Chaque profil dispose de ses KPIs en temps\r
            r&eacute;el.\r
          </p>\r
        </div>\r
      </div>\r
      <div class="col-lg-6">\r
        <div class="feature-card">\r
          <div class="feature-card-icon">\r
            <i class="isax isax-mobile"></i>\r
          </div>\r
          <h5 class="feature-card-title">Acc&egrave;s multi-device</h5>\r
          <p class="feature-card-text">\r
            Vos collaborateurs se forment o&ugrave; qu'ils se trouvent sur tablette, desktop et\r
            mobile. Une interface intuitive et performante.\r
          </p>\r
        </div>\r
      </div>\r
      <div class="col-lg-6">\r
        <div class="feature-card">\r
          <div class="feature-card-icon">\r
            <i class="isax isax-activity"></i>\r
          </div>\r
          <h5 class="feature-card-title">Suivi progression</h5>\r
          <p class="feature-card-text">\r
            Suivez le parcours pas &agrave; pas et relancez automatiquement les employ&eacute;s\r
            inactifs.\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
<!-- /fonctionnalit\xE9s premium -->\r
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
      <a href="javascript:void(0);" class="btn btn-cta">Contacter notre &eacute;quipe</a>\r
    </div>\r
  </div>\r
</section>\r
<!-- /CTA final -->\r
\r
  <app-footer></app-footer>\r
`, styles: ['/* src/app/features/home-list/home/home.component.scss */\n.banner-section {\n  position: relative;\n  background: url("./media/home-bg-white.png") no-repeat center center;\n  background-size: cover;\n  width: 100%;\n  min-height: 737px;\n  display: flex;\n  align-items: center;\n  padding: 180px 0 80px;\n  z-index: 0;\n  overflow: hidden;\n}\n.banner-section .container {\n  position: relative;\n  z-index: 1;\n}\n.banner-section .banner-content {\n  position: relative;\n  z-index: 1;\n}\n.banner-section .banner-content .hero-badge {\n  display: inline-block;\n  background-color: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  padding: 8px 20px;\n  color: #F5A623;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  margin-bottom: 24px;\n  border-radius: 30px;\n  text-transform: uppercase;\n}\n.banner-section .banner-content h1 {\n  font-size: 48px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin-bottom: 24px;\n  max-width: 600px;\n}\n.banner-section .banner-content h1 span {\n  color: #F5A623;\n}\n@media (max-width: 991px) {\n  .banner-section .banner-content h1 {\n    font-size: 36px;\n  }\n}\n@media (max-width: 767px) {\n  .banner-section .banner-content h1 {\n    font-size: 28px;\n  }\n}\n@media (max-width: 575px) {\n  .banner-section .banner-content h1 {\n    font-size: 24px;\n  }\n}\n.banner-section .banner-content .hero-description {\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 16px;\n  line-height: 1.7;\n  margin-bottom: 32px;\n  max-width: 560px;\n}\n.banner-section .banner-content .btn-demo {\n  display: inline-block;\n  background-color: #F5A623;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 14px 32px;\n  border-radius: 8px;\n  border: none;\n  transition: background-color 0.3s ease;\n}\n.banner-section .banner-content .btn-demo:hover {\n  background-color: #e09515;\n  color: #fff;\n}\n.catalogue-section {\n  padding: 80px 0 60px;\n  background-color: #f8f9fa;\n}\n.catalogue-section .catalogue-badge {\n  display: inline-block;\n  border: 2px solid #006F78;\n  color: #006F78;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  padding: 8px 24px;\n  border-radius: 30px;\n  margin-bottom: 24px;\n  text-transform: uppercase;\n}\n.catalogue-section .catalogue-title {\n  font-size: 36px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 16px;\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media (max-width: 767px) {\n  .catalogue-section .catalogue-title {\n    font-size: 24px;\n  }\n}\n.catalogue-section .catalogue-description {\n  font-size: 16px;\n  color: #6c757d;\n  line-height: 1.7;\n  max-width: 700px;\n  margin: 0 auto 40px;\n}\n.catalogue-section .catalogue-tabs {\n  display: flex;\n  justify-content: center;\n}\n.catalogue-section .catalogue-nav {\n  display: inline-flex;\n  align-items: center;\n  list-style: none;\n  padding: 12px 24px;\n  margin: 0;\n  background: #fff;\n  border-radius: 50px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  gap: 0;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n@media (max-width: 767px) {\n  .catalogue-section .catalogue-nav {\n    padding: 10px 16px;\n    border-radius: 16px;\n  }\n}\n.catalogue-section .catalogue-nav-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1a1a2e;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color 0.2s ease;\n}\n.catalogue-section .catalogue-nav-item:hover {\n  color: #006F78;\n}\n.catalogue-section .catalogue-nav-item.active {\n  color: #006F78;\n  font-weight: 600;\n}\n.catalogue-section .catalogue-nav-item i {\n  font-size: 16px;\n}\n.catalogue-section .catalogue-nav-indicator {\n  width: 4px;\n  height: 16px;\n  background-color: #006F78;\n  border-radius: 2px;\n  display: inline-block;\n}\n.catalogue-section .catalogue-nav-divider {\n  width: 1px;\n  height: 20px;\n  background-color: #dee2e6;\n  margin: 0 4px;\n}\n.course-browser-section {\n  padding: 0 0 80px;\n  background-color: #f8f9fa;\n}\n.course-browser-section .browser-mockup {\n  background: #fff;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.course-browser-section .browser-toolbar {\n  display: flex;\n  align-items: center;\n  padding: 14px 20px;\n  background: #f1f1f1;\n  border-bottom: 1px solid #e5e5e5;\n  gap: 16px;\n}\n.course-browser-section .browser-dots {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.course-browser-section .browser-dots .dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.course-browser-section .browser-dots .dot-red {\n  background-color: #ff5f57;\n}\n.course-browser-section .browser-dots .dot-yellow {\n  background-color: #febc2e;\n}\n.course-browser-section .browser-dots .dot-green {\n  background-color: #28c840;\n}\n.course-browser-section .browser-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n  flex-grow: 1;\n  max-width: 300px;\n  margin-left: auto;\n  color: #adb5bd;\n  font-size: 13px;\n}\n.course-browser-section .browser-search i {\n  font-size: 14px;\n}\n.course-browser-section .browser-body {\n  padding: 28px 32px 32px;\n}\n@media (max-width: 767px) {\n  .course-browser-section .browser-body {\n    padding: 20px 16px 24px;\n  }\n}\n.course-browser-section .filter-bar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n}\n.course-browser-section .filter-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a2e;\n  white-space: nowrap;\n}\n.course-browser-section .filter-label i {\n  font-size: 16px;\n}\n.course-browser-section .filter-tags {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.course-browser-section .filter-tag {\n  display: inline-block;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n  background: #f1f3f5;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.course-browser-section .filter-tag:hover {\n  background: #e9ecef;\n}\n.course-browser-section .filter-tag.active {\n  background: #006F78;\n  color: #fff;\n}\n.course-browser-section .course-card {\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid #e9ecef;\n  transition: box-shadow 0.2s ease;\n  height: 100%;\n}\n.course-browser-section .course-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.course-browser-section .course-card-img {\n  width: 100%;\n  height: 180px;\n  overflow: hidden;\n}\n.course-browser-section .course-card-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.course-browser-section .course-card-body {\n  padding: 16px;\n}\n.course-browser-section .course-card-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.course-browser-section .course-card-badge.badge-teal {\n  background: #e6f7f8;\n  color: #006F78;\n}\n.course-browser-section .course-card-badge.badge-green {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.course-browser-section .course-card-badge.badge-orange {\n  background: #fff3e0;\n  color: #e65100;\n}\n.course-browser-section .course-card-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 12px;\n  line-height: 1.4;\n}\n.course-browser-section .course-card-meta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #6c757d;\n  margin-bottom: 12px;\n}\n.course-browser-section .course-card-meta span {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.course-browser-section .course-card-meta i {\n  font-size: 14px;\n}\n.course-browser-section .course-card-rating {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.course-browser-section .course-card-rating .stars {\n  display: flex;\n  gap: 2px;\n  color: #ffc107;\n  font-size: 14px;\n}\n.course-browser-section .course-card-rating .rating-text {\n  font-size: 12px;\n  color: #6c757d;\n}\n.course-browser-section .course-card-progress .progress-label {\n  font-size: 12px;\n  color: #6c757d;\n  margin-bottom: 6px;\n  display: block;\n}\n.course-browser-section .course-card-progress .progress-bar-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.course-browser-section .course-card-progress .progress-bar-track {\n  flex-grow: 1;\n  height: 6px;\n  background: #e9ecef;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.course-browser-section .course-card-progress .progress-bar-fill {\n  height: 100%;\n  background: #006F78;\n  border-radius: 3px;\n}\n.course-browser-section .course-card-progress .progress-value {\n  font-size: 13px;\n  font-weight: 600;\n  color: #006F78;\n  white-space: nowrap;\n}\n.why-section {\n  padding: 80px 0;\n  background-color: #1a1a2e;\n}\n.why-section .why-header {\n  margin-bottom: 48px;\n}\n.why-section .why-title {\n  font-size: 36px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 16px;\n}\n@media (max-width: 767px) {\n  .why-section .why-title {\n    font-size: 26px;\n  }\n}\n.why-section .why-description {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.7;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.why-section .why-card {\n  background: #222240;\n  border-radius: 16px;\n  padding: 32px 28px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.why-section .why-card-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.why-section .why-card-icon i {\n  font-size: 22px;\n  color: #fff;\n}\n.why-section .why-card-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #fff;\n  margin-bottom: 12px;\n}\n.why-section .why-card-text {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.65);\n  line-height: 1.7;\n  margin-bottom: 24px;\n  flex-grow: 1;\n}\n.why-section .why-card-stat {\n  background: #006F78;\n  border-radius: 12px;\n  padding: 20px 24px;\n}\n.why-section .why-card-stat .stat-number {\n  display: block;\n  font-size: 32px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 4px;\n}\n.why-section .why-card-stat .stat-label {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.solution-section {\n  padding: 80px 0;\n  background: #fff;\n}\n.solution-section .solution-header {\n  margin-bottom: 56px;\n}\n.solution-section .solution-badge {\n  display: inline-block;\n  background: #006F78;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  padding: 8px 24px;\n  border-radius: 30px;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n}\n.solution-section .solution-title {\n  font-size: 40px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 20px;\n}\n@media (max-width: 767px) {\n  .solution-section .solution-title {\n    font-size: 26px;\n  }\n}\n.solution-section .solution-subtitle {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  color: #6c757d;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n}\n.solution-section .solution-tagline {\n  font-size: 16px;\n  color: #495057;\n  line-height: 1.6;\n}\n.solution-section .solution-features {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.solution-section .solution-feature-card {\n  display: flex;\n  gap: 16px;\n  padding: 24px;\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 16px;\n  transition: box-shadow 0.2s ease;\n}\n.solution-section .solution-feature-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 575px) {\n  .solution-section .solution-feature-card {\n    flex-direction: column;\n  }\n}\n.solution-section .solution-feature-icon {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  border-radius: 12px;\n  background: #f1f3f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.solution-section .solution-feature-icon i {\n  font-size: 20px;\n  color: #006F78;\n}\n.solution-section .solution-feature-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 8px;\n}\n.solution-section .solution-feature-text {\n  font-size: 14px;\n  color: #6c757d;\n  line-height: 1.7;\n  margin-bottom: 0;\n}\n.solution-section .solution-image-wrapper {\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n}\n.solution-section .solution-image {\n  width: 100%;\n  border-radius: 16px;\n}\n.solution-section .solution-image-badge {\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  right: 20px;\n  background: rgba(0, 111, 120, 0.9);\n  color: #fff;\n  padding: 14px 20px;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.solution-section .solution-image-badge i {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.features-section {\n  padding: 80px 0;\n  background: #f5f7f9;\n}\n.features-section .features-header {\n  margin-bottom: 48px;\n}\n.features-section .features-badge {\n  display: inline-block;\n  background: #006F78;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  padding: 8px 24px;\n  border-radius: 30px;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n}\n.features-section .features-title {\n  font-size: 40px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 16px;\n}\n@media (max-width: 767px) {\n  .features-section .features-title {\n    font-size: 28px;\n  }\n}\n.features-section .features-description {\n  font-size: 16px;\n  color: #6c757d;\n  line-height: 1.7;\n  max-width: 650px;\n  margin: 0 auto;\n}\n.features-section .feature-card {\n  background: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 16px;\n  padding: 32px 28px;\n  height: 100%;\n  transition: box-shadow 0.2s ease;\n}\n.features-section .feature-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n.features-section .feature-card-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: #e6f7f8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.features-section .feature-card-icon i {\n  font-size: 22px;\n  color: #006F78;\n}\n.features-section .feature-card-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 10px;\n}\n.features-section .feature-card-text {\n  font-size: 14px;\n  color: #6c757d;\n  line-height: 1.7;\n  margin-bottom: 0;\n}\n.cta-section {\n  padding: 100px 0;\n  background: #e8f4f5;\n}\n.cta-section .cta-title {\n  font-size: 42px;\n  font-weight: 700;\n  color: #006F78;\n  margin-bottom: 20px;\n  line-height: 1.25;\n}\n@media (max-width: 767px) {\n  .cta-section .cta-title {\n    font-size: 28px;\n  }\n}\n.cta-section .cta-description {\n  font-size: 16px;\n  color: #6c757d;\n  line-height: 1.7;\n  max-width: 650px;\n  margin: 0 auto 32px;\n}\n.cta-section .btn-cta {\n  display: inline-block;\n  background: #D4A843;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 16px 36px;\n  border-radius: 30px;\n  border: none;\n  transition: background-color 0.3s ease;\n}\n.cta-section .btn-cta:hover {\n  background: #c0952e;\n  color: #fff;\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "app/features/home-list/home/home.component.ts", lineNumber: 33 });
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
//# sourceMappingURL=chunk-3LJXADS3.js.map
