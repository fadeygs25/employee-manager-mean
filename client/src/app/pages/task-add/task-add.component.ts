import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetProducts } from 'src/app/store/actions/product.action';
import { ProductState } from 'src/app/store/states/product.state';
import { Observable } from "rxjs";
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddTask } from 'src/app/store/actions/task.action';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {
  products: [] | any;
  taskForm: FormGroup | any;
  returnUrl = '';
  @Select(ProductState.selectProducts) products$: Observable<any> | undefined;

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {

    this.store.dispatch(new GetProducts());
    this.products$?.subscribe((returnData) => {
      this.products = returnData;
    })

    this.taskForm = this.fb.group({
      name: [''],
      projectId: [''],
      priority: [''],
      status: [''],
      description: [''],
    });
  }

  addTask() {
    this.store.dispatch(new AddTask(this.taskForm.value))
    this.taskForm.reset();

  }
}
