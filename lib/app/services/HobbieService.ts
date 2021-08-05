import { BaseService } from './interfaces/base/BaseService';
import { IHobbie } from '../domain/entities/interfaces/IHobbie';
import { Hobbie } from '../persistance/schemas/HobbieSchema';

export class HobbieService extends BaseService<IHobbie> {
    constructor() {
        super(Hobbie);
    }
}