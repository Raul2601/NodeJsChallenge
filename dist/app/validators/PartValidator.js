"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartValidator = void 0;
const Joi = require("joi");
const BaseValidator_1 = require("./base/BaseValidator");
class PartValidator extends BaseValidator_1.BaseValidator {
    constructor() {
        super();
    }
    Validate(req, res, next) {
        let partSchema = Joi.object().keys({
            name: Joi.string().min(3).max(30).regex(/^(\w+\s?)*\s*$/).required().label('Name must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            quantity: Joi.number().required().label('Quantity must be a number !'),
            price: Joi.number().required().label('Price must be a number !'),
            location: Joi.string().min(3).max(30).regex(/^(\w+\s?)*\s*$/).required().label('Location must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            description: Joi.string().min(3).max(30).regex(/^(\w+\s?)*\s*$/).required().label('Description must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            //imageLink: Joi.string().min(3).required().label('Image Link must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            //state: Joi.string().min(3).max(30).regex(/^(\w+\s?)*\s*$/).required().label('State must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            car: this.idValidator()
        }).unknown(true);
        const result = partSchema.validate(req.body);
        this.nextOrReturn(result, res, next);
    }
}
exports.PartValidator = PartValidator;
