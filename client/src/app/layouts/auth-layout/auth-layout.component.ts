import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { UserState } from 'src/app/store/states/user.state';
import { Observable } from "rxjs";
import { GetUser } from 'src/app/store/actions/user.action';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  user: [] | any;
  @Select(UserState.selectUser) user$: Observable<any> | undefined;

  public isCollapsed = true;

  constructor(private router: Router,
    private store: Store,
  ) { }

  ngOnInit() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.add("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-default");
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
    this.store.dispatch(new GetUser());
    this.user$?.subscribe((returnData) => {
      this.user = returnData;
    })
  }
  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.remove("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-default");
  }

}
