import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeoplesAdminRoutingModule } from './peoples-admin-routing.module';
import { ChallanComponent } from './challan/challan.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatCard, MatCardModule, MatOptionModule, MatSelectModule, matMenuAnimations } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TrafficupComponent } from './trafficup/trafficup.component'; 
import {MatInputModule} from '@angular/material/input';
import { AccidentsComponent } from './accidents/accidents.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PeoplesAdminComponent } from './peoples-admin.component';


@NgModule({
  declarations: [TrafficupComponent, AccidentsComponent, ComplaintsComponent, ContactusComponent,PeoplesAdminComponent],
  imports: [
    CommonModule,
    PeoplesAdminRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
  ]
})
export class PeoplesAdminModule { }
