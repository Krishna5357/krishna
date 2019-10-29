import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PeoplesComponent } from './peoples/peoples.component';
import { PoliceComponent } from './police/police.component';
import { LoginComponent } from './login/login.component';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';




const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},

  {path:'peoples',loadChildren:'./peoples/peoples.module#PeoplesModule'},
  {path: 'police',component:PoliceComponent},
  {path: 'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],


  exports: [RouterModule]
})
export class AppRoutingModule { }
