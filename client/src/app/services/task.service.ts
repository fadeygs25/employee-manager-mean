import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  TASK_CREATE_URL, TASKS_FETCH_URL,
  TASK_BY_PRODUCT_URL, TASK_BY_ID_URL,
  TASK_DELETE_URL, TASK_UPDATE_URL
} from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  fetchTask(token: string) {
    return this.http.get(TASK_CREATE_URL);
  }


  fetchTaskByProduct(projectId: string) {
    return this.http.get(TASK_BY_PRODUCT_URL + projectId);
  }

  fetchTaskById(taskId: string) {
    return this.http.get(TASK_BY_ID_URL + taskId);
  }

  fetchTasks(token: string) {
    return this.http.get(TASKS_FETCH_URL);
  }

  addTask(token: string, taskData: any) {
    return this.http.post(TASK_CREATE_URL + token, taskData);
  }

  updateTask(taskData: any) {
    return this.http.put(TASK_UPDATE_URL + taskData._id, taskData);
  }

  deleteTask(id: string) {
    return this.http.delete(TASK_DELETE_URL + id);
  }

}
