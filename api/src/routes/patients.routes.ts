import { CreatePatientController } from "controllers/patients/create-patient/create-patient.controller";
import { Router } from "express";
import { convertToExpressRoute } from "utils/http/http-express-adapter";

const createPatientController = new CreatePatientController();

const patientsRouter = Router();

patientsRouter.get("/", convertToExpressRoute(createPatientController));

export { patientsRouter }