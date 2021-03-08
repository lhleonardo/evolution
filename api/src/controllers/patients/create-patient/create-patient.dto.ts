export interface PatientAddressDTO {
  address: string;
  cep: string;
  number: string;
  description: string;
  city: string;
  uf: string;
}

export interface PatientContactDTO {
  phone: string;
  mail: string;
}
export interface CreatePatientDTO {
  name: string;
  birthDate: Date;
  sex: 'm' | 'f';
  countryOfBirth: string;
  ethnicity: string;
  bloodType: string;
  address: PatientAddressDTO,
  contact: PatientContactDTO,
}
