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
    this.menuButton.click(this.toggleTheMenu.bind(this));
    this.menuButton.click(this.toggleIconMenu.bind(this));
    this.enywhere.click(function() {
      if (event.target != $(".menu-header__nav--always-visible-button")[0]) {
        that.closeTheMenu();
        that.toggleIconMenu();
        console.log(that);
      } else {
        // return false;
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
    this.menuButton.html() == "≡"
      ? this.menuButton.html("&times;")
      : this.menuButton.html("&equiv;");
  }
}

export default MobileMenu;
