// src/app/todo/todo.component.ts
import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[] = [new Todo('Learn Angular')];
  newTodoDescription: string = '';

  addTodo() {
    if (this.newTodoDescription.trim()) {
      this.todos.push(new Todo(this.newTodoDescription));
      this.newTodoDescription = '';
    }
  }

  toggleTodoDone(index: number) {
    this.todos[index].done = !this.todos[index].done;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
