import { BaseEntity } from "./base/BaseEntity";
import { IHobbie } from "./IHobbie";

export interface IUser extends BaseEntity {
    name: string;
    hobbies: [IHobbie['_id']],
}
