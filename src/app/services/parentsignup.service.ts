import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentSignupService {
  private apiUrl = '/parents'; // Replace with the actual backend API URL

  constructor(private http: HttpClient) { }

  signUpParent(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/parents`, formData);
  }
}
