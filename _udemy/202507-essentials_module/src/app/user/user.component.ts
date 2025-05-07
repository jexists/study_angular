import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  imports: [CardComponent],
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>()
  // @Input() description1!: string;
  // @Input() description2?: string;
  // @Input() description3: string | undefined;
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
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  // imagePath = computed(() => {
  //   return 'assets/' + this.icon();
  // })

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
