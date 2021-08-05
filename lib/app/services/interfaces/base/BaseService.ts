import { IRead } from "../common/IRead";
import { IWrite } from "../common/IWrite";
import mongoose = require("mongoose");


export class BaseService<T extends mongoose.Document> implements IWrite<T>, IRead<T>{

    protected _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    async create(item: T, callback: (error: any, result: mongoose.Document) => void) {
        this._model.create(item, callback);
    }

    getAll(callback: (error: any, result: mongoose.Document[]) => void) {
        return this._model.find({}, callback);
    }

    update(_id: string, item: T, callback: (error: any, result: any) => void) {
        this.findById(_id, (err, res) => {
            if (err) callback(err, res);
            else
                this._model.updateOne({ _id: res.id }, item, {}, callback);
        })
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._model.deleteOne({ _id: this.toObjectId(_id) }, {}, (err) => callback(err, null));
    }

    findById(_id: string, callback: (error: any, result: mongoose.Document) => void) {
        return this._model.findById(_id, callback);
    }


    private toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }
}