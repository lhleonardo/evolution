import { Router } from 'express';
import { CreatePatientController } from '../controllers/patients/create-patient/create-patient.controller';
import { createPatientValidator } from '../controllers/patients/create-patient/create-patient.validator';
import { convertToExpressRoute } from '../utils/http/http-express-adapter';

const createPatientController = new CreatePatientController();

const patientsRouter = Router();

patientsRouter.post('/', createPatientValidator, convertToExpressRoute(createPatientController));

export { patientsRouter };
