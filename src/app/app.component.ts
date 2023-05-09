import { Component } from '@angular/core';
import { Todo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todos: Todo[] = []

  receiveList(t: Todo) {
    this.todos.push(t)
  }

}
