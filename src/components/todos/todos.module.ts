import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {TodosComponent} from './todos';
import {TodosInputComponent} from './todos.input';
import {TodosBodyComponent} from './todos.body';
import {TodosDetailComponent} from './todos.detail';

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, HttpModule],
    declarations: [TodosComponent, TodosInputComponent, TodosBodyComponent, TodosDetailComponent],
    entryComponents: [TodosComponent],
    bootstrap: [TodosComponent]
})
export class AppModule {
  constructor(appRef: ApplicationRef) {
    appRef.bootstrap(TodosComponent);
  }
}