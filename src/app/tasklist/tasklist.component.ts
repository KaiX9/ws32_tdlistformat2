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

}
