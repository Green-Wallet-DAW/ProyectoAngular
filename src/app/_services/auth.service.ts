import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'loginU', {
      email,
      password
    }, httpOptions);
  }

  register(name: string, email: string, password: string, phone_number: string, cumn: string, newsletter: number): Observable<any> {
    return this.http.post(AUTH_API + 'registerU', {
      name,
      email,
      password,
      phone_number,
      cumn,
      newsletter
    }, httpOptions);
  }
}
