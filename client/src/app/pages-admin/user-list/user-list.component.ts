import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { GetUsers, LogOut } from 'src/app/store/actions/user.action';
import { UserState } from 'src/app/store/states/user.state';
import { Observable } from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: [] | any;
  @Select(UserState.selectUsers) users$: Observable<any> | undefined;

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
    this.users$?.subscribe((returnData) => {
      this.users = returnData;
    })
  }

}
