import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL ="http://localhost/proyectolaravel/public/api/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddmachineServiceService {

  constructor(private http:HttpClient) { }

  showfacilities(id: number): Observable<any> {
    console.log(API_URL+"addmachine/"+id);
    return this.http.get(API_URL+"addmachine/"+id);
  }

  addmachine(modelo: String, components: String, fabricante: string,id_instalaton:any): Observable<any>{
    console.log(API_URL,{modelo,components,fabricante,id_instalaton});
    return this.http.post(API_URL+'storemachine',{modelo,components,fabricante,id_instalaton},httpOptions);
  }


}
