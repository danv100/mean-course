import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  isLoading: boolean = false;

  onSignup(form: NgForm) {
    console.log(form.value);
  }
}
