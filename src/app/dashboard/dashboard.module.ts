import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ChartModule } from '../chart/chart.module';



@NgModule({
  declarations: [HomeComponent,],
  imports: [
    CommonModule,
    ChartModule,

  ]
})
export class DashboardModule { }
