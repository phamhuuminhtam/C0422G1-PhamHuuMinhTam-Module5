import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DiemDen} from '../model/diem-den';

@Injectable({
  providedIn: 'root'
})
export class DiemDenService {

  constructor(private http: HttpClient) { }
  findAll(){
    // return this.http.get<any>('http://localhost:3000/diemDen')
    return this.http.get<any>('http://localhost:8080/diaDiem')
  }

  findById(id:number){
    return this.http.get<DiemDen>('http://localhost:8080/diaDiem/'+id)
  }
}
