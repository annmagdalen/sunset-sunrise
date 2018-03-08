import { Component, Input } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() lat: any = 47.3333;
  @Input() lng: any = 13.3333;

  data: any;
  errorMessage: any;

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this._apiService.getData(this.lat, this.lng)
    .subscribe(
      data => this.data = data,
      error => this.errorMessage = <any>error);
  }
}
