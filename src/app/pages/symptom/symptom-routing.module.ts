import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomPage } from './symptom.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomPageRoutingModule {}
