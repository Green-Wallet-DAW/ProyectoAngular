import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MostrarServiciosComponent } from './tienda-tokens/mostrar-servicios/mostrar-servicios.component';
import { UtilidadesModule } from './utilidades/utilidades.module';
import { FacilityModule } from './facility/facility.module';import { TablasModule } from "./tablas/tablas.module";
import { TiendaTokensModule } from './tienda-tokens/tienda-tokens.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        UtilidadesModule,
        TablasModule,
        FacilityModule,
        TiendaTokensModule,
    ]
})
export class AppModule { }
