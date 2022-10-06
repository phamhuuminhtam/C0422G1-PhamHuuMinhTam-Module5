import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DiemDenService} from '../service/diem-den.service';
import {DiemDen} from '../model/diem-den';
import {BenxeService} from '../service/benxe.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  xeForm: FormGroup;
  diaDiem: DiemDen
  constructor(private diemDenService: DiemDenService, private benxeService: BenxeService, private  router: Router,  private toast: ToastrService) {
    this.diemDenService.findAll().subscribe(n=>{
      this.diaDiem = n;
    }, error => {},()=>{
      this.xeForm = new FormGroup({
        bienSo: new FormControl("",Validators.required),
        loaiXe: new FormControl("",Validators.required),
        tenNhaXe: new FormControl("",Validators.required),
        diemDen: new FormControl("",Validators.required),
        diemDi: new FormControl("",Validators.required),
        soDienThoai: new FormControl("",[Validators.required, Validators.pattern('^(090|093|097)[0-9]{7}$')]),
        email: new FormControl("",[Validators.email,Validators.required]),
        gioKhoiHanh: new FormControl("",[Validators.required]),
        gioDen: new FormControl("",[Validators.required])
      })
    })
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.xeForm);
  }

  add() {
    if (this.xeForm.valid){
      this.xeForm.value.gioDen = this.xeForm.value.gioDen +":00"
      this.xeForm.value.gioKhoiHanh = this.xeForm.value.gioKhoiHanh +":00"
      this.benxeService.add(this.xeForm.value).subscribe(n=>{
        this.router.navigateByUrl("")
        this.toast.success("Chỉnh sửa thành công!","Thông báo")
      })
    }

  }
}
