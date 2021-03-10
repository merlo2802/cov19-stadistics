import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomPageRoutingModule } from './symptom-routing.module';

import { SymptomPage } from './symptom.page';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	ComponentsModule,
    IonicModule,
    SymptomPageRoutingModule
  ],
  declarations: [SymptomPage]
})
export class SymptomPageModule {}
