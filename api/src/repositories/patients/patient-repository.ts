import { Patient } from '@/models/patients';
import { PatientDTO } from './patient-repository.dto';

export interface PatientRepository {
  save(data: PatientDTO): Promise<Patient>
}
