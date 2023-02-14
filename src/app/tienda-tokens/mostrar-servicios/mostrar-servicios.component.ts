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
    console.log(serv_id+" "+user_id);
    this._dataServices.hiringService(user_id, serv_id)
    .subscribe(
      success =>{
        console.log("exito");
        this.toastr.success("The service has been contracted.", "Service Hired" ,{positionClass: 'toast-bottom-right', timeOut:2000});
        setTimeout(()=>{
          this.router.navigate(["/userServices"]);
        }, 5000)
        
      },
      err =>{
        console.log("no data");
        alert("Error");
        this.toastr.error("The service couldn't be hired");
      }
    )
  }
}
