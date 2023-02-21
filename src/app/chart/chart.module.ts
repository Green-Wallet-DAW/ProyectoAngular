import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartcomponentComponent } from './chartcomponent/chartcomponent.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    ChartcomponentComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports:[
    ChartcomponentComponent
  ]
})
export class ChartModule { }
