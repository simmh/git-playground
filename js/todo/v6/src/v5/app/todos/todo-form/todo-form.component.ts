import { Component, OnInit, Input, Output } from '@angular/core';
import { Todo } from '../../todo.interface';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  // todo 입력폼의 값
  content = '';

  @Input() todos: Todo[];
  @Output() addTodo = new EventEmitter();

  constructor() {
    console.log('constructor', this.todos);
  }

  ngOnInit() {
    console.log('ngOnInit', this.todos);
  }

  onEnter() {
    if (!this.content) { return; }

    // addTodo를 emit이 발생시킨다
    this.addTodo.emit(this.content);
    this.content = '';
  }
}
