import { IUser } from './interfaces/IUser';

export class UserModel {
    private User: IUser;

    constructor(user: IUser) {
        this.User = user;
    }
}

Object.seal(UserModel);