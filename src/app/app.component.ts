import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: string;
  title = 'todo-app';

  receiveTodo(todo) {
    console.log({ todo });
    this.todo = todo;
  }
}

