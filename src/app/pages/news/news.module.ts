import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';
import { ComponentsModule } from './../../components/components.module';
import { OwlModule } from "ngx-owl-carousel";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	ComponentsModule,
	OwlModule,
    IonicModule,
    NewsPageRoutingModule
  ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
