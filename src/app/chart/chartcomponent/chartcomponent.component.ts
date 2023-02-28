import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { GeneralviewServiceService } from 'src/app/facility/generalview/generalview-service.service';
import { TokenServicesService } from 'src/app/_services/token-services.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-chartcomponent',
  templateUrl: './chartcomponent.component.html',
  styleUrls: ['./chartcomponent.component.css']
})
export class ChartcomponentComponent  implements OnInit{

  loading = false;
  currentUser:any;
  id:number;

  constructor(private genService: GeneralviewServiceService, private token :  TokenStorageService) {}
  // Doughnut
  public doughnutChartLabels: string[] = [ 'Carbon Saved', 'Energy Produced'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 1,2] ,
      backgroundColor: ['#228B22','#FFBF00'], 
    },
      // { data: [ 50, 150, 120 ] },
      // { data: [ 250, 130, 70 ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

public getData(id:number){
  this.genService.generalView(id).subscribe(
    
    (result:any) =>{
      console.log(result)
      this.doughnutChartData.datasets[0].data[1]=result[0].carbono_ahorrado;
      this.doughnutChartData.datasets[0].data[0]=result[0].energia_producida; 
      this.loading = true;       
    },
    err =>{
      console.log("No data")
    }
  )

}

  ngOnInit(): void {
      this.currentUser = this.token.getUser();
      this.id= this.currentUser.success.id;
      console.log(this.currentUser.success.id);
      this.getData(this.id)
  }
}
