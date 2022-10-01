import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../model/product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../model/category";
import {CategoryService} from "../service/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  productForm: FormGroup;
  categories: Category[] = [];
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,private categoryService: CategoryService,  private  router: Router) {
    activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      let id = paramMap.get('id')
      this.productService.findById(parseInt(id)).subscribe(next=>{
        this.product = next;
      }, e=> {}, ()=>{
        this.productForm = new FormGroup({
          id: new FormControl(this.product.id),
          name: new FormControl(this.product.name),
          price: new FormControl(this.product.price),
          description: new FormControl(this.product.description),
          category: new FormControl(this.product.category.id)
        })
      })
    })
    categoryService.findALl().subscribe(n => {
      this.categories = n;
    })
  }

  ngOnInit(): void {

  }

  submit() {
    console.log(this.productForm)
  }

  eidt() {
    let product: Product = this.productForm.value
    this.categoryService.findById(this.productForm.value.category).subscribe(n => {
      product.category = n;
      console.log(product)
    }, e => {
    }, () =>  {
      this.productService.editProduct(product).subscribe()
      this.router.navigateByUrl("")
    })
  }
}
