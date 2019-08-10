import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnChanges, OnInit {

  @Input() newTodo: string;
  newTodos: Array<string> = [];

  constructor() {}

  ngOnInit() {
    this.newTodos = JSON.parse(this.getTodos());

  }

  ngOnChanges(changes: SimpleChanges) {
    const newestTodo = changes.newTodo.currentValue;
    if (newestTodo) {
      const todos = this.getTodos();

      if (todos) {
        this.newTodos = JSON.parse(todos);
        this.newTodos.push(changes.newTodo.currentValue);
      }

      if (!todos) {
        this.newTodos.push(changes.newTodo.currentValue);
      }
      this.setTodos(this.newTodos);
    }
  }

  setTodos(todos) {
    console.log('this.newTodos ', this.newTodos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  getTodos() {
    return localStorage.getItem('todos');
  }
}
