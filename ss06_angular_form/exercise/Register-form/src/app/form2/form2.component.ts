import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    passGroup: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    },[this.confirmPass]),
    country: new FormControl("", [Validators.required]),
    age: new FormControl("", [Validators.min(18)]),
    gender: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required, Validators.pattern("^\\+84\\d{9,10}$")])
  })

  countries = [{name: "Việt Nam"}, {name: "lào"}, {name: "Campuchia(Việt Nam)"}, {name: "thái lan"}]

  constructor() {
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.registerForm)
  }

  confirmPass(passGroup: AbstractControl) {
    if (passGroup.value.password !== passGroup.value.confirmPassword) {
      return {'invalidConfirm': true}
    }
    return null

  }

}
