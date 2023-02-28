import { Component, OnInit } from '@angular/core';
import { YourcomunitiesService } from './yourcomunities.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AuthService } from 'src/app/_services/auth.service';
import { SelectControlValueAccessor } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-yourcommunities',
  templateUrl: './yourcommunities.component.html',
  styleUrls: ['./yourcommunities.component.css']
})
export class YourcommunitiesComponent implements OnInit{
  comunidades: any;
  usuarios:any;
  currentuser: any;
  constructor(private comunidadesService: YourcomunitiesService, private authServ:AuthService, private token: TokenStorageService) {}

  ngOnInit() {
    this.getComunidades();
    this.currentuser=this.token.getUser();

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

  eliminarcomusu(com:number, usu:number){
    this.comunidadesService.abandonar(com, usu).subscribe(result => this.getComunidades());
  }
}
