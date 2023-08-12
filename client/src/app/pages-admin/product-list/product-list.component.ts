import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ProductState } from 'src/app/store/states/product.state';
import { Observable } from "rxjs";
import { DeleteProduct, GetProducts } from 'src/app/store/actions/product.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
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

  deleteProduct(id: string) {
    this.store.dispatch(new DeleteProduct(id));
  }
}
