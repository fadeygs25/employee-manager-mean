import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { GetProduct } from 'src/app/store/actions/product.action';
import { ProductState } from 'src/app/store/states/product.state';
import { Observable } from "rxjs";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: [] | any;

  @Select(ProductState.selectProducts) product$: Observable<any> | undefined;

  constructor(
    activatedRoute: ActivatedRoute,
    private store: Store,
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.store.dispatch(new GetProduct(params.id));
      this.product$?.subscribe((returnData) => {
        this.product = returnData;
      })
      // foodService.getFoodById(params.id).subscribe(serverFood => {
      //   this.food = serverFood;
      // });
    })
  }

}
