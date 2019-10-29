import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclenumberComponent } from './vehiclenumber/vehiclenumber.component';
import { LicensenumberComponent } from './licensenumber/licensenumber.component';
import { PenalitypointsComponent } from './penalitypoints/penalitypoints.component';


const routes: Routes = [
  // {path: '', redirectTo:'vn',pathMatch:'full'},
  {path:'vn',component:VehiclenumberComponent},
  {path:'ln',component:LicensenumberComponent},
  {path:'pp',component:PenalitypointsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallanchildRoutingModule { }
