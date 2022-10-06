import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DiemDi} from '../model/diem-di';

@Injectable({
  providedIn: 'root'
})
export class DiemDiService {

  constructor(private http: HttpClient) { }
  findAll(){
    // return this.http.get<any>('http://localhost:3000/diemDi')
    return this.http.get<any>('http://localhost:8080/diaDiem')
  }
  findById(id:number){
    return this.http.get<DiemDi>('http://localhost:8080/diaDiem/'+id)
  }
}
