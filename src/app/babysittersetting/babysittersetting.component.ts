import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JarwisbbService } from '../services/jarwisbb.service';
@Component({
  selector: 'app-babysittersetting',
  templateUrl: './babysittersetting.component.html',
  styleUrls: ['./babysittersetting.component.css']
})
export class BabysittersettingComponent implements OnInit{

    editForm!: FormGroup;
    successMessage: string | null = null;
    errorMessage: string | null = null;

    constructor(private fb: FormBuilder, private jarwisbb:JarwisbbService) {}

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

      this.jarwisbb.updatebbInfo(userId, this.editForm.value).subscribe(
        (response: any) => {
          this.successMessage = 'Votre profil a été mise à jour avec succès.';
        },
        (error: any) => {
          this.errorMessage = 'mot de passe incorrecte, veillez saisir un mot de passe valide';
        }
      );
    }
  }

