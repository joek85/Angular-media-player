import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/index";


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'http://localhost:3001/search/';

  constructor(private http: HttpClient) { }

   getsearchResults (query: string): Observable<any> {

    let params = new HttpParams().set('q', query);
    return  this.http.get(this.apiUrl, {
      params: params
    });
  }
}
