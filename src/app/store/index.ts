import { ActionReducerMap } from '@ngrx/store';
import { toDoReducer, TodoState } from '../todo/store/reducer/todo-reducer';

export interface AppState {
  toDo: TodoState
}

export const reducers: ActionReducerMap<AppState> = {
  toDo: toDoReducer
};
