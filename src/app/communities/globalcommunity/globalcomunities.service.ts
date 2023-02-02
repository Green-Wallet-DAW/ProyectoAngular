import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalcomunitiesService {

  constructor(private http: HttpClient) { }

  ganadores() {
    return this.http.get("http://localhost/api/globalcoms");
  }  
}
