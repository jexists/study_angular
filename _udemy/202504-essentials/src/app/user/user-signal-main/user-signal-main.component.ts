import { Component, input, output, computed } from '@angular/core';

@Component({
  selector: 'app-user-signal-main',
  templateUrl: './user-signal-main.component.html',
  styleUrls: ['./user-signal-main.component.css']
})
export class UserSignalMainComponent {

  // name = input()
  // name = input('') // 초기값
  // name = input<string>() // 타입
  // name = input.required() // 필수값
  // name = input.required<string>() 

  name = input.required<string>() // 필수값
  icon = input.required<string>()
  description = input<string>()

  select = output();

  imagePath = computed(() => {
    return 'assets/' + this.icon();
  })

  onSelectItem() {
  }
}
