import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { User } from './user';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  
  // public  name: string | null;
  // public  email: string | null;
  // public  phone_number: string | null;
  // public  cumn: string | null;
  // public newsletter: any;

  public user: any;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  public enter = -1;

  formUpdate = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    email: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    phone_number: new FormControl('', [Validators.required]),
    cumn: new FormControl(''),
    newsletter: new FormControl(true, [Validators.required]),
  });
  public loading = false;
  // form: { name: any; email: any; phone_number: any; cumn: any; newsletter: any; };

  constructor(private authService: AuthService, private token: UserService, private router: Router, private toastr: ToastrService) {
    this.user = new User('','','','', false);
   }

  ngOnInit(): void {
    this.loading = true;
    this.token.getPublicContent()
    .subscribe(
      result =>{
        // console.log("entra result");
        this.user = result;
        this.loading = false;
        this.formUpdate.setValue({
          name: this.user[0].name,
          email: this.user[0].email,
          phone_number: this.user[0].phone_number,
          cumn: this.user[0].cumn,
          newsletter: this.user[0].newsletter
        });
      },
      error => {
        this.errorMessage = '';
        if (error instanceof ErrorEvent) {
          this.errorMessage = error.error.message;
        } else if (error.status == 404) {
          this.errorMessage = "Error 404";
        } else {
          this.errorMessage = "Error status:" + error.status;
        }
        this.loading = false;
      }
      
    );
  }

  onSubmit(): void {
    if(this.formUpdate.valid){
      this.user[0].name = this.formUpdate.value.name!;
      this.user[0].email  = this.formUpdate.value.email!;
      this.user[0].phone_number  = this.formUpdate.value.phone_number!;
      this.user[0].cumn  = this.formUpdate.value.cumn!;
      this.user[0].newsletter  = this.formUpdate.value.newsletter;
      // const newsletter = this.formUpdate.value.newsletter ? 1 : 0; This for a 1/0 return
      this.loading = true;

      // console.log(this.form);
      this.authService.update(this.user[0].name, this.user[0].email, this.user[0].phone_number, this.user[0].cumn, this.user[0].newsletter,).subscribe(
        result => {
          // console.log(data);
          this.loading = false;
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.enter = 1;
          this.toastr.success('Your information has been updated successfully!', 'Profile updated', {positionClass: 'toast-bottom-right', timeOut:2000});
          setTimeout(() => {
            this.router.navigate(['/profile']);
          }, 50);
        },
        error => {
          this.isSignUpFailed = true;
          this.loading = false;
          this.enter = 0;
          this.errorMessage = '';
          if(error instanceof ErrorEvent){
            this.errorMessage = error.error.message;
          }else{
            this.errorMessage = "Error status: " + error.status;
          }
        }
      );
    }else{
      this.toastr.error("The form did not validated correctly", 'ERROR UPDATING PROFILE', {positionClass: 'toast-bottom-right'});
    }
  }
}
