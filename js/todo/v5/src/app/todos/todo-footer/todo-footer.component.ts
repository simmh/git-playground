import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-todo-footer',
  template: `
        <button class="btn btn-default btn-xs" (click)="onClick()">
          Clear completed (
          <span>{{getCntCompletedTodos}}</span>)
        </button>
        <strong>{{getCntActiveTodos}}</strong>
        {{ getCntActiveTodos > 1 ? 'items' : 'item' }} left
  `,
  styleUrls: ['./todo-Footer.component.css']
})

export class TodoFooterComponent implements OnInit {

  @Input() getCntCompletedTodos;
  @Input() getCntActiveTodos;
  @Output() removeCompletedTodos = new EventEmitter();

  constructor() { }
  ngOnInit() {
    console.log('footer start');
    console.log('removeCompletedTodos start', this.removeCompletedTodos);
    console.log('getCntCompletedTodos start', this.getCntCompletedTodos);
    console.log('getCntActiveTodos start', this.getCntActiveTodos);
  }

  onClick() {
    this.removeCompletedTodos.emit();
  }
}

