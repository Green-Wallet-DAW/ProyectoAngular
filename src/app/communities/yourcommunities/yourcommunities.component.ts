import { Component, OnInit } from '@angular/core';
import { YourcomunitiesService } from './yourcomunities.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AuthService } from 'src/app/_services/auth.service';

declare var $: any;

@Component({
  selector: 'app-yourcommunities',
  templateUrl: './yourcommunities.component.html',
  styleUrls: ['./yourcommunities.component.css']
})
export class YourcommunitiesComponent implements OnInit{
  comunidades: any;
  usuarios:any;

  constructor(private comunidadesService: YourcomunitiesService, private authServ:AuthService, private token: TokenStorageService) {}

  ngOnInit() {
    this.getComunidades();


  }

  getComunidades(){
    this.comunidadesService.retornar(this.token.getUser().success.id)
      .subscribe( result =>  this.comunidades = result);
  }
  verUsuario(id: string) {
    //console.log( this.comunidadesService.getUsuarios(id));
    console.log(id);
    this.comunidadesService.getUsuarios(id).subscribe( result =>  this.usuarios = result);
  }

  eliminar(com:number, usu:number){
    
  }
}
