import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipe';
  // 파이프
  // => 표현식에 개입해서 결과를 수정해서 보여주는 역할
  // => 비즈니스 로직없이 그냥 화면에서 보여주는거 처리할때 사용
  // 내장파이프
  // {{expression | pipe}}
  // 여러개 사용하는 경우
  // {{expression | pipe | pipe}}
  // 파라미터 받아서 사용하는 파이프
  // {{expression | pipe:parameter1:paramter2}}

  // 프로미스나 서브스크립트 할경우
  data = new Promise(resolve => {
    setTimeout(() => {
      resolve("Hello");
    }, 2000);
  })
}
