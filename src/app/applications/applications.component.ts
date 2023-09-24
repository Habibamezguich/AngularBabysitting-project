// applications.component.ts
import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../services/jarwis.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  candidates: any[] = []; // Array to hold candidate data
  selectedCity: string = 'all'; // Selected city for filtering


  constructor(private jarwis: JarwisService,
              private tokenservice:TokenService,
              private router: Router) {}

  ngOnInit(): void {
    this.getCandidates();
  }

  getCandidates() {
    this.jarwis.getCandidates().subscribe(
      (data: any) => {
        this.candidates = data.candidates;
      },
      (error: any) => {
        console.error('Error fetching candidates:', error);
      }
    );
  }


  filterCandidates() {
    if (this.selectedCity === 'all') {
      this.getCandidates(); // Show all candidates if "Ville" is selected
    } else {
      // Filter candidates by selected city
      this.jarwis.filterCandidatesByCity(this.selectedCity).subscribe(
        (data: any) => {
          this.candidates = data.candidates;
        },
        (error: any) => {
          console.error('Error fetching filtered candidates:', error);
        }
      );
    }
  }



  sendMessage(candidateId: number,user?:{name?:string,prenom?:string}) {
    console.log(`Button clicked for candidate: ${candidateId}`);

    // Check if candidateId is undefined
    if (candidateId === undefined) {
      console.log('candidateId is undefined');
      return;
    }

    // Navigate to conversation
    this.router.navigate(['/conversations', candidateId], { queryParams: { name:user?.name
      +" "+ user?.prenom } });
      }

  }

