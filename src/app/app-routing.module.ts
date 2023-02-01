import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralviewComponent } from './facility/generalview/generalview.component';
import { MostrarServiciosComponent } from './tienda-tokens/mostrar-servicios/mostrar-servicios.component';

const routes: Routes = [
  {path: 'generalview' ,component: GeneralviewComponent},
  {path: 'mostrar-servicios', component: MostrarServiciosComponent},

  // {path: '*'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
