import { Component, OnInit } from '@angular/core';
import {Facility} from "./Facility";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  fac: Facility= {};
  facility : Facility[]  =[{ id: 1,
    name: 'villa view biển',
    square: 100,
    cost: 1,
    numberOfPeoPle: 1,
    rentType: 'theo ngày', img: '../../../assets/facility/13d85637b352622c86221d793780af12.jpg'}, { id: 2,
  name: 'villa view sông',
  square: 100,
  cost: 2,
  numberOfPeoPle: 2,
  rentType: 'theo shot',
  img: '../../../assets/facility/64c2fb331087eb61317d0e0f529f5946.jpg'}]
  constructor() { }

  ngOnInit(): void {
  }

  detail(fac: Facility) {
    this.fac = fac;
  }
   addFacility(event: any){
    this.facility.push(event);

   }
}
