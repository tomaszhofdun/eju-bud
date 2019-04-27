import MobileMenu from "./modules/_mobileMenu";
import CurrentDate from "./modules/_currentDate";
import GallerySlider from "./modules/_gallerySlider";
import LtrScale from "./modules/_ltrScale";
import RevealOnScroll from "./modules/_revealOnScroll";
import StickyHeader from "./modules/_stickyHeader";
import $ from "jquery";

var mobileMenu = new MobileMenu();
var currentDate = new CurrentDate();
var gallerySlider = new GallerySlider();
var ltrScale = new LtrScale();
var stickyHeader = new StickyHeader();
new RevealOnScroll($(".huge-icon-section_div"), '70%');
new RevealOnScroll($(".gallery-thumbnails__title"), '70%');
new RevealOnScroll($(".form__title"), '80%');