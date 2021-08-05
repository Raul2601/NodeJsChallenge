"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarController = void 0;
const BaseController_1 = require("./interfaces/base/BaseController");
const CarsSchema_1 = require("../app/persistance/schemas/CarsSchema");
const CarService_1 = require("../app/services/CarService");
class CarController extends BaseController_1.BaseController {
    constructor() {
        super(CarsSchema_1.Car);
        this.CarService = new CarService_1.CarService();
    }
    getAll(req, res) {
        try {
            this.CarService.getAll((error, result) => {
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
            this.CarService.findById(_id, (error, result) => {
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
exports.CarController = CarController;
