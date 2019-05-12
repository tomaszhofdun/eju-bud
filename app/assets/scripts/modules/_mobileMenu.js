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
    // this.menuContent.css("display")=="none"
    // ? this.menuButton.html("&equiv;")
    // : this.menuButton.html("&times;");
    if ($(".menu-header__nav--toggleVisibility").height() > 10) {
      // console.log("none");
      // console.log($(".menu-header__nav--toggleVisibility").height());
      this.menuButton.html("&equiv;");
    } else {
      // console.log("block");
      // console.log($(".menu-header__nav--toggleVisibility").height());
      this.menuButton.html("&times;");
    }
    // this.menuButton.html() == "≡"
    //   ? this.menuButton.html("&times;")
    //   : this.menuButton.html("&equiv;");
  }
}

export default MobileMenu;
