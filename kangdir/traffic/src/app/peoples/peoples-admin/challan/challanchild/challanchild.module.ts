import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallanchildRoutingModule } from './challanchild-routing.module';
import { VehiclenumberComponent } from './vehiclenumber/vehiclenumber.component';
import { ChallanchildComponent } from './challanchild.component';
import { MatToolbarModule } from '@angular/material';
import { LicensenumberComponent } from './licensenumber/licensenumber.component';
import { PenalitypointsComponent } from './penalitypoints/penalitypoints.component';
import { ChallanComponent } from '../challan.component';


@NgModule({
  declarations: [ChallanchildComponent,VehiclenumberComponent, LicensenumberComponent, PenalitypointsComponent],
  imports: [
    CommonModule,
    ChallanchildRoutingModule,
    MatToolbarModule,
  ]
})
export class ChallanchildModule { }
