import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-todo-nav',
  template: `
  <ul class="nav nav-xs nav-pills">
  <li *ngFor="let navItem of navItems" [class.active]="navItem === selectedNavItem">
    <a (click)="onClick(navItem)">{{navItem}}</a>
    <!-- <a (click)="changeCurrentNavItem.emit("navItem")></a> -->
  </li>
  </ul>
  `,

  styleUrls: ['./todo-nav.component.css']
})

export class TodoNavComponent implements OnInit {
  select = '';
  @Input() navItems: string[];
  @Input() selectedNavItem: string;
  @Output() setCurrentNavItem = new EventEmitter();
  // @Output() changeCurrentNavItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // 부모가 값을 넘겨졌는지 체크.
    console.log('navItems', this.navItems);
    console.log('selectedNavItem', this.selectedNavItem);
  }

  onClick(navItem) {
    console.log('nav select');
    console.log(navItem);
    this.setCurrentNavItem.emit(navItem);
  }

}
