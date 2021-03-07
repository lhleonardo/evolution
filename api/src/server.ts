import "reflect-metadata";
import express, { Express } from "express";
import { routes } from "./routes";

export class Server {
  private readonly app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.json());
  }

  private routes() {
    console.log("Registrando rotas");
    this.app.use(routes);
  }

  get application(): Express {
    return this.app;
  }
}
