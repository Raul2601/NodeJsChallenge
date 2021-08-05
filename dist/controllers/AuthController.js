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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const passport_1 = __importDefault(require("passport"));
const express_validator_1 = require("express-validator");
const UserSchema_1 = require("../app/persistance/schemas/UserSchema");
require("../config/passport/passport");
class AuthController {
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield express_validator_1.check("email", "Email is not valid").isEmail().run(req);
            yield express_validator_1.check("password", "Password cannot be blank").isLength({ min: 1 }).run(req);
            yield express_validator_1.sanitize("email").normalizeEmail({ gmail_remove_dots: false }).run(req);
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                // req.flash("errors", errors.array());
                return res.redirect("/login");
            }
            passport_1.default.authenticate("local", (err, user, info) => {
                if (err) {
                    return next(err);
                }
                if (!user) {
                    //   req.flash("errors", { msg: info.message });
                    return res.redirect("/login");
                }
                req.logIn(user, (err) => {
                    if (err) {
                        return next(err);
                    }
                    //    req.flash("success", { msg: "Success! You are logged in." });
                    //res.redirect("/");
                    res.status(200).json({ message: "Logged in successfully" });
                });
            })(req, res, next);
        });
    }
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield express_validator_1.check("email", "Email is not valid").isEmail().run(req);
            yield express_validator_1.check("password", "Password must be at least 4 characters long").isLength({ min: 4 }).run(req);
            //await check("confirmPassword", "Passwords do not match").equals(req.body.password).run(req);
            yield express_validator_1.sanitize("email").normalizeEmail({ gmail_remove_dots: false }).run(req);
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                //req.flash("errors", errors.array());
                return res.redirect("/signup");
            }
            const user = new UserSchema_1.User({
                email: req.body.email,
                password: req.body.password
            });
            UserSchema_1.User.findOne({ email: req.body.email }, (err, existingUser) => {
                if (err) {
                    return next(err);
                }
                if (existingUser) {
                    //req.flash("errors", { msg: "Account with that email address already exists." });
                    return res.redirect("/signup");
                }
                user.save((err) => {
                    if (err) {
                        return next(err);
                    }
                    req.logIn(user, (err) => {
                        if (err) {
                            return next(err);
                        }
                        //res.redirect("/");
                        res.status(200).json({ message: "Logged in successfully" });
                    });
                });
            });
        });
    }
    logout(req, res) {
        req.logout();
        //res.redirect("/");
        res.status(200).json({ message: "Logged in successfully" });
    }
}
exports.AuthController = AuthController;
