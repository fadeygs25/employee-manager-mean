import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { AddUser, DeleteUser, GetUser, GetUsers, GetUserById, UpdateUser, LoginUser, LogOut } from "../actions/user.action";
import { UserService } from "src/app/services/user.service";
import { CookieService } from 'ngx-cookie-service';

export class UserStateModel {
    user: any;
    users: any;
    usersById: any;
}

@State<UserStateModel>({

    name: 'usersstate',
    defaults: {
        user: [],
        users: [],
        usersById: [],
    }
})

@Injectable()
export class UserState {
    constructor(
        private ur: UserService,
        private cookieService: CookieService
    ) { }


    @Selector()
    static selectUser(state: UserStateModel) {
        return state.user;
    }

    @Selector()
    static selectUsers(state: UserStateModel) {
        return state.users;
    }

    @Selector()
    static selectUsersById(state: UserStateModel) {
        return state.usersById;
    }

    @Action(GetUser)
    getUser(con: StateContext<UserStateModel>) {
        return this.ur.fetchUser(this.getCookie()).pipe(tap(returnData => {
            const state = con.getState();
            con.setState({
                ...state,
                user: returnData
            })
        }))
    }


    @Action(GetUsers)
    getUsers(con: StateContext<UserStateModel>) {
        return this.ur.fetchUsers(this.getCookie()).pipe(tap(returnData => {
            const state = con.getState();
            con.setState({
                ...state,
                users: returnData
            })
        }))
    }

    @Action(GetUserById)
    getUserById(con: StateContext<UserStateModel>, { payload }: GetUserById) {
        return this.ur.fetchUserById(payload).pipe(tap(returnData => {
            const state = con.getState();
            con.setState({
                ...state,
                usersById: returnData
            })
        }))
    }



    @Action(AddUser)
    addUser(con: StateContext<UserStateModel>, { payload }: AddUser) {
        return this.ur.addUser(payload).pipe(tap(returnData => {
            const state = con.getState();
            con.patchState({
                users: [...state.users, returnData]
            })

        }))
    }


    @Action(LoginUser)
    loginUser(con: StateContext<UserStateModel>, { payload }: LoginUser) {
        return this.ur.loginUser(payload).pipe(tap(returnData => {
            this.setCookie(returnData);
            window.location.reload();
        }))
    }

    @Action(UpdateUser)
    updateUser(con: StateContext<UserStateModel>, { payload, id, i }: UpdateUser) {

        return this.ur.updateUser(payload, i).pipe(tap(returnData => {

            const state = con.getState();
            const userList = [...state.users];
            userList[i] = payload;
            con.setState({
                ...state,
                users: userList

            })
        }))
    }

    @Action(LogOut)
    logout() {
        this.deleteCookie();
        window.location.reload();
    }

    @Action(DeleteUser)
    deleteUser(con: StateContext<UserStateModel>, { id }: DeleteUser) {

        return this.ur.deleteUser(id).pipe(tap(returnData => {

            const state = con.getState();
            const filteredArray = state.users.filter((contents: { id: number; }) => contents.id !== id)

            con.setState({

                ...state,
                users: filteredArray

            })



        }))

    }




    private setCookie(returnData) {
        this.cookieService.set('token', returnData.token);
    }

    private getCookie() {
        return this.cookieService.get('token');
    }

    private deleteCookie() {
        this.cookieService.delete('token');
    }
}