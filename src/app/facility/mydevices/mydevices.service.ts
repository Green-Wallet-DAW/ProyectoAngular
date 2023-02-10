import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL_GENERAL ="http://localhost/api/mydevices";

  @Injectable({
  providedIn: 'root'
})
export class MydevicesService {

  constructor(private http: HttpClient) { }

  generalView(): Observable<any>{
    return this.http.get(API_URL_GENERAL);
  }
}
