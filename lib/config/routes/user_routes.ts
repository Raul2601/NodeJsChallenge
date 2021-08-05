import { UserValidator } from '../../app/validators/UserValidator';
import { Application, Request, Response, NextFunction } from 'express';
import { UserController } from '../../controllers/UserController';

export class UserRoutes {

    private user_controller: UserController = new UserController();
    private userValidator: UserValidator = new UserValidator();

    public route(app: Application) {

        app.get('/api/users', (req: Request, res: Response) => {
            this.user_controller.getAll(req, res);
        });

        app.post('/api/user',
            (req: Request, res: Response, next: NextFunction) => {
                this.userValidator.Validate(req, res, next);
            },
            (req: Request, res: Response) => {
                this.user_controller.create(req, res);
            });

        app.get('/api/user/:id',
            (req: Request, res: Response, next: NextFunction) => {
                this.userValidator.validateId(req, res, next);
            },
            (req: Request, res: Response) => {
                this.user_controller.findById(req, res);
            });

        app.put('/api/user/:id',
            (req: Request, res: Response, next: NextFunction) => {
                this.userValidator.validateId(req, res, next);
            },
            (req: Request, res: Response, next: NextFunction) => {
                this.userValidator.Validate(req, res, next);
            },
            (req: Request, res: Response) => {
                this.user_controller.update(req, res);
            });

        app.delete('/api/user/:id',
            (req: Request, res: Response, next: NextFunction) => {
                this.userValidator.validateId(req, res, next);
            },
            (req: Request, res: Response) => {
                this.user_controller.delete(req, res);
            });
    }
}