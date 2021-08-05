import { IHobbie } from "./interfaces/IHobbie";

export class HobbieModel {
    private Hobbie: IHobbie;

    constructor(model: IHobbie) {
        this.Hobbie = model;
    }
}

Object.seal(HobbieModel);