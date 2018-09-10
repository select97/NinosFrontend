import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../temperature.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart = [];

  constructor(private _temperatur: TemperatureService){}

  ngOnInit() {
    this._temperatur.getTSJson()
    .subscribe(res =>{
      console.log(res);
      //let data : string [] = res['list'].map(res => res.data);
      //let timestamp : string []= res['list'].map(res => res.timestamp);
      
      console.log(res.data);
      console.log(res.timestamp);

      this.chart = new Chart('canvas', {
        type: 'line',
        label: "Temperatur",

        data: {
          labels: res.timestamp,
          datasets: [
            {
              label: "Temperatur",
              backgroundColor: 'rgb(97, 150, 35)',
              pointRadius: 0,
              data: res.data,
            }
          ],
          
          
        }
      });
    })
  }

}
