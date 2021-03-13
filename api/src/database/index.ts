import { Connection, createConnection } from 'typeorm';

export function initializeDatabase(): Promise<Connection> {
  return createConnection();
}
