import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocationService {
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  constructor(private _http: HttpClient) {}

  getData(loc: string): Observable<any[]> {
    const _apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + loc + '&key=AIzaSyD2a6PkHwT3TxyGCPhenhDYXvF4wW7BE-8'; 
    return this._http.get<any[]>(_apiUrl)
    .do(data => console.log(JSON.stringify(data)))
    .catch(this.handleError);
  }

}
