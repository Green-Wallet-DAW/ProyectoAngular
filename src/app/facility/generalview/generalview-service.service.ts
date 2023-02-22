import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

  const API_URL_GENERAL ="http://localhost/proyectolaravel/public/api/generalview";
  const API_URL_DAILY ="http://localhost/proyectolaravel/public/api/generalviewdaily";
  const API_URL_WEEKLY ="http://localhost/proyectolaravel/public/api/generalviewweekly";
  const API_URL_MONTH ="http://localhost/proyectolaravel/public/api/generalviewmonth";
  const API_URL_YEAR ="http://localhost/proyectolaravel/public/api/generalviewyear";

  @Injectable({
  providedIn: 'root'
})
export class GeneralviewServiceService{

  constructor(private http: HttpClient) { }

  generalView(id:number): Observable<any>{
    console.log(API_URL_GENERAL+"/"+id);
    return this.http.get(API_URL_GENERAL+"/"+id);
  }
  weeklyView(id:number): Observable<any>{
    console.log(API_URL_WEEKLY+"/"+id);
    return this.http.get(API_URL_WEEKLY+"/"+id);
  }
  yearView(id:number): Observable<any>{
    console.log(API_URL_YEAR+"/"+id);
    return this.http.get(API_URL_YEAR+"/"+id);
  }
  monthView(id:number): Observable<any>{
    console.log(API_URL_MONTH+"/"+id);
    return this.http.get(API_URL_MONTH+"/"+id);
  }
  dailyView(id:number): Observable<any>{
    console.log(API_URL_DAILY+"/"+id);
    return this.http.get(API_URL_DAILY+"/"+id);
  }
}
