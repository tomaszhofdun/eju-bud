import $ from "jquery";

class CurrentDate {
  constructor() {
    this.currentDate = $(".top-footer__currentDate");
    this.formatter = new Intl.DateTimeFormat("pl", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    this.injectDate();
  }

  injectDate() {
    this.currentDate.html(this.formatter.format(new Date()));
  }
}

export default CurrentDate;
