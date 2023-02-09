import { Component, OnInit } from '@angular/core';
import { TokenServicesService } from 'src/app/_services/token-services.service';

@Component({
  selector: 'app-show-community-services',
  templateUrl: './show-community-services.component.html',
  styleUrls: ['./show-community-services.component.css']
})
export class ShowCommunityServicesComponent implements OnInit{

  public communityServices:any;
  public charging = false;

  constructor(private _dataServices: TokenServicesService) {}

  getCommunityServices(){

    this.charging = true;
    this._dataServices.getCommunityRoledServices()
    .subscribe(
      foundresults => {
        this.communityServices = foundresults;
        this.charging = false;
      },
      mistake =>{
        this.communityServices = JSON.parse(mistake.error).message;
        this.charging = false;
      }
    )
  }
  ngOnInit(): void {
      this.getCommunityServices();
  }

  hireCommunityService(comm_id:string, serv_id:string){
    this._dataServices.hiringCommunityService(comm_id, serv_id)
    .subscribe(
      success =>{
        console.log(success);
      },
      err=>{
        console.log("No data");
      }
    )
  }
}
