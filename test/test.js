var assert = require('assert');

var HobbieService = require('../dist/app/services/HobbieService');


describe('Add hobbies tests', function () {
    describe('Add a new hobbie into database', function () {
        it('Should add a new hobbie into database', async function (done) {


            const football = new Hobbie({
                passionLevel: "High",
                name: "Listening to music",
                year: 2017
            });

            let hobbieService = new HobbieService();

            await hobbieService.create(football, async (err, expectedHobbie) => {
                if (err) {
                    done(err);
                }
                else {

                    await hobbieService.findById(expectedHobbie._id, (err, actualHobbie) => {
                        if (err) {
                            done(err);
                        }
                        else {
                            var isValid =
                                expectedHobbie.name === actualHobbie.name &&
                                expectedHobbie.passionLevel === actualHobbie.passionLevel &&
                                expectedHobbie.year === actualHobbie.year;

                            assert.equal(isValid, true);
                            done();
                        }

                    }).catch((err) => {
                        done(err);
                    });

                }
            }).catch((err) => {
                done(err);
            });
        });
    });
});