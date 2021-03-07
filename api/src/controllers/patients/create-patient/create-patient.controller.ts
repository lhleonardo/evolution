import { HttpController } from "utils/http/httpController";
import { HttpRequest, HttpResponse } from "utils/http/httpProtocols";
import { CreatePatientDTO } from "./create-patient.dto";

export class CreatePatientController implements HttpController<CreatePatientDTO, any> {

  public async handle(request: HttpRequest<CreatePatientDTO>): Promise<HttpResponse<any>> {
    throw new Error("Method not implemented.");
  }

}