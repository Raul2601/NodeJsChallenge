"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HobbieRoutes = void 0;
const HobbieValidator_1 = require("../../app/validators/HobbieValidator");
const HobbieController_1 = require("../../controllers/HobbieController");
class HobbieRoutes {
    constructor() {
        this.hobbie_controller = new HobbieController_1.HobbieController();
        this.hobbieValidator = new HobbieValidator_1.HobbieValidator();
    }
    route(app) {
        app.get('/api/hobbies', (req, res) => {
            this.hobbie_controller.getAll(req, res);
        });
        app.post('/api/hobbie', (req, res, next) => {
            this.hobbieValidator.Validate(req, res, next);
        }, (req, res) => {
            this.hobbie_controller.create(req, res);
        });
        app.get('/api/hobbie/:id', (req, res, next) => {
            this.hobbieValidator.validateId(req, res, next);
        }, (req, res) => {
            this.hobbie_controller.findById(req, res);
        });
        app.put('/api/hobbie/:id', (req, res, next) => {
            this.hobbieValidator.validateId(req, res, next);
        }, (req, res, next) => {
            this.hobbieValidator.Validate(req, res, next);
        }, (req, res) => {
            this.hobbie_controller.update(req, res);
        });
        app.delete('/api/hobbie/:id', (req, res, next) => {
            this.hobbieValidator.validateId(req, res, next);
        }, (req, res) => {
            this.hobbie_controller.delete(req, res);
        });
    }
}
exports.HobbieRoutes = HobbieRoutes;
