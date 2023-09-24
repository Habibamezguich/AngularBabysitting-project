import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './services/token.service';
@Injectable({
  providedIn: 'root'
})
export class ParentGuard implements CanActivate {

  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(): boolean {
    if (this.tokenService.loggedIn()) {
      return true;
    } else {
      return false;
    }
  }
}
