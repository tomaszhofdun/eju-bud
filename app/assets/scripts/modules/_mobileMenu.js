import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuButton = $(".menu-header__nav--always-visible-button");
        this.menuContent = $(".menu-header__nav--toogleVisibility");

        this.events();
    }
    events() {
        this.menuButton.click(this.toogleTheMenu.bind(this));
        this.menuButton.click(this.toogleIconMenu.bind(this));
    }
    toogleTheMenu() {
        this.menuContent.slideToggle("slow");
    }
    toogleIconMenu() {
        this.menuButton.html() == "≡" ? this.menuButton.html('&times;') : this.menuButton.html('&equiv;');

    }
}

export default MobileMenu;