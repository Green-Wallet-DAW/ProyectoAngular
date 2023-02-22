import { Component, OnInit } from '@angular/core';
import { User } from '../../edit/user';
import { TokenStorageService } from '../../_services/token-storage.service';
import { UserService } from '../../_services/user.service';
import { GeneralviewServiceService } from 'src/app/facility/generalview/generalview-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: any;
  currentUser:any;
  loading = false;
  id:any;
  money: number;



  constructor(private userService: UserService, private token : TokenStorageService, private gvn: GeneralviewServiceService) {
    // this.content = new User(0,'','',0,'','','',0,0,'','');
   }





  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.loading = true;
    this.gvn.instalaciontokens(this.currentUser.success.id).subscribe(
      data => {
        this.currentUser.success.token = data;
        this.token.saveUser(this.currentUser);
      }
    );
    this.userService.getPublicContent().subscribe(
      data => {
        this.loading = false;
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
