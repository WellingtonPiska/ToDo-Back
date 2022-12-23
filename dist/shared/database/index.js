"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataSource = void 0;
require("dotenv/config");
var _typeorm = require("typeorm");
const dataSource = new _typeorm.DataSource({
  type: 'oracle',
  username: 'gta',
  password: 'gta2018',
  connectString: '(DESCRIPTION=(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.0.9)(PORT = 1521))(CONNECT_DATA=(SERVICE_NAME = teste) ))',
  //'(DESCRIPTION=(ADDRESS=(PROTOCOL = TCP)(HOST = 192.168.0.7)(PORT = 1521))(CONNECT_DATA=(SERVICE_NAME = orcl) ))',
  synchronize: false,
  logging: false,
  extra: {
    autoCommit: true
  },
  entities: ['./src/modules/**/entities/*.{js,ts}'],
  subscribers: [],
  migrations: ['./src/shared/database/migrations/*.{js,ts}']
});
exports.dataSource = dataSource;