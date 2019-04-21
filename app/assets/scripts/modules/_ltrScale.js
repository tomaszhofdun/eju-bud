import $ from "jquery";

class LtrScale {
    constructor() {
        // this.html = "<a class="
        // btn btn--large mini - gallery__button " href="
        // ">GALERIA</a>;"
        this.container = $(".mini-gallery__container");
        this.ltrScale = $(".ltrScale");
        this.events();
    }
    events() {
        this.container.click(this.showButton.bind(this));
        this.container.mouseleave(this.hideButton.bind(this));
    }
    showButton() {
        // console.log("fs")
        this.ltrScale.html("<a class='btn btn--large mini-gallery__button' href=''>GALERIA</a>")

    }
    hideButton() {
        this.ltrScale.html("")
    }
}

export default LtrScale;