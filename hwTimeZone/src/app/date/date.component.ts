import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})

export class DateComponent  {
    public date = new Date();
    public newDate;
    public gmt;
    public offSet;

    options = {weekday: 'short',
    year: 'numeric',
    day: 'numeric',
    month: 'short',
    timeZone: 'Asia/Jerusalem' ,
     timeZoneName: 'long',
     hour: 'numeric',
      minute: 'numeric',
       second: 'numeric',
       hour12: false};

    constructor() {
        this.gmt = /GMT([\-\+]?\d{4})/;
        this.offSet = this.gmt.exec(this.date)[1];
        this.newDate = new Intl.DateTimeFormat('en-us', this.options).format(new Date())
         + (')') + ('GMT' + this.offSet);
  }
}
