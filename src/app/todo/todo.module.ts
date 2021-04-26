import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { toDoReducer } from './store/reducer/todo-reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/effects/todo-effects.service';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  }
]

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature('toDos', toDoReducer),
    EffectsModule.forFeature([TodoEffects]),
    RouterModule.forChild(routes)
  ]
})
export class TodoModule {
}
