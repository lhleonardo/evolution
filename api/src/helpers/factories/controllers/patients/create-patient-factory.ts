import { CreatePatientController } from '@/controllers/patients/create-patient/create-patient.controller';
import { TypeOrmPatientRepository } from '@/repositories/patients/typeorm';
import { CreatePatientService } from '@/services/patients/create-patient';
import { HttpController } from '@/utils/http/http-controller';

export function makeCreatePatientController(): HttpController<any, any> {
  console.log('Factory');
  const repository = new TypeOrmPatientRepository();
  const service = new CreatePatientService(repository);
  return new CreatePatientController(service);
}
