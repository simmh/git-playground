import { Component, OnInit } from '@angular/core';
// import { Todo } from '../todo.interface';
import { Todo } from './../todo.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../v5/environments/environment';
// import { environment } from '../../v5/environments/environment';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  // url = environment.
  url = 'http://localhost:4500/todos';
  todos: Todo[] = [];
  // todo 입력폼의 값
  content = '';
  // navigation items
  navItems = ['All', 'Active', 'Completed'];
  // 선택된 navigation item
  selectedNavItem: string;

  constructor(public http: HttpClient) {
    this.getTodos();
  }

  ngOnInit() {
    this.selectedNavItem = this.navItems[0];
    console.log('[url]', this.url);
  }

  // getTodos() {
  //   this.http.get<Todo[]>(this.url)
  //   .subscribe(todos => {
  //     this.todos = todos;
  //     console.log('[getdodos todo]', this.todos);
  //   });
  // }

  getTodos() {
    this.http.get<Todo[]>('http://localhost:4500/todos')
      .subscribe(todos => this.todos = todos);

    console.log('[GET todos]', this.url);
    console.log('[GET todos]', this.todos);
  }

  addTodo(content) {
    const newTodo = { id: this.lastTodoId(), content: content, completed: false };
    this.http.post(this.url, newTodo)
      .subscribe(() => {
        this.todos = [newTodo, ...this.todos];
        this.getTodos();
      });
  }


  removeTodo(id: number) {
    console.log('[deleteTodo]');

    this.http.delete(`${this.url}/id/${id}`, {responseType: 'text'})
      .subscribe(() => {
        this.getTodos();
      });
  }



  removeCompletedTodos() {
    // this.todos.filter((todo) => {
    //   return todo.completed !== true;
    // });

    this.todos.map((todo) => {
      if (todo.completed) {
        this.removeTodo(todo.id);
      }
    });
  }

  toggleComplete(id: number) {
    console.log('[toggleComplete]');

    const toggleTodo = this.todos.filter(todo => todo.id === id );

    this.http.patch(`${this.url}/id/${id}`, { completed: !toggleTodo[0].completed }, { responseType: 'text' })
      .subscribe(() => this.getTodos());
  }

  toggleAllTodoAsComplete(completed: boolean) {
    // this.todos.map(todo => this.toggleComplete(todo.id));
    this.todos.map( (todo) => {
      this.http.patch(`${this.url}/id/${todo.id}`, { completed: completed }, { responseType: 'text' })
        .subscribe(() => this.getTodos());
    })
  }

  setCurrentNavItem(selectedNavItem: string) {
    this.selectedNavItem = selectedNavItem;
  }

  getCntCompletedTodos(): number {
    return this.todos.filter(todo => todo.completed).length;
  }

  getCntActiveTodos(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  lastTodoId(): number {
    return this.todos.length ? Math.max(...this.todos.map(({ id }) => id)) + 1 : 1;
  }
}
