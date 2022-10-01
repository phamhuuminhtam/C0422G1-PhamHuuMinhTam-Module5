import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {Category} from "../model/category";
import {CategoryService} from "../service/category.service";
import {Product} from "../model/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService, private router :Router) {
    categoryService.findALl().subscribe(n => {
      this.categories = n;
    })
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    })
  }

  submit() {
    // console.log(this.productForm)
  }

  create() {
    let product: Product = this.productForm.value
    this.categoryService.findById(this.productForm.value.category).subscribe(n => {
      product.category = n;
      console.log(product)
    }, e => {
    }, () =>  {
      this.productService.addProduct(product).subscribe()
      this.router.navigateByUrl("")
    })
  }


}
