"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableUserCostCenter1669142969955 = void 0;
var _typeorm = require("typeorm");
class CreateTableUserCostCenter1669142969955 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'user_costcenter',
      columns: [{
        name: 'ucc_id_s',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        primaryKeyConstraintName: 'PK_USER_COSTCENTER'
      }, {
        name: 'ucc_user_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'ucc_costcenter_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'ucc_created_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'ucc_updated_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
    await queryRunner.createForeignKey('user_costcenter', new _typeorm.TableForeignKey({
      columnNames: ['ucc_user_s'],
      referencedColumnNames: ['use_id_s'],
      referencedTableName: 'user',
      name: 'FK_USER_COSTCENTER_USER'
    }));
    await queryRunner.createForeignKey('user_costcenter', new _typeorm.TableForeignKey({
      columnNames: ['ucc_costcenter_s'],
      referencedColumnNames: ['cce_id_s'],
      referencedTableName: 'cost_center',
      name: 'FK_USER_COSTCENTER_COSTCENTER'
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('user_costcenter');
  }
}
exports.CreateTableUserCostCenter1669142969955 = CreateTableUserCostCenter1669142969955;