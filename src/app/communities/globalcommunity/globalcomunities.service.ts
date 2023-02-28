import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "http://localhost/api/"

@Injectable({
  providedIn: 'root'
})
export class GlobalcomunitiesService {

  constructor(private http: HttpClient) { }

  ganadores(): Observable<any> {
    return this.http.get("http://localhost/api/globalcoms");
  }  
  allComm(): Observable<any>{
    return this.http.get(API_URL + "allComs");
  }
}
