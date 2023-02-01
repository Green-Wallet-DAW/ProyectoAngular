import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TokenServicesService } from 'src/app/_services/token-services.service';


@Component({
  selector: 'app-mostrar-servicios',
  templateUrl: './mostrar-servicios.component.html',
  styleUrls: ['./mostrar-servicios.component.css'],
  
})
export class MostrarServiciosComponent implements OnInit{
  
  servicios?:string;

  constructor(private dataServices: TokenServicesService) {}

  getAllServices(){
    this.dataServices.getServices()
    .subscribe(
      positiveResult =>{
        this.servicios = positiveResult;
      },
      err => {
        this.servicios = JSON.parse(err.error).message;
      }
    )
  }

  ngOnInit(): void {
    this.getAllServices();
  }

}
