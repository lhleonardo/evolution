import { createPatientValidator } from '@/controllers/patients/create-patient/create-patient.validator';
import { makeCreatePatientController } from '@/helpers/factories/controllers/patients/create-patient-factory';
import { convertToExpressRoute } from '@/utils/http/http-express-adapter';
import { Router } from 'express';

const createPatientController = makeCreatePatientController;

const patientsRouter = Router();

patientsRouter.post('/', createPatientValidator, convertToExpressRoute(createPatientController);

export { patientsRouter };
