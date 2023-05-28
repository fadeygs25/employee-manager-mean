export class GetUser {
    static readonly type = '[Users] Fetch User Data';

}

export class GetUsers {
    static readonly type = '[Users] Fetch Users Data';

}

export class GetUserById {
    static readonly type = '[User] Fetch User Data By Id';
    constructor(public payload: any) { }
}

export class AddUser {
    static readonly type = '[User] Add';
    constructor(public payload: any) { }
}

export class RegisterUser {
    static readonly type = '[User] Register';
    constructor(public payload: any) { }
}

export class LoginUser {
    static readonly type = '[User] Login';
    constructor(public payload: any) { }
}

export class UpdateUser {
    static readonly type = '[User] Update';
    constructor(public payload: any, public id: number, public i: number) { }
}

export class LogOut {
    static readonly type = '[User] LogOut';
}

export class DeleteUser {

    static readonly type = '[User] Delete';
    constructor(public id: number) { }
}

