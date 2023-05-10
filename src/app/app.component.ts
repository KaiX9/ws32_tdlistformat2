import { Component, OnInit } from '@angular/core';
import { Todo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todos: Todo[] = []

  todo: Todo | null = null

  ngOnInit(): void {
    const data = localStorage.getItem('todo')
    if (!!data) {
      this.todos = JSON.parse(data)
    }
  }

  receiveList(t: Todo) {
    this.todos.push(t)
    localStorage.setItem('todo', JSON.stringify(this.todos))
  }

  selectedTask(t: Todo) {
    this.todo = t
    console.info('todo: ', this.todo)
  }

}
