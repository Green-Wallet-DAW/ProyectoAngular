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

  mostrarTodo(){
    this._gvc.retornar()
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
    this.mostrarTodo();
  }
}
