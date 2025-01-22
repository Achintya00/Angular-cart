import { LoginService } from '../services/login.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  search = new FormControl();
  loginService = inject(LoginService);
  router = inject(Router);
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  Login() {
    this.loginService
      .Login(
        this.loginForm.get('username')?.value as string,
        this.loginForm.get('password')?.value as string
      )
      .subscribe((token) => console.log(token));
    this.loginService.loginflag.next(true);
    this.router.navigateByUrl('/products');
  }
  // constructor(){

  // }
}
