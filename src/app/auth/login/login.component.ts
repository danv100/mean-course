import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoading: boolean = false;

  constructor(public authService: AuthService) {};

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    };
    this.authService.login(form.value.email, form.value.password);
  };
}
