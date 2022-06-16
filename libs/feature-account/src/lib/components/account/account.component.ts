import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../../models/account';
import { JISAAccount, ISAAccount } from '../../models/account';

@Component({
  selector: 'advice-demo-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  @Input() data!: Account;
  account!: JISAAccount | ISAAccount

  ngOnInit() {
    this.data.accountType = 'JISA';
    if (this.data.accountType === 'JISA') {
      this.account = new JISAAccount(this.data.name, this.data.balance, this.data.accountType, true);
    }
    else {
      this.account = new ISAAccount(this.data.name, this.data.balance, this.data.accountType, false);
    }
    this.account.create()
  }
}
