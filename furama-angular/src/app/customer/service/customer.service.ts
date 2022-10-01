import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../customer-list/customer";
import {environment} from "../../../environments/environment";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})


export class CustomerService {

  constructor(private http: HttpClient) { }


  findAll(): Observable <Customer[]>{
  return   this.http.get<Customer[]>(API_URL + '/customer-rest');
  }
}
