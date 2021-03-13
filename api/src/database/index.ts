import { createConnection, getConnection } from 'typeorm';

const connection = {
  async create(): Promise<void> {
    await createConnection();
  },

  async close(): Promise<void> {
    await getConnection().close();
  },

  async clear(): Promise<void> {
    const currentConnection = getConnection();
    const entities = currentConnection.entityMetadatas;

    entities.forEach(async (entity) => {
      const repository = currentConnection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    });
  },
};

export { connection };
