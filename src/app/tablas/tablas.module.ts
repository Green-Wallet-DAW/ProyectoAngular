import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { CommunityComponent } from './community/community.component';



@NgModule({
  declarations: [
    UserComponent,
    CommunityComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserComponent,
    CommunityComponent
  ]
})
export class TablasModule { }
