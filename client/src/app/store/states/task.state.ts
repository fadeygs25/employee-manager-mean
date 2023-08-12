import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { CookieService } from 'ngx-cookie-service';
import { TaskService } from "src/app/services/task.service";
import {
    AddTask, GetTasks, GetTask, GetTaskByProduct, GetTaskById,
    DeleteTask, UpdateTask
} from "../actions/task.action";

export class TaskStateModel {
    task: any;
    tasks: any;
    tasksByProduct: any;
    taskById: any;
}

@State<TaskStateModel>({

    name: 'tasksstate',
    defaults: {
        task: [],
        tasks: [],
        tasksByProduct: [],
        taskById: [],
    }
})

@Injectable()
export class TaskState {
    constructor(
        private taskService: TaskService,
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


    @Selector()
    static selectTaskById(state: TaskStateModel) {
        return state.taskById;
    }

    @Action(GetTask)
    getTask(con: StateContext<TaskStateModel>, { payload }) {
        return this.taskService.fetchTask(payload).pipe(tap(returnData => {
            const state = con.getState();
            con.setState({
                ...state,
                task: returnData
            })
        }))
    }

    @Action(GetTaskByProduct)
    getTaskByProduct(con: StateContext<TaskStateModel>, { payload }) {
        return this.taskService.fetchTaskByProduct(payload).pipe(tap(returnData => {
            const state = con.getState();
            con.setState({
                ...state,
                tasksByProduct: returnData
            })
        }))
    }

    @Action(GetTaskById)
    getTaskById(con: StateContext<TaskStateModel>, { payload }) {
        return this.taskService.fetchTaskById(payload).pipe(tap(returnData => {
            const state = con.getState();
            con.setState({
                ...state,
                taskById: returnData
            })
        }))
    }

    @Action(GetTasks)
    getTasks(con: StateContext<TaskStateModel>) {
        return this.taskService.fetchTasks(this.getCookie()).pipe(tap(returnData => {
            const state = con.getState();
            con.setState({
                ...state,
                tasks: returnData
            })
        }))
    }

    @Action(AddTask)
    addTask(con: StateContext<TaskStateModel>, { payload }: AddTask) {
        return this.taskService.addTask(this.getCookie(), payload).pipe(tap(returnData => {
            const state = con.getState();
            con.patchState({
                task: [...state.task, returnData]
            })
        }))
    }

    @Action(UpdateTask)
    updateTask(con: StateContext<TaskStateModel>, { payload }: UpdateTask) {
        return this.taskService.updateTask(payload).pipe(tap(returnData => {
        }))
    }

    @Action(DeleteTask)
    deleteTask(con: StateContext<TaskStateModel>, { id }: DeleteTask) {
        return this.taskService.deleteTask(id).pipe(tap(() => {
            const state = con.getState();
            const filteredArray = state.tasksByProduct.filter((contents: { _id: string; }) => contents._id !== id)

            con.setState({
                ...state,
                tasksByProduct: filteredArray
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