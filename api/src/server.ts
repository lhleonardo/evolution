import 'reflect-metadata';
import express, { Express } from 'express';
import { errors } from 'celebrate';
import { routes } from './routes';

export class Server {
  private readonly app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.registerAfterConfigure();
  }

  private middlewares() {
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(routes);
  }

  private registerAfterConfigure() {
    this.app.use(errors());
  }

  get application(): Express {
    return this.app;
  }
}
