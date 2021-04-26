import { Injectable } from '@angular/core';
import { TodoState } from '../reducer/todo-reducer';
import { TodoDataService } from '../../todo-data.service';
import { Action, select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { TodoActions } from '../actions/todo-actions';

@Injectable()
export class TodoEffects {

  constructor(
      private actions$: Actions,
      private store: Store<TodoState>,
      private toDoService: TodoDataService
  ) {
  }


  getTodos$: Observable<Action> = createEffect(() =>
      this.actions$.pipe(
          ofType(TodoActions.loadTodos),
          mergeMap(() => {
            const todos = this.toDoService.getAllTodos();
            return of(TodoActions.loadTodosSuccess({ todos: todos }));
          })
      )
  );

  addToDo$: Observable<Action> = createEffect(() =>
      this.actions$.pipe(
          ofType(TodoActions.addTodo),
          mergeMap((action) => {
            const todos = this.toDoService.addTodo(action.todo);
            return of(TodoActions.addTodoSuccess({ todos: todos }));
          })
      )
  );

  deleteToDo$: Observable<Action> = createEffect(() =>
      this.actions$.pipe(
          ofType(TodoActions.deleteTodo),
              mergeMap((action) => {
                const todos = this.toDoService.deleteTodoById(action.id);
                return of(TodoActions.deleteTodoSuccess({ todos: todos }));
              })
          )
      );
}
