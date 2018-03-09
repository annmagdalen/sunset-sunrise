import { Component, Input, SimpleChange, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = new Date;
  day = this.today.getDate();
  month = this.today.getMonth() + 1;
  year = this.today.getFullYear();
  dateToday = this.month + '/' + this.day + '/' + this.year;

  lat: number;
  lng: number;
  date: string = this.dateToday;

  constructor() {
    this.lat = 47.3333;
    this.lng = 13.3333;
    this.date = this.dateToday;
  }
}
