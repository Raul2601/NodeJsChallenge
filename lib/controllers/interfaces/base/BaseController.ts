import { IReadController } from "../common/IReadController";
import { IWriteController } from "../common/IWriteController";
import { Request, Response } from 'express';
import mongoose = require("mongoose");
import { mongoError, successResponse } from "../../../app/persistance/common/service";
import { BaseEntity } from "../../../app/domain/entities/interfaces/base/BaseEntity";
import { BaseService } from "../../../app/services/interfaces/base/BaseService";

export class BaseController<T extends BaseEntity> implements IReadController, IWriteController {

    public entityService: BaseService<mongoose.Document>

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this.entityService = new BaseService(schemaModel);
    }

    public create(req: Request, res: Response) {

        let user_params: T = <T>req.body;

        this.entityService.create(user_params, (err, user) => {
            if (err) {
                mongoError(err, res);
            } else {
                successResponse('create user successfully', user, res);
            }
        })
    }

    public update(req: Request, res: Response) {

        const user_params: T = <T>req.body;

        this.entityService.update(req.params.id, user_params, (err, result) => {
            if (err) {
                mongoError(err, res);
            } else {
                successResponse('update user successfully', null, res);
            }
        })
    }

    public delete(req: Request, res: Response) {

        this.entityService.delete(req.params.id, (err, result) => {
            if (err) {
                mongoError(err, res);
            } else {
                successResponse('delete user successfully', null, res);
            }
        })
    }

    public getAll(req: Request, res: Response): void {
        try {
            this.entityService.getAll((error, result) => {
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
            this.entityService.findById(_id, (error, result) => {
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