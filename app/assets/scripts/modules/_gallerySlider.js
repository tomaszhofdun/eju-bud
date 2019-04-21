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
    // slideToLeft() {
    //     this.galleryThumbnails.css("transform", "translateX(0px)");

    // }
    slideToRight() {
        // console.log(this.liczbaSlides);
        if (this.slideFlag === this.liczbaSlides - 2) {
            //   this.galleryThumbnails.css("transform", "translateX(0)");
            //   this.slideFlag = 1;
            //   this.translate = -347.6;
        } else {
            this.galleryThumbnails.css(
                "transform",
                "translateX(" + (this.translate - 347.6) + "px)"
            );
            this.translate -= 347.6;
            this.slideFlag += 1;

            //   console.log(this.translate);
            //   console.log(this.liczbaSlides);
            //   console.log(this.slideFlag);
        }
    }
    slideToLeft() {
        // console.log(this.liczbaSlides);
        if (this.slideFlag === 1) {
            //   this.galleryThumbnails.css("transform", "translateX(0)");
            //   this.slideFlag = 1;
            //   this.translate = -347.6;
        } else {
            this.galleryThumbnails.css(
                "transform",
                "translateX(" + (this.translate + 347.6) + "px)"
            );
            this.translate += 347.6;
            this.slideFlag -= 1;

            //  console.log(this.translate);
        }
    }
}

export default GallerySlider;