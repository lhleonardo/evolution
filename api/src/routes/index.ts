import { Router } from 'express';
import { registerPatientsRouter } from './patients/patients.routes';

export function registerRoutes(): Router {
  const routes = Router();
  routes.use('/patients', registerPatientsRouter());
  return routes;
}
