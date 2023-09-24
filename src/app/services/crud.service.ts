import { Injectable } from '@angular/core';
import { Offre } from './Offre';
import { catchError,map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService {

  REST_API: string = 'http://127.0.0.1:8000/api/offre';

  httpHeader= new HttpHeaders().set('Content-Type','application/json');

  constructor(private httpClient : HttpClient){}



  getOffres(){
    return this.httpClient.get( `${this.REST_API}`);
  }

  getOffreForEdit(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/${id}/edit`; // Assuming the correct endpoint for editing
    return this.httpClient.get(API_URL, { headers: this.httpHeader })
      .pipe(catchError(this.handleError));
  }

  updateOffre(id: any, data: Offre): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeader })
      .pipe(catchError(this.handleError))
  }

  deleteOffre(id: any ): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.delete(API_URL,  { headers: this.httpHeader })
      .pipe(catchError(this.handleError))
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
