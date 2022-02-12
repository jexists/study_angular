import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(
    private apiService: ApiService
  ) { }
  public getHospList(pageNo?: number, numOfRows?: number): Observable<any> {
    let params = new HttpParams();

    params = params.set('serviceKey', '2mulQFMetApKqR%2Bx0UlbisWvmrIrEkX1pywLhQRE0ygbmrara2tM9iVQIwWH7P36nfwg%2Bmbyzsk7r9Q13KijxQ%3D%3D');

    if (pageNo !== undefined) {
      params = params.set('pageNo', pageNo.toString());
    }

    if (numOfRows !== undefined) {
      params = params.set('numOfRows', numOfRows.toString());
    }

    params = params.set('spclAdmTyCd', 'A0');
    
    return this.apiService.get('/B551182/pubReliefHospService/getpubReliefHospList', params);
  }
}
