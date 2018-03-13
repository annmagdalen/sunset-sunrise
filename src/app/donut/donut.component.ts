import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {
  private _hours: number;
  @Input() minutes: number;
  x: number;
  y: number;
  path: string;

  get hours(): number {
    return this._hours;
  }
  
  @Input()
  set hours(hours: number) {
    this._hours = hours;
    this.y = (43 + (Math.cos(hours / 180) * 86 * Math.sin(hours / 180)));
    this.x = (Math.sin(hours / 180) * 86 * Math.sin(hours / 180));
    this.path = `M43 0 A 43 43, 0, 0, 0, ${this.x} ${this.y} L 43 43 Z`;
  }

}
