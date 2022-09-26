import {Component, Input, OnInit} from '@angular/core';
import {Facility} from "../facility-list/Facility";

@Component({
  selector: 'app-facility-detail',
  templateUrl: './facility-detail.component.html',
  styleUrls: ['./facility-detail.component.css']
})
export class FacilityDetailComponent implements OnInit {
  @Input()
  facilityDetail: Facility ={};
  constructor() { }

  ngOnInit(): void {
  }


}
