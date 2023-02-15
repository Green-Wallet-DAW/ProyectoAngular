import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { matchValidator } from './form-validator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // form: any = {
  //   name: null,
  //   email: '',
  //   password: null,
  //   phone_number: null,
  //   cumn: null,
  //   newsletter: true,
  //   cpassword: ['', [
  //     Validators.required,
  //     matchValidator('password')
  //   ]],
  //   // news: null,
  // };
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
    phone_number: new FormControl('', [Validators.required]),
    cumn: new FormControl(''),
    newsletter: new FormControl(true, [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(10), matchValidator('cpassword', true)]),
    cpassword: new FormControl('', [Validators.required, Validators.minLength(10), matchValidator('password')]),
    conf: new FormControl(false, [Validators.required]),
  });



  toast1= false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // console.log(this.form);
    if(this.form.valid){
      this.authService.register(this.form.value.name!, this.form.value.email!, this.form.value.password!, this.form.value.phone_number!, this.form.value.cumn!, this.form.value.newsletter!).subscribe(
        data => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.toastr.success('Your information has been registered successfully! You will be redirected now to the login', 'Account created', {positionClass: 'toast-bottom-center', timeOut:10000});
          
          this.router.navigate(['/login']);

          this.toast1 = true;
        },
        error => {
          if(error instanceof ErrorEvent){
            this.errorMessage = error.error.message;
          }else{
            this.errorMessage = "Error status: " + error.status;
          }
          this.isSignUpFailed = true;
        }
      );
    }else{
      this.toastr.error("The form did not validated correctly", 'ERROR CREATING ACCOUNT', {positionClass: 'toast-bottom-right', timeOut:5000});
    }
  }
}
