import { Routes } from '@angular/router';
import { SearchArticleComponent } from './features/search-article/search-article.component';
import { ArticlePageComponent } from './features/article-page/article-page.component';

export const routes: Routes = [
    {path:'', component: SearchArticleComponent},
    {path:'article/:id', component: ArticlePageComponent}
];
