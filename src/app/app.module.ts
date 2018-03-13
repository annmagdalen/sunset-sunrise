import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LatLngService } from '../api/lat-lng/lat-lng.service';
import { LocationService } from '../api/location/location.service';
import { InputsComponent } from './inputs/inputs.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ClockComponent } from './clock/clock.component';
import { DayLengthComponent } from './day-length/day-length.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    ClockComponent,
    DayLengthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [
    LatLngService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
