import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarServiciosComponent } from './mostrar-servicios/mostrar-servicios.component';
import { UtilidadesModule } from '../utilidades/utilidades.module';



@NgModule({
  declarations: [
    MostrarServiciosComponent
  ],
  imports: [
    CommonModule,
    UtilidadesModule
  ],
  exports: [
    MostrarServiciosComponent
  ]                                                                                                                    
})
export class TiendaTokensModule { }
