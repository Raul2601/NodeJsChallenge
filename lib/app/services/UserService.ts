import { User } from "../persistance/schemas/UserSchema";
import { IUser } from '../domain/entities/interfaces/IUser';
import { BaseService } from './interfaces/base/BaseService';
import mongoose = require("mongoose");

export class UsersService extends BaseService<IUser> {
    constructor() {
        super(User);
    }

    getAll(callback: (error: any, result: mongoose.Document[]) => void) {
        return this._model.find({}, callback)
            .populate('hobbies')

    }

    findById(_id: string, callback: (error: any, result: mongoose.Document) => void) {
        return this._model.findById(_id, callback)
            .populate('hobbies')

    }
}