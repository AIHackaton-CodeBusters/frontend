import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-search-article',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './search-article.component.html',
  styleUrl: './search-article.component.scss'
})
export class SearchArticleComponent {
  id: string = '';

  

}
