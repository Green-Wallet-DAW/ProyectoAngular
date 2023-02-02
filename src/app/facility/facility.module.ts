import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralviewComponent } from './generalview/generalview.component';


@NgModule({
  declarations: [
    GeneralviewComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GeneralviewComponent
  ],
})
export class FacilityModule { }
