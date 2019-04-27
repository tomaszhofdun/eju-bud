import $ from "jquery";

class FacebookPlugin {
    constructor() {
        this.facebookDiv = $(".facebook-plugin");
        this.facebookButton = $(".facebook-button")[0];
        this.enywhere = $(document);
        this.widgetWith = $(".fb-page");

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
        if ($(window).width() < 800) {
            this.widgetWith.attr('data-width', '300');
            // this.widgetWith.hide();
            console.log($(window).width());
        }

    }
    revealFacebookPlugin() {
        this.facebookDiv.addClass("facebook-plugin--visible");

    }
    hideFacebookButton() {
        this.facebookDiv.removeClass("facebook-plugin--visible");
    }
}

export default FacebookPlugin;