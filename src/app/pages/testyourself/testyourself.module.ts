import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestyourselfPageRoutingModule } from './testyourself-routing.module';

import { TestyourselfPage } from './testyourself.page';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	ComponentsModule,
    IonicModule,
    TestyourselfPageRoutingModule
  ],
  declarations: [TestyourselfPage]
})
export class TestyourselfPageModule {}
