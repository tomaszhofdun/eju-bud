import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

// podświetla odpowiedni element menu

class NavbarLinks {
  constructor() {
    // this.navbar = document.getElementById("menu-header");
    this.pageSections = $(
      ".gallery-thumbnails__title , .form__title , .parralax-section__bg-2, .offer__title"
    );
    this.headerLinks = $(
      ".menu-header__nav--toggleVisibility a, .footer__list a, .main-section a"
    );
    // this.stickyOffset2 = document.getElementById("menu-header").offsetTop;
    this.lazyLoadImages = $(".lazyload");
    // this.createHeaderWaypoint();
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
    // this.events();
    // this.sticky = $(".menu-header").offsetTop;
  }

  //   events() {
  //     var that = this;
  //     window.onscroll = this.sticky.bind(this);
  //     console.log(this.stickyOffset2);

  //     $(window).scroll(this.sticky);
  //   }

  // var navbar = document.getElementById("navbar");

  //   sticky() {
  //     console.log(this.stickyOffset2);
  //     if (window.pageYOffset > this.stickyOffset2) {
  //       console.log("add class " + window.pageYOffset);
  //       this.navbar.classList.add("menu-header--sticky");
  //     } else {
  //       console.log("remove class " + this.stickyOffset2);
  //       this.navbar.classList.remove("menu-header--sticky");
  //     }
  //   }

  // odświerza waypoints kiedy wczytuję się jakiś obraz z klasą .lazyload

  refreshWaypoints() {
    var that = this;
    Waypoint.refreshAll();
    window.onload = function() {
      Waypoint.refreshAll();
    };
    this.lazyLoadImages.on("load", function() {
      Waypoint.refreshAll();
      console.log("image loaded");
    });
  }

  // smooth scrolling

  addSmoothScrolling() {
    this.headerLinks.smoothScroll({
      speed: 1000,
      offset: -50
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
          } else {
          }
        },
        offset: "40%"
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
          } else {
          }
        },
        offset: "-30%"
      });
    });
  }
}

export default NavbarLinks;
