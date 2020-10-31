import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(
      (data) => {
        this.users = data;
        console.log(this.users);
      },
      (error) => console.log(error)
    );
  }
}
