import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  loginForm= new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    passWord: new FormControl("",[Validators.required, Validators.minLength(6)])
  })
  constructor() { }

  ngOnInit(): void {
  }
  loginCheck(){
    console.log(this.loginForm)
  }
}
