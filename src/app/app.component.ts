import { Component, Input, SimpleChange, Output } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number;
  lng: number;

  data: any;
  errorMessage: any;

  constructor(private _apiService: ApiService) {}

  latChange(lat) {
    this._apiService.getData(lat, this.lng)
    .subscribe(
      data => this.data = data,
      error => this.errorMessage = <any>error);
  }

  lngChange(lng) {
    this._apiService.getData(this.lat, lng)
    .subscribe(
      data => this.data = data,
      error => this.errorMessage = <any>error);
  }
}
