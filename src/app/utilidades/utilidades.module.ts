import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './utilidades/navbar/navbar.component';
import { AsideComponent } from './utilidades/aside/aside.component';
import { FooterComponent } from './utilidades/footer/footer.component';
import { PopupsComponent } from './utilidades/popups/popups.component';
import { CajasDesplegablesComponent } from './utilidades/cajas-desplegables/cajas-desplegables.component';
import { BuscadoresComponent } from './utilidades/buscadores/buscadores.component';



@NgModule({
  declarations: [
    NavbarComponent,
    AsideComponent,
    FooterComponent,
    PopupsComponent,
    CajasDesplegablesComponent,
    BuscadoresComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UtilidadesModule { }
