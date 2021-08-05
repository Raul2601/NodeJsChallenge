import { BaseEntity } from "./base/BaseEntity";

export interface IHobbie extends BaseEntity {
    passionLevel: String,
    name: String,
    year: Number,
}