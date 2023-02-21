import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public loading = false;
  currentUser: any;
  news = "";
  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.loading = true;
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);
    if(this.currentUser.success.newsletter == 1){
      this.news = "YES";
    }else{
      this.news = "NO";
    }
    this.loading = false;
  }
}
