import { IUser } from '../app/domain/entities/interfaces/IUser';
import { BaseController } from './interfaces/base/BaseController';
import { User } from '../app/persistance/schemas/UserSchema';
import { UsersService } from '../app/services/UserService';
import { Request, Response } from 'express';

export class UserController extends BaseController<IUser>{

    private UserService: UsersService = new UsersService();

    constructor() {
        super(User);
    }

    public getAll(req: Request, res: Response): void {
        try {
            this.UserService.getAll((error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    public findById(req: Request, res: Response): void {
        try {
            var _id: string = req.params.id;
            this.UserService.findById(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}