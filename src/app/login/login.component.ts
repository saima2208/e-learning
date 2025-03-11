import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRegisterService } from '../services/login-register.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  pass: string = "";

  constructor(
    private loginRegisterService: LoginRegisterService
  ) {}

  onSubmit() {
    if (this.loginRegisterService.login(this.email,this.pass)) {
      alert('Login successful!');
      window.location.href="/admin";

    } else {
      alert('Login Failed! Try again...');
    }
  }

}
