import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YourcomunitiesService {
 public url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost/api";
  }

  retornar(id: number): Observable<any> {
    console.log(this.url+"/miscomunidades/"+id);
    return this.http.get(this.url+"/miscomunidades/"+id);
  }

  getUsuarios(id: string):  Observable<any> {
    return this.http.get(this.url+"/misusuarios/"+id);
  }
  abandonar(com:number, usu:number): Observable<any>{
    return this.http.get(this.url+"/eliminarusucom/"+com+"/"+usu);
  }



}
