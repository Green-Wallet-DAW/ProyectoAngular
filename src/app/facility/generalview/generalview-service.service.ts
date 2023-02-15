import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

  const API_URL_GENERAL ="http://localhost/api/generalview";
  const API_URL_DAILY ="http://localhost/api/generalviewdaily";
  const API_URL_WEEKLY ="http://localhost/api/generalviewweekly";
  const API_URL_MONTH ="http://localhost/api/generalviewmonth";
  const API_URL_YEAR ="http://localhost/api/generalviewyear";

  @Injectable({
  providedIn: 'root'
})
export class GeneralviewServiceService{

  constructor(private http: HttpClient) { }

  generalView(): Observable<any>{
    return this.http.get(API_URL_GENERAL);
  }
  weeklyView(): Observable<any>{
    return this.http.get(API_URL_WEEKLY);
  }
  yearView(): Observable<any>{
    return this.http.get(API_URL_YEAR);
  }
  monthView(): Observable<any>{
    return this.http.get(API_URL_MONTH);
  }
  dailyView(): Observable<any>{
    return this.http.get(API_URL_DAILY);
  }
}
