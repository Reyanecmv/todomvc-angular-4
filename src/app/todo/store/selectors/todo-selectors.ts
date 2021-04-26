import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../reducer/todo-reducer';

const getToDoState = createFeatureSelector<TodoState>('toDos');

export const getToDos = createSelector(getToDoState, state => state.toDos);

