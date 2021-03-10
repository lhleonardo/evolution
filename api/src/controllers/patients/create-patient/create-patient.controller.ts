import { Patient } from '@/models/patients';
import { CreatePatientService } from '@/services/patients/create-patient';
import { HttpController } from '@/utils/http/http-controller';
import { badRequest, ok } from '@/utils/http/http-helper';
import { HttpRequest, HttpResponse } from '@/utils/http/http-protocols';
import { CreatePatientDTO } from './create-patient.dto';

export class CreatePatientController
implements HttpController<CreatePatientDTO, Patient | Error> {
  private readonly service: CreatePatientService;

  constructor(service: CreatePatientService) {
    this.service = service;
  }

  public async handle(
    request: HttpRequest<CreatePatientDTO>,
  ): Promise<HttpResponse<Patient | Error>> {
    const patientData = request.body;

    if (!patientData) {
      return badRequest(new Error('Precisa receber os dados do paciente'));
    }

    const patient = await this.service.execute(patientData);
    return ok(patient);
  }
}
