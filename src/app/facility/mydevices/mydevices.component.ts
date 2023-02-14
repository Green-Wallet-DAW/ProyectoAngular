import { Component , OnInit} from '@angular/core';
import { MydevicesService } from './mydevices.service';

@Component({
  selector: 'app-mydevices',
  templateUrl: './mydevices.component.html',
  styleUrls: ['./mydevices.component.css']
})
export class MydevicesComponent implements OnInit {
  caja: any;

  constructor(private _mvc: MydevicesService) {}


  showGeneral(){
    this._mvc.generalView()
    .subscribe(
      result => {
        this.caja = result
        console.log(this.caja[0].maquinas);

      },
      err => {
        this.caja = JSON.parse(err.error).message;

      }
      );
  }
  showDaily(){
    this._mvc.dailyView()
    .subscribe(
      result => {
        this.caja = result
        console.log(this.caja[0].maquinas);

      },
      err => {
        this.caja = JSON.parse(err.error).message;

      }
      );
  }
  showWeekly(){
    this._mvc.weeklyView()
    .subscribe(
      result => {
        this.caja = result
        console.log(this.caja[0].maquinas);

      },
      err => {
        this.caja = JSON.parse(err.error).message;

      }
      );
  }
  showMontly(){
    this._mvc.montlyView()
    .subscribe(
      result => {
        this.caja = result
        console.log(this.caja[0].maquinas);

      },
      err => {
        this.caja = JSON.parse(err.error).message;

      }
      );
  }
  showYearly(){
    this._mvc.yearlyView()
    .subscribe(
      result => {
        this.caja = result
        console.log(this.caja[0].maquinas);

      },
      err => {
        this.caja = JSON.parse(err.error).message;

      }
      );
  }
  ngOnInit(): void {
    this.showMontly();
  }

}
