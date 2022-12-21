"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableModel1670346604160 = void 0;
var _typeorm = require("typeorm");
class CreateTableModel1670346604160 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'model',
      columns: [{
        name: 'mod_id_s',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        primaryKeyConstraintName: 'PK_MODEL'
      }, {
        name: 'mod_status_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'mod_devicetype_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'mod_company_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'mod_name_s',
        type: 'varchar',
        length: '30',
        isUnique: true
      }, {
        name: 'mod_description_s',
        type: 'varchar',
        length: '60',
        isNullable: true
      }, {
        name: 'mod_created_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'mod_updated_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
    await queryRunner.createForeignKey('model', new _typeorm.TableForeignKey({
      columnNames: ['mod_status_s'],
      referencedColumnNames: ['sta_id_s'],
      referencedTableName: 'status',
      name: 'FK_MODEL_STATUS'
    }));
    await queryRunner.createForeignKey('model', new _typeorm.TableForeignKey({
      columnNames: ['mod_devicetype_s'],
      referencedColumnNames: ['dty_id_s'],
      referencedTableName: 'device_type',
      name: 'FK_MODEL_DEVICE_TYPE'
    }));
    await queryRunner.createForeignKey('model', new _typeorm.TableForeignKey({
      columnNames: ['mod_company_s'],
      referencedColumnNames: ['com_id_s'],
      referencedTableName: 'company',
      name: 'FK_MODEL_COMAPANY'
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('model');
  }
}
exports.CreateTableModel1670346604160 = CreateTableModel1670346604160;