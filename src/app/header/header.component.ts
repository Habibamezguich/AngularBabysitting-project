import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public loggedIn: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(): void {
    this.auth.logout();
  }
}
