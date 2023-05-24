import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProduct } from 'src/app/store/actions/product.action';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup | any;
  returnUrl = '';

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }



  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: [''],
      price: [''],
      size: [''],
    })
  }

  addProduct() {
    this.store.dispatch(new AddProduct(this.productForm.value))
    this.productForm.reset();

  }
}
