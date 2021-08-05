"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const BaseService_1 = require("./interfaces/base/BaseService");
const RoleSchema_1 = require("../../app/persistance/schemas/RoleSchema");
class RolesService extends BaseService_1.BaseService {
    constructor() {
        super(RoleSchema_1.Role);
    }
}
exports.RolesService = RolesService;
