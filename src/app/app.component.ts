import { Component } from '@angular/core';

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

  getDateToday(year, month, day) {
    if(day < 10) {
      day = '0'+ day;
    } 
  
    if(month < 10) {
      month = '0'+ month;
    } 
  
    return year + '-' + month + '-' + day;
  }

  date: string = this.getDateToday(this.year, this.month, this.day);
  loc: string;
  value: string = '';

  constructor() {}

  onEnter(value: string) {
    this.loc = value;
  }

  onClick(clickLoc: string, clickDate: string) {
    console.log(this.date);
    this.loc = clickLoc;
    this.date = clickDate;
  }
}
