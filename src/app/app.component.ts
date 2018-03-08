import { Component, Input } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() lat: any;
  @Input() lng: any;

  data: any;
  errorMessage: any;

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this._apiService.getData()
    .subscribe(
      data => this.data = data,
      error => this.errorMessage = <any>error);
  }
}
