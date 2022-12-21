"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableCostCenter1668609723925 = void 0;
var _typeorm = require("typeorm");
class CreateTableCostCenter1668609723925 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'cost_center',
      columns: [{
        name: 'cce_id_s',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        primaryKeyConstraintName: 'PK_COSTCENTER'
      }, {
        name: 'cce_status_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'cce_name_s',
        type: 'varchar',
        length: '30',
        isUnique: true
      }, {
        name: 'cce_apportion_s',
        type: 'char',
        length: '1'
      }, {
        name: 'cce_obs_s',
        type: 'varchar'
      }, {
        name: 'cce_created_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'cce_updated_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
    await queryRunner.createForeignKey('cost_center', new _typeorm.TableForeignKey({
      columnNames: ['cce_status_s'],
      referencedColumnNames: ['sta_id_s'],
      referencedTableName: 'status',
      name: 'FK_COSTCENTER_STATUS'
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('cost_center');
  }
}
exports.CreateTableCostCenter1668609723925 = CreateTableCostCenter1668609723925;