"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const CarsSchema_1 = require("../persistance/schemas/CarsSchema");
const BaseService_1 = require("./interfaces/base/BaseService");
class CarService extends BaseService_1.BaseService {
    constructor() {
        super(CarsSchema_1.Car);
    }
    getAll(callback) {
        return this._model.find({}, callback)
            .populate('make')
            .populate('model')
            .populate('engine');
    }
    findById(_id, callback) {
        return this._model.findById(_id, callback)
            .populate('make')
            .populate('model')
            .populate('engine');
    }
}
exports.CarService = CarService;
