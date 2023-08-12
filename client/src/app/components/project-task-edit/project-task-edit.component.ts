import { Component, Input, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetUserById } from 'src/app/store/actions/user.action';
import { UserState } from 'src/app/store/states/user.state';
import { Observable } from "rxjs";

@Component({
  selector: 'app-project-task-edit',
  templateUrl: './project-task-edit.component.html',
  styleUrls: ['./project-task-edit.component.scss']
})
export class ProjectTaskEditComponent {
  @Input()
  projectId!: string;
}
