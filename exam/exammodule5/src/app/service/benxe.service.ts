import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BenXe} from '../model/ben-xe';

@Injectable({
  providedIn: 'root'
})
export class BenxeService {

  constructor(private http: HttpClient) { }

  findAll(key: string,page: number): Observable<any>{
    if(key==null){
      key=""
    }
    // return this.http.get<any>('http://localhost:3000/benXe')
    return this.http.get<any>('http://localhost:8080?key='+key+'&page='+page)
  }

  findById(id:number){
    // return this.http.get<BenXe>('http://localhost:3000/benXe/'+id)
    return this.http.get<BenXe>('http://localhost:8080/find?id='+id)
  }

  delete(xe: BenXe){
    // return this.http.delete('http://localhost:3000/benXe/'+xe.id)
    return this.http.delete('http://localhost:8080?id='+xe.id)
  }

  edit(xe: BenXe){
    // return this.http.patch('http://localhost:3000/benXe/'+xe.id,xe)
    return this.http.patch('http://localhost:8080/'+xe.id,xe)
  }

  add(xe : BenXe){
    return this.http.post('http://localhost:8080',xe)
  }
}
