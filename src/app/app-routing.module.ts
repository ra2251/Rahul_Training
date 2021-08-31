import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Core/login/login.component';


const routes: Routes = [
  { 
    path: 'login', 
    component:LoginComponent
  },
  { 
    path: '', 
    loadChildren: () => import('./Shared/shared.module').then(m =>m.SharedModule ) 
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
