import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  const API_URL ="http://localhost/api/generalview";

@Injectable({
  providedIn: 'root'
})
export class GeneralviewServiceService{

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get(API_URL);
  }
}
