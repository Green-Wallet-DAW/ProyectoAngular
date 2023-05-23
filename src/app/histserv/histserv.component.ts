import { Component, OnInit } from '@angular/core';
import { TokenServicesService } from '../_services/token-services.service';
import { TokenStorageService } from '../_services/token-storage.service';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-histserv',
  templateUrl: './histserv.component.html',
  styleUrls: ['./histserv.component.css']
})
export class HistservComponent implements OnInit{

  public services = [];
  public loading = false;
  currentUser: any;

  constructor(private token: TokenStorageService, private servuser: TokenServicesService) { }

  ngOnInit(): void {
    this.loading = true;
    this.currentUser = this.token.getUser();
    this.servicios();
  }
  
  servicios(){
    this.servuser.getServUser(this.currentUser.success.id).subscribe(
      results =>{
        this.services = results;
        // Esto se supone que retoca el formato de fecha que sale por pantalla, pero los datos están 
        // en read-only, asi que es imposible tocarlos.
        /* for(let i = 0; i < this.services.length; i++){
          let cadena = this.services[i].created_at;
          cadena[10] = " ";
          cadena.slice(-8);
          this.services[i].created_at = cadena;
        } */
        console.log(this.services);
        this.loading = false;
      },
    );
  }

}
