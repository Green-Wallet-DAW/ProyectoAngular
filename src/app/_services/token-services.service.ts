import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "http://localhost/api/serviceList";


const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

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
  hiringService(user_id:String, serv_id): Observable<any>{
    let restofURL =   "/hire/" + user_id + "/" + serv_id;
    return this.http.get(API_URL + restofURL);
  }
  hiringCommunityService(comm_id:String, serv_id): Observable<any>{
    let restofURL =  "/hireComm/" + comm_id + "/" + serv_id;
    return this.http.get(API_URL + restofURL);
  }
}
