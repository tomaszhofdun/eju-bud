import $ from "jquery";

class FacebookPlugin {
  constructor() {
    this.facebookDiv = $(".facebook-plugin");
    this.facebookButton = $(".facebook-button")[0];
    this.enywhere = $(document);
    this.widgetWith = $(".fb-page");
    this.events();
    this.keepFacebookWidgetSize();
  }
  events() {
    var that = this;
    this.enywhere.click(function() {
      if (event.target != that.facebookButton) {
        that.hideFacebookButton();
      } else {
        that.revealFacebookPlugin();
      }
    });
  }
  revealFacebookPlugin() {
    this.facebookDiv.addClass("facebook-plugin--visible");
  }
  hideFacebookButton() {
    this.facebookDiv.removeClass("facebook-plugin--visible");
  }
  keepFacebookWidgetSize() {
    if ($(window).width() < 800) {
      this.widgetWith.attr("data-width", "300");
    } else {
      this.widgetWith.attr("data-width", "350");
    }
  }
}

export default FacebookPlugin;
