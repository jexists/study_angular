import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  @Input({ required: true }) name!: string;
  @Input({ required: true }) icon!: string;
  @Input() description1!: string;
  @Input() description2?: string;
  @Input() description3: string | undefined;
  // @Input() description4: string;

  // name = input()
  // name = input('') // 초기값
  // name = input<string>() // 타입
  // name = input.required() // 필수값
  // name = input.required<string>() 

  // name = input.required<string>() // 필수값
  // icon = input.required<string>()
  // description = input<string>()

  // @Output() select = new EventEmitter()
  @Output() select = new EventEmitter<string>()
  // select = output<string>();

  // get imagePath() {
  //   return this.icon
  // }

  // imagePath = computed(() => {
  //   return 'assets/' + this.icon();
  // })

  onSelectItem() {
    this.select.emit(this.name)
  }
}
