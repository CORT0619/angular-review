import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoListComponent],
  exports: [TodoListComponent]
})
export class TodoListModule { }

