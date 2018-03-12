import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = new Date;
  dayToday = this.today.getDate();
  monthToday = this.today.getMonth() + 1;

  location: string;
  value: string = '';
  monthSelected: number = this.monthToday;
  daySelected: number = this.dayToday;

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

  days = Array.from(Array(31).keys(), x => x + 1);

  onEnter(inputLocation: string) {
    this.location = inputLocation;
  }

}
