import {Component, OnInit} from '@angular/core';

import {TodoStore} from './shared/todo.store';
import {Todo} from './shared/todo';

@Component({
  selector: 'todos-body',
  template: `
    <todos-detail
      *ngFor="let todo of todos; let i = index"
      [list-no]="i"
      [todo-data]="todo"
      (on-delete)="onDelete(i)">
    </todos-detail>
  `
})
export class TodosBodyComponent
  implements OnInit {

  private todos: Todo[];

  constructor (
    private todoStore: TodoStore
  ) {}

  public ngOnInit () {
    this.todos = this.todoStore.list;
  }

  public onDelete(index: number): void {
    this.todoStore.delete(index);
  }
}