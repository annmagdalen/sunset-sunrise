import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  today = new Date;
  dayToday = this.today.getDate();
  monthToday = this.today.getMonth();

  daysInMonth = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ];

  location: string;
  value: string = '';
  monthSelected: number = this.monthToday;
  daySelected: number = this.dayToday;
  days: number[] = Array.from(Array(this.daysInMonth[this.monthSelected]).keys(), x => x + 1);

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  ngDoCheck() {
    this.days = Array.from(Array(this.daysInMonth[this.monthSelected]).keys(), x => x + 1);      
  }

  onEnter(inputLocation: string) {
    this.location = inputLocation;
  }

}
