import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './services/login.service';

export const authGuard: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  let loggedIn = false;
  loginService.loginFlagObservable.subscribe((data) => {
    loggedIn = data;
  });
  if (loggedIn) {
    return true;
  } else {
    return router.navigateByUrl('/login');
  }
};
