import { Component } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})

export class TimeComponent  {
    public hour: number;
    public time: string;
  constructor() {
    this.hour = new Date().getHours();
    if (this.hour > 12) {this.hour -= 12; }
    // tslint:disable-next-line:one-line
    else
    if (this.hour === 0) {this.hour = 12; }
    switch (this.hour) {
        case  1: {
        this.time = 'one';
           break;
        }
        case  2: {
            this.time = ('two');
           break;
        }
        case  3: {
            this.time = ('three');
           break;
        }
        case  4: {
            this.time = ('four');
           break;
        }
        case  5: {
            this.time = ('five');
           break;
        }
        case  6: {
            this.time = ('six');
           break;
        }
        case  7: {
            this.time = ('seven');
           break;
        }
        case  8: {
            this.time = ('eight');
           break;
        }
        case  9: {
            this.time = ('nine');
           break;
        }
        case  10 : {
            this.time = ('ten');
           break;
        }
        case  11: {
            this.time = ('eleven');
           break;
        }
        case  12 : {
            this.time = ('twelve');
           break;
        }
     }
   }
}

