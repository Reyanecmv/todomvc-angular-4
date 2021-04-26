import { Todo } from '../../todo';
import { loadTodos, TodoActions } from '../actions/todo-actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface TodoState {
  toDos: Todo[]
}

export const toDoInitialState: TodoState = {
  toDos: []
}


export const toDoReducer = createReducer(
    toDoInitialState,
    on(TodoActions.loadTodosSuccess, loadTodosSuccessHandler),
    on(TodoActions.addTodoSuccess, addTodoSuccessHandler),
    on(TodoActions.deleteTodoSuccess, deleteTodosSuccessHandler)
)

function loadTodosSuccessHandler(state: TodoState, action) {
  return {
    ...state,
    toDos: action.payload
  }
}
function addTodoSuccessHandler(state: TodoState, action) {
  return {
    ...state,
    toDos: action.payload
  }
}
function deleteTodosSuccessHandler(state: TodoState, action) {
  return {
    ...state,
    toDos: action.payload
  }
}
