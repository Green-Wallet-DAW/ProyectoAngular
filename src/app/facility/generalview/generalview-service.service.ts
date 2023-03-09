import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

  const API_URL = "http://localhost/ProyectoLaravel/public/api";
  const API_URL_GENERAL ="http://localhost/ProyectoLaravel/public/api/generalview";
  const API_URL_DAILY ="http://localhost/ProyectoLaravel/public/api/generalviewdaily";
  const API_URL_WEEKLY ="http://localhost/ProyectoLaravel/public/api/generalviewweekly";
  const API_URL_MONTH ="http://localhost/ProyectoLaravel/public/api/generalviewmonth";
  const API_URL_YEAR ="http://localhost/ProyectoLaravel/public/api/generalviewyear";
  const TOKENS = "http://localhost/ProyectoLaravel/public/api/instalaciontokens";

  @Injectable({
  providedIn: 'root'
})
export class GeneralviewServiceService{

  constructor(private http: HttpClient) { }

  generalView(id:number): Observable<any>{
    console.log(API_URL_GENERAL+"/"+id);
    return this.http.get(API_URL+"/generalview/"+id);
  }

  yearView(id:number): Observable<any>{
    console.log(API_URL_YEAR+"/"+id);
    return this.http.get(API_URL+"/generalviewyear/"+id);
  }
  monthView(id:number): Observable<any>{
    console.log(API_URL_MONTH+"/"+id);
    return this.http.get(API_URL+"/generalviewmonth/"+id);
  }
  weeklyView(id:number): Observable<any>{
    console.log(API_URL_WEEKLY+"/"+id);
    return this.http.get(API_URL+"/generalviewweekly/"+id);
  }
  dailyView(id:number): Observable<any>{
    console.log(API_URL_DAILY+"/"+id);
    return this.http.get(API_URL+"/generalviewdaily/"+id);
  }
  deletefacility(id:number): Observable<any>{
    console.log(API_URL_DAILY+"/"+id);
    return this.http.get(API_URL+"/deletefacility/"+id);
  }

  instalaciontokens(id:number): Observable<any>{
    console.log(TOKENS+"/"+id);
    return this.http.get(TOKENS+"/"+id);
  }
}
