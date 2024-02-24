import { Component, OnInit, input } from '@angular/core';
import { GetArticleService } from '../../services/get-article.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
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
