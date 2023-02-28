import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GlobalcomunitiesService } from 'src/app/communities/globalcommunity/globalcomunities.service';
// import { TokenServicesService } from 'app/_services/token-services.service';
// import { TokenServicesService } from 'app/_services/token-services.service';
import { TokenServicesService } from 'src/app/_services/token-services.service';


@Component({
  selector: 'app-show-community-services',
  templateUrl: './show-community-services.component.html',
  styleUrls: ['./show-community-services.component.css']
})
export class ShowCommunityServicesComponent implements OnInit{

  public community:any;
  public communityServices:any;
  public charging = false;

  constructor(private _dataServices: TokenServicesService, private _commServices: GlobalcomunitiesService, private toastr: ToastrService) {}

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

  hireCommunityService(comm_id:number, serv_id:number, commTokens: number, servTokens: number){
    
   this.community =  this._commServices.allComm();


if (commTokens >= servTokens) {
  this._dataServices.hiringCommunityService(comm_id, serv_id)
  .subscribe(
    success =>{
      console.log("The service has been hired");
      this.toastr.success("The service has been hired", "The service has been hired for the community!");
      this.community.token -= servTokens;
    },
    err=>{
      console.log("No data");
    }
  )
}

  }
}
