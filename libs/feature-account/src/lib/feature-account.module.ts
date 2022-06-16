import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsComponent } from './containers/accounts/accounts.component';
import { AccountComponent } from './components/account/account.component';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { FeatureAccountRoutingModule } from './feature-account.routing.module';

@NgModule({
  imports: [CommonModule, FeatureAccountRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [AccountsComponent, AccountComponent, AccountFormComponent],
  declarations: [AccountsComponent, AccountComponent, AccountFormComponent]
})
export class FeatureAccountModule {}
