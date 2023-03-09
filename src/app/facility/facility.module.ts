import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralviewComponent } from './generalview/generalview.component';
import {HttpClientModule} from '@angular/common/http';
import { MydevicesComponent } from './mydevices/mydevices.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AddfacilityComponent } from './addfacility/addfacility.component';
import { RouterModule } from '@angular/router';
import { AddmachineComponent } from './addmachine/addmachine.component';
import { ChartModule } from '../chart/chart.module';
import { NgChartsModule } from 'ng2-charts';
import { GeneralviewChartComponent } from './generalview-chart/generalview-chart.component';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    GeneralviewComponent,
    MydevicesComponent,
    AddfacilityComponent,
    AddmachineComponent,
    GeneralviewChartComponent,




  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ChartModule,
    NgChartsModule,
    BrowserModule,

  ],
  exports: [
    GeneralviewComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FacilityModule { }
