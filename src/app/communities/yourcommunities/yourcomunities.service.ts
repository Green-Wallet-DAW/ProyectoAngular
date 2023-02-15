import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YourcomunitiesService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("http://localhost/api/miscomunidades");
  }  
  
}
