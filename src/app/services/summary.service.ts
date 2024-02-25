import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {


  constructor(private http: HttpClient) { }

  getSummary(articleId: string): Observable<any>  {
    return this.http.get(`http://localhost:3600/simplify/`+articleId);
  }

  
}
