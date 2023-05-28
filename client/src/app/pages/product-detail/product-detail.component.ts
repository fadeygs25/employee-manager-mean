import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { GetProduct } from 'src/app/store/actions/product.action';
import { ProductState } from 'src/app/store/states/product.state';
import { Observable } from "rxjs";
import { GetTaskByProduct } from 'src/app/store/actions/task.action';
import { TaskState } from 'src/app/store/states/task.state';
import { GetUserById } from 'src/app/store/actions/user.action';
import { UserState } from 'src/app/store/states/user.state';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: [] | any;
  tasksByProduct: [] | any;
  usersById: [] | any;

  @Select(ProductState.selectProducts) product$: Observable<any> | undefined;
  @Select(TaskState.selectTasksByProduct) tasksByProduct$: Observable<any> | undefined;
  @Select(UserState.selectUsersById) usersById$: Observable<any> | undefined;


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
      this.store.dispatch(new GetTaskByProduct(params.id));
      this.tasksByProduct$?.subscribe((returnData) => {
        this.tasksByProduct = returnData;
      })
    })
  }

  ngOnInit() {
    this.store.dispatch(new GetUserById(this.tasksByProduct.userId));
    this.tasksByProduct$?.subscribe((returnData) => {
      this.tasksByProduct = returnData;
    })
  }
}
