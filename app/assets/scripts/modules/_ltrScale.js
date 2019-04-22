import $ from "jquery";

class LtrScale {
  constructor() {
    this.container = $(".mini-gallery");
    this.button = $(".mini-gallery__button");
    this.events();
  }
  events() {
    this.container.mouseenter(this.showButton);
    this.container.mouseleave(this.hideButton);
  }
  showButton() {
    console.log(this);
    $(this).find('a').show("fast");
  }
  hideButton() {
    console.log(this);
    $(this).find('a').hide("fast");
  }
}

export default LtrScale;