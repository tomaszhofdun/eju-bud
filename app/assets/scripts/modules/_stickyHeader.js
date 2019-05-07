import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

// przykleja header od pewnej wysokości oraz podświetla odpowiedni element menu

class StickyHeader {
  constructor() {
    this.stickyTrigger = $(".menu-header");
    this.pageSections = $(
      ".gallery-thumbnails__title , .form__title , .parralax-section__bg-2"
    );
    this.headerLinks = $(
      ".menu-header__nav--toggleVisibility a, .footer__list a"
    );
    this.lazyLoadImages = $(".lazyload");
    this.createHeaderWaypoint();
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  // odświerza waypoints kiedy wczytuję się jakiś obraz z klasą .lazyload

  refreshWaypoints() {
    this.lazyLoadImages.on("load", function() {
      Waypoint.refreshAll();
    });
  }

  // smooth scrolling

  addSmoothScrolling() {
    this.headerLinks.smoothScroll({
      speed: 1000,
      offset: -50
    });
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.stickyTrigger[0],
      handler: function(direction) {
        if (direction == "down") {
          that.stickyTrigger.addClass("menu-header--sticky");
        } else {
          that.stickyTrigger.removeClass("menu-header--sticky");
        }
      }
    });
  }

  // tworzy waypoints dla każdej sekcji na której jesteśmy

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function() {
      var currentSection = this;
      new Waypoint({
        element: currentSection,
        handler: function(direction) {
          if (direction == "down") {
            var specificDataLink = currentSection.getAttribute(
              "data-matching-link"
            );
            that.headerLinks.removeClass("is-current-link");
            $(specificDataLink).addClass("is-current-link");
          }
        },
        offset: "20%"
      });
      new Waypoint({
        element: currentSection,
        handler: function(direction) {
          if (direction == "up") {
            var specificDataLink = currentSection.getAttribute(
              "data-matching-link"
            );
            that.headerLinks.removeClass("is-current-link");
            $(specificDataLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;
