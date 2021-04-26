import { Action, createAction, props } from '@ngrx/store';
import { Todo } from '../../todo';

export const loadTodos = createAction('[Todo] Load todos', props<{todos: Todo[]}>())
export const loadTodosSuccess = createAction('[Todo] Load todos success', props<{todos: Todo[]}>())
export const addTodo = createAction('[Todo] Add todo', props<{todo: Todo}>())
export const addTodoSuccess = createAction('[Todo] Add todo success', props<{todos: Todo[]}>())
export const editTodo = createAction('[Todo] Edit todo', props<{todo: Todo}>())
export const editTodoSuccess = createAction('[Todo] Edit todo success', props<{todos: Todo[]}>())
export const deleteTodo = createAction('[Todo] Delete todo', props<{id: number}>())
export const deleteTodoSuccess = createAction('[Todo] Delete todo success', props<{todos: Todo[]}>())


export const TodoActions = {
  loadTodos,
  loadTodosSuccess,
  addTodo,
  addTodoSuccess,
  editTodo,
  editTodoSuccess,
  deleteTodo,
  deleteTodoSuccess
}
