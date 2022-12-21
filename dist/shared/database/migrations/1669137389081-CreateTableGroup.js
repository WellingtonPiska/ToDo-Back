"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableGroup1669137389081 = void 0;
var _typeorm = require("typeorm");
class CreateTableGroup1669137389081 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'group',
      columns: [{
        name: 'gro_id_s',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        primaryKeyConstraintName: 'PK_GROUP'
      }, {
        name: 'gro_status_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'gro_name_s',
        type: 'varchar',
        length: '45',
        isUnique: true
      }, {
        name: 'gro_type_s',
        type: 'char',
        length: '1'
      }, {
        name: 'gro_mail_s',
        type: 'varchar',
        length: '100',
        isNullable: true
      }, {
        name: 'gro_dn_s',
        type: 'varchar',
        length: '150'
      }, {
        name: 'gro_sid_s',
        type: 'varchar',
        length: '50'
      }, {
        name: 'gro_sync_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'gro_created_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'gro_updated_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
    await queryRunner.createForeignKey('group', new _typeorm.TableForeignKey({
      columnNames: ['gro_status_s'],
      referencedColumnNames: ['sta_id_s'],
      referencedTableName: 'status',
      name: 'FK_GROUP_STATUS'
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('group');
  }
}
exports.CreateTableGroup1669137389081 = CreateTableGroup1669137389081;