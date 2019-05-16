import $ from "jquery";

// przykleja navbar od pewnej wysokości
class StickyHeader {
  constructor() {
    this.navbar = document.getElementById("menu-header");
    this.stickyOffset = document.getElementById("menu-header").offsetTop;
    this.events();
  }

  events() {
    var that = this;
    $(window).scroll(function() {
      that.sticky();
    });
  }

  sticky() {
    console.log("sticky");
    if (window.pageYOffset > this.stickyOffset) {
      this.navbar.classList.add("menu-header--sticky");
    } else {
      this.navbar.classList.remove("menu-header--sticky");
    }
  }
}

export default StickyHeader;
