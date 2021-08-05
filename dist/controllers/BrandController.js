"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeController = void 0;
const BaseController_1 = require("./interfaces/base/BaseController");
const MakeSchema_1 = require("../app/persistance/schemas/MakeSchema");
const MakeService_1 = require("../app/services/MakeService");
class MakeController extends BaseController_1.BaseController {
    constructor() {
        super(MakeSchema_1.Make);
        this.BrandsService = new MakeService_1.MakeService();
    }
}
exports.MakeController = MakeController;
