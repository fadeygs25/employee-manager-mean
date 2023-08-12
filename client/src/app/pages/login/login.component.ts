import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoginUser, GetUsers } from 'src/app/store/actions/user.action';
import { UserState } from 'src/app/store/states/user.state';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup | any;
  returnUrl = '';

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    })
  }


  loginUser() {
    this.store.dispatch(new LoginUser(this.loginForm.value)).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }

  ngOnDestroy() {
  }
}
