export class GetProduct {
    static readonly type = '[Products] Fetch Product Data';
    constructor(public payload: any) { }

}

export class GetProducts {
    static readonly type = '[Products] Fetch Products Data';

}

export class AddProduct {
    static readonly type = '[Product] Add';
    constructor(public payload: any) { }
}

export class RegisterProduct {
    static readonly type = '[Product] Register';
    constructor(public payload: any) { }
}

export class LoginProduct {
    static readonly type = '[Product] Login';
    constructor(public payload: any) { }
}

export class UpdateProduct {
    static readonly type = '[Product] Update';
    constructor(public payload: any, public id: number, public i: number) { }
}

export class LogOut {
    static readonly type = '[Product] LogOut';
}

export class DeleteProduct {
    static readonly type = '[Product] Delete';
    constructor(public id: string) { }
}

