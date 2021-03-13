import { ConnectionManager } from '@/database';

const connection = new ConnectionManager('test');

describe('Patient routes', () => {
  beforeAll(async () => {
    await connection.create();
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    await connection.clear();
  });

  test('', () => {});
});
