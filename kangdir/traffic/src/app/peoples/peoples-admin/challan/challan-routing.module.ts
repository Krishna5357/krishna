import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallanComponent } from './challan.component';


const routes: Routes = [
  {
    path:'',component:ChallanComponent,
    children:[
      {path:'',loadChildren:'./challanchild/challanchild.module#ChallanchildModule'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallanRoutingModule { }
