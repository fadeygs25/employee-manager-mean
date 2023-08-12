import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AddUser, GetUsers } from 'src/app/store/actions/user.action';
import { UserState } from 'src/app/store/states/user.state';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup | any;
  returnUrl = '';

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }


  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: [''],
      fullName: [''],
      email: [''],
      number: [''],
      address: [''],
      password: [''],
    })
  }

  addUser() {
    this.store.dispatch(new AddUser(this.userForm.value)).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    })
    this.userForm.reset();

  }
} 
