import { Component, OnInit } from '@angular/core';
import { TemperatureService } from './temperature.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  chart = [];
  
  constructor(private _temperatur: TemperatureService){}

  ngOnInit(){
    this._temperatur.getTSJson()
    .subscribe(res =>{
      console.log(res);
    })
  }
}
