import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecommunityComponent } from './communities/createcommunity/createcommunity.component';
import { GlobalcommunityComponent } from './communities/globalcommunity/globalcommunity.component';
import { JoincommunityComponent } from './communities/joincommunity/joincommunity.component';
import { YourcommunitiesComponent } from './communities/yourcommunities/yourcommunities.component';
import { GeneralviewComponent } from './facility/generalview/generalview.component';
import { MostrarServiciosComponent } from './tienda-tokens/mostrar-servicios/mostrar-servicios.component';
import { ShowCommunityServicesComponent } from './tienda-tokens/show-community-services/show-community-services.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { ServiceGuardGuard } from './service-guard.guard';


const routes: Routes = [
  {path: 'generalview' ,component: GeneralviewComponent},
  {path: 'userServices', component:MostrarServiciosComponent},
  {path: 'communityServices', component:ShowCommunityServicesComponent, canActivate:[ServiceGuardGuard]},

  {path: 'globalCommunities' ,component: GlobalcommunityComponent},
  {path: 'yourCommunity' ,component: YourcommunitiesComponent},
  {path: 'createCommunity' ,component: CreatecommunityComponent},
  {path: 'joinCommunity' ,component: JoincommunityComponent},

  {path: 'serviciosUsuario', component:MostrarServiciosComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/edit', component: EditComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
