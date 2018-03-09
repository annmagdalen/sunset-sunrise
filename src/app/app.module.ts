import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LatLngService } from '../api/lat-lng/lat-lng.service';
import { LocationService } from '../api/location/location.service';
import { InputsComponent } from './inputs/inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LatLngService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
