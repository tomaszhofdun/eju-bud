import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {
    constructor() {
        this.stickyTrigger = $(".menu-header");
        this.pageSections = $(".gallery-thumbnails__title , .form__title");
        this.headerLinks = $(".menu-header__nav--toggleVisibility a");
        this.createHeaderWaypoint();
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll({
            speed: 1000
        });
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.stickyTrigger[0],
            handler: function (direction) {
                if (direction == "down") {
                    that.stickyTrigger.addClass("menu-header--sticky");
                } else {
                    that.stickyTrigger.removeClass("menu-header--sticky");
                }
            }
        })
    }
    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each(function () {
            var currentSection = this;
            new Waypoint({
                element: currentSection,
                handler: function (direction) {
                    if (direction == "down") {
                        var specificDataLink = currentSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(specificDataLink).addClass("is-current-link");
                    }
                },
                offset: '65%'
            });
            new Waypoint({
                element: currentSection,
                handler: function (direction) {
                    if (direction == "up") {
                        var specificDataLink = currentSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(specificDataLink).addClass("is-current-link");
                    }
                },
                offset: '-20%'
            });
        })
        var that = this;

    }
}

export default StickyHeader;