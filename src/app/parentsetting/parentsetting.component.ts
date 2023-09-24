import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JarwisService } from '../services/jarwis.service';

@Component({
  selector: 'app-parentsetting',
  templateUrl: './parentsetting.component.html',
  styleUrls: ['./parentsetting.component.css']
})
export class ParentsettingComponent implements OnInit {
  editForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private jarwis: JarwisService) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', Validators.required],
      current_password: [''], // Remove Validators.minLength(8)
      new_password: [''], // Remove Validators.minLength(8)
      password_confirmation: ['']
    });
  }

  onSubmit() {
    this.successMessage = null;
    this.errorMessage = null;

    if (this.editForm.invalid) {
      this.errorMessage = 'Please fill all required fields and ensure passwords match.';
      return;
    }

    const userId = 2; // Replace with the actual user ID

    this.jarwis.updateUserInfo(userId, this.editForm.value).subscribe(
      (response: any) => {
        this.successMessage = 'Votre profil a été mise à jour avec succès.';
      },
      (error: any) => {
        this.errorMessage = 'mot de passe incorrecte, veillez saisir un mot de passe valide';
      }
    );
  }
}
