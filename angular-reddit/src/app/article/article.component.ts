import { Component, Input, OnInit } from '@angular/core';
import { Article }  from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() {
    // this.article = new Article(
    //   'angular',
    //   'http://angular.io',
    //   10
    // )
  }

  ngOnInit() {
  }

  voteUp() {
    // this.article.votes += 1;
    this.article.voteUp();
    return false;
  }
  
  voteDown() {
    // this.article.votes -= 1;
    this.article.voteDown();
    return false;
  }
  
}
