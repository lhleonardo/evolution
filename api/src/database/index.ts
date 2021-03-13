import {
  createConnection, getConnection,
} from 'typeorm';
import { connectionOptions } from '../config/typeorm';

class ConnectionManager {
  async create(): Promise<void> {
    await createConnection(connectionOptions);
  }

  async close(): Promise<void> {
    await getConnection().close();
  }

  async clear(): Promise<void> {
    const currentConnection = getConnection();
    const entities = currentConnection.entityMetadatas;

    entities.forEach(async (entity) => {
      const repository = currentConnection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    });
  }
}

export { ConnectionManager };
