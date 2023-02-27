import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneralviewComponent } from './facility/generalview/generalview.component';
import { MydevicesComponent } from './facility/mydevices/mydevices.component';
import { AddfacilityComponent } from './facility/addfacility/addfacility.component';
import { AddmachineComponent } from './facility/addmachine/addmachine.component';
import { MostrarServiciosComponent } from './tienda-tokens/mostrar-servicios/mostrar-servicios.component';
import { ShowCommunityServicesComponent } from './tienda-tokens/show-community-services/show-community-services.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { ServiceGuardGuard } from './service-guard.guard';

import { CreatecommunityComponent } from './communities/createcommunity/createcommunity.component';
import { GlobalcommunityComponent } from './communities/globalcommunity/globalcommunity.component';
import { JoincommunityComponent } from './communities/joincommunity/joincommunity.component';
import { YourcommunitiesComponent } from './communities/yourcommunities/yourcommunities.component';
import { HomeComponent } from './dashboard/home/home.component';

const routes: Routes = [

  {path: 'generalview' ,component: GeneralviewComponent},
  {path: 'mydevices', component: MydevicesComponent},
  {path: 'addfacility', component: AddfacilityComponent},
  {path: 'addmachines', component: AddmachineComponent},
  {path: 'userServices', component:MostrarServiciosComponent},
  {path: 'communityServices', component:ShowCommunityServicesComponent, canActivate:[ServiceGuardGuard]},
  {path: 'globalCommunities' ,component: GlobalcommunityComponent},
  {path: 'yourCommunity' ,component: YourcommunitiesComponent},
  {path: 'createCommunity' ,component: CreatecommunityComponent},
  {path: 'joinCommunity' ,component: JoincommunityComponent},
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
