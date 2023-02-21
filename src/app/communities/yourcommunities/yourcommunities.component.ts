import { Component, OnInit } from '@angular/core';
import { YourcomunitiesService } from './yourcomunities.service';

@Component({
  selector: 'app-yourcommunities',
  templateUrl: './yourcommunities.component.html',
  styleUrls: ['./yourcommunities.component.css']
})
export class YourcommunitiesComponent implements OnInit{
  comunidades: any;
  usuarios:any;

  constructor(private comunidadesService: YourcomunitiesService) {}

  ngOnInit() {
    this.comunidadesService.retornar()
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
