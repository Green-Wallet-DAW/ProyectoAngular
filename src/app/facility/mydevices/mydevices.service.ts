import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = "http://localhost/ProyectoLaravel/public/api/";


  @Injectable({
  providedIn: 'root'
})
export class MydevicesService {

  constructor(private http: HttpClient) { }

  generalView(id:number): Observable<any>{
    console.log(API_URL+"mydevices/"+id);
    return this.http.get(API_URL+"mydevices/"+id);
  }
  dailyView(id:number): Observable<any>{
    console.log(API_URL+"mydevicesdaily/"+id);
    return this.http.get(API_URL+"mydevicesdaily/"+id);
  }
  weeklyView(id:number): Observable<any>{
    console.log(API_URL+"mydevicesweekly/"+id);
    return this.http.get(API_URL+"mydevicesweekly/"+id);
  }
  montlyView(id:number): Observable<any>{
    console.log(API_URL+"mydevicesmontly/"+id);
    return this.http.get(API_URL+"mydevicesmontly/"+id);
  }
  yearlyView(id:number): Observable<any>{
    console.log(API_URL+"mydevicesyearly/"+id);
    return this.http.get(API_URL+"mydevicesyearly/"+id);
  }
  deletemachine(id:number): Observable<any>{
    console.log(API_URL+"deletemachine/"+id);
    return this.http.get(API_URL+"deletemachine/"+id);
  }
}
