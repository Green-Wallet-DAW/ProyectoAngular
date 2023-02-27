import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    this.router.navigate(['/home']);
    return this.http.post(AUTH_API + 'loginU', {
      email,
      password
    }, httpOptions);

  }

  password(email: string): Observable<any>{
    return this.http.get(AUTH_API + 'forgotPass/' + email, httpOptions);
  }

  register(name: string, email: string, password: string, phone_number: string, cumn: string, newsletter: boolean): Observable<any> {
    return this.http.post(AUTH_API + 'registerU', {
      name,
      email,
      password,
      phone_number,
      cumn,
      newsletter
    }, httpOptions);

  }

  update(id: number, name: string, email: string, phone_number: string, cumn: string, newsletter: boolean): Observable<any> {
    return this.http.put(AUTH_API + 'updateU', {
      id,
      name,
      email,
      phone_number,
      cumn,
      newsletter
    }, httpOptions);

  }

  updatePass(id: number, password: string): Observable<any>{
    return this.http.put(AUTH_API + 'updatePass', {
      id,
      password
    }, httpOptions);

  }

}
