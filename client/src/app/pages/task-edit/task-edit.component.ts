import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { GetTaskById, UpdateTask } from 'src/app/store/actions/task.action';
import { TaskState } from 'src/app/store/states/task.state';
import { Observable } from "rxjs";
import { ProductState } from 'src/app/store/states/product.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetProducts } from 'src/app/store/actions/product.action';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent {
  taskById: [] | any;
  products: [] | any;
  taskForm: FormGroup | any;

  @Select(ProductState.selectProducts) products$: Observable<any> | undefined;
  @Select(TaskState.selectTaskById) taskById$: Observable<any> | undefined;


  constructor(
    activatedRoute: ActivatedRoute,
    private store: Store,
    private fb: FormBuilder,
  ) {
    activatedRoute.params.subscribe((params) => {
      this.store.dispatch(new GetTaskById(params.id));
      this.taskById$?.subscribe((returnData) => {
        this.taskById = returnData;
      })
    })
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

  updateTask() {
    this.store.dispatch(new UpdateTask(this.taskForm.value))
    this.taskForm.reset();

  }
}
