import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './_services/auth.service';
import { TokenStorageService } from './_services/token-storage.service';
import { GlobalcomunitiesService } from './communities/globalcommunity/globalcomunities.service';
@Injectable({
  providedIn: 'root'
})



export class ServiceGuardGuard implements CanActivate {
  currentUser:any;
  community:any;
  isLoggedIn:boolean
  constructor(private auth: AuthService, private token:TokenStorageService, private commServ : GlobalcomunitiesService){
    this.isLoggedIn = false
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.currentUser = this.token.getUser()
    this.isLoggedIn = !!this.token.getToken();
    this.community = this.commServ.allComm();
    if(this.isLoggedIn == true){
      if (this.currentUser.success.id == this.community.master) {
        return true;
      }else{
        return false;
      }
      
    }else{
      return false;
    }
      
  }

  
}
