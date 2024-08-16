import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  activeForm = 'login';

  private readonly HARD_CODED_CREDENTIALS = {
    email: 'user@example.com',
    password: 'password123'
  };

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  toggleForm(form: string) {
    this.activeForm = form;
  }

  login() {
    const { email, password } = this.loginForm.value;
    if (email === this.HARD_CODED_CREDENTIALS.email && password === this.HARD_CODED_CREDENTIALS.password) {
      this.snackBar.open('Login successful!', 'Close', {
        duration: 3000,
      });
      this.router.navigate(['/budget-planner/dasbord']);
    } else {
      this.snackBar.open('Invalid credentials!', 'Close', {
        duration: 3000,
      });
    }
  }

  register() {
    this.snackBar.open('Registration successful', 'Close', {
      duration: 3000,
    });
    this.toggleForm('login');
  }
}