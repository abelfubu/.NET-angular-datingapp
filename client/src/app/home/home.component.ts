import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  registerUser(user): void {
    this.accountService.register(user).subscribe(
      () => this.registerToggle(),
      (error) => console.log(error)
    );
  }

  registerToggle(): void {
    this.registerMode = !this.registerMode;
  }
}
