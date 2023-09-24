import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-parent-signup',
  templateUrl: './parent-signup.component.html',
  styleUrls: ['./parent-signup.component.css']
})
export class ParentSignupComponent implements OnInit {

  public form = {
    name:null,
    prenom:null,
    adresse:null,
    email:null,
    password:null,
    password_confirmation:null,
    ville:null,
    situation:null,
    nbenfant:null,
    agenfant:null,
    perso:null,
    heure:null,
    annonce:null
  };

  public error = {
    email: null,
    password:null,
  };


  constructor(
    private jarwisService: JarwisService,
    private tokenService: TokenService,
    private router: Router) {}


  onParentSignupSubmit() {
    this.jarwisService.parentSignup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }


  handleResponse(data: any) {
    this.tokenService.handle(data.access_token);
    localStorage.setItem('user_type', 'parent')
    this.router.navigateByUrl('/firstpageparent');
  }

  handleError(error: any) {
    this.error = error.error.errors;
  }

ngOnInit() {
}
}

