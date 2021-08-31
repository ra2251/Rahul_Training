import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './home/home.component';
import { CommonComponent } from './common/common.component';
import { LayoutModule } from '../layout/layout.module';
import { Home2Component } from './home2/home2.component';
import { AdminModule } from '../Admin/admin.module';
import { UserModule } from '../User/user.module';


@NgModule({
  declarations: [
    HomeComponent,
    CommonComponent,
    Home2Component
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    LayoutModule,
    AdminModule,
    UserModule
  ]
})
export class SharedModule { }
