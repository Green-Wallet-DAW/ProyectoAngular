import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL_GENERAL ="http://localhost/api/mydevices";
const API_URL_DAILY ="http://localhost/api/mydevicesdaily";
const API_URL_WEEKLY = "http://localhost/api/mydevicesweekly";
const API_URL_MONTLY = "http://localhost/api/mydevicesmontly";
const API_URL_YEARLY = "http://localhost/api/mydevicesyearly";

  @Injectable({
  providedIn: 'root'
})
export class MydevicesService {

  constructor(private http: HttpClient) { }

  generalView(): Observable<any>{
    return this.http.get(API_URL_GENERAL);
  }
  dailyView(): Observable<any>{
    return this.http.get(API_URL_DAILY);
  }
  weeklyView(): Observable<any>{
    return this.http.get(API_URL_WEEKLY);
  }
  montlyView(): Observable<any>{
    return this.http.get(API_URL_MONTLY);
  }
  yearlyView(): Observable<any>{
    return this.http.get(API_URL_YEARLY);
  }
}
