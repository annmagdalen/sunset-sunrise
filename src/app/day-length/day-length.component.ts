import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-length',
  templateUrl: './day-length.component.html',
  styleUrls: ['./day-length.component.css']
})
export class DayLengthComponent {
  private _dayLengthInSeconds: string;
  hours: number;
  minutes: number;
  displayDonut: boolean = true;
  
  get dayLengthInSeconds(): string {
    return this._dayLengthInSeconds;
  }
  
  @Input()
  set dayLengthInSeconds(dayLengthInSeconds: string) {
    this._dayLengthInSeconds = dayLengthInSeconds;
    this.hours = Math.floor(parseInt(dayLengthInSeconds, 10) / 3600);
    this.minutes = Math.floor((parseInt(dayLengthInSeconds, 10) % 3600) / 60);
  }

  toggleDonut() {
    this.displayDonut = !this.displayDonut;
  }

}
