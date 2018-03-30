import { State } from '@ngxs/store';

export class TodoItem {
  constructor(public payload: string) {}
}

@State<TodoItem[]>({
  name: 'todos'
})
export class TodoState {}
