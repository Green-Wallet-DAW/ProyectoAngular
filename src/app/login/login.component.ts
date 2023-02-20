import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  rol: string;

  constructor(private toastr: ToastrService ,private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router,) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.success.token);
        this.tokenStorage.saveUser(data);
        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.rol = this.tokenStorage.getUser().success.rol;
        
        if(this.rol == "admin"){ //Guarda
          this.logout();
        }else{
          this.reloadPage();
          this.router.navigate(['/home']);

        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.router.navigate(['/login']);
        this.toastr.error("Email and password didn't match, try again", 'Login Failed', {positionClass: 'toast-bottom-center', timeOut:5000});
      }
      );
    }

    forgot(){

    }
    
    reloadPage(): void { 
      window.location.reload();
    }

    logout(): void {
      this.tokenStorage.signOut();
      this.router.navigate(['/login']);
    }

}
