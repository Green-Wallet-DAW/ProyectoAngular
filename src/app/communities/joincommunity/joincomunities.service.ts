import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoincomunitiesService {

  constructor(private http: HttpClient) { }

  devolver(): Observable<any> {
    return this.http.get("http://localhost/ProyectoLaravel/public/api/unirseacomunidad");
  }
}
