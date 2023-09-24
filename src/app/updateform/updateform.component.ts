import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Offre } from 'src/app/services/Offre';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ngZone: NgZone,
    private crudService: CrudService,

  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.getOffreForEdit(this.getId).subscribe(
      (res: any) => {
        if (res && res.offre) { // Check if the response and the "offre" property exist
          this.updateForm.patchValue({
            description: res.offre.Description || '',
            ville: res.offre.ville || '',
            salary: res.offre.salary || '',
            date: res.offre.date || '',
            status: res.offre.status || ''
          });
        }
      },
      (err) => {
        console.log(err);
      }
    );


    this.updateForm = this.formBuilder.group({
      description: [''],
      ville: [''],
      salary: [''],
      date: [''],
      status: [''],
    });
  }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.crudService.updateOffre(this.getId, this.updateForm.value)
      .subscribe(() => {
        console.log('Data updated successfully');
        this.ngZone.run(() => this.router.navigateByUrl('/firstpageparent'));
      }, (err) => {
        console.log(err);
      });
  }
}
