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
      new Article('React', 'https://reactjs.org/', 2),
      new Article('Anulgar', 'http://angular.io', 3),
      new Article('Vue', 'https://vuejs.org/', 1),
      new Article('Svelte', 'https://svelte.dev/', 0),
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    if (!title.value || !link.value) {
      return;
    }
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
