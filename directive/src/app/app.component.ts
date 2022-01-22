import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directive';
}

// Directive 3가지
// component
// -> 템플릿이 있는 디렉티브
// structural Directive
// -> 템플릿에 DOM을 추가, 제거 => 템플릿의 구조를 변경
// -> ngFor, ngIf, ngSwitch
// Attribute Directive
// -> DOM의 모양과 동작을 수정
// -> [ngModel], [ngClass], [ngStyle]


// 템플릿이 있는 디렉티브
// -> component

// 템플릿이 없는 디렉티브 (기능에따라)
// -> structural Directive vs Attribute Directive