import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
  hour: number = 9;
  min: number = 0;
  minDegrees: number = ((this.min / 60) * 360) + 90;
  hourDegrees = ((this.hour / 12) * 360) + ((this.min/60)*30) + 90;
  minRotate = `rotate(${this.minDegrees}deg)`;
  hourRotate = `rotate(${this.hourDegrees}deg)`;

}
