import {DiemDen} from './diem-den';
import {DiemDi} from './diem-di';
import {Gio} from './gio';
import {Time} from '@angular/common';

export interface BenXe {
  id: number,
  bienSo: string,
  loaiXe: string,
  tenNhaXe: string,
  diemDen: DiemDen,
  diemDi: DiemDi,
  soDienThoai: string,
  email: string,
  gioKhoiHanh: string,
  gioDen: string
}
