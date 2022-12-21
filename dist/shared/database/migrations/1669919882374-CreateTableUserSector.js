"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableUserSector1669919882374 = void 0;
var _typeorm = require("typeorm");
class CreateTableUserSector1669919882374 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'user_sector',
      columns: [{
        name: 'use_id_s',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        primaryKeyConstraintName: 'PK_USER_USER_SECTOR'
      }, {
        name: 'use_user_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'use_costcenter_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'use_created_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'use_updated_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
    await queryRunner.createForeignKey('user_sector', new _typeorm.TableForeignKey({
      columnNames: ['use_user_s'],
      referencedColumnNames: ['use_id_s'],
      referencedTableName: 'user',
      name: 'FK_USER_SECTOR_USER'
    }));
    await queryRunner.createForeignKey('user_sector', new _typeorm.TableForeignKey({
      columnNames: ['use_costcenter_s'],
      referencedColumnNames: ['cce_id_s'],
      referencedTableName: 'cost_center',
      name: 'FK_USER_SECTOR_COSTCENTER'
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('user_sector');
  }
}
exports.CreateTableUserSector1669919882374 = CreateTableUserSector1669919882374;