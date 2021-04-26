import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { TodoState } from '../reducer/todo-reducer';

const getToDoState = createFeatureSelector<TodoState>('toDos');

export const getToDos = createSelector(getToDoState, state => cloneDeep(state.toDos));

