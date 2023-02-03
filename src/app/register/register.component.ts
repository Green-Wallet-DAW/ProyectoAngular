import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    name: null,
    email: null,
    password: null,
    phone_number: null,
    cumn: null,
    newsletter: null,
    // news: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { name, email, password, phone_number, cumn, newsletter  } = this.form;

    //No se como funciona los checkbox, no me deja pasar info si no se marca la casilla
    // this.form.newsletter = 1; 
    // if(this.form.news){
    //   this.form.newsletter = 2;
    // }
    console.log(this.form);
    this.authService.register(name, email, password, phone_number, cumn, newsletter).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
