import $ from "jquery";

class MobileMenu {
    constructor() {
        this.menuButton = $(".menu-header__nav--always-visible-button");
        this.menuContent = $(".menu-header__nav--toggleVisibility");
        this.events();
    }
    events() {
        this.menuButton.click(this.toggleTheMenu.bind(this));
        this.menuButton.click(this.toggleIconMenu.bind(this));
    }
    toggleTheMenu() {
        this.menuContent.slideToggle("slow");

    }
    toggleIconMenu() {
        this.menuButton.html() == "≡" ?
            this.menuButton.html("&times;") :
            this.menuButton.html("&equiv;");
    }
}

export default MobileMenu;