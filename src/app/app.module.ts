import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilidadesModule } from './utilidades/utilidades.module';
import { GeneralviewComponent } from './facility/generalview/generalview.component';
import { FacilityModule } from './facility/facility.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilidadesModule,
    FacilityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
