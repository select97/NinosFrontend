import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TemperatureService } from './temperature.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [TemperatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
