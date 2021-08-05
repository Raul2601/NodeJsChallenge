"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeService = void 0;
const BaseService_1 = require("./interfaces/base/BaseService");
const MakeSchema_1 = require("../../app/persistance/schemas/MakeSchema");
class MakeService extends BaseService_1.BaseService {
    constructor() {
        super(MakeSchema_1.Make);
    }
}
exports.MakeService = MakeService;
