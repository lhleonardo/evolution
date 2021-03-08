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
      address: Joi.string(),
      number: Joi.string(),
      cep: Joi.string(),
      city: Joi.string(),
      uf: Joi.string().max(2),
      description: Joi.string(),
    }),
    contact: Joi.object<PatientContactDTO>({
      mail: Joi.string().email(),
      phone: Joi.string().required(),
    }).required(),
  }),
});
