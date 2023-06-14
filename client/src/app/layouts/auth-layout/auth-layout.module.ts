import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { HomeComponent } from '../../pages/home/home.component';
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ProductDetailComponent } from 'src/app/pages/product-detail/product-detail.component';
import { TaskAddComponent } from 'src/app/pages/task-add/task-add.component';
import { TaskListsComponent } from 'src/app/pages/task-lists/task-lists.component';
import { TaskEditComponent } from 'src/app/pages/task-edit/task-edit.component';
import { ProjectTaskEditComponent } from 'src/app/components/project-task-edit/project-task-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    // NgbModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailComponent,
    TaskAddComponent,
    TaskListsComponent,
    TaskListsComponent,
    TaskEditComponent,
    ProjectTaskEditComponent
  ]
})
export class AuthLayoutModule { }
