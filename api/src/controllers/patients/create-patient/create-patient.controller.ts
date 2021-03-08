import { HttpController } from '../../../utils/http/http-controller';
import { ok } from '../../../utils/http/http-helper';
import { HttpRequest, HttpResponse } from '../../../utils/http/http-protocols';
import { CreatePatientDTO } from './create-patient.dto';

export class CreatePatientController
implements HttpController<CreatePatientDTO, string> {
  public async handle(
    request: HttpRequest<CreatePatientDTO>,
  ): Promise<HttpResponse<string>> {
    return ok('Hello Patient');
  }
}
