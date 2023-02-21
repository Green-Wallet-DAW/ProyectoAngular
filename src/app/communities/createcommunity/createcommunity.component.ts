import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comunidades } from './comunidades';
import { CreateCommunityServiceService } from './create-community-service.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-createcommunity',
  templateUrl: './createcommunity.component.html',
  styleUrls: ['./createcommunity.component.css']
})
export class CreatecommunityComponent implements OnInit{
  public comunidad: Comunidades;
  currentuser:any;
  public mensajeErr = "";
  public introducido = -1;
  formularioAlta = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
    master: new FormControl('', [Validators.required]),
    id_comunity: new FormControl('', [Validators.required]),
    id_user: new FormControl('', [Validators.required]),
  });
  public cargando = false;

  constructor(private _createComunityService: CreateCommunityServiceService, private router: Router, private toastr: ToastrService) {
    this.comunidad = new Comunidades("", "", 0, 0, 0);
   
  }

  ngOnInit(): void {
    this.currentuser=this.to

  }

  onSubmit() {
    if (this.formularioAlta.valid) {
      this.comunidad.name = this.formularioAlta.value.name!;
      this.comunidad.description = this.formularioAlta.value.description!;
      this.comunidad.master = Number(this.formularioAlta.value.master);
      this.comunidad.id_comunity = Number(this.formularioAlta.value.id_comunity);
      this.comunidad.id_user = Number(this.formularioAlta.value.id_user);
      // this.empleado.contratado = Number(this.formularioAlta.value.contratado);
      this.cargando = true;
      this._createComunityService.introducirComunidad(this.comunidad)
        .subscribe(
          result => {
            this.introducido = 1;
            this.cargando = false;
            // this.router.navigate(['/empleados']);
            // this.toastr.success('El empleado se ha registrado con éxito!!', 'Añadido empleado');
            this.toastr.success('El empleado se ha registrado con éxito!!', 'Añadido empleado', { positionClass: 'toast-bottom-right', timeOut: 2000 });
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
              this.mensajeErr = "Empleado ya existe"
            } else {
              this.mensajeErr = "Error status:" + error.status;
            }
            // console.log(this.mensajeErr);
            this.toastr.error(this.mensajeErr, 'ERROR AÑADIENDO EMPLEADO', { positionClass: 'toast-bottom-right' });
          }
        );
    } else this.toastr.error("El formulario no valida bien", 'ERROR AÑADIENDO EMPLEADO', { positionClass: 'toast-bottom-right' });
  }
}
