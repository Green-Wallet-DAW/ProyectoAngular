import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { GeneralviewServiceService } from 'src/app/facility/generalview/generalview-service.service';

@Component({
  selector: 'app-chartcomponent',
  templateUrl: './chartcomponent.component.html',
  styleUrls: ['./chartcomponent.component.css']
})
export class ChartcomponentComponent {

  info_energy:any;
  info_carbon:any;
  currentUser:any;
  id:number;

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Carbon Saved', 'Energy Produced'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [

      { data: [ 500, 450] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private _gvns: GeneralviewServiceService, private token : TokenStorageService){

  }
  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
