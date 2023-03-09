import { Component, OnInit } from '@angular/core';
import { AddmachineServiceService } from './addmachine-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

import {NgForm} from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { count } from 'rxjs';




@Component({
  selector: 'app-addmachine',
  templateUrl: './addmachine.component.html',
  styleUrls: ['./addmachine.component.css']
})


export class AddmachineComponent implements OnInit {
  router: any;

  constructor(private _gvc: AddmachineServiceService, private toastr: ToastrService, private token: TokenStorageService) {}

  errorMessage = '';
  isSuccessful = false;
  valid = false;
  caja: any;
  currentUser: any;
  id:number;
  id_instalation:any;

  form = new FormGroup({
    modelo: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    facility: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    fabricante: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    components: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),

  });

  onSubmit(): void {

    if(this.form.valid){
        this.valid = true;
        console.log(this.caja);

        let index = this.caja.findIndex(x => x.facility_name == this.form.value.facility);
        this.id_instalation = this.caja[index]["id"];


        console.log("Model: "+this.form.value.modelo);
        console.log("Components: "+this.form.value.components);
        console.log("Fabricante: "+this.form.value.fabricante);
        console.log("id_instalation: "+this.id_instalation);


        this._gvc.addmachine(this.form.value.modelo!,this.form.value.components!, this.form.value.fabricante!,this.id_instalation).subscribe(
          data => {
            this.toastr.success('Your machine has been added successfully!', 'Machine created', {positionClass: 'toast-bottom-center', timeOut: 5000});

          },
          error => {
            if(error instanceof ErrorEvent){
              this.errorMessage = error.error.message;
            }
          }
        );

      }else{
        this.toastr.error("The form did not validated correctly", 'ERROR CREATING MACHINE', {positionClass: 'toast-bottom-right', timeOut:5000});
      }
    }


    showfacilities(id:any){

      this._gvc.showfacilities(id)

      .subscribe(
        result => {
          this.caja = result

        },
        err => {
          this.caja = JSON.parse(err.error).message;
        }
        );
    }
    ngOnInit(): void {
      this.currentUser = this.token.getUser();
      console.log(typeof (this.id= this.currentUser.success.id));
      this.showfacilities(this.id);
    }
}
