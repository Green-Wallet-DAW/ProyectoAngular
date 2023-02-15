import { Component, OnInit } from '@angular/core';
import { JoincomunitiesService } from './joincomunities.service';


@Component({
  selector: 'app-joincommunity',
  templateUrl: './joincommunity.component.html',
  styleUrls: ['./joincommunity.component.css']
})
export class JoincommunityComponent implements OnInit {
  comunidades: any;
  public muestratabla: boolean;
  dtOptions: DataTables.Settings = {};
  constructor(private comunidadesService: JoincomunitiesService) {
    this.muestratabla=false;
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language:{
        processing:"Procesando...",
        lengthMenu: "Mostrar _MENU_ registros",
        zeroRecords: "No se encontraron resultados",
        emptyTable: "Ningun dato disponible en esta tabla",
        infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
        infoFiltered: "(filtrado de un total de _MAX_ registros)",
        search: 'Buscar: <i class="bi bi-search"></i> ',
        loadingRecords: "Cargando....",
        paginate: {
          first: "Primero",
          last: "Último",
          next: "Siguiente",
          previous: "Anterior"
        },
          info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
        },
      };
    this.comunidadesService.devolver()
      .subscribe( result =>  {this.comunidades = result; this.muestratabla= true})
      
      }
  }

