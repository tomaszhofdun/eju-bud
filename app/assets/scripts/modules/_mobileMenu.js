import $ from "jquery";

class MobileMenu {
  constructor() {
    // this.menuButton = $(".menu-header__nav--always-visible-button")[0];
    this.menuButton = $(".menu-header__nav--always-visible-button");
    this.menuContent = $(".menu-header__nav--toggleVisibility");
    this.enywhere = $(document);
    this.events();
  }
  events() {
    var that = this;
    this.menuContent.hide();
    this.menuButton.click(this.toggleTheMenu.bind(this));
    this.menuButton.click(this.toggleIconMenu.bind(this));
    this.enywhere.click(function() {
      if (event.target != $(".menu-header__nav--always-visible-button")[0]) {
        that.closeTheMenu();
        that.toggleIconMenu();
      } else {
        return false;
      }
    });
  }
  toggleTheMenu() {
    this.menuContent.slideToggle("slow");
  }
  closeTheMenu() {
    this.menuContent.slideUp("slow");
  }
  toggleIconMenu() {
    if ($(".menu-header__nav--toggleVisibility").height() > 10) {
      this.menuButton.html("&equiv;");
    } else {
      this.menuButton.html("&times;");
    }
  }
}

export default MobileMenu;
