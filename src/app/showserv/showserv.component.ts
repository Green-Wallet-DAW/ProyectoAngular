import { Component, OnInit } from '@angular/core';
import { TokenServicesService } from '../_services/token-services.service';
import { TokenStorageService } from '../_services/token-storage.service';
import {Subject} from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-showserv',
  templateUrl: './showserv.component.html',
  styleUrls: ['./showserv.component.css']
})
export class ShowservComponent implements OnInit{

  public loading = false;
  currentUser: any;
  servicio_id: any;
  public service: any;
  public user_id: any;

  constructor(private token: TokenStorageService, private servuser: TokenServicesService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    this.servicio_id = +this._route.snapshot.paramMap.get('servicio_id');
    this.currentUser = this.token.getUser();
    this.user_id = this.currentUser.success.id;
    this.servicio();
  }
  
  servicio(){
    this.servuser.getServUserS(this.servicio_id, this.user_id).subscribe(
      results =>{
        this.service = results;
        this.loading = false;
      },
    );
  }

  

}
