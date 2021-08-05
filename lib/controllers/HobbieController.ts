import { HobbieService } from '../app/services/HobbieService';
import { IHobbie } from '../app/domain/entities/interfaces/IHobbie';
import { Hobbie } from '../app/persistance/schemas/HobbieSchema';
import { BaseController } from './interfaces/base/BaseController';

export class HobbieController extends BaseController<IHobbie>{

    constructor() {
        super(Hobbie);
    }
}