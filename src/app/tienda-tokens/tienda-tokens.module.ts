import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarServiciosComponent } from './mostrar-servicios/mostrar-servicios.component';
import { UtilidadesModule } from '../utilidades/utilidades.module';
import { TokenServicesService } from '../_services/token-services.service';
import { ShowCommunityServicesComponent } from './show-community-services/show-community-services.component'; 
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MostrarServiciosComponent,
    ShowCommunityServicesComponent
  ],
  imports: [
    CommonModule,
    UtilidadesModule,
    RouterModule,

  ],
  exports: [
    MostrarServiciosComponent
  ]                                                                                                                    
})
export class TiendaTokensModule { }
