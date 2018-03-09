import { Injectable, Input, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ApiService {
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  constructor(private _http: HttpClient) {}

  getData(lat: number, lng: number, date: string = 'today'): Observable<any[]> {
    const _apiUrl = 'https://api.sunrise-sunset.org/json?lat=' + lat + '&lng=' + lng + '&date=' + date; 
    return this._http.get<any[]>(_apiUrl)
    .do(data => console.log(JSON.stringify(data)))
    .catch(this.handleError);
  }

}
