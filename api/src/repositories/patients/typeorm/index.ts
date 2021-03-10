import { Patient } from '@/models/patients';
import { getRepository, Repository } from 'typeorm';
import { PatientRepository } from '../patient-repository';
import { PatientDTO } from '../patient-repository.dto';

export class TypeOrmPatientRepository implements PatientRepository {
  private readonly repository: Repository<Patient>

  constructor() {
    this.repository = getRepository(Patient);
  }

  async save(data: PatientDTO): Promise<Patient> {
    const patient = this.repository.create(data);

    await this.repository.save(patient);

    return patient;
  }
}
