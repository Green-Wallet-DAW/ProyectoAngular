import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { PopupsComponent } from './popups/popups.component';
import { CajasDesplegablesComponent } from './cajas-desplegables/cajas-desplegables.component';
import { BuscadoresComponent } from './buscadores/buscadores.component';
import { RouterModule } from '@angular/router';
// import { ButtonComponent } from './botones/button/button.component';


@NgModule({
  declarations: [
    NavbarComponent,
    AsideComponent,
    FooterComponent,
    PopupsComponent,
    CajasDesplegablesComponent,
    BuscadoresComponent,
    // ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,


  ],
  exports: [
    NavbarComponent,
    AsideComponent,
    FooterComponent,
    PopupsComponent,
    CajasDesplegablesComponent,
    BuscadoresComponent,
    // ButtonComponent
  ]
})
export class UtilidadesModule { }
