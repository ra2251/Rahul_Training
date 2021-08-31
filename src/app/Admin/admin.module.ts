import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '../layout/layout.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { RouterModule } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { SharedRoutingModule } from '../Shared/shared-routing.module';

@NgModule({
  declarations: [DashboardComponent, UserManagementComponent, ReportsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    RouterModule,
    SharedRoutingModule
  ]
})
export class AdminModule { }
