import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuButton = $(".menu-header__nav__button");
        this.menuContent = $(".menu-header__nav--toogleVisibility");
        this.events();
    }
    events() {
        this.menuButton.click(this.toogleTheMenu.bind(this));
    }
    toogleTheMenu() {
        this.menuContent.toggleClass("menu-header__nav--toogleVisibility--visible");
    }
}

export default MobileMenu;