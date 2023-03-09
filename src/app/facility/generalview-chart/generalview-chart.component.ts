import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataset, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { GeneralviewServiceService } from '../generalview/generalview-service.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Chart } from 'chart.js/dist';


@Component({
  selector: 'app-generalview-chart',
  templateUrl: './generalview-chart.component.html',
  styleUrls: ['./generalview-chart.component.css']
})
export class GeneralviewChartComponent implements OnInit  {
  service: any;
  dataList: any;
  chart: any;
  carga:Boolean;
  constructor(private _gvc: GeneralviewServiceService, private token: TokenStorageService) {
    this.carga = false;
  }

  currentUser: any;
  id:number;

    caja = {"value1":100, "value2":200}

    public doughnutChartLabels: string[] = [ 'Carbon Saved', 'Energy Produced'];
    public doughnutChartValues: string[] = [];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [

        { data:[1,2] },
      ]
    };


    getMethod(){
      this.service.get().subscribe((res:any)=>{
        this.dataList = res.dataList
        this.chart.update()
      })
   }

   public doughnutChartType: ChartType = 'doughnut';
   //Graph value functions
   showGeneral(id:number){

    this._gvc.generalView(id)

    .subscribe((result:any) => {

        this.doughnutChartData.datasets[0].data[1]=result[0].carbono_ahorrado;
        this.doughnutChartData.datasets[0].data[0]=result[0].energia_producida;
        this.carga=true;
      }
    );
  }

  showDaily(id:number){

    this._gvc.dailyView(id)
    .subscribe((result:any) => {

      this.doughnutChartData.datasets[0].data[1]=result[0].carbono_ahorrado;
      this.doughnutChartData.datasets[0].data[0]=result[0].energia_producida;
      this.carga=true;

      },
      err => {
        this.caja = JSON.parse(err.error).message;
      }
      );
  }
  showValuesChart(i:number){

    switch(i){
      case 0:
        this.showGeneral(this.id);
      break;
      case 1:
        this.showDaily(this.id);
      break;
      default:
        this.showGeneral(this.id);
    }
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(typeof (this.id= this.currentUser.success.id));
    this.showValuesChart(0);

  }




}
