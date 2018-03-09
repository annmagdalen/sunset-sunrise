import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { LatLngService } from '../../api/lat-lng/lat-lng.service';
import { LocationService } from '../../api/location/location.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnChanges {
  @Input() inputLoc: string;
  @Input() inputDate: string;
  
  data: any;
  locationData: any;

  constructor(private _latLngService: LatLngService, private _locationService: LocationService) {}

  ngOnChanges(changes: SimpleChanges) { 
    for (let propName in changes) {
      if(changes[propName] || changes[propName].isFirstChange()) {
        this._locationService.getData(this.inputLoc)
        .subscribe(locationData => this.locationData = locationData);
        this._latLngService.getData(this.locationData.results[0].geometry.location.lat, this.locationData.results[0].geometry.location.lng, this.inputDate)
        .subscribe(data => this.data = data);
      }
    }
  }

  
}
