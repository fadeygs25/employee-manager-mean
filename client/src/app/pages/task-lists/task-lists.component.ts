import { Component, Input, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetUserById } from 'src/app/store/actions/user.action';
import { UserState } from 'src/app/store/states/user.state';
import { Observable } from "rxjs";


@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.scss']
})
export class TaskListsComponent {
  @Input()
  userId!: string;
  @Input()
  name!: string;
  @Input()
  status!: string;
  @Input()
  priority!: string;
  @Input()
  description!: string;

  usersById: any;

  @Select(UserState.selectUsersById) usersById$: Observable<any> | undefined;

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new GetUserById(this.userId));
    this.usersById$?.subscribe((returnData) => {
      if (this.userId === returnData._id) {
        this.usersById = returnData;
      }

    })
  }

  


}
