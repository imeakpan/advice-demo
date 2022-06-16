import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Observable } from 'rxjs';
import { Account } from '../../models/account';

@Component({
  selector: 'advice-demo-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  accounts$!: Observable<Account[]>;

  ngOnInit(): void {
    this.accounts$ = this.getAccounts();
  }

  getAccounts(): Observable<Account[]> {
    return this.accountService.getAccounts();
  }
}
