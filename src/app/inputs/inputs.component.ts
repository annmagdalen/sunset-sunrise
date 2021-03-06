import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { LatLngService } from '../../api/lat-lng/lat-lng.service';
import { LocationService } from '../../api/location/location.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnChanges {
  @Input() location: string;
  @Input() month: string;
  @Input() day: string;
  displayClock: boolean = true;
  
  data: any;
  hours: number;

  constructor(private _latLngService: LatLngService, private _locationService: LocationService) {}

  getLatLngData(data) {
    this._latLngService.getData(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng, this.month, this.day)
    .subscribe(latLngData => this.data = latLngData);
    this.hours = Math.floor(this.data.results.day_length / 3600);
  }

  ngOnChanges(changes: SimpleChanges) {   
    for (let propName in changes) {
      if(changes[propName] && !changes[propName].isFirstChange()) {      
        this._locationService.getData(this.location)
        .subscribe(locationData => this.getLatLngData(locationData))
      }
    }
  }

  toggleClock() {
    this.displayClock = !this.displayClock;    
  }
}
