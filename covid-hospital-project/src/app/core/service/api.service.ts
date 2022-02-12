import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

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
    console.log(params);
    
    return this.http.get(`${url}`, { params })
      .pipe(catchError(this.formatErrors));
  }
}
