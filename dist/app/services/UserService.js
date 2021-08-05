"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const UserSchema_1 = require("../persistance/schemas/UserSchema");
const BaseService_1 = require("./interfaces/base/BaseService");
class UsersService extends BaseService_1.BaseService {
    constructor() {
        super(UserSchema_1.User);
    }
    getAll(callback) {
        return this._model.find({}, callback)
            .populate('hobbies');
    }
    findById(_id, callback) {
        return this._model.findById(_id, callback)
            .populate('hobbies');
    }
}
exports.UsersService = UsersService;
