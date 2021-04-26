import { Todo } from '../../todo';
import { editTodo, loadTodos, TodoActions } from '../actions/todo-actions';
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
    on(TodoActions.deleteTodoSuccess, deleteTodosSuccessHandler),
    on(TodoActions.editTodoSuccess, editTodoSuccessHandler)
)

function loadTodosSuccessHandler(state: TodoState, action) {
  return {
    ...state,
    toDos: action.todos
  }
}
function addTodoSuccessHandler(state: TodoState, action) {
  return {
    ...state,
    toDos: action.todos
  }
}
function deleteTodosSuccessHandler(state: TodoState, action) {
  return {
    ...state,
    toDos: action.todos
  }
}

function editTodoSuccessHandler(state: TodoState, action) {
  return {
    ...state,
    toDos: action.todos
  }
}
