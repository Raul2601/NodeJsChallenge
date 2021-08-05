import { HobbieValidator } from '../../app/validators/HobbieValidator';
import { HobbieController } from '../../controllers/HobbieController';
import { Application, Request, Response, NextFunction } from 'express';

export class HobbieRoutes {

    private hobbie_controller: HobbieController = new HobbieController();
    private hobbieValidator: HobbieValidator = new HobbieValidator();

    public route(app: Application) {

        app.get('/api/hobbies', (req: Request, res: Response) => {
            this.hobbie_controller.getAll(req, res);
        });

        app.post('/api/hobbie',
            (req: Request, res: Response, next: NextFunction) => {
                this.hobbieValidator.Validate(req, res, next);
            },
            (req: Request, res: Response) => {
                this.hobbie_controller.create(req, res);
            });

        app.get('/api/hobbie/:id',
            (req: Request, res: Response, next: NextFunction) => {
                this.hobbieValidator.validateId(req, res, next);
            },
            (req: Request, res: Response) => {
                this.hobbie_controller.findById(req, res);
            });

        app.put('/api/hobbie/:id',
            (req: Request, res: Response, next: NextFunction) => {
                this.hobbieValidator.validateId(req, res, next);
            },
            (req: Request, res: Response, next: NextFunction) => {
                this.hobbieValidator.Validate(req, res, next);
            },
            (req: Request, res: Response) => {
                this.hobbie_controller.update(req, res);
            });

        app.delete('/api/hobbie/:id',
            (req: Request, res: Response, next: NextFunction) => {
                this.hobbieValidator.validateId(req, res, next);
            },
            (req: Request, res: Response) => {
                this.hobbie_controller.delete(req, res);
            });
    }
}