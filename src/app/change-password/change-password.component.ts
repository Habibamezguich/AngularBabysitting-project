import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  errors: any = null;
  successMsg: string | null = null;
  token: string | null = null; // Declare a variable to store the token

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute // Add ActivatedRoute to the constructor
  ) {
    this.changePasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Retrieve the token from URL parameters
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  onSubmit() {
    if (!this.token) {
      // Handle the case where token is not available
      return;
    }

    // Add the token to the form value
    const formData = {
      ...this.changePasswordForm.value,
      token: this.token
    };

    this.authService.resetPassword(formData).subscribe(
      (response: any) => {
        this.successMsg = response.message;
        this.changePasswordForm.reset();
        this.errors = null;
      },
      (error) => {
        this.errors = error.error;
        this.successMsg = null;
      }
    );
  }
}
