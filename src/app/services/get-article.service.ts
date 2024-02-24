import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetArticleService {

 
  //private apiUrl = "https://api.semanticscholar.org/graph/v1/paper/649def34f8be52c8b66281af98ae884c09aef38b?fields=url,year,authors,title,citationCount,referenceCount,s2FieldsOfStudy,fieldsOfStudy";

  constructor(private http: HttpClient) { }

  getArticleData(articleId: string): Observable<any>  {
    return this.http.get(`https://api.semanticscholar.org/graph/v1/paper/`+articleId+`?fields=url,year,authors,title,citationCount,referenceCount,s2FieldsOfStudy,fieldsOfStudy`)
  }

  getRecommendationData(articleId: string): Observable<any> {
    return this.http.get(`https://api.semanticscholar.org/recommendations/v1/papers/forpaper/`+articleId+`?fields=authors,title,year,fieldsOfStudy`)
  }
}
