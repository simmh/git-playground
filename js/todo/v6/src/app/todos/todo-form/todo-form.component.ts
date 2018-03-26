import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../../todo.interface';


@Component({
  selector: 'app-todo-form',
  // templateUrl: './todo-form.component.html',
  template: `
  <input class="form-control input-lg" placeholder= "What needs to be done?" autofocus [(ngModel)]="content" (keyup.enter)="onEnter()">
  `,
  styles: []
})
export class TodoFormComponent implements OnInit {
  content = '';

  // @Input() todos: Todo[];
  @Output() addTodo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEnter(content) {
    console.log('keyup');
    if (!this.content) { return; }
    this.addTodo.emit(this.content);
    this.content = '';
  }

}
