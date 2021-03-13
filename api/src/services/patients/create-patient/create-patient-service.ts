import { Patient } from '@/models/patients';
import { PatientRepository } from '@/repositories/patients/patient-repository';
import { Service } from '@/utils/service/service';

export interface CreatePatientProps {
  name: string;
  birthDate: Date;
  sex: 'm' | 'f';
  countryOfBirth: string;
  ethnicity: string;
  bloodType: string;
  address: {
    location: string;
    cep: string;
    number: string;
    description: string;
    city: string;
    uf: string;
  },
  contact: {
    phone: string;
    mail: string;
  },
}

export class CreatePatientService implements Service<CreatePatientProps, Patient> {
  private readonly patientRepository: PatientRepository;

  constructor(patientRepository: PatientRepository) {
    this.patientRepository = patientRepository;
  }

  public execute(params: CreatePatientProps): Promise<Patient> {
    return this.patientRepository.save(params);
  }
}
