import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenServicesService } from 'src/app/_services/token-services.service';


@Component({
  selector: 'app-mostrar-servicios',
  templateUrl: './mostrar-servicios.component.html',
  styleUrls: ['./mostrar-servicios.component.css'],
  
})
export class MostrarServiciosComponent implements OnInit{
  
  public userServices:any;
  public loading = false;
  public userID:string;

  constructor(private _dataServices: TokenServicesService, private authServ:AuthService) {
  }

  getUserServices(){
    this.loading = true;
    this._dataServices.getUserRoledServices()
    .subscribe(
      results => {
        this.userServices = results;
        this.loading = false;
      },
      notFound =>{
        this.userServices = JSON.parse(notFound.error).message;
        this.loading = false;
      }
    )
  }


  ngOnInit(): void {
    this.getUserServices();
  }

  hireService(){
    
  }
}
