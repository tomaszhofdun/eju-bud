import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuButton = $(".menu-header__mobile-menu__button");
        this.events();
    }
    events() {
        this.menuButton.click(this.toogleTheMenu);
    }
    toogleTheMenu() {
        console.log("udal soe");
    }
}

export default MobileMenu;