import { ThisReceiver } from '@angular/compiler';

import { Component, OnInit } from '@angular/core';
import { Facility } from './facility';
import { AddfacilityServiceService } from './addfacility-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-addfacility',
  templateUrl: './addfacility.component.html',
  styleUrls: ['./addfacility.component.css']
})


export class AddfacilityComponent implements OnInit {
  router: any;

  constructor(private _gvc: AddfacilityServiceService) {}

  nombre: FormControl = new FormControl('');
  edicion: FormControl = new FormControl('');
  facility = [];

  addfacility():void{
    this._gvc.addfacility('asd')

    .subscribe(
      result => {

        this.facility = result

      },
      err => {
        this.facility = JSON.parse(err.error).message;
      }
      );
      this.router.navigate(['/generalview']);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
