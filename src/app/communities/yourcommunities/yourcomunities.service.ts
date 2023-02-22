import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YourcomunitiesService {
 public url: string;
  constructor(private http: HttpClient) { 
    this.url = "http://localhost/api";
  }

  retornar(id: number) {
    return this.http.get(this.url+"/miscomunidades/"+id);
  }  

  getUsuarios(id: string) {
    return this.http.get(this.url+"/misusuarios/"+id);
  }

 
  
}
