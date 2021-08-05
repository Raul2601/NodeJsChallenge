var ObjectId = require('mongoose').Types.ObjectId;
import { Response, NextFunction } from 'express';
import Joi from "joi";
import JoiObjectId from "joi-objectid";
const myJoiObjectId = JoiObjectId(Joi);

export class BaseValidator {

    public validateId(req, res, next) {
        var schema = Joi.object().keys({
            id: this.idValidator()
        })
        var result = schema.validate({ id: req.params.id });

        this.nextOrReturn(result, res, next);
    }

    protected idValidator(): Joi.SchemaLike | Joi.SchemaLike[] {
        return myJoiObjectId().required().label('Id must be a valid mongo id !');
    }

    protected nextOrReturn(result, res: Response, next: NextFunction) {
        if (result.error == null) {
            next();
        }
        else {
            res.status(422).json({ error: result.error });
            return;
        }
    }
}
