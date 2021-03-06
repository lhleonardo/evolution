import { CreatePatientService } from "./CreatePatientService";

interface SutTypes {
  sut: CreatePatientService;
}

const makeSut: SutTypes = () => ({
  sut: new CreatePatientService(),
});

describe("Create Patient", () => {
  test("Deve criar um paciente", () => { });
});
