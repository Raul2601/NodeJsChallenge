"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsService = void 0;
const BaseService_1 = require("./interfaces/base/BaseService");
const PermissionSchema_1 = require("../../app/persistance/schemas/PermissionSchema");
class PermissionsService extends BaseService_1.BaseService {
    constructor() {
        super(PermissionSchema_1.Permission);
    }
}
exports.PermissionsService = PermissionsService;
