import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BenxeService} from '../service/benxe.service';
import {BenXe} from '../model/ben-xe';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DiemDen} from '../model/diem-den';
import {DiemDi} from '../model/diem-di';
import {DiemDenService} from '../service/diem-den.service';
import {DiemDiService} from '../service/diem-di.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  xe: BenXe;
  xeForm: FormGroup;
  diemDen: DiemDen[];
  diemDi: DiemDi[];
  id: number;
  bienSo: string;

  constructor(private activatedRoute: ActivatedRoute, private benxeService: BenxeService, private  router: Router,
              private diemDenService: DiemDenService, private diemDiService: DiemDiService, private  toast: ToastrService) {
    diemDenService.findAll().subscribe(n => {
      this.diemDen = n;
      diemDiService.findAll().subscribe(n => {
        this.diemDi = n;
      });
    }, error => {
    }, () => {
      activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.id = +paramMap.get('id');
        this.benxeService.findById(this.id).subscribe(n => {
          this.xe = n;
          this.bienSo = this.xe.bienSo;
        }, error => {
        }, () => {
          this.xeForm = new FormGroup({
            loaiXe: new FormControl(this.xe.loaiXe, Validators.required),
            tenNhaXe: new FormControl(this.xe.tenNhaXe, Validators.required),
            diemDen: new FormControl(this.xe.diemDen.id, Validators.required),
            diemDi: new FormControl(this.xe.diemDi.id, Validators.required),
            soDienThoai: new FormControl(this.xe.soDienThoai, [Validators.required, Validators.pattern('^(090|093|097)[0-9]{7}$')]),
            email: new FormControl(this.xe.email, [Validators.email, Validators.required]),
            gioKhoiHanh: new FormControl(this.xe.gioKhoiHanh, [Validators.required]),
            gioDen: new FormControl(this.xe.gioDen, [Validators.required])
          });
        });
      });
    });

  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.xeForm);
  }


  eidt() {
    if (this.xeForm.valid) {
      if(this.xeForm.value.gioKhoiHanh.length == 5){
        this.xeForm.value.gioKhoiHanh = this.xeForm.value.gioKhoiHanh + ":00"
      }
      if(this.xeForm.value.gioDen.length == 5){
        this.xeForm.value.gioDen = this.xeForm.value.gioDen + ":00"
      }

      let xe: BenXe = this.xeForm.value;
      xe.id = this.id;
      xe.bienSo = this.bienSo;
      this.diemDenService.findById(this.xeForm.value.diemDen).subscribe(n => {
        xe.diemDen = n;
      }, e => {
      }, () => {
        this.diemDiService.findById(this.xeForm.value.diemDi).subscribe(n => {
          xe.diemDi = n;
          console.log(xe);
        }, error => {
        }, () => {
          this.benxeService.edit(xe).subscribe();
          this.router.navigateByUrl('');
          this.toast.success('Chỉnh sửa thành công!', 'Thông báo');
        });
      });
    } else {
      this.toast.warning('Phát sinh lỗi vui lòng thử lại!', 'Thông báo');
    }
  }
}
