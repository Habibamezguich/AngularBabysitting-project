import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    loginbb : 'http://localhost:8000/api/loginbb',
    babysitterlogin :  'http://localhost:8000/api/babysitterlogin',
    signup :  'http://localhost:8000/api/signup',
    login :'http://localhost:8000/api/login',

  }
  constructor() { }

  handle(token: string): void {
    this.set(token);
    console.log(this.isValid());
  }

  set(token: string): void {
    localStorage.setItem('token', token);
  }

  get(): string | null {
    return localStorage.getItem('token');
  }

  remove(): void {
    localStorage.removeItem('token');
  }

  isValid(): boolean {
    const token = this.get();
    if (token) {
      const payload = this.decodePayload(token);
      return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
    }
    return false; // Default to false if no token or if validation fails
  }

  private decodePayload(token: string): any {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isValid();
  }


  getUserRole(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = this.decodePayload(token);
      return payload.role || null;
    }
    return null;
  }



}





