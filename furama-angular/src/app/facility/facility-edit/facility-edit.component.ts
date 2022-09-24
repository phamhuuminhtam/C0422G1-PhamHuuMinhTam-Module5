import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facility : string[] ;
  constructor() { }

  ngOnInit(): void {
  }
  showServiceInput(value: any) {
    if(value.value=="2"){
      return this.facility= ['s1','s2','s4'];
    }
    if(value.value=="1"){
      return this.facility= ['s1','s2','s4','s3'];
    }
    if(value.value=="3"){
      return this.facility= ['s5'];
    }
    if(value.value=="-"){
      return this.facility= [];
    }
  }

}
