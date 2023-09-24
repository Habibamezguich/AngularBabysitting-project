import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { TokenService } from './token.service';
import { Offre } from './Offre';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient,
    private tokenService: TokenService) {}

  parentSignup(data: any): Observable<any> {
    // Send a POST request to the parentSignup API endpoint
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

  signin(data: any): Observable<any> {
    // Send a POST request to the signin API endpoint
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  sendEmail(data:any){
    return this.http.post(`${this.baseUrl}/sendPasswordResetEmail`, data);
  }

// AuthService (angular)
resetPassword(data: any) {
  return this.http.post('http://127.0.0.1:8000/api/reset-password', data);
}


getCandidates(): Observable<any> {
  return this.http.get(`${this.baseUrl}/candidates`);
}


filterCandidatesByCity(city: string): Observable<any> {
  // Send a GET request to filter candidates by city
  return this.http.get(`${this.baseUrl}/candidates?ville=${city}`);
}

updateUserInfo(id: number, formData: FormData): Observable<any> {
  return this.http.put(`${this.baseUrl}/updateparent/${id}`, formData);
}



private getHeaders(): HttpHeaders {
  const token = this.tokenService.get(); // Get token from TokenService
  return new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  });
}


getInboxes(): Observable<any> {
  const headers = this.getHeaders(); // Get headers with the token
  return this.http.get(`${this.baseUrl}/bb/inbox`, { headers });}

 getInboxMessages(id: number): Observable<any> {
    const headers = this.getHeaders(); // Get headers with the token
    // here we are getting the user type to decide
    if (localStorage.getItem('user_type') === 'parent')
      return this.http.get(`${this.baseUrl}/inbox/${id}`, { headers });
    else
    return this.http.get(`${this.baseUrl}/bb/inbox/${id}`, { headers });
  }


  sendMessageToUser(receiver: number, content: string): Observable<any> {
    const headers = this.getHeaders(); // Get headers with the token
        // here we are getting the user type to decide
    if (localStorage.getItem('user_type') === 'parent')
      return this.http.post(`${this.baseUrl}/inbox/${receiver}`, { content }, { headers });
    else
    return this.http.post(`${this.baseUrl}/bb/inbox/${receiver}`, { content }, { headers });
  }


  getParentIds(): Observable<number[]> {
  return this.http.get<number[]>(`${this.baseUrl}/parents/all/ids`);
}


getParentById(parentId: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/parents/${parentId}`);
}


   // Fetch babysitter messages
   getBabysitterMessages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/bb/inbox`);
  }
  addOffre(data: Offre): Observable<any> {
    const headers = this.getHeaders(); // Get headers with the token
    let API_URL = `${this.baseUrl}/offre`;
    return this.http.post(API_URL,data,{ headers }).pipe(catchError(this.handleError));
  }

  handleError(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}




