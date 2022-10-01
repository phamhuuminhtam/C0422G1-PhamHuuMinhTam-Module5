import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../model/product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 products: Product[] =[];
 productDelete: Product;

  constructor(private productService: ProductService,private router: Router) {
    this.productService.findAll().subscribe(next => {
        this.products = next;
    })

  }

  ngOnInit(): void {

  }

  deleteModal(id: number) {
  this.productService.findById(id).subscribe(n =>{
    this.productDelete =n;
  })
  }
  delete(id: number){
    this.productService.delete(id).subscribe(n=>{
    },error => {},()=>{
      this.productService.findAll().subscribe(next => {
        this.products = next;
      });
      console.log(this.productDelete)})
  }
}
