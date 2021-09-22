import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateString',
})
export class DateStringPipe implements PipeTransform {
  weekdays = new Array<string>(7);
  months = new Array<string>(12);

  constructor() {
    this.weekdays[0] = 'Sun';
    this.weekdays[1] = 'Mon';
    this.weekdays[2] = 'Tue';
    this.weekdays[3] = 'Wed';
    this.weekdays[4] = 'Thu';
    this.weekdays[5] = 'Fri';
    this.weekdays[6] = 'Sat';

    this.months[0] = 'Jan';
    this.months[1] = 'Feb';
    this.months[2] = 'Mar';
    this.months[3] = 'Apr';
    this.months[4] = 'May';
    this.months[5] = 'Jun';
    this.months[6] = 'Jul';
    this.months[7] = 'Aug';
    this.months[8] = 'Sep';
    this.months[9] = 'Oct';
    this.months[10] = 'Nov';
    this.months[11] = 'Dec';
  }
  transform(value: Date): string {
    return `${this.weekdays[value.getDay()]} ${value.getDate()} ${
      this.months[value.getMonth()]
    }. ${value.getFullYear()}`;
  }
}
