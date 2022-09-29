import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-regis',
  templateUrl: './form-regis.component.html',
  styleUrls: ['./form-regis.component.css']
})
export class FormRegisComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('',[Validators.required, Validators.minLength(6)]),
    country: new FormControl("",[Validators.required]),
    age: new FormControl("",[Validators.min(18)]),
    gender: new FormControl("",[Validators.required]),
    phone: new FormControl("",[Validators.required, Validators.pattern("^\\+84\\d{9,10}$")])
  },[this.confirmPass])

  countries = [{name:"Việt Nam"},{name:"lào"},{name:"Campuchia(Việt Nam)"},{name:"thái lan"}]

  constructor() {
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.registerForm)
  }
  confirmPass (registerForm: AbstractControl){
    if(registerForm.value.password !== registerForm.value.confirmPassword ){
      return {'invalidConfirm' : true}
    }
    return  null

  }

}
