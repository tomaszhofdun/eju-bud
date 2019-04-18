import $ from "jquery";


class CurrentDate {
    constructor() {
        this.currentDate = $(".currentDate");
        this.formatter = new Intl.DateTimeFormat('pl', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        this.events();
    }

    events() {
        $(document).ready(this.injectDate());
    }

    injectDate() {
        // console.log(this.formatter.format(new Date()));
        this.currentDate.html(this.formatter.format(new Date()));

    }
}

export default CurrentDate;