import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalcomunitiesService {

  constructor(private http: HttpClient) { }

  ganadores(): Observable<any> {
    return this.http.get("http://localhost/api/globalcoms");
  }  
}
