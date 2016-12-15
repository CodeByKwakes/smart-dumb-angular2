import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  title = 'Todo List (TodoListComponent)'
  @Input() todos;
  @Output() onComplete = new EventEmitter();
  @Output() onDelete   = new EventEmitter();
}
