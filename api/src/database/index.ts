import { createConnection, getConnection } from 'typeorm';

class ConnectionManager {
  private readonly connectionName: string

  constructor(connectionName = 'default') {
    this.connectionName = connectionName;
  }

  async create(): Promise<void> {
    await createConnection(this.connectionName);
  }

  async close(): Promise<void> {
    await getConnection(this.connectionName).close();
  }

  async clear(): Promise<void> {
    const currentConnection = getConnection(this.connectionName);
    const entities = currentConnection.entityMetadatas;

    entities.forEach(async (entity) => {
      const repository = currentConnection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    });
  }
}

export { ConnectionManager };
