import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'naresh' && this.password === 'naresh@123') {
      this.router.navigate(['/home']);
    } else {
      this.message = 'Invalid credentials. Please try again.';
    }
  }

}
