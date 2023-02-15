import { Component , OnInit} from '@angular/core';
import { MydevicesService } from './mydevices.service';

@Component({
  selector: 'app-mydevices',
  templateUrl: './mydevices.component.html',
  styleUrls: ['./mydevices.component.css']
})
export class MydevicesComponent implements OnInit {
  caja: any;
  public loading = false;
  constructor(private _mvc: MydevicesService) {}
  i:any;

  showGeneral(){
    this.loading = true;
    this._mvc.generalView()
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
    this._mvc.dailyView()
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
    this._mvc.weeklyView()
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
    this._mvc.montlyView()
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
    this._mvc.yearlyView()
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
