import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "http://localhost/api/serviceList";


@Injectable({
  providedIn: 'root'
})
export class TokenServicesService {

  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get(API_URL)
  }
  getUserRoledServices(): Observable<any>{
    return this.http.get(API_URL + "/user")
  }
  getCommunityRoledServices(): Observable<any>{
    return this.http.get(API_URL + "/community");
  }
  hiringService(id:String): Observable<any>{
    return this.http.get(API_URL + "/hire/" + id);
  }
}
