import 'dotenv/config';
import 'reflect-metadata';
import { app } from './app';
import { dataSource } from './database';

dataSource.initialize().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT || 3000}!`);
  });
});
