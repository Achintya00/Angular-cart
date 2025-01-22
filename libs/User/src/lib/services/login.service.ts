import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);
  loginflag = new BehaviorSubject<boolean>(false);

  loginFlagObservable = this.loginflag.asObservable();
  // isLoggedIn = false;
  Login(username: string, password: string) {
    return this.http.post<string>('https://fakestoreapi.com/auth/login', {
      username,
      password,
    });
  }
}
