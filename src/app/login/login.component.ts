import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {callJSFun} from '../login/emails.js';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $: any;

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

  form2 = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)])
  });

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
      $('#staticBackdrop').modal('show');
    }
  
    send(){
      if(this.form2.valid){
        // let body = this.authService.password(this.form2.value.email);
        this.authService.password(this.form2.value.email).subscribe(
          result => {
            // console.log(result);
            callJSFun(this.form2.value.email, result);
          },
          error => {
            if(error instanceof ErrorEvent){
              this.errorMessage = error.error.message;
            }else{
              this.errorMessage = "Error status: " + error.status;
            }
          }
        );
        $('#staticBackdrop').modal('hide');
      }
    }
    
    reloadPage(): void { 
      window.location.reload();
    }

    logout(): void {
      this.tokenStorage.signOut();
      this.router.navigate(['/login']);
    }
    
  }
  