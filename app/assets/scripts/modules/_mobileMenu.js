import $ from "jquery";

class MobileMenu {
    constructor() {
        this.menuButton = $(".menu-header__nav--always-visible-button");
        this.menuContent = $(".menu-header__nav--toggleVisibility");

        // $(window).resize(function () {
        //     if ($(this).width() > 800) {
        //         $(".menu-header__nav--toggleVisibility").css("display", "block");
        //     } else {

        //     }
        // });

        this.events();
    }
    events() {
        this.menuButton.click(this.toggleTheMenu.bind(this));
        this.menuButton.click(this.toggleIconMenu.bind(this));
    }
    toggleTheMenu() {
        console.log(this.menuWidth);

        this.menuContent.slideToggle("slow");

    }
    toggleIconMenu() {
        this.menuButton.html() == "≡" ?
            this.menuButton.html("&times;") :
            this.menuButton.html("&equiv;");
    }
}

export default MobileMenu;