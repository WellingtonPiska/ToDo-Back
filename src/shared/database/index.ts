import 'dotenv/config';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'mysql',
  username: 'todo_do',
  password: 'a9!qj#6bEgan*5',
  database: 'todo_do',
  host: 'todo_do.mysql.dbaas.com.br',
  synchronize: false,
  logging: false,
  extra: {
    autoCommit: true,
  },
  entities: ['./src/modules/**/entities/*.{js,ts}'],
  subscribers: [],
  migrations: ['./src/shared/database/migrations/*.{js,ts}'],
});
