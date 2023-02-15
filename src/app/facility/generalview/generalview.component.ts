import { Component, OnInit } from '@angular/core';
import  { GeneralviewServiceService } from './generalview-service.service';

@Component({
  selector: 'app-generalview',
  templateUrl: './generalview.component.html',
  styleUrls: ['./generalview.component.css']
})
export class GeneralviewComponent implements OnInit{
  caja: any;
  i:any;
  public loading: boolean = false;

  constructor(private _gvc: GeneralviewServiceService) {}

  showGeneral(){
    this.loading=true;
    this._gvc.generalView()
    .subscribe(
      result => {
        this.caja = result
        this.loading=false;
      },
      err => {
        this.caja = JSON.parse(err.error).message;
      }
      );
  }

  showDaily(){
    this.loading = true;
    this._gvc.dailyView()
    .subscribe(
      result => {
        this.caja = result
        this.loading=false;
      },
      err => {
        this.caja = JSON.parse(err.error).message;
      }
      );
  }
  showWeekly(){
    this.loading = true;
    this._gvc.weeklyView()
    .subscribe(
      result => {
        this.caja = result
        this.loading=false;
      },
      err => {
        this.caja = JSON.parse(err.error).message;
      }
      );
  }
  showMontly(){
    this.loading = true;
    this._gvc.monthView()
    .subscribe(
      result => {
        this.caja = result
        this.loading=false;
      },
      err => {
        this.caja = JSON.parse(err.error).message;
      }
      );
  }
  showYearly(){
    this.loading = true;
    this._gvc.yearView()
    .subscribe(
      result => {
        this.caja = result
        this.loading=false;
      },
      err => {
        this.caja = JSON.parse(err.error).message;
      }
      );
  }


  showValues(i){

    switch(i){
      case 0:
        this.showGeneral();
      break;
      case 1:
        this.showDaily();
      break;
      case 2:
        this.showWeekly();
      break;
      case 3:
        this.showMontly();
      break;
      case 4:
        this.showYearly();
      break;
      default:
        this.showGeneral();
    }
  }

  ngOnInit(): void {
    this.showValues(this.i);
  }

}
