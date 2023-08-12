import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ProductDetailComponent } from 'src/app/pages/product-detail/product-detail.component';
import { TaskAddComponent } from 'src/app/pages/task-add/task-add.component';
import { TaskEditComponent } from 'src/app/pages/task-edit/task-edit.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'product-detail/:id', component: ProductDetailComponent },
    { path: 'task-add', component: TaskAddComponent },
    { path: 'task-edit/:id', component: TaskEditComponent },
];
