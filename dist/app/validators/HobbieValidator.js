"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HobbieValidator = void 0;
const Joi = require("joi");
const BaseValidator_1 = require("./base/BaseValidator");
class HobbieValidator extends BaseValidator_1.BaseValidator {
    constructor() {
        super();
    }
    Validate(req, res, next) {
        let hobbieSchema = Joi.object().keys({
            name: Joi.string().min(3).max(30).regex(/^(\w+\s?)*\s*$/).required().label('Name must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            passionLevel: Joi.string().min(3).max(30).regex(/^(\w+\s?)*\s*$/).required().label('Name must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            year: Joi.number().required().label('Year must be a number !'),
        }).unknown(true);
        const result = hobbieSchema.validate(req.body);
        this.nextOrReturn(result, res, next);
    }
}
exports.HobbieValidator = HobbieValidator;
