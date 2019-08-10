import { TodoInputModule } from './components/todo-input/todo-input.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListModule } from './components/todo-list/todo-list.module';
import { ColorChangerDirective } from './color-changer.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorChangerDirective
  ],
  imports: [
    BrowserModule,
    TodoInputModule,
    TodoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
