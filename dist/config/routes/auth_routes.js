"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
//lib/routes/test_routes.ts
const AuthController_1 = require("../../controllers/AuthController");
class AuthRoutes {
    constructor() {
        this.authController = new AuthController_1.AuthController();
    }
    route(app) {
        app.post('/api/register', (req, res, next) => {
            this.authController.register(req, res, next);
        });
        app.post('/api/login', (req, res, next) => {
            this.authController.login(req, res, next);
        });
        app.get('/api/logout', (req, res) => {
            this.authController.logout(req, res);
        });
    }
}
exports.AuthRoutes = AuthRoutes;
