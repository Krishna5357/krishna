import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PythonComponent} from './python/python.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ChartComponent } from './chart/chart.component';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent},
  { path: 'coffee', component: CoffeeComponent},
  { path: 'registration', component: RegistrationFormComponent},
  { path: 'python', component: PythonComponent},
  { path: 'bootstrap', component: BootstrapComponent},
  { path: 'chart', component: ChartComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }