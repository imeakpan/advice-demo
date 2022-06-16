import { Component, OnInit } from '@angular/core';
import { JISAAccount, ISAAccount } from '../../models/account';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'advice-demo-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
})
export class AccountFormComponent implements OnInit {
  public form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      accountType: [null, [Validators.required]]
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }
    console.log('Form Submitted');
  }
}
