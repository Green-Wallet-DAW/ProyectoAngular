import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JoincomunitiesService } from './joincomunities.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuarios } from './usuarios';
declare var $:any;

@Component({
  selector: 'app-joincommunity',
  templateUrl: './joincommunity.component.html',
  styleUrls: ['./joincommunity.component.css']
})
export class JoincommunityComponent implements OnInit {
  comunidades: any;
  public introducido = -1;
  public mensajeErr: string;
  dtOptions: DataTables.Settings = {};
  public muestratabla: boolean;
  usuarios: any;
  formularioAlta = new FormGroup({
    usuario_id: new FormControl(this.token.getUser().success.id),
  
    comunidad_id: new FormControl(),
  });
  public cargando = false;
 


  constructor(private authServ:AuthService, private comunidadesService: JoincomunitiesService, private router: Router, private token: TokenStorageService, private toastr: ToastrService) {
    this.muestratabla=false;
    this.mensajeErr = '';
    this.usuarios=new Usuarios(0,0);
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        processing: "Procesando...",
        lengthMenu: "Mostrar _MENU_ registros",
        zeroRecords: "No se encontraron resultados",
        emptyTable: "Ningún dato disponible en esta tabla",
        infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
        infoFiltered: "(filtrado de un total de _MAX_ registros)",
        search: "Buscar:",
        loadingRecords: "Cargando...",
        paginate: {
          first: "Primero",
          last: "Último",
          next: "Siguiente",
          previous: "Anterior"
        },
        info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
      },
    };

    this.Comunidades();

      }

      Comunidades(){
        this.comunidadesService.devolver()
          .subscribe( result =>  {this.comunidades = result; this.muestratabla= true})
      }

      prueba(){
        $('.cosas').modal('hide');
      }

      onSubmit(){
        if (this.formularioAlta.valid) {
       
          this.usuarios.usuario_id = Number(this.formularioAlta.value.usuario_id);
          // this.comunidad.id_comunity = Number(this.formularioAlta.value.id_comunity);
          this.usuarios.comunidad_id = Number(this.formularioAlta.value.comunidad_id);
          // this.empleado.contratado = Number(this.formularioAlta.value.contratado);
          this.cargando = true;
          this.comunidadesService.registrar(this.usuarios)
            .subscribe(
              result => {
                this.introducido = 1;
                this.cargando = false;
                // this.router.navigate(['/empleados']);
                // this.toastr.success('El empleado se ha registrado con éxito!!', 'Añadido empleado');
                this.toastr.success('La comunidad se ha registrado con éxito!!', 'Añadido Comunidad', { positionClass: 'toast-bottom-right', timeOut: 2000 });
                setTimeout(() => {
                  this.router.navigate(['/yourCommunity']);
                }, 50);
                // console.log("Empleado registrado con éxito");
                // this.getEmpleados();
              },
              error => {
                this.introducido = 0;
                this.cargando = false;
                this.mensajeErr = '';
                if (error instanceof ErrorEvent) {
                  this.mensajeErr = error.error.message;
                }
                else if (error.status == 409) {
                  this.mensajeErr = "La comunidad ya existe"
                } else {
                  this.mensajeErr = "Error status:" + error.status;
                }
                // console.log(this.mensajeErr);
                this.toastr.error(this.mensajeErr, 'ERROR AÑADIENDO LA COMUNIDAD', { positionClass: 'toast-bottom-right' });
              }
            );
        } else this.toastr.error("El formulario no valida bien", 'ERROR AÑADIENDO COMUNIDAD', { positionClass: 'toast-bottom-right' });
      }


  }

