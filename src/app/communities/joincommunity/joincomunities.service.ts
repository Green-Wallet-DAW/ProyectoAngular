import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from './usuarios';
@Injectable({
  providedIn: 'root'
})
export class JoincomunitiesService {

  constructor(private http: HttpClient) { }

  devolver(): Observable<any> {
    return this.http.get("http://localhost/api/unirseacomunidad");
<<<<<<< HEAD
=======
  }
  registrar(usuarios: Usuarios):Observable<any> {
    return this.http.post("http://localhost/api/joincom",usuarios);
>>>>>>> christian2
  }
}
