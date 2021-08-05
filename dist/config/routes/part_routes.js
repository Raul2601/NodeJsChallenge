"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartRoutes = void 0;
const PartController_1 = require("../../controllers/PartController");
const PartValidator_1 = require("../../app/validators/PartValidator");
class PartRoutes {
    constructor() {
        this.part_controller = new PartController_1.PartController();
        this.partValidator = new PartValidator_1.PartValidator();
    }
    route(app) {
        app.get('/api/parts', (req, res) => {
            this.part_controller.getAll(req, res);
        });
        app.post('/api/part', (req, res, next) => {
            this.partValidator.Validate(req, res, next);
        }, (req, res) => {
            this.part_controller.create(req, res);
        });
        app.get('/api/part/:id', (req, res, next) => {
            this.partValidator.validateId(req, res, next);
        }, (req, res) => {
            this.part_controller.findById(req, res);
        });
        app.put('/api/part/:id', (req, res, next) => {
            this.partValidator.validateId(req, res, next);
        }, (req, res, next) => {
            this.partValidator.Validate(req, res, next);
        }, (req, res) => {
            this.part_controller.update(req, res);
        });
        app.delete('/api/part/:id', (req, res, next) => {
            this.partValidator.validateId(req, res, next);
        }, (req, res) => {
            this.part_controller.delete(req, res);
        });
    }
}
exports.PartRoutes = PartRoutes;
