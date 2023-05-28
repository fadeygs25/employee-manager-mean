import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { CookieService } from 'ngx-cookie-service';
import { TaskService } from "src/app/services/task.service";
import { AddTask, GetTasks, GetTask, GetTaskByProduct } from "../actions/task.action";

export class TaskStateModel {
    task: any;
    tasks: any;
    tasksByProduct: any;
}

@State<TaskStateModel>({

    name: 'tasksstate',
    defaults: {
        task: [],
        tasks: [],
        tasksByProduct: [],
    }
})

@Injectable()
export class TaskState {
    constructor(
        private TaskService: TaskService,
        private cookieService: CookieService
    ) { }

    @Selector()
    static selectTask(state: TaskStateModel) {
        return state.task;
    }

    @Selector()
    static selectTasks(state: TaskStateModel) {
        return state.tasks;
    }

    @Selector()
    static selectTasksByProduct(state: TaskStateModel) {
        return state.tasksByProduct;
    }

    @Action(GetTask)
    getTask(con: StateContext<TaskStateModel>, { payload }) {
        return this.TaskService.fetchTask(payload).pipe(tap(returnData => {
            const state = con.getState();
            con.setState({
                ...state,
                task: returnData
            })
        }))
    }

    @Action(GetTaskByProduct)
    getTaskByProduct(con: StateContext<TaskStateModel>, { payload }) {
        return this.TaskService.fetchTaskByProduct(payload).pipe(tap(returnData => {
            const state = con.getState();
            con.setState({
                ...state,
                tasksByProduct: returnData
            })
        }))
    }

    @Action(GetTasks)
    getTasks(con: StateContext<TaskStateModel>) {
        return this.TaskService.fetchTasks(this.getCookie()).pipe(tap(returnData => {
            const state = con.getState();
            con.setState({
                ...state,
                tasks: returnData
            })
        }))
    }

    @Action(AddTask)
    addTask(con: StateContext<TaskStateModel>, { payload }: AddTask) {
        return this.TaskService.addTask(this.getCookie(), payload).pipe(tap(returnData => {
            const state = con.getState();
            con.patchState({
                task: [...state.task, returnData]
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