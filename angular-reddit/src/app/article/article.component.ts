import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  votes: number;
  link: string;
  title: string;

  constructor() {
    this.votes = 10;
    this.link = 'http://angular.io';
    this.title = 'angular';
  }

  ngOnInit() {
  }

  voteUp() {
    this.votes += 1;
    // return false;
  }
  
  voteDown() {
    this.votes -= 1;
    // return false;
  }

}
