import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class ToDoInputComponent {
  @ViewChild('addTodo') todoInput;

  @Output() sendTodo: EventEmitter<string> = new EventEmitter();

  constructor() {}

  todoAdd(todo) {
    this.todoInput.nativeElement.value = '';
    if (todo) {
      this.sendTodo.emit(todo);
    }
  }
}
