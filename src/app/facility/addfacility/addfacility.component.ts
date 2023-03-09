import { Component, OnInit } from '@angular/core';
import { AddfacilityServiceService } from './addfacility-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

import {NgForm} from '@angular/forms';
import { FormsModule }   from '@angular/forms';
declare var $: any;



@Component({
  selector: 'app-addfacility',
  templateUrl: './addfacility.component.html',
  styleUrls: ['./addfacility.component.css']
})


export class AddfacilityComponent {
  router: any;

  constructor(private _gvc: AddfacilityServiceService, private toastr: ToastrService, private token: TokenStorageService) {}

  errorMessage = '';
  isSuccessful = false;
  valid = false;
  currentUser: any;
  id_user:number;

  form = new FormGroup({
    number_machine: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    facility_name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    street_name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    contract_number: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),

});

onSubmit(): void {
  if(this.form.valid){
      this.valid = true;

      this.currentUser = this.token.getUser();
      console.log(typeof (this.id_user= this.currentUser.success.id));

      console.log("id_user: "+ (this.id_user= this.currentUser.success.id));
      console.log("number_machine: "+this.form.value.number_machine);
      console.log("facility_name: "+this.form.value.facility_name);
      console.log("street_name: "+this.form.value.street_name);
      console.log("Cnumber: "+this.form.value.contract_number);

      this._gvc.addfacility(this.id_user, this.form.value.number_machine, this.form.value.facility_name, this.form.value.street_name, this.form.value.contract_number).subscribe(
        data => {
          this.toastr.success('Your facility has been created successfully!', 'Facility created', {positionClass: 'toast-bottom-center', timeOut: 5000});



        },
        error => {
          if(error instanceof ErrorEvent){
            this.errorMessage = error.error.message;
          }
        }
      );
    }else{
      this.toastr.error("The form did not validated correctly", 'ERROR CREATING FACILITY', {positionClass: 'toast-bottom-right', timeOut:5000});
    }
  }
}
