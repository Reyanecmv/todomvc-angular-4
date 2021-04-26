import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { LocalStorageService } from '../local-storage.service';
import { cloneDeep } from 'lodash';

@Injectable({ providedIn: 'root' })
export class TodoDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

  // Placeholder for todo's
  todos: Todo[] = [];

  constructor(private localStorageService: LocalStorageService) {
  }

  // Simulate POST /todos
  addTodo(todo: Todo): Todo[] {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    let existingValue: any[] = this.localStorageService.getFromLocalStorage<Todo[]>('todo');
    if (existingValue?.length) {
      existingValue.push(todo)
    } else {
      existingValue = [todo]
    }
    this.localStorageService.addToLocalStorage<Todo[]>('todo', existingValue);

    return existingValue;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): Todo[] {
    const existingTodo = this.localStorageService.getFromLocalStorage<Todo[]>('todo');
    const updatedTodo = existingTodo.filter(todo => todo.id !== id);
    this.localStorageService.addToLocalStorage('todo', updatedTodo);
    return updatedTodo;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, todo: Todo): Todo[] {
    const todos = this.getAllTodos();
    const todoIndex = todos.findIndex(todoo => todoo.id === id);
    todos[todoIndex] = cloneDeep(todo);
    this.localStorageService.addToLocalStorage<Todo[]>('todo', todos);
    return todos;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.localStorageService.getFromLocalStorage<Todo[]>('todo');
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    const todos = this.getAllTodos();
    return todos.find(todo => todo.id === id);
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    if (todo) {
      todo.complete = !todo.complete;
      return this.updateTodoById(todo.id, todo);
    }
  }

}
