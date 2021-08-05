"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelService = void 0;
const BaseService_1 = require("./interfaces/base/BaseService");
const ModelSchema_1 = require("../persistance/schemas/ModelSchema");
class ModelService extends BaseService_1.BaseService {
    constructor() {
        super(ModelSchema_1.Model);
    }
}
exports.ModelService = ModelService;
