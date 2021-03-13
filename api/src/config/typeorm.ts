import 'dotenv/config';

import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
  type: process.env.TYPEORM_TYPE as any,
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [process.env.TYPEORM_ENTITES as string],
  migrations: [process.env.TYPEORM_MIGRATIONS as string],
  cli: {
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
  },
};

export { connectionOptions };
