import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import 'cors';


@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private _http: HttpClient) { }
  timeseries = 'assets/timeseries.json';

  getTSJson(){
    return this._http.get("http://localhost:8080/json");
  }
}
