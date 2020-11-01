import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  registerUser(user): void {
    this.accountService.register(user).subscribe(
      () => this.registerToggle(),
      (error) => {
        console.log(error);
        this.toastr.error(error.error);
      }
    );
  }

  registerToggle(): void {
    this.registerMode = !this.registerMode;
  }
}
