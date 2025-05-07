import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, // Datepipe
    FormsModule, // ngModel
    SharedModule,
  ],
  declarations: [
    TasksComponent,
    NewTaskComponent,
    TaskComponent,
  ],
  exports: [
    TasksComponent // app 모듈에서 tasks만 사용해서 
  ]
})
export class TasksModule { }
