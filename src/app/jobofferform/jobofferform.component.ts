import { Component, NgZone,  } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { JarwisService } from '../services/jarwis.service';


@Component({
  selector: 'app-jobofferform',
  templateUrl: './jobofferform.component.html',
  styleUrls: ['./jobofferform.component.css']
})
export class JobofferformComponent {

  offreForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private jarwis: JarwisService
  ) {
    this.offreForm = this.formBuilder.group({
      description: [''],
      ville: [''],
      salary: [''],
      date: [''],
      status: [''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    console.log(this.offreForm.value); // Add this line to check the form data before making the API call

    this.jarwis.addOffre(this.offreForm.value)
      .subscribe(() => {
        console.log('Data added successfully')
        this.ngZone.run(() => this.router.navigateByUrl('/firstpageparent'))
      }, (err) => {
        console.log(err)
      })
  }
  }
























