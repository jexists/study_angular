import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DUMMY_USER } from '../dummy-user';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    TasksComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = DUMMY_USER
  selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
  // languages = [
  //   { name: "javascript", icon: "", description: "" },
  //   { name: "typescript", icon: "", description: "" },
  //   { name: "golang", icon: "", description: "" },
  //   { name: "python", icon: "", description: "" },
  // ]
}
