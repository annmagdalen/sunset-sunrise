import { Component, Input, SimpleChange, Output } from '@angular/core';
import { ApiService } from '../api/api.service';

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
  data: any;
  errorMessage: any;

  constructor() {
    this.lat = 47.3333;
    this.lng = 13.3333;
    this.date = '12/12/2012';
  }

  // latChange(lat) {
  //   this._apiService.getData(lat, this.lng, this.date)
  //   .subscribe(
  //     data => this.data = data,
  //     error => this.errorMessage = <any>error);
  // }

  // lngChange(lng) {
  //   this._apiService.getData(this.lat, lng, this.date)
  //   .subscribe(
  //     data => this.data = data,
  //     error => this.errorMessage = <any>error);
  // }

  // dateChange(date) {
  //   this._apiService.getData(this.lat, this.lng, date)
  //   .subscribe(
  //     data => this.data = data,
  //     error => this.errorMessage = <any>error);
  // }
}
