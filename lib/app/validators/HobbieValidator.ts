import Joi = require("joi");
import { BaseValidator } from "./base/BaseValidator";
import { Request, Response, NextFunction } from 'express';

export class HobbieValidator extends BaseValidator {

    constructor() {
        super();
    }

    public Validate(req: Request, res: Response, next: NextFunction) {
        let hobbieSchema = Joi.object().keys({
            name: Joi.string().min(3).max(30).regex(/^(\w+\s?)*\s*$/).required().label('Name must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            passionLevel: Joi.string().min(3).max(30).regex(/^(\w+\s?)*\s*$/).required().label('Name must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            year: Joi.number().required().label('Year must be a number !'),
        }).unknown(true)

        const result = hobbieSchema.validate(req.body);

        this.nextOrReturn(result, res, next);
    }
}