import { Component, OnInit, input } from '@angular/core';
import { GetArticleService } from '../../services/get-article.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { TruncatePipe } from "../../pipes/truncate.pipe";

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
  
  recommendationData: any;
  constructor(private articleService: GetArticleService,
  private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getArticleData();
      this.getRecommendationData();
    })
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
}
