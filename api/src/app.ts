import 'dotenv/config';
import { ConnectionManager } from '@/database';
import { Server } from './server';

async function bootstrap(): Promise<void> {
  const connection = new ConnectionManager();
  await connection.create();

  const { application } = new Server();

  application.listen(3000, () => console.log('Server started '));
}

bootstrap();
