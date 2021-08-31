import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { SharedRoutingModule } from '../Shared/shared-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { Page1Component } from './page1/page1.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    ContentDetailComponent,
    Page1Component,
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    LayoutModule,
    RouterModule,
    UserRoutingModule
  ]
})
export class UserModule { }
