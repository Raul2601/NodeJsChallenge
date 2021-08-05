"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const environment_1 = __importDefault(require("../environment"));
const passport_1 = __importDefault(require("passport"));
const compression_1 = __importDefault(require("compression"));
const express_session_1 = __importDefault(require("express-session"));
// routes
const common_routes_1 = require("./routes/common_routes");
const user_routes_1 = require("./routes/user_routes");
const responseTimeMiddleware_1 = require("./responseTime/responseTimeMiddleware");
const hobbie_routes_1 = require("./routes/hobbie_routes");
const seedDatabase_1 = require("../app/persistance/seeder/seedDatabase");
class App {
    constructor() {
        this.mongoUrl = 'mongodb://localhost/' + environment_1.default.getDBName();
        this.responseTime = new responseTimeMiddleware_1.ResponseTime();
        // routes
        this.userRoutes = new user_routes_1.UserRoutes();
        this.hobbbieRoutes = new hobbie_routes_1.HobbieRoutes();
        this.commonRoutes = new common_routes_1.CommonRoutes();
        this.databaseSeeder = new seedDatabase_1.Seeder();
        this.app = express_1.default();
        this.config();
        this.mongoSetup();
        this.databaseSeeder.seed();
        this.userRoutes.route(this.app);
        this.hobbbieRoutes.route(this.app);
        // last one always
        this.commonRoutes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(body_parser_1.default.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        // log response tine
        this.app.use(this.responseTime.LogResponseTime);
        // cors
        this.app.use(cors_1.default({ credentials: true, origin: 'http://localhost:4200' }));
        this.app.use(compression_1.default());
        this.app.use(passport_1.default.initialize());
        this.app.use(passport_1.default.session());
        this.app.use(express_session_1.default({
            resave: true,
            saveUninitialized: true,
            secret: 'The secret',
            cookie: { secure: true }
        }));
    }
    mongoSetup() {
        mongoose_1.default.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    }
}
exports.default = new App().app;
