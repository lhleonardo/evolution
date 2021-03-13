import request from 'supertest';
import { ConnectionManager } from '@/database';
import { Server } from '@/server';
import { Application } from 'express';

const connection = new ConnectionManager();
let application: Application;

describe('Patient routes', () => {
  beforeAll(async () => {
    console.log(`Node env: ${process.env.NODE_ENV}`);
    await connection.create();
    application = new Server().application;
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    await connection.clear();
  });

  test('', async () => {
    await request(application).post('/patients').send({}).expect(200);
  });
});
