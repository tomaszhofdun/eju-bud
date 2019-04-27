import $ from "jquery";

class GallerySlider {
    constructor() {
        this.buttonLeft = $(".gallery-thumbnails__button-left");
        this.buttonRight = $(".gallery-thumbnails__button-right");
        this.galleryThumbnails = $(".gallery-thumbnails--slides");
        this.liczbaSlides = $(".gallery-thumbnails__container__slide").length;
        this.slideFlag = 1;
        this.translate = 0;
        this.events();
    }

    events() {
        this.buttonRight.click(this.slideToRight.bind(this));
        this.buttonLeft.click(this.slideToLeft.bind(this));
    }

    slideToRight() {
        if (this.slideFlag === this.liczbaSlides - 2) {} else {
            this.galleryThumbnails.css(
                "transform",
                "translateX(" + (this.translate - 347.6) + "px)"
            );
            this.translate -= 347.6;
            this.slideFlag += 1;
        }
    }
    slideToLeft() {
        if (this.slideFlag === 1) {} else {
            this.galleryThumbnails.css(
                "transform",
                "translateX(" + (this.translate + 347.6) + "px)"
            );
            this.translate += 347.6;
            this.slideFlag -= 1;

        }
    }
}

export default GallerySlider;