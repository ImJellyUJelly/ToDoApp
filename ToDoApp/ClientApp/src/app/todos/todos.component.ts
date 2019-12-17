import { Component, OnInit } from '@angular/core';
import { ToDoItem } from './ToDoItem';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
    selector: 'todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class ToDosComponent implements OnInit {
    private subject = new Subject<ToDoItem[]>();
    private todos: ToDoItem[];
    
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.todos = [{ title: "Walk the dog", done: true }]
        this.http.get<ToDoItem[]>("http://localhost:60031/todo").subscribe(todos => {
            this.todos = todos;
            this.subject.next(todos);
    });
    }
}
