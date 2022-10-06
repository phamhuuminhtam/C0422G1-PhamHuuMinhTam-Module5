import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Todo} from "../todo";
// @ts-ignore
import {Observable} from "rxjs/dist/types";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Todo[]>{
    return this.http.get<Todo[]>("http://localhost:3000/todo")
  }
}
