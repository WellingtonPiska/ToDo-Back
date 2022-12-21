"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableDeviceType1669915256581 = void 0;
var _typeorm = require("typeorm");
class CreateTableDeviceType1669915256581 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'device_type',
      columns: [{
        name: 'dty_id_s',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        primaryKeyConstraintName: 'PK_DEVICETYPE'
      }, {
        name: 'dty_status_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'dty_name_s',
        type: 'varchar',
        length: '30',
        isUnique: true
      }, {
        name: 'dty_obs_s',
        type: 'varchar',
        length: '30',
        isNullable: true
      }, {
        name: 'dty_created_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'dty_updated_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
    await queryRunner.createForeignKey('device_type', new _typeorm.TableForeignKey({
      columnNames: ['dty_status_s'],
      referencedColumnNames: ['sta_id_s'],
      referencedTableName: 'status',
      name: 'FK_DEVICETYPE_STATUS'
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('device_type');
  }
}
exports.CreateTableDeviceType1669915256581 = CreateTableDeviceType1669915256581;