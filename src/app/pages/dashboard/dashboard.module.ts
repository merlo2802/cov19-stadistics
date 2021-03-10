import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { ComponentsModule } from './../../components/components.module';
import { Ng2OdometerModule } from 'ng2-odometer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	ComponentsModule,
    IonicModule,
    DashboardPageRoutingModule,
	Ng2OdometerModule.forRoot()
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
