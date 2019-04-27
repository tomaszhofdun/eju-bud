import $ from "jquery";

class FacebookPlugin {
    constructor() {
        this.facebookDiv = $(".facebook-plugin");
        this.facebookButton = $(".facebook-button")[0];
        this.enywhere = $(document);
        this.events();
    }
    events() {
        var that = this;
        this.enywhere.click(function () {
            if (event.target != that.facebookButton) {
                that.hideFacebookButton();
            } else {
                that.revealFacebookPlugin();
            }
        })


    }
    revealFacebookPlugin() {
        this.facebookDiv.addClass("facebook-plugin--visible");

    }
    hideFacebookButton() {
        this.facebookDiv.removeClass("facebook-plugin--visible");
    }
}

export default FacebookPlugin;