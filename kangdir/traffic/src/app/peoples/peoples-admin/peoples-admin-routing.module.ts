import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallanComponent } from './challan/challan.component';
import { TrafficupComponent } from './trafficup/trafficup.component';
import { AccidentsComponent } from './accidents/accidents.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  // {path: '', redirectTo:'',pathMatch:'full'},
  {path:'tf',component:TrafficupComponent},
  {path:'ac',component:AccidentsComponent},
  {path:'co',component:ComplaintsComponent},
  {path:'con',component:ContactusComponent},
  {path:'ch',loadChildren:'./challan/challan.module#ChallanModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeoplesAdminRoutingModule { }
