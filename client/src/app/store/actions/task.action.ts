export class GetTask {
    static readonly type = '[Tasks] Fetch Task Data';
    constructor(public payload: any) { }

}

export class GetTasks {
    static readonly type = '[Tasks] Fetch Tasks Data';

}

export class GetTaskByProduct {
    static readonly type = '[Tasks] Fetch Tasks Data';
    constructor(public payload: any) { }
}

export class GetTaskById {
    static readonly type = '[Tasks] Fetch Tasks Data';
    constructor(public payload: any) { }
}

export class AddTask {
    static readonly type = '[Task] Add';
    constructor(public payload: any) { }
}

export class RegisterTask {
    static readonly type = '[Task] Register';
    constructor(public payload: any) { }
}

export class LoginTask {
    static readonly type = '[Task] Login';
    constructor(public payload: any) { }
}

export class UpdateTask {
    static readonly type = '[Task] Update';
    constructor(public payload: any) { }
}

export class LogOut {
    static readonly type = '[Task] LogOut';
}

export class DeleteTask {

    static readonly type = '[Task] Delete';
    constructor(public id: string) { }
}

