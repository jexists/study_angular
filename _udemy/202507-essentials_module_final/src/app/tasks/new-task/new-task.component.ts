import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  // standalone: true,
  // imports: [FormsModule],
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>()
  // @Output() cancle = new EventEmitter<void>()
  // @Output() add = new EventEmitter<NewTaskData>()
  enteredTitle = "";
  enteredSummary = "";
  enteredDate = "";

  private tasksService = inject(TasksService)

  onCancel() {
    // this.cancle.emit();
    this.close.emit();
  }

  onSumit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId)
    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate
    // })
    this.close.emit();
  }
}
