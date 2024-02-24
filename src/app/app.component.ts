import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchArticleComponent } from "./features/search-article/search-article.component";
import { HeaderComponent } from "./features/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, SearchArticleComponent, HeaderComponent]
})
export class AppComponent {
  title = 'hackathonUI';
}
