import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Facility } from './facility';

const API_URL_ADD ="http://localhost/proyectolaravel/public/api/addfacility";

@Injectable({
  providedIn: 'root'
})
export class AddfacilityServiceService {

  constructor(private http:HttpClient) { }

  addfacility(facility): Observable<any>{
    console.log(API_URL_ADD);
    return this.http.post(API_URL_ADD, facility);
  }


}
