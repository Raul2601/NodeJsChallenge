"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const UserSchema_1 = require("../../app/persistance/schemas/UserSchema");
const LocalStrategy = passport_local_1.default.Strategy;
passport_1.default.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    UserSchema_1.User.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(undefined, false, { message: `Email ${email} not found.` });
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                return done(err);
            }
            if (isMatch) {
                return done(undefined, user);
            }
            return done(undefined, false, { message: "Invalid email or password." });
        });
    });
}));
passport_1.default.serializeUser((req, user, done) => {
    done(undefined, user);
});
passport_1.default.deserializeUser((id, done) => {
    UserSchema_1.User.findById(id, (err, user) => {
        done(err, user.id);
    });
});
