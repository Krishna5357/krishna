import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallanRoutingModule } from './challan-routing.module';
import { ChallanchildComponent } from './challanchild/challanchild.component';
import { ChallanComponent } from './challan.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [ChallanComponent],
  imports: [
    CommonModule,
    ChallanRoutingModule,
    MatToolbarModule,
    MatButtonModule,
  ]
})
export class ChallanModule { }
