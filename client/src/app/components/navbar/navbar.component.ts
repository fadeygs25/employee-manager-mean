import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { GetUser, LogOut } from 'src/app/store/actions/user.action';
import { UserState } from 'src/app/store/states/user.state';
import { Observable } from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: [] | any;
  returnUrl = '';
  @Select(UserState.selectUser) user$: Observable<any> | undefined;
  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,
    private element: ElementRef,
    private router: Router,
    private store: Store,
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.store.dispatch(new GetUser());
    this.user$?.subscribe((returnData) => {
      this.user = returnData;
    })
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  logOut() {
    this.store.dispatch(new LogOut())
  }

  isUser() {
    if (this.user === "") {
      return false;

    }
    else {
      return true;

    }
  }

}
