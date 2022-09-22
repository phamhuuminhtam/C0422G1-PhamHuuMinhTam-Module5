import { Component, OnInit } from '@angular/core';
import {Color} from './color';

@Component({
  selector: 'app-angular-color-picker-app',
  templateUrl: './angular-color-picker-app.component.html',
  styleUrls: ['./angular-color-picker-app.component.css']
})
export class AngularColorPickerAppComponent implements OnInit {
  color: Color ={
    color: "red"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
