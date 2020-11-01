import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() newUserData = new EventEmitter<any>();
  @Output() cancelRegister = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  register(registerForm: NgForm): void {
    this.newUserData.emit(registerForm.value);
  }

  cancel(): void {
    this.cancelRegister.emit();
  }
}
