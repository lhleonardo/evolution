import { ConnectionManager } from '@/database';
import { Server } from '@/server';
import { Application } from 'express';
import request from 'supertest';

const connection = new ConnectionManager();

describe('Patient routes', () => {
  let application: Application;

  beforeAll(async () => {
    await connection.create();
    application = new Server().application;
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    await connection.clear();
  });

  test('Should create a new patient', async () => {
    await request(application).post('/patients').send({
      name: 'Leonardo Braz',
      birthDate: '1999-02-05',
      sex: 'M',
      bloodType: 'O+',
      ethnicity: 'pardo',
      countryOfBirth: 'Brasil',
      address: {
        location: 'Rua Cristiano de Souza',
        number: '14',
        cep: '37200466',
        city: 'Lavras',
        uf: 'MG',
        description: 'Rua em frente ao jeito caseiro',
      },
      contact: {
        mail: 'lhleonardo@hotmail.com',
        phone: '35999999999',
      },
    }).expect(201);
  });
});
