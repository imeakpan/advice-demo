import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../models/account';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<any> {
    // const apiUrl = '';
    // return this.http.get<Account[]>(`${apiUrl}/accounts`)
    return of([])
    // return of([
    //   {
    //     name: 'Carrie Scott',
    //     balance: 5.00,
    //     id: 1,
    //     accountType: 'JISA"
    //   },
    //   {
    //     name: 'Rebecca Scott',
    //     balance: 2.00,
    //     id: 2,
    //     accountType: 'ISA"
    //   }
    // ])

  }

  getAccount(): Observable<Account[]> {
    const apiUrl = '';
    return this.http.get<Account[]>(`${apiUrl}/accounts`)
  }

}
