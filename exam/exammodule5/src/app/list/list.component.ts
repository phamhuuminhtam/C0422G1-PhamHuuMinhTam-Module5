import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {BenxeService} from '../service/benxe.service';
import {BenXe} from '../model/ben-xe';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  p: number = 1;
  benXeList: BenXe[];
  xeDelete: BenXe;
  formSearch: FormGroup;
  pageTotal: number;
  currenPage: number =0;
  constructor(private  toast: ToastrService,private benxeService: BenxeService) {
      this.formSearch = new FormGroup({
      keySearch: new FormControl()
    })
    this.currenPage = 0;
    this.benxeService.findAll("",this.currenPage).subscribe(n=>{
      if(n == null){
        this.benXeList =[];
      }else
        this.benXeList = n.content;
      this.pageTotal = n.totalPages;
    })
  }

  ngOnInit(): void {
    this.list()
  }

  list(){
    this.benxeService.findAll(this.formSearch.value.keySearch,this.currenPage).subscribe(n=>{
      console.log(n);
      if(n == null){
        this.benXeList =[];
      }else {
        this.benXeList = n.content;
        this.pageTotal= n.totalPages;
        console.log(this.pageTotal);
      }

    })
  }
  toastTest() {
    this.toast.success("Hello","test");
  }

  getIdDelete(xe: BenXe) {
    this.benxeService.findById(xe.id).subscribe(n => {
      this.xeDelete = n;
    });
  }

  deleteXe(xe: BenXe) {
    console.log(xe);
    this.benxeService.delete(xe).subscribe(n=>{
      this.toast.success("Xóa thành công","Thông báo")
      this.list()
    })

  }

  search() {

  }

  prePage() {
    if(this.currenPage >0){
      this.currenPage= this.currenPage -1;
    }
    this.list()
  }

  nextPage() {
    if(this.currenPage < this.pageTotal -1){
      this.currenPage= this.currenPage +1;
    }
    this.list()
  }
}
