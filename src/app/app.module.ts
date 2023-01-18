import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilidadesModule } from './utilidades/utilidades.module';
import { GeneralviewComponent } from './facility/generalview/generalview.component';
import { FacilityModule } from './facility/facility.module';import { TablasModule } from "./tablas/tablas.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UtilidadesModule,
        TablasModule
    ]
})
export class AppModule { }
