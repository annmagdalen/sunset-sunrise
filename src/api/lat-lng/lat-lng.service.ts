import { Injectable, Input, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class LatLngService {
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  constructor(private _http: HttpClient) {}

  getData(lat: number, lng: number, month: string, day: string): Observable<any[]> {
    const _apiUrl = 'https://api.sunrise-sunset.org/json?lat=' + lat + '&lng=' + lng + '&date=2018-' + month + '-' + day + '&formatted=0'; 
    return this._http.get<any[]>(_apiUrl)
    .do(data => console.log(JSON.stringify(data)))
    .catch(this.handleError);
  }

}
