import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hobbies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hobbie',
        default: null
    }],
});

export const User = mongoose.model("User", userSchema);