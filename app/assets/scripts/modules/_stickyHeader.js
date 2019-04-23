import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {
    constructor() {
        this.stickyTrigger = $(".menu-header");
        this.createHeaderWaypoint();
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
}

export default StickyHeader;