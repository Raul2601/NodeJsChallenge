import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';
import environment from "../environment";
import passport from "passport";
import compression from "compression";
import session from "express-session";

// routes
import { CommonRoutes } from "./routes/common_routes";
import { UserRoutes } from "./routes/user_routes";
import { ResponseTime } from "./responseTime/responseTimeMiddleware";
import { HobbieRoutes } from "./routes/hobbie_routes";
import { Seeder } from "../app/persistance/seeder/seedDatabase";

class App {
    public app: express.Application;
    public mongoUrl: string = 'mongodb://localhost/' + environment.getDBName();

    private responseTime: ResponseTime = new ResponseTime();
    // routes
    private userRoutes: UserRoutes = new UserRoutes();
    private hobbbieRoutes: HobbieRoutes = new HobbieRoutes();

    private commonRoutes: CommonRoutes = new CommonRoutes();
    private databaseSeeder: Seeder = new Seeder();

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();

        this.databaseSeeder.seed();

        this.userRoutes.route(this.app);
        this.hobbbieRoutes.route(this.app);

        // last one always
        this.commonRoutes.route(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // log response tine
        this.app.use(this.responseTime.LogResponseTime);
        // cors
        this.app.use(cors({ credentials: true, origin: 'http://localhost:4200' }));

        this.app.use(compression());
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        this.app.use(session({
            resave: true,
            saveUninitialized: true,
            secret: 'The secret',
            cookie: { secure: true }
        }));
    }

    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    }
}
export default new App().app;