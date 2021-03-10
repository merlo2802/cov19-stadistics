import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsdetailsPageRoutingModule } from './newsdetails-routing.module';

import { NewsdetailsPage } from './newsdetails.page';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	ComponentsModule,
    IonicModule,
    NewsdetailsPageRoutingModule
  ],
  declarations: [NewsdetailsPage]
})
export class NewsdetailsPageModule {}
