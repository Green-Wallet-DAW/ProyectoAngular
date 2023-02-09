import { Component, OnInit } from '@angular/core';
import  { GeneralviewServiceService } from './generalview-service.service';

@Component({
  selector: 'app-generalview',
  templateUrl: './generalview.component.html',
  styleUrls: ['./generalview.component.css']
})
export class GeneralviewComponent implements OnInit{
  caja: any;

  constructor(private _gvc: GeneralviewServiceService) {}

  generalView(){
    this._gvc.generalView()
    .subscribe(
      result => {
        this.caja = result
      },
      err => {
        this.caja = JSON.parse(err.error).message;
      }
      );
  }

  mostrarDiario(){
    this._gvc.dailyView()
    .subscribe(
      result => {
        this.caja = result
      },
      err => {
        this.caja = JSON.parse(err.error).message;
      }
      );
  }

  mostrarMes(){
    this._gvc.monthView()
    .subscribe(
      result => {
        this.caja = result
      },
      err => {
        this.caja = JSON.parse(err.error).message;
      }
      );
  }
  mostrarAnyo(){
    this._gvc.yearView()
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
    this.mostrarMes();
  }


}
