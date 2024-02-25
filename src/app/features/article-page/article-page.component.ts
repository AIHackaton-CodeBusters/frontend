import { Component, OnInit, input } from '@angular/core';
import { GetArticleService } from '../../services/get-article.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { TruncatePipe } from "../../pipes/truncate.pipe";
import { LanguageService } from '../../services/language.service';
import { SummaryService } from '../../services/summary.service';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-article-page',
    standalone: true,
    templateUrl: './article-page.component.html',
    styleUrl: './article-page.component.scss',
    imports: [CommonModule, RouterModule, TruncatePipe]
})
export class ArticlePageComponent implements OnInit {
  id: string ='';
  articleData: any;
  suggestedData:any;
  summary: any = '';
  supportedLanguages = [
    { name: 'English', code: 'en' },
    { name: 'Spanish', code: 'es' }
    // Add more languages as needed
  ];
 
  currentLanguage: string | undefined;
  recommendationData: any;


  constructor(private articleService: GetArticleService,
  private route: ActivatedRoute,
  private languageService: LanguageService,
  private router: Router,
  private summaryService: SummaryService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getArticleData();
      this.getRecommendationData();
      this.getSummary();
      
    })
    this.currentLanguage = this.languageService.getSelectedLanguage();
  }
  refreshPage() {
    window.onload = () => {
      window.scrollTo(0, 0); // Scroll to the top of the page after the page has loaded
    };
    window.location.reload();
    
  }
  getArticleData(): void {
    this.articleService.getArticleData(this.id).subscribe((result) => {
      this.articleData = result;
    })
  } 
  getRecommendationData(): void {
    this.articleService.getRecommendationData(this.id).subscribe((result) => {
      this.recommendationData = result;
    })
  }
  onOptionSelected(event: Event): void {
    const selectedOptionValue = (event.target as HTMLSelectElement).value;
    this.router.navigate([selectedOptionValue]); // Navigate to the selected route
  }
  

  getSummary(): void {
    this.summaryService.getSummary(this.id).subscribe((result)=>{
      this.summary = result;
    })
  }
  
}
