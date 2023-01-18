import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarServiciosComponent } from './tienda-tokens/mostrar-servicios/mostrar-servicios.component';
import { UtilidadesModule } from './utilidades/utilidades.module';

@NgModule({
  declarations: [
    AppComponent,
    MostrarServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilidadesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
