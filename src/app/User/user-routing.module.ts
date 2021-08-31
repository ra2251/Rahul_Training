import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { Page1Component } from './page1/page1.component';


const routes: Routes = [
  {
    path: '',
    component: ContentDetailComponent,
    children: [      
      {
        path: 'page1',
        component: Page1Component,
      },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
