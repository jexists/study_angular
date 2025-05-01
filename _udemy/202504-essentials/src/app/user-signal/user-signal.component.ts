import { Component, signal, computed } from '@angular/core';

import { DUMMY_LANGUAGES } from '../../dummy-languages'

const randomIndex = Math.floor(Math.random() * DUMMY_LANGUAGES.length)

@Component({
  selector: 'app-user-signal',
  templateUrl: './user-signal.component.html',
  styleUrls: ['./user-signal.component.css']
})
export class UserSignalComponent {

  // language = DUMMY_LANGUAGES[randomIndex]
  language = signal(DUMMY_LANGUAGES[randomIndex])

  // get imagePath() {
  //   return 'assets/' + this.languages.icon;
  // }
  imagePath = computed(() => 'assets/' + this.language().icon)

  onSelectItem() {
    const randomIndex = Math.floor(Math.random() * DUMMY_LANGUAGES.length)
    // this.language = DUMMY_LANGUAGES[randomIndex]
    this.language.set(DUMMY_LANGUAGES[randomIndex])
  }
}
