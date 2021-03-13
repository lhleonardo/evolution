import 'dotenv/config';
import { initializeDatabase } from '@/database';
import { Server } from './server';

initializeDatabase().then(() => {
  const { application } = new Server();

  application.listen(3000, () => console.log('Server started '));
});
