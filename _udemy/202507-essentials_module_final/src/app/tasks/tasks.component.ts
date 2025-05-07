import { Component, Input, OnInit } from '@angular/core';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  // standalone: true,
  // imports: [NewTaskComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  // private tasksService = new TasksService();
  // private tasksService: TasksService;

  constructor(
    // tasksService: TasksService
    private tasksService: TasksService
  ) {
    // this.tasksService = tasksService
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }


  // onCompleteTask(id: string) {
  // }
  // onCancelAddTask() {
  //   this.isAddingTask = false;
  // }
  // onAddTask(taskData: NewTaskData) {
  //   this.tasks.push({
  //     id: new Date().getTime
  //   })
  // }
}
