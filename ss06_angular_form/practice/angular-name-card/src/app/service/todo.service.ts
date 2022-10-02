import { Injectable } from '@angular/core';
import {Observable} from "rxjs/dist/types";
import {HttpClient} from "@angular/common/http";
import {Todo} from "../todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Todo[]>{
    return this.http.get<Todo[]>().subscribe()
  }
}
