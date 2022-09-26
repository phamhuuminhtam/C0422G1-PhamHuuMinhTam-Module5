import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Facility} from "../facility-list/Facility";
import {Customer} from "../../customer/customer-list/customer";
import {FacilityType} from "./FacilityType";

@Component({
  selector: 'app-facility-add',
  templateUrl: './facility-add.component.html',
  styleUrls: ['./facility-add.component.css']
})
export class FacilityAddComponent implements OnInit {
  fac: Facility = {};
  @Output()
  faci: EventEmitter<Facility> = new EventEmitter();

  facilityType: FacilityType[] = [{id: 1, name: "Villa"}, {id: 2, name: "House"}, {id: 3, name: "Room"}];

  transfer() {
    this.faci.emit(this.fac)
    this.fac = {};
  }

  facility: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

  showServiceInput(value: any) {
    if (value.value == "2") {
      return this.facility = ['s1', 's2', 's4'];
    }
    if (value.value == "1") {
      return this.facility = ['s1', 's2', 's4', 's3'];
    }
    if (value.value == "3") {
      return this.facility = ['s5'];
    }
    if (value.value == "-") {
      return this.facility = [];
    }
    console.log(this.facilityType)
  }

}
