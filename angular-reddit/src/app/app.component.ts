import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reddit';
  articles: Article[]; //Article Array = 제네릭(generics)

  constructor() {
    this.articles = [
      new Article('anulgar', 'http://angular.io', 3),
      new Article('fullstack', 'http://fullstack.io', 2),
      new Article('naver', 'http://naver.com', 1),
    ]
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(title, link);
    console.log(title.value, link.value);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
