import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { TodoItem, GetTodoItems, TodoState, AddTodoItem } from './states/todo/todo-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Select(TodoState) todos$: Observable<TodoItem[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetTodoItems());
  }

  addTodo(input: HTMLInputElement) {
    this.store.dispatch(new AddTodoItem(input.value)).subscribe(() => {
      input.value = '';
    });
  }
}
