import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  USER_LOGIN_URL, USERS_FETCH_URL,
  USER_REGISTER_URL, USER_FETCH_URL,
  USER_BY_ID_URL
} from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  fetchUser(token: string) {
    return this.http.get(USER_FETCH_URL + token);
  }

  fetchUsers(token: string) {
    return this.http.get(USERS_FETCH_URL + token);
  }

  fetchUserById(userId: string) {
    return this.http.get(USER_BY_ID_URL + userId);
  }

  addUser(userData: any) {
    return this.http.post(USER_REGISTER_URL, userData);
  }

  registerUser(userData: any) {
    return this.http.post(USER_REGISTER_URL, userData);
  }

  loginUser(userData: any) {
    return this.http.post(USER_LOGIN_URL, userData);
  }

  deleteUser(id: number) {
    return this.http.delete('http://localhost:5000/' + id);
  }
  updateUser(payload: any, id: number) {
    return this.http.put('http://localhost:5000/' + id, payload);
  }

}
