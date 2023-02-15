import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JoincomunitiesService {

  constructor(private http: HttpClient) { }

  devolver() {
    return this.http.get("http://localhost/api/unirseacomunidad");
  }  
}
