"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableRoutes1670433172496 = void 0;
var _typeorm = require("typeorm");
class CreateTableRoutes1670433172496 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'routes',
      columns: [{
        name: 'rou_id_s',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        primaryKeyConstraintName: 'PK_ROUTES'
      }, {
        name: 'rou_uri_s',
        type: 'varchar',
        length: '60'
      }, {
        name: 'rou_description_s',
        type: 'varchar',
        length: '30'
      }, {
        name: 'rou_method_s',
        type: 'varchar',
        length: '15'
      }, {
        name: 'rou_status_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'rou_created_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'rou_updated_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
    await queryRunner.createForeignKey('routes', new _typeorm.TableForeignKey({
      columnNames: ['rou_status_s'],
      referencedColumnNames: ['sta_id_s'],
      referencedTableName: 'status',
      name: 'FK_ROUTES_STATUS'
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('routes');
  }
}
exports.CreateTableRoutes1670433172496 = CreateTableRoutes1670433172496;