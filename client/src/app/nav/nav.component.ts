import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login(formValue: NgForm): void {
    this.accountService.login(formValue.value).subscribe(
      () => {
        formValue.resetForm();
        this.router.navigateByUrl('/members');
      },
      (error) => {
        console.log(error);
        this.toastr.error(error.error);
      }
    );
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
