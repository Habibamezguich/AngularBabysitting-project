import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './services/token.service';

@Injectable({
  providedIn: 'root'
})
export class BabysitterGuard implements CanActivate {

  constructor(private tokenservice:TokenService, private router: Router) {}

  canActivate(): boolean {
    if (this.tokenservice.loggedIn()) {
      return true;
    } else {
      return false;
    }
  }
}
