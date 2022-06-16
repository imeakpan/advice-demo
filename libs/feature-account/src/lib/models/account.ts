export type AccountType = 'ISA' | 'JISA' | 'GIA' | 'SIIP';

export interface Account {
  id?: number;
  name: string;
  balance: number;
  accountType: AccountType;
}

export abstract class BaseAccount implements Account {
  id?: number;
  name: string;
  balance: number;
  accountType: AccountType;
  canDelete: boolean;

  constructor(name: string, balance:number, accountType:AccountType, canDelete:boolean) {
    this.name = name;
    this.balance = balance;
    this.accountType = accountType;
    this.canDelete = canDelete
  }

  public abstract create(): any;

}

export class ISAAccount extends BaseAccount {
  create() {
    console.log('I am an ISA Account');
  }
}

export class JISAAccount extends BaseAccount {

  create() {
    console.log( 'I am a JISA Account')
  }

}
