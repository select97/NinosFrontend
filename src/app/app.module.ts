import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TemperatureService } from './temperature.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [TemperatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
