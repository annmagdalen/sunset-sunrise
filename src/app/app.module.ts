import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LatLngService } from '../api/lat-lng/lat-lng.service';
import { LocationService } from '../api/location/location.service';
import { InputsComponent } from './inputs/inputs.component';
import { ClockComponent } from './clock/clock.component';
import { DayLengthComponent } from './day-length/day-length.component';
import { DonutComponent } from './donut/donut.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    ClockComponent,
    DayLengthComponent,
    DonutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    LatLngService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
