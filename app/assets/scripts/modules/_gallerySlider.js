import $ from "jquery";

class GallerySlider {
    constructor() {
        this.buttonLeft = $(".gallery-thumbnails__button-left");
        this.buttonRight = $(".gallery-thumbnails__button-right");
        this.galleryThumbnails = $(".gallery-thumbnails--moving");
        this.events();
    }

    events() {
        this.buttonRight.click(this.slideToRight.bind(this));
        this.buttonLeft.click(this.slideToLeft.bind(this));
    }
    slideToLeft() {
        this.galleryThumbnails.css("transform", "translateX(0px)");

    }
    slideToRight() {
        this.galleryThumbnails.css("transform", "translateX(-350px)");
    }


}

export default GallerySlider;