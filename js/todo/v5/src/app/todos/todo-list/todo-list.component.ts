import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './../../todo.interface';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  @Input() selectedNavItem;

  // (click) = removeTodo.emit(id)
  @Output() removeTodo = new EventEmitter<number>();
  // (click) = toggle.emit(id)
  @Output() toggleComplete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    console.log('todos', this.todos);
    console.log('selectedNavItem', this.selectedNavItem);
  }

  onRemove(id: number) {
    console.log('[onDelete]', id);
    this.removeTodo.emit(id);
  }

  onToggle(id: number) {
    console.log('[onToggle]', id);
    this.toggleComplete.emit(id);
  }

}
