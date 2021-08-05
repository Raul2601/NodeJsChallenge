"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const BaseController_1 = require("./interfaces/base/BaseController");
const UserSchema_1 = require("../app/persistance/schemas/UserSchema");
const UserService_1 = require("../app/services/UserService");
class UserController extends BaseController_1.BaseController {
    constructor() {
        super(UserSchema_1.User);
        this.UserService = new UserService_1.UsersService();
    }
    getAll(req, res) {
        try {
            this.UserService.getAll((error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    findById(req, res) {
        try {
            var _id = req.params.id;
            this.UserService.findById(_id, (error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}
exports.UserController = UserController;
