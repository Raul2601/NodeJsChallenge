"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seeder = void 0;
const UserSchema_1 = require("../schemas/UserSchema");
const HobbieSchema_1 = require("../schemas/HobbieSchema");
class Seeder {
    constructor() {
        this.Hobbies = [];
    }
    ;
    seed() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield UserSchema_1.User.deleteMany().exec();
            yield HobbieSchema_1.Hobbie.deleteMany().exec();
            // User.find().exec().then(async (users) => {
            //     if (users.length == 0) {
            yield this.seedHobbies();
            yield this.seedUsers();
            //         resolve();
            //     }
            //     else {
            //         reject('Database already seeded');
            //     }
            // })
        }));
    }
    seedUsers() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var userAlex = new UserSchema_1.User({
                name: 'Alex',
                hobbies: this.Hobbies
            });
            yield userAlex.save();
            resolve();
        }));
    }
    seedHobbies() {
        return new Promise((resolve, reject) => {
            const football = new HobbieSchema_1.Hobbie({
                passionLevel: "Medium",
                name: "Playing football",
                year: 2014
            });
            football.save();
            this.Hobbies.push(football);
            const codding = new HobbieSchema_1.Hobbie({
                passionLevel: "High",
                name: "Coding",
                year: 2018
            });
            codding.save();
            this.Hobbies.push(codding);
            resolve();
        });
    }
}
exports.Seeder = Seeder;
