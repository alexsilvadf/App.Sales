import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    email: this.fb.control<string | null>(null),
    password: this.fb.control<string | null>(null),
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {}

  login() {
    if (true) {
      console.log('email' + this.form.controls.email.value);
      console.log('senha' + this.form.controls.password.value);
    }
  }  
}
