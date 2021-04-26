import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';
import { TodoState } from '../store/reducer/todo-reducer';
import { select, Store } from '@ngrx/store';
import { TodoActions } from '../store/actions/todo-actions';
import { getToDos } from '../store/selectors/todo-selectors';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  newTodo: Todo = new Todo();
  toDos: Todo[];
  isAlive = true;

  constructor(private todoDataService: TodoDataService, private store: Store<TodoState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(TodoActions.loadTodos({todos: []}));
    this.store.pipe(select(getToDos), takeWhile(() => this.isAlive)).subscribe(resp => this.toDos = resp);
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

}
