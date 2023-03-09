import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL_ADD ="http://localhost/ProyectoLaravel/public/api/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddfacilityServiceService {

  constructor(private http:HttpClient) { }

  addfacility(user_id:number, number_machine: String, facility_name: String, street_name: String, contract_number: string): Observable<any>{
    console.log("Return de addfacility: "+API_URL_ADD+'addfacility',{user_id,number_machine,facility_name,street_name,contract_number});
    return this.http.post(API_URL_ADD+'addfacility',{user_id,number_machine,facility_name,street_name,contract_number},httpOptions);
  }


}
