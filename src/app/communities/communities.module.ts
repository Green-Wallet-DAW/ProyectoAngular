import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourcommunitiesComponent } from './yourcommunities/yourcommunities.component';
import { GlobalcommunityComponent } from './globalcommunity/globalcommunity.component';
import { JoincommunityComponent } from './joincommunity/joincommunity.component';
import { CreatecommunityComponent } from './createcommunity/createcommunity.component';

import { DonatecommunityComponent } from './donatecommunity/donatecommunity.component';

import { AppRoutingModule } from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    YourcommunitiesComponent,
    GlobalcommunityComponent,
    JoincommunityComponent,
    CreatecommunityComponent,

    DonatecommunityComponent,

   
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

    DonatecommunityComponent,

    
  ]
})
export class CommunitiesModule { }
