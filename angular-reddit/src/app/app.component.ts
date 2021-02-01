import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reddit';

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(title, link);
    console.log(title.value, link.value);
    return false;
  }
}
