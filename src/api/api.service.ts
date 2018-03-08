import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ApiService {
  private _apiUrl = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400';
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  constructor(private _http: HttpClient) { }

  getData(): Observable<any[]> {
    return this._http.get<any[]>(this._apiUrl)
    .do(data => console.log(JSON.stringify(data)))
    .catch(this.handleError);
  }

}
