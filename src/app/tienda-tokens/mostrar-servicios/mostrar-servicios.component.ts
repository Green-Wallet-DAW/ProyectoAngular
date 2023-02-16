import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { TokenServicesService } from 'app/_services/token-services.service';
// import { AuthService } from 'app/_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenServicesService } from 'src/app/_services/token-services.service';
// import { TokenStorageService } from 'app/_services/token-storage.service';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mostrar-servicios',
  templateUrl: './mostrar-servicios.component.html',
  styleUrls: ['./mostrar-servicios.component.css'],
  
})
export class MostrarServiciosComponent implements OnInit{
  
  public userServices:any;
  public loading = false;
  public userID:number |null ;
  public serviceID:number | null;
  servicio:any;
  currentUser:any;


  constructor(private _dataServices: TokenServicesService, private authServ:AuthService, private router: Router, private aRoute: ActivatedRoute, private token: TokenStorageService, private toastr: ToastrService) {
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
    this.currentUser = this.token.getUser();

    this.getUserServices();
    // console.log(this.currentUser.success.id);
  }
  
  hireService(user_id:number, serv_id:number){
    this.servicio = this._dataServices.getServiceById(serv_id);
    console.log(serv_id+" "+user_id);

    let precioService = this.servicio.precio;

    this._dataServices.hiringService(user_id, serv_id)
    .subscribe(
      success =>{
        console.log("The service has been hired");
        this.toastr.success("The service has been hired.", "Service Hired");
        // setTimeout(()=>{
        //   this.router.navigate(["/userServices"]);
        // }, 5000)
        this.currentUser.success.tokens -= precioService;
        this.token.saveUser(this.currentUser);
        //  this.servicio.precio;
      },
      err =>{
        console.log("The service couldn't be hired");
        this.toastr.error("The service couldn't be hired", "The service an't be hired");
      }
    )
  }
}
