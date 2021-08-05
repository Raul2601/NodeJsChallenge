"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartController = void 0;
const BaseController_1 = require("./interfaces/base/BaseController");
const PartsSchema_1 = require("../app/persistance/schemas/PartsSchema");
const PartService_1 = require("../app/services/PartService");
class PartController extends BaseController_1.BaseController {
    constructor() {
        super(PartsSchema_1.Part);
        this.PartService = new PartService_1.PartsService();
    }
}
exports.PartController = PartController;
