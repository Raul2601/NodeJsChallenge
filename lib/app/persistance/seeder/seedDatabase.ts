
import { Document } from 'mongoose';
import { User } from "../schemas/UserSchema";
import { Hobbie } from "../schemas/HobbieSchema";


export class Seeder {

    private Hobbies: Document[] = [];;

    public seed() {
        return new Promise<void>(async (resolve, reject) => {
            await User.deleteMany().exec();
            await Hobbie.deleteMany().exec();

            // User.find().exec().then(async (users) => {
            //     if (users.length == 0) {
            await this.seedHobbies();
            await this.seedUsers();
            //         resolve();
            //     }
            //     else {
            //         reject('Database already seeded');
            //     }
            // })
        })
    }



    private seedUsers() {
        return new Promise<void>(async (resolve, reject) => {
            var userAlex = new User({
                name: 'Alex',
                hobbies: this.Hobbies
            });
            await userAlex.save();

            resolve();
        })
    }

    private seedHobbies() {
        return new Promise<void>((resolve, reject) => {
            const football = new Hobbie({
                passionLevel: "Medium",
                name: "Playing football",
                year: 2014
            });

            football.save()
            this.Hobbies.push(football);

            const codding = new Hobbie({
                passionLevel: "High",
                name: "Coding",
                year: 2018
            })

            codding.save();
            this.Hobbies.push(codding);

            resolve();
        })
    }


}