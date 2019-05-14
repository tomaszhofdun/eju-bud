import $ from "jquery";

// przykleja navbar od pewnej wysokości
class StickyHeader {
  constructor() {
    this.navbar = document.getElementById("menu-header");
    this.stickyOffset2 = document.getElementById("menu-header").offsetTop;
    this.events();
  }

  events() {
    window.onscroll = this.sticky.bind(this);
  }

  sticky() {
    if (window.pageYOffset > this.stickyOffset2) {
      this.navbar.classList.add("menu-header--sticky");
    } else {
      this.navbar.classList.remove("menu-header--sticky");
    }
  }
}

export default StickyHeader;
