"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableGroupMenu1670440269752 = void 0;
var _typeorm = require("typeorm");
class CreateTableGroupMenu1670440269752 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'group_menu',
      columns: [{
        name: 'gme_id_s',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        primaryKeyConstraintName: 'PK_GROUPMENU'
      }, {
        name: 'gme_name_s',
        type: 'varchar',
        length: '30',
        isUnique: true
      }, {
        name: 'gme_status_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'gme_description_s',
        type: 'varchar',
        length: '30'
      }, {
        name: 'gme_created_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'gme_updated_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
    await queryRunner.createForeignKey('group_menu', new _typeorm.TableForeignKey({
      columnNames: ['gme_status_s'],
      referencedColumnNames: ['sta_id_s'],
      referencedTableName: 'status',
      name: 'FK_GROUPMENU_STATUS'
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('group_menu');
  }
}
exports.CreateTableGroupMenu1670440269752 = CreateTableGroupMenu1670440269752;