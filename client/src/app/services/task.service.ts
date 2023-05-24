import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TASK_CREATE_URL, TASKS_FETCH_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  fetchTask(token: string) {
    return this.http.get(TASK_CREATE_URL);
  }

  fetchTasks(token: string) {
    return this.http.get(TASKS_FETCH_URL);
  }

  addTask(token: string, taskData: any) {
    return this.http.post(TASK_CREATE_URL + token, taskData);
  }

}
