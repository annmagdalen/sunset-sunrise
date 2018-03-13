import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
  private _date: any;
  minRotate: string;
  hourRotate: string;
  
  get date(): string {
    return this._date;
  }
  
  @Input()
  set date(date: string) {
    this._date = new Date(date);
    this.minRotate = `rotate(${((this._date.getMinutes() / 60) * 360) + 90}deg)`;
    this.hourRotate = `rotate(${((this._date.getHours() / 12) * 360) + ((this._date.getMinutes() / 60) * 30) + 90}deg)`;
  }

}
