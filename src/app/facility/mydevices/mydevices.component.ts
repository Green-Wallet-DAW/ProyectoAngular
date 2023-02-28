import { Component , OnInit} from '@angular/core';
import { MydevicesService } from './mydevices.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-mydevices',
  templateUrl: './mydevices.component.html',
  styleUrls: ['./mydevices.component.css']
})
export class MydevicesComponent implements OnInit {
  caja: any;
  i:any;
  id:number;
  public loading: boolean = false;
  currentUser: any;


  constructor(private _mvc: MydevicesService, private token: TokenStorageService) {}


  showGeneral(id:number){
    this.loading = true;
    this._mvc.generalView(id)
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
  showDaily(id:number){
    this.loading = true;
    this._mvc.dailyView(id)
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
  showWeekly(id:number){
    this.loading = true;
    this._mvc.weeklyView(id)
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
  showMontly(id:number){
    this.loading = true;
    this._mvc.montlyView(id)
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
  showYearly(id:number){
    this.loading = true;
    this._mvc.yearlyView(id)
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
  deletemachine(id:number){

    this._mvc.deletemachine(id)
    .subscribe(
      result => {
        this.reloadPage();

      },
      err => {
        this.caja = JSON.parse(err.error).message;
      }
    );
  }
  reloadPage() {
    window.location.reload();
  }
  showValues(i){

    switch(i){
      case 0:
        this.showGeneral(this.id);
      break;
      case 1:
        this.showDaily(this.id);
      break;
      case 2:
        this.showWeekly(this.id);
      break;
      case 3:
        this.showMontly(this.id);
      break;
      case 4:
        this.showYearly(this.id);
      break;
      default:
        this.showGeneral(this.id);
    }
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(typeof (this.id= this.currentUser.success.id));
    this.showValues(this.i);
  }

}
