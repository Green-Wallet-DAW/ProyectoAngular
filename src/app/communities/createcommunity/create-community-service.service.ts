import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comunidades, Com_Usu } from './comunidades';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CreateCommunityServiceService {

  public url: string;



  constructor(private http: HttpClient) {
    this.url = "http://localhost/api/comunidad/";
  }
  introducirComunidad(comunidad: Comunidades): Observable<any> {
    return this.http.post(this.url+'guardar', comunidad, httpOptions);
  }
  introducirUserCom(anyadir: Com_Usu): Observable<any> {
    return this.http.post(this.url+'guardar2', anyadir, httpOptions);
  }
}
