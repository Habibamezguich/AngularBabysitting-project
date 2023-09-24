import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class JarwisbbService {


  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient,
              private token:TokenService) {}

  signupbb(data: any): Observable<any> {
    // Send a POST request to the parentSignup API endpoint
    return this.http.post(`${this.baseUrl}/babysitterlogin`, data);
  }

  signinbb(data: any): Observable<any> {
    // Send a POST request to the signin API endpoint
    return this.http.post(`${this.baseUrl}/loginbb`, data);
  }

  updatebbInfo(id: number, formData: FormData): Observable<any> {
    return this.http.put(`${this.baseUrl}/updatebabysitter/${id}`, formData);
  }



  private getHeaders(): HttpHeaders {
    const token = this.token.get(); // Get token from TokenService
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }

    // Fetch babysitter messages
    getBabysitterMessages(): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl}/bb/inbox`);
    }

    // Send a message to a user
    sendMessageToUser(receiverId: number, messageContent: string): Observable<any> {
      const data = { content: messageContent };
      return this.http.post<any>(`${this.baseUrl}/bb/inbox/${receiverId}`, data);
    }
}
