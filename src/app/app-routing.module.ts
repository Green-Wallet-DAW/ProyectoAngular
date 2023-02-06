import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralviewComponent } from './facility/generalview/generalview.component';
import { MostrarServiciosComponent } from './tienda-tokens/mostrar-servicios/mostrar-servicios.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
<<<<<<< HEAD
  {path: 'generalview' ,component: GeneralviewComponent},
  {path: 'serviciosUsuario', component:MostrarServiciosComponent},
  
=======
  {path: 'generalview' ,
  component: GeneralviewComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
>>>>>>> borja
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
