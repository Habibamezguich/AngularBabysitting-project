import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/services/crud.service';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { JarwisService } from '../services/jarwis.service';
@Component({
  selector: 'app-joboffers',
  templateUrl: './joboffers.component.html',
  styleUrls: ['./joboffers.component.css']
})
export class JoboffersComponent implements OnInit {
  jobOffers: any[] = [];
  loggedIn: boolean = false; // Initialize the property
  parents: { id: number }[] = [];
  parentIds: number[] = []; // New property
  parent: { id?: number } = {}; // New property for storing a single parent

  constructor(private http: HttpClient,
              private crud:CrudService,
              private Token: TokenService,
              private authService:AuthService,
              private router: Router,
              private jarwisservice: JarwisService) {}

              ngOnInit(): void {
                this.fetchJobOffers();
                this.authService.authStatus.subscribe(value => this.loggedIn = value);
                this.getParentIds(); // Remove the empty parentheses here
              }

              fetchJobOffers() {
                this.crud.getOffres().subscribe(
                  (response: any) => {
                    if (Array.isArray(response)) {
                      this.jobOffers = response;

                      // Fetch parent information for each job offer
                      this.jobOffers.forEach(offer => {
                        this.retrieveParentById(offer.user_id);
                      });
                    } else {
                      console.error('Unexpected response format:', response);
                    }
                  },
                  (error) => {
                    console.error('Error fetching job offers:', error);
                  }
                );
              }


  Logout(event: MouseEvent) {
    event.preventDefault();

    // Change the authentication status before removing the token
    this.authService.changeAuthStatus(false);

    // Remove the token
    this.Token.remove();

    // Navigate to the home page after changing the authentication status and removing the token
    this.router.navigateByUrl('/home');
  }

//////////////////////////////////////////////////////////////////////////////////////
sendMessage(user_id?: number,user?:{name?:string,prenom?:string})  {
  // Check if parent or parent.id is undefined or null
  if (!parent || user_id === undefined || user_id === null) {
    console.log('Parent ID is null or undefined, cannot navigate.');
    return;
  }

  console.log(`Button clicked for parent with ID: ${user_id}`);

  // Navigate to the conversation with the selected parent
  // Send name as query param
  this.router.navigate(['/conversations', user_id], { queryParams: { name:user?.name
  +" "+ user?.prenom } });
}




getParentIds() {
  this.jarwisservice.getParentIds().subscribe(
    (data: number[]) => {
      const parentIds = data; // No need for mapping, as the API provides an array of numbers

      // Now you have an array of parent IDs
      console.log('Parent IDs:', parentIds);

      // You can perform further operations with the parent IDs
      // For example, you can store them in a property for later use.
      this.parentIds = parentIds;
    }
  );
}



retrieveParentById(parentId: number) {
  this.jarwisservice.getParentById(parentId).subscribe(
    (data: any) => {
      // Assign the retrieved parent data to the job offer's parent property
      const jobOffer = this.jobOffers.find(offer => offer.parentId === parentId);
      if (jobOffer) {
        jobOffer.parent = data;
      }
    },
    (error) => {
      console.error('Error retrieving parent:', error);
    }
  );
}

}
