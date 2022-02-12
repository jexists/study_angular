import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/xml',
    'X-Custom-Header': 'YES'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }


  private formatErrors(error: any) {
    return throwError(error.error);
  }
  
  get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    // Pass to next layer of middleware
    console.log(url);
    
    return this.http.get(`${url}`, httpOptions).pipe(catchError(this.formatErrors));
  }
}
