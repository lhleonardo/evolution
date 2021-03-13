import { CreatePatientController } from '@/controllers/patients/create-patient/create-patient.controller';
import { TypeOrmPatientRepository } from '@/repositories/patients/typeorm';
import { CreatePatientService } from '@/services/patients/create-patient';

export function makeCreatePatientController(): CreatePatientController {
  const repository = new TypeOrmPatientRepository();
  const service = new CreatePatientService(repository);
  return new CreatePatientController(service);
}
