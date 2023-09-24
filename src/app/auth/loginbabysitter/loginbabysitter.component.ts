import { Component, OnInit } from '@angular/core';
import { JarwisbbService } from 'src/app/services/jarwisbb.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService} from 'src/app/services/auth.service';


@Component({
  selector: 'app-loginbabysitter',
  templateUrl: './loginbabysitter.component.html',
  styleUrls: ['./loginbabysitter.component.css']
})
export class LoginbabysitterComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };
  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  public error = null;

  constructor(
    private jarwisbbService: JarwisbbService,
    private tokenService: TokenService,
    private router: Router,
    private auth: AuthService,
    ) {}

  onSigninbbSubmit() {
    this.jarwisbbService.signinbb(this.form).subscribe(
      (data: any) => this.handleResponse(data),
      (error: any) => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    this.tokenService.handle(data.access_token);
    localStorage.setItem('user_type', 'babysitter')
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/joboffers');
  }

  handleError(error: any) {
    this.error = error.error.error;
  }

  ngOnInit() {
  }



}
