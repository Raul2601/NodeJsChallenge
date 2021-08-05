"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseValidator = void 0;
var ObjectId = require('mongoose').Types.ObjectId;
const joi_1 = __importDefault(require("joi"));
const joi_objectid_1 = __importDefault(require("joi-objectid"));
const myJoiObjectId = joi_objectid_1.default(joi_1.default);
class BaseValidator {
    validateId(req, res, next) {
        var schema = joi_1.default.object().keys({
            id: this.idValidator()
        });
        var result = schema.validate({ id: req.params.id });
        this.nextOrReturn(result, res, next);
    }
    idValidator() {
        return myJoiObjectId().required().label('Id must be a valid mongo id !');
    }
    nextOrReturn(result, res, next) {
        if (result.error == null) {
            next();
        }
        else {
            res.status(422).json({ error: result.error });
            return;
        }
    }
}
exports.BaseValidator = BaseValidator;
