import { Component, OnInit } from '@angular/core';
import { YourcomunitiesService } from './yourcomunities.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AuthService } from 'src/app/_services/auth.service';

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
    this.comunidadesService.getUsuarios(id).subscribe();
  }
  // eliminarEmpleado(id: string) {
  //   this.comunidadesService.borrarComunidad(id)
  //     .subscribe(
  //       result => {
  //         // console.log("Empleado eliminado con éxito");
  //         this.toastr.success('Empleado eliminado con éxito!!', 'Eliminado empleado', {positionClass: 'toast-bottom-right', timeOut:2000});
  //         this.getEmpleados();
  //       },
  //       error => {
  //         this.mensajeErr = '';
  //         if (error instanceof ErrorEvent) {
  //           this.mensajeErr = error.error.message;
  //         }
  //         else if (error.status == 404) {
  //           this.mensajeErr = "Error 404"
  //         } else {
  //           this.mensajeErr = "Error status:" + error.status;
  //         }
  //         console.log(this.mensajeErr);
  //       }
  //     );
  // }
}
