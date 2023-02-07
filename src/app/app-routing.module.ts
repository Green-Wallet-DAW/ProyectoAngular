import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralviewComponent } from './facility/generalview/generalview.component';
import { MostrarServiciosComponent } from './tienda-tokens/mostrar-servicios/mostrar-servicios.component';
import { ShowCommunityServicesComponent } from './tienda-tokens/show-community-services/show-community-services.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'generalview' ,component: GeneralviewComponent},
  {path: 'userServices', component:MostrarServiciosComponent},
  {path: 'communityServices', component:ShowCommunityServicesComponent},
  {path: 'hireService/:user_id/:serv_id', component:MostrarServiciosComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
