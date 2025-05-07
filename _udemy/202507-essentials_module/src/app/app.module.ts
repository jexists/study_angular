import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    // standalone이라서 declaration이 아닌 import해야함
    // UserComponent,
    // TasksComponent,
    // HeaderComponent
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserComponent,
    TasksComponent,
    HeaderComponent
  ],
})
export class AppModule { }
