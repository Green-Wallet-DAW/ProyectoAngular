import { Component, OnInit } from '@angular/core';
import  { GeneralviewServiceService } from './generalview-service.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { GeneralviewChartComponent } from '../generalview-chart/generalview-chart.component';


@Component({
  selector: 'app-generalview',
  templateUrl: './generalview.component.html',
  styleUrls: ['./generalview.component.css']
})
export class GeneralviewComponent implements OnInit{
  caja: any;
  i:any;
  id:number;
  public loading: boolean = false;
  currentUser: any;

  public doughnutChartLabels: string[] = [ 'Carbon Saved', 'Energy Produced'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [

      { data: [ 500, 450] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  router: any;
  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }


  constructor(private _gvc: GeneralviewServiceService, private token: TokenStorageService, private toastr: ToastrService) {}

  showGeneral(id:number){
    this.loading=true;
    this._gvc.generalView(id)

    .subscribe(
      result => {
        console.log(result);
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
    this._gvc.dailyView(id)
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
    this._gvc.weeklyView(id)
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
    this._gvc.monthView(id)
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
    this._gvc.yearView(id)
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

  deletefacility(n:number){
    this.loading = true;
    this._gvc.deletefacility(n)
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
  showValues(i:number){

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
