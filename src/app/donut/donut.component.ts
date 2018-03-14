import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {
  private _dayLengthInSeconds: string;
  attrPath: string;

  private _sunrise: any;
  hourRotate: string;
  
  get sunrise(): string {
    return this._sunrise;
  }
  
  @Input()
  set sunrise(sunrise: string) {
    this._sunrise = new Date(sunrise);
    this.hourRotate = `rotate(${((this._sunrise.getHours() / 12) * 360) + ((this._sunrise.getMinutes() / 60) * 30)}deg)`;
  }

  get dayLengthInSeconds(): string {
    return this._dayLengthInSeconds;
  }
  
  @Input()
  set dayLengthInSeconds(dayLengthInSeconds: string) {
    this._dayLengthInSeconds = dayLengthInSeconds;
    let x = (43 + (Math.cos(this.toRadians(this.hoursToPercentage(dayLengthInSeconds)) * 1.8) * 86 * Math.sin(this.toRadians(this.hoursToPercentage(dayLengthInSeconds)) * 1.8)));
    let y = (Math.sin(this.toRadians(this.hoursToPercentage(dayLengthInSeconds)) * 1.8) * 86 * Math.sin(this.toRadians(this.hoursToPercentage(dayLengthInSeconds)) * 1.8));
    let z = 0;
    if ((parseInt(dayLengthInSeconds, 10) > 21600 && parseInt(dayLengthInSeconds, 10) < 43200) || parseInt(dayLengthInSeconds, 10) > 64800) {
      z = 1;
    }
    this.attrPath = `M43 0 A 43 43, 0, ${z}, 1, ${x} ${y} L 43 43 Z`;
  }

  hoursToPercentage(hours: string): number {   
    return (parseInt(hours, 10) / 3600) / 0.12;
  }

  toRadians(angle: number): number {
    return angle * (Math.PI / 180);
  }

}
