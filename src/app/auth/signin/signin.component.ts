import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  public form = {
    email: null,
    password: null,
  };

  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  public error = null;

  constructor(
    private jarwisService: JarwisService,
    private tokenService: TokenService,
    private router: Router,
    private auth: AuthService
  ) {}

  onSigninSubmit() {
    this.jarwisService.signin(this.form).subscribe(
      (data: any) => this.handleSigninResponse(data),
      (error: any) => this.handleError(error)
    );
  }

  handleSigninResponse(data: any) {
    this.tokenService.handle(data.access_token);
    localStorage.setItem('user_type', 'parent')
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/firstpageparent');
  }
  resetPassword() {
    const resetPasswordData = {
      email: this.form.email, // Use the entered email for password reset
    };

    this.jarwisService.sendEmail(resetPasswordData).subscribe(
      (response: any) => {
        console.log('Password reset email sent:', response.message);
      },
      (error: any) => {
        console.error('Password reset email error:', error);
      }
    );
  }

  handleError(error: any) {
    this.error = error.error.error;
  }

  ngOnInit() {}
}
