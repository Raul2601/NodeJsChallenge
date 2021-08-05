"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const service_1 = require("../../../app/persistance/common/service");
const BaseService_1 = require("../../../app/services/interfaces/base/BaseService");
class BaseController {
    constructor(schemaModel) {
        this.entityService = new BaseService_1.BaseService(schemaModel);
    }
    create(req, res) {
        let user_params = req.body;
        this.entityService.create(user_params, (err, user) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse('create user successfully', user, res);
            }
        });
    }
    update(req, res) {
        const user_params = req.body;
        this.entityService.update(req.params.id, user_params, (err, result) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse('update user successfully', null, res);
            }
        });
    }
    delete(req, res) {
        this.entityService.delete(req.params.id, (err, result) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse('delete user successfully', null, res);
            }
        });
    }
    getAll(req, res) {
        try {
            this.entityService.getAll((error, result) => {
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
            this.entityService.findById(_id, (error, result) => {
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
exports.BaseController = BaseController;
