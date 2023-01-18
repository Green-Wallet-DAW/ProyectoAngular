import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarServiciosComponent } from './tienda-tokens/mostrar-servicios/mostrar-servicios.component';

const routes: Routes = [
  {path: 'mostrarServicios', component: MostrarServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
