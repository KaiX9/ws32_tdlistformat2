import { Component, Input, Output } from '@angular/core';
import { Todo } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

  @Input()
  taskList: Todo[] = []

  @Output()
  onSelectedTask = new Subject<Todo>()
  
  completedTasks: Todo[] = []

  deleteTask(i: number) {
    this.taskList.splice(i, 1)
    const todoList = JSON.parse(localStorage.getItem('todo') || '[]')
    todoList.splice(i, 1)
    localStorage.setItem('todo', JSON.stringify(todoList))
    console.info('List: ', this.taskList)
  }

  taskCompleted(t: Todo) {
    this.completedTasks.push(t)
  }

  editTask(i: number) {
    this.onSelectedTask.next(this.taskList[i])
  }

}
