import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL_GENERAL ="http://localhost/proyectolaravel/public/api/mydevices";
const API_URL_DAILY ="http://localhost/proyectolaravel/public/api/mydevicesdaily";
const API_URL_WEEKLY = "http://localhost/proyectolaravel/public/api/mydevicesweekly";
const API_URL_MONTLY = "http://localhost/proyectolaravel/public/api/mydevicesmontly";
const API_URL_YEARLY = "http://localhost/proyectolaravel/public/api/mydevicesyearly";

  @Injectable({
  providedIn: 'root'
})
export class MydevicesService {

  constructor(private http: HttpClient) { }

  generalView(id:number): Observable<any>{
    console.log(API_URL_GENERAL+"/"+id);
    return this.http.get(API_URL_GENERAL+"/"+id);
  }
  dailyView(id:number): Observable<any>{
    console.log(API_URL_DAILY+"/"+id);
    return this.http.get(API_URL_DAILY+"/"+id);
  }
  weeklyView(id:number): Observable<any>{
    console.log(API_URL_WEEKLY+"/"+id);
    return this.http.get(API_URL_WEEKLY+"/"+id);
  }
  montlyView(id:number): Observable<any>{
    console.log(API_URL_MONTLY+"/"+id);
    return this.http.get(API_URL_MONTLY+"/"+id);
  }
  yearlyView(id:number): Observable<any>{
    console.log(API_URL_YEARLY+"/"+id);
    return this.http.get(API_URL_YEARLY+"/"+id);
  }
}
