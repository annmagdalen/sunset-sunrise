import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
  private _sunrise: any;
  minRotate: string;
  hourRotate: string;
  
  get sunrise(): string {
    return this._sunrise;
  }
  
  @Input()
  set sunrise(sunrise: string) {
    this._sunrise = new Date(sunrise);
    this.minRotate = `rotate(${((this._sunrise.getMinutes() / 60) * 360) + 90}deg)`;
    this.hourRotate = `rotate(${((this._sunrise.getHours() / 12) * 360) + ((this._sunrise.getMinutes() / 60) * 30) + 90}deg)`;
  }

}
