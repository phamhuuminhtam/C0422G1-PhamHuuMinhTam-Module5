import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  constructor(private productService: ProductService, private router: Router,private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((param: ParamMap)=>{
      let id = param.get('id')
      let product = productService.findByID(parseInt(id));
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    })
  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.update(product);
    this.router.navigateByUrl("product/list")
  }

}
