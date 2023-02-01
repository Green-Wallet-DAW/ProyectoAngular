import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "http://localhost/api/";


const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TokenServicesService {

  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get(API_URL + 'serviceList/user');
  }
}
