import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { GetTaskById, UpdateTask } from 'src/app/store/actions/task.action';
import { TaskState } from 'src/app/store/states/task.state';
import { Observable } from "rxjs";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  taskById: [] | any;
  taskForm: FormGroup | any;
  id: [] | any;

  @Select(TaskState.selectTaskById) taskById$: Observable<any> | undefined;


  constructor(
    activatedRoute: ActivatedRoute,
    private store: Store,
    private fb: FormBuilder,
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.id = params.id
    })
  }


  ngOnInit() {
    this.store.dispatch(new GetTaskById(this.id));
    this.taskById$?.subscribe((returnData) => {
      this.taskById = returnData;
      console.log(returnData)
    })


    this.taskForm = this.fb.group({
      _id: this.id,
      name: [''],
      priority: [''],
      status: [''],
      description: [''],
    });
  }

  updateTask() {
    this.store.dispatch(new UpdateTask(this.taskForm.value))
  }
}
