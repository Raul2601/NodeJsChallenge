"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRoutes = void 0;
const CarController_1 = require("../../controllers/CarController");
const CarValidator_1 = require("../../app/validators/CarValidator");
class CarRoutes {
    constructor() {
        this.car_controller = new CarController_1.CarController();
        this.carValidator = new CarValidator_1.CarValidator();
    }
    route(app) {
        app.get('/api/cars', (req, res) => {
            this.car_controller.getAll(req, res);
        });
        app.post('/api/car', (req, res, next) => {
            this.carValidator.Validate(req, res, next);
        }, (req, res) => {
            this.car_controller.create(req, res);
        });
        app.get('/api/car/:id', (req, res, next) => {
            this.carValidator.validateId(req, res, next);
        }, (req, res) => {
            this.car_controller.findById(req, res);
        });
        app.put('/api/car/:id', (req, res, next) => {
            this.carValidator.validateId(req, res, next);
        }, (req, res, next) => {
            this.carValidator.Validate(req, res, next);
        }, (req, res) => {
            this.car_controller.update(req, res);
        });
        app.delete('/api/car/:id', (req, res, next) => {
            this.carValidator.validateId(req, res, next);
        }, (req, res) => {
            this.car_controller.delete(req, res);
        });
    }
}
exports.CarRoutes = CarRoutes;
