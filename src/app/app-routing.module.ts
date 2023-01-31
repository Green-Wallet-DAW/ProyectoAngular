import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecommunityComponent } from './communities/createcommunity/createcommunity.component';
import { GlobalcommunityComponent } from './communities/globalcommunity/globalcommunity.component';
import { JoincommunityComponent } from './communities/joincommunity/joincommunity.component';
import { YourcommunitiesComponent } from './communities/yourcommunities/yourcommunities.component';
import { GeneralviewComponent } from './facility/generalview/generalview.component';

const routes: Routes = [
  {path: 'generalview' ,component: GeneralviewComponent},
  {path: 'globalCommunities' ,component: GlobalcommunityComponent},
  {path: 'yourCommunity' ,component: YourcommunitiesComponent},
  {path: 'createCommunity' ,component: CreatecommunityComponent},
  {path: 'joinCommunity' ,component: JoincommunityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
