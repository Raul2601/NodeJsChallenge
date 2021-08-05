"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HobbieService = void 0;
const BaseService_1 = require("./interfaces/base/BaseService");
const HobbieSchema_1 = require("../persistance/schemas/HobbieSchema");
class HobbieService extends BaseService_1.BaseService {
    constructor() {
        super(HobbieSchema_1.Hobbie);
    }
}
exports.HobbieService = HobbieService;
