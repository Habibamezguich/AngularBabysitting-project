import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JarwisService } from '../services/jarwis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-reset-parent',
  templateUrl: './password-reset-parent.component.html',
  styleUrls: ['./password-reset-parent.component.css']
})
export class PasswordResetParentComponent implements OnInit {

  resetForm: FormGroup = new FormGroup({}); // Initialize the form here
  errors: string | null = null;
  successMsg: any = null;


  constructor(private formBuilder: FormBuilder, private jarwis: JarwisService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  handleResponse(res: any) {
    console.log(res)
    this.resetForm.controls['email'].setValue(null);
  }



  onSubmit() {
    const formData = this.resetForm.value; // Get the form data
    this.jarwis.sendEmail(formData).subscribe(
      data => {
        this.handleResponse(data);
        this.successMsg = 'Email sent successfully!'; // Set success message
        setTimeout(() => {
          this.router.navigate(['/password-reset-parent']); // Redirect after 2 seconds
        }, 2000);
      },
      error => {
        this.errors = error.error.error; // Set error message
        this.successMsg = null; // Clear success message
      }
    );
  }





}
