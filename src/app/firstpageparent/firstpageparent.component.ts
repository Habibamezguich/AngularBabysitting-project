import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-firstpageparent',
  templateUrl: './firstpageparent.component.html',
  styleUrls: ['./firstpageparent.component.css']
})
export class FirstpageparentComponent {
  Offres: any = [];
  loggedIn: boolean = false; // Initialize the property


  constructor(private http : HttpClient,
              private authService: AuthService,
              private router: Router,
              private crudService: CrudService,
              private Token : TokenService) {}

  ngOnInit(): void {
    this.crudService.getOffres().subscribe(res => {
      console.log(res);
      this.Offres = res;
      this.authService.authStatus.subscribe(value => this.loggedIn = value);

    });


  }

  delete(id: any, i: any): void {
    console.log(id);
    this.crudService.deleteOffre(id).subscribe(res => {
      this.Offres.splice(i, 1);
    });
  }

  logout(event: MouseEvent) {
    event.preventDefault();

    // Change the authentication status before removing the token
    this.authService.changeAuthStatus(false);

    // Remove the token
    this.Token.remove();

    // Navigate to the home page after changing the authentication status and removing the token
    this.router.navigateByUrl('/home');
  }




}
