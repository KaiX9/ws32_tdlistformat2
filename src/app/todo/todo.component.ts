import { Component, OnInit, Output, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Todo } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  toDoForm!: FormGroup
  todos: Todo[] = []

  ngOnInit(): void {
    this.toDoForm = this.createFormWithBuilder()
  }

  @Output()
  parseToList = new Subject<Todo>()

  fb: FormBuilder = inject(FormBuilder)

  addTask() {
    this.todos.push(this.toDoForm.value)
    const add: Todo = this.toDoForm.value
    console.info('>>> list of todos: ', this.todos)
    this.parseToList.next(add)
    this.toDoForm = this.createFormWithBuilder()
  }

  invalidField(control: string): boolean {
    return !!(this.toDoForm.get(control)?.invalid && this.toDoForm.get(control)?.dirty)
  }

  invalidForm() {
    return this.toDoForm.invalid
  }

  dueDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const dueDate = new Date(control.value)
      const currentDate = new Date()
      return dueDate < currentDate ? { invalidDueDate: true } : null

    }
  }

  private createFormWithBuilder(): FormGroup {
    return this.fb.group({
      description: this.fb.control<string>('', [ Validators.required, Validators.minLength(5) ]),
      priority: this.fb.control<string>('Low'),
      due: this.fb.control<string>('', [ Validators.required, this.dueDateValidator() ])
    })
  }
}
