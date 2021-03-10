import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglecountryPageRoutingModule } from './singlecountry-routing.module';

import { SinglecountryPage } from './singlecountry.page';
import { ComponentsModule } from './../../components/components.module';
import { Ng2OdometerModule } from 'ng2-odometer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	ComponentsModule,
    IonicModule,
    SinglecountryPageRoutingModule,
	Ng2OdometerModule.forRoot()
  ],
  declarations: [SinglecountryPage]
})
export class SinglecountryPageModule {}
