import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  constructor( private token: TokenService,
               private http: HttpClient,
               private router : Router
                ) {}

  changeAuthStatus(value: boolean): void {
    this.loggedIn.next(value);
  }

  logout(): void {
    // Perform any necessary cleanup or API calls
    this.changeAuthStatus(false); // Set the authentication status to false
    localStorage.removeItem('token'); // Remove the authentication token
  }




  sendResetPasswordLink(data:any) {
    return this.http.post('http://127.0.0.1:8000/api/sendPasswordResetEmail', data)
}

resetPassword(data:any) {
  return this.http.post('http://127.0.0.1:8000/api/reset-password', data)
}




}

