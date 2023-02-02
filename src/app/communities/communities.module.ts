import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourcommunitiesComponent } from './yourcommunities/yourcommunities.component';
import { GlobalcommunityComponent } from './globalcommunity/globalcommunity.component';
import { JoincommunityComponent } from './joincommunity/joincommunity.component';
import { CreatecommunityComponent } from './createcommunity/createcommunity.component';


import { AppRoutingModule } from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    YourcommunitiesComponent,
    GlobalcommunityComponent,
    JoincommunityComponent,
    CreatecommunityComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    YourcommunitiesComponent,
    GlobalcommunityComponent,
    JoincommunityComponent,
    CreatecommunityComponent,

  ]
})
export class CommunitiesModule { }
// https://www.bezkoder.com/angular-13-firebase-crud/#Create_Data_Service
// https://medium.com/@andydev404/enviando-e-mail-desde-angular-con-node-js-e9c2db57af57


