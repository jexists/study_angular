import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/xml',
    'X-Custom-Header': 'YES'
  }),
};
@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }
  public getHospList(pageNo: number, numOfRows: number): Observable<any> {
    // let params = new HttpParams();
    // params = params.set('serviceKey', environment.secret);
    // if (pageNo !== undefined) {
    //   params = params.set('pageNo', pageNo.toString());
    // }
    // if (numOfRows !== undefined) {
    //   params = params.set('numOfRows', numOfRows.toString());
    // }
    // params = params.set('spclAdmTyCd', 'A0');

    const params = new HttpParams().set('serviceKey', environment.secret).set('pageNo', pageNo?.toString()).set('numOfRows', numOfRows?.toString()).set('spclAdmTyCd', 'A0');

    // console.log(`/getHpsList?${params}`);
    // try {
      return this.http.get<any>('/getHpsList' + '?' + params, httpOptions).pipe();
    // } catch (e) {
    //   console.log('eee: ', e);
    //   throw new Error("Unexpected object: " + e);
    // }
    // return this.apiService.get('/getHpsList', params);
    // return this.apiService.get(`/getHpsList?${params}`);
  }

  
}



  // // http://apis.data.go.kr/B551182/pubReliefHospService/getpubReliefHospList?serviceKey=2mulQFMetApKqR%252Bx0UlbisWvmrIrEkX1pywLhQRE0ygbmrara2tM9iVQIwWH7P36nfwg%252Bmbyzsk7r9Q13KijxQ%253D%253D&pageNo=1&numOfRows=10&spclAdmTyCd=A0

  // http://apis.data.go.kr/B551182/pubReliefHospService/getpubReliefHospList?serviceKey=2mulQFMetApKqR%2Bx0UlbisWvmrIrEkX1pywLhQRE0ygbmrara2tM9iVQIwWH7P36nfwg%2Bmbyzsk7r9Q13KijxQ%3D%3D&pageNo=1&numOfRows=10&spclAdmTyCd=A0