import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BabysitterSignupService {
  private apiUrl = '/babysitters'; // Replace with the actual backend API URL

  constructor(private http: HttpClient) { }

  signUpBabysitter(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/babysitters`, formData);
  }
}
