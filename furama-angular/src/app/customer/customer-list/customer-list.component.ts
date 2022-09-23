import {Component, OnInit} from '@angular/core';
import {Customer} from "./customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [{
    idCustomer: 1,
    name: "Huy Quần Què",
    dayOfBirth: "2000-12-10",
    gender: true,
    personalCode: "191798010",
    phoneNumber: "0935598199",
    email: "minhtamk17qth@agmail.com",
    address: "Đà nẵng",
    guestType: {idGuestType: 1, guestTypeName: "Diamond"}
  },
    {
      idCustomer: 2,
      name: "Huy Quần Hoa",
      dayOfBirth: "2000-12-10",
      gender: false,
      personalCode: "191798010",
      phoneNumber: "0935598199",
      email: "trioccho@agmail.com",
      address: "Huế",
      guestType: {idGuestType: 2, guestTypeName: "Silver"}
    }, {
      idCustomer: 3,
      name: "Huy Quần Cụt",
      dayOfBirth: "2000-12-10",
      gender: true,
      personalCode: "191798010",
      phoneNumber: "0935598199",
      email: "triocheo@agmail.com",
      address: "Đồng Nai",
      guestType: {idGuestType: 3, guestTypeName: "Gold"}
    }]

  constructor() {
  }

  ngOnInit(): void {
  }

}
