import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglecountryPage } from './singlecountry.page';

const routes: Routes = [
  {
    path: '',
    component: SinglecountryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglecountryPageRoutingModule {}
