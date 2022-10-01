import {Component, OnInit} from '@angular/core';
import {Customer} from "./customer";
import {HttpClient} from "@angular/common/http";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService,private http: HttpClient) {
   customerService.findAll().subscribe(next=>{
     console.log(next)
     this.customers=next;

    })
  }

  ngOnInit(): void {
  }


}
