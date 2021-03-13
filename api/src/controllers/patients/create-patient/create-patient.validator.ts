import { celebrate, Joi, Segments } from 'celebrate';
import { CreatePatientDTO, PatientAddressDTO, PatientContactDTO } from './create-patient.dto';

export const createPatientValidator = celebrate({
  [Segments.BODY]: Joi.object<CreatePatientDTO>({
    name: Joi.string().required(),
    birthDate: Joi.date().iso().required(),
    sex: Joi.string().max(1).lowercase().equal('m', 'f')
      .required(),
    bloodType: Joi.string().required(),
    ethnicity: Joi.string(),
    countryOfBirth: Joi.string(),
    address: Joi.object<PatientAddressDTO>({
      location: Joi.string().required(),
      number: Joi.string().required(),
      cep: Joi.string().required(),
      city: Joi.string().required(),
      uf: Joi.string().max(2).required(),
      description: Joi.string(),
    }).required(),
    contact: Joi.object<PatientContactDTO>({
      mail: Joi.string().email().required(),
      phone: Joi.string().required(),
    }).required(),
  }),
});
