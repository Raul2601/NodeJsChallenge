import * as mongoose from 'mongoose';

const hobbieSchema = new mongoose.Schema({
    passionLevel: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },

});

export const Hobbie = mongoose.model('Hobbie', hobbieSchema);
