import 'dotenv/config';
import { connection } from '@/database';
import { Server } from './server';

async function bootstrap(): Promise<void> {
  await connection.create();

  const { application } = new Server();

  application.listen(3000, () => console.log('Server started '));
}

bootstrap();
