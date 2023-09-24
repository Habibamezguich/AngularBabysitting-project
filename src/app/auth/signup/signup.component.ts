import { Component, OnInit } from '@angular/core';
import { JarwisbbService } from 'src/app/services/jarwisbb.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form = {
    name: null,
    prenom: null,
    age: null,
    genre: null,
    email: null,
    password: null,
    password_confirmation: null,
    adresse: null,
    ville: null,
    telephone: null,
    exquestion: null,
    type_experience: null,
    experience: null,
    age_enfants: null,
    numeros_familles: null,
    cv: null,
    certificat_secourisme: null,
    cin: null,
    attestation_presence: null,
  };

  public error = {
    email: null,
    password: null,
  };

  constructor(
        private jarwisbbService: JarwisbbService,
        private tokenService: TokenService,
        private router: Router) {}


  onBabysitterSignupSubmit() {
    this.jarwisbbService.signupbb(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }


  handleResponse(data: any) {
    this.tokenService.handle(data.access_token);
    localStorage.setItem('user_type', 'babysitter')
    this.router.navigateByUrl('/joboffers');
  }

  handleError(error: any) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }
}
