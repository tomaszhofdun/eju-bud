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
        // this.menuContent.toggleClass("menu-header__nav--toogleVisibility--visible");
        this.menuContent.slideToggle("slow");
    }
    toogleIconMenu() {

        this.menuButton.html() == "MENU" ? this.menuButton.html('before') : this.menuButton.html('MENU');

    }
}

export default MobileMenu;