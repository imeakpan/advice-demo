import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AccountsComponent } from '@advice-demo/feature-account';

const routes: Routes = [
  {
    path: '',
    component: AccountsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureAccountRoutingModule {
}
