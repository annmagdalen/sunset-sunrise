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
  errorMessage: any;

  constructor(private _apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges) {
    if(changes.inputLat && !changes.inputLat.isFirstChange()) {
      console.log(this.inputLat);
      this._apiService.getData(this.inputLat, this.inputLng, this.inputDate)
      .subscribe(
        data => this.data = data,
        error => this.errorMessage = <any>error);
    }
    
    for (let propName in changes) {
      let change = changes[propName];
      console.dir(change);
      if(change.isFirstChange()) {
        console.log(`first change: ${propName}`);
      } else {
        console.log(`prev: ${change.previousValue}, cur: ${change.currentValue}`);
      }
    }
  }

  
}
