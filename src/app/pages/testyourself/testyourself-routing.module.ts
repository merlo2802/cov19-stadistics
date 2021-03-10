import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestyourselfPage } from './testyourself.page';

const routes: Routes = [
  {
    path: '',
    component: TestyourselfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestyourselfPageRoutingModule {}
