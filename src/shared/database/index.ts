import 'dotenv/config';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'oracle',
  username: 'gta',
  password: 'gta2018',
  connectString:
    '(DESCRIPTION=(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.0.9)(PORT = 1521))(CONNECT_DATA=(SERVICE_NAME = teste) ))',
  synchronize: false,
  logging: true,
  entities: ['./src/modules/**/entities/*.ts'],
  subscribers: [],
  migrations: ['./src/shared/database/migrations/*.ts'],
});
