import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetProducts } from 'src/app/store/actions/product.action';
import { ProductState } from 'src/app/store/states/product.state';
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: [] | any;
  @Select(ProductState.selectProducts) products$: Observable<any> | undefined;

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new GetProducts());
    this.products$?.subscribe((returnData) => {
      this.products = returnData;
    })
  }
}
