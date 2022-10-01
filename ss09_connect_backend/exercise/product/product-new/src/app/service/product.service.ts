import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/product")
  }

  addProduct(product: Product){
    return this.http.post<Product>("http://localhost:3000/product",product);
  }

  editProduct(product: Product){
    return this.http.patch("http://localhost:3000/product/"+product.id,product)
  }

  findById(id:number){
    return this.http.get("http://localhost:3000/product/"+ id)
  }

  delete(id:number){
    return this.http.delete("http://localhost:3000/product/"+ id)
  }
}

