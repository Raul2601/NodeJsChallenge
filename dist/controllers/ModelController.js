"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelController = void 0;
const BaseController_1 = require("./interfaces/base/BaseController");
const ModelService_1 = require("../app/services/ModelService");
const ModelSchema_1 = require("../app/persistance/schemas/ModelSchema");
class ModelController extends BaseController_1.BaseController {
    constructor() {
        super(ModelSchema_1.Model);
        this.ModelsService = new ModelService_1.ModelService();
    }
}
exports.ModelController = ModelController;
