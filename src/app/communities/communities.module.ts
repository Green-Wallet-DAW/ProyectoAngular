import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourcommunitiesComponent } from './yourcommunities/yourcommunities.component';
import { GlobalcommunityComponent } from './globalcommunity/globalcommunity.component';
import { JoincommunityComponent } from './joincommunity/joincommunity.component';
import { CreatecommunityComponent } from './createcommunity/createcommunity.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';



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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ToastrModule.forRoot(),
    DataTablesModule,
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


