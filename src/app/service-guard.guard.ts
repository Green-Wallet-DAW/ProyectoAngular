import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './_services/auth.service';
import { TokenStorageService } from './_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})



export class ServiceGuardGuard implements CanActivate {
  currentUser:any;
  community:any;
  isLoggedIn:boolean
  constructor(private auth: AuthService, private token:TokenStorageService){
    this.isLoggedIn = false
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.currentUser = this.token.getUser()
    this.isLoggedIn = !!this.token.getToken();

    if(this.isLoggedIn == true){
      return true;
    }else{
      return false;
    }
      
  }

  
}
