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
  
  data: any;
  locationData: any;

  constructor(private _latLngService: LatLngService, private _locationService: LocationService) {
    console.log(this.location, this.month, this.day);
  }

  ngOnChanges(changes: SimpleChanges) { 
    console.log('onChanges', this.location, this.month, this.day);    
    for (let propName in changes) {
      if(changes[propName] || changes[propName].isFirstChange()) {
        this._locationService.getData(this.location)
        .subscribe(locationData => this.locationData = locationData);
        this._latLngService.getData(this.locationData.results[0].geometry.location.lat, this.locationData.results[0].geometry.location.lng, this.month, this.day)
        .subscribe(data => this.data = data);
      }
    }
  }

  
}
