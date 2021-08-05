"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarValidator = void 0;
const Joi = require("joi");
const BaseValidator_1 = require("./base/BaseValidator");
class CarValidator extends BaseValidator_1.BaseValidator {
    constructor() {
        super();
    }
    Validate(req, res, next) {
        let carSchema = Joi.object().keys({
            vin: Joi.string().min(3).max(30).regex(/^(\w+\s?)*\s*$/).required().label('VIN must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            make: Joi.object().keys({
                name: Joi.string().min(2).max(30).regex(/^(\w+\s?)*\s*$/).required().label('Make name must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            }).unknown(true),
            model: Joi.object().keys({
                name: Joi.string().min(1).max(30).regex(/^(\w+\s?)*\s*$/).required().label('Model name must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            }).unknown(true),
            engine: Joi.object().keys({
                code: Joi.string().min(3).max(50).required().label('Engine code must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
                year: Joi.number().required().label('Year is required'),
                cylinderCapacity: Joi.number().required().label('Cylinder capacity must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
                fuel: Joi.string().min(3).max(30).regex(/^(\w+\s?)*\s*$/).required().label('Fuel must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
                ps: Joi.number().required().label('PS is required'),
                kw: Joi.number().required().label('KW is required'),
            }).unknown(true),
            body: Joi.string().min(3).max(30).required().label('Body must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            color: Joi.string().min(3).max(30).required().label('Color must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            price: Joi.number().required().label('Price must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            //profit: Joi.number().required().label('Profit must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            //partsPrice: Joi.number().required().label('Part Price must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            //remainingParts: Joi.number().required().label('Remaining Parts must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            description: Joi.string().min(3).max(30).regex(/^(\w+\s?)*\s*$/).required().label('Description must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
        }).unknown(true);
        const result = carSchema.validate(req.body);
        this.nextOrReturn(result, res, next);
    }
}
exports.CarValidator = CarValidator;
