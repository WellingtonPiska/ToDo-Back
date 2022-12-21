"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableApportion1669061984245 = void 0;
var _typeorm = require("typeorm");
class CreateTableApportion1669061984245 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'apportion',
      columns: [{
        name: 'app_id_s',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        primaryKeyConstraintName: 'PK_APPORTION'
      }, {
        name: 'app_costcenter_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'app_apportion_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'app_value_n',
        type: 'integer'
      }, {
        name: 'app_created_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'app_updated_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
    await queryRunner.createForeignKey('apportion', new _typeorm.TableForeignKey({
      columnNames: ['app_costcenter_s'],
      referencedColumnNames: ['cce_id_s'],
      referencedTableName: 'cost_center',
      name: 'FK_APPORTION_COSTCENTER'
    }));
    await queryRunner.createForeignKey('apportion', new _typeorm.TableForeignKey({
      columnNames: ['app_apportion_s'],
      referencedColumnNames: ['cce_id_s'],
      referencedTableName: 'cost_center',
      name: 'FK_APPORTION_APPORTION'
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('apportion');
  }
}
exports.CreateTableApportion1669061984245 = CreateTableApportion1669061984245;