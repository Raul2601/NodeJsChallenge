"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const mongoose = require("mongoose");
class BaseService {
    constructor(schemaModel) {
        this._model = schemaModel;
    }
    create(item, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            this._model.create(item, callback);
        });
    }
    getAll(callback) {
        return this._model.find({}, callback);
    }
    update(_id, item, callback) {
        this.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this._model.updateOne({ _id: res.id }, item, {}, callback);
        });
    }
    delete(_id, callback) {
        this._model.deleteOne({ _id: this.toObjectId(_id) }, {}, (err) => callback(err, null));
    }
    findById(_id, callback) {
        return this._model.findById(_id, callback);
    }
    toObjectId(_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }
}
exports.BaseService = BaseService;
