"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HobbieController = void 0;
const HobbieService_1 = require("../app/services/HobbieService");
const HobbieSchema_1 = require("../app/persistance/schemas/HobbieSchema");
const BaseController_1 = require("./interfaces/base/BaseController");
class HobbieController extends BaseController_1.BaseController {
    constructor() {
        super(HobbieSchema_1.Hobbie);
        this.PartService = new HobbieService_1.HobbieService();
    }
}
exports.HobbieController = HobbieController;
