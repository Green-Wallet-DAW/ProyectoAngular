import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost/ProyectoLaravel/public/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient, private router: Router) { }

  createMessage(tipo: string, message: string): Observable<any> {
    return this.http.patch(AUTH_API + 'sendMessageU', {
      tipo,
      message,
    }, httpOptions);

  }

  getMessages(): Observable<any> {
    return this.http.get(AUTH_API + 'getMessagesU', httpOptions);

  }
}
