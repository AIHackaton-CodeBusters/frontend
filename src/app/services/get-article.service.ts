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
    return this.http.get(`https://api.semanticscholar.org/graph/v1/paper/`+articleId+`?fields=url,year,authors,title,citationCount,referenceCount,s2FieldsOfStudy,fieldsOfStudy,publicationDate,citationCount`)
  }

  getRecommendationData(articleId: string): Observable<any> {
    return this.http.get(`https://api.semanticscholar.org/recommendations/v1/papers/forpaper/`+articleId+`?fields=authors,title,year,fieldsOfStudy,publicationDate,citationCount,s2FieldsOfStudy`)
  }
  getSuggestedData(fieldsOfStudy: string[], publicationId: string): Observable<any> {
    const url = `http://localhost:3500/suggested`;
    const body = {
      fieldsOfStudy: fieldsOfStudy,
      publication_id: publicationId
    };
    return this.http.post<any>(url, body);
  }
}
