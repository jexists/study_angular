import { TasksService } from './../tasks.service';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  // @Output() complete = new EventEmitter<string>();
  private TasksService = inject(TasksService)

  onCompleteTask() {
    // this.complete.emit(this.task.id);
    this.TasksService.removeTask(this.task.id);
  }

}
