import { State, Action, StateContext } from '@ngxs/store';

export class TodoItem {
  constructor(public name: string, public isCompleted: boolean) {}
}

export class AddTodoItem {
  constructor(public payload: string) { }
}

export class GetTodoItems {}

@State<TodoItem[]>({
  name: 'todos',
  defaults: [new TodoItem('todo 1', true), new TodoItem('todo 2', false), new TodoItem('todo 3', false)]
})
export class TodoState {
  @Action(GetTodoItems)
  getTodoItems(stateContext: StateContext<TodoItem[]>) {
    stateContext.setState([new TodoItem('new-todo 1', true), new TodoItem('new-todo 2', false), new TodoItem('new-todo 3', false)]);
  }

  @Action(AddTodoItem)
  addTodoItem(stateContext: StateContext<TodoItem[]>, { payload }: AddTodoItem) {
    const state = stateContext.getState();
    stateContext.setState([...state, new TodoItem(payload, false)]);
  }
}
