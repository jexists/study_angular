import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task-signal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task-signal.component.html',
  styleUrls: ['./new-task-signal.component.css']
})
export class NewTaskSignalComponent {
  @Output() cancel = new EventEmitter<void>()
  // enteredTitle = "";
  // enteredSummary = "";
  // enteredDate = "";
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onCancel() {
    this.cancel.emit();
  }


}
