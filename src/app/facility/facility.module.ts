import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralviewComponent } from './generalview/generalview.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    GeneralviewComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    GeneralviewComponent
  ],
})
export class FacilityModule { }
