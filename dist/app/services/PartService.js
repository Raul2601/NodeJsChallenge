"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartsService = void 0;
const BaseService_1 = require("./interfaces/base/BaseService");
const PartsSchema_1 = require("../../app/persistance/schemas/PartsSchema");
class PartsService extends BaseService_1.BaseService {
    constructor() {
        super(PartsSchema_1.Part);
    }
}
exports.PartsService = PartsService;
