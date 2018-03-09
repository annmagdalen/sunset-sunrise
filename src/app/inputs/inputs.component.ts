import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnChanges {
  @Input() inputLat: number;
  @Input() inputLng: number;
  @Input() inputDate: string;
  data: any;

  constructor(private _apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges) { 
    for (let propName in changes) {
      if(changes[propName] || changes[propName].isFirstChange()) {
        this._apiService.getData(this.inputLat, this.inputLng, this.inputDate)
        .subscribe(data => this.data = data);
      }
      let change = changes[propName];
      console.dir(change);
    }
  }

  
}
