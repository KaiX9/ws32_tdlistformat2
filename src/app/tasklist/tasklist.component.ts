import { Component, Input } from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

  @Input()
  taskList: Todo[] = []
  
  completedTasks: Todo[] = []

  deleteTask(i: number) {
    this.taskList.splice(i, 1)
  }

  taskCompleted(t: Todo) {
    this.completedTasks.push(t)
  }

}
