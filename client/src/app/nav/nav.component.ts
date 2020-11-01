import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(public accountService: AccountService) {}

  ngOnInit(): void {}

  login(formValue: NgForm): void {
    this.accountService.login(formValue.value).subscribe((response) => {
      formValue.resetForm();
    });
  }

  logout(): void {
    this.accountService.logout();
  }
}
