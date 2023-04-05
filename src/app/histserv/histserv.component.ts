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

  public services:any;
  public loading = false;
  currentUser: any;

  constructor(private token: TokenStorageService, private servuser: TokenServicesService) { }

  ngOnInit(): void {
    this.loading = true;
    this.currentUser = this.token.getUser();
    this.servicios();
    this.loading = false;
  }

  servicios(){
    this.servuser.getServUser(this.currentUser.success.id).subscribe(
      results =>{
        this.services = results;
        console.log(results);
      },
    );
  }

}
