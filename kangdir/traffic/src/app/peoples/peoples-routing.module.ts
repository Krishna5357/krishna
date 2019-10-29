import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeoplesComponent } from './peoples.component';


const routes: Routes = [
  {
    path:'',component:PeoplesComponent,
    children:[
      {path:'',loadChildren:'./peoples-admin/peoples-admin.module#PeoplesAdminModule'},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeoplesRoutingModule { }
